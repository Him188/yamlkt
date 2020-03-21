@file:Suppress("PropertyName")

package net.mamoe.konfig.yaml

import kotlinx.serialization.InternalSerializationApi
import net.mamoe.konfig.CharStream
import net.mamoe.konfig.readAhead
import net.mamoe.konfig.yaml.TokenClass.COLON
import net.mamoe.konfig.yaml.TokenClass.COMMA
import net.mamoe.konfig.yaml.TokenClass.QUOTATION.DOUBLE_QUOTATION
import net.mamoe.konfig.yaml.TokenClass.QUOTATION.SINGLE_QUOTATION

@Suppress("ClassName", "PropertyName")
internal sealed class TokenClass(val value: Char) {
    override fun toString(): String {
        return this::class.simpleName + "('$value')"
    }

    object COMMA : TokenClass(',')

    object PERIOD : TokenClass('.')

    object COLON : TokenClass(':')

    sealed class QUOTATION(value: Char) : TokenClass(value) {
        abstract val ESCAPE_PATTERN: CharArray

        object SINGLE_QUOTATION : QUOTATION('\'') {
            override val ESCAPE_PATTERN = charArrayOf('\"', '\'')
        }

        object DOUBLE_QUOTATION : QUOTATION('"') {
            override val ESCAPE_PATTERN = charArrayOf('\"', '\'')
        }
    }

    object MULTILINE_LIST_FLAG : TokenClass('-')

    object PARENTHESES_LEFT : TokenClass('(')
    object PARENTHESES_RIGHT : TokenClass('(')

    object SQUARE_BRACKET_LEFT : TokenClass('[')
    object SQUARE_BRACKET_RIGHT : TokenClass(']')

    object CURLY_BRACKET_LEFT : TokenClass('{')
    object CURLY_BRACKET_RIGHT : TokenClass('}')

    sealed class LINE_SEPARATOR(value: Char) : TokenClass(value) {
        object N : LINE_SEPARATOR('\n') {
            override fun toString(): String {
                return "LINE_SEPARATOR.N(\\n)"
            }
        }

        object R : LINE_SEPARATOR('\r') {
            override fun toString(): String {
                return "LINE_SEPARATOR.R(\\r)"
            }
        }

        companion object {
            val values: CharArray by lazy {
                charArrayOf(N.value, R.value)
            }
        }
    }

    object MULTILINE : TokenClass('|')

    companion object {
        private val values: Array<TokenClass> = arrayOf(
            COMMA, PERIOD, COLON, SINGLE_QUOTATION, DOUBLE_QUOTATION,
            PARENTHESES_LEFT, PARENTHESES_RIGHT,
            SQUARE_BRACKET_RIGHT, SQUARE_BRACKET_LEFT,
            CURLY_BRACKET_RIGHT,
            CURLY_BRACKET_LEFT,
            LINE_SEPARATOR.N,
            LINE_SEPARATOR.R,
            MULTILINE,
            MULTILINE_LIST_FLAG
        )

        fun findByValue(value: Char): TokenClass? = values.firstOrNull { it.value == value }
    }
}

/**
 * Configurations to [Yaml]
 */
data class YamlConfiguration(
    /**
     * Recognize `null` as `0`, `0.0`, `0f`, "", '', or `false`
     */
    val nonStrictNullability: Boolean = false,
    /**
     * Allows to perform number casting that may lose precision, e.g. from a [Double] to a [Int]
     * TODO
     */
    val nonStrictNumber: Boolean = false,
    /**
     * Quote all [String]s
     */
    val forceQuotation: Boolean = false
)

