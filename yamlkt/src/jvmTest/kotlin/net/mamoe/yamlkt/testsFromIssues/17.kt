package net.mamoe.yamlkt.testsFromIssues

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test
import kotlin.test.assertEquals

internal class Issue17 {
    private val yaml = Yaml {
        // Error without DOUBLE_QUOTATION
        //stringSerialization = DOUBLE_QUOTATION
    }

    @Serializable
    data class TestData(
        val test: String,
        val test2: String,
        val test3: String,
    )

    @Test
    fun testYaml() {
        val data = TestData(
            test = "testString",
            test2 = "--some \"text {{.val}}\\t{{.another}}\"",
            test3 = "\${testString}",
        )

        val encodedString = yaml.encodeToString(TestData.serializer(), data)
        println(encodedString)
        val decodedData = yaml.decodeFromString(TestData.serializer(), encodedString)
        println(decodedData)

        assertEquals(data, decodedData)
    }
}