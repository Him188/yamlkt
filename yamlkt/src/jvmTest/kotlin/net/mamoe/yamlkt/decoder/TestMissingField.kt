package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test
import kotlin.test.assertEquals

internal class TestMissingField {
    @Serializable
    data class Item(
        val id: String = "",
        val label: String = "default"
    )

    @Test
    fun `missing field in flow map`() {
        assertEquals(Item("Open"), Yaml.decodeFromString(Item.serializer(), """{"id": "Open"}"""))
    }
}