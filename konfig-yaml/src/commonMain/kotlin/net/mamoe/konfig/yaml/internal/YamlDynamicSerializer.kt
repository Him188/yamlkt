package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.*
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
object YamlDynamicSerializer : KSerializer<Any>, IYamlDynamicSerializer {
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

    @OptIn(ImplicitReflectionSerializer::class)
    override fun serialize(encoder: Encoder, value: Any) = serializeImpl(encoder, value)
}

internal interface IYamlDynamicSerializer

internal expect fun IYamlDynamicSerializer.serializeImpl(encoder: Encoder, value: Any)

internal object AnyTypedArraySerializer : KSerializer<Array<Any?>> by ArraySerializer<Any, Any?>(YamlNullableDynamicSerializer)
internal object YamlDynamicPairSerializer : KSerializer<Pair<Any?, Any?>> by PairSerializer(YamlNullableDynamicSerializer, YamlNullableDynamicSerializer)
internal object YamlDynamicTripleSerializer :
    KSerializer<Triple<Any?, Any?, Any?>> by TripleSerializer(YamlNullableDynamicSerializer, YamlNullableDynamicSerializer, YamlNullableDynamicSerializer)

internal object YamlMapEntrySerializer : KSerializer<Map.Entry<Any?, Any?>> by MapEntrySerializer(YamlNullableDynamicSerializer, YamlNullableDynamicSerializer)

internal object IntTypedArraySerializer : KSerializer<Array<Int>> by ArraySerializer(Int.serializer())
internal object DoubleTypedArraySerializer : KSerializer<Array<Double>> by ArraySerializer(Double.serializer())
internal object FloatTypedArraySerializer : KSerializer<Array<Float>> by ArraySerializer(Float.serializer())
internal object ByteTypedArraySerializer : KSerializer<Array<Byte>> by ArraySerializer(Byte.serializer())
internal object ShortTypedArraySerializer : KSerializer<Array<Short>> by ArraySerializer(Short.serializer())
internal object CharTypedArraySerializer : KSerializer<Array<Char>> by ArraySerializer(Char.serializer())
internal object StringTypedArraySerializer : KSerializer<Array<String>> by ArraySerializer(String.serializer())
internal object LongTypedArraySerializer : KSerializer<Array<Long>> by ArraySerializer(Long.serializer())

internal object YamlDynamicMapSerializer : KSerializer<Map<Any?, Any?>> by MapSerializer(YamlNullableDynamicSerializer, YamlNullableDynamicSerializer)
internal object YamlDynamicListSerializer : KSerializer<List<Any?>> by ListSerializer(YamlNullableDynamicSerializer)

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
object YamlNullableDynamicSerializer : KSerializer<Any?>, IYamlDynamicSerializer {
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

    @OptIn(ImplicitReflectionSerializer::class)
    override fun serialize(encoder: Encoder, value: Any?) {
        @Suppress("UNCHECKED_CAST")
        if (value == null) {
            encoder.encodeNullableSerializableValue(String.serializer(), value)
        } else serializeImpl(encoder, value)
    }
}