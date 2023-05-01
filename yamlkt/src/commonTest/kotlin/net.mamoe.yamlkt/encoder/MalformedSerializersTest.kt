package net.mamoe.yamlkt.encoder

import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import net.mamoe.yamlkt.internal.Debugging
import kotlin.test.Test
import kotlin.test.assertEquals

internal class MalformedSerializersTest {
    @Test
    fun testIntSerializationWithEncodeSerializableElement() {
        Debugging.enabled = true

        val serializer = object : KSerializer<Int> {
            override val descriptor: SerialDescriptor = Int.serializer().descriptor
            override fun deserialize(decoder: Decoder): Int = null!!
            override fun serialize(encoder: Encoder, value: Int) {
                encoder.encodeSerializableValue(Int.serializer(), value)
            }
        }

        var result = allBlock.encodeToString(serializer, 123)

        assertEquals("123", result.trim())

        result = allFlow.encodeToString(serializer, 123)
        assertEquals("123", result.trim())
    }

    @Test
    fun testIntSerializationWithEncodeNullableSerializableElement() {
        Debugging.enabled = true

        val serializer = object : KSerializer<Int> {
            override val descriptor: SerialDescriptor = Int.serializer().descriptor
            override fun deserialize(decoder: Decoder): Int = null!!
            override fun serialize(encoder: Encoder, value: Int) {
                encoder.encodeNullableSerializableValue(Int.serializer(), value)
            }
        }

        var result = allBlock.encodeToString(serializer, 123)

        assertEquals("123", result.trim())

        result = allFlow.encodeToString(serializer, 123)
        assertEquals("123", result.trim())
    }
}