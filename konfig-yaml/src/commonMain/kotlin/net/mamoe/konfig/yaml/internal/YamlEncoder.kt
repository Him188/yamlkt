@file:Suppress("NOTHING_TO_INLINE")

package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.yaml.YamlConfiguration
import kotlin.jvm.JvmField

internal const val INDENT_STRING = "  "

internal class YamlWriter(
    output: Appendable
) : Appendable by output {
    @JvmField
    internal var level: Int = -1
    fun levelIncrease() {
        level++
    }

    fun levelDecrease() {
        level--
    }

    inline operator fun String.unaryPlus() {
        write(this)
    }

    inline operator fun Char.unaryPlus() {
        write(this)
    }
}

internal inline fun YamlWriter.write(char: Char) {
    append(char)
}

internal inline fun YamlWriter.writeln(char: Char) {
    append(char)
    writeln()
}

internal inline fun YamlWriter.writeln() {
    append('\n')
}

internal inline fun YamlWriter.write(chars: String) {
    append(chars)
}

internal inline fun YamlWriter.writeLine(line: YamlWriter.() -> Unit) {
    line()
    writeln()
}

internal inline fun YamlWriter.writeLineIndented(line: YamlWriter.() -> Unit) {
    writeIndent()
    line()
    writeln()
}

internal inline fun YamlWriter.writeln(chars: String) {
    append(chars)
    writeln()
}

internal inline fun YamlWriter.writelnIndented(chars: String) {
    writeIndented(chars)
    writeln()
}

internal inline fun YamlWriter.writeIndented(chars: String) {
    writeIndent()
    append(chars)
}

internal inline fun YamlWriter.writelnIndented(char: Char) {
    writeIndented(char)
    writeln()
}

internal inline fun YamlWriter.writeIndent() {
    repeat(level) {
        append(INDENT_STRING)
    }
}

internal inline fun YamlWriter.writeIndented(char: Char) {
    writeIndent()
    append(char)
}

