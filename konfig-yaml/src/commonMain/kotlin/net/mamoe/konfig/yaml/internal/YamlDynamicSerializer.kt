package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import net.mamoe.konfig.yaml.YamlElement
import kotlin.jvm.JvmField


/**
 * Can deserialize [String]s, [Map]s, [List]s.
 * Primitives except [String] aren't supported, as they should be casted from [String]
 *
 * The generic types of [Map]s and [List]s this serializer can produce is always a [String]
 * or a nested [Map] or [List] with the same rule in generic types.
 *
 * E.g. output [Map] may be `Map<String, List<String>>`, `Map<Map<String, String>, List<String>>`.
 * But cannot have any primitives except [String]
 *
 * Throws exception on encountering with `null`.
 *
 * A best usage of this serializer is to deserialize [YamlElement]
 */
object YamlDynamicSerializer : KSerializer<Any> {
    override val descriptor: SerialDescriptor = SerialDescriptor("net.mamoe.konfig.yaml.internal.YamlDynamicSerializer", UnionKind.CONTEXTUAL)

    @JvmField
    internal val listSerializer = ListSerializer(this)

    @JvmField
    internal val mapSerializer = MapSerializer(this, this)

    override fun deserialize(decoder: Decoder): Any = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.FlowMapDecoder -> mapSerializer.deserialize(this)
            is YamlDecoder.BlockMapDecoder -> mapSerializer.deserialize(this)
            is YamlDecoder.FlowSequenceDecoder -> listSerializer.deserialize(this)
            is YamlDecoder.BlockSequenceDecoder -> listSerializer.deserialize(this)
            is YamlDecoder.YamlStringDecoder -> {
                val str = this.parentYamlDecoder.tokenStream.strBuff!!
                if (str.asYamlNullOrNull() != null) {
                    throw this.parentYamlDecoder.contextualDecodingException("Unexpected null")
                } else return@decodeStructure str
            }
            is YamlDecoder.YamlNullStringDecoder -> {
                throw this.parentYamlDecoder.contextualDecodingException("Unexpected YamlNull")
            }
            else -> error("bad decoder returned: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: Any) {
        /*
        check(decoder is YamlDecoder || decoder is YamlDecoder.AbstractDecoder) {
            "YamlDynamicSerializer can only be used in Yaml serializing and deserializing"
        }*/


        TODO("not implemented")
    }
}


/**
 * Can deserialize [String]s, `null`s, [Map]s, [List]s.
 * Primitives except [String] aren't supported, as they should be casted from [String]
 *
 * The generic types of [Map]s and [List]s this serializer can produce is always a **nullable** [String]
 * or a nested [Map] or [List] with the same rule in generic types.
 *
 * E.g. output [Map] may be `Map<String?, List<String?>>`, `Map<Map<String?, String?>, List<String?>>`.
 * But cannot have any primitives except [String]
 *
 * A best usage of this serializer is to deserialize [YamlElement]
 *
 * @see YamlDynamicSerializer the non-null serializer
 */
object YamlDynamicNullableSerializer : KSerializer<Any?> {
    override val descriptor: SerialDescriptor = SerialDescriptor("net.mamoe.konfig.yaml.internal.YamlDynamicNullableSerializer", UnionKind.CONTEXTUAL)

    @JvmField
    internal val listSerializer = ListSerializer(this)

    @JvmField
    internal val mapSerializer = MapSerializer(this, this)

    override fun deserialize(decoder: Decoder): Any? = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.FlowMapDecoder -> {
                this.dontWrapNextStructure = true
                mapSerializer.deserialize(this)
            }
            is YamlDecoder.BlockMapDecoder -> {
                this.dontWrapNextStructure = true
                mapSerializer.deserialize(this)
            }
            is YamlDecoder.FlowSequenceDecoder -> {
                this.dontWrapNextStructure = true
                listSerializer.deserialize(this)
            }
            is YamlDecoder.BlockSequenceDecoder -> {
                this.dontWrapNextStructure = true
                listSerializer.deserialize(this)
            }
            is YamlDecoder.YamlStringDecoder -> {
                val str = this.parentYamlDecoder.tokenStream.strBuff!!
                if (str.asYamlNullOrNull() != null) {
                    return@decodeStructure null
                } else return@decodeStructure str
            }
            is YamlDecoder.YamlNullStringDecoder -> {
                return@decodeStructure null
            }
            else -> error("bad decoder returned: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: Any?) {
        /*
        check(decoder is YamlDecoder || decoder is YamlDecoder.AbstractDecoder) {
            "YamlDynamicSerializer can only be used in Yaml serializing and deserializing"
        }*/


        TODO("not implemented")
    }
}