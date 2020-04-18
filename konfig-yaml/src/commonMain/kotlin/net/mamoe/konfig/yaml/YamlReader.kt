package net.mamoe.konfig.yaml

/*
@OptIn(InternalSerializationApi::class)
internal class YamlReader(
    input: CharInputStream
) : CharInputStream by input {
    var currentToken: IndentedToken = IndentedToken(0)

    /**
     * null means EOF
     */
    private fun nextNotSpaceOrNull(): IndentedToken? {
        if (currentToken.isOverRead) {
            println(" :overRead:$currentToken")
            return currentToken.apply { isOverRead = false }
        }
        var spaceCount = 0
        readAhead {
            if (it != ' ') return currentToken.apply {
                _indentSpaceCount = spaceCount
                _token = it
            } else spaceCount++
        }
        return null
    }

    class IndentedToken(
        internal var _indentSpaceCount: Int
    ) {
        override fun toString(): String {
            return "Token($token, indent=$indentSpaceCount, isOverRead=$isOverRead)"
        }

        /**
         * `null`(EOF) or [TokenClass] or [Char]
         */
        internal var _token: Any? = null
            set(value) {
                check(value == null || value is Char || value is TokenClass) { "internal error: illegal token: $value" }
                field = value
            }

        val indentSpaceCount: Int get() = _indentSpaceCount
        val token: Any? get() = _token
        var isOverRead = false
    }

    /**
     * Reads the next token. Next non-blank value must be a token or null is returned
     *
     * @return `null` if EOF,
     * or a [IndentedToken] wrapping a [TokenClass] if the char is a token,
     * or a [IndentedToken] wrapping a [Char] otherwise.
     */
    fun nextTokenOrNull(): IndentedToken? {
        return nextNotSpaceOrNull()?.let { indentedToken ->
            indentedToken.apply {
                val find = when (indentedToken.token) {
                    is TokenClass -> indentedToken.token
                    else -> TokenClass.findByValue(indentedToken._token as Char)
                }
                indentedToken._token = find ?: indentedToken._token
            }
        }
    }

    /**
     * Skips [TokenClass.LINE_SEPARATOR]s and gets the first token that is not a [TokenClass.LINE_SEPARATOR].
     * WARNING: THIS METHOD ALWAYS OVER-READ ONE CHAR.
     *
     * @return `null` if EOF,
     * or a [IndentedToken] wrapping [TokenClass] that is not a [TokenClass.LINE_SEPARATOR]
     * or a [Char] otherwise.
     */
    fun skipLineSeparators(): IndentedToken? {
        var token: IndentedToken? = null
        while (token == null || token.token is TokenClass.LINE_SEPARATOR) {
            token = nextTokenOrNull() ?: return null
        }
        return token
    }

    /**
     * Skips a element
     *
     * @return `null` if EOF, [Unit] is successfully skipped one element
     */
    fun skipElement(baseIndent: Int, debuggingHierarchy: Int = 0, isInnerList: Boolean = false): Unit? {
        fun println(v: Any?) {
            kotlin.io.println(" ".repeat(debuggingHierarchy) + v)
        }

        // cur is at `:`
        //
        // <baseIndent>map:
        // <baseIndent>··test: s
        // <baseIndent>··test2: 1
        //
        // <baseIndent>list: [asd]
        //
        // <baseIndent>mList:
        // <baseIndent>··- test1
        // <baseIndent>··- test2
        //
        println("skipping!")

        /*nextTokenOrNull()?.token?.let {
            check(it == COLON) {
                "internal error: skipElement: next token must be COLON but found $it, remaining=${input.readAll()}"
            }
        } ?: return null*/

        /**
         * Identify whether a line had been skipped
         */
        val skippedLine = currentToken.token is TokenClass.LINE_SEPARATOR // because we are just to `skipLineSeparators()` next

        val indentedToken = skipLineSeparators() ?: return null
        val newIndent = indentedToken.indentSpaceCount

        println("indentedToken = $indentedToken")
        println("newIndent = $newIndent")

        if (skippedLine) {
            @Suppress("SpellCheckingInspection")
            if (newIndent < baseIndent) {
                // <baseIndent>map:
                // <baseInde>        // missing key or value here due to indent reduced

                // TODO: 2020/3/21 contextual exception
                error("missing value for list or key for map, because new indent is shorter($newIndent) than base'($baseIndent)")
            }
        }

        // <baseIndent>map:
        // <new___Indent>

        // or

        // <baseIndent>map:
        // <new_Indent>


        when (indentedToken.token) {
            TokenClass.SQUARE_BRACKET_LEFT -> {
                // redundant: [test, t]

                // we are now at `[`
                // hence list type is inferred
                loop@ while (!endOfInput) {
                    skipElement(newIndent, debuggingHierarchy + 1) ?: return null
                    (if (currentToken.isOverRead) {
                        currentToken.isOverRead = false
                        currentToken
                    } else skipLineSeparators())?.also {
                        when (it.token) {
                            is TokenClass.COMMA -> { // expected. more elements are being read
                            }
                            is TokenClass.SQUARE_BRACKET_RIGHT -> {
                                return Unit // skip done
                            }
                            else -> error("unexpected token while skipping a list: $it")
                        }
                    }
                        ?: error("cannot find trailing `]` for list") // TODO: 2020/3/21 NON STRICT MODE: ignore missing trailing ]
                }
            }
            TokenClass.MULTILINE_LIST_FLAG -> {
                println("!MULTILINE_LIST_FLAG: skippedLine=$skippedLine")
                if (skippedLine) {
                    // redundant:
                    //   - v
                    check(read() == ' ') { "there must be a ' ' between '-' and a multiline list element" }
                    // we're now at `-`
                    // inferred type: multiline list
                    loop@ while (!endOfInput) {
                        skipElement(newIndent, debuggingHierarchy + 1)
                        skipLineSeparators()?.also {
                            when (it.token) {
                                is TokenClass.MULTILINE_LIST_FLAG -> {
                                    // SYNTAX CHECK: ESSENTIAL
                                    if (it.indentSpaceCount < newIndent) {
                                        // redundant:
                                        //   - v
                                        //  - s  // illegal syntax
                                        // TODO: 2020/3/21 contextual exception
                                        error("syntax error: not uniform indent found when reading multiline list: current indent=${it.indentSpaceCount}, while newIndent=$newIndent")
                                    } else if (it.indentSpaceCount > newIndent) {
                                        // SYNTAX CHECK: STRICT
                                        error("unsupported: multiline list elements must have equal indent")
                                    }
                                }

                                is Char -> {
                                    it.isOverRead = true
                                    return Unit
                                }

                                else -> { // QUOTATION
                                    // we've reached the end of the multiline list.
                                    // and we've read one excessive token.
                                    // e.g:
                                    // ```
                                    // multiline:
                                    //   - s
                                    // nextKey: value // we are now at `n`
                                    // ```
                                    // Next step is to `decodeElementIndex`, which will do `reader.nextTokenOrNull()` once more
                                    // , which will miss the previous token `n`

                                    println("   skipped plain: $it")
                                    // it.isOverRead = true
                                    return Unit
                                }
                                /*
                                 it.indentSpaceCount < newIndent -> {
                                    // redundant:
                                    //   - v
                                    // value: s  // here indent is shorter
                                    return Unit
                                }
                                 */
                                //  else -> return Unit
                            }
                        } ?: return Unit
                    }
                } else {
                    // redundant: -1

                    println("current token = $currentToken")
                    // inferred type: single value
                    val skipped = nextValue() // don't `skipElement`, type is already inferred
                    println("skipped value: $skipped")
                }
            }

            is TokenClass.QUOTATION,
            is Char
            -> {
                println("nextValue=" + nextValue())
                println("$skippedLine")
                if (skippedLine) {
                    // redundant:
                    //   v
                    val next = nextTokenOrNull() ?: return Unit // considered as a single value
                    when (next.token) {
                        TokenClass.LINE_SEPARATOR -> {
                            // redundant:
                            //   v
                            //
                            return Unit // single value
                        }
                        TokenClass.COLON -> {
                            // redundant:
                            //   v:

                            // inferred type: map
                            loop@ while (!endOfInput) {
                                skipElement(newIndent, debuggingHierarchy + 1)
                                val token = skipLineSeparators() ?: return Unit // considered normally end
                                when (token.token) {
                                    is TokenClass.QUOTATION,
                                    is Char
                                    -> { // key
                                        if (token.indentSpaceCount < newIndent) {
                                            return Unit
                                        }
                                        skipElement(newIndent, debuggingHierarchy + 1)
                                    }

                                    else -> error("unexpected token while skipping a map: $token")
                                }
                            }
                            // unreachable here
                        }
                    }
                } else {
                    // inferred type: single value
                    // now processing end of a value

                    if (currentToken.token is TokenClass.QUOTATION) {
                        // we've read like:
                        // ```
                        // multiline:
                        //  - "s" // we are not at right `"`
                        // nextKey: value // we have to move cur to `n`
                        nextTokenOrNull() // just skip `"`, empty lines will be skipped in next turn
                    } else {
                        if (!isInnerList) {
                            // ```
                            // redundant: s
                            // ```
                            val nextValue = nextValue()
                            println("nextValue(starting from char)=$nextValue")
                        } else {
                            // sss:
                            //   - value // <- we are skipping `value`

                            // nothing to do
                        }
                    }

                }

                // we are now at `s`, no enough info to infer type

            }
            else -> error(
                "illegal token while skipping (can't infer type): $indentedToken, " +
                    "that might because a token like COLON appeared at the beginning"
            )
        }

        return Unit
    }

    class IndentedValue(
        internal var _indentSpaceCount: Int,
        internal var _value: String
    ) {
        override fun toString(): String {
            return "Value($value, indent=$indentSpaceCount)"
        }

        val indentSpaceCount: Int get() = _indentSpaceCount
        val value: String get() = _value
        internal var isFromOverRead: Boolean = false
    }

    internal val indentedValueTemp = IndentedValue(0, "")

    /**
     * Directly read next string value. Automatically solve quotations and escaping.
     *
     * @return `null` if EOF
     */
    fun nextValue(): IndentedValue? {
        if (currentToken.token == null) {
            nextTokenOrNull() ?: return null // try start
        }
        while (currentToken.token is TokenClass.LINE_SEPARATOR) {
            nextTokenOrNull() ?: return null
        }
        val theBeginningTokenOverRead = currentToken.isOverRead
        println("theBeginningTokenOverRead=$currentToken")
        return when (val currentTokenToken = currentToken.token) {
            is Char -> {
                kotlin.runCatching {
                    return readUnquotedString(currentTokenToken, TokenClass.COLON)
                }.exceptionOrNull()?.let { e ->
                    throw YamlSerializationException(
                        "when nextValue(): currentToken=$currentTokenToken, nextToken=${nextTokenOrNull()}", e
                    )
                }
            }
            null -> null

            TokenClass.COLON, // "": "" // map element
            TokenClass.COMMA,
            TokenClass.CURLY_BRACKET_LEFT, // [1, 2, 3] // array
            TokenClass.SQUARE_BRACKET_LEFT
            -> {
                val indentedToken = skipLineSeparators()
                when (val next = indentedToken?.token) {
                    is TokenClass.QUOTATION -> {
                        // quoted string doesn't need to trim
                        indentedValueTemp.apply {
                            this.isFromOverRead = theBeginningTokenOverRead
                            _indentSpaceCount = currentToken.indentSpaceCount
                            _value = readQuotedString(next)
                        }
                    }
                    is TokenClass.COMMA -> {
                        // the value is empty
                        return indentedValueTemp.apply {
                            this.isFromOverRead = theBeginningTokenOverRead
                            _indentSpaceCount = currentToken.indentSpaceCount
                            _value = ""
                        }
                    }
                    is TokenClass -> error("required a value but found token $next")
                    is Char -> {
                        return readUnquotedString(null, currentTokenToken as TokenClass)
                    }
                    null -> null
                    else -> error("internal error: unexpected return value: ${next::class.simpleName} from nextTokenOrNull")
                }
            }
            is TokenClass.MULTILINE_LIST_FLAG -> {
                // negative number
                readUnquotedString(null, TokenClass.LINE_SEPARATOR.N)
            }
            is TokenClass.QUOTATION -> { // " " or ' '
                indentedValueTemp.apply {
                    this.isFromOverRead = false
                    _indentSpaceCount = currentToken.indentSpaceCount
                    _value = readQuotedString(currentTokenToken)
                    println("ENDING QUOTATION READ:" + nextTokenOrNull())
                }
            }
            else -> {
                error("unexpected token: ${currentToken.token}")
            }
        }
    }
}*/
