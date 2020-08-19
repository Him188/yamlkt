package net.mamoe.yamlkt.encoder

import org.junit.Test
import kotlin.test.assertEquals

internal class FlowSequenceTest {
    @Test
    fun `test empty list`() {
        assertEquals("[]", allFlow.encodeToString(listOf<String>()))
    }
}