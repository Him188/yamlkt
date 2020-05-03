package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals

internal class TestSkippingUnknownElements {

    @Test
    fun `skip in block map`() {
        @Serializable
        data class Data(
            val useful: Int
        )
        assertEquals(
            Data(1), Yaml.default.parse(
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
    fun `skip in flow map`() {
        @Serializable
        data class Data(
            val useful: Int
        )
        assertEquals(
            Data(1), Yaml.default.parse(
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