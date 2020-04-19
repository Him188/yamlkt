package net.mamoe.konfig.yaml.internal

import net.mamoe.konfig.CharOutputStream


internal const val ESCAPE_SINGLE = 1
internal const val ESCAPE_ILLEGAL = 2
internal const val ESCAPE_8 = 3
internal const val ESCAPE_16 = 4
internal const val ESCAPE_32 = 5

@Suppress("ClassName")
internal object EscapeChar {
    private inline val NULL get() = '0'
    private inline val BELL get() = 'a'
    private inline val BACKSPACE get() = 'b'
    private inline val HORIZONTAL_TAB get() = 't'
    private inline val LINE_FEED get() = 'n'
    private inline val VERTICAL_TAB get() = 'v'
    private inline val FORM_FEED get() = 'f'
    private inline val CARRIAGE_RETURN get() = 'r'
    private inline val ESCAPE get() = 'e'
    private inline val SPACE get() = ' '
    private inline val DOUBLE_QUOTE get() = '"'
    private inline val SLASH get() = '/'
    private inline val BACK_SLASH get() = '\\'
    private inline val NEXT_LINE get() = 'N'
    private inline val NON_BREAKING_SPACE get() = '_'
    private inline val LINE_SEPARATOR get() = 'L'
    private inline val PARAGRAPH_SEPARATOR get() = 'P'

    private inline val UNICODE_8 get() = 'x'
    private inline val UNICODE_16 get() = 'u'
    private inline val UNICODE_32 get() = 'U'

    private val map = arrayOfNulls<Char>(120)

    /**
     * @see ESCAPE_SINGLE
     * @see ESCAPE_ILLEGAL
     * @see ESCAPE_8
     * @see ESCAPE_16
     * @see ESCAPE_32
     */
    internal operator fun get(char: Char): Int {
        return when {
            map[char.toInt()] != null -> {
                return ESCAPE_SINGLE
            }
            char == UNICODE_8 -> ESCAPE_8
            char == UNICODE_16 -> ESCAPE_16
            char == UNICODE_32 -> ESCAPE_32
            else -> ESCAPE_ILLEGAL
        }
    }

    init {
        NULL.let { map[it.toInt()] = it }
        BELL.let { map[it.toInt()] = it }
        BACKSPACE.let { map[it.toInt()] = it }
        HORIZONTAL_TAB.let { map[it.toInt()] = it }
        LINE_FEED.let { map[it.toInt()] = it }
        VERTICAL_TAB.let { map[it.toInt()] = it }
        FORM_FEED.let { map[it.toInt()] = it }
        CARRIAGE_RETURN.let { map[it.toInt()] = it }
        ESCAPE.let { map[it.toInt()] = it }
        SPACE.let { map[it.toInt()] = it }
        DOUBLE_QUOTE.let { map[it.toInt()] = it }
        SLASH.let { map[it.toInt()] = it }
        BACK_SLASH.let { map[it.toInt()] = it }
        NEXT_LINE.let { map[it.toInt()] = it }
        NON_BREAKING_SPACE.let { map[it.toInt()] = it }
        LINE_SEPARATOR.let { map[it.toInt()] = it }
        PARAGRAPH_SEPARATOR.let { map[it.toInt()] = it }
        // UNICODE_8.let { map[it.toInt()] = it }
        // UNICODE_16.let { map[it.toInt()] = it }
        // UNICODE_32.let { map[it.toInt()] = it }
    }
}

private const val STATE_NONE = -1
private const val STATE_DETECT = -2

/**
 * Stores to [TokenStream.strBuff]
 */
internal fun TokenStream.readUnquotedString(begin: Char, endingTokens: Array<out Token>) {
    this.strBuff = buildString {
        append(begin)
        var escape = 0
        whileNotEOF { char ->
            if (escape == STATE_DETECT) {
                when (EscapeChar[char]) {
                    ESCAPE_SINGLE -> {
                        // append()
                    }
                }
            } else when (val token = Token[char]) {
                Token.MULTILINE_STRING_FLAG -> TODO("multiline string")
                Token.ESCAPE -> {
                    escape = STATE_DETECT
                }

                is Token.LINE_SEPARATOR -> {
                    // no reuse.
                    return@buildString
                }
                NOT_A_TOKEN -> append(char)
                else -> {
                    if (token.canStopUnquotedString) {
                        if (endingTokens.none { it == token }) {
                            // `key: my:value`
                            //         ^ not allowed here
                            throw contextualDecodingException(
                                "Illegal token $token when reading unquoted String"//,
                                //   this@buildString.toString() + char + readUntilNewLine(10),
                                //   this@buildString.length
                            )
                        }
                        reuseToken(token)
                        return@buildString // don't `return`
                    } else append(char)
                }
            }
        }
    }.trimEnd()
}

internal fun CharOutputStream.writeUnquotedString(origin: String) {
    TODO()
}
