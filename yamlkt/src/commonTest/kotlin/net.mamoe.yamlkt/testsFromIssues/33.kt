package net.mamoe.yamlkt.testsFromIssues

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.encoder.allFlow
import kotlin.test.Test
import kotlin.test.assertEquals

internal class Issue33 {
    private val yaml = Yaml {
    }

    @Serializable
    data class TestData(
        val test: Byte,
        val test5: Byte,
        val test2: ByteArray,
        val test3: UByte,
        val test4: UByte,
    ) {
        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other === null) return false
            if (other !is TestData) return false

            if (test != other.test) return false
            return test2.contentEquals(other.test2)
        }

        override fun hashCode(): Int {
            var result = test.toInt()
            result = 31 * result + test2.contentHashCode()
            return result
        }
    }

    @Test
    fun testYaml() {
        val data = TestData(
            test = 125,
            test5 = -125,
            test2 = byteArrayOf(-125, 125) + "test".encodeToByteArray(),
            test3 = 125u,
            test4 = 254u,
        )

        var encodedString = yaml.encodeToString(TestData.serializer(), data)
        println(encodedString)
        var decodedData = yaml.decodeFromString(TestData.serializer(), encodedString)
        println(decodedData)

        encodedString = allFlow.encodeToString(TestData.serializer(), data)
        println(encodedString)
        decodedData = allFlow.decodeFromString(TestData.serializer(), encodedString)
        println(decodedData)

        assertEquals(data, decodedData)
    }
}