package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.Encoder
import kotlinx.serialization.ImplicitReflectionSerializer
import kotlinx.serialization.KSerializer
import kotlinx.serialization.serializerOrNull


@Suppress("UNCHECKED_CAST")
@OptIn(ImplicitReflectionSerializer::class)
internal actual fun IYamlDynamicSerializer.serializeImpl(
    encoder: Encoder,
    value: Any
) = when (value::class.js) {
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
                    "Cannot find serializer for ${value.classSimpleName()}. Please use descriptor-based serializing."
                ),
            value = value
        )
    }
}