@file:JvmMultifileClass
@file:JvmName("YamlUtils")

package net.mamoe.yamlkt.internal

import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.*
import kotlinx.serialization.encoding.Encoder
import net.mamoe.yamlkt.YamlNullableDynamicSerializer
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName


private val LONG_AS_DOUBLE_RANGE = Long.MIN_VALUE.toDouble()..Long.MAX_VALUE.toDouble()
private val INT_AS_DOUBLE_RANGE = Int.MIN_VALUE.toDouble()..Int.MAX_VALUE.toDouble()

internal fun String.adjustDynamicString(quoted: Boolean): Any {
    if (quoted) return this

    return when (this) {
        "true", "TRUE" -> true
        "false", "FALSE" -> false
        else -> {
            val double = this.toDoubleOrNull() ?: return this
            if (this.contains('.')) return double // explicit dot, then it should be double
            when (double) {
                in INT_AS_DOUBLE_RANGE -> double.toInt()
                in LONG_AS_DOUBLE_RANGE -> double.toLong()
                else -> double
            }
        }
    }
}


internal interface IYamlDynamicSerializer

internal expect fun IYamlDynamicSerializer.serializeImpl(encoder: Encoder, value: Any)

internal object AnyTypedArraySerializer :
    KSerializer<Array<Any?>> by ArraySerializer<Any, Any?>(YamlNullableDynamicSerializer)

internal object YamlDynamicPairSerializer : KSerializer<Pair<Any?, Any?>> by PairSerializer(
    YamlNullableDynamicSerializer,
    YamlNullableDynamicSerializer
)

internal object YamlDynamicTripleSerializer :
    KSerializer<Triple<Any?, Any?, Any?>> by TripleSerializer(
        YamlNullableDynamicSerializer,
        YamlNullableDynamicSerializer,
        YamlNullableDynamicSerializer
    )

internal object YamlMapEntrySerializer : KSerializer<Map.Entry<Any?, Any?>> by MapEntrySerializer(
    YamlNullableDynamicSerializer,
    YamlNullableDynamicSerializer
)

internal object IntTypedArraySerializer : KSerializer<Array<Int>> by ArraySerializer(Int.serializer())
internal object DoubleTypedArraySerializer : KSerializer<Array<Double>> by ArraySerializer(Double.serializer())
internal object FloatTypedArraySerializer : KSerializer<Array<Float>> by ArraySerializer(Float.serializer())
internal object ByteTypedArraySerializer : KSerializer<Array<Byte>> by ArraySerializer(Byte.serializer())
internal object ShortTypedArraySerializer : KSerializer<Array<Short>> by ArraySerializer(Short.serializer())
internal object CharTypedArraySerializer : KSerializer<Array<Char>> by ArraySerializer(Char.serializer())
internal object StringTypedArraySerializer : KSerializer<Array<String>> by ArraySerializer(String.serializer())
internal object LongTypedArraySerializer : KSerializer<Array<Long>> by ArraySerializer(Long.serializer())

internal object YamlDynamicMapSerializer : KSerializer<Map<Any?, Any?>> by MapSerializer(
    YamlNullableDynamicSerializer,
    YamlNullableDynamicSerializer
)

internal object YamlDynamicListSerializer : KSerializer<List<Any?>> by ListSerializer(YamlNullableDynamicSerializer)
