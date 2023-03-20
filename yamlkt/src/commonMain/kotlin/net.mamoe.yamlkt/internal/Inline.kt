package net.mamoe.yamlkt.internal

import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.CompositeDecoder
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.modules.SerializersModule

@OptIn(ExperimentalUnsignedTypes::class)
internal class InlineEncoder(
    private val writer: YamlWriter,
    private val encoder: Encoder,
    override val serializersModule: SerializersModule,
) : Encoder by encoder {
    override fun encodeInt(value: Int) = writer.write(value.toUInt().toString())
    override fun encodeLong(value: Long) = writer.write(value.toULong().toString())
    override fun encodeByte(value: Byte) = writer.write(value.toUByte().toString())
    override fun encodeShort(value: Short) = writer.write(value.toUShort().toString())
}

@OptIn(ExperimentalUnsignedTypes::class)
internal class InlineDecoder(
    private val delegate: YamlDecoder,
) : Decoder by delegate {
    override val serializersModule: SerializersModule get() = delegate.serializersModule

    override fun decodeByte(): Byte =
        delegate.run { decodeString().withIntegerValue("UByte", null, -1).toUByte().toByte() }

    override fun decodeShort(): Short =
        delegate.run { decodeString().withIntegerValue("UShort", null, -1).toUShort().toShort() }

    override fun decodeInt(): Int = delegate.run { decodeString().withIntegerValue("UInt", null, -1).toUInt().toInt() }
    override fun decodeLong(): Long =
        delegate.run { decodeString().withIntegerValue("ULong", null, -1).toULong().toLong() }
}

@OptIn(ExperimentalUnsignedTypes::class)
internal class InlineElementDecoder(
    private val yamlDecoder: YamlDecoder,
    private val compositeDecoder: YamlDecoder.AbstractDecoder,
    private val descriptor: SerialDescriptor,
    private val index: Int
) : Decoder by compositeDecoder, CompositeDecoder by compositeDecoder {
    override val serializersModule: SerializersModule get() = yamlDecoder.serializersModule
    override fun decodeElementIndex(descriptor: SerialDescriptor): Int =
        throw UnsupportedOperationException("InlineDecoder.decodeElementIndex")

    override fun decodeByte(): Byte = yamlDecoder.run {
        compositeDecoder.decodeStringElement(descriptor, index).withIntegerValue("UByte", null, -1).toUByte().toByte()
    }

    override fun decodeShort(): Short = yamlDecoder.run {
        compositeDecoder.decodeStringElement(descriptor, index).withIntegerValue("UShort", null, -1).toUShort()
            .toShort()
    }

    override fun decodeInt(): Int = yamlDecoder.run {
        compositeDecoder.decodeStringElement(descriptor, index).withIntegerValue("UInt", null, -1).toUInt().toInt()
    }

    override fun decodeLong(): Long = yamlDecoder.run {
        compositeDecoder.decodeStringElement(descriptor, index).withIntegerValue("ULong", null, -1).toULong().toLong()
    }
}