package net.mamoe.yamlkt.encoder

import kotlinx.serialization.encodeToString
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlBuilder
import kotlin.test.Test
import kotlin.test.assertEquals

private val single = Yaml {
    stringSerialization = YamlBuilder.StringSerialization.SINGLE_QUOTATION
}
private val double = Yaml {
    stringSerialization = YamlBuilder.StringSerialization.DOUBLE_QUOTATION
}
private val none = Yaml {
    stringSerialization = YamlBuilder.StringSerialization.NONE
}
private val best = Yaml {
    stringSerialization = YamlBuilder.StringSerialization.BEST_PERFORMANCE
}


internal class TestEncoderEscape {
    @Test
    fun testNewLineEscape() {
        // if contains \n, always double quote.

        assertEquals("\"\\n\"", double.encodeToString<String>("\n"))
        assertEquals("\"\\n\"", single.encodeToString<String>("\n"))
        assertEquals("\"\\n\"", none.encodeToString<String>("\n"))
        assertEquals("\"\\n\"", best.encodeToString<String>("\n"))
    }

    @Test
    fun colonEscape() {
        assertEquals("\":\"", double.encodeToString<String>(":"))
        assertEquals("\':\'", single.encodeToString<String>(":"))
        assertEquals("\':\'", none.encodeToString<String>(":"))
        assertEquals("\':\'", best.encodeToString<String>(":"))
    }

    @Test
    fun colonEscapeWithChinese() {
        assertEquals("\":好\"", double.encodeToString<String>(":好"))
        assertEquals("\':好\'", single.encodeToString<String>(":好"))
        assertEquals("\':好\'", none.encodeToString<String>(":好"))
        assertEquals("\':好\'", best.encodeToString<String>(":好"))
    }

    @Test
    fun spaceEscape() {
        assertEquals("\" \"", double.encodeToString<String>(" "))
        assertEquals("\' \'", single.encodeToString<String>(" "))
        assertEquals("\' \'", none.encodeToString<String>(" "))
        assertEquals("\' \'", best.encodeToString<String>(" "))
    }

    @Test
    fun testUnicodeEscape() {
        assertEquals(
            """
            "\\"
        """.trimIndent(), double.encodeToString<String>("\\")
        )
        assertEquals(
            """
            "\""
        """.trimIndent(), double.encodeToString<String>("\"")
        )
        assertEquals(
            """
            "'"
        """.trimIndent(), double.encodeToString<String>("'")
        )
    }
}