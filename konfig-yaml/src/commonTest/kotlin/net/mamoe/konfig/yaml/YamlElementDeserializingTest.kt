package net.mamoe.konfig.yaml

import net.mamoe.konfig.yaml.Yaml.Companion.default
import net.mamoe.konfig.yaml.internal.YamlDecodingException
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue


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
            YamlList(
                "banana", "apple", "raspberry"
            ),
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
        assertTrue {
            assertFailsWith<YamlDecodingException> {
                default.parse(
                    YamlLiteral.serializer(), "~"
                )
            }.message!!.trim().startsWith("Expected a YamlLiteral, but found YamlNull")
        }

        assertTrue {
            assertFailsWith<YamlDecodingException> {
                default.parse(
                    YamlLiteral.serializer(), "null"
                )
            }.message!!.trim().startsWith("Expected a YamlLiteral, but found YamlNull")
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

        assertTrue {
            assertFailsWith<YamlDecodingException> {
                default.parse(
                    YamlNull.serializer(), """
                        foo
                    """.trimIndent()
                )
            }.message!!.trim()
                .also { println(it) }.startsWith("Expected a YamlNull, but found YamlLiteral(\"foo\")")
        }

        assertTrue {
            assertFailsWith<YamlDecodingException> {
                default.parse(
                    YamlNull.serializer(), """
                        "~"
                    """.trimIndent()
                )
            }.message!!.trim()
                .also { println(it) }.startsWith("Expected a YamlNull, but found YamlLiteral(\"~\")")
        }
    }
}