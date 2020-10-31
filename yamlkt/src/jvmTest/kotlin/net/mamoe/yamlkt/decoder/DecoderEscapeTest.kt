package net.mamoe.yamlkt.decoder

import net.mamoe.yamlkt.Yaml.Companion.default
import net.mamoe.yamlkt.YamlDecodingException
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith


internal class DecoderEscapeTest {

    @Test
    fun escapeColon() {
        assertEquals(
            ":",
            default.decodeAnyFromString(
                """":""""
            )
        )
    }

    @Test
    fun escapeNewlineDoubleQuoted() {
        assertEquals(
            "\n",
            default.decodeAnyFromString(
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
                default.decodeAnyFromString(u)
            )
        }
    }

    @Test
    fun escape16bit() {
        assertEquals(
            "\u0002",
            default.decodeAnyFromString(
                """"\x02""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\x0"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\x"""" // missing two digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\xg"""" // illegal digit
            )
        }
    }

    @Test
    fun escape32bit() {
        assertEquals(
            "\u2002",
            default.decodeAnyFromString(
                """"\u2002""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\u200"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\u"""" // missing four digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\ug"""" // illegal digit
            )
        }
    }

    @Test
    fun escape64bit() {
        assertEquals(
            "\u2002\u2002",
            default.decodeAnyFromString(
                """"\U20022002""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\U2002200"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\U"""" // missing eight digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.decodeAnyFromString(
                """s: "\Un"""" // illegal digit
            )
        }
    }
}