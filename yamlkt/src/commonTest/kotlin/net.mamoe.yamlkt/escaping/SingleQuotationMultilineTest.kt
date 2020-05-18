package net.mamoe.yamlkt.escaping

import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.internal.Language
import kotlin.test.Test
import kotlin.test.assertEquals

// https://yaml-multiline.info/
internal class SingleQuotationMultilineTest {
    @DslMarker
    annotation class TDsl

    @TDsl
    private infix fun String.from(@Language("yaml") actual: String) {
        assertEquals(
            this,
            Yaml.default.parseAny(
                actual.trimIndent()
            ).toString()
        )
    }

    @Test
    fun newline() {
        """
            \n
        """.trimIndent() from """
            '\n'
        """.trimIndent()
    }

    @Test
    fun testEscape() {
        """
            \n
        """.trimIndent() from """
            '\n'
        """.trimIndent()
    }

    @Test
    fun example() {
        """
            Several lines of text, containing 'single quotes'. Escapes (like \n) don't do anything.
            Newlines can be added by leaving a blank line. Leading whitespace on lines is ignored.
        """.trimIndent() from """
            'Several lines of text,
            containing ''single quotes''. Escapes (like \n) don''t do anything.
            
            Newlines can be added by leaving a blank line.
              Leading whitespace on lines is ignored.'
        """.trimIndent()
    }
}