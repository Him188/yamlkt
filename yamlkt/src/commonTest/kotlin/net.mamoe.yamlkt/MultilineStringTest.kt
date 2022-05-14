package net.mamoe.yamlkt

import kotlinx.serialization.KSerializer
import kotlin.test.*

class MultilineStringTest {
    private val line1 = "This is a multiline string"
    private val line2 = "This is the second line"

    private lateinit var serializer: KSerializer<DecoderTest.TestStringData>

    @BeforeTest
    fun createSerializer() {
        serializer = DecoderTest.TestStringData.serializer()
    }

    @Test
    fun testMultilineUnquotedString() {
        val yaml = """
            key: $line1
                 $line2
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1 $line2")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineSingleQuotedString() {
        val yaml = """
            key: '$line1
                    $line2'
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1 $line2")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineDoubleQuotedString() {
        val yaml = """
            key: "$line1\n
                    $line2"
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1\n $line2")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithNoLineBreak() {
        val yaml = """
            key: > $line1
        """.trimIndent()

        assertFailsWith<YamlDecodingException> {
            Yaml.decodeFromString(serializer, yaml)
        }
    }

    @Test
    fun testMultilineFoldedStringEmpty() {
        val yaml = """
            key: >
        """.trimIndent()

        val expected = DecoderTest.TestStringData("")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedString() {
        val yaml = """
            key: >
              $line1
              $line2
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1 $line2\n")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithSpacesAfterBracket() {
        val yaml = """
            key: >  
              $line1
              $line2
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1 $line2\n")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithLeadingSpace() {
        val yaml = """
            key: >
              $line1
               $line2
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1\n $line2\n")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithTrailingNewlines() {
        val yaml = """
            key: >
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1 $line2\n")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithStrippedNewlines() {
        val yaml = """
            key: >-
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1 $line2")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithKeptNewlines() {
        val yaml = """
            key: >+
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1 $line2\n\n")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithBlankLines() {
        val yaml = """
            key: >
              $line1
              
              $line2
        """.trimIndent()

        val expected = DecoderTest.TestStringData("$line1\n$line2\n")
        val actual = Yaml.decodeFromString(serializer, yaml)
        assertEquals(expected, actual)
    }
}