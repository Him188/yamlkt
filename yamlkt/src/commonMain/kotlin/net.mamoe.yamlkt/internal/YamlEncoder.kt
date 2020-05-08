@file:JvmMultifileClass
@file:JvmName("YamlUtils")

@file:Suppress("NOTHING_TO_INLINE")

package net.mamoe.yamlkt.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlConfiguration
import net.mamoe.yamlkt.YamlNullableDynamicSerializer
import net.mamoe.yamlkt.internal.YamlEncoder.AbstractEncoder
import net.mamoe.yamlkt.internal.YamlEncoder.BlockMapOrClassEncoder
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName

/**
 * The encoder for the [Yaml] serialization.
 *
 * ## Primitive serializing
 * All the primitive values are serialized using [YamlNullableDynamicSerializer], as top-level serializing is not allowed.
 *
 * ## Structured serializing
 * ### Preparing
 * Each value to be serialized must have a capable [KSerializer].
 * Each [KSerializer] has a [SerialDescriptor], describing **how** the data is. See [SerialDescriptor] for details.
 *
 * ### Procedures
 * 1. [YamlEncoder.encodeSerializableValue] The descriptor and the value of the structure is given,
 *   then [KSerializer.serialize] is called.
 * 2. [YamlEncoder.beginStructureImpl] is then called, which creates suitable [AbstractEncoder] for the structure.
 *   E.g. for a map, [BlockMapOrClassEncoder] might be selected.
 * 3. [BlockMapOrClassEncoder] starts serialize the data sequentially.
 *   The key is passed by `encode*` functions, e.g. [BlockMapOrClassEncoder.encodeString], then the value corresponding to the key,
 *   then the key, the value...
 *   Therefore, if there are 10 map entries, the `encode*` functions will be called 20 times, interlaced with key and values.
 */
