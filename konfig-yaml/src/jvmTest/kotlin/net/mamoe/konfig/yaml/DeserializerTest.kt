package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import org.junit.Test
import kotlin.test.assertEquals
import com.charleskorn.kaml.Yaml.Companion as Kaml

/**
 * Compare results with Konfig and SnakeYaml
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

        val data = TestData(listOf(listOf(1, 1, 1, 1, 1), listOf(1, 1, 1, 1, 1)))
        val string = Kaml.default.stringify(TestData.serializer(), data)
        assertEquals(data, Yaml.default.parse(TestData.serializer(), string))
    }
}