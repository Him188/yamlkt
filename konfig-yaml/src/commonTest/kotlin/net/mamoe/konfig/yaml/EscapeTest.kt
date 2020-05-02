package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals


internal class EscapeTest {

    @Test
    fun testEscape() {
        @Serializable
        data class TestData(
            val v: String
        )

        assertEquals(
            TestData(
                "\n"
            ).toString(),
            Yaml.default.parse(
                TestData.serializer(), """
                    v: "\n"
                """.trimIndent()
            ).toString()
        )
    }


    @Test
    fun testNoEscape() {
        @Serializable
        data class TestData(
            val v: String
        )

        assertEquals(
            TestData(
                "\\n"
            ).toString(),
            Yaml.default.parse(
                TestData.serializer(), """
                    v: \n
                """.trimIndent()
            ).toString()
        )

        assertEquals(
            TestData(
                "p\\n"
            ).toString(),
            Yaml.default.parse(
                TestData.serializer(), """
                    v: p\n
                """.trimIndent()
            ).toString()
        )

        assertEquals(
            TestData(
                "p\\\\n"
            ).toString(),
            Yaml.default.parse(
                TestData.serializer(), """
                    v: 'p\\n'
                """.trimIndent()
            ).toString()
        )

        assertEquals(
            TestData(
                "\\n"
            ).toString(),
            Yaml.default.parse(
                TestData.serializer(), """
                    v: '\n'
                """.trimIndent()
            ).toString()
        )
    }
}
