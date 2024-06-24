package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import kotlin.test.Test
import kotlin.test.assertEquals


internal class TestMissingStructure {
    @Serializable
    data class Data(
        val inner: Inner = Inner(
            "default"
        )
    ) {
        @Serializable
        data class Inner(
            val value: String
        )
    }

    @Test
    fun testMissingStructureInBlockMap() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.decodeFromString(
                Data.serializer(), ""
            )
        )
    }

    @Test
    fun testMissingStructureInBlockMapWithExtraElements() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.decodeFromString(
                Data.serializer(), """unknown: s"""
            )
        )
    }

    @Test
    fun testMissingStructureInFlowMap() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.decodeFromString(
                Data.serializer(), "{}"
            )
        )
    }

    @Test
    fun testMissingStructureInFlowMapWithExtraElements() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.decodeFromString(
                Data.serializer(), """{unknown: s}"""
            )
        )
    }

}