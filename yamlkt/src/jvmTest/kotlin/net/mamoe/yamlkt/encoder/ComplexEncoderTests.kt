package net.mamoe.yamlkt.encoder

import kotlinx.serialization.ImplicitReflectionSerializer
import net.mamoe.yamlkt.Yaml.Companion.default
import org.junit.Test


@OptIn(ImplicitReflectionSerializer::class)
internal class ComplexEncoderTests {
    @Test
    fun testNestedList() {
        Thread.sleep(1000)
        default.testDynamic(
            listOf(
                "apple",
                listOf(
                    "apple",
                    listOf(
                        listOf(
                            "apple",
                            "test"
                        ),
                        listOf(
                            "apple",
                            "test"
                        )
                    )
                )
            ),
            true
        )
    }

    @Test
    fun testBlockNestedMap() {
        Thread.sleep(1000)
        default.testDynamic(
            mapOf(
                "apple" to listOf("ba", "na", "na"),
                "test" to mapOf(
                    "ba" to "na",
                    "fa" to mapOf(
                        "ba" to "na",
                        "fa" to "pa"
                    )
                )
            ),
            true
        )
    }

    @Test
    fun testFlowNestedMap() {
        Thread.sleep(1000)
        allFlow.testDynamic(
            mapOf(
                "apple" to listOf("ba", "na", "na"),
                "test" to mapOf(
                    "ba" to "na",
                    "fa" to mapOf(
                        "ba" to "na",
                        "fa" to "pa"
                    )
                )
            ),
            true
        )
    }
}