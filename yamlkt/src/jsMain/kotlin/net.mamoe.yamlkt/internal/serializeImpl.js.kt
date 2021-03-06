package net.mamoe.yamlkt.internal

import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.*
import kotlinx.serialization.encoding.Encoder
import kotlinx.serialization.serializerOrNull


@OptIn(InternalSerializationApi::class)
@Suppress("UNCHECKED_CAST")
internal actual fun IYamlDynamicSerializer.serializeImpl(
    encoder: Encoder,
    value: Any
) = when (value::class.js) {
    Byte::class.js -> encoder.encodeSerializableValue(Byte.serializer(), value as Byte)
    Short::class.js -> encoder.encodeSerializableValue(Short.serializer(), value as Short)
    Int::class.js -> encoder.encodeSerializableValue(Int.serializer(), value as Int)
    Long::class.js -> encoder.encodeSerializableValue(Long.serializer(), value as Long)
    Float::class.js -> encoder.encodeSerializableValue(Float.serializer(), value as Float)
    Double::class.js -> encoder.encodeSerializableValue(Double.serializer(), value as Double)
    Char::class.js -> encoder.encodeSerializableValue(Char.serializer(), value as Char)
    String::class.js -> encoder.encodeSerializableValue(String.serializer(), value as String)
    Boolean::class.js -> encoder.encodeSerializableValue(Boolean.serializer(), value as Boolean)

    IntArray::class.js -> encoder.encodeSerializableValue(IntArraySerializer(), value as IntArray)
    ShortArray::class.js -> encoder.encodeSerializableValue(ShortArraySerializer(), value as ShortArray)
    ByteArray::class.js -> encoder.encodeSerializableValue(ByteArraySerializer(), value as ByteArray)
    LongArray::class.js -> encoder.encodeSerializableValue(LongArraySerializer(), value as LongArray)
    CharArray::class.js -> encoder.encodeSerializableValue(CharArraySerializer(), value as CharArray)
    FloatArray::class.js -> encoder.encodeSerializableValue(FloatArraySerializer(), value as FloatArray)
    DoubleArray::class.js -> encoder.encodeSerializableValue(DoubleArraySerializer(), value as DoubleArray)
    BooleanArray::class.js -> encoder.encodeSerializableValue(BooleanArraySerializer(), value as BooleanArray)

    Pair::class.js -> encoder.encodeSerializableValue(YamlDynamicPairSerializer, value as Pair<Any?, Any?>)
    Triple::class.js -> encoder.encodeSerializableValue(YamlDynamicTripleSerializer, value as Triple<Any?, Any?, Any?>)

    Array::class.js -> encoder.encodeSerializableValue(AnyTypedArraySerializer, value as Array<Any?>)

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