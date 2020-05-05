package net.mamoe.konfig.yaml.internal

import kotlin.jvm.JvmField


///////////////////
// sourcecode from kotlinx.serialization. Copyright 2017-2019 JetBrains s.r.o.
///////////////////

// mapping from chars to token classes
private const val CTC_MAX = 0x7e

// mapping from escape chars real chars
private const val ESC2C_MAX = 0x75

internal const val STRING = '"'
internal const val STRING_ESC = '\\'

internal const val INVALID = 0.toChar()
internal const val UNICODE_ESC = 'u'

private object EscapeCharMappings {
    @JvmField
    val ESCAPE_2_CHAR = CharArray(ESC2C_MAX)

    init {
        for (i in 0x00..0x1f) {
            initC2ESC(i, UNICODE_ESC)
        }

        initC2ESC(0x08, 'b')
        initC2ESC(0x09, 't')
        initC2ESC(0x0a, 'n')
        initC2ESC(0x0c, 'f')
        initC2ESC(0x0d, 'r')
        initC2ESC('/', '/')
        initC2ESC(STRING, STRING)
        initC2ESC(STRING_ESC, STRING_ESC)
    }

    private fun initC2ESC(c: Int, esc: Char) {
        if (esc != UNICODE_ESC) ESCAPE_2_CHAR[esc.toInt()] = c.toChar()
    }

    private fun initC2ESC(c: Char, esc: Char) = initC2ESC(c.toInt(), esc)
}

internal fun escapeToChar(c: Int): Char = if (c < ESC2C_MAX) EscapeCharMappings.ESCAPE_2_CHAR[c] else INVALID

internal const val ESCAPE_16: Int = 0b1000000000000000000000000000000
internal const val ESCAPE_32: Int = 0b0100000000000000000000000000000
internal const val ESCAPE_8: Int = 0b0010000000000000000000000000000

/**
 * Stores to [TokenStream.strBuff]
 */
internal fun TokenStream.readSingleQuotedString(): String {
    val startCur = cur
    whileNotEOF { char ->
        if (char == SINGLE_QUOTATION) {
            return source.substring(startCur, cur - 1)
        }
    }
    throw contextualDecodingException("Unexpected EOF")
}

@Suppress("NOTHING_TO_INLINE")
internal inline fun Char.isValidHex(): Boolean = this in '0'..'9' || this in 'a'..'z' || this in 'A'..'Z'

/**
 * Stores to [TokenStream.strBuff]
 */
@OptIn(ExperimentalStdlibApi::class)
internal fun TokenStream.readUnquotedString(begin: Char): String {
    val startCur = cur - 1

    whileNotEOFWithBegin(begin) { char ->
        when (char) {
            ':' -> {
                reuseToken(Token.COLON)
                return subStringBufTrimEnd(startCur, cur - 2)
            }
            '\n', '\r' -> {
                currentIndent = 0
                // no reuse.
                return subStringBufTrimEnd(startCur, cur - 2)
            }
            ',' -> {
                reuseToken(Token.COMMA)
                return subStringBufTrimEnd(startCur, cur - 2)
            }
            '|' -> TODO("MULTILINE STRING")
            '[' -> {
                reuseToken(Token.LIST_BEGIN)
                return subStringBufTrimEnd(startCur, cur - 2)
            }
            ']' -> {
                reuseToken(Token.LIST_END)
                return subStringBufTrimEnd(startCur, cur - 2)
            }
            '{' -> {
                reuseToken(Token.MAP_BEGIN)
                return subStringBufTrimEnd(startCur, cur - 2)
            }
            '}' -> {
                reuseToken(Token.MAP_END)
                return subStringBufTrimEnd(startCur, cur - 2)
            }
            '#' -> {
                val cur = cur - 2
                this.skipLine()
                this.cur--
                currentIndent = 0
                return subStringBufTrimEnd(startCur, cur).also { println(it) }
            }
        }
    }
    return subStringBufTrimEnd(startCur, cur - 1)
}

/**
 * Stores to [TokenStream.strBuff]
 */
@OptIn(ExperimentalStdlibApi::class)
internal fun TokenStream.readDoubleQuotedString(): String {
    var startCur = cur

    var escapedOnce = false
    whileNotEOF { char ->
        when (char) {
            DOUBLE_QUOTATION -> {
                if (!escapedOnce) {
                    return source.substring(startCur, cur - 1)
                }
                append(source, startCur, cur - 2)
                return takeStringBuf()
            }
            else -> {
                if (char == STRING_ESC) {
                    append(source, startCur, cur - 2)
                    startCur = cur + 1
                    escapedOnce = true


                    if (endOfInput)
                        throw contextualDecodingException("Unexpected EOF")

                    // detect
                    val es = escapeToChar(source[cur++].toInt())
                    if (es != INVALID) {
                        append(es)
                        startCur = cur
                    } else {

                        TODO("higher order escape")
                        when (char) {
                            'x' -> ESCAPE_8
                            'u' -> ESCAPE_16
                            'U' -> ESCAPE_32
                            else -> throw contextualDecodingException("Illegal escape '$char' when reading unquoted String")
                        }
                    }
                }
            }
        }
    }
    throw contextualDecodingException("Unexpected EOF")
}
