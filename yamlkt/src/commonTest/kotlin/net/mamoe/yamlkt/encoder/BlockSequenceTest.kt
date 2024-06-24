package net.mamoe.yamlkt.encoder

import kotlin.test.Test
import kotlin.test.assertEquals

internal class BlockSequenceTest {
    @Test
    fun testEmptyList() {
        assertEquals("[]", allBlock.encodeToString(listOf<String>()))
    }
}