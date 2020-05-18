@file:JvmMultifileClass
@file:JvmName("YamlUtils")
@file:Suppress("NOTHING_TO_INLINE")

package net.mamoe.yamlkt.internal

import net.mamoe.yamlkt.YamlConfiguration
import net.mamoe.yamlkt.YamlConfiguration.StringSerialization.*
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName
import kotlin.jvm.JvmStatic


// region EscapeCharMappings

// sourcecode from kotlinx.serialization. Copyright 2017-2019 JetBrains s.r.o.

// mapping from escape chars real chars
private const val ESC2C_MAX = 0x75

internal const val STRING = '"'
internal const val STRING_ESC = '\\'

internal const val INVALID = 0.toChar()
internal const val UNICODE_ESC = 'u'

private object EscapeCharMappings {
    @JvmStatic
    val ESCAPE_2_CHAR = CharArray(ESC2C_MAX)

    @JvmStatic
    var REPLACEMENT_CHARS: Array<String?> = arrayOfNulls(128)

    init {
        for (i in 0..0xf) {
            REPLACEMENT_CHARS[i] = "\\u000$i"
        }
        for (i in 0x10..0x1f) {
            REPLACEMENT_CHARS[i] = "\\u00$i"
        }
        REPLACEMENT_CHARS['"'.toInt()] = "\\\""
        REPLACEMENT_CHARS['\\'.toInt()] = "\\\\"
        REPLACEMENT_CHARS['\t'.toInt()] = "\\t"
        REPLACEMENT_CHARS['\b'.toInt()] = "\\b"
        REPLACEMENT_CHARS['\n'.toInt()] = "\\n"
        REPLACEMENT_CHARS['\r'.toInt()] = "\\r"
        REPLACEMENT_CHARS[12] = "\\f"
    }


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
        initC2ESC(
            STRING,
            STRING
        )
        initC2ESC(
            STRING_ESC,
            STRING_ESC
        )
    }

    private fun initC2ESC(c: Int, esc: Char) {
        if (esc != UNICODE_ESC) ESCAPE_2_CHAR[esc.toInt()] = c.toChar()
    }

    private fun initC2ESC(c: Char, esc: Char) = initC2ESC(c.toInt(), esc)
}

internal fun escapeToChar(c: Int): Char = if (c < ESC2C_MAX) EscapeCharMappings.ESCAPE_2_CHAR[c] else INVALID

// endregion


/*
 * The String readers and writers
 */

internal fun TokenStream.readSingleQuotedString(): String {
    var startCur = cur

    var escapedOnce = false

    skipIf { it == ' ' }
    if (source[cur].isLineSeparator()) {
        cur++
        escapedOnce = true
        runNewLineSkippingAndEscaping()
        startCur = cur
    } // else, cur isn't moved back because it doesn't matter startCur

    whileNotEOF { char ->
        when {
            char == SINGLE_QUOTATION_CHAR -> {
                if (!endOfInput && source[cur] == SINGLE_QUOTATION_CHAR) {
                    cur++
                    append(source, startCur, cur - 2)
                    escapedOnce = true
                    startCur = cur
                } else {
                    if (!escapedOnce) {
                        return source.substring(startCur, cur - 1)
                    }
                    append(source, startCur, cur - 2)
                    return takeStringBuf()
                }
            }
            char.isLineSeparator() -> {
                append(source, startCur, cur - 2)
                runNewLineSkippingAndEscaping()
                startCur = cur
                escapedOnce = true
            }
        }
    }

    throw contextualDecodingException("Unexpected EOF")
}

