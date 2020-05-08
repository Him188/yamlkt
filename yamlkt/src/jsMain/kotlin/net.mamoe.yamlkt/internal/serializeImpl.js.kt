package net.mamoe.yamlkt.internal

import kotlinx.serialization.Encoder
import kotlinx.serialization.ImplicitReflectionSerializer
import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.*
import kotlinx.serialization.serializerOrNull


@Suppress("UNCHECKED_CAST")
@OptIn(ImplicitReflectionSerializer::class)
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

    Array<Any>::class.js -> encoder.encodeSerializableValue(AnyTypedArraySerializer, value as Array<Any?>)

    Array<Int>::class.js -> encoder.encodeSerializableValue(IntTypedArraySerializer, value as Array<Int>)
    Array<Double>::class.js -> encoder.encodeSerializableValue(DoubleTypedArraySerializer, value as Array<Double>)
    Array<Float>::class.js -> encoder.encodeSerializableValue(FloatTypedArraySerializer, value as Array<Float>)
    Array<Byte>::class.js -> encoder.encodeSerializableValue(ByteTypedArraySerializer, value as Array<Byte>)
    Array<Short>::class.js -> encoder.encodeSerializableValue(ShortTypedArraySerializer, value as Array<Short>)
    Array<Char>::class.js -> encoder.encodeSerializableValue(CharTypedArraySerializer, value as Array<Char>)
    Array<String>::class.js -> encoder.encodeSerializableValue(StringTypedArraySerializer, value as Array<String>)
    Array<Long>::class.js -> encoder.encodeSerializableValue(LongTypedArraySerializer, value as Array<Long>)

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