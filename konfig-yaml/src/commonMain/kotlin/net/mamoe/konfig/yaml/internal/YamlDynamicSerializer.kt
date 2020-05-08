package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.*
import net.mamoe.konfig.yaml.YamlElement
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
                return@decodeStructure parentYamlDecoder.tokenStream.strBuff!!.adjustDynamicString(parentYamlDecoder.tokenStream.quoted)
            }
            else -> {
                throw this.parentYamlDecoder.contextualDecodingException("Unexpected YamlNull")
            }
        }
    }

    @OptIn(ImplicitReflectionSerializer::class)
    override fun serialize(encoder: Encoder, value: Any) = serializeImpl(encoder, value)
}

/**
 * The serializer that can deserialize `null`s on comparison to [YamlDynamicSerializer]
 *
 * See [YamlDynamicSerializer] for more information
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
                return@decodeStructure parentYamlDecoder.tokenStream.strBuff!!.adjustDynamicString(parentYamlDecoder.tokenStream.quoted)
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


private val LONG_AS_DOUBLE_RANGE = Long.MIN_VALUE.toDouble()..Long.MAX_VALUE.toDouble()
private val INT_AS_DOUBLE_RANGE = Int.MIN_VALUE.toDouble()..Int.MAX_VALUE.toDouble()

internal fun String.adjustDynamicString(quoted: Boolean): Any =
    if (quoted) this
    else when (this) {
        "true", "TRUE" -> true
        "false", "FALSE" -> false
        else -> when (val double = this.toDoubleOrNull()) {
            null -> this
            in INT_AS_DOUBLE_RANGE -> double.toInt()
            in LONG_AS_DOUBLE_RANGE -> double.toLong()
            else -> double
        }
    }


internal interface IYamlDynamicSerializer

internal expect fun IYamlDynamicSerializer.serializeImpl(encoder: Encoder, value: Any)

@Suppress("RemoveExplicitTypeArguments") // compiler bug
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
