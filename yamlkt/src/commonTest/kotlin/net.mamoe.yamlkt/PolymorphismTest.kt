package net.mamoe.yamlkt

import kotlinx.serialization.Serializable
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import net.mamoe.yamlkt.Yaml
import kotlin.test.Test
import kotlin.test.assertEquals


internal class PolymorphismTest {
    interface Fruit

    @Serializable
    data class Banana(
        val prop: String
    ) : Fruit

    @Serializable
    data class Poly(
        val fruit: Fruit
    )

    val yaml = Yaml {
        serializersModule = SerializersModule {
            polymorphic(Fruit::class) {
                subclass(Banana::class, Banana.serializer())
            }
        }
    }

    @Test
    fun simpleDataDump() {
        val poly = Poly(Banana("prop"))
        val result = yaml.encodeToString(poly)
        println(result)
        val decode = yaml.decodeFromString(Poly.serializer(), result)
        assertEquals(poly, decode)
    }
}