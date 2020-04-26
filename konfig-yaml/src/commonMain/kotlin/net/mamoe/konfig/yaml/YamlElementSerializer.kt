package net.mamoe.konfig.yaml

import kotlinx.serialization.*
import net.mamoe.konfig.yaml.internal.YamlDecoder
import net.mamoe.konfig.yaml.internal.YamlDynamicSerializer


/**
 * The serializer for [YamlElement]. Can be obtained by [YamlElement.serializer]
 */
internal object YamlElementSerializer : KSerializer<YamlElement> {
    override val descriptor: SerialDescriptor = SerialDescriptor(YamlElement::class.simpleName!!, UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlElement = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.JsonLikeMapDecoder -> YamlDynamicSerializer.mapSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.YamlLikeMapDecoder -> YamlDynamicSerializer.mapSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.SquareListDecoder -> YamlDynamicSerializer.listSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.MultilineListDecoder -> YamlDynamicSerializer.listSerializer.deserialize(this).asYamlElement()
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: YamlElement) {
        TODO("not implemented")
    }
}