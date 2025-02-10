package net.mamoe.yamlkt.escaping

import kotlinx.serialization.Serializable
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.encodeToString
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlBuilder
import net.mamoe.yamlkt.encoder.allFlow
import kotlin.test.Test
import kotlin.test.assertEquals

private val plain = Yaml {
    charSerialization = YamlBuilder.CharSerialization.PLAIN
}
private val singleChar = Yaml {
    charSerialization = YamlBuilder.CharSerialization.SINGLE_QUOTATION
}
private val doubleChar = Yaml {
    charSerialization = YamlBuilder.CharSerialization.DOUBLE_QUOTATION
}
private val unicode = Yaml {
    charSerialization = YamlBuilder.CharSerialization.UNICODE_CODE
}

internal class CharEscapingTest {

    @Serializable
    data class Container(
        val c: Char,
    )

    @Test
    fun testTopElement() {
        assertEquals("\" \"", doubleChar.encodeToString<Char>(' '))
        assertEquals("\' \'", singleChar.encodeToString<Char>(' '))
        assertEquals("\' \'", plain.encodeToString<Char>(' '))
        assertEquals("32", unicode.encodeToString<Char>(' '))

        assertEquals(' ', unicode.decodeFromString<Char>("32"))
    }

    @Test
    fun testClass() {
        assertEquals("c: \" \"",doubleChar.encodeToString<Container>(Container(' ')))
        assertEquals("c: ' '",singleChar.encodeToString<Container>(Container(' ')))
        assertEquals("c: ' '",plain.encodeToString<Container>(Container(' ')))
        assertEquals("c: 32",unicode.encodeToString<Container>(Container(' ')))

        assertEquals(Container(' '),doubleChar.decodeFromString<Container>("c: \" \""))
        assertEquals(Container(' '),singleChar.decodeFromString<Container>("c: ' '"))
        assertEquals(Container(' '),plain.decodeFromString<Container>("c: ' '"))
        assertEquals(Container(' '),unicode.decodeFromString<Container>("c: 32"))
    }

    @Test
    fun testList() {
        val list = charArrayOf(' ','\n',',','-','a','文',':')
        assertEquals("[ ' ', \"\\n\", ',', '-', a, 文, ':' ]",allFlow.encodeToString(list))
        assertEquals(list.concatToString(), allFlow.decodeFromString<CharArray>("[ ' ', \"\\n\", ',', '-', a, 文, ':' ]").concatToString())
    }

    @Test
    fun testMap() {
        val map = mapOf(
            'a' to 'b'
        )
        assertEquals(map, allFlow.decodeFromString(allFlow.encodeToString(map)))
        assertEquals(map, unicode.decodeFromString(unicode.encodeToString(map)))
        assertEquals(map, allFlow.decodeFromString("{ a: 98 }"))
    }


}