internal class YamlEncoder(
    private val configuration: YamlConfiguration,
    override val context: SerialModule,
    private val writer: YamlWriter
) : Encoder {

    /*
     * The top-level Encoder is a dispatcher to specific encoders.
     */


    override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
        writer.levelIncrease()
        return when (descriptor.kind) {
            StructureKind.CLASS
            -> {
                // TODO: 2020/5/7 format selecting
                when (configuration.classSerialization) {
                    YamlConfiguration.MapSerialization.BLOCK_MAP -> {
                        BlockClassEncoder()
                    }
                    YamlConfiguration.MapSerialization.FLOW_MAP -> {
                        FlowClassEncoder()
                    }
                }
            }
            StructureKind.MAP -> {
                when (configuration.mapSerialization) {
                    YamlConfiguration.MapSerialization.BLOCK_MAP -> {
                        BlockMapEncoder()
                    }
                    YamlConfiguration.MapSerialization.FLOW_MAP -> {
                        FlowMapEncoder(descriptor.elementsCount)
                    }
                }
            }
            StructureKind.LIST -> {
                when (configuration.listSerialization) {
                    YamlConfiguration.ListSerialization.FLOW_SEQUENCE -> {
                        FlowSequenceEncoder(descriptor.elementsCount)
                    }
                    YamlConfiguration.ListSerialization.BLOCK_SEQUENCE -> {
                        BlockSequenceEncoder()
                    }
                    YamlConfiguration.ListSerialization.AUTO -> {
                        if (typeSerializers[0].descriptor is PrimitiveKind) {
                            FlowSequenceEncoder(descriptor.elementsCount)
                        } else BlockSequenceEncoder()
                    }
                }
            }
            else -> error("unsupported SerialKind: ${descriptor.kind}")
        }
    }


    internal inner class BlockMapEncoder : BlockEncoder() {
        private var isKey: Boolean = true
        override fun encodeValue(value: Char) {
            val isKey = isKey.also { isKey = !isKey }
            if (isKey) {
                writer.writeIndented(value)
            } else {
                writer.write(": ")
                writer.writeln(value)
            }
        }

        override fun encodeValue(value: String, isNumber: Boolean) {
            val isKey = isKey.also { isKey = !isKey }
            if (isKey) {
                writer.writeIndented(value)
            } else {
                writer.write(": ")
                writer.writeln(value)
            }
        }

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String, isNumber: Boolean) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun endStructure0(descriptor: SerialDescriptor) = Unit
        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) = Unit
    }

    internal inner class FlowMapEncoder(
        private val totalCount: Int
    ) : FlowEncoder() {
        private var count: Int = 0

        init {
            writer.write("{ ")
        }

        @Suppress("DuplicatedCode")
        override fun encodeValue(value: Char) {
            val isKey = count++.isEvenOrZero()
            if (isKey) {
                writer.write(value)
            } else {
                writer.write(": ")
                writer.write(value)
                if (count != totalCount) {
                    writer.write(", ")
                } else writer.write(" }")
            }
        }

        @Suppress("DuplicatedCode")
        override fun encodeValue(value: String, isNumber: Boolean) {
            val isKey = count++.isEvenOrZero()
            if (isKey) {
                writer.write(value)
            } else {
                writer.write(": ")
                writer.write(value)
                if (count != totalCount) {
                    writer.write(", ")
                } else writer.write(" }")
            }
        }

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String, isNumber: Boolean) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun endStructure0(descriptor: SerialDescriptor) = Unit
        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) = Unit
    }

    internal inner class FlowSequenceEncoder(
        private val totalCount: Int
    ) : FlowEncoder() {
        private var count: Int = 0

        init {
            writer.write("[ ")
        }

        @Suppress("DuplicatedCode")
        override fun encodeValue(value: Char) {
            writer.write(value)
            if (count++ != totalCount) {
                writer.write(", ")
            } else writer.write(" ]")
        }

        @Suppress("DuplicatedCode")
        override fun encodeValue(value: String, isNumber: Boolean) {
            writer.write(value)
            if (count++ != totalCount) {
                writer.write(", ")
            } else writer.write(" ]")
        }

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String, isNumber: Boolean) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun endStructure0(descriptor: SerialDescriptor) = Unit
        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) = Unit
    }

    internal inner class BlockSequenceEncoder : BlockEncoder() {
        init {
            writer.writeln()
        }

        override fun encodeValue(value: Char) {
            writer.writeLineIndented {
                +"- "
                +value
            }
        }

        override fun encodeValue(value: String, isNumber: Boolean) {
            writer.writeLineIndented {
                +"- "
                +value
            }
        }

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String, isNumber: Boolean) = error("BlockMapEncoder.encodeElement shouldn't be called")
        override fun endStructure0(descriptor: SerialDescriptor) = Unit
        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) = Unit
    }

    internal inner class FlowClassEncoder : FlowEncoder() {
        init {
            writer.write("{ ")
        }

        override fun encodeValue(value: Char): Unit = error("BlockClassEncoder.encodeValue shouldn't be called")
        override fun encodeValue(value: String, isNumber: Boolean): Unit = error("BlockClassEncoder.encodeValue shouldn't be called")

        private var justStarted: Boolean = true

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) {
            if (justStarted) justStarted = false
            else writer.write(", ")
            writer.write(descriptor.getElementName(index))
            writer.write(": ")
            writer.write(value)
        }

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String, isNumber: Boolean) {
            if (justStarted) justStarted = false
            else writer.write(", ")
            writer.write(descriptor.getElementName(index))
            writer.write(": ")
            writer.write(value)
        }

        override fun endStructure0(descriptor: SerialDescriptor) {
            writer.write(" }")
        }

        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (justStarted) justStarted = false
            else writer.write(", ")
            writer.write(descriptor.getElementName(index))
            writer.write(": ")
        }
    }

    internal inner class BlockClassEncoder : BlockEncoder() {
        init {
            writer.writeln()
        }

        override fun encodeValue(value: Char): Unit = error("BlockClassEncoder.encodeValue shouldn't be called")
        override fun encodeValue(value: String, isNumber: Boolean): Unit = error("BlockClassEncoder.encodeValue shouldn't be called")

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char) {
            writer.writeLineIndented {
                +descriptor.getElementName(index)
                +": "
                +value
            }
        }

        override fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String, isNumber: Boolean) {
            writer.writeLineIndented {
                +descriptor.getElementName(index)
                +": "
                +value
            }
        }

        override fun endStructure0(descriptor: SerialDescriptor) {
            return
        }

        override fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            writer.writeIndented(descriptor.getElementName(index))
            writer.write(": ")
        }
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


    internal abstract inner class FlowEncoder : AbstractEncoder() {
        override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
            writer.levelIncrease()
            return when (descriptor.kind) {
                StructureKind.CLASS -> FlowClassEncoder()
                StructureKind.MAP -> FlowMapEncoder(descriptor.elementsCount)
                StructureKind.LIST -> FlowSequenceEncoder(descriptor.elementsCount)
                else -> error("unsupported SerialKind: ${descriptor.kind}")
            }
        }

        override fun <T> writeSerializableElementTail(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            return
        }
    }

    internal abstract inner class BlockEncoder : AbstractEncoder() {
        final override fun <T> writeSerializableElementTail(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            writer.writeln()
        }
    }

    internal abstract inner class AbstractEncoder : CompositeEncoder, Encoder {
        abstract fun encodeValue(value: Char)
        abstract fun encodeValue(value: String, isNumber: Boolean)

        abstract fun encodeElement(descriptor: SerialDescriptor, index: Int, value: Char)
        abstract fun encodeElement(descriptor: SerialDescriptor, index: Int, value: String, isNumber: Boolean)

        final override fun endStructure(descriptor: SerialDescriptor) {
            writer.levelDecrease()
            this.endStructure0(descriptor)
        }

        abstract fun endStructure0(descriptor: SerialDescriptor)
        abstract fun <T> writeSerializableElementHead(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T)
        abstract fun <T> writeSerializableElementTail(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T)

        override fun <T> encodeSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T) {
            if (descriptor.kind !is PrimitiveKind) {
                writeSerializableElementHead(descriptor, index, serializer, value)
            }
            serializer.serialize(this, value)
            writeSerializableElementTail(descriptor, index, serializer, value)
            return
        }

        override fun beginStructure(descriptor: SerialDescriptor, vararg typeSerializers: KSerializer<*>): CompositeEncoder {
            return this@YamlEncoder.beginStructure(descriptor, *typeSerializers)
        }

        final override fun encodeCharElement(descriptor: SerialDescriptor, index: Int, value: Char) =
            encodeElement(descriptor, index, value)

        final override fun encodeBooleanElement(descriptor: SerialDescriptor, index: Int, value: Boolean) =
            encodeElement(descriptor, index, configuration.booleanSerialization.run { if (value) trueValue else falseValue }, true)

        final override fun encodeByteElement(descriptor: SerialDescriptor, index: Int, value: Byte) =
            encodeElement(descriptor, index, value.toString(), true)

        final override fun encodeDoubleElement(descriptor: SerialDescriptor, index: Int, value: Double) =
            encodeElement(descriptor, index, value.toString(), true)

        final override fun encodeFloatElement(descriptor: SerialDescriptor, index: Int, value: Float) =
            encodeElement(descriptor, index, value.toString(), true)

        final override fun encodeIntElement(descriptor: SerialDescriptor, index: Int, value: Int) =
            encodeElement(descriptor, index, value.toString(), true)

        final override fun encodeLongElement(descriptor: SerialDescriptor, index: Int, value: Long) =
            encodeElement(descriptor, index, value.toString(), true)

        final override fun encodeShortElement(descriptor: SerialDescriptor, index: Int, value: Short) =
            encodeElement(descriptor, index, value.toString(), true)

        final override fun encodeStringElement(descriptor: SerialDescriptor, index: Int, value: String) =
            encodeElement(
                descriptor, index, when (configuration.stringSerialization) {
                    YamlConfiguration.StringSerialization.NONE -> if (value.isEmpty()) "\'\'" else value
                    YamlConfiguration.StringSerialization.SINGLE_QUOTATION -> "\'$value\'"
                    // TODO: 2020/4/3 ESCAPE
                    YamlConfiguration.StringSerialization.DOUBLE_QUOTATION -> "\"$value\""
                }, false
            )

        final override fun encodeUnitElement(descriptor: SerialDescriptor, index: Int) {
            error("Unit isn't supported")
//            encodeElement(descriptor, index, "!!kotlin.Unit", false)
        }

        final override fun <T : Any> encodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, serializer: SerializationStrategy<T>, value: T?) {
            if (value == null) {
                encodeElement(descriptor, index, configuration.nullSerialization.value, true)
            } else encodeSerializableElement(descriptor, index, serializer, value)
        }

        final override fun encodeBoolean(value: Boolean) =
            encodeValue(if (value) configuration.booleanSerialization.trueValue else configuration.booleanSerialization.falseValue, true)

        final override fun encodeByte(value: Byte) = encodeValue(value.toChar())
        final override fun encodeChar(value: Char) = encodeValue(value)
        final override fun encodeDouble(value: Double) = encodeValue(value.toString(), true)
        final override fun encodeEnum(enumDescriptor: SerialDescriptor, index: Int) = encodeValue(enumDescriptor.getElementName(index), false)
        final override fun encodeFloat(value: Float) = encodeValue(value.toString(), true)
        final override fun encodeInt(value: Int) = encodeValue(value.toString(), true)
        final override fun encodeLong(value: Long) = encodeValue(value.toString(), true)
        final override fun encodeNull() = encodeValue(configuration.nullSerialization.value, true)
        final override fun encodeShort(value: Short) = encodeValue(value.toString(), true)
        final override fun encodeUnit(): Unit = error("Unit isn't supported")
        final override fun encodeString(value: String) = when (configuration.stringSerialization) {
            YamlConfiguration.StringSerialization.NONE -> {
                encodeValue(value, true)
            }
            YamlConfiguration.StringSerialization.SINGLE_QUOTATION -> {
                encodeValue("\'$value\'", true)
            } // TODO: 2020/4/3 ESCAPE
            YamlConfiguration.StringSerialization.DOUBLE_QUOTATION -> {
                encodeValue("\"$value\"", true)
            }
        }

        final override fun shouldEncodeElementDefault(descriptor: SerialDescriptor, index: Int): Boolean = configuration.encodeDefaultValues
        final override val context: SerialModule get() = this@YamlEncoder.context
    }
}

@Suppress("NOTHING_TO_INLINE")
internal inline fun Int.isEvenOrZero(): Boolean {
    return this and 0b1 == 0
}