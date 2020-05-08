package net.mamoe.yamlkt

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import net.mamoe.yamlkt.internal.IYamlDynamicSerializer
import net.mamoe.yamlkt.internal.YamlDecoder
import net.mamoe.yamlkt.internal.adjustDynamicString
import net.mamoe.yamlkt.internal.serializeImpl
import kotlin.jvm.JvmStatic


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

    /**
     * @return can be `null`, [Int], [Long], [Boolean], [Double], [String], [List] or [Map] only.
     */
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

    @ImplicitReflectionSerializer
    override fun serialize(encoder: Encoder, value: Any?) {
        @Suppress("UNCHECKED_CAST")
        if (value == null) {
            encoder.encodeNullableSerializableValue(String.serializer(), value)
        } else serializeImpl(encoder, value)
    }
}
