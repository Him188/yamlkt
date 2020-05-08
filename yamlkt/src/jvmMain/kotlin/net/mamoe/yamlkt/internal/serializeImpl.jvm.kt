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
) = when (value::class.java) {
    Byte::class.java -> encoder.encodeSerializableValue(Byte.serializer(), value as Byte)
    Short::class.java -> encoder.encodeSerializableValue(Short.serializer(), value as Short)
    Int::class.java -> encoder.encodeSerializableValue(Int.serializer(), value as Int)
    Long::class.java -> encoder.encodeSerializableValue(Long.serializer(), value as Long)
    Float::class.java -> encoder.encodeSerializableValue(Float.serializer(), value as Float)
    Double::class.java -> encoder.encodeSerializableValue(Double.serializer(), value as Double)
    Char::class.java -> encoder.encodeSerializableValue(Char.serializer(), value as Char)
    String::class.java -> encoder.encodeSerializableValue(String.serializer(), value as String)
    Boolean::class.java -> encoder.encodeSerializableValue(Boolean.serializer(), value as Boolean)

    IntArray::class.java -> encoder.encodeSerializableValue(IntArraySerializer(), value as IntArray)
    ShortArray::class.java -> encoder.encodeSerializableValue(ShortArraySerializer(), value as ShortArray)
    ByteArray::class.java -> encoder.encodeSerializableValue(ByteArraySerializer(), value as ByteArray)
    LongArray::class.java -> encoder.encodeSerializableValue(LongArraySerializer(), value as LongArray)
    CharArray::class.java -> encoder.encodeSerializableValue(CharArraySerializer(), value as CharArray)
    FloatArray::class.java -> encoder.encodeSerializableValue(FloatArraySerializer(), value as FloatArray)
    DoubleArray::class.java -> encoder.encodeSerializableValue(DoubleArraySerializer(), value as DoubleArray)
    BooleanArray::class.java -> encoder.encodeSerializableValue(BooleanArraySerializer(), value as BooleanArray)

    Pair::class.java -> encoder.encodeSerializableValue(YamlDynamicPairSerializer, value as Pair<Any?, Any?>)
    Triple::class.java -> encoder.encodeSerializableValue(YamlDynamicTripleSerializer, value as Triple<Any?, Any?, Any?>)

    Array<Any>::class.java -> encoder.encodeSerializableValue(AnyTypedArraySerializer, value as Array<Any?>)

    Array<Int>::class.java -> encoder.encodeSerializableValue(IntTypedArraySerializer, value as Array<Int>)
    Array<Double>::class.java -> encoder.encodeSerializableValue(DoubleTypedArraySerializer, value as Array<Double>)
    Array<Float>::class.java -> encoder.encodeSerializableValue(FloatTypedArraySerializer, value as Array<Float>)
    Array<Byte>::class.java -> encoder.encodeSerializableValue(ByteTypedArraySerializer, value as Array<Byte>)
    Array<Short>::class.java -> encoder.encodeSerializableValue(ShortTypedArraySerializer, value as Array<Short>)
    Array<Char>::class.java -> encoder.encodeSerializableValue(CharTypedArraySerializer, value as Array<Char>)
    Array<String>::class.java -> encoder.encodeSerializableValue(StringTypedArraySerializer, value as Array<String>)
    Array<Long>::class.java -> encoder.encodeSerializableValue(LongTypedArraySerializer, value as Array<Long>)

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