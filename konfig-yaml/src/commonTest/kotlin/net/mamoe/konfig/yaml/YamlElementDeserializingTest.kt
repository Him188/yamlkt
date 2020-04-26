package net.mamoe.konfig.yaml

import net.mamoe.konfig.yaml.Yaml.Companion.default
import kotlin.test.Test
import kotlin.test.assertEquals


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
}