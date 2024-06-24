@file:JvmMultifileClass
@file:JvmName("YamlUtils")

package net.mamoe.yamlkt.internal

import kotlinx.serialization.descriptors.SerialDescriptor
import net.mamoe.yamlkt.YamlDecodingException
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName


internal fun contextualDecodingException(
    hint: String,
    text: String,
    cur: Int,
    position: String,
    throwable: Throwable? = null
): YamlDecodingException {
    return YamlDecodingException(buildString {
        append(hint)
        append('\n')
        append(text)
        append('\n')
        repeat(cur) {
            append(' ')
        }
        append('^')
        append(' ')
        append(position)
        append('\n')
    }, throwable)
}


internal fun YamlDecoder.contextualDecodingException(
    hint: String,
    descriptor: SerialDescriptor? = null,
    index: Int = -1,
    throwable: Throwable? = null
): YamlDecodingException {
    return tokenStream.contextualDecodingException("Top-level decoder: $hint", descriptor, index, throwable)
}

internal fun YamlDecoder.AbstractDecoder.contextualDecodingException(
    hint: String,
    descriptor: SerialDescriptor? = null,
    index: Int = -1,
    throwable: Throwable? = null
): YamlDecodingException {
    return this.parentYamlDecoder.contextualDecodingException(hint, descriptor, index, throwable)
}

internal fun YamlDecoder.AbstractDecoder.contextualDecodingException(hint: String): YamlDecodingException {
    return this.parentYamlDecoder.contextualDecodingException(this.name + ": " + hint)
}

internal fun TokenStream.contextualDecodingException(hint: String): YamlDecodingException {
    return contextualDecodingException(hint, null, -1)
}

// Only called when reporting a exception. No need to consider about performance.
internal val TokenStream.lineNumberAndCurrentLine: Pair<Int, String> // line to column to current line
    get() {
        var lineStartingCur = 0
        var isLastLineSeparator = 0
        var _lineNumber = 1

        // lineNumber  = _lineNumber - isLastLineSeparator
        // fun currentLine() = source.substring(startIndex = lineStartingCur, endIndex = cur - isLastLineSeparator)
        fun read(i: Int): Char {
            return source[i].also { char ->
                if (isLastLineSeparator != 0) {
                    lineStartingCur = i + 1 - isLastLineSeparator
                    isLastLineSeparator = 0
                }

                if (char.isLineSeparator()) {
                    isLastLineSeparator++
                    _lineNumber++
                }
            }
        }

        if (source.isNotEmpty())
            for (i in 0..(cur - 1).coerceIn(source.indices)) {
                read(i)
            }
        return Pair(
            _lineNumber - isLastLineSeparator,
            source.substring(startIndex = lineStartingCur, endIndex = cur - isLastLineSeparator)
        )
    }

internal val TokenStream.lineNumber: Int // line to column to current line
    get() {
        var line = 1
        for (i in 0..cur.coerceAtMost(source.length)) {
            if (source[i].isLineSeparator()) {
                line++
            }
        }
        return line
    }

internal fun TokenStream.readLine(): String {
    val buffer = StringBuilder()
    whileNotEOF {
        if (it.isLineSeparator()) return buffer.toString()
        buffer.append(it)
    }
    return buffer.toString()
}

internal fun TokenStream.skipLine() {
    whileNotEOF {
        if (it.isLineSeparator()) return
    }
}

// this function is always shown only in stacktrace
internal fun TokenStream.contextualDecodingException(
    hint: String,
    descriptor: SerialDescriptor?,
    index: Int,
    throwable: Throwable? = null
): YamlDecodingException {
    val message: String = if (descriptor == null)
        hint
    else
        hint + " for '${index.let { descriptor.getElementName(it) }}' " +
                "in '${descriptor.serialName}'"

    /*
    val currentTokenLength = if (currentToken is Token.STRING) {
        strBuff!!.length
    } else 1 // char*/

    val v = this.lineNumberAndCurrentLine
    val lineNumber = v.first
    val columnNumber = v.second.length + 1

    val before = v.second.limitLast(32)

    val last = this.readLine().limitFirst(32)
    val text = if (this.lineNumberAndCurrentLine.first != lineNumber) {
        before
    } else {
        before + last
    }

    val position = "at line ${lineNumber}, column $columnNumber"
    return contextualDecodingException(
        message,
        text,
        (before.length - 1/* currentTokenLength */).coerceAtLeast(0),
        position,
        throwable
    )
}

internal fun String.limitLast(length: Int): String {
    if (this.length <= length)
        return this
    return "..." + this.takeLast(length)
}

internal fun String.limitFirst(length: Int): String {
    if (this.length <= length)
        return this
    return this.take(length) + "..."
}

internal fun Char.isLineSeparator() = this == '\n' || this == '\r'
