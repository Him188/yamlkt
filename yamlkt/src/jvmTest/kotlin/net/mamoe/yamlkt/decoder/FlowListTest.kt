@file:Suppress("unused")

package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test
import kotlin.test.assertEquals


internal class FlowListTest {
    @Serializable
    data class Item(
        val id: String = "",
        val label: String = "default"
    )

    @Serializable
    data class TestListData(
        val list: List<Item?>
    )

    @Test
    fun `nullable list`() {
        assertEquals(
            TestListData(
                listOf(Item("Open"), Item("OpenNew", "Open New"), null)
            ),
            Yaml.decodeFromString(
                TestListData.serializer(), """
        list: [
          {"id": "Open"},
          {"id": "OpenNew", "label": "Open New"},
          null,
        ]   
        """
            )
        )
    }

    @Serializable
    class TestNestedListData(
        val list: List<List<String>>
    )

    @Test
    fun testFlowListWithDescriptor() {
        Yaml.decodeFromString(
            TestNestedListData.serializer(), """
    list: [[test, test, test, ]] 
    """
        )
    }

}