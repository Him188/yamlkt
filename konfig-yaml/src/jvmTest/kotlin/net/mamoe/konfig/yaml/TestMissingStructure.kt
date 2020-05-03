package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import org.junit.Test
import kotlin.test.assertEquals


internal class TestMissingStructure {
    @Serializable
    data class Data(
        val inner: Inner = Inner("default")
    ) {
        @Serializable
        data class Inner(
            val value: String
        )
    }

    @Test
    fun `test missing structure in block map`() {
        assertEquals(
            Data(Data.Inner("default")),
            Yaml.default.parse(
                Data.serializer(), ""
            )
        )
    }
}