package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.columnNumber
import net.mamoe.konfig.readLine
import net.mamoe.konfig.yaml.YamlConfiguration
import net.mamoe.konfig.yaml.YamlElement
import kotlin.jvm.JvmField

/**
 * The parser that provides [YamlElement]s from [TokenStream]
 */
internal class YamlDecoder(
    private val configuration: YamlConfiguration,
    internal val tokenStream: TokenStream,
    override val context: SerialModule,
    override val updateMode: UpdateMode
) : Decoder {
    private fun nextString(): String? {
        val token = tokenStream.nextToken() ?: return null
        return when (token) {
            Token.MULTILINE_LIST_FLAG -> {
                "-" + nextString()
            }
            Token.STRING_NULL -> {
                return "~" // TODO: 2020/4/28 check that
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

        /**
         * If `true`, [beginStructure] will return `this` immediately
         * and set [dontWrapNextStructure] back to `false`
         *
         * This is useful to reduce unnecessary wrapping of [AbstractDecoder]
         * used by [YamlDynamicSerializer] and other contextual serializers.
         */
        internal var dontWrapNextStructure: Boolean = false


        final override val context: SerialModule
            get() = this@YamlDecoder.context
        final override val updateMode: UpdateMode get() = this@YamlDecoder.updateMode

        // region CompositeDecoder primitives override
        final override fun decodeBooleanElement(descriptor: SerialDescriptor, index: Int): Boolean = decodeBooleanElementImpl(descriptor, index)
        final override fun decodeByteElement(descriptor: SerialDescriptor, index: Int): Byte = decodeByteElementImpl(descriptor, index)
        final override fun decodeCharElement(descriptor: SerialDescriptor, index: Int): Char = decodeCharElementImpl(descriptor, index)
        final override fun decodeDoubleElement(descriptor: SerialDescriptor, index: Int): Double = decodeDoubleElementImpl(descriptor, index)
        final override fun decodeFloatElement(descriptor: SerialDescriptor, index: Int): Float = decodeFloatElementImpl(descriptor, index)
        final override fun decodeIntElement(descriptor: SerialDescriptor, index: Int): Int = decodeIntElementImpl(descriptor, index)
        final override fun decodeLongElement(descriptor: SerialDescriptor, index: Int): Long = decodeLongElementImpl(descriptor, index)
        final override fun decodeShortElement(descriptor: SerialDescriptor, index: Int): Short = decodeShortElementImpl(descriptor, index)
        final override fun decodeStringElement(descriptor: SerialDescriptor, index: Int): String = decodeStringElementImpl(descriptor, index)
        final override fun decodeUnitElement(descriptor: SerialDescriptor, index: Int) = decodeUnitElementImpl(descriptor, index)
        // endregion

        // region Decoder primitives override
        final override fun decodeShort(): Short = decodeShortElementImpl(null, null)
        final override fun decodeString(): String = decodeStringElementImpl(null, null)
        final override fun decodeUnit() = decodeUnitElementImpl(null, null)
        final override fun decodeBoolean(): Boolean = decodeBooleanElementImpl(null, null)
        final override fun decodeByte(): Byte = decodeByteElementImpl(null, null)
        final override fun decodeChar(): Char = decodeCharElementImpl(null, null)
        final override fun decodeDouble(): Double = decodeDoubleElementImpl(null, null)
        final override fun decodeFloat(): Float = decodeFloatElementImpl(null, null)
        final override fun decodeInt(): Int = decodeIntElementImpl(null, null)
        final override fun decodeLong(): Long = decodeLongElementImpl(null, null)
        final override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
        override fun decodeNotNullMark(): Boolean = false // TODO: 2020/4/19 not null mark
        override fun decodeNull(): Nothing? = null // TODO: 2020/4/19 decode null
        // endregion

        final override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
            if (dontWrapNextStructure) {
                dontWrapNextStructure = false
                return this
            }
            return this@YamlDecoder.beginStructureImpl(descriptor)
        }

        final override fun <T : Any> decodeNullableSerializableElement(descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>): T? {
            return kotlin.runCatching {
                deserializer.deserialize(this)
            }.getOrElse {
                throw contextualDecodingException("deserializing nested class", descriptor, index)
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
    inner class BlockClassDecoder(
        baseIndent: Int
    ) : IndentedDecoder(baseIndent, "Yaml Block Class") {

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
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
                    if (tokenStream.nextToken() != Token.COLON) {
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

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index.isOdd()) {
                return index++
            }

            when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
                END_OF_FILE -> return CompositeDecoder.READ_DONE // in block map it's ok
                Token.STRING -> {
                    if (tokenStream.currentIndent < baseIndent) {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return CompositeDecoder.READ_DONE
                    }

                    if (!checkIndent(tokenStream.currentIndent)) {
                        return CompositeDecoder.READ_DONE
                    }
                    if (tokenStream.nextToken() != Token.COLON) {
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

        override fun decodeNull(): Nothing? = null
        override fun decodeNotNullMark(): Boolean {
            return when (val token = tokenStream.nextToken()) {
                Token.MAP_END -> {
                    tokenStream.reuseToken(token)
                    false
                }
                Token.STRING -> {
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    true
                }
                Token.COMMA -> {
                    //tokenStream.reuseToken(token)
                    false
                }
                else -> throw contextualDecodingException("Illegal token $token")
            }
        }

        override fun decodeSequentially(): Boolean = false
        private var index = 0
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                // just start
                tokenStream.nextToken().let { begin ->
                    check(begin == Token.MAP_BEGIN) {
                        throw contextualDecodingException("Beginning token must a '{', but found $begin")
                    }
                }
            }

            if (index.isOdd()) {
                return index++
            }

            if (index > 1) {
                // skip a comma
                when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                    Token.MAP_END -> return CompositeDecoder.READ_DONE
                    Token.COMMA -> {
                        // that's what we need
                    }
                    else -> throw contextualDecodingException("There must be a COMMA between flow map entries but found $token for '${descriptor.serialName}'")
                }
            }

            // read key
            return when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                Token.MAP_END -> CompositeDecoder.READ_DONE
                Token.COMMA -> { // null entry, meaning `{ name: Bob, }` // we are at ','
                    /*
                     when (val peek = tokenStream.nextTokenSkippingEmptyLine()) {
                         Token.MAP_END -> { // trailing comma is ignored.
                             return CompositeDecoder.READ_DONE
                         }
                         END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                         else -> tokenStream.reuseToken(peek)
                     }*/
                    tokenStream.reuseToken(Token.STRING_NULL) // for key
                    tokenStream.reuseToken(Token.STRING_NULL) // for value
                    index++
                }
                Token.STRING -> {
                    if (tokenStream.nextToken() != Token.COLON) {
                        throw contextualDecodingException("Expected a COLON between flow map entries but found $token for '${descriptor.serialName}'")
                    }
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    index++
                }
                else -> throw contextualDecodingException("Illegal token $token")
            }
        }

        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    /**
     * Example: `{test: value}`
     */
    inner class FlowClassDecoder : AbstractDecoder("Yaml Flow Class") {

        private var index = -5
        private var firstValueDecoded = false

        override fun decodeNull(): Nothing? = null
        override fun decodeNotNullMark(): Boolean {
            return when (val token = tokenStream.nextToken()) {
                Token.MAP_END -> {
                    tokenStream.reuseToken(token)
                    false
                }
                Token.STRING -> {
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    true
                }
                Token.COMMA -> {
                    //tokenStream.reuseToken(token)
                    false
                }
                else -> throw contextualDecodingException("Illegal token $token")
            }
        }

        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == -5) {
                tokenStream.nextToken().let { begin ->
                    check(begin == Token.MAP_BEGIN) {
                        throw contextualDecodingException("Beginning token must a '{', but found $begin")
                    }
                }
            }

            if (firstValueDecoded) {
                // skip a comma
                when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                    Token.MAP_END -> return CompositeDecoder.READ_DONE
                    Token.COMMA -> {
                        // that's what we need
                    }
                    else -> throw contextualDecodingException("There must be a COMMA between flow map entries but found $token for '${descriptor.serialName}'")
                }
            } else {
                firstValueDecoded = true
            }

            // read key/value
            return when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                Token.MAP_END -> CompositeDecoder.READ_DONE

                Token.COMMA -> { // null entry, meaning `{ name: Bob, , }` // we are at ','
                    // multiply null entries are ignored.
                    // and we condone duplicated null keys.
                    return decodeElementIndex(descriptor) // it's no need to produce a troublesome strict exception.
                }

                Token.STRING -> {
                    val next = tokenStream.nextToken()
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
        override fun decodeNull(): Nothing? = null
        override fun decodeNotNullMark(): Boolean {
            return when (val token = tokenStream.nextToken()) {
                Token.LIST_END -> {
                    tokenStream.reuseToken(token)
                    false
                }
                Token.STRING -> {
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    true
                }
                Token.COMMA -> {
                    //tokenStream.reuseToken(token)
                    false
                }
                else -> throw contextualDecodingException("Illegal token $token")
            }
        }

        private var index = 0
        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                tokenStream.nextToken().let { begin ->
                    check(begin == Token.LIST_BEGIN) {
                        throw contextualDecodingException("Beginning token must be '[', but found $begin")
                    }
                }

                return when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected ']'")
                    Token.LIST_END -> CompositeDecoder.READ_DONE // empty list
                    is Token.STRING -> {
                        val originString = tokenStream.strBuff!!

                        when (val next = tokenStream.nextToken()) {
                            Token.LIST_END -> {
                                tokenStream.reuseToken(next)
                                tokenStream.reuseToken(originString)
                                return index++
                            }
                            Token.COMMA -> when (val nextNext = tokenStream.nextToken()) {
                                Token.LIST_END -> {
                                    // meet with `, ]`
                                    // don't retain comma
                                    tokenStream.reuseToken(nextNext)
                                    tokenStream.reuseToken(originString)
                                    return index++
                                }
                                else -> {
                                    if (nextNext != null) {
                                        tokenStream.reuseToken(nextNext)
                                    }
                                    tokenStream.reuseToken(next)
                                    tokenStream.reuseToken(originString)
                                }
                            }
                            is Token.STRING -> {
                                // this will be a error. But we should handle them later
                                tokenStream.reuseToken(tokenStream.strBuff!!)
                                tokenStream.reuseToken(originString)
                            }
                            END_OF_FILE -> {
                                tokenStream.reuseToken(originString)
                            }
                            else -> {
                                tokenStream.reuseToken(next)
                                tokenStream.reuseToken(originString)
                            }
                        }
                        return index++
                    }
                    Token.LIST_BEGIN,
                    Token.MAP_BEGIN
                    -> {
                        tokenStream.reuseToken(token)
                        // nested structures
                        return index++
                    }
                    else -> {
                        throw contextualDecodingException("Illegal token $token")
                    }
                }
            }
            return when (val token = tokenStream.nextTokenSkippingEmptyLine()) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected ']'")
                Token.COMMA -> index++
                Token.LIST_END -> CompositeDecoder.READ_DONE
                else -> {
                    throw contextualDecodingException(
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

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                return index++
            }
            while (true) {
                tokenStream.nextToken().let { token ->
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
    private val yamlNullStringDecoder = YamlNullStringDecoder()

    inner class YamlStringDecoder : AbstractDecoder("Yaml Literal") {
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = error("shouldn't be called")
        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    inner class YamlNullStringDecoder : AbstractDecoder("Yaml Null") {
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = error("shouldn't be called")
        override fun endStructure(descriptor: SerialDescriptor) {
        }

        override fun decodeNull(): Nothing? = null
        override fun decodeNotNullMark(): Boolean = false
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
        return beginStructureImpl(descriptor)
    }

    internal fun beginStructureImpl(
        descriptor: SerialDescriptor
    ): CompositeDecoder {
        when (descriptor.kind) {
            StructureKind.LIST -> {
                return when (val token = tokenStream.nextToken()) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.LIST_BEGIN -> {
                        tokenStream.reuseToken(token)
                        FlowSequenceDecoder()
                    }
                    Token.MULTILINE_LIST_FLAG -> BlockSequenceDecoder(tokenStream.currentIndent)
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding list")
                }
            }
            StructureKind.CLASS -> {
                return when (val token = tokenStream.nextToken()) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> {
                        tokenStream.reuseToken(token)
                        FlowClassDecoder()
                    }
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        BlockClassDecoder(tokenStream.currentIndent)
                    }
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding class")
                }
            }
            StructureKind.MAP -> {
                return when (val token = tokenStream.nextToken()) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> {
                        tokenStream.reuseToken(token)
                        FlowMapDecoder()
                    }
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        BlockMapDecoder(tokenStream.currentIndent)
                    }
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding map")
                }
            }
            UnionKind.CONTEXTUAL -> {
                return when (val token = tokenStream.nextToken()) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> {
                        tokenStream.reuseToken(token)
                        FlowMapDecoder()
                    }
                    Token.STRING_NULL -> {
                        yamlNullStringDecoder
                    }
                    Token.STRING -> {
                        // if (originDecoder is YamlDecoder.IndentedDecoder) {
                        //     if (!originDecoder.checkIndent(tokenStream.currentIndent)) {
                        //         throw contextualDecodingException("Expecting a value")
                        //     }
                        // }

                        // the value is at least a String, and can also be Map (so there is a ':' following by).

                        val beforeIndent = tokenStream.currentIndent
                        val stringValue = tokenStream.strBuff!!

                        return when (val next =
                            tokenStream.nextTokenSkippingEmptyLine()) { // coz we are detecting whether it is a yaml-like map
                            END_OF_FILE -> {
                                tokenStream.strBuff = stringValue
                                yamlStringDecoder
                            }

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
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding contextual")
                }
            }
            else -> throw contextualDecodingException("unsupported SerialKind ${descriptor.kind}")
        }
    }

    private fun decodeBooleanElementImpl(descriptor: SerialDescriptor?, index: Int?): Boolean {
        return nextString()?.let { value ->
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
    override fun decodeShort(): Short = decodeShortElementImpl(null, null)
    override fun decodeString(): String = decodeStringElementImpl(null, null)
    override fun decodeUnit() = decodeUnitElementImpl(null, null)
    override fun decodeBoolean(): Boolean = decodeBooleanElementImpl(null, null)
    override fun decodeByte(): Byte = decodeByteElementImpl(null, null)
    override fun decodeChar(): Char = decodeCharElementImpl(null, null)
    override fun decodeDouble(): Double = decodeDoubleElementImpl(null, null)
    override fun decodeFloat(): Float = decodeFloatElementImpl(null, null)
    override fun decodeInt(): Int = decodeIntElementImpl(null, null)
    override fun decodeLong(): Long = decodeLongElementImpl(null, null)
    override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
    override fun decodeNotNullMark(): Boolean = false // TODO: 2020/4/19 not null mark
    override fun decodeNull(): Nothing? = null // TODO: 2020/4/19 decode null
    // endregion

    private fun nextStringOrNull(): String? {
        return nextString()?.let { value ->
            when {
                value == "~" -> null
                value.length == 4 && value.equals("null", ignoreCase = true) -> null
                else -> value
            }
        }
    }

    private fun decodeByteElementImpl(descriptor: SerialDescriptor?, index: Int?): Byte =
        nextStringOrNull()
            .withIntegerValue("byte", descriptor, index).limitToByte()

    private fun decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int?): Char =
        nextStringOrNull()?.let {
            check(it.length == 1) { "too many chars for a char: $it" }
            it.first()
        } ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    private fun decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int?): Double =
        nextStringOrNull()
            .withDoubleValue("double", descriptor, index)

    private fun decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int?): Float =
        nextStringOrNull()
            .withFloatValue("float", descriptor, index)

    private fun decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int?): Int =
        nextStringOrNull()
            .withIntegerValue("int", descriptor, index).limitToInt()

    private fun decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int?): Long =
        nextStringOrNull()
            .withIntegerValue("long", descriptor, index)

    private fun decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int?): Short =
        nextStringOrNull()
            .withIntegerValue("short", descriptor, index).limitToShort()

    private fun decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int?): String =
        nextStringOrNull()
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""

    private fun decodeUnitElementImpl(descriptor: SerialDescriptor?, index: Int?) {
        val value = (nextStringOrNull()
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
internal fun contextualDecodingException(hint: String, text: String, cur: Int, position: String, throwable: Throwable? = null): YamlDecodingException {
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
    }, throwable)
}


