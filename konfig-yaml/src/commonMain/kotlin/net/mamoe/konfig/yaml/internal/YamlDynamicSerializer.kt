package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import net.mamoe.konfig.yaml.YamlElement


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
 *
 * A best usage of this serializer is to deserialize [YamlElement]
 */
object YamlDynamicSerializer : KSerializer<Any> {
    override val descriptor: SerialDescriptor = SerialDescriptor("net.mamoe.konfig.yaml.internal.YamlDynamicSerializer", UnionKind.CONTEXTUAL)

    internal val listSerializer = ListSerializer(this)
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
                    this.parentYamlDecoder.contextualDecodingException("Unexpected null")
                } else return@decodeStructure str
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