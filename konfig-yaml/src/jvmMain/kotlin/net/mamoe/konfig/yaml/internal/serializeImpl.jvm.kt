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
) = when (value::class.java) {
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
                    "Cannot find serializer for ${value.classSimpleName()}. Please use descriptor-based serializing."
                ),
            value = value
        )
    }
}