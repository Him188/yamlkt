package net.mamoe.konfig.yaml.internal

import net.mamoe.konfig.yaml.YamlLiteral
import net.mamoe.konfig.yaml.YamlNull
import net.mamoe.konfig.yaml.YamlPrimitive
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

internal fun Long.limitToFloat(): Float {
    if (this.toFloat().toLong() == this) return this.toFloat()
    error("value is too large for float: $this")
}

internal fun Long.limitToDouble(): Double {
    if (this.toDouble().toLong() == this) return this.toDouble()
    error("value is too large for double: $this")
}


private fun String.asYamlNullOrNull(): YamlNull? = when {
    this == "~" -> YamlNull
    this.trimMatching(4) { cur ->
        (this[cur] == 'n' || this[cur] == 'N') &&
            (this[cur + 1] == 'u' || this[cur + 1] == 'U') &&
            (this[cur + 2] == 'l' || this[cur + 2] == 'L') &&
            (this[cur + 3] == 'l' || this[cur + 3] == 'L')
    } -> YamlNull

    else -> null
}

internal fun String.toYamlLiteralOrYamlNull(isQuoted: Boolean): YamlPrimitive {
    return if (isQuoted) {
        YamlLiteral(this)
    } else this.asYamlNullOrNull() ?: YamlLiteral(this)
}

internal inline fun String.trimMatching(useLength: Int, block: String.(offset: Int) -> Boolean): Boolean {
    var cur = 0

    val maxOffset = this.length - useLength
    // skip ws
    while (cur <= maxOffset) {
        if (this[cur] != ' ') {
            // match
            if (!block(this, cur)) {
                return false
            }
            cur += useLength
            // skip ending ws
            while (cur < maxOffset) {
                if (this[cur] != ' ') {
                    // not matching
                    return false
                } else cur++
            }
            return true
        } else cur++
    }

    return false
}