package net.mamoe.konfig.yaml.encoder

import kotlinx.serialization.Serializable
import net.mamoe.konfig.yaml.Yaml
import net.mamoe.konfig.yaml.YamlConfiguration
import org.junit.Test


internal class PrimitiveEncoderTest {

    @Test
    fun testPrimitive() {
        @Serializable
        data class Data(
            val v1: String = "",
            val number: Int = 0,
            val map: Map<String, String> = mapOf("bob" to "2"),
            val list: List<String> = listOf("value1", "value2"),
            val anotherData: Data? = null
        )
        println(
            Yaml(
                configuration = YamlConfiguration(
                    mapSerialization = YamlConfiguration.MapSerialization.FLOW_MAP,
                    listSerialization = YamlConfiguration.ListSerialization.FLOW_SEQUENCE,
                    classSerialization = YamlConfiguration.MapSerialization.BLOCK_MAP
                )
            ).stringify(Data.serializer(), Data("value1", 123456, anotherData = Data(number = 111)))
        )
    }
}