package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test


internal class TestNewStream {
    @Test
    fun testNewStream() {
        @Serializable
        data class Data(
            val s: String
        )

        println(
            Yaml.default.decodeFromString(
                Data.serializer(), """
                s: test 
                """
            )
        )
    }
}