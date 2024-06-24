package net.mamoe.yamlkt.decoder

import net.mamoe.yamlkt.Yaml.Default
import net.mamoe.yamlkt.YamlDecodingException
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith


internal class DecoderEscapeTest {

    @Test
    fun escapeColon() {
        assertEquals(
            ":",
            Default.decodeAnyFromString(
                """":""""
            )
        )
    }

    @Test
    fun escapeNewlineDoubleQuoted() {
        assertEquals(
            "\n",
            Default.decodeAnyFromString(
                """
            "\n"
            """
            )
        )
    }

    @Test
    fun escapeMapping() {
        val mappings: Map<String, String> = mapOf(
            "\"" to """   "\""   """.trim(),
            "\\" to """   "\\"   """.trim(),
            "\t" to """   "\t"   """.trim(),
            "\b" to """   "\b"   """.trim()
        )

        mappings.forEach { (t, u) ->
            assertEquals(
                t,
                Default.decodeAnyFromString(u)
            )
        }
    }

    @Test
    fun escape16bit() {
        assertEquals(
            "\u0002",
            Default.decodeAnyFromString(
                """"\x02""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\x0"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\x"""" // missing two digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\xg"""" // illegal digit
            )
        }
    }

    @Test
    fun escape32bit() {
        assertEquals(
            "\u2002",
            Default.decodeAnyFromString(
                """"\u2002""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\u200"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\u"""" // missing four digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\ug"""" // illegal digit
            )
        }
    }

    @Test
    fun escape64bit() {
        assertEquals(
            "\u2002\u2002",
            Default.decodeAnyFromString(
                """"\U20022002""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\U2002200"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\U"""" // missing eight digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            Default.decodeAnyFromString(
                """s: "\Un"""" // illegal digit
            )
        }
    }
}