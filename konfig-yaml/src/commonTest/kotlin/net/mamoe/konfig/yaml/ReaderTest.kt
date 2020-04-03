package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails

internal class ReaderTest {
    val default = Yaml()
    val nonStrictNullability = Yaml(configuration = YamlConfiguration(nonStrictNullability = true))
    val nonStrictNumber = Yaml(configuration = YamlConfiguration(nonStrictNumber = true))


    @Test
    fun testNonStrictNumberCasting() {
        @Serializable
        data class TestData(
            val byte: Byte
        )

        val nonStrict = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true
            )
        )

        assertEquals(
            TestData(123),
            nonStrict.parse(
                TestData.serializer(), """
                byte: 123.8
            """.trimIndent()
            )
        )

        assertEquals(
            TestData(123),
            nonStrict.parse(
                TestData.serializer(), """
                byte: 123.0
            """.trimIndent()
            )
        )

        val strict = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = false
            )
        )

        assertFails {
            strict.parse(
                TestData.serializer(), """
                byte: 123.0
            """.trimIndent()
            )
        }
    }

    @Test
    fun testNonStrictNullCasting() {
        @Serializable
        data class TestData(
            val byte: Byte
        )

        val yaml = Yaml(
            configuration = YamlConfiguration(
                nonStrictNullability = true
            )
        )

        assertEquals(
            TestData(0),
            yaml.parse(
                TestData.serializer(), """
                byte: null
            """.trimIndent()
            )
        )

        assertEquals(
            TestData(123),
            nonStrictNumber.parse(
                TestData.serializer(), """
                byte: 123.0
            """.trimIndent()
            )
        )
    }

    @Test
    fun testBooleanCasting() {
        @Serializable
        data class TestData(
            val bool: Boolean
        )

        fun Yaml.testBoolean(
            expect: Boolean,
            vararg string: String
        ) = string.forEach { str ->
            kotlin.runCatching {
                assertEquals(
                    TestData(expect),
                    parse(TestData.serializer(), """bool: $str""")
                )
            }.exceptionOrNull()?.let { e ->
                throw IllegalStateException("error when testing $str", e)
            }
        }

        default.testBoolean(true, "true", "1", "on", "tRuE")
        default.testBoolean(false, "false", "0", "off", "oFf")

        assertFails { default.testBoolean(true, "1.0") }
        nonStrictNumber.testBoolean(true, "1.0", "1.000000000")
        nonStrictNumber.testBoolean(false, "0.0", "-0.0")

        nonStrictNullability.testBoolean(false, "~", "null", "nUll")
    }

    // primitive types and casting
    @Test
    fun testSimpleStructure() {

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

        assertEquals(
            TestData(
                -1,
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
            default.parse(
                TestData.serializer(), """
            negative: -1
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