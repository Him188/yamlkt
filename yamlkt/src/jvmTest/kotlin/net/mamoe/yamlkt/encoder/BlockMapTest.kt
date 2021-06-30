package net.mamoe.yamlkt.encoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test
import kotlin.test.assertEquals


internal class BlockMapTest {

    @Serializable
    data class MyData(
        var value2: Int = 123,
        var myOtherData: Nested,
        val myList: List<Nested> = listOf(Nested(123))
    ) {
        @Serializable
        data class Nested(
            var v: Int
        )
    }


    @Test
    fun `test nested class`() {
        Thread.sleep(1000)
        val yaml = """
           { value2: 1234, myOtherData: { v: 123 }, myList: [ { v: 123 } ] }
 """


        val old = Yaml.decodeFromString(MyData.serializer(), yaml)
        println(allFlow.encodeToString(old))
        val out = Yaml.encodeToString(old)
        val new = Yaml.decodeFromString(MyData.serializer(), out)

        assertEquals(old, new)
    }

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
        assertEquals("{}", allBlock.encodeToString(Empty()).trim())
    }
}