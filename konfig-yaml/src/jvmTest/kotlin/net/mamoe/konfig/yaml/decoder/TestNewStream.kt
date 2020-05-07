package net.mamoe.konfig.yaml.decoder

import kotlinx.serialization.Serializable
import net.mamoe.konfig.yaml.Yaml
import org.junit.Test


internal class TestNewStream {
    @Test
    fun testNewStream() {
        @Serializable
        data class Data(
            val s: String
        )

        println(
            Yaml.default.parse(
                Data.serializer(), """
        s: test 
        """
            )
        )
    }
}