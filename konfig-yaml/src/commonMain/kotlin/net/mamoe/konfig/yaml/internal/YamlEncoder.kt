@file:Suppress("NOTHING_TO_INLINE")

package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.yaml.YamlConfiguration
import kotlin.jvm.JvmField

internal class YamlWriter(
    output: Appendable
) : Appendable by output {
    inline fun write(char: Char) {
        append(char)
    }

    inline fun write(chars: String) {
        append(chars)
    }
}

internal class YamlEncoder(
    private val configuration: YamlConfiguration,
    override val context: SerialModule,
    private val writer: YamlWriter
) : Encoder {

    internal abstract inner class AbstractEncoder(
        @JvmField protected var index: Int = -4
    ) : CompositeEncoder, Encoder {
        abstract fun encodeValue(value: Char)
        abstract fun encodeValue(value: String)

        abstract fun encodeElement(descriptor: SerialDescriptor, index: Int, comments: List<String>?, value: Char)
        abstract fun encodeElement(descriptor: SerialDescriptor, index: Int, comments: List<String>?, value: String)

        override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder =
            this@YamlEncoder.beginStructure(descriptor, *typeSerializers)

        override fun encodeBooleanElement(descriptor: SerialDescriptor, index: Int, value: Boolean) {
            TODO("not implemented")
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

        override fun encodeShortElement(descriptor: SerialDescriptor, index: Int, value: Short) {
            TODO("not implemented")
        }

        override fun encodeStringElement(descriptor: SerialDescriptor, index: Int, value: String) {
            TODO("not implemented")
        }

        override fun encodeUnitElement(descriptor: SerialDescriptor, index: Int) {
            TODO("not implemented")
        }

        override fun <T : Any> encodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T?) {
            TODO("not implemented")
        }

        override fun <T> encodeSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            TODO("not implemented")
        }

        abstract override fun endStructure(descriptor: SerialDescriptor)


        final override fun encodeBoolean(value: Boolean) = encodeValue(if (value) configuration.booleanSerialization.trueValue else configuration.booleanSerialization.falseValue)
        final override fun encodeByte(value: Byte) = encodeValue(value.toChar())
        final override fun encodeChar(value: Char) = encodeValue(value)
        final override fun encodeDouble(value: Double) = encodeValue(value.toString())
        final override fun encodeEnum(enumDescriptor: SerialDescriptor, index: Int) = encodeValue(enumDescriptor.getElementName(index))
        final override fun encodeFloat(value: Float) = encodeValue(value.toString())
        final override fun encodeInt(value: Int) = encodeValue(value.toString())
        final override fun encodeLong(value: Long) = encodeValue(value.toString())
        final override fun encodeNull() = TODO("encode null")
        final override fun encodeShort(value: Short) = encodeValue(value.toString())
        final override fun encodeUnit(): Unit = TODO("not implemented")
        final override fun encodeString(value: String) {
            when (configuration.stringSerialization) {
                YamlConfiguration.StringSerialization.NONE -> {
                    encodeValue(value)
                }
                YamlConfiguration.StringSerialization.SINGLE_QUOTATION -> {
                    encodeValue("\'$value\'")
                } // TODO: 2020/4/3 ESCAPE
                YamlConfiguration.StringSerialization.DOUBLE_QUOTATION -> {
                    encodeValue("\"$value\"")
                }
            }
        }

        final override fun shouldEncodeElementDefault(descriptor: SerialDescriptor, index: Int): Boolean = configuration.encodeDefaultValues
        override val context: SerialModule get() = this@YamlEncoder.context
    }

    internal inner class BlockSequenceEncoder() {

    }


    /*
     * The top-level Encoder is a dispatcher to specific encoders.
     */

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
        TODO("not implemented")
    }

    override fun encodeBoolean(value: Boolean) = error("Internal error: shouldn't called")
    override fun encodeByte(value: Byte) = error("Internal error: shouldn't called")
    override fun encodeChar(value: Char) = error("Internal error: shouldn't called")
    override fun encodeDouble(value: Double) = error("Internal error: shouldn't called")
    override fun encodeEnum(enumDescriptor: SerialDescriptor, index: Int) = error("Internal error: shouldn't called")
    override fun encodeFloat(value: Float) = error("Internal error: shouldn't called")
    override fun encodeInt(value: Int) = error("Internal error: shouldn't called")
    override fun encodeLong(value: Long) = error("Internal error: shouldn't called")
    override fun encodeShort(value: Short) = error("Internal error: shouldn't called")
    override fun encodeString(value: String) = error("Internal error: shouldn't called")
    override fun encodeNull() = error("Internal error: shouldn't called")
    override fun encodeUnit() = error("Internal error: shouldn't called")

    override fun <T : Any> encodeNullableSerializableValue(serializer: SerializationStrategy<T>, value: T?) = error("Internal error: shouldn't called")
    override fun <T> encodeSerializableValue(serializer: SerializationStrategy<T>, value: T): Unit = error("Internal error: shouldn't called")
}