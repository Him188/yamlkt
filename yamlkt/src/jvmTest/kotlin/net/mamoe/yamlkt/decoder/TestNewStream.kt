package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test


internal class TestNewStream {
    @Serializable
    data class Data(
        val s: String
    )

    @Test
    fun testNewStream() {
        println(
            Yaml.decodeFromString(
                Data.serializer(), """
                s: test 
                """
            )
        )
    }
}