package net.mamoe.yamlkt

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
            Yaml.decodeFromString(
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
            Yaml.decodeFromString(
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
            Yaml.decodeFromString(
                YamlLiteral.serializer(), """
                        banana
                    """.trimIndent()
            )
        )
        assertEquals(
            YamlLiteral(
                "null"
            ),
            Yaml.decodeFromString(
                YamlLiteral.serializer(), """
                        "null"
                    """.trimIndent()
            )
        )
        assertEquals(
            YamlLiteral(
                "~"
            ),
            Yaml.decodeFromString(
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
                Yaml.decodeFromString(
                    YamlLiteral.serializer(), "~"
                )
            )
        }

        assertFailsWith<YamlDecodingException> {
            Yaml.decodeFromString(
                YamlLiteral.serializer(), "null"
            )
        }
    }

    @Test
    fun testYamlNullSerializer() {
        assertEquals(
            YamlNull,
            Yaml.decodeFromString(
                YamlNull.serializer(), "~"
            )
        )
        assertEquals(
            YamlNull,
            Yaml.decodeFromString(
                YamlNull.serializer(), "null"
            )
        )

        assertFailsWith<YamlDecodingException> {
            Yaml.decodeFromString(
                YamlNull.serializer(), """
                                foo
                            """.trimIndent()
            )
        }

        assertFailsWith<YamlDecodingException> {
            Yaml.decodeFromString(
                YamlNull.serializer(), """
                                "~"
                            """.trimIndent()
            )
        }
    }
}