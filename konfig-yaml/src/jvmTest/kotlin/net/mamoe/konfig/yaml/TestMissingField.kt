package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import org.junit.Test
import kotlin.test.assertEquals

internal class TestMissingField {

    @Test
    fun `missing field in flow map`() {
        @Serializable
        data class Item(
            val id: String = "",
            val label: String = "default"
        )

        assertEquals(Item("Open"), Yaml.default.parse(Item.serializer(), """{"id": "Open"}"""))
    }
}