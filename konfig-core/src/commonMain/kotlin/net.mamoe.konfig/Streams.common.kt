package net.mamoe.konfig


/*
expect interface Closeable {
    fun close()
}

expect abstract class OutputStream : Closeable {
    override fun close()
    open fun flush()
    open fun write(buffer: ByteArray, offset: Int, count: Int)
    open fun write(buffer: ByteArray)
    abstract fun write(oneByte: Int)
}

expect abstract class InputStream : Closeable {
    open fun available(): Int
    override fun close()

    /**
     * Returns `-1` if EOF
     */
    abstract fun read(): Int
    open fun read(b: ByteArray): Int
    open fun read(b: ByteArray, offset: Int, len: Int): Int
    open fun skip(n: Long): Long
}*/