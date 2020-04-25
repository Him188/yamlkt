package net.mamoe.konfig.yaml.internal

import net.mamoe.konfig.CharOutputStream
import kotlin.jvm.JvmField


///////////////////
// sourcecode from kotlinx.serialization. Copyright 2017-2019 JetBrains s.r.o.

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

private const val STATE_NONE = -1
private const val STATE_DETECT = -2

/**
 * Stores to [TokenStream.strBuff]
 */
internal fun TokenStream.readSingleQuotedString() {
    this.strBuff = buildString {
        var escape = false
        whileNotEOF { char ->
            when {
                escape -> {
                    if (char == SINGLE_QUOTATION || char == STRING_ESC) {
                        append(char)
                    } else {
                        // throw contextualDecodingException("Illegal escape '$char' when reading single quoted String")
                        append(STRING_ESC)
                        append(char)
                    }
                    escape = false
                }
                char == STRING_ESC -> escape = true
                char == SINGLE_QUOTATION -> return@buildString
                else -> append(char)
            }
        }
    }
}

internal fun Char.isValidHex(): Boolean = this in '0'..'9' || this in 'a'..'z' || this in 'A'..'Z'

/**
 * Stores to [TokenStream.strBuff]
 */
@OptIn(ExperimentalStdlibApi::class)
internal fun TokenStream.readUnquotedString(begin: Char, endingTokens: Array<out Token>) {
    this.strBuff = buildString {
        var escape = 0
        whileNotEOFWithBegin(begin) { char ->
            when {
                escape.takeHighestOneBit() == 0 && escape and ESCAPE_8 != 0 -> {
                    val count = escape and 0xff
                    check(char.isValidHex()) {
                        throw contextualDecodingException("Illegal escape hex digit '$char'")
                    }
                    // TODO: 2020/4/24
                    escapeBuff[count] = char
                    escape++
                }
                escape == STATE_DETECT -> {
                    val es = escapeToChar(char.toInt())

                    escape = if (es != INVALID) {
                        append(es)
                        0
                    } else when (char) {
                        'x' -> ESCAPE_8
                        'u' -> ESCAPE_16
                        'U' -> ESCAPE_32
                        else -> throw contextualDecodingException("Illegal escape '$char' when reading unquoted String")
                    }
                }
                else -> {
                    if (char == STRING_ESC) {
                        escape = STATE_DETECT
                    } else when (val token = Token[char]) {
                        Token.MULTILINE_STRING_FLAG -> TODO("multiline string")
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
            }
        }
    }.trimEnd { it == ' ' }
}

/**
 * Stores to [TokenStream.strBuff]
 */
internal fun TokenStream.readDoubleQuotedString() {
    this.strBuff = buildString {
        var escape = 0
        whileNotEOF { char ->
            when {
                escape and ESCAPE_8 != 0 -> {
                    val count = escape and 0xff
                    check(char.isValidHex()) {
                        throw contextualDecodingException("Illegal escape hex digit '$char'")
                    }
                    // TODO: 2020/4/24
                    escapeBuff[count] = char
                    escape++
                }
                escape == STATE_DETECT -> {
                    val es = escapeToChar(char.toInt())

                    escape = if (es != INVALID) {
                        append(es)
                        0
                    } else when (char) {
                        'x' -> ESCAPE_8
                        'u' -> ESCAPE_16
                        'U' -> ESCAPE_32
                        else -> throw contextualDecodingException("Illegal escape '$char' when reading unquoted String")
                    }
                }
                char == DOUBLE_QUOTATION -> return@buildString
                else -> {
                    append(char)
                }
            }
        }
    }
}

internal fun CharOutputStream.writeUnquotedString(origin: String) {
    TODO()
}
