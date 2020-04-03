@file:Suppress("DELEGATED_MEMBER_HIDES_SUPERTYPE_OVERRIDE")

package net.mamoe.konfig.yaml

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule

open class YamlSerializationException : Exception {
    constructor(message: String) : super(message)
    constructor(message: String, cause: Throwable?) : super(message, cause)
}

class YamlUnexpectedNullException internal constructor(
    descriptor: SerialDescriptor?,
    index: Int? // -1 if null
) : YamlSerializationException(
    "unexpected null value " +
        "when reading property '${index.takeIf { it != -1 }?.let { descriptor?.getElementName(it) ?: "<unknown element indexed $index>" } ?: "<unknown element>"}' " +
        "for ${descriptor?.serialName ?: "<unknown descriptor>"} " +
        "you can enable `nonStrictNullability` to cast null to 0 or false."
)

class YamlIllegalNumberFormatException internal constructor(
    numberString: String,
    type: String,
    descriptor: SerialDescriptor?,
    index: Int?,
    cause: Throwable?
) : YamlSerializationException(
    "'$numberString' is not a valid $type " +
        "when reading property '${index?.let { descriptor?.getElementName(it) ?: "<unknown element indexed $index>" } ?: "<unknown element>"}' " +
        "for ${descriptor?.serialName ?: "<unknown descriptor>"}", cause
)

