package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import net.mamoe.konfig.yaml.YamlElement
import kotlin.jvm.JvmStatic


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
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlDynamic", UnionKind.CONTEXTUAL)

    @JvmStatic
    internal val listSerializer = ListSerializer(this)

    @JvmStatic
    internal val mapSerializer = MapSerializer(this, this)

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
                return@decodeStructure parentYamlDecoder.tokenStream.strBuff!!
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Unexpected YamlNull")
            }
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
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlNullableDynamic", UnionKind.CONTEXTUAL)

    @JvmStatic
    internal val listSerializer = ListSerializer(this)

    @JvmStatic
    internal val mapSerializer = MapSerializer(this, this)

    override fun deserialize(decoder: Decoder): Any? = decoder.decodeStructure(descriptor) {
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
            YamlDecoder.Kind.STRING -> {
                return@decodeStructure parentYamlDecoder.tokenStream.strBuff!!
            }
            YamlDecoder.Kind.NULL_STRING -> {
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