@file:JvmMultifileClass
@file:JvmName("KonfigYamlUtils")
@file:Suppress("DuplicatedCode")

package net.mamoe.konfig.yaml.internal

import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName
import kotlin.math.pow

// No generic type: Long will be transformed to primitive `long` on JVM, best performance
@Suppress("INVISIBLE_REFERENCE", "INVISIBLE_MEMBER")
@kotlin.internal.InlineOnly
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

// No generic type: Long will be transformed to primitive `long` on JVM, best performance
@Suppress("INVISIBLE_REFERENCE", "INVISIBLE_MEMBER")
@kotlin.internal.InlineOnly
private inline fun CharArray.foldFromRightOffsetIndexed(offset: Int, length: Int, initial: Long, operation: (index: Int, acc: Long, Char) -> Long): Long {
    var accumulator = initial

    val lastIndex = offset + length - 1

    var index = 0
    repeat(length) {
        val element = this[lastIndex - it]
        accumulator = operation(index++, accumulator, element)
    }
    return accumulator
}

/**
 * The converter that converts hexadecimal [String]s from or to numbers
 */
internal object HexConverter {
    private val HEX_POW_TABLE: Array<Long> = Array(Long.SIZE_BYTES * 2) { 16.0.pow(it).toLong() }

    fun hexToLong(value: String, offset: Int): Long {
        check(value.length - offset <= Long.SIZE_BYTES * 2) {
            "max ${Long.SIZE_BYTES * 2} bits, but found ${value.length - offset}"
        } // support unsigned value

        return value.foldFromRightOffsetIndexed(offset, 0L) { index, acc, char ->
            acc + when (char) {
                in 'A'..'F' -> (char - 'A' + 10) * HEX_POW_TABLE[index]
                in 'a'..'f' -> (char - 'a' + 10) * HEX_POW_TABLE[index]
                in '0'..'9' -> (char - '0') * HEX_POW_TABLE[index]
                else -> error("illegal digit '$char' in hexadecimal string $value") // no need to drop
            }
        }
    }

    fun hexToLong(value: CharArray, offset: Int, length: Int): Long {
        check(value.size - offset <= Long.SIZE_BYTES * 2) {
            "max ${Long.SIZE_BYTES * 2} bits, but found ${value.size - offset}"
        } // support unsigned value

        return value.foldFromRightOffsetIndexed(offset, length, 0L) { index, acc, char ->
            acc + when (char) {
                in 'A'..'F' -> (char - 'A' + 10) * HEX_POW_TABLE[index]
                in 'a'..'f' -> (char - 'a' + 10) * HEX_POW_TABLE[index]
                in '0'..'9' -> (char - '0') * HEX_POW_TABLE[index]
                else -> error("illegal digit '$char' in hexadecimal string $value") // no need to drop
            }
        }
    }
}

/**
 * The converter that converts binary [String]s from or to numbers
 */
internal object BinaryConverter {
    @OptIn(ExperimentalUnsignedTypes::class)
    private val BINARY_POW_TABLE: Array<Long> = Array(Long.SIZE_BITS) { 2.0.pow(it).toULong().toLong() }

    fun binToLong(value: String, offset: Int): Long {
        check(value.length - offset <= Long.SIZE_BITS) // support unsigned value

        return value.foldFromRightOffsetIndexed(offset, 0L) { index, acc, char ->
            acc + when (char) {
                '0' -> 0
                '1' -> BINARY_POW_TABLE[index]
                else -> error("illegal digit '$char' in binary string $value") // no need to drop
            }
        }
    }
}


internal fun Long.limitToByte(): Byte {
    if (this in Byte.MIN_VALUE.toLong()..Byte.MAX_VALUE.toLong()) return this.toByte()
    error("value is too large for byte: $this")
}

internal fun Long.limitToShort(): Short {
    if (this in Short.MIN_VALUE.toLong()..Short.MAX_VALUE.toLong()) return this.toShort()
    error("value is too large for short: $this")
}

internal fun Long.limitToInt(): Int {
    if (this in Int.MIN_VALUE.toLong()..Int.MAX_VALUE.toLong()) return this.toInt()
    error("value is too large for int: $this")
}

// this is very frequently used
@Suppress("NOTHING_TO_INLINE")
internal inline fun String.optimizeNull(): String? = when (this) {
    "~", "null", "NULL" -> null
    else -> this
}


@Suppress("NOTHING_TO_INLINE")
internal inline fun Any.classSimpleName(): String? {
    return this::class.simpleName
}