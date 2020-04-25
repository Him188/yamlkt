package net.mamoe.konfig

import kotlinx.io.charsets.Charset
import kotlinx.io.charsets.Charsets
import kotlinx.io.charsets.decode
import kotlinx.io.core.*
import kotlin.jvm.JvmField

/**
 * A stream for outputting [Char]s
 */
interface CharOutputStream {
    /**
     * Write the [string] to this stream
     */
    fun write(string: CharSequence)

    /**
     * Write the [char] to this stream
     */
    fun write(char: Char)
}

/**
 * A stream for inputting [Char]s
 */
interface CharInputStream {
    /**
     * Indicates whether the stream has ended
     */
    val endOfInput: Boolean

    /**
     * Join the chars already read.
     * Refreshes when [read] returns '\n' or '\r'
     */
    val currentLine: String

    val lineNumber: Int

    /**
     * Read next char
     */
    fun read(): Char

    // TODO for debug only!! should remove in release
    fun peakRemaining(): String
}

/**
 * Staring from 1
 */
val CharInputStream.columnNumber: Int get() = currentLine.length

fun Char.isLineSeparator() = this == '\n' || this == '\r'

/**
 * Delegate a [String] to [CharInputStream]
 */
fun String.asCharStream(): CharInputStream = object : CharInputStream {
    private var cur = 0

    override val endOfInput: Boolean
        get() = cur == this@asCharStream.length
    override val currentLine: String
        get() = substring(startIndex = lineStartingCur, endIndex = cur - isLastLineSeparator)

    private var lineStartingCur = 0

    private var isLastLineSeparator = 0

    override val lineNumber: Int get() = _lineNumber - isLastLineSeparator
    private var _lineNumber: Int = 1

    override fun read(): Char {
        return this@asCharStream[cur].also { char ->
            cur++
            if (isLastLineSeparator != 0) {
                lineStartingCur = cur - isLastLineSeparator
                isLastLineSeparator = 0
            }

            if (char.isLineSeparator()) {
                isLastLineSeparator++
                _lineNumber++
            }
        } // don't move cur++ into []
    }

    override fun peakRemaining(): String {
        val cur = this.cur
        return readRemaining().also { this.cur = cur }
    }
}


/**
 * Delegate an [Input] to a [CharInputStream]
 *
 * @suppress Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0
 */
@OptIn(ExperimentalStdlibApi::class)
@ExperimentalKonfigApi("Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0")
fun Input.asCharStream(charset: Charset = Charsets.UTF_8): CharInputStream = object : CharInputStream {
    override val endOfInput: Boolean get() = this@asCharStream.endOfInput
    override val currentLine: String get() = line.toString()
    override val lineNumber: Int get() = _lineNumber

    private var _lineNumber = 1

    private var line: StringBuilder = StringBuilder()

    @OptIn(ExperimentalIoApi::class)
    private val decoder = charset.newDecoder()

    private var isLastLineSeparator = false

    private inner class Cache : Appendable {
        @JvmField
        var value: Char = ' ' // stub

        override fun append(value: Char): Appendable {
            this.value = value
            return this
        }

        override fun append(value: CharSequence?): Appendable {
            if (value != null) {
                this.value = value.first()
            }
            return this
        }

        override fun append(value: CharSequence?, startIndex: Int, endIndex: Int): Appendable {
            if (value != null) {
                this.value = value[startIndex]
            }
            return this
        }
    }

    private val cache: Cache = Cache()


    override fun read(): Char {
        @OptIn(ExperimentalIoApi::class)
        if (decoder.decode(this@asCharStream, cache, 1) == 0) {
            throw EOFException("no enough data available to read one char")
        }
        return cache.value.also { last ->
            if (last.isLineSeparator()) {
                isLastLineSeparator = true
                _lineNumber++
            } else {
                if (isLastLineSeparator) {
                    isLastLineSeparator = false
                    line.clear()
                }
                line.append(last)
            }
        }
    }

    override fun peakRemaining(): String {
        TODO("not implemented")
    }
}

fun StringBuilder.asCharStream(): CharOutputStream = object : CharOutputStream {
    override fun write(string: CharSequence) {
        this@asCharStream.append(string)
    }

    override fun write(char: Char) {
        this@asCharStream.append(char)
    }
}

fun Output.asCharStream(): CharOutputStream = object : CharOutputStream {
    override fun write(string: CharSequence) {
        this@asCharStream.writeText(string)
    }

    override fun write(char: Char) {
        this@asCharStream.writeText(char.toString())
    }
}

/**
 * Read all the remaining available chars and call [block]
 */
inline fun CharInputStream.readAhead(block: (char: Char) -> Unit) {
    while (!endOfInput) block(read())
}

fun CharInputStream.readRemaining(): String {
    return buildString { readAhead { append(it) } }
}

fun CharInputStream.readLine(): String = buildString {
    readAhead { char ->
        if (char.isLineSeparator()) {
            return@buildString
        } else append(char)
    }
}