package net.mamoe.konfig.yaml

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule

class YamlSerializationException : Exception {
    constructor(message: String) : super(message)
    constructor(message: String, cause: Exception?) : super(message, cause)
}

internal class Tag(
    val serialName: String
)

@OptIn(InternalSerializationApi::class)
internal class YamlDecoder(
    val configuration: YamlConfiguration,
    val reader: YamlReader,
    override val context: SerialModule
) : CompositeDecoder {
    override val updateMode: UpdateMode
        get() = UpdateMode.BANNED

    private fun fail(message: String, descriptor: SerialDescriptor, index: Int): Nothing {
        throw YamlSerializationException(
            "$message " +
                "when reading value for ${descriptor.getElementName(index)} " +
                "in ${descriptor.serialName}"
        )
    }

    override fun decodeSequentially(): Boolean = false
    override fun decodeElementIndex(descriptor: SerialDescriptor): Int {


        return CompositeDecoder.READ_DONE
    }

    override fun decodeBooleanElement(descriptor: SerialDescriptor, index: Int): Boolean {
        return reader.nextValue()?.let { value ->
            when (value) {
                "~" -> null
                "1" -> true
                else -> when (value.toLowerCase()) {
                    "null" -> null
                    "true", "on" -> true
                    "false", "off" -> false
                    else -> fail("unexpected boolean value: $value", descriptor, index)
                }
            }
        } ?: kotlin.run {
            if (configuration.nonStrictNullability) {
                return false
            } else fail("unexpected null value", descriptor, index)
        }
    }

    private fun String.castFromNullToZeroOrNull(descriptor: SerialDescriptor, index: Int): Long? {
        when {
            this == "~" || (this.length == 4 && this.toLowerCase() == "null") -> {
                if (configuration.nonStrictNullability) {
                    return 0
                } else fail("unexpected null value", descriptor, index)
            }
        }
        return null
    }

    private fun String.castToLongMagicalOrNull(descriptor: SerialDescriptor, index: Int): Long? {
        castFromNullToZeroOrNull(descriptor, index)?.let {
            return it
        }

        if (this.length > 2) {
            if (this[0] == '0') {
                if (this[1] == 'x' || this[1] == 'X') {
                    HexConverter.hexToLong(this, 2)
                } else if (this[1] == 'b' || this[1] == 'B') {
                    BinaryConverter.binToLong(this, 2)
                }
            }
        }

        return null
    }

    override fun decodeByteElement(descriptor: SerialDescriptor, index: Int): Byte = decodeStringElementOrNull(descriptor, index)
        ?.let { (it.castToLongMagicalOrNull(descriptor, index) ?: it.toLongOrNull())?.limitToByte() ?: fail("illegal byte value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    override fun decodeCharElement(descriptor: SerialDescriptor, index: Int): Char = decodeStringElementOrNull(descriptor, index)
        ?.let { (it.castToLongMagicalOrNull(descriptor, index) ?: it.toLongOrNull())?.limitToChar() ?: fail("illegal char value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    override fun decodeDoubleElement(descriptor: SerialDescriptor, index: Int): Double = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToDouble() ?: it.toDoubleOrNull() ?: fail("illegal double value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0.0

    override fun decodeFloatElement(descriptor: SerialDescriptor, index: Int): Float = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToFloat() ?: it.toFloatOrNull() ?: fail("illegal float value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0f

    override fun decodeIntElement(descriptor: SerialDescriptor, index: Int): Int = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToInt() ?: it.toIntOrNull() ?: fail("illegal int value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    override fun decodeLongElement(descriptor: SerialDescriptor, index: Int): Long = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index) ?: it.toLongOrNull() ?: fail("illegal long value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    override fun decodeShortElement(descriptor: SerialDescriptor, index: Int): Short = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToShort() ?: it.toShortOrNull() ?: fail("illegal short value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    override fun <T : Any> decodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>): T? {
        TODO("not implemented")
    }

    override fun <T> decodeSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>): T {
        TODO("not implemented")
    }

    private fun checkNonStrictNullability(descriptor: SerialDescriptor, index: Int): Nothing? {
        if (!configuration.nonStrictNullability) fail("unexpected null value", descriptor, index)
        return null
    }

    private fun decodeStringElementOrNull(descriptor: SerialDescriptor, index: Int): String? {
        return reader.nextValue()?.let { value ->
            when {
                value == "~" -> null
                value.equals("null", ignoreCase = true) -> null
                else -> value
            }
        }
    }

    override fun decodeStringElement(descriptor: SerialDescriptor, index: Int): String {
        return decodeStringElementOrNull(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""
    }

    override fun decodeUnitElement(descriptor: SerialDescriptor, index: Int) {
        decodeStringElementOrNull(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index)
    }

    override fun endStructure(descriptor: SerialDescriptor) {
        when (descriptor.kind) {
            PrimitiveKind.STRING -> {
                TODO()
            }
            else -> {
            }
        }
    }

    override fun <T : Any> updateNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>, old: T?): T? {
        throw UnsupportedOperationException()
    }

    override fun <T> updateSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>, old: T): T {
        throw UnsupportedOperationException()
    }
}