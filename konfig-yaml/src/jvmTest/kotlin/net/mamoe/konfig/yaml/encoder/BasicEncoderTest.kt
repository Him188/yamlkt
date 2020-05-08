package net.mamoe.konfig.yaml.encoder

import kotlinx.serialization.Serializable
import net.mamoe.konfig.yaml.Yaml.Companion.default
import org.junit.Test


internal class BasicEncoderTest {
    @Serializable
    data class Data(
        val v1: String = "",
        val number: Int = 0,
        val map: Map<String, String> = mapOf("bob" to "2"),
        val list: List<String> = listOf("value1", "value2"),
        val anotherData: Data? = null
    )

    @Test
    fun testDescriptorBased() {
        blockClassOtherFlow.testDescriptorBased(Data.serializer(), Data("value1", 123456, anotherData = Data(number = 111)))
        allFlow.testDescriptorBased(Data.serializer(), Data("value1", 123456, anotherData = Data(number = 111)))
    }

    @Test
    fun testDynamic() {
        default.testDynamic("str")
        default.testDynamic(123)
        default.testDynamic(true)
        default.testDynamic("s")
        default.testDynamic(listOf("test", "s"))
        default.testDynamic(mapOf("test" to "s", "test" to "s"))
    }
}