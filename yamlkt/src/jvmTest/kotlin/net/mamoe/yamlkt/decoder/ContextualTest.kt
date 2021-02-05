package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Contextual
import kotlinx.serialization.Serializable
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import net.mamoe.yamlkt.Yaml
import org.junit.Test
import kotlin.test.assertEquals


internal class ContextualTest {
    interface Fruit

    @Serializable
    data class Banana(
        val prop: String
    ) : Fruit

    @Serializable
    data class Poly(
        val fruit: @Contextual Fruit
    )

    val yaml = Yaml {
        serializersModule = SerializersModule {
            polymorphic(Fruit::class) {
                subclass(Banana::class, Banana.serializer())
            }
            contextual(Banana::class, Banana.serializer())
        }
    }

    @Test
    fun `test simple dump`() {
        val poly = Poly(Banana("prop"))
        val result = yaml.encodeToString(poly)
        assertEquals(
            """
            fruit: 
              type: net.mamoe.yamlkt.decoder.ContextualTest.Banana
              value: 
                prop: prop
        """.trimIndent(), result
        )
    }
}