package net.mamoe.yamlkt

import kotlinx.serialization.*
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.descriptors.SerialKind
import kotlinx.serialization.descriptors.buildSerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import net.mamoe.yamlkt.internal.IYamlDynamicSerializer
import net.mamoe.yamlkt.internal.contextualDecodingException
import net.mamoe.yamlkt.internal.serializeImpl


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
 * Deserialization result can be [Int], [Long], [Boolean], [Double], [String], [List] or [Map] only.
 *
 * The value of the inner structures can be `null`.
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
 * It's suggested to use specified serializers (use [Yaml.parse]/[Yaml.stringify] with a known serializer/deserializer)
 *
 * A best usage of this serializer is to deserialize [YamlElement]
 */
public object YamlDynamicSerializer : KSerializer<Any>, IYamlDynamicSerializer {
    @OptIn(InternalSerializationApi::class)
    public override val descriptor: SerialDescriptor = buildSerialDescriptor("YamlDynamic", SerialKind.CONTEXTUAL)

    /**
     * @return can be [Int], [Long], [Boolean], [Double], [String], [List] or [Map] only.
     */
    public override fun deserialize(decoder: Decoder): Any =
        YamlNullableDynamicSerializer.decode(decoder,
            whenNull = { throw this.contextualDecodingException("Unexpected null") }
        )!!

    public override fun serialize(encoder: Encoder, value: Any): Unit = serializeImpl(encoder, value)
}
