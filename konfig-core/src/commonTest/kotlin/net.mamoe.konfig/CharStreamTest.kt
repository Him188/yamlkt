package net.mamoe.konfig

import kotlinx.io.core.buildPacket
import kotlin.test.Test
import kotlin.test.assertEquals


internal class CharStreamTest {

    @Test
    fun testStringAsCharStream() {
        with("foo\nbar\ntest".asCharStream()) {
            assertEquals('f', read())
            assertEquals("f", currentLine)

            assertEquals("oo", readLine())
            assertEquals("foo", currentLine)

            assertEquals("bar", readLine())
            assertEquals("bar", currentLine)

            assertEquals("test", readLine())
            assertEquals("test", currentLine)
        }
    }

    @OptIn(ExperimentalKonfigApi::class)
    @Test
    fun testInputAsCharStream() {
        with(buildPacket { writeStringUtf8("foo\nbar\ntest") }.asCharStream()) {
            assertEquals('f', read())
            assertEquals("f", currentLine)

            assertEquals("oo", readLine())
            assertEquals("foo", currentLine)

            assertEquals("bar", readLine())
            assertEquals("bar", currentLine)

            assertEquals("test", readLine())
            assertEquals("test", currentLine)
        }
    }
}