@OptIn(ExperimentalStdlibApi::class)
internal fun TokenStream.readUnquotedString(stopOnComma: Boolean, begin: Char): String {
    val startingIndent = currentIndent

    var startCur = cur - 1

    var escapedOnce = false

    countSkipIf { it == ' ' }
    /*
         if (source[cur].isLineSeparator()) {
             cur++
             escapedOnce = true
             runNewLineSkippingAndEscaping()
             startCur = cur
         } // else, cur isn't moved back because it doesn't matter startCur

          */
// { bob: 2 }
    fun doEnd(): String {
        if (!escapedOnce) {
            return subSourceTrimEnd(startCur, cur - 1)
        }
        append(source, startCur, cur - 2)
        return takeStringBufTrimEnd()
    }

    whileNotEOFWithBegin(begin) { char ->

        if (char.isLineSeparator()) {
            currentIndent = 0
            append(source, startCur, cur - 2)
            escapedOnce = true
            if (!runNewLineSkippingAndEscapingForUnquoted(startingIndent)) {
                return takeStringBufTrimEnd()
            }
            startCur = cur
        } else when (char) {
            ':' -> {
                reuseToken(Token.COLON)
                return doEnd()
            }
            ',' -> {
                if (stopOnComma) {
                    reuseToken(Token.COMMA)
                    return doEnd()
                }
            }
            '|' -> TODO("MULTILINE STRING")
            '>' -> TODO("MULTILINE STRING")
            '[' -> {
                reuseToken(Token.LIST_BEGIN)
                return doEnd()
            }
            ']' -> {
                reuseToken(Token.LIST_END)
                return doEnd()
            }
            '{' -> {
                reuseToken(Token.MAP_BEGIN)
                return doEnd()
            }
            '}' -> {
                reuseToken(Token.MAP_END)
                return doEnd()
            }
            '#' -> {
                val toString = kotlin.run {
                    if (!escapedOnce) {
                        subSourceTrimEnd(startCur, cur - 1)
                    } else {
                        append(source, startCur, cur - 2)
                        takeStringBufTrimEnd()
                    }
                }
                this.skipLine()
                this.cur--
                currentIndent = 0
                return toString
            }
        }
    }

    // include the last char
    if (!escapedOnce) {
        return subSourceTrimEnd(startCur, cur)
    }
    append(source, startCur, cur - 1)
    return takeStringBufTrimEnd()
}

private tailrec fun TokenStream.runNewLineSkippingAndEscapingForUnquoted(initialIntent: Int, addCaret: Boolean = true): Boolean {
    if (endOfInput) return true
    val newIntent = countSkipIf { it == ' ' }
    if (newIntent <= initialIntent) {
        cur -= newIntent // for not breaking later strings
        return false
    }
    if (endOfInput) return true
    val next = source[cur]
    return when {
        next.isLineSeparator() -> { // blank line
            cur++
            append('\n')
            runNewLineSkippingAndEscapingForUnquoted(initialIntent, false)
        }
        else -> {
            if (addCaret) append(' ')
            true
        }
    }
}

internal inline fun TokenStream.ensureNotEOF() {
    if (endOfInput) throw contextualDecodingException("Unexpected EOF")
}

private tailrec fun TokenStream.runNewLineSkippingAndEscaping(addCaret: Boolean = true) {
    ensureNotEOF()
    skipIf { it == ' ' }
    ensureNotEOF()
    val next = source[cur]
    when {
        next.isLineSeparator() -> { // blank line
            cur++
            append('\n')
            runNewLineSkippingAndEscaping(false)
        }
        else -> {
            if (addCaret) append(' ')
            return
        }
    }
}

@OptIn(ExperimentalStdlibApi::class)
internal fun TokenStream.readDoubleQuotedString(): String {
    var startCur = cur

    var escapedOnce = false

    skipIf { it == ' ' }
    if (source[cur].isLineSeparator()) {
        cur++
        escapedOnce = true
        runNewLineSkippingAndEscaping()
        startCur = cur
    } // else, cur isn't moved back because it doesn't matter startCur

    whileNotEOF { char ->
        when {
            char == DOUBLE_QUOTATION_CHAR -> {
                if (!escapedOnce) {
                    return source.substring(startCur, cur - 1)
                }
                append(source, startCur, cur - 2)
                return takeStringBuf()
            }
            char.isLineSeparator() -> {
                append(source, startCur, cur - 2)
                runNewLineSkippingAndEscaping()
                startCur = cur
                escapedOnce = true
            }
            char == STRING_ESC -> {
                append(source, startCur, cur - 2)
                startCur = cur + 1
                escapedOnce = true

                ensureNotEOF()

                // detect
                val esChar = source[cur++]
                when {
                    esChar.isLineSeparator() -> {
                        skipIf(Char::isWhitespace)
                        startCur = cur
                    }
                    esChar.isWhitespace() -> {
                        append(' ')
                        startCur = cur
                    }
                    else -> {
                        val es = escapeToChar(esChar.toInt())
                        if (es != INVALID) {
                            append(es)
                            startCur = cur
                        } else {
                            val digitCount = when (esChar) {
                                'x' -> 2
                                'u' -> 4
                                'U' -> 8
                                else -> throw contextualDecodingException("Illegal escape '$esChar' when reading unquoted String")
                            }
                            repeat(digitCount) {
                                useNext { c ->
                                    if (!c.isHexDigit()) {
                                        throw contextualDecodingException("Expected hex digit")
                                    }
                                    appendEsc(c)
                                }
                            }
                            startCur = cur
                            flushEsc() // for \x
                        }
                    }
                }
            }
        }
    }
    throw contextualDecodingException("Unexpected EOF")
}

