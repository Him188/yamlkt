package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test
import kotlin.test.assertEquals
import com.charleskorn.kaml.Yaml.Companion as Kaml

/**
 * Compare results with YamlKt and SnakeYaml
 */
internal class DeserializerTest {

    @Serializable
    data class TestPrimitiveTypesData(
        val negative: Int,
        val int: Int,
        val short: Short,
        val byte: Byte,
        val long: Long,
        val boolean: Boolean,
        val float: Float,
        val double: Double,
        val char: Char,
        val string: String,
        val quotedString: String
    )

    @Test
    fun testPrimitiveTypes() {
        val data = TestPrimitiveTypesData(1, 1, 1, 1, 1, true, 1f, 1.0, 'c', "test", "test")
        val string = Kaml.default.encodeToString(TestPrimitiveTypesData.serializer(), data)
        assertEquals(data, Yaml.decodeFromString(TestPrimitiveTypesData.serializer(), string))
    }

    @Serializable
    data class TestListsData(
        val list: List<Int>,
        val list2: List<String>
    )

    @Test
    fun testList() {
        /*
list:
- 1
- 1
- 1
- 1
- 1
list2:
- "test"
         */

        val data = TestListsData(listOf(1, 1, 1, 1, 1), listOf("test"))
        val string = Kaml.default.encodeToString(TestListsData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.decodeFromString(TestListsData.serializer(), string))
    }

    @Serializable
    data class TestNestedListsData(
        val negative: List<List<Int>>
    )

    @Test
    fun testNestedLists() {
        val data = TestNestedListsData(listOf(listOf(1, 1, 1, 1, 1), listOf(2, 2, 2, 2), listOf(4, 4, 4)))
        val string = Kaml.default.encodeToString(TestNestedListsData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.decodeFromString(TestNestedListsData.serializer(), string))
    }

    @Serializable
    data class TestMapAndNestedListData(
        val negative: Map<String, List<List<Int>>>
    )

    @Test
    fun testNestedMapAndList() {
        val data = TestMapAndNestedListData(
            mapOf(
                "coconut" to listOf(listOf(1, 1, 1, 1, 1), listOf(1, 1, 1, 1, 1)),
                "banana" to listOf(listOf(2, 2))
            )
        )
        val string = Kaml.default.encodeToString(TestMapAndNestedListData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.decodeFromString(TestMapAndNestedListData.serializer(), string))
    }

    @Serializable
    data class TestMapAndListData(
        val data: Map<String, List<String>>
    )

    @Test
    fun testNestedMapAndList2() {
        val data = TestMapAndListData(
            mapOf(
                "food" to listOf("banana", "apple"),
                "book" to listOf("book1")
            )
        )
        val string = Kaml.default.encodeToString(TestMapAndListData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.decodeFromString(TestMapAndListData.serializer(), string))
    }

    @Serializable
    data class TestNestedMapData(
        val data: Map<String, Map<String, Int>>
    )

    @Test
    fun testNestedMapMap() {
        val data = TestNestedMapData(
            mapOf(
                "coconut" to mapOf(
                    "foo" to 111,
                    "bar" to 222
                ),
                "banana" to mapOf(
                    "sss" to 333,
                    "bbb" to 6666
                )
            )
        )
        val string = Kaml.default.encodeToString(TestNestedMapData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.decodeFromString(TestNestedMapData.serializer(), string))
    }

    /*
    @Serializable
    data class TestListAsMapKeyData(
        val data: Map<List<String>, Map<String, Int>>
    )

    @Test
    fun testListAsMapKey() {
        val data = TestListAsMapKeyData(
            mapOf(
                listOf("coconut", "coco") to mapOf(
                    "foo" to 111,
                    "bar" to 222
                ),
                listOf("banana", "pineapple") to mapOf(
                    "sss" to 333,
                    "bbb" to 6666
                )
            )
        )
        val string = Kaml.default.stringify(TestListAsMapKeyData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.default.parse(TestListAsMapKeyData.serializer(), string))
    }*/
}