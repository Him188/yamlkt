package net.mamoe.yamlkt.encoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml.Default
import org.junit.Test


internal class BasicEncoderTest {
    @Serializable
    data class Data(
        val v1: String = "",
        val number: Int = 0,
        val map: Map<String, String> = mapOf("bob" to "2"),
        val list: List<String> = listOf("value1", "value2"),
        val anotherData: Data? = null,
        val byteArray: ByteArray? = null
    ) {
        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (javaClass != other?.javaClass) return false

            other as Data

            if (v1 != other.v1) return false
            if (number != other.number) return false
            if (map != other.map) return false
            if (list != other.list) return false
            if (anotherData != other.anotherData) return false
            if (!byteArray.contentEquals(other.byteArray)) return false

            return true
        }

        override fun hashCode(): Int {
            var result = v1.hashCode()
            result = 31 * result + number
            result = 31 * result + map.hashCode()
            result = 31 * result + list.hashCode()
            result = 31 * result + (anotherData?.hashCode() ?: 0)
            result = 31 * result + byteArray.contentHashCode()
            return result
        }
    }

    @Serializable
    data class Data2(
        val map: Map<String, String> = mapOf("bob" to "2")
    )

    @Test
    fun testDescriptorBased() {
        allFlow.testDynamic(mapOf("bob" to "2"))
        // exitProcess(1)

        allFlow.testDescriptorBased(Data2.serializer(), Data2())

        allFlow.testDescriptorBased(
            Data.serializer(),
            Data("value1", 123456, anotherData = Data(number = 111), byteArray = "test byteArray".toByteArray())
        )
        blockClassOtherFlow.testDescriptorBased(
            Data.serializer(),
            Data("value1", 123456, anotherData = Data(number = 111), byteArray = "test byteArray".toByteArray())
        )
    }

    /*
    Data(v1=value1, number=123456, map={bob=2}, list=[value1, value2], anotherData=Data(v1=, number=111, map={bob=2}, list=[value1, value2], anotherData=null))
    (v1=, number=0, map={bob=2}, list=[value1, value2], anotherData=Data(v1=, number=0, map={bob=2}, list=[value1, value2], anotherData=null))>
     */

    @Test
    fun testDynamic() {
        Default.testDynamic("str")
        Default.testDynamic(123)
        Default.testDynamic(true)
        Default.testDynamic("s")
        Default.testDynamic(listOf("test", "s"))
        Default.testDynamic(listOf(1.toByte())) // ByteArray will be decoded to List<Byte>
    }

    @Test
    fun testDynamicMap() {
        Default.testDynamic(
            mapOf(
                "apple" to "banana",
                "test" to "sss"
            )
        )
    }
}