internal class YamlEncoder(
    private val configuration: YamlConfiguration,
    override val context: SerialModule,
    private val writer: YamlWriter
) : Encoder {


    /**
     * A **dispatcher** for creating suitable [AbstractEncoder]s for each structure.
     *
     * 'override' by [FlowEncoder.beginStructure] as only flow child is allowed in a flow.
     */
    private fun beginStructureImpl(parent: AbstractEncoder?, descriptor: SerialDescriptor, typeSerializers: Array<out KSerializer<*>>): CompositeEncoder {
        writer.levelIncrease()
        return when (descriptor.kind) {
            StructureKind.CLASS
            -> {
                when (configuration.classSerialization) {
                    YamlConfiguration.MapSerialization.BLOCK_MAP -> {
                        BlockMapOrClassEncoder(parent)
                    }
                    YamlConfiguration.MapSerialization.FLOW_MAP -> {
                        FlowMapOrClassEncoder(parent is BlockEncoder)
                    }
                }
            }
            StructureKind.MAP -> {
                when (configuration.mapSerialization) {
                    YamlConfiguration.MapSerialization.BLOCK_MAP -> {
                        BlockMapOrClassEncoder(parent)
                    }
                    YamlConfiguration.MapSerialization.FLOW_MAP -> {
                        FlowMapOrClassEncoder(parent is BlockEncoder)
                    }
                }
            }
            StructureKind.LIST -> {
                when (configuration.listSerialization) {
                    YamlConfiguration.ListSerialization.FLOW_SEQUENCE -> {
                        FlowSequenceEncoder(parent is BlockEncoder)
                    }
                    YamlConfiguration.ListSerialization.BLOCK_SEQUENCE -> {
                        BlockSequenceEncoder(parent, false)
                    }
                    YamlConfiguration.ListSerialization.AUTO -> {
                        if (typeSerializers[0].descriptor is PrimitiveKind) {
                            FlowSequenceEncoder(parent is BlockEncoder)
                        } else BlockSequenceEncoder(parent, false)
                    }
                }
            }
            else -> error("unsupported SerialKind: ${descriptor.kind}")
        }
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
        return beginStructureImpl(null, descriptor, typeSerializers)
    }


    internal inner class FlowMapOrClassEncoder(
        linebreakAfterFinish: Boolean
    ) : FlowEncoder(linebreakAfterFinish) {
        init {
            writer.write("{ ")
        }

        private var justStarted: Boolean = true

        // region for map

        private var isKey: Boolean = true
        private inline fun structuredKeyValue(block: YamlWriter.() -> Unit) {
            val isKey = isKey.also { isKey = !isKey }
            if (isKey) {
                if (justStarted) {
                    justStarted = false
                } else writer.write(", ")

                writer.block()
                writer.write(": ")
            } else {
                writer.block()
            }
        }

        override fun encodeValue(value: Char) = writer.write(value)
        override fun encodeValue(value: String) = writer.write(value)
        // endregion

        // region for class
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) = writer.write(value)
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String) = writer.write(value)

        override fun endStructure0(descriptor: SerialDescriptor) {
            writer.write(" }")
        }

        override fun <T> encodeSerializableElement0(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (descriptor.kind == StructureKind.CLASS) {
                if (justStarted) justStarted = false
                else writer.write(", ")

                writer.write(descriptor.getElementName(index))
                writer.write(": ")

                super.encodeSerializableElement0(descriptor, index, serializer, value)
            } else structuredKeyValue {
                super.encodeSerializableElement0(descriptor, index, serializer, value)
            }
        }

        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (descriptor.kind == StructureKind.MAP) return
            if (descriptor.kind == StructureKind.LIST) return

            if (justStarted) justStarted = false
            else writer.write(", ")

            writer.write(descriptor.getElementName(index))
            writer.write(": ")
        }
        // endregion
    }

    internal inner class FlowSequenceEncoder(
        linebreakAfterFinish: Boolean
    ) : FlowEncoder(linebreakAfterFinish) {

        init {
            writer.write("[ ")
        }

        override fun endStructure0(descriptor: SerialDescriptor) {
            writer.write(" ]")
        }

        override fun encodeValue(value: Char) = writer.write(value)
        override fun encodeValue(value: String) = writer.write(value)

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) = error("FlowSequenceEncoder.encodeElement shouldn't be called")
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String) = error("FlowSequenceEncoder.encodeElement shouldn't be called")

        private var justStarted = true
        override fun <T> encodeSerializableElement0(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (justStarted) justStarted = false
            else writer.write(", ")

            super.encodeSerializableElement0(descriptor, index, serializer, value)
        }

        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) = Unit
    }

    internal inner class BlockSequenceEncoder(parent: AbstractEncoder?, linebreakAfterFinish: Boolean) : BlockEncoder(linebreakAfterFinish) {
        init {
            if (parent is BlockMapOrClassEncoder) {
                writer.writeln()
            }
        }

        override fun encodeValue(value: Char) = writer.write(value)
        override fun encodeValue(value: String) = writer.write(value)

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) = error("BlockSequenceEncoder.encodeElement shouldn't be called")
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String) = error("BlockSequenceEncoder.encodeElement shouldn't be called")
        override fun endStructure0(descriptor: SerialDescriptor) = Unit

        private var justStarted = true
        override fun <T> encodeSerializableElement0(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (justStarted) {
                justStarted = false
            } else {
                writer.writeln()
            }
            writer.writeIndentedSmart("- ")
            super.encodeSerializableElement0(descriptor, index, serializer, value)
        }

        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) = Unit
    }

    internal inner class BlockMapOrClassEncoder(parent: AbstractEncoder?) : BlockEncoder(false) {
        init {
            if (parent is BlockMapOrClassEncoder) {
                writer.writeln()
            }
        }

        // region for class
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) {
            writer.writeLineIndented {
                +descriptor.getElementName(index)
                +": "
                +value
            }
        }

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String) {
            writer.writeLineIndented {
                +descriptor.getElementName(index)
                +": "
                +value
            }
        }
        // endregion


        private var isKey: Boolean = true
        private inline fun structuredKeyValue(block: YamlWriter.() -> Unit) {
            val isKey = isKey.also { isKey = !isKey }
            if (isKey) {
                writer.writeIndent()
                writer.block()
                writer.write(": ")
            } else {
                writer.block()
                writer.writeln()
            }
        }

        override fun encodeValue(value: Char) = writer.write(value)
        override fun encodeValue(value: String) = writer.write(value)

        override fun <T> encodeSerializableElement0(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (descriptor.kind == StructureKind.CLASS) {
                super.encodeSerializableElement0(descriptor, index, serializer, value)
            } else structuredKeyValue {
                super.encodeSerializableElement0(descriptor, index, serializer, value)
            }
        }

        override fun endStructure0(descriptor: SerialDescriptor) = Unit

        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (descriptor.kind == StructureKind.MAP) return
            if (descriptor.kind == StructureKind.LIST) return
            // structuredKeyValue {
            writer.writeIndented(descriptor.getElementName(index))
            writer.write(": ")
            //  }
        }
    }

    override fun encodeBoolean(value: Boolean) = writer.write(configuration.booleanSerialization[value])
    override fun encodeByte(value: Byte) = writer.write(value.toString())
    override fun encodeChar(value: Char) = writer.write(value)
    override fun encodeDouble(value: Double) = writer.write(value.toString())
    override fun encodeEnum(enumDescriptor: SerialDescriptor, index: Int) = writer.write(enumDescriptor.getElementName(index))
    override fun encodeFloat(value: Float) = writer.write(value.toString())
    override fun encodeInt(value: Int) = writer.write(value.toString())
    override fun encodeLong(value: Long) = writer.write(value.toString())
    override fun encodeShort(value: Short) = writer.write(value.toString())
    override fun encodeString(value: String) = writer.write(value.toEscapedString(writer.escapeBuf, configuration.stringSerialization))
    override fun encodeNull() = writer.write(configuration.nullSerialization.value)
    override fun encodeUnit() = error("Unit isn't supported")

    /**
     * Called by contextual
     */
    override fun <T> encodeSerializableValue(serializer: SerializationStrategy<T>, value: T) {
        serializer.serialize(this, value)
    }


    internal abstract inner class FlowEncoder(linebreakAfterFinish: Boolean) : AbstractEncoder(linebreakAfterFinish) {
        /**
         * [BlockEncoder] is not allowed in [FlowEncoder].
         */
        final override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
            writer.levelIncrease()
            return when (descriptor.kind) {
                StructureKind.CLASS -> FlowMapOrClassEncoder(false)
                StructureKind.MAP -> FlowMapOrClassEncoder(false)
                StructureKind.LIST -> FlowSequenceEncoder(false)
                else -> error("unsupported SerialKind: ${descriptor.kind}")
            }
        }

        override fun <T> writeSerializableElementTail(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            return
        }
    }

    internal abstract inner class BlockEncoder constructor(linebreakAfterFinish: Boolean) : AbstractEncoder(linebreakAfterFinish) {
        final override fun <T> writeSerializableElementTail(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            ///  if (descriptor.kind is StructureKind) {
            ///      writer.writeln()
            ///  }
        }
    }

    /**
     * The parent for all encoders. It have a skeleton of wrapped value encoding and indent arrangers.
     */
    internal abstract inner class AbstractEncoder(
        /**
         * If `true`, a new line will be added after ending this structure.
         */
        private val linebreakAfterFinish: Boolean
    ) : CompositeEncoder, Encoder {
        init {
            println("ENCODER: ${this.classSimpleName()}")
        }

        abstract fun encodeValue(value: Char)
        abstract fun encodeValue(value: String)

        abstract fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char)
        abstract fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String)

        final override fun endStructure(descriptor: SerialDescriptor) {
            writer.levelDecrease()
            this.endStructure0(descriptor)
            if (linebreakAfterFinish) {
                writer.writeln()
            }
        }

        abstract fun endStructure0(descriptor: SerialDescriptor)
        abstract fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T)
        abstract fun <T> writeSerializableElementTail(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T)
        open fun <T> encodeSerializableElement0(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            serializer.serialize(this, value)
        }

        final override fun <T> encodeSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            // if (descriptor.kind !is PrimitiveKind) {
            writeSerializableElementHead(descriptor, index, serializer, value)
            //  }
            encodeSerializableElement0(descriptor, index, serializer, value)
            writeSerializableElementTail(descriptor, index, serializer, value)
            return
        }

        override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
            return this@YamlEncoder.beginStructureImpl(this, descriptor, typeSerializers)
        }

        final override fun encodeCharElement(descriptor: SerialDescriptor, index: Int, value: Char) =
            encodeElement(descriptor, index, value)

        final override fun encodeBooleanElement(descriptor: SerialDescriptor, index: Int, value: Boolean) =
            encodeElement(descriptor, index, configuration.booleanSerialization.run { if (value) trueValue else falseValue })

        final override fun encodeByteElement(descriptor: SerialDescriptor, index: Int, value: Byte) =
            encodeElement(descriptor, index, value.toString())

        final override fun encodeDoubleElement(descriptor: SerialDescriptor, index: Int, value: Double) =
            encodeElement(descriptor, index, value.toString())

        final override fun encodeFloatElement(descriptor: SerialDescriptor, index: Int, value: Float) =
            encodeElement(descriptor, index, value.toString())

        final override fun encodeIntElement(descriptor: SerialDescriptor, index: Int, value: Int) =
            encodeElement(descriptor, index, value.toString())

        final override fun encodeLongElement(descriptor: SerialDescriptor, index: Int, value: Long) =
            encodeElement(descriptor, index, value.toString())

        final override fun encodeShortElement(descriptor: SerialDescriptor, index: Int, value: Short) =
            encodeElement(descriptor, index, value.toString())

        final override fun encodeStringElement(descriptor: SerialDescriptor, index: Int, value: String) =
            encodeElement(descriptor, index, value.toEscapedString(writer.escapeBuf, configuration.stringSerialization))

        final override fun encodeUnitElement(descriptor: SerialDescriptor, index: Int) {
            error("Unit isn't supported")
//            encodeElement(descriptor, index, "!!kotlin.Unit", false)
        }

        final override fun <T : Any> encodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T?) {
            if (value == null) {
                encodeElement(descriptor, index, configuration.nullSerialization.value)
            } else encodeSerializableElement(descriptor, index, serializer, value)
        }

        final override fun encodeBoolean(value: Boolean) =
            encodeValue(if (value) configuration.booleanSerialization.trueValue else configuration.booleanSerialization.falseValue)

        final override fun encodeByte(value: Byte) = encodeValue(value.toChar())
        final override fun encodeChar(value: Char) = encodeValue(value)
        final override fun encodeDouble(value: Double) = encodeValue(value.toString())
        final override fun encodeEnum(enumDescriptor: SerialDescriptor, index: Int) = encodeValue(enumDescriptor.getElementName(index))
        final override fun encodeFloat(value: Float) = encodeValue(value.toString())
        final override fun encodeInt(value: Int) = encodeValue(value.toString())
        final override fun encodeLong(value: Long) = encodeValue(value.toString())
        final override fun encodeNull() = encodeValue(configuration.nullSerialization.value)
        final override fun encodeShort(value: Short) = encodeValue(value.toString())
        final override fun encodeUnit(): Unit = error("Unit isn't supported")
        final override fun encodeString(value: String) = encodeValue(value.toEscapedString(writer.escapeBuf, configuration.stringSerialization))

        final override fun shouldEncodeElementDefault(descriptor: SerialDescriptor, index: Int): Boolean = configuration.encodeDefaultValues
        final override val context: SerialModule get() = this@YamlEncoder.context
    }
}

@Suppress("NOTHING_TO_INLINE")
internal inline fun Int.isEvenOrZero(): Boolean {
    return this and 0b1 == 0
}