package net.mamoe.konfig

import kotlinx.io.core.Input
import kotlinx.io.core.Output
import kotlinx.io.core.readTextExactCharacters
import kotlinx.io.core.writeText

/**
 * A stream for output [Char]s
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
 * A stream for input [Char]s
 */
interface CharInputStream {
    /**
     * Indicates whether the stream has ended
     */
    val endOfInput: Boolean

    /**
     * read next char
     */
    fun read(): Char
}

fun String.asCharStream(): CharInputStream = object : CharInputStream {
    var cur = 0

    override val endOfInput: Boolean
        get() = cur == this@asCharStream.length

    override fun read(): Char {
        return this@asCharStream[cur].also { cur++ } // don't move cur++ into []
    }
}

fun Input.asCharStream(): CharInputStream = object : CharInputStream {
    override val endOfInput: Boolean
        get() = this@asCharStream.endOfInput

    override fun read(): Char {
        return readTextExactCharacters(1)[0]
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