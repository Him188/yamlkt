package net.mamoe.yamlkt

import net.mamoe.yamlkt.Yaml.Companion.default
import net.mamoe.yamlkt.internal.YamlDecodingException
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
            default.parse(
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
            default.parse(
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
            default.parse(
                YamlLiteral.serializer(), """
                banana
            """.trimIndent()
            )
        )
        assertEquals(
            YamlLiteral(
                "null"
            ),
            default.parse(
                YamlLiteral.serializer(), """
                "null"
            """.trimIndent()
            )
        )
        assertEquals(
            YamlLiteral(
                "~"
            ),
            default.parse(
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
                default.parse(
                    YamlLiteral.serializer(), "~"
                )
            )
        }

        assertFailsWith<YamlDecodingException> {
            default.parse(
                YamlLiteral.serializer(), "null"
            )
        }
    }

    @Test
    fun testYamlNullSerializer() {
        assertEquals(
            YamlNull,
            default.parse(
                YamlNull.serializer(), "~"
            )
        )
        assertEquals(
            YamlNull,
            default.parse(
                YamlNull.serializer(), "null"
            )
        )

        assertFailsWith<YamlDecodingException> {
            default.parse(
                YamlNull.serializer(), """
                        foo
                    """.trimIndent()
            )
        }

        assertFailsWith<YamlDecodingException> {
            default.parse(
                YamlNull.serializer(), """
                        "~"
                    """.trimIndent()
            )
        }
    }
}