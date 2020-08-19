package net.mamoe.yamlkt

import net.mamoe.yamlkt.Yaml.Companion.default
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith


internal class YamlElementDeserializingTest {
    @Test
    fun testYamlMapSerializer() {
        assertEquals(
            YamlMap(
                mapOf(
                    "test" to "sss"
                )
            ),
            default.decodeFromString(
                YamlMap.serializer(), """
                        test: sss
                    """.trimIndent()
            )
        )
    }


    @Test
    fun testYamlListSerializer() {
        assertEquals(
            yamlListOf("banana", "apple", "raspberry"),
            default.decodeFromString(
                YamlList.serializer(), """
                        [banana, apple, raspberry]
                    """.trimIndent()
            )
        )
    }

    @Test
    fun testYamlLiteralSerializer() {
        assertEquals(
            YamlLiteral(
                "banana"
            ),
            default.decodeFromString(
                YamlLiteral.serializer(), """
                        banana
                    """.trimIndent()
            )
        )
        assertEquals(
            YamlLiteral(
                "null"
            ),
            default.decodeFromString(
                YamlLiteral.serializer(), """
                        "null"
                    """.trimIndent()
            )
        )
        assertEquals(
            YamlLiteral(
                "~"
            ),
            default.decodeFromString(
                YamlLiteral.serializer(), """
                        "~"
                    """.trimIndent()
            )
        )
    }

    @Test
    fun testYamlLiteralSerializerWhenNull() {
        assertFailsWith<YamlDecodingException> {
            println(
                default.decodeFromString(
                    YamlLiteral.serializer(), "~"
                )
            )
        }

        assertFailsWith<YamlDecodingException> {
            default.decodeFromString(
                YamlLiteral.serializer(), "null"
            )
        }
    }

    @Test
    fun testYamlNullSerializer() {
        assertEquals(
            YamlNull,
            default.decodeFromString(
                YamlNull.serializer(), "~"
            )
        )
        assertEquals(
            YamlNull,
            default.decodeFromString(
                YamlNull.serializer(), "null"
            )
        )

        assertFailsWith<YamlDecodingException> {
            default.decodeFromString(
                YamlNull.serializer(), """
                                foo
                            """.trimIndent()
            )
        }

        assertFailsWith<YamlDecodingException> {
            default.decodeFromString(
                YamlNull.serializer(), """
                                "~"
                            """.trimIndent()
            )
        }
    }
}