package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals

internal class ReaderTest {
    private val yaml = Yaml()

    @Test
    fun testNonStrictNumberCasting() {
        @Serializable
        data class TestData(
            val byte: Byte
        )

        val yaml = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true
            )
        )

        assertEquals(
            TestData(123),
            yaml.parse(
                TestData.serializer(), """
                byte: 123.8
            """.trimIndent()
            )
        )

        assertEquals(
            TestData(123),
            yaml.parse(
                TestData.serializer(), """
                byte: 123.0
            """.trimIndent()
            )
        )
    }

    @Test
    fun testNonStrictBooleanCasting() {
        @Serializable
        data class TestData(
            val bool: Boolean
        )

        val yaml = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true
            )
        )

        assertEquals(
            TestData(true),
            yaml.parse(
                TestData.serializer(), """
                bool: true
            """.trimIndent()
            )
        )

        assertEquals(
            TestData(true),
            yaml.parse(
                TestData.serializer(), """
                bool: 1
            """.trimIndent()
            )
        )
    }

    // primitive types and casting
    @Test
    fun testSimpleStructure() {

        @Serializable
        data class TestData(
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

        assertEquals(
            TestData(
                123,
                123,
                123,
                123,
                true,
                123f,
                123.0,
                123.toChar(),
                "string",
                "123"
            ),
            yaml.parse(
                TestData.serializer(), """
            int: 123
            short: 123
            byte: 123
            long: 123
            boolean: true
            float: 123
            double: 123
            char: 123
            string: string
            quotedString: "123"
        """.trimIndent()
            )
        )
    }
}