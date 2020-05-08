package net.mamoe.yamlkt

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import net.mamoe.yamlkt.internal.*
import kotlin.jvm.JvmStatic

/**
 * The serializer that can deserialize `null` as it self.
 *
 * For input text `name: ~`, this serializer can return a `null` for the value corresponding to 'key'.
 * But [YamlDynamicSerializer] will throw a [YamlDecodingException]
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
    override fun deserialize(decoder: Decoder): Any? = decode(decoder)

    internal inline fun decode(decoder: Decoder, crossinline whenNull: YamlDecoder.AbstractDecoder. () -> Unit = {}): Any? = decoder.decodeStructure(descriptor) {
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
                whenNull()
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
