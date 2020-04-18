package net.mamoe.konfig

import kotlinx.io.charsets.Charsets
import kotlinx.io.charsets.decode
import kotlinx.io.core.ExperimentalIoApi
import kotlinx.io.core.Input
import kotlinx.io.core.Output
import kotlinx.io.core.writeText

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

    /**
     * Read next char
     */
    fun read(): Char

    // TODO for debug only!! should remove in release
    fun peakRemaining(): String
}

fun Char.isLineSeparator() = this == '\n' || this == '\r'

/**
 * Delegate a [String] to [CharInputStream]
 */
fun String.asCharStream(): CharInputStream = object : CharInputStream {
    private var cur = 0

    override val endOfInput: Boolean
        get() = cur == this@asCharStream.length
    override val currentLine: String
        get() = substring(startIndex = lineStartingCur, endIndex = cur)

    private var lineStartingCur = 0

    override fun read(): Char {
        return this@asCharStream[cur].also { char ->
            cur++
            if (char.isLineSeparator()) {
                lineStartingCur = cur
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
@ExperimentalKonfigApi("Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0")
fun Input.asCharStream(): CharInputStream = object : CharInputStream {
    override val endOfInput: Boolean get() = this@asCharStream.endOfInput
    override val currentLine: String get() = line.toString()

    private var line: StringBuilder = StringBuilder()

    @OptIn(ExperimentalIoApi::class)
    private val decoder = Charsets.UTF_8.newDecoder()

    override fun read(): Char {
        @OptIn(ExperimentalIoApi::class)
        decoder.decode(this@asCharStream, line, 1)
        return line.last().also { last ->
            if (last == '\n' || last == '\r') {
                line.clear()
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