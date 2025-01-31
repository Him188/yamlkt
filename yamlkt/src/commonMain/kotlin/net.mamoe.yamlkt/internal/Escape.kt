@file:JvmMultifileClass
@file:JvmName("YamlUtils")

package net.mamoe.yamlkt.internal

import net.mamoe.yamlkt.YamlBuilder
import net.mamoe.yamlkt.YamlBuilder.CharSerialization
import net.mamoe.yamlkt.YamlBuilder.StringSerialization.*
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

internal val REPLACEMENT_CHARS: Array<String?> = arrayOfNulls<String?>(128).apply {
    for (i in 0..0xf) {
        this[i] = "\\u000$i"
    }
    for (i in 0x10..0x1f) {
        this[i] = "\\u00$i"
    }
    this['"'.code] = "\\\""
    this['\\'.code] = "\\\\"
    this['\t'.code] = "\\t"
    this['\b'.code] = "\\b"
    this['\n'.code] = "\\n"
    this['\r'.code] = "\\r"
    this[12] = "\\f"
}

private object EscapeCharMappings {
    @JvmStatic
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
        if (esc != UNICODE_ESC) ESCAPE_2_CHAR[esc.code] = c.toChar()
    }

    private fun initC2ESC(c: Char, esc: Char) = initC2ESC(c.code, esc)
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

    leadingSpace += countSkipIf { it == ' ' }
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

            '|' -> {
                return readMultilineString(TokenStream::readLinesForMultilineLiteralString)
            }

            '>' -> {
                return readMultilineString(TokenStream::readLinesForMultilineFoldedString)
            }

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

private fun TokenStream.readMultilineString(readLines: TokenStream.(foldingIndent: Int, keepTrailingLines: Boolean) -> Unit): String {
    val (trimEnd, keepTrailingNewlines) = takeChompCharacter()

    advanceToEndOfLineThrowIfNotWhitespace()

    // Advance to first post-fold line
    if (!endOfInput) {
        cur++
    }

    // Advance to the next non-blank link, keeping its indent and the number of lines advanced
    val (firstLineIndent, prependedNewlineCount) = advanceToNextNonBlankLine()

    // If the line indent is less than the current indent, we may have reached the end of the string already
    if (firstLineIndent < currentIndent) {
        // Back up to avoid breaking other strings
        if (!endOfInput) {
            cur -= (firstLineIndent + 1)
        }
        return takeStringBufTrimEnd()
    }

    // Prepend any newlines
    for (i in 0 until prependedNewlineCount) {
        append('\n')
    }

    readLines(firstLineIndent, keepTrailingNewlines)

    return if (trimEnd) {
        // Trim all trailing whitespace when trim flag set
        takeStringBufTrimEnd().trimEnd()
    } else if (keepTrailingNewlines) {
        takeStringBufTrimEnd()
    } else {
        takeStringBufTrimEnd().trimEnd() + "\n"
    }
}

private fun TokenStream.readLinesForMultilineFoldedString(foldingIndent: Int, keepTrailingLines: Boolean) {
    var lineNumber = 0
    var currentLineIndent = foldingIndent
    var previousLineBlank = true
    var trailingBlankLines = 0
    while (currentLineIndent >= foldingIndent && !endOfInput) {
        // Take the rest of the line as part of the string
        readLineForMultilineFoldedString(lineNumber, foldingIndent, currentLineIndent, previousLineBlank)
        val (nextIndent, blankLineCount) = advanceToNextNonBlankLine()
        previousLineBlank = blankLineCount > 0
        trailingBlankLines = blankLineCount
        currentLineIndent = nextIndent
        // Append a new line if there is at least one blank line. Only one newline is appended because
        // the string is folded
        if (blankLineCount > 0) {
            append('\n')
        }
        // Increment line number
        lineNumber++
    }

    finishMultilineString(foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines)
}

private fun TokenStream.finishMultilineString(
    foldingIndent: Int,
    currentLineIndent: Int,
    lineNumber: Int,
    keepTrailingLines: Boolean,
    trailingBlankLines: Int
) {
    if (keepTrailingLines) {
        for (i in 0 until trailingBlankLines) {
            append('\n')
        }
    }

    // If at least one line exists, append a newline
    if (lineNumber > 0 && currentLineIndent >= foldingIndent) {
        append('\n')
    }

    // Back up to the previous line so as not to break additional strings
    if (!endOfInput) {
        cur -= (currentLineIndent + 1)
    }
}

