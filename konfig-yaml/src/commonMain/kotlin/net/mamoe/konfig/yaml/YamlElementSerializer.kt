package net.mamoe.konfig.yaml

import kotlinx.serialization.*
import net.mamoe.konfig.yaml.internal.YamlDecoder
import net.mamoe.konfig.yaml.internal.YamlDynamicSerializer
import net.mamoe.konfig.yaml.internal.contextualDecodingException
import net.mamoe.konfig.yaml.internal.toYamlLiteralOrYamlNull


/**
 * The serializer for [YamlElement]. Can be obtained by [YamlElement.serializer]
 */
internal object YamlElementSerializer : KSerializer<YamlElement> {
    override val descriptor: SerialDescriptor = SerialDescriptor(YamlElement::class.simpleName!!, UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlElement = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.FlowMapDecoder -> YamlDynamicSerializer.mapSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.BlockMapDecoder -> YamlDynamicSerializer.mapSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.FlowSequenceDecoder -> YamlDynamicSerializer.listSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.BlockSequenceDecoder -> YamlDynamicSerializer.listSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.YamlStringDecoder -> this.parentYamlDecoder.tokenStream.strBuff!!.toYamlLiteralOrYamlNull(parentYamlDecoder.tokenStream.strQuoted)
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: YamlElement) {
        TODO("not implemented")
    }
}

/**
 * The serializer for [YamlPrimitive]. Can be obtained by [YamlPrimitive.serializer]
 */
internal object YamlPrimitiveSerializer : KSerializer<YamlPrimitive> {
    override val descriptor: SerialDescriptor = SerialDescriptor(YamlPrimitive::class.simpleName!!, UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlPrimitive = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.YamlStringDecoder -> this.parentYamlDecoder.tokenStream.strBuff!!.toYamlLiteralOrYamlNull(parentYamlDecoder.tokenStream.strQuoted)
            is YamlDecoder.AbstractDecoder -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlPrimitive from a ${this.name}")
            }
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: YamlPrimitive) {
        TODO("not implemented")
    }
}

/**
 * The serializer for [YamlLiteral]. Can be obtained by [YamlLiteral.serializer]
 */
internal object YamlLiteralSerializer : KSerializer<YamlLiteral> {
    override val descriptor: SerialDescriptor = SerialDescriptor(YamlPrimitive::class.simpleName!!, UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlLiteral = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.YamlStringDecoder -> {
                this.parentYamlDecoder.tokenStream.strBuff!!.toYamlLiteralOrYamlNull(parentYamlDecoder.tokenStream.strQuoted)
                    as? YamlLiteral
                    ?: throw this.parentYamlDecoder.contextualDecodingException("Expected a YamlLiteral, but found YamlNull")
            }
            is YamlDecoder.AbstractDecoder -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlLiteral from a ${this.name}")
            }
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: YamlLiteral) {
        TODO("not implemented")
    }
}

/**
 * The serializer for [YamlNull]. Can be obtained by [YamlNull.serializer]
 */
internal object YamlNullSerializer : KSerializer<YamlNull> {
    override val descriptor: SerialDescriptor = SerialDescriptor(YamlPrimitive::class.simpleName!!, UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlNull = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.YamlStringDecoder -> {
                val str = this.parentYamlDecoder.tokenStream.strBuff!!
                str.toYamlLiteralOrYamlNull(this.parentYamlDecoder.tokenStream.strQuoted) as? YamlNull
                    ?: throw this.parentYamlDecoder.contextualDecodingException("Expected a YamlNull, but found YamlLiteral(\"$str\")")
            }
            is YamlDecoder.AbstractDecoder -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlPrimitive from a ${this.name}")
            }
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: YamlNull) {
        TODO("not implemented")
    }
}

/**
 * The serializer for [YamlMap]. Can be obtained by [YamlMap.serializer]
 */
internal object YamlMapSerializer : KSerializer<YamlMap> {
    override val descriptor: SerialDescriptor = SerialDescriptor(YamlMap::class.simpleName!!, UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlMap = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.BlockMapDecoder -> YamlDynamicSerializer.mapSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.FlowMapDecoder -> YamlDynamicSerializer.mapSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.AbstractDecoder -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlPrimitive from a ${this.name}")
            }
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    } as? YamlMap ?: error("Yaml Internal error: bad YamlElement casted for a map")

    override fun serialize(encoder: Encoder, value: YamlMap) {
        TODO("not implemented")
    }
}


/**
 * The serializer for [YamlList]. Can be obtained by [YamlList.serializer]
 */
internal object YamlListSerializer : KSerializer<YamlList> {
    override val descriptor: SerialDescriptor = SerialDescriptor(YamlElement::class.simpleName!!, UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlList = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.FlowSequenceDecoder -> YamlDynamicSerializer.listSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.BlockSequenceDecoder -> YamlDynamicSerializer.listSerializer.deserialize(this).asYamlElement()
            is YamlDecoder.AbstractDecoder -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlList from a ${this.name}")
            }
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    } as? YamlList ?: error("Yaml Internal error: bad YamlElement casted for a list")

    override fun serialize(encoder: Encoder, value: YamlList) {
        TODO("not implemented")
    }
}