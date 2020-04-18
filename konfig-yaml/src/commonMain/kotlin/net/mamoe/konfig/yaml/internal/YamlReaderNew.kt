package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.yaml.*
import kotlin.jvm.JvmField


/**
 * @return `null` if EOF
 */
internal fun YamlDecoder.nextPrimitive(): YamlPrimitive? {
    val buff = nextString(null, null)

    return buff?.asYamlNullOrNull()
        ?: buff?.let { YamlLiteral(buff, tokenStream.strQuoted) }
        ?: throw YamlDecodingException("type mismatch. Expected a String")
    // TODO: 2020/4/18 contextual exception
}

/**
 * @return `null` if EOF
 */
internal fun YamlDecoder.nextMap(): YamlMapContent? {
    TODO()
}

/**
 * @return `null` if EOF
 */
internal fun YamlDecoder.nextList(): YamlList? {
    TODO()
}

/**
 * @return `null` if EOF
 */
internal fun YamlDecoder.nextElement(): YamlElement? {
    TODO()
}

internal fun YamlDecoder.skipElement(): YamlElement? {
    TODO()
}

/**
 * The parser that provides [YamlElement]s from [TokenStream]
 */
internal class YamlDecoder(
    private val configuration: YamlConfiguration,
    internal val tokenStream: TokenStream,
    override val context: SerialModule,
    override val updateMode: UpdateMode
) : Decoder {
    fun nextString(descriptor: SerialDescriptor?, index: Int?): String? {
        val token = tokenStream.nextToken(true) ?: return null
        return when (token) {
            Token.MULTILINE_LIST_FLAG -> {
                "-" + nextString(descriptor, index)
            }
            Token.STRING -> {
                tokenStream.strBuff!!
            }
            else -> fail("expected string, found token $token instead", descriptor, index)
        }
    }

    abstract inner class AbstractDecoder : CompositeDecoder {
        override val context: SerialModule get() = this@YamlDecoder.context
        override val updateMode: UpdateMode get() = this@YamlDecoder.updateMode

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

        override fun <T : Any> decodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>): T? {
            return kotlin.runCatching {
                deserializer.deserialize(this@YamlDecoder)
            }.getOrElse {
                fail("deserializing nested class", descriptor, index, it)
            }
        }

        // these two are not the same
        override fun <T> decodeSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>): T {
            return kotlin.runCatching {
                deserializer.deserialize(this@YamlDecoder)
            }.getOrElse {
                fail("deserializing nested class", descriptor, index, it)
            }
        }

        override fun <T : Any> updateNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>, old: T?): T? {
            return decodeNullableSerializableElement(descriptor, index, deserializer)
        }

        override fun <T> updateSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>, old: T): T {
            return decodeSerializableElement(descriptor, index, deserializer)
        }
    }

    /**
     * Example:
     * ```yaml
     * test: value
     * ```
     */
    inner class YamlLikeMapDecoder(
        var baseIndent: Int
    ) : AbstractDecoder() {
        @JvmField
        var firstIndent = -1
        private fun checkIndent(newIndent: Int, descriptor: SerialDescriptor) {
            if (firstIndent == -1) {
                if (newIndent >= baseIndent) {
                    firstIndent = newIndent
                    return
                }
            } else {
                if (firstIndent == newIndent) {
                    return
                }
            }

            fail("failed checking indent, baseIndent=$baseIndent, firstIndent=$firstIndent, newIndent=$newIndent", descriptor, null)
        }

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            loop@ while (true) {
                when (val token = tokenStream.nextToken(false)) {
                    null -> return CompositeDecoder.READ_DONE
                    is Token.LINE_SEPARATOR -> {
                        continue@loop
                    }
                    Token.STRING -> {
                        if (tokenStream.currentIndent < baseIndent) {
                            tokenStream.reuseToken(tokenStream.strBuff!!)
                            return CompositeDecoder.READ_DONE
                        }

                        checkIndent(tokenStream.currentIndent, descriptor)
                        val index = descriptor.getElementIndex(tokenStream.strBuff!!)
                        if (index != CompositeDecoder.UNKNOWN_NAME) {
                            if (tokenStream.nextToken(false) != Token.COLON) {
                                fail("There must be a COLON between map key and value but found ${tokenStream.currentToken}", descriptor, null)
                            }
                            return index
                        } else {
                            TODO("skipping: ${tokenStream.strBuff}")
                        }
                    }
                    else -> {
                        fail("illegal token $token on decoding element index", descriptor, null)
                    }
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    /**
     * Example: `{test: value}`
     */
    inner class JsonLikeMapDecoder : AbstractDecoder() {
        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            return when (val token = tokenStream.nextToken(false)) {
                Token.MAP_END -> CompositeDecoder.READ_DONE
                Token.STRING -> {
                    val index = descriptor.getElementIndex(tokenStream.strBuff!!)
                    tokenStream.strBuff = null
                    if (index != CompositeDecoder.UNKNOWN_NAME) {
                        index
                    } else decodeElementIndex(descriptor)
                }
                else -> {
                    fail("illegal token $token on decoding element index", descriptor, null)
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    /**
     * Example:
     * ```
     * list:
     *   - a
     *   - b
     * ```
     * Or
     * ```
     * list:
     * - a
     * - b
     * ```
     */
    inner class MultilineClassDecoder : AbstractDecoder() {
        override fun decodeSequentially(): Boolean = false
        var index: Int = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            tokenStream.nextToken(false).let { token ->
                check(token == Token.STRING) {
                    throw contextualDecodingException(
                        "illegal token $token on decoding multiline list",
                        "",
                        token?.value.toString() + tokenStream.readUntilNewLine(10),
                        0
                    )
                }
            }
            return when (val token = tokenStream.nextToken(false)) {
                Token.STRING -> {
                    val index = descriptor.getElementIndex(tokenStream.strBuff!!)
                    tokenStream.strBuff = null
                    if (index != CompositeDecoder.UNKNOWN_NAME) {
                        index
                    } else decodeElementIndex(descriptor)
                }
                else -> {
                    fail("illegal token $token on decoding element index", descriptor, null)
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
        when (descriptor.kind) {
            is StructureKind.LIST -> {
                when (val token = tokenStream.nextToken(false)) {
                    Token.LIST_BEGIN -> {
                        TODO("square list decoder")
                    }
                    Token.MULTILINE_LIST_FLAG -> {
                        TODO("multiline list decoder")
                    }
                    else -> {
                        fail("illegal beginning token $token on decoding list", descriptor, null)
                    }
                }
            }
            is StructureKind.CLASS,
            is StructureKind.MAP
            -> {
                return when (tokenStream.nextToken(false)) {
                    Token.MAP_BEGIN -> {
                        JsonLikeMapDecoder()
                    }
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        YamlLikeMapDecoder(tokenStream.currentIndent)
                    }
                    else -> {
                        fail("illegal beginning token on decoding list", descriptor, null)
                    }
                }
            }
            else -> {
                fail("unsupported SerialKind ${descriptor.kind}", descriptor, null)
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


    private fun decodeBooleanElementImpl(descriptor: SerialDescriptor?, index: Int?): Boolean {
        return nextString(descriptor, index)?.let { value ->
            when (value) {
                "~" -> null
                "0" -> false
                "1" -> true
                else -> when (value.toLowerCase()) {
                    "null" -> null
                    "true", "on" -> true
                    "false", "off" -> false
                    else -> {
                        if (configuration.nonStrictNumber) {
                            when (value.withDoubleValue("boolean", descriptor, index).toInt()) {
                                1 -> return true
                                0 -> return false
                            }
                        }
                        fail("illegal boolean value: $value", descriptor, index)
                    }
                }
            }
        } ?: kotlin.run {
            if (configuration.nonStrictNullability) {
                return false
            } else throw YamlUnexpectedNullException(descriptor, index)
        }
    }

    private fun decodeStringElementOrNull(descriptor: SerialDescriptor?, index: Int?): String? {
        return nextString(descriptor, index)?.let { value ->
            when {
                value == "~" -> null
                value.equals("null", ignoreCase = true) -> null
                else -> value
            }
        }
    }

    private fun decodeByteElementImpl(descriptor: SerialDescriptor?, index: Int?): Byte =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("byte", descriptor, index).limitToByte()

    private fun decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int?): Char =
        decodeStringElementOrNull(descriptor, index)?.let {
            check(it.length == 1) { "too many chars for a char: $it" }
            it.first()
        } ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    private fun decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int?): Double =
        decodeStringElementOrNull(descriptor, index)
            .withDoubleValue("double", descriptor, index)

    private fun decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int?): Float =
        decodeStringElementOrNull(descriptor, index)
            .withFloatValue("float", descriptor, index)

    private fun decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int?): Int =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("int", descriptor, index).limitToInt()

    private fun decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int?): Long =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("long", descriptor, index)

    private fun decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int?): Short =
        decodeStringElementOrNull(descriptor, index)
            .withIntegerValue("short", descriptor, index).limitToShort()

    private fun decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int?): String =
        decodeStringElementOrNull(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""

    private fun decodeUnitElementImpl(descriptor: SerialDescriptor?, index: Int?) {
        val value = (decodeStringElementOrNull(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index))
            ?: return

        check(value == "kotlin.Unit") { "value is not 'kotlin.Unit' for kotlin.Unit" }
    }


    private fun String?.castFromNullToZeroOrNull(descriptor: SerialDescriptor?, index: Int?): Long? {
        if (this == null || this == "~" || (this.length == 4 && this.toLowerCase() == "null")) {
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

    /**
     * Ensure the string is a **decimal** value, return this value
     *
     * @param typeName the name of the type, e.g. "double", "float"
     */
    private fun String?.withDoubleValue(typeName: String, descriptor: SerialDescriptor?, index: Int?): Double {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            return 0.0
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            return when {
                canBeHexOrBin && (this[1] == 'x' || this[1] == 'X') -> HexConverter.hexToLong(this, 2).limitToDouble()
                canBeHexOrBin && (this[1] == 'b' || this[1] == 'B') -> BinaryConverter.binToLong(this, 2).limitToDouble()
                else -> kotlin.runCatching {
                    toDouble()
                }.getOrElse {
                    throw YamlIllegalNumberFormatException(this, typeName, descriptor, index, it)
                }
            }
        }
    }

    /**
     * Ensure the string is a **decimal** value, read this value and return
     *
     * @param typeName the name of the type, e.g. "double", "float"
     */
    private fun String?.withFloatValue(typeName: String, descriptor: SerialDescriptor?, index: Int?): Float {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            return 0f
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            return when {
                canBeHexOrBin && (this[1] == 'x' || this[1] == 'X') -> HexConverter.hexToLong(this, 2).limitToFloat()
                canBeHexOrBin && (this[1] == 'b' || this[1] == 'B') -> BinaryConverter.binToLong(this, 2).limitToFloat()
                else -> kotlin.runCatching {
                    this.toFloat()
                }.getOrElse {
                    throw YamlIllegalNumberFormatException(this, typeName, descriptor, index, it)
                }
            }
        }
    }

    /**
     * Ensure the string is a **integer** value, read this value and return
     *
     * @param typeName the name of the type, e.g. "int", "long"
     */
    private fun String?.withIntegerValue(typeName: String, descriptor: SerialDescriptor?, index: Int?): Long {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            return 0L
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            return when {
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
        }
    }
}


private fun YamlDecoder.fail(message: String, descriptor: SerialDescriptor?, index: Int?, cause: Throwable? = null): Nothing {
    throw YamlSerializationException(
        "$message " +
            "when reading '${index?.let { descriptor?.getElementName(it) ?: "<decoding index or beginning>" } ?: "<top-level element>"}' " +
            "in '${descriptor?.serialName ?: "<unknown descriptor>"}'" + " remaining=${tokenStream.source.peakRemaining()}", cause
    )
}

class YamlDecodingException(message: String, cause: Throwable? = null) : SerializationException(message, cause)

internal fun contextualDecodingException(hint: String, error: String, text: String, cur: Int): YamlDecodingException {
    return YamlDecodingException(buildString {
        append(hint)
        append('\n')
        append(text)
        append('\n')
        repeat(cur) {
            append(' ')
        }
        append('^')
        append(' ')
        append(error)
    }, null)
}