private fun TokenStream.readLineForMultilineFoldedString(
    lineNumber: Int,
    foldingIndent: Int,
    lineIndent: Int,
    previousLineBlank: Boolean
): Int {
    val lineStart = cur

    // Advance to end of line
    var lineLength = 0
    while (!endOfInput && source[cur] != '\n') {
        lineLength++
        cur++
    }

    // After first line, special cases
    if (lineNumber > 0) {
        // Extra leading spaces get a newline _and_ the leading spaces
        if (lineIndent > foldingIndent) {
            append('\n')
            for (i in lineIndent downTo foldingIndent + 1) {
                append(' ')
            }
        } else {
            if (lineLength > 0 && !previousLineBlank) {
                // Regular line breaks get a leading space if not empty and previous line not blank
                append(' ')
            }
        }
    }

    // Append line to string buffer if not empty
    if (lineLength > 0) {
        append(source, lineStart, cur - 1)
    }
    // Advance to next line
    if (!endOfInput) {
        cur++
    }
    return lineLength
}

private fun TokenStream.readLineForMultilineLiteralString(
    lineNumber: Int,
    foldingIndent: Int,
    lineIndent: Int,
    previousLineBlank: Boolean
): Int {
    val lineStart = cur

    // Advance to end of line
    var lineLength = 0
    while (!endOfInput && source[cur] != '\n') {
        lineLength++
        cur++
    }

    // After first line, special cases
    if (lineNumber > 0) {
        // Newlines are maintained
        append('\n')
        // Prepend extra leading spaces
        if (lineIndent > foldingIndent) {
            for (i in lineIndent downTo foldingIndent + 1) {
                append(' ')
            }
        }
    }

    // Append line to string buffer if not empty
    if (lineLength > 0) {
        append(source, lineStart, cur - 1)
    }
    // Advance to next line
    if (!endOfInput) {
        cur++
    }
    return lineLength
}

private fun TokenStream.readLinesForMultilineLiteralString(foldingIndent: Int, keepTrailingLines: Boolean) {
    var lineNumber = 0
    var currentLineIndent = foldingIndent
    var previousLineBlank = true
    var trailingBlankLines = 0
    while (currentLineIndent >= foldingIndent && !endOfInput) {
        // Take the rest of the line as part of the string
        readLineForMultilineLiteralString(lineNumber, foldingIndent, currentLineIndent, previousLineBlank)
        val (nextIndent, blankLineCount) = advanceToNextNonBlankLine()
        previousLineBlank = blankLineCount > 0
        trailingBlankLines = blankLineCount
        currentLineIndent = nextIndent
        // Append a new line for each blank line since string is literal
        for (i in 0 until blankLineCount) {
            append('\n')
        }
        // Increment line number
        lineNumber++
    }

    finishMultilineString(foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines)
}

private fun TokenStream.advanceToNextNonBlankLine(): Pair<Int, Int> {
    // Advance past indent, keeping track of how deep it is
    var lineIndent = countSkipIf { it == ' ' }

    // If line is blank, may still be part of the string;
    // keep reading lines until we get one that is not blank or one that is not indented
    var prependedNewlineCount = 0
    while (!endOfInput && source[cur] == '\n') {
        prependedNewlineCount++
        // Advance line break
        cur++
        // Count indent again
        lineIndent = countSkipIf { it == ' ' }
    }
    return Pair(lineIndent, prependedNewlineCount)
}

private fun TokenStream.advanceToEndOfLineThrowIfNotWhitespace() {
    // Advance through whitespace 'till end of line
    while (!endOfInput && source[cur] == ' ' && source[cur] != '\n') {
        cur++
    }
    // Throw if non-whitespace encountered
    if (!endOfInput && source[cur] != '\n') {
        throw contextualDecodingException("Only whitespace allowed after '>'")
    }
}

