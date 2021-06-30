package net.mamoe.yamlkt.encoder

import kotlinx.serialization.Serializable
import org.junit.Test
import kotlin.test.assertEquals

class FlowMapTest {
    @Serializable
    class Empty {
        override fun equals(other: Any?): Boolean {
            return other != null && other::class == this::class
        }

        override fun hashCode(): Int {
            return javaClass.hashCode()
        }
    }

    @Test
    fun `test empty class`() {
        assertEquals("{}", allFlow.encodeToString(Empty()).trim())
    }
}