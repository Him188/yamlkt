package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
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

        assertEquals(Item("Open"), Yaml.decodeFromString(Item.serializer(), """{"id": "Open"}"""))
    }
}