@file:JvmMultifileClass
@file:JvmName("KonfigYamlUtils")

package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import net.mamoe.konfig.yaml.*
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName

internal object YamlElementMapSerializer : KSerializer<Map<YamlElement, YamlElement>> by MapSerializer(YamlElement.serializer(), YamlElement.serializer())
internal object YamlElementListSerializer : KSerializer<List<YamlElement>> by ListSerializer(YamlElement.serializer())

/**
 * The serializer for [YamlElement]. Can be obtained by [YamlElement.serializer]
 */
internal object YamlElementSerializer : KSerializer<YamlElement> {
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlElement", UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlElement = decoder.decodeStructure(descriptor) {
        return@decodeStructure when ((this as YamlDecoder.AbstractDecoder).kind) {
            YamlDecoder.Kind.FLOW_MAP,
            YamlDecoder.Kind.BLOCK_MAP
            -> {
                this.dontWrapNextStructure = true
                YamlMap(YamlElementMapSerializer.deserialize(this))
            }
            YamlDecoder.Kind.FLOW_SEQUENCE,
            YamlDecoder.Kind.BLOCK_SEQUENCE
            -> {
                this.dontWrapNextStructure = true
                YamlList(YamlElementListSerializer.deserialize(this))
            }
            YamlDecoder.Kind.NULL_STRING -> YamlNull
            YamlDecoder.Kind.STRING
            -> {
                YamlLiteral(this.parentYamlDecoder.tokenStream.strBuff!!)
            }
            else -> error("Yaml Internal error: bad decoder: $this")
        }
    }

    override fun serialize(encoder: Encoder, value: YamlElement) = when (value) {
        is YamlPrimitive -> YamlPrimitive.serializer().serialize(encoder, value)
        is YamlMap -> YamlMap.serializer().serialize(encoder, value)
        is YamlList -> YamlList.serializer().serialize(encoder, value)
    }
}

/**
 * The serializer for [YamlPrimitive]. Can be obtained by [YamlPrimitive.serializer]
 */
internal object YamlPrimitiveSerializer : KSerializer<YamlPrimitive> {
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlPrimitive", UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlPrimitive = decoder.decodeStructure(descriptor) {
        return@decodeStructure when ((this as YamlDecoder.AbstractDecoder).kind) {
            YamlDecoder.Kind.NULL_STRING -> YamlNull
            YamlDecoder.Kind.STRING
            -> {
                YamlLiteral(this.parentYamlDecoder.tokenStream.strBuff!!)
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlPrimitive from a ${this.name}")
            }
        }
    }

    override fun serialize(encoder: Encoder, value: YamlPrimitive) {
        encoder.encodeNullableSerializableValue(String.serializer(), value.content)
    }
}

/**
 * The serializer for [YamlLiteral]. Can be obtained by [YamlLiteral.serializer]
 */
internal object YamlLiteralSerializer : KSerializer<YamlLiteral> {
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlLiteral", UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlLiteral = decoder.decodeStructure(descriptor) {
        return@decodeStructure when ((this as YamlDecoder.AbstractDecoder).kind) {
            YamlDecoder.Kind.NULL_STRING -> {
                throw this.parentYamlDecoder.contextualDecodingException("Expected a YamlLiteral, but found YamlNull")
            }
            YamlDecoder.Kind.STRING -> {
                YamlLiteral(this.parentYamlDecoder.tokenStream.strBuff!!)
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlLiteral from a ${this.name}")
            }
        }
    }

    override fun serialize(encoder: Encoder, value: YamlLiteral) {
        encoder.encodeSerializableValue(String.serializer(), value.content)
    }
}

/**
 * The serializer for [YamlNull]. Can be obtained by [YamlNull.serializer]
 */
internal object YamlNullSerializer : KSerializer<YamlNull> {
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlNull", UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlNull = decoder.decodeStructure(descriptor) {
        return@decodeStructure when ((this as YamlDecoder.AbstractDecoder).kind) {
            YamlDecoder.Kind.NULL_STRING -> YamlNull
            YamlDecoder.Kind.STRING -> {
                throw this.parentYamlDecoder.contextualDecodingException("Expected a YamlNull, but found YamlLiteral(\"${parentYamlDecoder.tokenStream.strBuff}\")")
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlNull from a ${this.name}")
            }
        }
    }

    override fun serialize(encoder: Encoder, value: YamlNull) {
        encoder.encodeNullableSerializableValue(String.serializer(), null)
    }
}

/**
 * The serializer for [YamlMap]. Can be obtained by [YamlMap.serializer]
 */
internal object YamlMapSerializer : KSerializer<YamlMap> {
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlMap", UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlMap = decoder.decodeStructure(descriptor) {
        return@decodeStructure when ((this as YamlDecoder.AbstractDecoder).kind) {
            YamlDecoder.Kind.BLOCK_MAP -> {
                this.dontWrapNextStructure = true
                YamlMap(YamlElementMapSerializer.deserialize(this))
            }
            YamlDecoder.Kind.FLOW_MAP -> {
                this.dontWrapNextStructure = true
                YamlMap(YamlElementMapSerializer.deserialize(this))
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlMap from a ${this.name}")
            }
        }
    } as? YamlMap ?: error("Yaml Internal error: bad YamlElement casted for a map")

    override fun serialize(encoder: Encoder, value: YamlMap) =
        encoder.encodeSerializableValue(YamlElementMapSerializer, value)
}


/**
 * The serializer for [YamlList]. Can be obtained by [YamlList.serializer]
 */
internal object YamlListSerializer : KSerializer<YamlList> {
    override val descriptor: SerialDescriptor = SerialDescriptor("YamlList", UnionKind.CONTEXTUAL)

    override fun deserialize(decoder: Decoder): YamlList = decoder.decodeStructure(descriptor) {
        return@decodeStructure when ((this as YamlDecoder.AbstractDecoder).kind) {
            YamlDecoder.Kind.FLOW_SEQUENCE -> {
                this.dontWrapNextStructure = true
                YamlList(YamlElementListSerializer.deserialize(this))
            }
            YamlDecoder.Kind.BLOCK_SEQUENCE -> {
                this.dontWrapNextStructure = false
                YamlList(YamlElementListSerializer.deserialize(this))
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Cannot read YamlList from a ${this.name}")
            }
        }
    } as? YamlList ?: error("Yaml Internal error: bad YamlElement casted for a list")

    override fun serialize(encoder: Encoder, value: YamlList) =
        encoder.encodeSerializableValue(YamlElementListSerializer, value)
}