private fun TokenStream.takeChompCharacter(): Pair<Boolean, Boolean> {
    // Fist character, if not a newline, is the chomp flag
    val startChar = if (!endOfInput) source[cur] else '\n'
    val trimEnd = startChar == '-'
    val keepTrailingNewlines = startChar == '+'

    // Advance past chomp flag
    if (keepTrailingNewlines || trimEnd) {
        cur++
    }

    return Pair(trimEnd, keepTrailingNewlines)
}

private tailrec fun TokenStream.runNewLineSkippingAndEscapingForUnquoted(
    initialIntent: Int,
    addCaret: Boolean = true
): Boolean {
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

internal fun TokenStream.ensureNotEOF() {
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
                        val es = escapeToChar(esChar.code)
                        if (es != INVALID) {
                            append(es)
                            startCur = cur
                        } else {
                            val digitCount = when (esChar) {
                                'x' -> 2
                                'u' -> 4
                                'U' -> 8
                                else -> throw contextualDecodingException("Illegal escape '$esChar' when reading double quoted String")
                            }
                            repeat(digitCount) {
                                useNext { c ->
                                    if (!c.isHexDigit()) {
                                        throw contextualDecodingException("Expected hex digit but found '$c'")
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

internal inline fun <R> TokenStream.peekNext(block: (ch: Char) -> R?): R? {
    if (endOfInput) return null
    return source[cur + 1].let(block)
}

internal fun Char.isHexDigit(): Boolean = this in '0'..'9' || this in 'a'..'f' || this in 'A'..'F'

private const val ESCAPED_CHARACTERS: String = "[]{}\"'\\$^*|>-?/~,:#"

internal fun Char.encodeEscapedString(
    charSerialization: CharSerialization
): String {
    if (charSerialization == CharSerialization.UNICODE_CODE) {
        return this.code.toString()
    }
    var requiresDoubleQuoted = charSerialization == CharSerialization.DOUBLE_QUOTATION || this == '\''
    val requiresSingleQuoted = charSerialization == CharSerialization.SINGLE_QUOTATION || this in ESCAPED_CHARACTERS || this == ' '

    val escapedChars = REPLACEMENT_CHARS.getOrNull(this.code)?.also { requiresDoubleQuoted = true } ?: this.toString()

    return when{
        requiresDoubleQuoted -> "\"$escapedChars\""
        requiresSingleQuoted ->  "'$escapedChars'"
        else -> escapedChars
    }
}

internal fun String.toEscapedString(
    buf: StringBufHolder,
    stringSerialization: YamlBuilder.StringSerialization
): String {
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
        val es = REPLACEMENT_CHARS.getOrNull(ch.code)
        if (es != null) {
            append(es, 0, es.length - 1)
        } else append(ch)
    }

    append('\"')
    takeStringBuf()
}

private infix fun Int.hasFlag(flag: Int): Boolean = this and flag != 0

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

    if (this.first().isWhitespace() || this.last().isWhitespace()) {
        canBeUnquoted = false
    }

    var lastIsColon = false
    for (c in this) {
        when {
            !doubleWithoutEscape && !canBeSingleQuoted && !canBeUnquoted -> return 0
            c.isLineSeparator() -> {
                return 0 // if contain line separator, use double quotation.
                // if (!canBeSingleQuoted) return 0 // fast path
                // doubleWithoutEscape = false
                // canBeUnquoted = false
            }

            doubleWithoutEscape && REPLACEMENT_CHARS.getOrNull(c.code) != null -> {
                doubleWithoutEscape = false
            }

            c == '\'' -> {
                canBeSingleQuoted = false
                canBeUnquoted = false
            }

            c == '\"' -> {
                doubleWithoutEscape = false
                canBeUnquoted = false
            }

            c == '#' -> canBeUnquoted = false
            c == ':' -> lastIsColon = true
            c == ' ' && lastIsColon -> canBeUnquoted = false
            c in ESCAPED_CHARACTERS -> { // less mistakes
                canBeUnquoted = false
            }
        }
    }
    if (lastIsColon) canBeUnquoted = false

    return (if (canBeSingleQuoted) SINGLE else 0) or
            (if (canBeUnquoted) UNQUOTED else 0) or
            (if (doubleWithoutEscape) DOUBLE_WITHOUT_ESCAPE else 0)
}