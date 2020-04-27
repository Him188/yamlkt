package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.columnNumber
import net.mamoe.konfig.readLine
import net.mamoe.konfig.yaml.YamlConfiguration
import net.mamoe.konfig.yaml.YamlElement
import net.mamoe.konfig.yaml.internal.EndingTokens.EMPTY_ENDING_TOKEN
import kotlin.jvm.JvmField
import kotlin.jvm.JvmStatic

/**
 * The parser that provides [YamlElement]s from [TokenStream]
 */
internal class YamlDecoder(
    private val configuration: YamlConfiguration,
    internal val tokenStream: TokenStream,
    override val context: SerialModule,
    override val updateMode: UpdateMode
) : Decoder {
    private fun nextString(endingTokens: Array<out Token>): String? {
        val token = tokenStream.nextToken(endingTokens) ?: return null
        return when (token) {
            Token.MULTILINE_LIST_FLAG -> {
                "-" + nextString(endingTokens)
            }
            Token.STRING
            -> {
                tokenStream.strBuff!!
            }
            else -> throw contextualDecodingException("expected string, found token $token instead")
        }
    }

    abstract inner class AbstractDecoder(
        /**
         * The name for its output to help create a pretty exception
         */
        @JvmField val name: String
    ) : CompositeDecoder, Decoder {
        internal val parentYamlDecoder: YamlDecoder get() = this@YamlDecoder


        final override val context: SerialModule
            get() = this@YamlDecoder.context
        final override val updateMode: UpdateMode get() = this@YamlDecoder.updateMode

        /**
         * The tokens that can end a unquoted string when reading **keys**
         *
         * Required by [YamlDynamicSerializer]
         */
        abstract val endingTokensForKey: Array<out Token>

        /**
         * The tokens that can end a unquoted string when reading **values**
         */
        abstract val endingTokensForValue: Array<out Token>

        // region CompositeDecoder primitives override
        final override fun decodeBooleanElement(descriptor: SerialDescriptor, index: Int): Boolean = decodeBooleanElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeByteElement(descriptor: SerialDescriptor, index: Int): Byte = decodeByteElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeCharElement(descriptor: SerialDescriptor, index: Int): Char = decodeCharElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeDoubleElement(descriptor: SerialDescriptor, index: Int): Double = decodeDoubleElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeFloatElement(descriptor: SerialDescriptor, index: Int): Float = decodeFloatElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeIntElement(descriptor: SerialDescriptor, index: Int): Int = decodeIntElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeLongElement(descriptor: SerialDescriptor, index: Int): Long = decodeLongElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeShortElement(descriptor: SerialDescriptor, index: Int): Short = decodeShortElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeStringElement(descriptor: SerialDescriptor, index: Int): String = decodeStringElementImpl(descriptor, index, endingTokensForValue)
        final override fun decodeUnitElement(descriptor: SerialDescriptor, index: Int) = decodeUnitElementImpl(descriptor, index, endingTokensForValue)
        // endregion

        // region Decoder primitives override
        final override fun decodeShort(): Short = decodeShortElementImpl(null, null, endingTokensForValue)
        final override fun decodeString(): String = decodeStringElementImpl(null, null, endingTokensForValue)
        final override fun decodeUnit() = decodeUnitElementImpl(null, null, endingTokensForValue)
        final override fun decodeBoolean(): Boolean = decodeBooleanElementImpl(null, null, endingTokensForValue)
        final override fun decodeByte(): Byte = decodeByteElementImpl(null, null, endingTokensForValue)
        final override fun decodeChar(): Char = decodeCharElementImpl(null, null, endingTokensForValue)
        final override fun decodeDouble(): Double = decodeDoubleElementImpl(null, null, endingTokensForValue)
        final override fun decodeFloat(): Float = decodeFloatElementImpl(null, null, endingTokensForValue)
        final override fun decodeInt(): Int = decodeIntElementImpl(null, null, endingTokensForValue)
        final override fun decodeLong(): Long = decodeLongElementImpl(null, null, endingTokensForValue)
        final override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
        final override fun decodeNotNullMark(): Boolean = false // TODO: 2020/4/19 not null mark
        final override fun decodeNull(): Nothing? = null // TODO: 2020/4/19 decode null
        // endregion

        final override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
            return this@YamlDecoder.beginStructureImpl(descriptor, originDecoder = this)
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
        @JvmField protected var baseIndent: Int, name: String
    ) : AbstractDecoder(name) {
        @JvmField
        protected var firstIndent = -1

        internal fun checkIndent(newIndent: Int): Boolean {
            if (firstIndent == -1) {
                if (newIndent >= baseIndent) {
                    firstIndent = newIndent
                    return true
                }
            } else {
                if (firstIndent == newIndent) {
                    return true
                }
            }

            // throw contextualDecodingException("failed checking indent, baseIndent=$baseIndent, firstIndent=$firstIndent, newIndent=$newIndent")
            return false
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
    ) : IndentedDecoder(baseIndent, "Yaml Class") {
        override val endingTokensForKey: Array<out Token>
            get() = EndingTokens.COLON
        override val endingTokensForValue: Array<out Token>
            get() = EMPTY_ENDING_TOKEN

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            when (val token = tokenStream.nextTokenSkippingEmptyLine(endingTokensForKey)) {
                null -> return CompositeDecoder.READ_DONE
                Token.STRING -> {
                    if (tokenStream.currentIndent < baseIndent) {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return CompositeDecoder.READ_DONE
                    }

                    if (!checkIndent(tokenStream.currentIndent)) {
                        return CompositeDecoder.READ_DONE
                    }
                    val index = descriptor.getElementIndex(tokenStream.strBuff!!)
                    if (tokenStream.nextToken(endingTokensForValue) != Token.COLON) {
                        throw tokenStream.contextualDecodingException("There must be a COLON between class key and value but found ${tokenStream.currentToken} for '${descriptor.serialName}'")
                    }

                    return if (index != CompositeDecoder.UNKNOWN_NAME) {
                        index
                    } else {
                        YamlDynamicSerializer.deserialize(this)
                        decodeElementIndex(descriptor)
                    }
                }
                else -> throw tokenStream.contextualDecodingException("illegal token $token on decoding element index for '${descriptor.serialName}'")
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
    inner class BlockMapDecoder(
        baseIndent: Int
    ) : IndentedDecoder(baseIndent, "Yaml Block Map") {
        private var index = 0
        override val endingTokensForKey: Array<out Token>
            get() = EndingTokens.COLON
        override val endingTokensForValue: Array<out Token>
            get() = EndingTokens.LINE_SEPARATOR

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index.isOdd()) {
                return index++
            }

            when (val token = tokenStream.nextTokenSkippingEmptyLine(endingTokensForKey)) {
                END_OF_FILE -> return CompositeDecoder.READ_DONE // in block map it's ok
                Token.STRING -> {
                    if (tokenStream.currentIndent < baseIndent) {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return CompositeDecoder.READ_DONE
                    }

                    if (!checkIndent(tokenStream.currentIndent)) {
                        return CompositeDecoder.READ_DONE
                    }
                    if (tokenStream.nextToken(endingTokensForKey) != Token.COLON) {
                        throw tokenStream.contextualDecodingException("There must be a COLON between map key and value but found ${tokenStream.currentToken} for '${descriptor.serialName}'")
                    }
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    return index++
                }
                else -> throw tokenStream.contextualDecodingException("illegal token $token on decoding element index for '${descriptor.serialName}'")
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }


    /**
     * The block map reading begins after `{`.
     * Because `{` is used to infer the type.
     *
     *
     * Yaml: `{name: Bob }`
     * Result: `{ name: 'Bob' }`
     *
     * Yaml: `{name: Bob , }`
     * Result: `{ name: 'Bob' }`
     *
     * Yaml: `{name: Bob , , }`
     * Result: `{ name: 'Bob', null: null }`
     *
     * Yaml: `{name: Bob ,age }`
     * Result: `{ name: 'Bob', age: null }`
     *
     * Yaml: `{name: Bob ,age , }`
     * Result: `{ name: 'Bob', age: null }`
     */
    inner class FlowMapDecoder : AbstractDecoder("Yaml Flow Map") {
        override val endingTokensForKey: Array<out Token>
            get() = EndingTokens.COLON_AND_MAP_END
        override val endingTokensForValue: Array<out Token>
            get() = EndingTokens.COMMA_AND_MAP_END

        override fun decodeSequentially(): Boolean = false
        private var index = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index.isOdd()) {
                return index++
            }
            if (index > 1) {
                // skip a comma
                when (val token = tokenStream.nextTokenSkippingEmptyLine(endingTokensForValue)) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                    Token.MAP_END -> return CompositeDecoder.READ_DONE
                    Token.COMMA -> {
                        // that's what we need
                    }
                    else -> throw contextualDecodingException("There must be a COMMA between flow map entries but found $token for '${descriptor.serialName}'")
                }
            }

            // read key/value
            return when (val token = tokenStream.nextTokenSkippingEmptyLine(endingTokensForKey)) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                Token.MAP_END -> CompositeDecoder.READ_DONE
                Token.STRING -> {
                    if (tokenStream.nextToken(endingTokensForKey) != Token.COLON) {
                        throw contextualDecodingException("Expected a COLON between flow map entries but found $token for '${descriptor.serialName}'")
                    }
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    index++
                }
                else -> throw contextualDecodingException("Illegal token $token for '${descriptor.serialName}'")
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    /**
     * Example: `{test: value}`
     */
    inner class FlowClassDecoder : AbstractDecoder("Yaml Flow Class") {
        override val endingTokensForKey: Array<out Token>
            get() = EndingTokens.COLON_AND_MAP_END
        override val endingTokensForValue: Array<out Token>
            get() = EndingTokens.COMMA_AND_MAP_END

        private var index = 0
        private var firstValueDecoded = false

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 1) {
                firstValueDecoded = true
                return 1
            }
            if (firstValueDecoded) {
                // skip a comma
                when (val token = tokenStream.nextTokenSkippingEmptyLine(endingTokensForValue)) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                    Token.MAP_END -> return CompositeDecoder.READ_DONE
                    Token.COMMA -> {
                        // that's what we need
                    }
                    else -> throw contextualDecodingException("There must be a COMMA between flow map entries but found $token for '${descriptor.serialName}'")
                }
            }

            // read key/value
            return when (val token = tokenStream.nextTokenSkippingEmptyLine(endingTokensForKey)) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                Token.MAP_END -> CompositeDecoder.READ_DONE
                Token.STRING -> {
                    val next = tokenStream.nextToken(endingTokensForKey)
                    if (next != Token.COLON) {
                        throw contextualDecodingException("Expected a COLON between flow map entries but found $next for '${descriptor.serialName}'")
                    }
                    //   tokenStream.reuseToken(tokenStream.strBuff!!)
                    val index = descriptor.getElementIndex(tokenStream.strBuff!!)
                    if (index != CompositeDecoder.UNKNOWN_NAME) {
                        this.index = index
                        index
                    } else {
                        YamlDynamicSerializer.deserialize(this)
                        return decodeElementIndex(descriptor)
                    }
                }
                else -> throw contextualDecodingException("Illegal token $token for '${descriptor.serialName}'")
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    /**
     * Example: `[foo, bar]`
     */
    inner class FlowSequenceDecoder : AbstractDecoder("Yaml Flow Sequence") {
        override val endingTokensForKey: Array<out Token>
            get() = endingTokensForValue
        override val endingTokensForValue: Array<out Token>
            get() = EndingTokens.COMMA_AND_LIST_END

        override fun decodeSequentially(): Boolean = false
        private var index = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                return when (tokenStream.nextTokenSkippingEmptyLine(endingTokensForValue)) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected ']'")
                    Token.LIST_END -> CompositeDecoder.READ_DONE // empty list
                    else -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return index++
                    }
                }
            }
            return when (val token = tokenStream.nextTokenSkippingEmptyLine(endingTokensForValue)) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected ']'")
                Token.COMMA -> index++
                Token.LIST_END -> CompositeDecoder.READ_DONE
                else -> {
                    throw tokenStream.contextualDecodingException(
                        "COMMA must be used to separate values, but found $token on decoding square list for '${descriptor.serialName}"
                    )
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
    inner class BlockSequenceDecoder(
        baseIndent: Int
    ) : IndentedDecoder(baseIndent, "Yaml Block Sequence") {
        override fun decodeSequentially(): Boolean = false
        private var index: Int = 0
        override val endingTokensForKey: Array<out Token>
            get() = endingTokensForValue
        override val endingTokensForValue: Array<out Token>
            get() = EndingTokens.COLON

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                return index++
            }
            while (true) {
                tokenStream.nextToken(endingTokensForValue).let { token ->
                    when (token) {
                        is Token.LINE_SEPARATOR -> {
                            // continue
                        }
                        END_OF_FILE -> return CompositeDecoder.READ_DONE
                        Token.MULTILINE_LIST_FLAG -> {
                            return if (checkIndent(tokenStream.currentIndent)) {
                                index++
                            } else {
                                tokenStream.reuseToken(token)
                                CompositeDecoder.READ_DONE
                            }
                        }
                        Token.STRING -> {
                            tokenStream.reuseToken(tokenStream.strBuff!!)
                            return CompositeDecoder.READ_DONE
                        }
                        else -> throw contextualDecodingException(
                            "Expected ${Token.MULTILINE_LIST_FLAG.value}, but found $token on decoding multiline list for '${descriptor.serialName}'"
                        )
                    }
                }
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }


    /**
     * Singleton
     */
    private val yamlStringDecoder = YamlStringDecoder()

    inner class YamlStringDecoder : AbstractDecoder("Yaml Literal") {
        override val endingTokensForKey: Array<out Token> get() = error("shouldn't be called")
        override val endingTokensForValue: Array<out Token> get() = error("shouldn't be called")
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = error("shouldn't be called")
        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
        return beginStructureImpl(descriptor, originDecoder = null)
    }

    internal fun beginStructureImpl(
        descriptor: SerialDescriptor, originDecoder: AbstractDecoder?
    ): CompositeDecoder {
        when (descriptor.kind) {
            StructureKind.LIST -> {
                return when (val token = tokenStream.nextToken(EndingTokens.COMMA)) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.LIST_BEGIN -> FlowSequenceDecoder()
                    Token.MULTILINE_LIST_FLAG -> BlockSequenceDecoder(tokenStream.currentIndent)
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding list")
                }
            }
            StructureKind.CLASS -> {
                return when (val token = tokenStream.nextToken(EndingTokens.COLON)) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> FlowClassDecoder()
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        YamlLikeClassDecoder(tokenStream.currentIndent)
                    }
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding class")
                }
            }
            StructureKind.MAP -> {
                return when (val token = tokenStream.nextToken(EndingTokens.COLON)) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> FlowMapDecoder()
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        BlockMapDecoder(tokenStream.currentIndent)
                    }
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding map")
                }
            }
            UnionKind.CONTEXTUAL -> {
                return when (val token = tokenStream.nextToken(originDecoder?.endingTokensForKey ?: EndingTokens.COLON)) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> FlowMapDecoder()
                    Token.STRING -> {
                        // if (originDecoder is YamlDecoder.IndentedDecoder) {
                        //     if (!originDecoder.checkIndent(tokenStream.currentIndent)) {
                        //         throw contextualDecodingException("Expecting a value")
                        //     }
                        // }

                        // the value is at least a String, and can also be Map (so there is a ':' following by).

                        val beforeIndent = tokenStream.currentIndent
                        val stringValue = tokenStream.strBuff!!

                        inner@ while (true) {
                            return when (val next = tokenStream.nextToken(EndingTokens.COLON_AND_COMMA)) { // coz we are detecting whether it is a yaml-like map
                                END_OF_FILE -> {
                                    tokenStream.strBuff = stringValue
                                    yamlStringDecoder
                                }
                                is Token.LINE_SEPARATOR -> continue@inner

                                Token.COLON -> {
                                    // inferred map
                                    tokenStream.currentIndent = beforeIndent
                                    tokenStream.reuseToken(next)
                                    tokenStream.reuseToken(stringValue)

                                    BlockMapDecoder(beforeIndent)
                                }

                                Token.STRING -> {
                                    // the next is String.
                                    // so the before one is also a String.

                                    tokenStream.reuseToken(tokenStream.strBuff!!)
                                    tokenStream.strBuff = stringValue
                                    yamlStringDecoder
                                }
                                else -> {
                                    tokenStream.reuseToken(next)
                                    tokenStream.strBuff = stringValue
                                    yamlStringDecoder
                                }
                            }
                        }

                        @Suppress("UNREACHABLE_CODE")
                        error("bug")
                    }
                    Token.LIST_BEGIN -> {
                        tokenStream.reuseToken(token)
                        FlowSequenceDecoder()
                    }
                    Token.MULTILINE_LIST_FLAG -> {
                        tokenStream.reuseToken(token)
                        BlockSequenceDecoder(tokenStream.currentIndent)
                    }
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding class")
                }
            }
            else -> throw contextualDecodingException("unsupported SerialKind ${descriptor.kind}")
        }
    }

    private fun decodeBooleanElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Boolean {
        return nextString(endingTokens)?.let { value ->
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

    private fun nextStringOrNull(endingTokens: Array<out Token>): String? {
        return nextString(endingTokens)?.let { value ->
            when {
                value == "~" -> null
                value.equals("null", ignoreCase = true) -> null
                else -> value
            }
        }
    }

    private fun decodeByteElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Byte =
        nextStringOrNull(endingTokens)
            .withIntegerValue("byte", descriptor, index).limitToByte()

    private fun decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Char =
        nextStringOrNull(endingTokens)?.let {
            check(it.length == 1) { "too many chars for a char: $it" }
            it.first()
        } ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    private fun decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Double =
        nextStringOrNull(endingTokens)
            .withDoubleValue("double", descriptor, index)

    private fun decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Float =
        nextStringOrNull(endingTokens)
            .withFloatValue("float", descriptor, index)

    private fun decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Int =
        nextStringOrNull(endingTokens)
            .withIntegerValue("int", descriptor, index).limitToInt()

    private fun decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Long =
        nextStringOrNull(endingTokens)
            .withIntegerValue("long", descriptor, index)

    private fun decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): Short =
        nextStringOrNull(endingTokens)
            .withIntegerValue("short", descriptor, index).limitToShort()

    private fun decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>): String =
        nextStringOrNull(endingTokens)
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""

    private fun decodeUnitElementImpl(descriptor: SerialDescriptor?, index: Int?, endingTokens: Array<out Token>) {
        val value = (nextStringOrNull(endingTokens)
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
            "when reading element '${index?.let { descriptor?.getElementName(it) ?: "<decoding index or beginning>" } ?: "<top-level element>"}' " +
            "in '${descriptor?.serialName ?: "<unknown descriptor>"}'" + " remaining=${tokenStream.source.peekRemaining()}", cause
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
internal fun YamlDecoder.contextualDecodingException(hint: String): YamlDecodingException {
    return tokenStream.contextualDecodingException(hint, null, null)
}

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal fun YamlDecoder.AbstractDecoder.contextualDecodingException(hint: String): YamlDecodingException {
    return this.parentYamlDecoder.contextualDecodingException(this.name + ": " + hint)
}

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal fun TokenStream.contextualDecodingException(hint: String): YamlDecodingException {
    return contextualDecodingException(hint, null, null)
}

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal fun TokenStream.contextualDecodingException(hint: String, descriptor: SerialDescriptor?, index: Int?): YamlDecodingException {
    val message: String = if (descriptor == null && index == null)
        hint
    else
        hint + "for '${index?.let { descriptor?.getElementName(it) ?: "<decoding index or beginning>" } ?: "<top-level element>"}' " +
            "in '${descriptor?.serialName ?: "<unknown descriptor>"}'"

    val currentTokenLength = if (currentToken is Token.STRING) {
        strBuff!!.length
    } else 1 // char

    val lineNumber = this.source.lineNumber
    val columnNumber = this.source.columnNumber - 1

    val before = source.currentLine.limitLast(16)

    val last = source.readLine().limitFirst(16)
    val text = if (source.lineNumber != lineNumber) {
        before
    } else {
        before + last
    }

    val position = "at line ${lineNumber}, column $columnNumber"
    return contextualDecodingException(
        message,
        text,
        (before.length - 1/* currentTokenLength */).coerceAtLeast(0),
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

    @JvmStatic
    val COLON_AND_COMMA: Array<out Token> = arrayOf(Token.COLON, Token.COMMA)

    @JvmStatic
    val LINE_SEPARATOR: Array<out Token> = arrayOf(Token.LINE_SEPARATOR.N, Token.LINE_SEPARATOR.R)
}