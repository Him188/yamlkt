package net.mamoe.yamlkt.encoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml.Companion.default
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

    @Serializable
    data class Data2(
        val map: Map<String, String> = mapOf("bob" to "2")
    )

    @Test
    fun testDescriptorBased() {
        allFlow.testDynamic(mapOf("bob" to "2"))
        // exitProcess(1)

        allFlow.testDescriptorBased(Data2.serializer(), Data2())

        allFlow.testDescriptorBased(Data.serializer(), Data("value1", 123456, anotherData = Data(number = 111)))
        blockClassOtherFlow.testDescriptorBased(Data.serializer(), Data("value1", 123456, anotherData = Data(number = 111)))
    }

    /*
    Data(v1=value1, number=123456, map={bob=2}, list=[value1, value2], anotherData=Data(v1=, number=111, map={bob=2}, list=[value1, value2], anotherData=null))
    (v1=, number=0, map={bob=2}, list=[value1, value2], anotherData=Data(v1=, number=0, map={bob=2}, list=[value1, value2], anotherData=null))>
     */

    @Test
    fun testDynamic() {
        default.testDynamic("str")
        default.testDynamic(123)
        default.testDynamic(true)
        default.testDynamic("s")
        default.testDynamic(listOf("test", "s"))
    }

    @Test
    fun testDynamicMap() {
        default.testDynamic(
            mapOf(
                "apple" to "banana",
                "test" to "sss"
            )
        )
    }
}