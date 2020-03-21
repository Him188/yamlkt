@file:Suppress("DELEGATED_MEMBER_HIDES_SUPERTYPE_OVERRIDE")

package net.mamoe.konfig.yaml

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule

open class YamlSerializationException : Exception {
    constructor(message: String) : super(message)
    constructor(message: String, cause: Exception?) : super(message, cause)
}

@OptIn(InternalSerializationApi::class)
internal class YamlDecoder(
    private val configuration: YamlConfiguration,
    private val reader: YamlReader,
    override val context: SerialModule
) : CompositeDecoder, Decoder {
    override val updateMode: UpdateMode
        get() = UpdateMode.BANNED

    private abstract inner class BaseReader(
        var parentIndentSpaceCount: Int
    ) : Decoder by this {
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
                StructureKind.LIST -> ListReader(currentIndentSpaceCount)
                StructureKind.CLASS -> ClassReader(currentIndentSpaceCount)
                else -> error("unsupported descriptor: $descriptor")
            }
        }
    }

    private var lastElementName: YamlReader.IndentedValue? = null

    private inner class ClassReader(parentIndentSpaceCount: Int) : BaseReader(parentIndentSpaceCount), CompositeDecoder by this {

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
                is Char -> {
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


    private inner class ListReader(parentIndentSpaceCount: Int) : BaseReader(parentIndentSpaceCount), CompositeDecoder by this {
        override fun decodeSequentially(): Boolean = false
        var index = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {

            val isLastQuotation = reader.currentToken.token is TokenClass.QUOTATION
            println("------")
            println("last = ${reader.currentToken.token}")

            var token: Any = reader.skipLineSeparators()?.token ?: return CompositeDecoder.READ_DONE

            println("finally = $token")
            println("------")

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
                is Char -> {
                    return index++
                }
            }
            error("unexpected token: ${token::class.qualifiedName} $token")
        }
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
        println("top-level.beginStructure: ${descriptor.serialName}")

        return when (descriptor.kind) {
            StructureKind.LIST -> ListReader(0)
            StructureKind.CLASS -> ClassReader(0)
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

    override fun decodeSequentially(): Boolean = false
    override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
        error("top-level reading is not supported")
    }


    override fun <T : Any> decodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>): T? {
        TODO("not implemented")
    }

    override fun <T> decodeSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>): T {
        return deserializer.deserialize(this)
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
            } else fail("unexpected null value", descriptor, index)
        }
    }

    private fun decodeByteElementImpl(descriptor: SerialDescriptor?, index: Int?): Byte = decodeStringElementOrNull(descriptor, index)
        ?.let { (it.castToLongMagicalOrNull(descriptor, index) ?: it.toLongOrNull())?.limitToByte() ?: fail("illegal byte value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    private fun decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int?): Char = decodeStringElementOrNull(descriptor, index)
        ?.let { (it.castToLongMagicalOrNull(descriptor, index) ?: it.toLongOrNull())?.limitToChar() ?: fail("illegal char value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    private fun decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int?): Double = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToDouble() ?: it.toDoubleOrNull() ?: fail("illegal double value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0.0

    private fun decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int?): Float = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToFloat() ?: it.toFloatOrNull() ?: fail("illegal float value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0f

    private fun decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int?): Int = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToInt() ?: it.toIntOrNull() ?: fail("illegal int value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    private fun decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int?): Long = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index) ?: it.toLongOrNull() ?: fail("illegal long value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    private fun decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int?): Short = decodeStringElementOrNull(descriptor, index)
        ?.let { it.castToLongMagicalOrNull(descriptor, index)?.limitToShort() ?: it.toShortOrNull() ?: fail("illegal short value: $it", descriptor, index) }
        ?: checkNonStrictNullability(descriptor, index)
        ?: 0

    private fun decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int?): String = decodeStringElementOrNull(descriptor, index)
        ?: checkNonStrictNullability(descriptor, index)
        ?: ""

    private fun decodeUnitElementImpl(descriptor: SerialDescriptor?, index: Int?) {
        decodeStringElementOrNull(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index)
    }

    private fun String.castFromNullToZeroOrNull(descriptor: SerialDescriptor?, index: Int?): Long? {
        when {
            this == "~" || (this.length == 4 && this.toLowerCase() == "null") -> {
                if (configuration.nonStrictNullability) {
                    return 0
                } else fail("unexpected null value", descriptor, index)
            }
        }
        return null
    }

    private fun String.castToLongMagicalOrNull(descriptor: SerialDescriptor?, index: Int?): Long? {
        castFromNullToZeroOrNull(descriptor, index)?.let {
            return it
        }

        if (this.length > 2) {
            if (this[0] == '0') {
                if (this[1] == 'x' || this[1] == 'X') {
                    return HexConverter.hexToLong(this, 2)
                } else if (this[1] == 'b' || this[1] == 'B') {
                    return BinaryConverter.binToLong(this, 2)
                }
            }
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
    // endregion

    override fun <T : Any> updateNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>, old: T?): T? {
        throw UnsupportedOperationException()
    }

    override fun <T> updateSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>, old: T): T {
        throw UnsupportedOperationException()
    }
}