internal inline fun <R> TokenStream.useNext(block: (ch: Char) -> R?): R? {
    if (endOfInput) return null
    return source[cur++].let(block)
}

internal inline fun Char.isHexDigit(): Boolean = this in '0'..'9' || this in 'a'..'f' || this in 'A'..'F'

internal fun String.toEscapedString(buf: StringBufHolder, stringSerialization: YamlConfiguration.StringSerialization): String {
    val availability = getQuotationAvailability()
    when {
        stringSerialization == SINGLE_QUOTATION && availability hasFlag SINGLE -> return "'$this'"
        stringSerialization == NONE && availability hasFlag UNQUOTED -> return this
        stringSerialization == DOUBLE_QUOTATION -> {
            return if (availability hasFlag DOUBLE_WITHOUT_ESCAPE) "\"$this\""
            else this.toDoubleQuotedString(buf)
        }
    }
    return when {
        availability hasFlag UNQUOTED -> this
        availability hasFlag SINGLE -> "\'$this\'" // TODO: 2020/5/16 ESCAPE newline (blank line)
        availability hasFlag DOUBLE_WITHOUT_ESCAPE -> "\"$this\""
        else -> {
            // double with escape
            return if (availability hasFlag DOUBLE_WITHOUT_ESCAPE) "\"$this\""
            else this.toDoubleQuotedString(buf)
        }
    }
}

private fun String.toDoubleQuotedString(buf: StringBufHolder): String = with(buf) {
    append('\"')
    for (ch in this@toDoubleQuotedString) {
        val es = EscapeCharMappings.REPLACEMENT_CHARS[ch.toInt()]
        if (es != null) {
            append(es, 0, es.length - 1)
        } else append(ch)
    }

    append('\"')
    takeStringBuf()
}

private inline infix fun Int.hasFlag(flag: Int): Boolean = this and flag != 0

private const val SINGLE = /*          */ 0b001
private const val UNQUOTED = /*        */ 0b010
private const val DOUBLE_WITHOUT_ESCAPE = 0b100

// canBeSingleQuoted or canBeUnquoted
internal fun String.getQuotationAvailability(): Int {
    if (this.isEmpty()) {
        return DOUBLE_WITHOUT_ESCAPE or SINGLE
    }
    var canBeSingleQuoted = true
    var canBeUnquoted = true
    var doubleWithoutEscape = true

    if (this.startsWith(' ') || this.endsWith(' ')) {
        canBeUnquoted = false
    }

    var lastIsColon = false
    for (c in this) {
        when {
            !doubleWithoutEscape && !canBeSingleQuoted && !canBeUnquoted -> return 0
            c.isLineSeparator() -> {
                if (!canBeSingleQuoted) return 0 // fast path
                doubleWithoutEscape = false
                canBeUnquoted = false
            }
            doubleWithoutEscape && EscapeCharMappings.REPLACEMENT_CHARS[c.toInt()] != null -> {
                doubleWithoutEscape = false
            }
            c == '\'' -> canBeSingleQuoted = false
            c == '\"' -> doubleWithoutEscape = false
            c == ':' -> lastIsColon = true
            c == ' ' && lastIsColon -> canBeUnquoted = false
        }
    }
    if (lastIsColon) canBeUnquoted = false

    return (if (canBeSingleQuoted) SINGLE else 0) or
        (if (canBeUnquoted) UNQUOTED else 0) or
        (if (doubleWithoutEscape) DOUBLE_WITHOUT_ESCAPE else 0)
}