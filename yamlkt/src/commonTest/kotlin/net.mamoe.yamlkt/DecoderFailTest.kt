package net.mamoe.yamlkt

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails


/**
 * Tests whether the decoder can report improper formats
 */
internal class DecoderFailTest {


    @Test
    fun testBadNumber() {

    }

    @Test
    fun ensureMapWithNoSpaceAfterColonFails() {
        assertFails {
            Yaml.decodeFromString(
                DecoderTest.TestStringMapData.serializer(), """
                    map: 
                        foo: bar
                        no:space
                """.trimIndent()
            )
        }
    }
}