package net.mamoe.yamlkt

import kotlin.test.Test
import kotlin.test.assertFailsWith


/**
 * Tests whether the decoder can report improper formats
 */
internal class DecoderFailTest {


    @Test
    fun testBadNumber() {

    }

    @Test
    fun ensureMapWithNoSpaceAfterColonFails() {
        // Should execute ok
        Yaml.decodeFromString(
            DecoderTest.TestStringMapData.serializer(), """
                    map: 
                        foo: bar
                        nonNull:
                            value
                        no: space
                """.trimIndent()
        )

        // Should fail with YamlDecodingException
        assertFailsWith(YamlDecodingException::class) {
            Yaml.decodeFromString(
                DecoderTest.TestStringMapData.serializer(), """
                    map: 
                        foo: bar
                        nonNull:
                            value
                        no:space
                """.trimIndent()
            )
        }
    }
}