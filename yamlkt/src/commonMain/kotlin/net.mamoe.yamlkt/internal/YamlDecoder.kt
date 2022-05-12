@file:JvmMultifileClass
@file:JvmName("YamlUtils")

package net.mamoe.yamlkt.internal

import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationException
import kotlinx.serialization.descriptors.PolymorphicKind
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.SerialKind
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.encoding.CompositeDecoder
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.modules.SerializersModule
import net.mamoe.yamlkt.YamlConfigurationInternal
import net.mamoe.yamlkt.YamlDynamicSerializer
import net.mamoe.yamlkt.YamlElement
import net.mamoe.yamlkt.YamlNullableDynamicSerializer
import kotlin.jvm.JvmField
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName

private inline val READ_DONE: Int get() = CompositeDecoder.DECODE_DONE

/**
 * The parser that provides [YamlElement]s from [TokenStream]
 */
internal class YamlDecoder(
    private val configuration: YamlConfigurationInternal,
    internal val tokenStream: TokenStream,
    override val serializersModule: SerializersModule,
) : Decoder {
    /**
     * @return can be [String] if a YAML string is not null, [Token.STRING_NULL] if a YAML string is null, `null` if EOF.
     */
    private fun nextString(stopOnComma: Boolean): Any? {
        val token = tokenStream.nextToken(stopOnComma) ?: return null
        return when (token) {
            Token.MULTILINE_LIST_FLAG -> {
                "-" + nextString(stopOnComma)
            }
            Token.STRING_NULL -> {
                return token
            }
            Token.STRING
            -> {
                tokenStream.strBuff!!
            }
            else -> throw contextualDecodingException("expected String, found token $token instead")
        }
    }

    fun TokenStream.isNextWhitespace(): Boolean {
        this.peekNext {
            if (!it.isWhitespace() && (it == '-' || Token[it] == null)) {
                // like `[ --1 ]`, should be string
                return true
            }
        }
        return false
    }

    enum class Kind {
        FLOW_CLASS,
        FLOW_MAP,
        FLOW_SEQUENCE,
        STRING,
        NULL_STRING,
        BLOCK_CLASS,
        BLOCK_MAP,
        BLOCK_SEQUENCE,
        EMPTY_CLASS,
    }

    private val inlineDecoder = InlineDecoder(this)

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

        fun TokenStream.nextToken(): Token? = nextToken(stopOnComma)
        protected abstract val stopOnComma: Boolean

        final override val serializersModule: SerializersModule
            get() = this@YamlDecoder.serializersModule

        protected open fun nextStringOrNull(): String? {
            return this@YamlDecoder.nextStringOrNull(stopOnComma)
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
        final override fun decodeInlineElement(descriptor: SerialDescriptor, index: Int): Decoder = InlineElementDecoder(this@YamlDecoder, this, descriptor, index)
        // endregion

        // region Decoder primitives override
        final override fun decodeShort(): Short = nextStringOrNull().decodeShortElementImpl(null, -1)
        final override fun decodeString(): String = nextStringOrNull().decodeStringElementImpl(null, -1)
        final override fun decodeBoolean(): Boolean = nextStringOrNull().decodeBooleanElementImpl(null, -1)
        final override fun decodeByte(): Byte = nextStringOrNull().decodeByteElementImpl(null, -1)
        final override fun decodeChar(): Char = nextStringOrNull().decodeCharElementImpl(null, -1)
        final override fun decodeDouble(): Double = nextStringOrNull().decodeDoubleElementImpl(null, -1)
        final override fun decodeFloat(): Float = nextStringOrNull().decodeFloatElementImpl(null, -1)
        final override fun decodeInt(): Int = nextStringOrNull().decodeIntElementImpl(null, -1)
        final override fun decodeLong(): Long = nextStringOrNull().decodeLongElementImpl(null, -1)
        final override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
        final override fun decodeInline(inlineDescriptor: SerialDescriptor): Decoder = inlineDecoder

        override fun decodeNotNullMark(): Boolean =
            when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> false
                Token.STRING_NULL -> false
                else -> {
                    tokenStream.reuseToken(token)
                    true
                }
            }

        override fun decodeNull(): Nothing? = null.debuggingLogDecoder(null, -1) as Nothing?  // TODO: 2020/4/19 decode null
        // endregion

        final override fun beginStructure(descriptor: SerialDescriptor): CompositeDecoder {
            if (dontWrapNextStructure) {
                dontWrapNextStructure = false
                return this
            }
            return this@YamlDecoder.beginStructureImpl(this, descriptor)
        }

        final override fun endStructure(descriptor: SerialDescriptor) {
            Debugging.endStructure()
        }

        final override fun <T : Any> decodeNullableSerializableElement(
            descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T?>,
            previousValue: T?
        ): T? {
            return kotlin.runCatching {
                if (decodeNotNullMark()) {
                    deserializer.deserialize(this)
                } else {
                    decodeNull()
                }
            }.getOrElse {
                throw contextualDecodingException("deserializing nested class", descriptor, index, it)
            }
        }

        final override fun <T> decodeSerializableElement(
            descriptor: SerialDescriptor, index: Int, deserializer: DeserializationStrategy<T>,
            previousValue: T?
        ): T {
            return kotlin.runCatching {
                deserializer.deserialize(this)
            }.getOrElse {
                throw contextualDecodingException("deserializing nested class", descriptor, index, it)
            }
        }
    }

    abstract inner class IndentedDecoder(
        @JvmField internal val baseIndent: Int, name: String
    ) : AbstractDecoder(name) {
        init {
            check(baseIndent >= 0) {
                "baseIndent must be >= 0"
            }
        }

        internal open fun checkIndent(newIndent: Int): Boolean {
            if (newIndent > baseIndent) {
                throw contextualDecodingException("bad indentation, baseIndent=$baseIndent, newIndent=$newIndent")
            }
            return baseIndent <= newIndent
        }

    }

    private val emptyClassDecoder = EmptyClassDecoder()

    /**
     * When reached end of file, but a class is required to be deserialized
     * Only used with descriptors. Has nothing to do with dynamic deserializing.
     */
    inner class EmptyClassDecoder : AbstractDecoder("Yaml Empty Class") {
        override val kind: Kind
            get() = Kind.EMPTY_CLASS

        override val stopOnComma: Boolean
            get() = error("shouldn't be called")

        override fun decodeNotNullMark(): Boolean = false
        override fun decodeSequentially(): Boolean = false
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = READ_DONE
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
        override val stopOnComma: Boolean get() = false

        override fun decodeSequentially(): Boolean = false
        override val kind: Kind
            get() = Kind.BLOCK_CLASS

        /**
         * Peek next token, check if it is null.
         * @return `true` if not null, `false` if null.
         */
        @Suppress("DuplicatedCode")
        override fun decodeNotNullMark(): Boolean {
            val indent = tokenStream.currentIndent
            val leadingSpace = tokenStream.leadingSpace
            return when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> false
                Token.STRING_NULL -> false
                else -> {
                    tokenStream.reuseToken(token)
                    if (tokenStream.currentIndent > indent) {
                        return true
                    }

                    if (tokenStream.leadingSpace > leadingSpace && !tokenStream.quoted) {

                        /*
                         * name: cssxsh
                         * mailAddress:
                         *  cssxsh@gmail.com
                         */
                        return true
                    }

                    if (token == Token.STRING) {
                        /*
                         * name: cssxsh
                         * mailAddress: cssxsh@gmail.com
                         */
                        return !(tokenStream.currentIndent == indent
                            && !tokenStream.quoted
                            && (tokenStream.newLined || tokenStream.strBuff!!.isBlank()))
                    }

                    false
                }
            }
        }

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
                    val current = tokenStream.nextToken()
                    if (current != Token.COLON) {
                        throw tokenStream.contextualDecodingException("There must be a COLON between class key and value but found $current for '${descriptor.serialName}'")
                    }

                    return if (index != CompositeDecoder.UNKNOWN_NAME) {
                        index
                    } else {
                        YamlNullableDynamicSerializer.deserialize(this)
                        decodeElementIndex(descriptor)
                    }
                }
                else -> { // even if the token is illegal, it's parent decoders' responsibility to throw the exception
                    tokenStream.reuseToken(token)
                    return READ_DONE
                }
            }
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
        override val stopOnComma: Boolean get() = false
        private var index = 0
        override val kind: Kind
            get() = Kind.BLOCK_MAP

        @Suppress("DuplicatedCode")
        override fun decodeNotNullMark(): Boolean {
            val indent = tokenStream.currentIndent
            return when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> false
                Token.STRING_NULL -> false
                else -> {
                    tokenStream.reuseToken(token)
                    tokenStream.currentIndent > indent
                }
            }
        }

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index.isOdd()) {
                return index++
            }

            when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> return READ_DONE // in block map it's ok

                Token.STRING -> {
                    if (tokenStream.currentIndent < baseIndent) {
                        Debugging.logCustom { "BlockMapDecoder exit: crt=${tokenStream.currentIndent}, base=$baseIndent" }
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        return READ_DONE
                    }

                    if (!checkIndent(tokenStream.currentIndent)) {
                        return READ_DONE
                    }
                    val current = tokenStream.nextToken()
                    if (current != Token.COLON) {
                        throw tokenStream.contextualDecodingException("There must be a COLON between map key and value but found $current for '${descriptor.serialName}'")
                    } else if(!tokenStream.endOfInput) {
                        val char = tokenStream.source[tokenStream.cur]
                        if(!char.isWhitespace()) {
                            throw tokenStream.contextualDecodingException("Expected whitespace after COLON but found $char for '${descriptor.serialName}'")
                        }
                    }
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    return index++
                }
                // nested
                // Token.LIST_BEGIN, Token.MULTILINE_LIST_FLAG,
                else -> { // even if the token is illegal, it's parent decoders' responsibility to throw the exception
                    tokenStream.reuseToken(token)
                    return READ_DONE
                }
            }
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
        override val stopOnComma: Boolean get() = true

        override val kind: Kind
            get() = Kind.FLOW_MAP

        override fun decodeNotNullMark(): Boolean {
            if (valueCache != null) return true
            return when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF")
                Token.MAP_END -> {
                    tokenStream.reuseToken(token)
                    false
                }
                Token.STRING -> {
                    valueCache = tokenStream.strBuff
                    true
                }
                Token.COMMA -> {
                    false
                }
                else -> throw contextualDecodingException("Illegal token $token")
            }
        }

        private var valueCache: String? = null

        override fun nextStringOrNull(): String? {
            if (valueCache != null) {
                return valueCache.also { valueCache = null }
            }
            return super.nextStringOrNull()
        }

        override fun decodeSequentially(): Boolean = false
        private var index = 0

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
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
                Token.STRING -> {
                    when (val next = tokenStream.nextToken()) {
                        Token.COLON -> {
                            tokenStream.reuseToken(tokenStream.strBuff!!)
                        }
                        Token.COMMA,
                        Token.MAP_END
                        -> {
                            tokenStream.reuseToken(next)
                            tokenStream.reuseToken(Token.STRING_NULL)
                            tokenStream.reuseToken(tokenStream.strBuff!!)
                        }
                        else -> throw contextualDecodingException("Illegal token $token")
                    }
                    index++
                }
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
                else -> throw contextualDecodingException("Illegal token $token")
            }
        }
    }

    /**
     * Example: `{test: value}`
     */
    inner class FlowClassDecoder : AbstractDecoder("Yaml Flow Class") {
        override val stopOnComma: Boolean get() = true

        private var index = -5
        private var firstValueDecoded = false

        override val kind: Kind
            get() = Kind.FLOW_CLASS

        override fun decodeNotNullMark(): Boolean {
            return when (val token = tokenStream.nextToken()) {
                END_OF_FILE -> throw contextualDecodingException("Early EOF. Expected '}'.")

                Token.MAP_END
                -> {
                    tokenStream.reuseToken(token)
                    false
                }
                Token.MAP_BEGIN,
                Token.LIST_BEGIN
                -> {
                    tokenStream.reuseToken(token)
                    true
                }
                Token.STRING_NULL -> {
                    false
                }
                Token.STRING -> {
                    tokenStream.reuseToken(tokenStream.strBuff!!)
                    true
                }
                Token.MULTILINE_LIST_FLAG -> {
                    if (tokenStream.endOfInput) throw contextualDecodingException("Early EOF. Expected '}'.")

                    if (tokenStream.isNextWhitespace()) {
                        tokenStream.reuseToken(tokenStream.readUnquotedString(true, '-'))
                        true
                    } else {
                        throw contextualDecodingException("Illegal token $token")
                    }
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
                        this.index = -1
                        YamlNullableDynamicSerializer.deserialize(this)
                        return decodeElementIndex(descriptor)
                    }
                }
                else -> throw contextualDecodingException("Illegal token $token for '${descriptor.serialName}'")
            }
        }
    }

    /**
     * Example: `[foo, bar]`
     */
    inner class FlowSequenceDecoder : AbstractDecoder("Yaml Flow Sequence") {
        override val stopOnComma: Boolean get() = true
        private var index = 0
        override fun decodeSequentially(): Boolean = false
        override val kind: Kind
            get() = Kind.FLOW_SEQUENCE

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
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
                    Token.STRING
                    -> tokenStream.reuseToken(next)

                    Token.MULTILINE_LIST_FLAG,
                    -> {
                        handlePossibleNegativeValues(current)
                        return index++
                    }

                    else -> throw contextualDecodingException("Illegal token $next")
                }

                // nested structures
                Token.LIST_BEGIN,
                Token.MAP_BEGIN
                -> {
                    tokenStream.reuseToken(current)
                    return index++
                }

                Token.MULTILINE_LIST_FLAG,
                -> {
                    handlePossibleNegativeValues(current)
                    return index++
                }
                else ->
                    throw contextualDecodingException("Illegal token $current")
            }
            return index++
        }

        private fun handlePossibleNegativeValues(current: Token) {
            if (tokenStream.isNextWhitespace()) {
                tokenStream.reuseToken(tokenStream.readUnquotedString(true, '-'))
                return
            }

            when (val next = tokenStream.nextToken() ?: throw contextualDecodingException("Unexpected end of text")) {
                Token.STRING -> {
                    tokenStream.reuseToken(next)
                    tokenStream.strBuff = "-" + tokenStream.strBuff
                }
                else -> {
                    tokenStream.reuseToken(current)
                }
            }
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
    inner class BlockSequenceDecoder(
        baseIndent: Int
    ) : IndentedDecoder(baseIndent, "Yaml Block Sequence") {
        override val stopOnComma: Boolean get() = false
        override fun decodeSequentially(): Boolean = false
        private var index: Int = 0
        override val kind: Kind
            get() = Kind.BLOCK_SEQUENCE

        override fun checkIndent(newIndent: Int): Boolean {
            // TODO: 2020/11/8 not sure
            return baseIndent <= newIndent
        }

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
            if (index == 0) {
                val token = tokenStream.nextToken()
                check(token == Token.MULTILINE_LIST_FLAG) {
                    "The beginning token must be '-' but found $token"
                }
                return index++
            }
            when (val token = tokenStream.nextToken()) {
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
                else -> { // even if the token is illegal, it's parent decoders' responsibility to throw the exception
                    tokenStream.reuseToken(token)
                    return READ_DONE
                }
                /*
                else -> throw contextualDecodingException(
                    "Expected ${Token.MULTILINE_LIST_FLAG.value}, but found $token on decoding multiline list for '${descriptor.serialName}'"
                )*/
            }
        }
    }


    /**
     * Singleton
     */
    private val yamlStringDecoder = YamlStringDecoder()
    private val yamlNullStringDecoder = YamlNullStringDecoder()

    inner class YamlStringDecoder : AbstractDecoder("Yaml Literal") {
        override val stopOnComma: Boolean get() = false
        override val kind: Kind
            get() = Kind.STRING

        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = error("shouldn't be called")
    }

    inner class YamlNullStringDecoder : AbstractDecoder("Yaml Null") {
        override fun decodeElementIndex(descriptor: SerialDescriptor): Int = error("shouldn't be called")

        override val kind: Kind
            get() = Kind.NULL_STRING
        override val stopOnComma: Boolean
            get() = error("shouldn't be called")

        override fun decodeNotNullMark(): Boolean = false
    }


    override fun decodeNotNullMark(): Boolean {
        return when (val token = tokenStream.nextToken(false)) {
            END_OF_FILE -> false
            Token.STRING_NULL -> false
            else -> {
                tokenStream.reuseToken(token)
                true
            }
        }
    }

    override fun beginStructure(descriptor: SerialDescriptor): CompositeDecoder {
        return beginStructureImpl(null, descriptor)
    }

    internal fun beginStructureImpl(
        parentDecoder: AbstractDecoder?,
        descriptor: SerialDescriptor
    ): CompositeDecoder {
        Debugging.beginStructure(descriptor, parentDecoder)

        fun nextToken() = parentDecoder?.run { tokenStream.nextToken() } ?: tokenStream.nextToken(false)

        when (descriptor.kind) {
            StructureKind.LIST -> {
                return when (val token = tokenStream.nextToken(false)) {
                    null -> throw contextualDecodingException("Early EOF")
                    Token.LIST_BEGIN -> {
                        //   tokenStream.reuseToken(token)
                        FlowSequenceDecoder()
                    }
                    Token.MULTILINE_LIST_FLAG -> {
                        tokenStream.reuseToken(token)
                        BlockSequenceDecoder(tokenStream.currentIndent)
                    }
                    else -> throw contextualDecodingException("expected list(sequence), but found $token")
                }
            }
            is PolymorphicKind,
            StructureKind.CLASS -> {
                return when (val token = nextToken()) {
                    END_OF_FILE -> {
                        emptyClassDecoder
                    }
                    Token.MAP_BEGIN -> {
                        // tokenStream.reuseToken(token)
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
                return when (val token = nextToken()) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> {
                        // tokenStream.reuseToken(token)
                        FlowMapDecoder()
                    }
                    Token.STRING -> {
                        tokenStream.reuseToken(tokenStream.strBuff!!)
                        BlockMapDecoder(tokenStream.currentIndent)
                    }
                    else -> throw contextualDecodingException("illegal beginning token $token on decoding map")
                }
            }
            SerialKind.CONTEXTUAL -> {
                return when (val token = nextToken()) {
                    END_OF_FILE -> throw contextualDecodingException("Early EOF")
                    Token.MAP_BEGIN -> {
                        // tokenStream.reuseToken(token)
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

                        val beforeRealIndent = tokenStream.currentIndent
                        val beforeIndent = tokenStream.currentIndent
                        val stringValue = tokenStream.strBuff!!

                        return when (val next = nextToken()) { // coz we are detecting whether it is a yaml-like map
                            END_OF_FILE -> {
                                yamlStringDecoder
                            }

                            Token.COLON
                            -> {
                                // inferred map
                                tokenStream.currentIndent = beforeIndent
                                tokenStream.reuseToken(next)
                                tokenStream.reuseToken(stringValue)

                                BlockMapDecoder(beforeRealIndent)
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
                                //  tokenStream.strBuff = stringValue
                                yamlStringDecoder
                            }
                        }
                    }
                    Token.LIST_BEGIN -> {
                        //  tokenStream.reuseToken(token)
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
    override fun decodeBoolean(): Boolean = nextStringOrNull().decodeBooleanElementImpl(null, -1)
    override fun decodeByte(): Byte = nextStringOrNull().decodeByteElementImpl(null, -1)
    override fun decodeChar(): Char = nextStringOrNull().decodeCharElementImpl(null, -1)
    override fun decodeDouble(): Double = nextStringOrNull().decodeDoubleElementImpl(null, -1)
    override fun decodeFloat(): Float = nextStringOrNull().decodeFloatElementImpl(null, -1)
    override fun decodeInline(inlineDescriptor: SerialDescriptor): Decoder = inlineDecoder

    override fun decodeInt(): Int = nextStringOrNull().decodeIntElementImpl(null, -1)
    override fun decodeLong(): Long = nextStringOrNull().decodeLongElementImpl(null, -1)
    override fun decodeEnum(enumDescriptor: SerialDescriptor): Int = enumDescriptor.getElementIndexOrThrow(decodeString())
    override fun decodeNull(): Nothing? = null.debuggingLogDecoder(null, -1) as Nothing? // TODO: 2020/4/19 decode null
    // endregion

    /**
     * Null represents the value is null, instead of EOF.
     */
    private fun nextStringOrNull(stopOnComma: Boolean = true): String? {
        return nextString(stopOnComma)?.let { value ->
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
        this.debuggingLogDecoder(descriptor, index).withIntegerValue("byte", descriptor, index).limitToByte()

    private fun String?.decodeCharElementImpl(descriptor: SerialDescriptor?, index: Int): Char =
        this.debuggingLogDecoder(descriptor, index)?.let {
            check(it.length == 1) { "too many chars for a char: $it" }
            it.first()
        } ?: checkNonStrictNullability(descriptor, index)
        ?: 0.toChar()

    private fun String?.decodeDoubleElementImpl(descriptor: SerialDescriptor?, index: Int): Double =
        this.debuggingLogDecoder(descriptor, index).withDoubleValue("double", descriptor, index)

    private fun String?.decodeFloatElementImpl(descriptor: SerialDescriptor?, index: Int): Float =
        this.debuggingLogDecoder(descriptor, index).withFloatValue("float", descriptor, index)

    private fun String?.decodeIntElementImpl(descriptor: SerialDescriptor?, index: Int): Int =
        this.debuggingLogDecoder(descriptor, index).withIntegerValue("int", descriptor, index).limitToInt()

    private fun String?.decodeLongElementImpl(descriptor: SerialDescriptor?, index: Int): Long =
        this.debuggingLogDecoder(descriptor, index).withIntegerValue("long", descriptor, index)

    private fun String?.decodeShortElementImpl(descriptor: SerialDescriptor?, index: Int): Short =
        this.debuggingLogDecoder(descriptor, index).withIntegerValue("short", descriptor, index).limitToShort()

    private fun String?.decodeStringElementImpl(descriptor: SerialDescriptor?, index: Int): String =
        this.debuggingLogDecoder(descriptor, index)
            ?: checkNonStrictNullability(descriptor, index)
            ?: ""

    private fun String?.decodeBooleanElementImpl(descriptor: SerialDescriptor?, index: Int): Boolean {
        return this.debuggingLogDecoder(descriptor, index)?.let { value ->
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
    internal fun String?.withIntegerValue(typeName: String, descriptor: SerialDescriptor?, index: Int): Long {
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
                    kotlin.runCatching {
                        this.toFloat()
                    }.getOrElse {
                        throw contextualDecodingException("Cannot cast $this to $typeName", descriptor, index)
                    }.toLong()
                } else {
                    throw contextualDecodingException("Number $this overflow for $typeName", descriptor, index)
                }
            }.getOrElse {
                throw contextualDecodingException("Invalid $typeName: $this", descriptor, index, it)
            }
        }
    }
}

@Suppress("NOTHING_TO_INLINE")
internal inline fun Int.isOdd(): Boolean {
    return this and 0b1 != 0
}

internal fun SerialDescriptor.getElementIndexOrThrow(name: String): Int {
    val index = getElementIndex(name)
    if (index == CompositeDecoder.UNKNOWN_NAME)
        throw SerializationException("$serialName does not contain element with name '$name'")
    return index
}
