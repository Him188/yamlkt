package net.mamoe.yamlkt.encoder

import kotlin.test.Test
import kotlin.test.assertEquals

internal class FlowSequenceTest {
    @Test
    fun testEmptyList() {
        assertEquals("[]", allFlow.encodeToString(listOf<String>()))
    }
}