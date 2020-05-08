package net.mamoe.konfig.yaml.decoder

import net.mamoe.konfig.yaml.Yaml.Companion.default
import net.mamoe.konfig.yaml.internal.YamlDecodingException
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith


internal class DecoderEscapeTest {

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
                default.parseAny(u)
            )
        }
    }

    @Test
    fun escape16bit() {
        assertEquals(
            "\u0002",
            default.parseAny(
                """"\x02""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\x0"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\x"""" // missing two digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\xg"""" // illegal digit
            )
        }
    }

    @Test
    fun escape32bit() {
        assertEquals(
            "\u2002",
            default.parseAny(
                """"\u2002""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\u200"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\u"""" // missing four digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\ug"""" // illegal digit
            )
        }
    }

    @Test
    fun escape64bit() {
        assertEquals(
            "\u2002\u2002",
            default.parseAny(
                """"\U20022002""""
            )
        )
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\U2002200"""" // missing one digit
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\U"""" // missing eight digits
            )
        }
        assertFailsWith<YamlDecodingException> {
            default.parseAny(
                """s: "\Un"""" // illegal digit
            )
        }
    }
}