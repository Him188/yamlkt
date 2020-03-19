package net.mamoe.konfig

/**
 * A stream of [Char]s
 */
interface CharStream {
    /**
     * Indicates whether the stream has ended
     */
    val endOfInput: Boolean

    /**
     * read next char
     */
    fun read(): Char
}

/**
 * Read all the remaining available chars and call [block]
 */
inline fun CharStream.readAhead(block: (char: Char) -> Unit) {
    while (!endOfInput) block(read())
}