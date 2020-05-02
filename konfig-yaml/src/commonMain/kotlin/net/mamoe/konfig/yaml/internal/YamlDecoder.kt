package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.columnNumber
import net.mamoe.konfig.readLine
import net.mamoe.konfig.yaml.YamlConfiguration
import net.mamoe.konfig.yaml.YamlElement
import kotlin.jvm.JvmField

private inline val READ_DONE: Int get() = CompositeDecoder.READ_DONE

/**
 * The parser that provides [YamlElement]s from [TokenStream]
 */
internal class YamlDecoder(
    private val configuration: YamlConfiguration,
    internal val tokenStream: TokenStream,
    override val context: SerialModule,
    override val updateMode: UpdateMode
) : Decoder {
    /**
     * @return can be [String] if a YAML string is not null, [Token.STRING_NULL] if a YAML string is null, `null` if EOF.
     */
    private fun nextString(): Any? {
        val token = tokenStream.nextToken() ?: return null
        return when (token) {
            Token.MULTILINE_LIST_FLAG -> {
                "-" + nextString()
            }
            Token.STRING_NULL -> {
                return token
            }
            Token.STRING
            -> {
                tokenStream.strBuff!!
            }
            else -> throw contextualDecodingException("expected string, found token $token instead")
        }
    }


    enum class Kind {
        FLOW_CLASS,
        FLOW_MAP,
        FLOW_SEQUENCE,
        STRING,
        NULL_STRING,
        BLOCK_CLASS,
        BLOCK_MAP,
        BLOCK_SEQUENCE
    }

    abstract inner class AbstractDecoder(
        /**
         * The name for its output to help create a pretty exception
         */
        @JvmField val name: String
    ) : CompositeDecoder, Decoder {
        abstract val kind: Kind

        internal val parentYamlDecoder: YamlDecoder get() = this@YamlDecoder

        /**
         * If `true`, [beginStructure] will return `this` immediately
         * and set [dontWrapNextStructure] back to `false`
         *
         * This is useful to reduce unnecessary wrapping of [AbstractDecoder]
         * used by [YamlDynamicSerializer] and other contextual serializers.
         */
        @JvmField
        internal var dontWrapNextStructure: Boolean = false


        final override val context: SerialModule
            get() = this@YamlDecoder.context
        final override val updateMode: UpdateMode get() = this@YamlDecoder.updateMode

        protected open fun nextStringOrNull(): String? {
            return this@YamlDecoder.nextStringOrNull()
        }

        // region CompositeDecoder primitives override
        final override fun decodeBooleanElement(descriptor: SerialDescriptor, index: Int): Boolean = nextStringOrNull().decodeBooleanElementImpl(descriptor, index)
        final override fun decodeByteElement(descriptor: SerialDescriptor, index: Int): Byte = nextStringOrNull().decodeByteElementImpl(descriptor, index)
        final override fun decodeCharElement(descriptor: SerialDescriptor, index: Int): Char = nextStringOrNull().decodeCharElementImpl(descriptor, index)
        final override fun decodeDoubleElement(descriptor: SerialDescriptor, index: Int): Double = nextStringOrNull().decodeDoubleElementImpl(descriptor, index)
        final override fun decodeFloatElement(descriptor: SerialDescriptor, index: Int): Float = nextStringOrNull().decodeFloatElementImpl(descriptor, index)
        final override fun decodeIntElement(descriptor: SerialDescriptor, index: Int): Int = nextStringOrNull().decodeIntElementImpl(descriptor, index)
        final override fun decodeLongElement(descriptor: SerialDescriptor, index: Int): Long = nextStringOrNull().decodeLongElementImpl(descriptor, index)
        final override fun decodeShortElement(descriptor: SerialDescriptor, index: Int): Short = nextStringOrNull().decodeShortElementImpl(descriptor, index)
        final override fun decodeStringElement(descriptor: SerialDescriptor, index: Int): String = nextStringOrNull().decodeStringElementImpl(descriptor, index)
        final override fun decodeUnitElement(descriptor: SerialDescriptor, index: Int) = nextStringOrNull().decodeUnitElementImpl(descriptor, index)
        // endregion

        // region Decoder primitives override
        final override fun decodeShort(): Short = nextStringOrNull().decodeShortElementImpl(null, -1)
        final override fun decodeString(): String = nextStringOrNull().decodeStringElementImpl(null, -1)
        final override fun decodeUnit() = nextStringOrNull().decodeUnitElementImpl(null, -1)
        final override fun decodeBoolean(): Boolean = nextStringOrNull().decodeBooleanElementImpl(null, -1)
        final override fun decodeByte(): Byte = nextStringOrNull().decodeByteElementImpl(null, -1)
        final override fun decodeChar(): Char = nextStringOrNull().decodeCharElementImpl(null, -1)
        final override fun decodeDouble(): Double = nextStringOrNull().decodeDoubleElementImpl(null, -1)
        final override fun decodeFloat(): Float = nextStringOrNull().decodeFloatElementImpl(null, -1)
        final override fun decodeInt(): Int = nextStringOrNull().decodeIntElementImpl(null, -1)
        final override fun decodeLong(): Long = nextStringOrNull().decodeLongElementImpl(null, -1)
        final override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
        override fun decodeNotNullMark(): Boolean = false // TODO: 2020/4/19 not null mark
        override fun decodeNull(): Nothing? = null // TODO: 2020/4/19 decode null
        // endregion

        final override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
            if (dontWrapNextStructure) {
                dontWrapNextStructure = false
                return this
            }
            Debugging.beginStructure(descriptor, this)
            return this@YamlDecoder.beginStructureImpl(descriptor)
        }

        override fun endStructure(descriptor: SerialDescriptor) {
            Debugging.endStructure()
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
        @JvmField protected val baseIndent: Int, name: String
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
        override val kind: Kind
            get() = Kind.BLOCK_CLASS

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            when (val token = tokenStream.nextToken()) {
                null -> return READ_DONE
                Token.STRING -> {
                    if (tokenStream.currentIndent < baseIndent) {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return READ_DONE
                    }

                    if (!checkIndent(tokenStream.currentIndent)) {
                        return READ_DONE
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
        override val kind: Kind
            get() = Kind.BLOCK_MAP

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index.isOdd()) {
                return index++
            }

            when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> return READ_DONE // in block map it's ok

                // nested
                Token.MULTILINE_LIST_FLAG -> {
                    tokenStream.reuseToken(token)
                    return READ_DONE
                }
                Token.LIST_BEGIN -> {
                    tokenStream.reuseToken(token)
                    return READ_DONE
                }

                Token.STRING -> {
                    if (tokenStream.currentIndent < baseIndent) {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return READ_DONE
                    }

                    if (!checkIndent(tokenStream.currentIndent)) {
                        return READ_DONE
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
        override val kind: Kind
            get() = Kind.FLOW_MAP

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
                when (val token = tokenStream.nextToken()) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                    Token.MAP_END -> return READ_DONE
                    Token.COMMA -> {
                        // that's what we need
                    }
                    else -> throw contextualDecodingException("There must be a COMMA between flow map entries but found $token for '${descriptor.serialName}'")
                }
            }

            // read key
            return when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                Token.MAP_END -> READ_DONE
                Token.COMMA -> { // null entry, meaning `{ name: Bob, }` // we are at ','
                    /*
                     when (val peek = tokenStream.nextTokenSkippingEmptyLine()) {
                         Token.MAP_END -> { // trailing comma is ignored.
                             return READ_DONE
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
        override val kind: Kind
            get() = Kind.FLOW_CLASS

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
                when (val token = tokenStream.nextToken()) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                    Token.MAP_END -> return READ_DONE
                    Token.COMMA -> {
                        // that's what we need
                    }
                    else -> throw contextualDecodingException("There must be a COMMA between flow map entries but found $token for '${descriptor.serialName}'")
                }
            } else {
                firstValueDecoded = true
            }

            // read key/value
            return when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")
                Token.MAP_END -> READ_DONE

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
        private var index = 0
        override fun decodeSequentially(): Boolean = false
        override val kind: Kind
            get() = Kind.FLOW_SEQUENCE

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                tokenStream.nextToken().let { begin ->
                    check(begin == Token.LIST_BEGIN) {
                        throw contextualDecodingException("Beginning token must be '[', but found $begin")
                    }
                }
            }

            when (val current = tokenStream.nextToken()) {
                END_OF_FILE -> throw contextualDecodingException("Unexpected EOF")
                Token.STRING -> {
                    val originString = tokenStream.strBuff!!
                    when (val next = tokenStream.nextToken()) {
                        Token.COMMA -> {
                            // ok
                            tokenStream.reuseToken(originString)
                        }
                        Token.LIST_END -> {
                            // meet with `, ]`, ok
                            // don't retain comma
                            tokenStream.reuseToken(next)
                            tokenStream.reuseToken(originString)
                        }
                        else -> {
                            throw contextualDecodingException("Illegal token $next")
                        }
                    }
                }
                Token.LIST_END -> return READ_DONE
                Token.COMMA -> when (val next = tokenStream.nextToken()) {
                    Token.LIST_END -> {
                        // meet with `, ]`
                        return READ_DONE
                    }

                    // nested structures
                    Token.LIST_BEGIN,
                    Token.MAP_BEGIN
                    -> tokenStream.reuseToken(next)

                    Token.STRING_NULL,
                    Token.STRING -> tokenStream.reuseToken(next)
                    else -> throw contextualDecodingException("Illegal token $next")
                }

                // nested structures
                Token.LIST_BEGIN,
                Token.MAP_BEGIN
                -> {
                    tokenStream.reuseToken(current)
                    return index++
                }
                else ->
                    throw contextualDecodingException("Illegal token $current")
            }
            return index++
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
        override val kind: Kind
            get() = Kind.BLOCK_SEQUENCE

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                return index++
            }
            while (true) {
                tokenStream.nextToken().let { token ->
                    when (token) {
                        Token.LINE_SEPARATOR -> {
                            // continue
                        }
                        END_OF_FILE -> return READ_DONE
                        Token.MULTILINE_LIST_FLAG -> {
                            return if (checkIndent(tokenStream.currentIndent)) {
                                index++
                            } else {
                                tokenStream.reuseToken(token)
                                READ_DONE
                            }
                        }
                        Token.STRING -> {
                            tokenStream.reuseToken(tokenStream.strBuff!!)
                            return READ_DONE
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
        override val kind: Kind
            get() = Kind.STRING

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = error("shouldn't be called")
        override fun endStructure(descriptor: SerialDescriptor) {
        }
    }

    inner class YamlNullStringDecoder : AbstractDecoder("Yaml Null") {
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = error("shouldn't be called")
        override fun endStructure(descriptor: SerialDescriptor) {
        }

        override fun decodeNull(): Nothing? = null
        override val kind: Kind
            get() = Kind.NULL_STRING

        override fun decodeNotNullMark(): Boolean = false
    }

    override fun beginStructure(descriptor: SerialDescriptor, vararg typeParams: KSerializer<*>): CompositeDecoder {
        Debugging.beginStructure(descriptor, null)
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
                val indent = tokenStream.currentIndent
                return when (val token = tokenStream.nextToken()) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> {
                        tokenStream.reuseToken(token)
                        FlowMapDecoder()
                    }
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        BlockMapDecoder(indent)
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

                        return when (val next = tokenStream.nextToken()) { // coz we are detecting whether it is a yaml-like map
                            END_OF_FILE -> {
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

    // region Decoder primitives override
    override fun decodeShort(): Short = nextStringOrNull().decodeShortElementImpl(null, -1)
    override fun decodeString(): String = nextStringOrNull().decodeStringElementImpl(null, -1)
    override fun decodeUnit() = nextStringOrNull().decodeUnitElementImpl(null, -1)
    override fun decodeBoolean(): Boolean = nextStringOrNull().decodeBooleanElementImpl(null, -1)
    override fun decodeByte(): Byte = nextStringOrNull().decodeByteElementImpl(null, -1)
    override fun decodeChar(): Char = nextStringOrNull().decodeCharElementImpl(null, -1)
    override fun decodeDouble(): Double = nextStringOrNull().decodeDoubleElementImpl(null, -1)
    override fun decodeFloat(): Float = nextStringOrNull().decodeFloatElementImpl(null, -1)
    override fun decodeInt(): Int = nextStringOrNull().decodeIntElementImpl(null, -1)
    override fun decodeLong(): Long = nextStringOrNull().decodeLongElementImpl(null, -1)
    override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
    override fun decodeNotNullMark(): Boolean = false // TODO: 2020/4/19 not null mark
    override fun decodeNull(): Nothing? = null // TODO: 2020/4/19 decode null
    // endregion

    /**
     * Null represents the value is null, instead of EOF.
     */
    private fun nextStringOrNull(): String? {
        return nextString()?.let { value ->
            if (value == Token.STRING_NULL) {
                return null
            }
            value as String?
            when {
                value == "~" -> null
                value.length == 4 && value.equals("null", ignoreCase = true) -> null
                else -> value
            }
        }
    }

    private fun String?.decodeByteElementImpl(descriptor: SerialDescriptor?, index: Int): Byte =
        withIntegerValue("byte", descriptor, index).limitToByte()

    private fun String?.decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int): Char =
        this?.let {
            check(it.length == 1) { "too many chars for a char: $it" }
            it.first()
        } ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    private fun String?.decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int): Double =
        this.withDoubleValue("double", descriptor, index)

    private fun String?.decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int): Float =
        this.withFloatValue("float", descriptor, index)

    private fun String?.decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int): Int =
        this.withIntegerValue("int", descriptor, index).limitToInt()

    private fun String?.decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int): Long =
        this.withIntegerValue("long", descriptor, index)

    private fun String?.decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int): Short =
        this.withIntegerValue("short", descriptor, index).limitToShort()

    private fun String?.decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int): String =
        this
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""

    private fun String?.decodeUnitElementImpl(descriptor: SerialDescriptor?, index: Int) {
        val value = (this
            ?: checkNonStrictNullability(descriptor, index))
            ?: return

        check(value == "kotlin.Unit") { "value is not 'kotlin.Unit' for kotlin.Unit" }
    }

    private fun String?.decodeBooleanElementImpl(descriptor: SerialDescriptor?, index: Int): Boolean {
        return this?.let { value ->
            when (value) {
                "null", "~" -> null
                "1", "true", "TRUE" -> true
                "0", "false", "FALSE" -> false
                else -> {
                    if (configuration.nonStrictNumber) {
                        when (value.withDoubleValue("boolean", descriptor, index).toInt()) {
                            1 -> return true
                            0 -> return false
                        }
                    }
                    throw contextualDecodingException("illegal boolean value: $value", descriptor, index)
                }
            }
        } ?: kotlin.run {
            if (configuration.nonStrictNullability) {
                return false
            } else throw contextualDecodingException(UNEXPECTED_NULL_MESSAGE, descriptor, index)
        }
    }


    private fun String?.castFromNullToZeroOrNull(descriptor: SerialDescriptor?, index: Int): Long? {
        if (this == null || this == "~" || (this.length == 4 && this.equals("null", ignoreCase = true))) {
            if (configuration.nonStrictNullability) {
                return 0
            } else throw contextualDecodingException(UNEXPECTED_NULL_MESSAGE, descriptor, index)
        }
        return null
    }

    companion object {
        const val UNEXPECTED_NULL_MESSAGE = "unexpected null value, you may enable `nonStrictNullability`"
    }

    private fun checkNonStrictNullability(descriptor: SerialDescriptor?, index: Int): Nothing? {
        if (!configuration.nonStrictNullability)
            throw contextualDecodingException(UNEXPECTED_NULL_MESSAGE, descriptor, index)
        return null
    }

    /**
     * Ensure the string is a **decimal** value, return this value
     *
     * @param typeName the name of the type, e.g. "double", "float"
     */
    private fun String?.withDoubleValue(typeName: String, descriptor: SerialDescriptor?, index: Int): Double {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            return 0.0
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            if (canBeHexOrBin) {
                when {
                    (this[1] == 'x' || this[1] == 'X') -> return HexConverter.hexToLong(this, 2).toDouble()
                    (this[1] == 'b' || this[1] == 'B') -> return BinaryConverter.binToLong(this, 2).toDouble()
                }
            }

            kotlin.runCatching {
                this.toDouble()
            }.getOrElse {
                throw contextualDecodingException("Invalid $typeName: $this", descriptor, index, it)
            }
        }
    }

    /**
     * Ensure the string is a **decimal** value, read this value and return
     *
     * @param typeName the name of the type, e.g. "double", "float"
     */
    private fun String?.withFloatValue(typeName: String, descriptor: SerialDescriptor?, index: Int): Float {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            return 0f
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            if (canBeHexOrBin) {
                when {
                    (this[1] == 'x' || this[1] == 'X') -> return HexConverter.hexToLong(this, 2).toFloat()
                    (this[1] == 'b' || this[1] == 'B') -> return BinaryConverter.binToLong(this, 2).toFloat()
                }
            }

            kotlin.runCatching {
                this.toFloat()
            }.getOrElse {
                throw contextualDecodingException("Invalid $typeName: $this", descriptor, index, it)
            }
        }
    }

    /**
     * Ensure the string is a **integer** value, read this value and return
     *
     * @param typeName the name of the type, e.g. "int", "long"
     */
    private fun String?.withIntegerValue(typeName: String, descriptor: SerialDescriptor?, index: Int): Long {
        return castFromNullToZeroOrNull(descriptor, index)?.let {
            return 0L
        } ?: kotlin.run {
            check(this != null) // contract
            val canBeHexOrBin = this.length > 2 && this[0] == '0'

            if (canBeHexOrBin) {
                when {
                    (this[1] == 'x' || this[1] == 'X') -> return HexConverter.hexToLong(this, 2)
                    (this[1] == 'b' || this[1] == 'B') -> return BinaryConverter.binToLong(this, 2)
                }
            }

            return this.toLongOrNull() ?: kotlin.runCatching {
                if (configuration.nonStrictNumber) {
                    this.toFloat().toLong()
                } else {
                    throw contextualDecodingException("Number $this overflow for $typeName", descriptor, index)
                }
            }.getOrElse {
                throw contextualDecodingException("Invalid $typeName: $this", descriptor, index, it)
            }
        }
    }
}


