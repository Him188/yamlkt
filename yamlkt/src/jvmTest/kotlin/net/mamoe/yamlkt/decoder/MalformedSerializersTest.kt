package net.mamoe.yamlkt.decoder

import kotlinx.serialization.KSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import net.mamoe.yamlkt.encoder.allBlock
import net.mamoe.yamlkt.encoder.allFlow
import net.mamoe.yamlkt.internal.Debugging
import org.junit.Test
import kotlin.test.assertEquals

internal class MalformedSerializersTest {
    @Test
    fun testIntSerializationWithDecodeSerializableElement() {
        Debugging.enabled = true

        val serializer = object : KSerializer<Int> {
            override val descriptor: SerialDescriptor = Int.serializer().descriptor
            override fun deserialize(decoder: Decoder): Int = decoder.decodeSerializableValue(Int.serializer())
            override fun serialize(encoder: Encoder, value: Int) = null!!
        }

        var result = allBlock.decodeFromString(serializer, "123")
        assertEquals(123, result)
        result = allFlow.decodeFromString(serializer, "123")
        assertEquals(123, result)
    }

    @Test
    fun testIntSerializationWithDecodeNullableSerializableElement() {
        Debugging.enabled = true

        val serializer = object : KSerializer<Int> {
            override val descriptor: SerialDescriptor = Int.serializer().descriptor
            override fun deserialize(decoder: Decoder): Int = decoder.decodeSerializableValue(Int.serializer())
            override fun serialize(encoder: Encoder, value: Int) = null!!
        }

        var result = allBlock.decodeFromString(serializer, "123")
        assertEquals(123, result)
        result = allFlow.decodeFromString(serializer, "123")
        assertEquals(123, result)
    }
}