@OptIn(InternalSerializationApi::class)
internal class YamlReader(
    private val input: CharStream
) : CharStream by input {
    var currentToken: IndentedToken = IndentedToken(0)

    /**
     * null means EOF
     */
    private fun nextNotSpaceOrNull(): IndentedToken? {
        var spaceCount = 0
        input.readAhead {
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
            return "Token($token, indent=$indentSpaceCount)"
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
    }

    /**
     * Reads the next token. Next non-blank value must be a token or null is returned
     *
     * @return `null` if EOF,
     * or a [IndentedToken] wrapping a [TokenClass] if the char is a token,
     * or a [IndentedToken] wrapping a [Char] otherwise.
     */
    fun nextTokenOrNull(): IndentedToken? =
        nextNotSpaceOrNull()?.let { indentedToken ->
            indentedToken.apply {
                val find = TokenClass.findByValue(indentedToken._token as Char)
                indentedToken._token = find ?: indentedToken._token
            }
        }

    /**
     * Skips [TokenClass.LINE_SEPARATOR]s
     *
     * @return `null` if EOF,
     * or a [IndentedToken] wrapping [TokenClass] that is not a [TokenClass.LINE_SEPARATOR]
     * or a [Char] otherwise.
     */
    fun skipLineSeparators(): IndentedToken? {
        var token: IndentedToken
        do {
            token = nextTokenOrNull() ?: return null
            println("immediate = $token")
        } while (token.token is TokenClass.LINE_SEPARATOR)
        return token
    }

    /**
     * Skips a element
     *
     * @return `null` if EOF, [Unit] is successfully skipped one element
     */
    fun skipElement(baseIndent: Int): Unit? {
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

        @Suppress("SpellCheckingInspection")
        if (newIndent < baseIndent) {
            // <baseIndent>map:
            // <baseInde>        // missing key or value here due to indent reduced

            // TODO: 2020/3/21 contextual exception
            error("missing value for list or key for map, because new indent is shorter($newIndent) than base'($baseIndent)")
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
                    skipElement(newIndent)
                    skipLineSeparators()?.also {
                        when (it.token) {
                            is COMMA -> { // expected. more elements are being read
                            }
                            is TokenClass.SQUARE_BRACKET_RIGHT -> {
                                return Unit // skip done
                            }
                            else -> error("unexpected token while skipping a list: $it")
                        }
                    } ?: error("cannot find trailing `]` for list") // TODO: 2020/3/21 NON STRICT MODE: ignore missing trailing ]
                }
            }
            TokenClass.MULTILINE_LIST_FLAG -> {
                if (skippedLine) {
                    // redundant:
                    //   - v
                    check(read() == ' ') { "there must be a ' ' between '-' and a multiline list element" }
                    // we're now at `-`
                    // inferred type: multiline list
                    loop@ while (!endOfInput) {
                        skipElement(newIndent)
                        skipLineSeparators()?.also {
                            when {
                                it.token is TokenClass.MULTILINE_LIST_FLAG -> {
                                    if (it.indentSpaceCount < newIndent) {
                                        // redundant:
                                        //   - v
                                        //  - s  // illegal syntax
                                        // TODO: 2020/3/21 contextual exception
                                        error("syntax error: not uniform indent found")
                                    }
                                }
                                it.indentSpaceCount < newIndent -> {
                                    // redundant:
                                    //   - v
                                    // value: s  // here indent is shorter
                                    return Unit
                                }
                                else -> error("unexpected token while skipping a list: $it")
                            }
                        } ?: error("cannot find trailing `]` for list") // TODO: 2020/3/21 NON STRICT MODE: ignore missing trailing ]
                    }
                } else {
                    // redundant: -1

                    // inferred type: single value
                    nextValue() // don't `skipElement`, type is already inferred
                    Unit
                }
            }

            is TokenClass.QUOTATION,
            is Char -> {
                println("nextValue=" + nextValue())
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
                        COLON -> {
                            // redundant:
                            //   v:

                            // inferred type: map
                            loop@ while (!endOfInput) {
                                skipElement(newIndent)
                                val token = skipLineSeparators() ?: return Unit // considered normally end
                                when (token.token) {
                                    is TokenClass.QUOTATION,
                                    is Char -> { // key
                                        if (token.indentSpaceCount < newIndent) {
                                            return Unit
                                        }
                                        skipElement(newIndent)
                                    }

                                    else -> error("unexpected token while skipping a map: $token")
                                }
                            }
                            // unreachable here
                        }
                    }
                } else {
                    // redundant: s

                    // inferred type: single value
                    nextValue()
                }

                // we are now at `s`, no enough info to infer type

            }
            else -> error("unexpected token while skipping (can't infer type): $indentedToken")
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
    }

    private val indentedValueTemp = IndentedValue(0, "")

    /**
     * Directly read next string value. Automatically solve quotations and escaping.
     *
     * @return `null` if EOF
     */
    fun nextValue(): IndentedValue? {
        if (currentToken.token == null) {
            nextTokenOrNull() // try start
        }
        while (currentToken.token is TokenClass.LINE_SEPARATOR) {
            nextTokenOrNull() ?: return null
        }
        return when (val currentTokenToken = currentToken.token) {
            is Char -> {
                indentedValueTemp.apply {
                    _indentSpaceCount = currentToken.indentSpaceCount
                    _value = currentTokenToken + readUnquotedString(COLON)
                }
            }
            null -> null

            COLON, // "": "" // map element
            COMMA,
            TokenClass.CURLY_BRACKET_LEFT, // [1, 2, 3] // array
            TokenClass.SQUARE_BRACKET_LEFT -> {
                val indentedToken = nextTokenOrNull()
                when (val next = indentedToken?.token) {
                    is TokenClass.QUOTATION -> {
                        // quoted string doesn't need to trim
                        indentedValueTemp.apply {
                            _indentSpaceCount = currentToken.indentSpaceCount
                            _value = readQuotedString(next)
                        }
                    }
                    is TokenClass -> error("required a value but found token $next")
                    is Char -> {
                        indentedValueTemp.apply {
                            _indentSpaceCount = currentToken.indentSpaceCount
                            _value = readUnquotedString(currentTokenToken as TokenClass)
                        }
                    }
                    null -> null
                    else -> error("internal error: unexpected return value: ${next::class.simpleName} from nextTokenOrNull")
                }
            }
            is TokenClass.MULTILINE_LIST_FLAG -> {
                // negative number
                indentedValueTemp.apply {
                    _indentSpaceCount = currentToken.indentSpaceCount
                    _value = "-" + readUnquotedString(TokenClass.LINE_SEPARATOR.N) // stub
                }
            }
            is TokenClass.QUOTATION -> { // " " or ' '
                indentedValueTemp.apply {
                    _indentSpaceCount = currentToken.indentSpaceCount
                    _value = readQuotedString(currentTokenToken)
                }
            }
            else -> {
                error("unexpected token: ${currentToken.token}")
            }
        }
    }
}

