@file:Suppress("unused")

package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.encoder.allFlow
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails


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
    fun `nullableList`() {
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

    @Test
    fun testNestedBlockSequenceWithNegativeValues() {
        assertEquals(listOf(-1), allFlow.decodeFromString("""[ -1, ]"""))
        assertEquals(listOf(-1), allFlow.decodeFromString("""[ -1 ]"""))
        assertEquals(listOf(-1), allFlow.decodeFromString("""[-1]"""))
        assertEquals(listOf(-1), allFlow.decodeFromString("""[-1  ]"""))
        assertEquals(listOf(-1), allFlow.decodeFromString("""[  -1]"""))
        assertEquals(listOf(-1), allFlow.decodeFromString("[ \n-1]"))
        assertEquals(listOf(-1, 2), allFlow.decodeFromString("""[ -1, 2 ]"""))
        assertEquals(listOf(-1, -2), allFlow.decodeFromString("""[ -1, -2 ]"""))
        assertEquals(listOf(2, -1, -2), allFlow.decodeFromString("""[ 2, -1, -2 ]"""))
        assertEquals(listOf(2, -1, 2), allFlow.decodeFromString("""[ 2, -1, 2 ]"""))

        assertEquals(listOf(listOf(-1)), allFlow.decodeFromString("""[[ -1, ]]"""))
        assertEquals(listOf(listOf(-1)), allFlow.decodeFromString("""[[ -1 ]]"""))
        assertEquals(listOf(listOf(-1)), allFlow.decodeFromString("""[[-1]]"""))
        assertEquals(listOf(listOf(-1)), allFlow.decodeFromString("""[[-1  ]]"""))
        assertEquals(listOf(listOf(-1)), allFlow.decodeFromString("""[[  -1]]"""))
        assertEquals(listOf(listOf(-1)), allFlow.decodeFromString("[[ \n-1]]"))
        assertEquals(listOf(listOf(-1, 2)), allFlow.decodeFromString("""[[ -1, 2 ]]"""))
        assertEquals(listOf(listOf(-1, -2)), allFlow.decodeFromString("""[[ -1, -2 ]]"""))
        assertEquals(listOf(listOf(2, -1, -2)), allFlow.decodeFromString("""[[ 2, -1, -2 ]]"""))
        assertEquals(listOf(listOf(2, -1, 2)), allFlow.decodeFromString("""[[ 2, -1, 2 ]]"""))

        assertFails {
            allFlow.decodeFromString("""[ - -1 ]""")
        }

        assertEquals(listOf("--1"), allFlow.decodeFromString("""[ --1 ]"""))
        assertEquals(listOf("--1", "--1"), allFlow.decodeFromString("""[ --1, --1 ]"""))
        assertEquals(listOf(-1, "--1", "--1"), allFlow.decodeFromString<List<Any>>("""[ -1, --1, --1 ]"""))
        assertEquals(
            listOf(-1, "--1", "--1", 1, -1),
            allFlow.decodeFromString<List<Any>>("""[ -1, --1, --1, 1, -1 ]""")
        )
    }

    @Serializable
    data class TestDataA(
        val a: Int,
        val b: Int,
    )

    @Serializable
    data class TestDataB(
        val list: List<Int>,
        val b: Int,
    )

    @Serializable
    internal class SvcReqPushMsg(
        val uin: Long,
        val svrip: Int? = 0,
        val mPreviews: Map<String, ByteArray>? = null,
    )

    @Test
    fun testFlowClass() {
        assertEquals(TestDataA(1, 1), allFlow.decodeFromString(TestDataA.serializer(), """{ a: 1, b: 1 } """))
        assertEquals(TestDataA(-1, -1), allFlow.decodeFromString(TestDataA.serializer(), """{ a: -1, b: -1 } """))
        assertEquals(TestDataA(-1, 1), allFlow.decodeFromString(TestDataA.serializer(), """{ a: -1, b: 1 } """))
        assertEquals(TestDataA(1, -1), allFlow.decodeFromString(TestDataA.serializer(), """{ a: 1, b: -1 } """))

        assertEquals(
            TestDataB(listOf(1, -1), 1),
            allFlow.decodeFromString(TestDataB.serializer(), """{ list : [1, -1], b: 1 } """)
        )
        assertEquals(
            TestDataB(listOf(-1, 1), -1),
            allFlow.decodeFromString(TestDataB.serializer(), """{ list : [-1, 1], b: -1 } """)
        )
        println(
            allFlow.decodeFromString(
                SvcReqPushMsg.serializer(),
                """{ uin: 9876540101, uMsgTime: 1629306246, svrip: -102210294, vSyncCookie: [], vUinPairMsg: [], mPreviews: {} }"""
            )
        )
    }
}