@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal fun YamlDecoder.contextualDecodingException(hint: String, descriptor: SerialDescriptor? = null, index: Int? = null, throwable: Throwable? = null): YamlDecodingException {
    return tokenStream.contextualDecodingException("Top-level decoder: $hint", descriptor, index, throwable)
}

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal fun YamlDecoder.AbstractDecoder.contextualDecodingException(
    hint: String,
    descriptor: SerialDescriptor? = null,
    index: Int? = null,
    throwable: Throwable? = null
): YamlDecodingException {
    return this.parentYamlDecoder.contextualDecodingException(hint, descriptor, index, throwable)
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
internal fun TokenStream.contextualDecodingException(hint: String, descriptor: SerialDescriptor?, index: Int?, throwable: Throwable? = null): YamlDecodingException {
    val message: String = if (descriptor == null && index == null)
        hint
    else
        hint + "for '${index?.let { descriptor?.getElementName(it) ?: "<decoding index or beginning>" } ?: "<top-level element>"}' " +
            "in '${descriptor?.serialName ?: "<unknown descriptor>"}'"

    /*
    val currentTokenLength = if (currentToken is Token.STRING) {
        strBuff!!.length
    } else 1 // char*/

    val lineNumber = this.source.lineNumber
    val columnNumber = this.source.columnNumber - 1

    val before = source.currentLine.limitLast(32)

    val last = source.readLine().limitFirst(32)
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
        position,
        throwable
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