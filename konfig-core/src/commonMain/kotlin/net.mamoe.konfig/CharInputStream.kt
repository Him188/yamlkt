package net.mamoe.konfig

import kotlinx.io.core.Input
import kotlinx.io.core.readTextExactCharacters

/**
 * A stream of [Char]s
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

/**
 * Read all the remaining available chars and call [block]
 */
inline fun CharInputStream.readAhead(block: (char: Char) -> Unit) {
    while (!endOfInput) block(read())
}