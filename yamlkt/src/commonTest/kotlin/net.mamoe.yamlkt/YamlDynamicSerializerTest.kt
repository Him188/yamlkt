package net.mamoe.yamlkt

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml.Companion.default
import kotlin.test.Test
import kotlin.test.assertEquals


/**
 * @see YamlDynamicSerializer
 */
internal class YamlDynamicSerializerTest {
    @Test
    fun testDynamicAsMultilineList() {
        @Serializable
        data class TestData(
            val v: @Contextual Any
        )

        assertEquals(
            TestData(
                listOf("test, set, tet, tes")
            ).toString(),
            default.decodeFromString(
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
        @Serializable
        data class TestData(
            val v: @Contextual Any
        )

        assertEquals(
            TestData(
                listOf("test, set, tet, tes")
            ).toString(),
            default.decodeFromString(
                TestData.serializer(), """
                            v: [test, set, tet, tes]
                        """.trimIndent()
            ).toString()
        )
    }

    @Test
    fun testDynamicAsMap() {
        @Serializable
        data class TestData(
            val v: @Contextual Any
        )

        assertEquals(
            TestData(
                mapOf(
                    "foo" to "v1",
                    "fooBar" to "v2"
                )
            ),
            default.decodeFromString(
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
            default.decodeFromString(
                YamlDynamicSerializer, """
                    v:
                      foo: v1
                      fooBar: v2
                """.trimIndent()
            )
        )
    }
}