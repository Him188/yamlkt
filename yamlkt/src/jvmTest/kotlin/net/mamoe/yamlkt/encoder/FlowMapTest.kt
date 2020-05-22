package net.mamoe.yamlkt.encoder

import kotlinx.serialization.Serializable
import org.junit.Test
import kotlin.test.assertEquals

class FlowMapTest {

    @Test
    fun `test empty class`() {
        @Serializable
        class Empty {
            override fun equals(other: Any?): Boolean {
                return other != null && other::class == this::class
            }

            override fun hashCode(): Int {
                return javaClass.hashCode()
            }
        }

        assertEquals("{}", allFlow.stringify(Empty()).trim())
    }
}