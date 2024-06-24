package net.mamoe.yamlkt.encoder

import kotlinx.serialization.Serializable
import kotlin.test.Test
import kotlin.test.assertEquals

class FlowMapTest {
    @Serializable
    class Empty {
        override fun equals(other: Any?): Boolean {
            return other != null && other::class == this::class
        }

        override fun hashCode(): Int {
            return this::class.hashCode()
        }
    }

    @Test
    fun testEmptyClass() {
        assertEquals("{}", allFlow.encodeToString(Empty()).trim())
    }
}