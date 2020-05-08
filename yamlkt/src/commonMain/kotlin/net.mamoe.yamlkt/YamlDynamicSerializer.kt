package net.mamoe.yamlkt

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import net.mamoe.yamlkt.internal.IYamlDynamicSerializer
import net.mamoe.yamlkt.internal.YamlDecoder
import net.mamoe.yamlkt.internal.adjustDynamicString
import net.mamoe.yamlkt.internal.contextualDecodingException
import net.mamoe.yamlkt.internal.serializeImpl
import kotlin.jvm.JvmStatic


/**
 * The [KSerializer] for serializing and deserializing primitives,  without any specified serializer.
 *
 * ### Deserializing
 * [String]s may be cased to [Int], [Long], [Double] or [Boolean] if possible, using the following strategy:
 * - If it belongs in range [Int.MIN_VALUE]..[Int.MAX_VALUE], it will be a [Int]
 * - If it belongs in range [Long.MIN_VALUE]..[Long.MAX_VALUE], it will be a [Long]
 * - It it is a decimal value, it will be a [Double].
 * - If it is "false", "FALSE", "true", "TRUE", it will be the corresponding [Boolean] primitive.
 * - Otherwise, e.g. if a number is too large, it will be a [String].
 *
 * Deserialization result can be [Int], [Long], [Boolean], [Double], [String], [List] or [Map] only.
 *
 * **Throws exception when encountered with `null`**, use [YamlNullableDynamicSerializer] to condone `null`s.
 *
 * ### Serializing
 *
 * Supported types:
 * - all boxed or unboxed primitive types, e.g. [Int], [Boolean]
 * - all typed arrays with supported generic types, which is [Array]
 * - all primitive arrays, e.g. [IntArray]
 * - [String]
 * - [Pair], [Triple], [Map.Entry] with supported generic types
 * - [Map], [List], [Set] with supported generic types
 * - types (typically annotated with [Serializable]) that has a compiled serializer on its `Companion`
 *
 * **WARNING**: [YamlDynamicSerializer.serialize] is very slow and may not work as expected on JS,
 * as it use reflection to find capable serializers.
 * It's always better to use specified serializers
 *
 * A best usage of this serializer is to deserialize [YamlElement]
 */
object YamlDynamicSerializer : KSerializer<Any>, IYamlDynamicSerializer {
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlDynamic", UnionKind.CONTEXTUAL)

    @JvmStatic
    internal val listSerializer = ListSerializer(this)

    @JvmStatic
    internal val mapSerializer = MapSerializer(this, this)

    /**
     * @return can be [Int], [Long], [Boolean], [Double], [String], [List] or [Map] only.
     */
    override fun deserialize(decoder: Decoder): Any = decoder.decodeStructure(descriptor) {
        return@decodeStructure when ((this as YamlDecoder.AbstractDecoder).kind) {
            YamlDecoder.Kind.FLOW_MAP, YamlDecoder.Kind.BLOCK_MAP -> {
                this.dontWrapNextStructure = true
                mapSerializer.deserialize(this)
            }
            YamlDecoder.Kind.FLOW_SEQUENCE -> {
                this.dontWrapNextStructure = true
                listSerializer.deserialize(this)
            }
            YamlDecoder.Kind.BLOCK_SEQUENCE -> {
                this.dontWrapNextStructure = true
                listSerializer.deserialize(this)
            }
            YamlDecoder.Kind.NULL_STRING -> {
                throw this.parentYamlDecoder.contextualDecodingException("Unexpected null")
            }
            YamlDecoder.Kind.STRING -> {
                return@decodeStructure parentYamlDecoder.tokenStream.strBuff!!.adjustDynamicString(parentYamlDecoder.tokenStream.quoted)
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Unexpected YamlNull")
            }
        }
    }

    @ImplicitReflectionSerializer
    override fun serialize(encoder: Encoder, value: Any) = serializeImpl(encoder, value)
}
