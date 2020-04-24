package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.columnNumber
import net.mamoe.konfig.readLine
import net.mamoe.konfig.yaml.*
import net.mamoe.konfig.yaml.internal.EndingTokens.EMPTY_ENDING_TOKEN
import kotlin.jvm.JvmField
import kotlin.jvm.JvmStatic


/**
 * @return `null` if EOF
 */
internal fun YamlDecoder.nextPrimitive(): YamlPrimitive? {
    val buff = nextString(null, null, EMPTY_ENDING_TOKEN)

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
    fun nextString(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): String? {
        val token = tokenStream.nextToken(endingTokens) ?: return null
        return when (token) {
            Token.MULTILINE_LIST_FLAG -> {
                "-" + nextString(descriptor, index, endingTokens)
            }
            Token.STRING -> {
                tokenStream.strBuff!!
            }
            else -> fail("expected string, found token $token instead", descriptor, index)
        }
    }

    abstract inner class AbstractDecoder : CompositeDecoder, Decoder {
        final override val context: SerialModule get() = this@YamlDecoder.context
        final override val updateMode: UpdateMode get() = this@YamlDecoder.updateMode

        /**
         * The tokens that can end a unquoted string when reading **values**
         *
         * If `true`, [YamlDecodingException] is thrown if a [Token] is found when reading a unquoted string.
         */
        abstract val endingTokens: Array<out Token>

        // region CompositeDecoder primitives override
        final override fun decodeBooleanElement(descriptor: SerialDescriptor, index: Int): Boolean = decodeBooleanElementImpl(descriptor, index, endingTokens)
        final override fun decodeByteElement(descriptor: SerialDescriptor, index: Int): Byte = decodeByteElementImpl(descriptor, index, endingTokens)
        final override fun decodeCharElement(descriptor: SerialDescriptor, index: Int): Char = decodeCharElementImpl(descriptor, index, endingTokens)
        final override fun decodeDoubleElement(descriptor: SerialDescriptor, index: Int): Double = decodeDoubleElementImpl(descriptor, index, endingTokens)
        final override fun decodeFloatElement(descriptor: SerialDescriptor, index: Int): Float = decodeFloatElementImpl(descriptor, index, endingTokens)
        final override fun decodeIntElement(descriptor: SerialDescriptor, index: Int): Int = decodeIntElementImpl(descriptor, index, endingTokens)
        final override fun decodeLongElement(descriptor: SerialDescriptor, index: Int): Long = decodeLongElementImpl(descriptor, index, endingTokens)
        final override fun decodeShortElement(descriptor: SerialDescriptor, index: Int): Short = decodeShortElementImpl(descriptor, index, endingTokens)
        final override fun decodeStringElement(descriptor: SerialDescriptor, index: Int): String = decodeStringElementImpl(descriptor, index, endingTokens)
        final override fun decodeUnitElement(descriptor: SerialDescriptor, index: Int) = decodeUnitElementImpl(descriptor, index, endingTokens)
        // endregion

        // region Decoder primitives override
        final override fun decodeShort(): Short = decodeShortElementImpl(null, null, endingTokens)
        final override fun decodeString(): String = decodeStringElementImpl(null, null, endingTokens)
        final override fun decodeUnit() = decodeUnitElementImpl(null, null, endingTokens)
        final override fun decodeBoolean(): Boolean = decodeBooleanElementImpl(null, null, endingTokens)
        final override fun decodeByte(): Byte = decodeByteElementImpl(null, null, endingTokens)
        final override fun decodeChar(): Char = decodeCharElementImpl(null, null, endingTokens)
        final override fun decodeDouble(): Double = decodeDoubleElementImpl(null, null, endingTokens)
        final override fun decodeFloat(): Float = decodeFloatElementImpl(null, null, endingTokens)
        final override fun decodeInt(): Int = decodeIntElementImpl(null, null, endingTokens)
        final override fun decodeLong(): Long = decodeLongElementImpl(null, null, endingTokens)
        final override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
        final override fun decodeNotNullMark(): Boolean = false // TODO: 2020/4/19 not null mark
        final override fun decodeNull(): Nothing? = null // TODO: 2020/4/19 decode null
        // endregion

        override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
            return this@YamlDecoder.beginStructure(descriptor, *typeParams)
        }

        final override fun <T : Any> decodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>): T? {
            return kotlin.runCatching {
                deserializer.deserialize(this)
            }.getOrElse {
                fail("deserializing nested class", descriptor, index, it)
            }
        }

        // these two are not the same
        final override fun <T> decodeSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>): T {
            return kotlin.runCatching {
                deserializer.deserialize(this)
            }.getOrElse {
                fail("deserializing nested class", descriptor, index, it)
            }
        }

        final override fun <T : Any> updateNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>, old: T?): T? {
            return decodeNullableSerializableElement(descriptor, index, deserializer)
        }

        final override fun <T> updateSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>, old: T): T {
            return decodeSerializableElement(descriptor, index, deserializer)
        }
    }

    abstract inner class IndentedDecoder(
        @JvmField protected var baseIndent: Int
    ) : AbstractDecoder() {
        @JvmField
        protected var firstIndent = -1
        protected fun checkIndent(newIndent: Int, descriptor: SerialDescriptor) {
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

    }

    /**
     * Example:
     * ```yaml
     * test: value
     * ```
     */
    inner class YamlLikeClassDecoder(
        baseIndent: Int
    ) : IndentedDecoder(baseIndent) {
        override val endingTokens: Array<out Token>
            get() = EMPTY_ENDING_TOKEN

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            loop@ while (true) {
                when (val token = tokenStream.nextToken(EndingTokens.COLON)) {
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
                            if (tokenStream.nextToken(endingTokens) != Token.COLON) {
                                throw tokenStream.contextualDecodingException("There must be a COLON between map key and value but found ${tokenStream.currentToken} for '${descriptor.serialName}'")
                            }
                            return index
                        } else {
                            TODO("skipping: ${tokenStream.strBuff}")
                        }
                    }
                    else -> throw tokenStream.contextualDecodingException("illegal token $token on decoding element index for '${descriptor.serialName}'")
                }
            }
        }


        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }


    /**
     * Example:
     * ```yaml
     * test: value
     * ```
     */
    inner class YamlLikeMapDecoder(
        baseIndent: Int
    ) : IndentedDecoder(baseIndent) {
        private var index = 0
        override val endingTokens: Array<out Token>
            get() = EMPTY_ENDING_TOKEN

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index.isOdd()) {
                return index++
            }
            loop@ while (true) {
                when (val token = tokenStream.nextToken(EndingTokens.COLON)) {
                    END_OF_LINE -> return CompositeDecoder.READ_DONE
                    is Token.LINE_SEPARATOR -> continue@loop
                    Token.STRING -> {
                        if (tokenStream.currentIndent < baseIndent) {
                            tokenStream.reuseToken(tokenStream.strBuff!!)
                            return CompositeDecoder.READ_DONE
                        }

                        checkIndent(tokenStream.currentIndent, descriptor)
                        if (tokenStream.nextToken(EndingTokens.COLON) != Token.COLON) {
                            throw tokenStream.contextualDecodingException("There must be a COLON between map key and value but found ${tokenStream.currentToken} for '${descriptor.serialName}'")
                        }
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return index++
                    }
                    else -> throw tokenStream.contextualDecodingException("illegal token $token on decoding element index for '${descriptor.serialName}'")
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
        override val endingTokens: Array<out Token>
            get() = EndingTokens.COMMA_AND_MAP_END

        override fun decodeSequentially(): Boolean = false
        var index = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index.isOdd()) {
                return index++
            }
            if (index > 1) {
                loop@ while (true) {
                    return when (val token = tokenStream.nextToken(EndingTokens.COLON_AND_MAP_END)) {
                        is Token.LINE_SEPARATOR -> continue@loop
                        END_OF_LINE -> CompositeDecoder.READ_DONE
                        Token.MAP_END -> CompositeDecoder.READ_DONE
                        Token.COMMA -> break@loop
                        else -> throw tokenStream.contextualDecodingException("There must be a COMMA between json-like map entries but found $token for '${descriptor.serialName}'")
                    }
                }
            }
            loop@ while (true) {
                return when (val token = tokenStream.nextToken(EndingTokens.COLON_AND_MAP_END)) {
                    is Token.LINE_SEPARATOR -> {
                        continue@loop
                    }
                    END_OF_LINE -> CompositeDecoder.READ_DONE
                    Token.MAP_END -> CompositeDecoder.READ_DONE
                    Token.STRING -> {
                        if (tokenStream.nextToken(EndingTokens.COLON_AND_MAP_END) != Token.COLON) {
                            throw tokenStream.contextualDecodingException("Expected a COLON between json-like map entries but found $token for '${descriptor.serialName}'")
                        }
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return index++
                    }
                    else -> throw tokenStream.contextualDecodingException("Illegal token $token for '${descriptor.serialName}'")
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    /**
     * Example: `{test: value}`
     */
    inner class JsonLikeClassDecoder : AbstractDecoder() {
        override val endingTokens: Array<out Token>
            get() = EndingTokens.COMMA

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            return when (val token = tokenStream.nextToken(EndingTokens.COLON_AND_MAP_END)) {
                Token.MAP_END -> CompositeDecoder.READ_DONE
                Token.STRING -> {
                    val index = descriptor.getElementIndex(tokenStream.strBuff!!)
                    tokenStream.strBuff = null
                    if (index != CompositeDecoder.UNKNOWN_NAME) {
                        index
                    } else {
                        TODO("skip element")
                        // decodeElementIndex(descriptor)
                    }
                }
                else -> {
                    throw tokenStream.contextualDecodingException("illegal token $token on decoding element index for '${descriptor.serialName}'")
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    /**
     * Example: `[foo, bar]`
     */
    inner class SquareListDecoder : AbstractDecoder() {
        override val endingTokens: Array<out Token>
            get() = EndingTokens.COMMA_AND_LIST_END

        override fun decodeSequentially(): Boolean = false
        var index = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                return when (tokenStream.nextToken(endingTokens)) {
                    Token.LIST_END -> CompositeDecoder.READ_DONE // empty list
                    else -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return index++
                    }
                }
            }
            loop@ while (true) {
                return when (val token = tokenStream.nextToken(endingTokens)) {
                    is Token.LINE_SEPARATOR -> {
                        continue@loop
                    }
                    Token.COMMA -> index++
                    END_OF_LINE -> CompositeDecoder.READ_DONE
                    Token.LIST_END -> CompositeDecoder.READ_DONE
                    else -> {
                        throw tokenStream.contextualDecodingException(
                            "COMMA must be used to separate values, but found $token on decoding square list for '${descriptor.serialName}"
                        )
                    }
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {}
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
    inner class MultilineClassDecoder(
        baseIndent: Int
    ) : IndentedDecoder(baseIndent) {
        override fun decodeSequentially(): Boolean = false
        var index: Int = 0
        override val endingTokens: Array<out Token>
            get() = EndingTokens.COLON

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                return index++
            }
            while (true) {
                tokenStream.nextToken(endingTokens).let { token ->
                    when (token) {
                        is Token.LINE_SEPARATOR -> {
                            // continue
                        }
                        END_OF_LINE -> {
                            return CompositeDecoder.READ_DONE
                        }
                        Token.MULTILINE_LIST_FLAG -> {
                            checkIndent(tokenStream.currentIndent, descriptor)
                            return index++
                        }
                        Token.STRING -> {
                            tokenStream.reuseToken(tokenStream.strBuff!!)
                            return CompositeDecoder.READ_DONE
                        }
                        else -> {
                            throw tokenStream.contextualDecodingException(
                                "Expected ${Token.MULTILINE_LIST_FLAG.value}, but found $token on decoding multiline list for '${descriptor.serialName}'"
                            )
                        }
                    }
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    private fun decodeBooleanElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Boolean {
        return nextString(descriptor, index, endingTokens)?.let { value ->
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


    override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
        when (descriptor.kind) {
            StructureKind.LIST -> {
                return when (val token = tokenStream.nextToken(EndingTokens.COMMA)) {
                    Token.LIST_BEGIN -> SquareListDecoder()
                    Token.MULTILINE_LIST_FLAG -> MultilineClassDecoder(tokenStream.currentIndent)
                    else -> fail("illegal beginning token $token on decoding list", descriptor, null)
                }
            }
            StructureKind.CLASS -> {
                return when (tokenStream.nextToken(EndingTokens.COLON)) {
                    Token.MAP_BEGIN -> JsonLikeClassDecoder()
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        YamlLikeClassDecoder(tokenStream.currentIndent)
                    }
                    else -> fail("illegal beginning token on decoding list", descriptor, null)
                }
            }
            StructureKind.MAP -> {
                return when (tokenStream.nextToken(EndingTokens.COLON)) {
                    Token.MAP_BEGIN -> JsonLikeMapDecoder()
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        YamlLikeMapDecoder(tokenStream.currentIndent)
                    }
                    else -> fail("illegal beginning token on decoding list", descriptor, null)
                }
            }
            else -> fail("unsupported SerialKind ${descriptor.kind}", descriptor, null)
        }
    }


    // region Decoder primitives override
    override fun decodeShort(): Short = decodeShortElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeString(): String = decodeStringElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeUnit() = decodeUnitElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeBoolean(): Boolean = decodeBooleanElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeByte(): Byte = decodeByteElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeChar(): Char = decodeCharElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeDouble(): Double = decodeDoubleElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeFloat(): Float = decodeFloatElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeInt(): Int = decodeIntElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeLong(): Long = decodeLongElementImpl(null, null, EMPTY_ENDING_TOKEN)
    override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
    override fun decodeNotNullMark(): Boolean = false // TODO: 2020/4/19 not null mark
    override fun decodeNull(): Nothing? = null // TODO: 2020/4/19 decode null
    // endregion

    private fun nextStringOrNull(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): String? {
        return nextString(descriptor, index, endingTokens)?.let { value ->
            when {
                value == "~" -> null
                value.equals("null", ignoreCase = true) -> null
                else -> value
            }
        }
    }

    private fun decodeByteElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Byte =
        nextStringOrNull(descriptor, index, endingTokens)
            .withIntegerValue("byte", descriptor, index).limitToByte()

    private fun decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Char =
        nextStringOrNull(descriptor, index, endingTokens)?.let {
            check(it.length == 1) { "too many chars for a char: $it" }
            it.first()
        } ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    private fun decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Double =
        nextStringOrNull(descriptor, index, endingTokens)
            .withDoubleValue("double", descriptor, index)

    private fun decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Float =
        nextStringOrNull(descriptor, index, endingTokens)
            .withFloatValue("float", descriptor, index)

    private fun decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Int =
        nextStringOrNull(descriptor, index, endingTokens)
            .withIntegerValue("int", descriptor, index).limitToInt()

    private fun decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Long =
        nextStringOrNull(descriptor, index, endingTokens)
            .withIntegerValue("long", descriptor, index)

    private fun decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Short =
        nextStringOrNull(descriptor, index, endingTokens)
            .withIntegerValue("short", descriptor, index).limitToShort()

    private fun decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): String =
        nextStringOrNull(descriptor, index, endingTokens)
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""

    private fun decodeUnitElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>) {
        val value = (nextStringOrNull(descriptor, index, endingTokens)
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
        if (!configuration.nonStrictNullability)
            throw tokenStream.contextualDecodingException("unexpected null value, you may enable `nonStrictNullability`", descriptor, index)
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

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stacktrace
internal fun contextualDecodingException(hint: String, text: String, cur: Int, position: String): YamlDecodingException {
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
        append(position)
        append('\n')
    }, null)
}


@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal inline fun TokenStream.contextualDecodingException(hint: String): YamlDecodingException {
    return contextualDecodingException(hint, null, null)
}

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal inline fun TokenStream.contextualDecodingException(hint: String, descriptor: SerialDescriptor?, index: Int?): YamlDecodingException {
    val message: String = if (descriptor == null && index == null)
        hint
    else
        hint + "for '${index?.let { descriptor?.getElementName(it) ?: "<decoding index or beginning>" } ?: "<top-level element>"}' " +
            "in '${descriptor?.serialName ?: "<unknown descriptor>"}'"

    val currentTokenLength = if (currentToken is Token.STRING) {
        strBuff!!.length
    } else 1 // char

    val lineNumber = this.source.lineNumber

    val before = source.currentLine.limitLast(16)

    val last = source.readLine().limitFirst(16)
    val text = if (source.lineNumber != lineNumber) {
        before
    } else {
        before + last
    }

    val position = "at line ${this.source.lineNumber}, column ${this.source.columnNumber}"
    return contextualDecodingException(
        message,
        text,
        (before.length - currentTokenLength).coerceAtLeast(0),
        position
    )
}

internal fun String.limitLast(length: Int): String {
    if (this.length <= length)
        return this
    return "..." + this.takeLast(length)
}

internal fun String.limitFirst(length: Int): String {
    if (this.length <= length)
        return this
    return this.take(length) + "..."
}

@OptIn(ExperimentalStdlibApi::class)
private fun Int.isOdd(): Boolean {
    return this.takeLowestOneBit() == 1
}

@OptIn(ExperimentalStdlibApi::class)
private fun Int.isEvenOrZero(): Boolean {
    return this.shl(31).ushr(31) == 0
}

internal object EndingTokens {
    @JvmStatic
    val EMPTY_ENDING_TOKEN: Array<out Token> = arrayOf()

    @JvmStatic
    val COLON_AND_MAP_END: Array<out Token> = arrayOf(Token.COLON, Token.MAP_END)

    @JvmStatic
    val COMMA: Array<out Token> = arrayOf(Token.COMMA)

    @JvmStatic
    val COMMA_AND_LIST_END: Array<out Token> = arrayOf(Token.COMMA, Token.LIST_END)

    @JvmStatic
    val COMMA_AND_MAP_END: Array<out Token> = arrayOf(Token.COMMA, Token.MAP_END)

    @JvmStatic
    val COLON: Array<out Token> = arrayOf(Token.COLON)
}