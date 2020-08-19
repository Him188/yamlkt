package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test
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
    fun `test missing structure in block map`() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.default.decodeFromString(
                Data.serializer(), ""
            )
        )
    }

    @Test
    fun `test missing structure in block map with extra elements`() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.default.decodeFromString(
                Data.serializer(), """unknown: s"""
            )
        )
    }

    @Test
    fun `test missing structure in flow map`() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.default.decodeFromString(
                Data.serializer(), "{}"
            )
        )
    }

    @Test
    fun `test missing structure in flow map with extra elements`() {
        assertEquals(
            Data(
                Data.Inner(
                    "default"
                )
            ),
            Yaml.default.decodeFromString(
                Data.serializer(), """{unknown: s}"""
            )
        )
    }

}