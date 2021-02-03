@file:Suppress("unused")

package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test
import kotlin.test.assertEquals


internal class FlowListTest {

    @Test
    fun `nullable list`() {
        @Serializable
        data class Item(
            val id: String = "",
            val label: String = "default"
        )

        @Serializable
        data class TestData(
            val list: List<Item?>
        )

        assertEquals(
            TestData(
                listOf(Item("Open"), Item("OpenNew", "Open New"), null)
            ),
            Yaml.decodeFromString(
                TestData.serializer(), """
        list: [
          {"id": "Open"},
          {"id": "OpenNew", "label": "Open New"},
          null,
        ]   
        """
            )
        )
    }

    @Test
    fun testFlowListWithDescriptor() {
        @Serializable
        class TestData(
            val list: List<List<String>>
        )

        Yaml.decodeFromString(
            TestData.serializer(), """
    list: [[test, test, test, ]] 
    """
        )
    }

}