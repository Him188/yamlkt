package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.yaml.YamlConfiguration

internal interface CharOutputStream {
    fun write(str: String)
    fun write(str: Char)
}

internal class YamlWriter(
    output: CharOutputStream
) : CharOutputStream by output {

}

internal class YamlEncoder(
    private val configuration: YamlConfiguration,
    override val context: SerialModule,
    private val writer: YamlWriter
) : CompositeEncoder, Encoder {
    override fun shouldEncodeElementDefault(descriptor: SerialDescriptor, index: Int): Boolean = configuration.encodeDefaultValues


    override fun beginCollection(descriptor: SerialDescriptor, collectionSize: Int, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
        return super.beginCollection(descriptor, collectionSize, *typeSerializers)
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
        TODO("not implemented")
    }

    override fun encodeBoolean(value: Boolean) = writer.write(if (value) configuration.booleanSerialization.trueValue else configuration.booleanSerialization.falseValue)
    override fun encodeByte(value: Byte) = writer.write(value.toChar())
    override fun encodeChar(value: Char) = writer.write(value)
    override fun encodeDouble(value: Double) = writer.write(value.toString())
    override fun encodeEnum(enumDescriptor: SerialDescriptor, index: Int) = writer.write(enumDescriptor.getElementName(index))
    override fun encodeFloat(value: Float) = writer.write(value.toString())
    override fun encodeInt(value: Int) = writer.write(value.toString())
    override fun encodeLong(value: Long) = writer.write(value.toString())

    override fun encodeNull() = writer.write("null")

    override fun <T : Any> encodeNullableSerializableValue(serializer: SerializationStrategy<T>, value: T?) =
        if (value == null) encodeNull()
        else encodeSerializableValue(serializer, value)

    override fun <T> encodeSerializableValue(serializer: SerializationStrategy<T>, value: T) {
        TODO()
    }

    override fun encodeShort(value: Short) = writer.write(value.toString())
    override fun encodeString(value: String) {
        when (configuration.stringSerialization) {
            YamlConfiguration.StringSerialization.NONE -> {
                writer.write(value)
            }
            YamlConfiguration.StringSerialization.SINGLE_QUOTATION -> {
                writer.write("\'$value\'")
            } // TODO: 2020/4/3 转义
            YamlConfiguration.StringSerialization.DOUBLE_QUOTATION -> {
                writer.write("\"$value\"")
            }
        }
    }

    override fun encodeUnit() = writer.write(Unit.toString())

    override fun encodeBooleanElement(descriptor: SerialDescriptor, index: Int, value: Boolean) {

    }

    override fun encodeByteElement(descriptor: SerialDescriptor, index: Int, value: Byte) {
        TODO("not implemented")
    }

    override fun encodeCharElement(descriptor: SerialDescriptor, index: Int, value: Char) {
        TODO("not implemented")
    }

    override fun encodeDoubleElement(descriptor: SerialDescriptor, index: Int, value: Double) {
        TODO("not implemented")
    }

    override fun encodeFloatElement(descriptor: SerialDescriptor, index: Int, value: Float) {
        TODO("not implemented")
    }

    override fun encodeIntElement(descriptor: SerialDescriptor, index: Int, value: Int) {
        TODO("not implemented")
    }

    override fun encodeLongElement(descriptor: SerialDescriptor, index: Int, value: Long) {
        TODO("not implemented")
    }

    override fun <T : Any> encodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T?) {
        TODO("not implemented")
    }

    override fun <T> encodeSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
        TODO("not implemented")
    }

    override fun encodeShortElement(descriptor: SerialDescriptor, index: Int, value: Short) {
        TODO("not implemented")
    }

    override fun encodeStringElement(descriptor: SerialDescriptor, index: Int, value: String) {
        TODO("not implemented")
    }

    override fun encodeUnitElement(descriptor: SerialDescriptor, index: Int) {
        TODO("not implemented")
    }

    override fun endStructure(descriptor: SerialDescriptor) {
        TODO("not implemented")
    }
}