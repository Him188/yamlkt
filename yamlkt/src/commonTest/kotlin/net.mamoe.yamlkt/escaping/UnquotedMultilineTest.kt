package net.mamoe.yamlkt.escaping

import net.mamoe.yamlkt.Yaml.Default
import net.mamoe.yamlkt.internal.Language
import kotlin.test.Test
import kotlin.test.assertEquals

internal class UnquotedMultilineTest {
    @DslMarker
    annotation class TDsl

    @TDsl
    private infix fun String.from(@Language("yaml") actual: String) {
        assertEquals(
            this,
            Default.decodeAnyFromString(
                actual.trimIndent()
            ).toString()
        )
    }

    // https://yaml-multiline.info/
    @Test
    fun example() {
        """
            Several lines of text, with some "quotes" of various 'types'. Escapes (like \n) don't do anything.
            Newlines can be added by leaving a blank line. Additional leading whitespace is ignored.
        """.trimIndent() from """
Several lines of text,
  with some "quotes" of various 'types'.
  Escapes (like \n) don't do anything.
  
  Newlines can be added by leaving a blank line.
    Additional leading whitespace is ignored.
        """.trimIndent()
    }
}