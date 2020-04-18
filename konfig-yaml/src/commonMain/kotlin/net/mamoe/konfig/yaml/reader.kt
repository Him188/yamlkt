@file:Suppress("PropertyName", "unused")

package net.mamoe.konfig.yaml

/*
private val QUOTED_STRING_ESCAPE = arrayOf(
    '\'' to '\'',
    '\"' to '\"',
    '\\' to '\\'
)

/**
 * Reads a quoted string, with replacement of escaping, until [endQuotation]
 */
internal fun CharInputStream.readQuotedString(endQuotation: TokenClass.QUOTATION): String {
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
internal fun YamlReader.readUnquotedString(start: Char? = null, endToken: TokenClass): YamlReader.IndentedValue {
    return indentedValueTemp.apply {
        // this.isFromOverRead = theBeginningTokenOverRead
        _indentSpaceCount = currentToken.indentSpaceCount

        var trimStart = true
        val tail = readStringUntil(
            escape = UNQUOTED_STRING_ESCAPE,
            filterNot = filterNot@{
                if (trimStart) {
                    if (it != ' ') {
                        trimStart = false
                    } else return@filterNot true
                }
                TokenClass.findByValue(it)?.let { token ->
                    if (token != endToken && token !is TokenClass.LINE_SEPARATOR) {
                        throw IllegalTokenClassInUnquotedStringException(token)
                    }
                }
                false
            },
            endMatcher = { char ->
                println(char)
                (char == endToken.value
                    || char in TokenClass.LINE_SEPARATOR.values
                    || char == COMMA.value
                    || char == TokenClass.SQUARE_BRACKET_RIGHT.value
                    || char == TokenClass.MULTILINE_LIST_FLAG.value).also {
                    currentToken.apply {
                        this._token = TokenClass.findByValue(char)
                    }
                }
            }
        ).also { println("readUnquotedString(untrimmed)=$it") }.trimEnd()

        _value = if (start == null) tail else start + tail
    }
    // unquoted String, until : ] }

}

/**
 * @param escape \n will be resolved to new line
 */
internal inline fun CharInputStream.readStringUntil(
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
}*/