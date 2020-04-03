package net.mamoe.konfig.yaml

import kotlin.math.pow

// No generic type: Long will be transformed to primitive `long` on JVM, best performance
private inline fun CharSequence.foldFromRightOffsetIndexed(offset: Int, initial: Long, operation: (index: Int, acc: Long, Char) -> Long): Long {
    require(offset <= this.length - 1) { "length < offset" }
    var accumulator = initial

    var index = 0
    repeat(length - offset) {
        val element = this[length - it - 1]
        accumulator = operation(index++, accumulator, element)
    }
    return accumulator
}

internal object HexConverter {
    private val HEX_POW_TABLE: Array<Long> = Array(Long.SIZE_BYTES * 2) { 16.0.pow(it).toLong() }

    fun hexToLong(value: String, offset: Int): Long {
        check(value.length - offset <= Long.SIZE_BYTES * 2) // support unsigned value

        return value.foldFromRightOffsetIndexed(offset, 0L) { index, acc, char ->
            acc + when (char) {
                in 'A'..'F' -> (char - 'A' + 10) * HEX_POW_TABLE[index]
                in 'a'..'f' -> (char - 'a' + 10) * HEX_POW_TABLE[index]
                in '0'..'9' -> (char - '0') * HEX_POW_TABLE[index]
                else -> error("illegal hex digit: $char")
            }
        }
    }
}

internal object BinaryConverter {
    @OptIn(ExperimentalUnsignedTypes::class)
    private val BINARY_POW_TABLE: Array<Long> = Array(Long.SIZE_BITS) { 2.0.pow(it).toULong().toLong() }

    fun binToLong(value: String, offset: Int): Long {
        check(value.length - offset <= Long.SIZE_BITS) // support unsigned value

        return value.foldFromRightOffsetIndexed(offset, 0L) { index, acc, char ->
            acc + when (char) {
                '0' -> 0
                '1' -> BINARY_POW_TABLE[index]
                else -> error("illegal binary digit: $char")
            }
        }
    }
}


internal fun Long.limitToByte(): Byte {
    if (this in Byte.MIN_VALUE.toLong()..Byte.MAX_VALUE.toLong()) return this.toByte()
    error("value is too large for byte: $this")
}

internal fun Long.limitToChar(): Char {
    if (this in Char.MIN_VALUE.toLong()..Char.MAX_VALUE.toLong()) return this.toChar()
    error("value is too large for char: $this")
}

internal fun Long.limitToShort(): Short {
    if (this in Short.MIN_VALUE.toLong()..Short.MAX_VALUE.toLong()) return this.toShort()
    error("value is too large for short: $this")
}

internal fun Long.limitToInt(): Int {
    if (this in Int.MIN_VALUE.toLong()..Int.MAX_VALUE.toLong()) return this.toInt()
    error("value is too large for int: $this")
}

internal fun Long.limitToFloat(): Float {
    if (this.toFloat().toLong() == this) return this.toFloat()
    error("value is too large for float: $this")
}

internal fun Long.limitToDouble(): Double {
    if (this.toDouble().toLong() == this) return this.toDouble()
    error("value is too large for double: $this")
}