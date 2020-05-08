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

    @Test
    fun testPrimitiveTypes() {
        @Serializable
        data class TestData(
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

        val data = TestData(1, 1, 1, 1, 1, true, 1f, 1.0, 'c', "test", "test")
        val string = Kaml.default.stringify(TestData.serializer(), data)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }

    @Test
    fun testList() {
        @Serializable
        data class TestData(
            val list: List<Int>,
            val list2: List<String>
        )

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

        val data = TestData(listOf(1, 1, 1, 1, 1), listOf("test"))
        val string = Kaml.default.stringify(TestData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }

    @Test
    fun testNestedLists() {
        @Serializable
        data class TestData(
            val negative: List<List<Int>>
        )

        val data = TestData(listOf(listOf(1, 1, 1, 1, 1), listOf(2, 2, 2, 2), listOf(4, 4, 4)))
        val string = Kaml.default.stringify(TestData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }

    @Test
    fun testNestedMapAndList() {
        @Serializable
        data class TestData(
            val negative: Map<String, List<List<Int>>>
        )

        val data = TestData(
            mapOf(
                "coconut" to listOf(listOf(1, 1, 1, 1, 1), listOf(1, 1, 1, 1, 1)),
                "banana" to listOf(listOf(2, 2))
            )
        )
        val string = Kaml.default.stringify(TestData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }

    @Test
    fun testNestedMapAndList2() {
        @Serializable
        data class TestData(
            val data: Map<String, List<String>>
        )

        val data = TestData(
            mapOf(
                "food" to listOf("banana", "apple"),
                "book" to listOf("book1")
            )
        )
        val string = Kaml.default.stringify(TestData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }

    @Test
    fun testNestedMapMap() {
        @Serializable
        data class TestData(
            val data: Map<String, Map<String, Int>>
        )

        val data = TestData(
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
        val string = Kaml.default.stringify(TestData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }

    /*
    @Test
    fun testListAsMapKey() {
        @Serializable
        data class TestData(
            val data: Map<List<String>, Map<String, Int>>
        )

        val data = TestData(
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
        val string = Kaml.default.stringify(TestData.serializer(), data)
        println(string)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }*/
}