private fun YamlDecoder.fail(message: String, descriptor: SerialDescriptor?, index: Int, cause: Throwable? = null): Nothing {
    throw YamlSerializationException(
        "$message " +
            "when reading element '${index.let { descriptor?.getElementName(it) ?: "<decoding index or beginning>" }}' " +
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
internal fun YamlDecoder.contextualDecodingException(
    hint: String,
    descriptor: SerialDescriptor? = null,
    index: Int = -1,
    throwable: Throwable? = null
): YamlDecodingException {
    return tokenStream.contextualDecodingException("Top-level decoder: $hint", descriptor, index, throwable)
}

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal fun YamlDecoder.AbstractDecoder.contextualDecodingException(
    hint: String,
    descriptor: SerialDescriptor? = null,
    index: Int = -1,
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
    return contextualDecodingException(hint, null, -1)
}

@Suppress("NOTHING_TO_INLINE") // avoid unnecessary stack
internal fun TokenStream.contextualDecodingException(hint: String, descriptor: SerialDescriptor?, index: Int, throwable: Throwable? = null): YamlDecodingException {
    val message: String = if (descriptor == null)
        hint
    else
        hint + "for '${index.let { descriptor.getElementName(it) }}' " +
            "in '${descriptor.serialName}'"

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
    return this and 0b1 != 0
}