package net.mamoe.konfig.yaml

import kotlin.math.pow

private inline fun <R> CharSequence.foldFromRightOffsetIndexed(offset: Int, initial: R, operation: (index: Int, acc: R, Char) -> R): R {
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
                in '0'..'1' -> (char - '0') * HEX_POW_TABLE[index]
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