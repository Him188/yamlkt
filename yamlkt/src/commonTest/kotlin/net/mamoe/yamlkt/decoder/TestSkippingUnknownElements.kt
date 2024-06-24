package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import kotlin.test.Test
import kotlin.test.assertEquals

internal class TestSkippingUnknownElements {
    @Serializable
    data class Data(
        val useful: Int
    )

    @Test
    fun skipInBlockMap() {
        assertEquals(
            Data(1), Yaml.decodeFromString(
                Data.serializer(), """
        unknown1: test
        unknown2: sss
        complex: 
          - test
          - sss
        useful: 1
        """
            )
        )
    }

    @Test
    fun skipInFlowMap() {
        assertEquals(
            Data(1), Yaml.decodeFromString(
                Data.serializer(), """
        {
        unknown1: test,
        unknown2: sss,
        complex: {test},
        useful: 1
        }
        """
            )
        )
    }
}