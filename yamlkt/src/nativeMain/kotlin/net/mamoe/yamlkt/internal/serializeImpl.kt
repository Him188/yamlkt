@file:Suppress("UNCHECKED_CAST")

package net.mamoe.yamlkt.internal

import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.*
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.serializerOrNull

@OptIn(InternalSerializationApi::class)
internal actual fun IYamlDynamicSerializer.serializeImpl(
    encoder: Encoder,
    value: Any
) = when (value::class) {
    Byte::class -> encoder.encodeSerializableValue(Byte.serializer(), value as Byte)
    Short::class -> encoder.encodeSerializableValue(Short.serializer(), value as Short)
    Int::class -> encoder.encodeSerializableValue(Int.serializer(), value as Int)
    Long::class -> encoder.encodeSerializableValue(Long.serializer(), value as Long)
    Float::class -> encoder.encodeSerializableValue(Float.serializer(), value as Float)
    Double::class -> encoder.encodeSerializableValue(Double.serializer(), value as Double)
    Char::class -> encoder.encodeSerializableValue(Char.serializer(), value as Char)
    String::class -> encoder.encodeSerializableValue(String.serializer(), value as String)
    Boolean::class -> encoder.encodeSerializableValue(Boolean.serializer(), value as Boolean)

    IntArray::class -> encoder.encodeSerializableValue(IntArraySerializer(), value as IntArray)
    ShortArray::class -> encoder.encodeSerializableValue(ShortArraySerializer(), value as ShortArray)
    ByteArray::class -> encoder.encodeSerializableValue(ByteArraySerializer(), value as ByteArray)
    LongArray::class -> encoder.encodeSerializableValue(LongArraySerializer(), value as LongArray)
    CharArray::class -> encoder.encodeSerializableValue(CharArraySerializer(), value as CharArray)
    FloatArray::class -> encoder.encodeSerializableValue(FloatArraySerializer(), value as FloatArray)
    DoubleArray::class -> encoder.encodeSerializableValue(DoubleArraySerializer(), value as DoubleArray)
    BooleanArray::class -> encoder.encodeSerializableValue(BooleanArraySerializer(), value as BooleanArray)

    Pair::class -> encoder.encodeSerializableValue(YamlDynamicPairSerializer, value as Pair<Any?, Any?>)
    Triple::class -> encoder.encodeSerializableValue(YamlDynamicTripleSerializer, value as Triple<Any?, Any?, Any?>)

    Array::class -> encoder.encodeSerializableValue(AnyTypedArraySerializer, value as Array<Any?>)

    else -> when (value) {
        is Map<*, *> -> encoder.encodeSerializableValue(YamlDynamicMapSerializer, value as Map<Any?, Any?>)
        is List<*> -> encoder.encodeSerializableValue(YamlDynamicListSerializer, value as List<Any?>)
        is Map.Entry<*, *> -> encoder.encodeSerializableValue(YamlMapEntrySerializer, value as Map.Entry<Any?, Any?>)
        else -> encoder.encodeSerializableValue(
            serializer = value::class.serializerOrNull()
                    as? KSerializer<Any>?
                ?: error(
                    "Cannot find serializer for ${value.classSimpleName()}. Please use specify serializers manually."
                ),
            value = value
        )
    }
}