@OptIn(InternalSerializationApi::class)
internal class YamlDecoder(
    private val configuration: YamlConfiguration,
    private val reader: YamlReader,
    override val context: SerialModule
) : CompositeDecoder, Decoder {
    override val updateMode: UpdateMode
        get() = UpdateMode.BANNED

    private abstract inner class BaseReader : Decoder by this {
        var currentIndentSpaceCount: Int = -1
        fun setCurrentIndentSpaceCountIfAbsent(count: Int, descriptor: SerialDescriptor, name: String) {
            if (currentIndentSpaceCount == -1) {
                currentIndentSpaceCount = count
                println("set currentIndentSpaceCount=$count, when descriptor=${descriptor.serialName}, name=$name")
            }
        }

        fun spacesForDebug(): String {
            val count = currentIndentSpaceCount
            return if (count == -1) {
                ""
            } else " ".repeat(count)
        }

        fun checkIndent(indentedValue: YamlReader.IndentedValue, descriptor: SerialDescriptor): Boolean {
            val actualIndent = indentedValue.indentSpaceCount
            setCurrentIndentSpaceCountIfAbsent(actualIndent, descriptor, indentedValue.value)
            if (actualIndent < currentIndentSpaceCount) {
                lastElementName = indentedValue
                return false
            }
            check(actualIndent == currentIndentSpaceCount) {
                "illegal indent, expected $currentIndentSpaceCount, actual $actualIndent. " +
                    "recent descriptor=${descriptor.serialName}, element=${indentedValue.value}"
            }
            return true
        }

        final override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
            println("BaseReader.beginStructure: ${descriptor.serialName}")
            return when (descriptor.kind) {
                StructureKind.LIST -> ListReader()
                StructureKind.CLASS -> ClassReader()
                else -> error("unsupported descriptor: $descriptor")
            }
        }
    }

    private var lastElementName: YamlReader.IndentedValue? = null

    private inner class ClassReader : BaseReader(), CompositeDecoder by this {

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            println("${spacesForDebug()}ClassReader.decodeElementIndex: ${descriptor.serialName}")


            val indentedToken = reader.nextTokenOrNull() ?: return CompositeDecoder.READ_DONE

            val elementName = lastElementName?.let {
                if (!checkIndent(it, descriptor)) {
                    return CompositeDecoder.READ_DONE
                }
                lastElementName = null // ensure used one-time
                it
            } ?: when (indentedToken.token) {
                is TokenClass.SQUARE_BRACKET_RIGHT -> return CompositeDecoder.READ_DONE
                is TokenClass.CURLY_BRACKET_RIGHT -> return CompositeDecoder.READ_DONE
                is TokenClass.QUOTATION,
                is TokenClass.LINE_SEPARATOR,
                is Char
                -> {
                    val indentedValue = reader.nextValue() ?: return CompositeDecoder.READ_DONE
                    if (!checkIndent(indentedValue, descriptor)) {
                        return CompositeDecoder.READ_DONE
                    }
                    println("${spacesForDebug()}read elementName: ${indentedValue.value}")
                    reader.nextTokenOrNull()
                    /*
                    .let { next ->
                        check(next?.token is TokenClass.COLON) { "unexpected token $next, required colon" }
                    }
                     */
                    indentedValue
                    //return descriptor.getElementIndex(indentedValue.value)
                }
                /* -> {
                     val elementName = reader.nextValue() ?: return CompositeDecoder.READ_DONE
                     if (!checkIndent(elementName, descriptor)) {
                         return CompositeDecoder.READ_DONE
                     }
                     println("${spacesForDebug()}read elementName: ${elementName.value}")
                     reader.nextTokenOrNull()
                     elementName
                 }*/
                else -> error("unexpected token: $indentedToken when reading class or map")
            }

            descriptor.getElementIndex(elementName.value).let { index ->
                return if (index == CompositeDecoder.UNKNOWN_NAME) {
                    if (reader.skipElement(currentIndentSpaceCount) == null) {
                        // EOF
                        return CompositeDecoder.READ_DONE
                    }
                    decodeElementIndex(descriptor) // try next element
                } else {
                    index
                }
            }
        }
    }


    private inner class ListReader : BaseReader(), CompositeDecoder by this {
        override fun decodeSequentially(): Boolean = false
        var index = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {

            val isLastQuotation = reader.currentToken.token is TokenClass.QUOTATION
            val skippedLine = reader.currentToken.token is TokenClass.MULTILINE_LIST_FLAG
            var token: Any = reader.skipLineSeparators()?.token ?: return CompositeDecoder.READ_DONE

            if (isLastQuotation) {
                // [ "a", "b" ]
                // must ensure the token next to ending double quotation is comma
                // TODO: 2020/3/21 contextual exception
                check(token is TokenClass.COMMA) { "the token next to ending double quotation must be comma, but found $token" }
                token = reader.nextTokenOrNull()?.token ?: return CompositeDecoder.READ_DONE

                token = reader.skipLineSeparators()?.token ?: return CompositeDecoder.READ_DONE
            }

            when (token) {
                is TokenClass.SQUARE_BRACKET_RIGHT -> return CompositeDecoder.READ_DONE
                is TokenClass.QUOTATION,
                is Char
                -> {
                    return index++
                }
                is TokenClass.MULTILINE_LIST_FLAG -> {
                    // TODO: 2020/3/21 check here
                    if (!skippedLine) {
                        return CompositeDecoder.READ_DONE // single value
                    }
                    return index++
                }
            }
            error("unexpected token: ${token::class.qualifiedName} $token")
        }
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
        println("top-level.beginStructure: ${descriptor.serialName}")

        return when (descriptor.kind) {
            StructureKind.LIST -> ListReader()
            StructureKind.CLASS -> ClassReader()
            else -> error("unsupported descriptor: $descriptor")
        }
    }

    private fun fail(message: String, descriptor: SerialDescriptor?, index: Int?): Nothing {
        throw YamlSerializationException(
            "$message " +
                "when reading ${index?.let { descriptor?.getElementName(it) ?: "<unknown element indexed $index>" } ?: "<unknown element>"} " +
                "in ${descriptor?.serialName ?: "<unknown descriptor>"}"
        )
    }

    override fun decodeSequentially(): Boolean = true // it's ok because specific decoders will be used after `beginStructure`
    override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
        error("shouldn't be reached")
    }


    override fun <T : Any> decodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>): T? {
        return deserializer.deserialize(this)
    }

    override fun <T> decodeSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>): T {
        return deserializer.deserialize(this)
    }

    override fun endStructure(descriptor: SerialDescriptor) {

    }

    // region Decoder primitives override
    override fun decodeShort(): Short = decodeShortElementImpl(null, null)
    override fun decodeString(): String = decodeStringElementImpl(null, null)
    override fun decodeUnit() = decodeUnitElementImpl(null, null)
    override fun decodeBoolean(): Boolean = decodeBooleanElementImpl(null, null)
    override fun decodeByte(): Byte = decodeByteElementImpl(null, null)
    override fun decodeChar(): Char = decodeCharElementImpl(null, null)
    override fun decodeDouble(): Double = decodeDoubleElementImpl(null, null)

    override fun decodeEnum(enumDescriptor: SerialDescriptor): Int {
        TODO("not implemented")
    }

    override fun decodeFloat(): Float = decodeFloatElementImpl(null, null)
    override fun decodeInt(): Int = decodeIntElementImpl(null, null)
    override fun decodeLong(): Long = decodeLongElementImpl(null, null)
    override fun decodeNotNullMark(): Boolean = false // TODO: 2020/3/19 check
    override fun decodeNull(): Nothing? = null // TODO: 2020/3/19 check
    // endregion

    // region CompositeDecoder primitives override
    override fun decodeBooleanElement(descriptor: SerialDescriptor, index: Int): Boolean = decodeBooleanElementImpl(descriptor, index)
    override fun decodeByteElement(descriptor: SerialDescriptor, index: Int): Byte = decodeByteElementImpl(descriptor, index)
    override fun decodeCharElement(descriptor: SerialDescriptor, index: Int): Char = decodeCharElementImpl(descriptor, index)
    override fun decodeDoubleElement(descriptor: SerialDescriptor, index: Int): Double = decodeDoubleElementImpl(descriptor, index)
    override fun decodeFloatElement(descriptor: SerialDescriptor, index: Int): Float = decodeFloatElementImpl(descriptor, index)
    override fun decodeIntElement(descriptor: SerialDescriptor, index: Int): Int = decodeIntElementImpl(descriptor, index)
    override fun decodeLongElement(descriptor: SerialDescriptor, index: Int): Long = decodeLongElementImpl(descriptor, index)
    override fun decodeShortElement(descriptor: SerialDescriptor, index: Int): Short = decodeShortElementImpl(descriptor, index)
    override fun decodeStringElement(descriptor: SerialDescriptor, index: Int): String = decodeStringElementImpl(descriptor, index)
    override fun decodeUnitElement(descriptor: SerialDescriptor, index: Int) = decodeUnitElementImpl(descriptor, index)
    // endregion

    // region primitives deserialize impl

    private fun decodeBooleanElementImpl(descriptor: SerialDescriptor?, index: Int?): Boolean {
        return reader.nextValue()?.value?.let { value ->
            when (value) {
                "~" -> null
                "0" -> false
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
            } else throw YamlUnexpectedNullException(descriptor, index)
        }
    }

    private fun decodeByteElementImpl(descriptor: SerialDescriptor?, index: Int?): Byte =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("byte", descriptor, index) { it.limitToByte() }

    private fun decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int?): Char =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("char", descriptor, index) { it.limitToChar() }

    private fun decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int?): Double =
        decodeStringElementOrNull(descriptor, index)
            .withDecimalValue("double", descriptor, index) { it }

    private fun decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int?): Float =
        decodeStringElementOrNull(descriptor, index)
            .withDecimalValue("float", descriptor, index) { it.toFloat() }

    private fun decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int?): Int =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("int", descriptor, index) { it.limitToInt() }

    private fun decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int?): Long =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("long", descriptor, index) { it }

    private fun decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int?): Short =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("short", descriptor, index) { it.limitToShort() }

    private fun decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int?): String =
        decodeStringElementOrNull(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""

    private fun decodeUnitElementImpl(descriptor: SerialDescriptor?, index: Int?) {
        decodeStringElementOrNull(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index)
    }

    private fun String?.castFromNullToZeroOrNull(descriptor: SerialDescriptor?, index: Int?): Long? {
        if (this == null) {
            return null
        }
        if (this == "~" || (this.length == 4 && this.toLowerCase() == "null")) {
            if (configuration.nonStrictNullability) {
                return 0
            } else throw YamlUnexpectedNullException(descriptor, index)
        }
        return null
    }

    private fun checkNonStrictNullability(descriptor: SerialDescriptor?, index: Int?): Nothing? {
        if (!configuration.nonStrictNullability) fail("unexpected null value", descriptor, index)
        return null
    }

    private fun decodeStringElementOrNull(descriptor: SerialDescriptor?, index: Int?): String? {
        return reader.nextValue()?.value?.let { value ->
            when {
                value == "~" -> null
                value.equals("null", ignoreCase = true) -> null
                else -> value
            }
        }
    }

    /**
     * Ensure the string is a **decimal** value, read this value then call [consumer]
     *
     * @param typeName the name of the type, e.g. "double", "float"
     */
    private inline fun <R> String?.withDecimalValue(typeName: String, descriptor: SerialDescriptor?, index: Int?, consumer: (value: Double) -> R): R {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            consumer(0.0)
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            val value = when {
                canBeHexOrBin && (this[1] == 'x' || this[1] == 'X') -> HexConverter.hexToLong(this, 2).limitToDouble()
                canBeHexOrBin && (this[1] == 'b' || this[1] == 'B') -> BinaryConverter.binToLong(this, 2).limitToDouble()
                else -> kotlin.runCatching {
                    this.toDouble()
                }.getOrElse {
                    throw YamlIllegalNumberFormatException(this, typeName, descriptor, index, it)
                }
            }

            value.let(consumer)
        }
    }


    /**
     * Ensure the string is a **decimal** value, read this value then call [consumer]
     *
     * @param typeName the name of the type, e.g. "double", "float"
     */
    private inline fun <R> String?.withIntegerValue(typeName: String, descriptor: SerialDescriptor?, index: Int?, consumer: (value: Long) -> R): R {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            consumer(0L)
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            val value = when {
                canBeHexOrBin && (this[1] == 'x' || this[1] == 'X') -> HexConverter.hexToLong(this, 2)
                canBeHexOrBin && (this[1] == 'b' || this[1] == 'B') -> BinaryConverter.binToLong(this, 2)
                else -> kotlin.runCatching {
                    if (configuration.nonStrictNumber) {
                        this.toDouble().toLong()
                    } else {
                        this.toLong()
                    }
                }.getOrElse {
                    throw YamlIllegalNumberFormatException(this, typeName, descriptor, index, it)
                }
            }

            value.let(consumer)
        }
    }
    // endregion

    override fun <T : Any> updateNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>, old: T?): T? {
        throw UnsupportedOperationException()
    }

    override fun <T> updateSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>, old: T): T {
        throw UnsupportedOperationException()
    }
}