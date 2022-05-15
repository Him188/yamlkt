package net.mamoe.yamlkt

import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlin.test.*

class MultilineStringTest {

    @Serializable
    data class TestStringData(val key: String)

    @Serializable
    data class TestTwoStringData(val string1: String, val string2: String)

    private val line1 = "This is a multiline string"
    private val line2 = "This is the second line"

    private lateinit var testStringDataSerializer: KSerializer<TestStringData>
    private lateinit var testTwoStringDataSerializer: KSerializer<TestTwoStringData>

    @BeforeTest
    fun createSerializers() {
        testStringDataSerializer = TestStringData.serializer()
        testTwoStringDataSerializer = TestTwoStringData.serializer()
    }

    @Test
    fun testMultilineUnquotedString() {
        val yaml = """
            key: $line1
                 $line2
        """.trimIndent()

        val expected = TestStringData("$line1 $line2")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineSingleQuotedString() {
        val yaml = """
            key: '$line1
                    $line2'
        """.trimIndent()

        val expected = TestStringData("$line1 $line2")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineDoubleQuotedString() {
        val yaml = """
            key: "$line1\n
                    $line2"
        """.trimIndent()

        val expected = TestStringData("$line1\n $line2")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    //region Folded strings

    @Test
    fun testMultilineFoldedStringWithNoLineBreak() {
        val yaml = """
            key: > $line1
        """.trimIndent()

        assertFailsWith<YamlDecodingException> {
            Yaml.decodeFromString(testStringDataSerializer, yaml)
        }
    }

    @Test
    fun testMultilineFoldedStringEmpty() {
        val yaml = """
            key: >
        """.trimIndent()

        val expected = TestStringData("")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedString() {
        val yaml = """
            key: >
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("$line1 $line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithSpacesAfterBracket() {
        val yaml = """
            key: >  
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("$line1 $line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithLeadingSpace() {
        val yaml = """
            key: >
              $line1
               $line2
        """.trimIndent()

        val expected = TestStringData("$line1\n $line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithTrailingNewlines() {
        val yaml = """
            key: >
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = TestStringData("$line1 $line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithStrippedNewlines() {
        val yaml = """
            key: >-
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = TestStringData("$line1 $line2")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithKeptNewlines() {
        val yaml = """
            key: >+
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = TestStringData("$line1 $line2\n\n\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithBlankLines() {
        val yaml = """
            key: >
              $line1
              
              $line2
        """.trimIndent()

        val expected = TestStringData("$line1\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithAdditionalContent() {
        val yaml = """
            string1: >
              foo
            string2: bar
        """.trimIndent()
        val expected = TestTwoStringData("foo\n", "bar")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithMultipleFoldedStrings() {
        val yaml = """
            string1: >+
              foo
              
            string2: >-
              bar
        """.trimIndent()
        val expected = TestTwoStringData("foo\n\n", "bar")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithLeadingNewline() {
        val yaml = """
            key: >
            
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("\n$line1 $line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithLeadingNewlines() {
        val yaml = """
            key: >
            
            
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("\n\n$line1 $line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithOnlyLeadingNewlines() {
        val yaml = """
            string1: >
            
            string2: >
             foo
        """.trimIndent()

        val expected = TestTwoStringData("", "foo\n")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineFoldedStringWithOneEmpty() {
        val yaml = """
            string1: >
            string2: >
             foo
        """.trimIndent()

        val expected = TestTwoStringData("", "foo\n")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    //endregion


    //region Literal strings

    @Test
    fun testMultilineLiteralStringWithNoLineBreak() {
        val yaml = """
            key: | $line1
        """.trimIndent()

        assertFailsWith<YamlDecodingException> {
            Yaml.decodeFromString(testStringDataSerializer, yaml)
        }
    }

    @Test
    fun testMultilineLiteralStringEmpty() {
        val yaml = """
            key: |
        """.trimIndent()

        val expected = TestStringData("")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralString() {
        val yaml = """
            key: |
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("$line1\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithSpacesAfterBracket() {
        val yaml = """
            key: |  
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("$line1\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithLeadingSpace() {
        val yaml = """
            key: |
              $line1
               $line2
        """.trimIndent()

        val expected = TestStringData("$line1\n $line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithTrailingNewlines() {
        val yaml = """
            key: |
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = TestStringData("$line1\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithStrippedNewlines() {
        val yaml = """
            key: |-
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = TestStringData("$line1\n$line2")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithKeptNewlines() {
        val yaml = """
            key: |+
              $line1
              $line2
              
              
        """.trimIndent()

        val expected = TestStringData("$line1\n$line2\n\n\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithTwoBlankLines() {
        val yaml = """
            key: |
              $line1
              
              $line2
        """.trimIndent()

        val expected = TestStringData("$line1\n\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithThreeBlankLines() {
        val yaml = """
            key: |
              $line1
              
              
              $line2
        """.trimIndent()

        val expected = TestStringData("$line1\n\n\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithAdditionalContent() {
        val yaml = """
            string1: |
              foo
            string2: bar
        """.trimIndent()
        val expected = TestTwoStringData("foo\n", "bar")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithMultipleLiteralStrings() {
        val yaml = """
            string1: |+
              foo
              
            string2: |-
              bar
        """.trimIndent()
        val expected = TestTwoStringData("foo\n\n", "bar")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithLeadingNewline() {
        val yaml = """
            key: |
            
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("\n$line1\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithLeadingNewlines() {
        val yaml = """
            key: |
            
            
              $line1
              $line2
        """.trimIndent()

        val expected = TestStringData("\n\n$line1\n$line2\n")
        val actual = Yaml.decodeFromString(testStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithOnlyLeadingNewlines() {
        val yaml = """
            string1: |
            
            string2: |
             foo
        """.trimIndent()

        val expected = TestTwoStringData("", "foo\n")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    @Test
    fun testMultilineLiteralStringWithOneEmpty() {
        val yaml = """
            string1: |
            string2: |
             foo
        """.trimIndent()

        val expected = TestTwoStringData("", "foo\n")
        val actual = Yaml.decodeFromString(testTwoStringDataSerializer, yaml)
        assertEquals(expected, actual)
    }

    //endregion
}