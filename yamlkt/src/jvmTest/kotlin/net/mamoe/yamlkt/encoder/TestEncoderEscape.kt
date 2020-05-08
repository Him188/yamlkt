package net.mamoe.yamlkt.encoder

import kotlinx.serialization.ImplicitReflectionSerializer
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlConfiguration
import org.junit.Test
import kotlin.test.assertEquals

private val single = Yaml(
    configuration = YamlConfiguration(
        stringSerialization = YamlConfiguration.StringSerialization.SINGLE_QUOTATION
    )
)
private val double = Yaml(
    configuration = YamlConfiguration(
        stringSerialization = YamlConfiguration.StringSerialization.DOUBLE_QUOTATION
    )
)
private val none = Yaml(
    configuration = YamlConfiguration(
        stringSerialization = YamlConfiguration.StringSerialization.NONE
    )
)
private val best = Yaml(
    configuration = YamlConfiguration(
        stringSerialization = YamlConfiguration.StringSerialization.BEST_PERFORMANCE
    )
)


@OptIn(ImplicitReflectionSerializer::class)
internal class TestEncoderEscape {
    @Test
    fun testNewLineEscape() {
        assertEquals("\"\\n\"", double.stringify("\n"))
        assertEquals("\'\n\'", single.stringify("\n"))
        assertEquals("\'\n\'", none.stringify("\n")) // will adjust to single
        assertEquals("\'\n\'", best.stringify("\n")) // will adjust to single
    }

    @Test
    fun testUnicodeEscape() {
        assertEquals(
            """
            "\\"
        """.trimIndent(), double.stringify("\\")
        )
        assertEquals(
            """
            "\""
        """.trimIndent(), double.stringify("\"")
        )
        assertEquals(
            """
            "'"
        """.trimIndent(), double.stringify("'")
        )
    }
}