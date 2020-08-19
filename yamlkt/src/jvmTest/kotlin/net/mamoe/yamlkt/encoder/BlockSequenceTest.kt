package net.mamoe.yamlkt.encoder

import org.junit.Test
import kotlin.test.assertEquals

internal class BlockSequenceTest {
    @Test
    fun `test empty list`() {
        assertEquals("[]", allBlock.encodeToString(listOf<String>()))
    }
}