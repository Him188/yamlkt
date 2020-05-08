package net.mamoe.yamlkt

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.internal.asTokenStream
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails

internal class DecoderTest {
    private val default = Yaml()
    private val nonStrictNullability =
        Yaml(
            configuration = YamlConfiguration(
                nonStrictNullability = true
            )
        )
    private val nonStrictNumber =
        Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true
            )
        )


    @Serializable
    data class NestedTestData(
        val outer: Outer
    ) {
        @Serializable
        data class Outer(
            val inner: Inner
        ) {
            @Serializable
            data class Inner(
                val map: Map<String, String>
            )
        }
    }

    @Test
    fun testNested() {
        assertEquals(
            NestedTestData(
                NestedTestData.Outer(
                    NestedTestData.Outer.Inner(
                        mapOf(
                            "foo" to "bar"
                        )
                    )
                )
            ),
            default.parse(
                NestedTestData.serializer(), """
                outer: 
                  inner:
                    map: 
                      foo: bar
            """.trimIndent()
            )
        )
    }

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

        default.testBoolean(true, "true", "1", "TRUE")
        default.testBoolean(false, "false", "0", "FALSE")

        assertFails { default.testBoolean(true, "1.0") }
        nonStrictNumber.testBoolean(true, "1.0", "1.000000000")
        nonStrictNumber.testBoolean(false, "0.0", "-0.0")

        nonStrictNullability.testBoolean(false, "~", "null", "nUll")
    }

    @Test
    fun testSimpleClass() {
        @Serializable
        data class TestData(
            val key: String
        )

        println(
            """
                    key: value
                """.trimIndent().asTokenStream().joinTokenToString()
        )

        assertEquals(
            TestData("value"),
            default.parse(
                TestData.serializer(), """
                    key: value
                """.trimIndent()
            )
        )
    }

    // primitive types and casting
    @Test
    fun testSimpleMultilineList() {
        @Serializable
        data class TestData(
            val list: List<Int>
        )

        assertEquals(
            TestData(listOf(1, 2, 3)),
            default.parse(
                TestData.serializer(), """
                    list:
                    - 1
                    - 2
                    - 3
                """.trimIndent()
            )
        )

        assertEquals(
            TestData(listOf(1, 2, 3)),
            default.parse(
                TestData.serializer(), """
                    list:
                      - 1
                      - 2
                      - 3
                """.trimIndent()
            )
        )
    }

    @Test
    fun testJsonMap() {
        @Serializable
        data class TestData(
            val map: Map<String, String>
        )

        assertEquals(
            TestData(
                mapOf(
                    "foo" to "bar",
                    "test" to "ok"
                )
            ),
            default.parse(
                TestData.serializer(), """
            map: {foo: bar, test: ok}
        """.trimIndent()
            )
        )
    }

    @Test
    fun testYamlMap() {
        @Serializable
        data class TestData(
            val map: Map<String, String>
        )

        assertEquals(
            TestData(
                mapOf(
                    "foo" to "bar",
                    "test" to "ok"
                )
            ),
            default.parse(
                TestData.serializer(), """
            |map: 
            |  foo: bar
            |  test: ok
        """.trimMargin()
            )
        )
    }

    @Test
    fun testSquareList() {
        @Serializable
        data class TestData(
            val list: List<String>
        )

        assertEquals(
            TestData(listOf("foo", "bar")),
            default.parse(
                TestData.serializer(), """
            list: [foo, bar]
        """.trimIndent()
            )
        )
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
                's',
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
            char: s
            string: string
            quotedString: 123
        """.trimIndent()
                //
                //          negative: -1

            )
        )
    }
}