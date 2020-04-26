package net.mamoe.konfig

/*
actual abstract class OutputStream : Closeable {
    actual override fun close() {
    }

    actual open fun flush() {
    }

    actual open fun write(buffer: ByteArray, offset: Int, count: Int) {
        if (offset > buffer.size || offset < 0 || count < 0
            || count > buffer.size - offset
        ) {
            throw IndexOutOfBoundsException()
        }
        for (i in offset until offset + count) {
            write(buffer[i].toInt())
        }
    }

    actual open fun write(buffer: ByteArray) {
        for (byte in buffer) {
            write(byte.toInt())
        }
    }

    actual abstract fun write(oneByte: Int)
}

/**
 * @suppress This is unstable API. It might be a typealias to Kotlin's Closeable someday.
 */
actual interface Closeable {
    actual fun close()
}

actual abstract class InputStream : Closeable {
    actual open fun available(): Int {
        TODO("not implemented")
    }

    actual override fun close() {
    }

    actual abstract fun read(): Int
    actual open fun read(b: ByteArray): Int {
        repeat(b.size){
            b[it] = read().toByte()
        }
    }

    actual open fun read(b: ByteArray, offset: Int, len: Int): Int {
        TODO("not implemented")
    }

    actual open fun skip(n: Long): Long {
        TODO("not implemented")
    }
}*/