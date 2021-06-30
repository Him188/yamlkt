package net.mamoe.yamlkt

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals


/**
 * @see YamlDynamicSerializer
 */
internal class YamlDynamicSerializerTest {
    @Serializable
    data class TestData(
        val v: @Contextual Any
    )

    @Test
    fun testDynamicAsMultilineList() {
        assertEquals(
            TestData(
                listOf("test, set, tet, tes")
            ).toString(),
            Yaml.decodeFromString(
                TestData.serializer(), """
                            v: 
                            - test
                            - set
                            - tet
                            - tes
                        """.trimIndent()
            ).toString()
        )
    }

    @Test
    fun testDynamicAsList() {
        assertEquals(
            TestData(
                listOf("test, set, tet, tes")
            ).toString(),
            Yaml.decodeFromString(
                TestData.serializer(), """
                            v: [test, set, tet, tes]
                        """.trimIndent()
            ).toString()
        )
    }

    @Test
    fun testDynamicAsMap() {
        assertEquals(
            TestData(
                mapOf(
                    "foo" to "v1",
                    "fooBar" to "v2"
                )
            ),
            Yaml.decodeFromString(
                TestData.serializer(), """
                    v:
                      foo: v1
                      fooBar: v2
                """.trimIndent()
            )
        )
    }

    @Test
    fun testDynamicAsTopLevel() {
        assertEquals(
            mapOf(
                "v" to mapOf(
                    "foo" to "v1",
                    "fooBar" to "v2"
                )
            ),
            Yaml.decodeFromString(
                YamlDynamicSerializer, """
                    v:
                      foo: v1
                      fooBar: v2
                """.trimIndent()
            )
        )
    }
}