package net.mamoe.konfig.yaml

import kotlinx.serialization.ContextualSerialization
import kotlinx.serialization.Serializable
import net.mamoe.konfig.yaml.Yaml.Companion.default
import kotlin.test.Test
import kotlin.test.assertEquals


internal class YamlDynamicSerializerTest {
    @Test
    fun testDynamicAsList() {
        @Serializable
        data class TestData(
            val v: @ContextualSerialization Any
        )

        assertEquals(
            TestData(
                listOf("test, set, tet, tes")
            ).toString(),
            default.parse(
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
            val v: @ContextualSerialization Any
        )

        assertEquals(
            TestData(
                mapOf(
                    "foo" to "v1",
                    "fooBar" to "v2"
                )
            ),
            default.parse(
                TestData.serializer(), """
            v:
              foo: v1
              fooBar: v2
        """.trimIndent()
            )
        )
    }
}