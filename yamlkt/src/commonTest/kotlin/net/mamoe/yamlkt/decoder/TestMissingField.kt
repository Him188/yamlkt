package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import kotlin.test.Test
import kotlin.test.assertEquals

internal class TestMissingField {
    @Serializable
    data class Item(
        val id: String = "",
        val label: String = "default"
    )

    @Test
    fun missingFieldInFlowMap() {
        assertEquals(Item("Open"), Yaml.decodeFromString(Item.serializer(), """{"id": "Open"}"""))
    }
}