package net.mamoe.yamlkt

import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails

internal class DecoderTest {
    private val default = Yaml()
    private val nonStrictNullability =
        Yaml {
            nonStrictNullability = true
        }
    private val nonStrictNumber =
        Yaml {
            nonStrictNumber = true
        }


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
            Yaml.decodeFromString(
                NestedTestData.serializer(), """
                        outer: 
                          inner:
                            map: 
                              foo: bar
                    """.trimIndent()
            )
        )
    }

    @Serializable
    data class TestByteData(
        val byte: Byte
    )

    @Test
    fun testNonStrictNumberCasting() {
        val nonStrict = Yaml {
            nonStrictNumber = true
        }

        assertEquals(
            TestByteData(123),
            nonStrict.decodeFromString(
                TestByteData.serializer(), """
                        byte: 123.8
                    """.trimIndent()
            )
        )

        assertEquals(
            TestByteData(123),
            nonStrict.decodeFromString(
                TestByteData.serializer(), """
                        byte: 123.0
                    """.trimIndent()
            )
        )

        val strict = Yaml {
            nonStrictNumber = false
        }

        assertFails {
            strict.decodeFromString(
                TestByteData.serializer(), """
                        byte: 123.0
                    """.trimIndent()
            )
        }
    }

    @Test
    fun testNonStrictNullCasting() {
        val yaml = Yaml {
            nonStrictNullability = true
        }

        assertEquals(
            TestByteData(0),
            yaml.decodeFromString(
                TestByteData.serializer(), """
                        byte: null
                    """.trimIndent()
            )
        )

        assertEquals(
            TestByteData(123),
            nonStrictNumber.decodeFromString(
                TestByteData.serializer(), """
                        byte: 123.0
                    """.trimIndent()
            )
        )
    }

    @Serializable
    data class TestBooleanData(
        val bool: Boolean
    )

    @Test
    fun testBooleanCasting() {
        fun Yaml.testBoolean(
            expect: Boolean,
            vararg string: String
        ) = string.forEach { str ->
            kotlin.runCatching {
                assertEquals(
                    TestBooleanData(expect),
                    decodeFromString(TestBooleanData.serializer(), """bool: $str""")
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

    @Serializable
    data class TestStringData(
        val key: String
    )

    @Test
    fun testSimpleClass() {
        assertEquals(
            TestStringData("value"),
            Yaml.decodeFromString(
                TestStringData.serializer(), """
                            key: value
                        """.trimIndent()
            )
        )
    }

    @Serializable
    data class TestIntListData(
        val list: List<Int>
    )

    // primitive types and casting
    @Test
    fun testSimpleMultilineList() {
        assertEquals(
            TestIntListData(listOf(1, 2, 3)),
            Yaml.decodeFromString(
                TestIntListData.serializer(), """
                            list:
                            - 1
                            - 2
                            - 3
                        """.trimIndent()
            )
        )

        assertEquals(
            TestIntListData(listOf(1, 2, 3)),
            Yaml.decodeFromString(
                TestIntListData.serializer(), """
                            list:
                              - 1
                              - 2
                              - 3
                        """.trimIndent()
            )
        )
    }

    @Serializable
    data class TestStringMapData(
        val map: Map<String, String>
    )

    @Test
    fun testJsonMap() {
        assertEquals(
            TestStringMapData(
                mapOf(
                    "foo" to "bar",
                    "test" to "ok"
                )
            ),
            Yaml.decodeFromString(
                TestStringMapData.serializer(), """
                    map: {foo: bar, test: ok}
                """.trimIndent()
            )
        )
    }

    @Test
    fun testYamlMap() {
        assertEquals(
            TestStringMapData(
                mapOf(
                    "foo" to "bar",
                    "test" to "ok"
                )
            ),
            Yaml.decodeFromString(
                TestStringMapData.serializer(), """
                    |map: 
                    |  foo: bar
                    |  test: ok
                """.trimMargin()
            )
        )
    }

    @Serializable
    data class TestStringListData(
        val list: List<String>
    )

    @Test
    fun testSquareList() {
        assertEquals(
            TestStringListData(listOf("foo", "bar")),
            Yaml.decodeFromString(
                TestStringListData.serializer(), """
                    list: [foo, bar]
                """.trimIndent()
            )
        )
    }

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

    // primitive types and casting
    @Test
    fun testSimpleStructure() {
        assertEquals(
            TestPrimitiveTypesData(
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
            Yaml.decodeFromString(
                TestPrimitiveTypesData.serializer(), """
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