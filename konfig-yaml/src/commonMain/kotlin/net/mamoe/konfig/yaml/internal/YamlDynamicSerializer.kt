package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer


/**
 * Can deserialize [String]s, [Map]s, [List]s. All primitives aren't supported. Should be casted from [String]
 */
object YamlDynamicSerializer : KSerializer<Any> {
    override val descriptor: SerialDescriptor = SerialDescriptor("net.mamoe.konfig.yaml.internal.YamlDynamicSerializer", UnionKind.CONTEXTUAL)

    private val listSerializer = ListSerializer(this)
    private val mapSerializer = MapSerializer(this, this)

    override fun deserialize(decoder: Decoder): Any = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.JsonLikeMapDecoder -> mapSerializer.deserialize(this)
            is YamlDecoder.YamlLikeMapDecoder -> mapSerializer.deserialize(this)
            is YamlDecoder.SquareListDecoder -> listSerializer.deserialize(this)
            is YamlDecoder.MultilineListDecoder -> listSerializer.deserialize(this)
            is YamlDecoder.YamlStringDecoder -> this.parentYamlDecoder.tokenStream.strBuff!!
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