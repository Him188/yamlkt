package net.mamoe.yamlkt

import kotlin.test.assertEquals
import kotlin.test.Test

class YamlElementTests {
    @Test
    fun testYamlMapFactories() {
        YamlMap(mapOf(
            "value" to YamlLiteral("111")
        )).let { yamlMap ->
            assertEquals(
                YamlLiteral("111"),
                yamlMap.content[YamlLiteral("value")]
            )
        }

        YamlMap(mapOf(
            "value" to 111
        )).let { yamlMap ->
            assertEquals(
                YamlLiteral("111"),
                yamlMap.content[YamlLiteral("value")]
            )
        }

        YamlMap(mapOf(
            YamlLiteral("value") to 111
        )).let { yamlMap ->
            assertEquals(
                YamlLiteral("111"),
                yamlMap.content[YamlLiteral("value")]
            )
        }
    }
}