private val QUOTED_STRING_ESCAPE = arrayOf(
    '\'' to '\'',
    '\"' to '\"',
    '\\' to '\\'
)

/**
 * Reads a quoted string, with replacement of escaping, until [endQuotation]
 */
internal fun CharStream.readQuotedString(endQuotation: TokenClass.QUOTATION): String {
    // quoted string, with escape, until quotation
    return readStringUntil(
        escape = QUOTED_STRING_ESCAPE,
        endMatcher = { it == endQuotation.value }
    ).trim() // unquoted string should be trimmed
}

private val UNQUOTED_STRING_ESCAPE = arrayOf(
    'n' to '\n',
    'r' to '\r',
    '\'' to '\'',
    '\"' to '\"',
    '\\' to '\\'
)

/**
 * Thrown when met with an unexpected [TokenClass] when [readUnquotedString]
 */
class IllegalTokenClassInUnquotedStringException internal constructor(token: TokenClass) : YamlSerializationException(generateMessage(token)) {
    companion object { // TODO: 2020/3/21 add context-specific message
        internal fun generateMessage(token: TokenClass): String = "illegal char '${token.value}' found when reading an unquoted string"
    }
}

/**
 * Reads a quoted string, with replacement of escaping and leading-space trimmed, until [endToken]
 *
 * @throws IllegalTokenClassInUnquotedStringException when met with an unexpected [TokenClass]
 */
internal fun CharStream.readUnquotedString(endToken: TokenClass): String {
    // unquoted String, until : ] }
    var trimStart = true
    return readStringUntil(
        escape = UNQUOTED_STRING_ESCAPE,
        filterNot = {
            if (trimStart) {
                if (it != ' ') {
                    trimStart = false
                }
            }
            TokenClass.findByValue(it)?.let { token ->
                if (token != endToken && token !is TokenClass.LINE_SEPARATOR) {
                    throw IllegalTokenClassInUnquotedStringException(token)
                }
            }
            false
        },
        endMatcher = {
            it == endToken.value
                || it in TokenClass.LINE_SEPARATOR.values
                || it == COMMA.value
                || it == TokenClass.SQUARE_BRACKET_RIGHT.value
        }
    ).trimEnd()
}

/**
 * @param escape \n will be resolved to new line
 */
internal inline fun CharStream.readStringUntil(
    escape: Array<Pair<Char, Char>>,
    filterNot: (Char) -> Boolean = { false },
    endMatcher: (Char) -> Boolean
): String {
    var isEscape = false
    return buildString {
        readAhead { char ->
            when {
                isEscape -> {
                    val es = escape.firstOrNull { it.first == char }
                    when {
                        es != null -> append(es.second)
                        else -> error("unsupported escape: '$char'")
                    }
                    isEscape = false
                }
                escape.isNotEmpty() && char == '\\' -> isEscape = true
                endMatcher(char) -> return@buildString
                else -> {
                    if (!filterNot(char)) {
                        append(char)
                    }
                }
            }
        }
    }
}