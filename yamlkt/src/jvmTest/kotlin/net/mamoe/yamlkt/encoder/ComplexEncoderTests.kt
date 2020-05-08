package net.mamoe.yamlkt.encoder

import kotlinx.serialization.ImplicitReflectionSerializer
import org.junit.Test


@OptIn(ImplicitReflectionSerializer::class)
internal class ComplexEncoderTests {
    @Test
    fun testNestedList() {
        Thread.sleep(1000)
        allBlock.testDynamic(
            listOf(
                mapOf(
                    "test" to "p",
                    "tests" to listOf(
                        "apple",
                        mapOf(
                            "test" to "p",
                            "tests" to listOf(
                                "apple",
                                "test"
                            )
                        )
                    )
                ),
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
        allBlock.testDynamic(
            testContent,
            true
        )
    }

    private val testContent = mapOf(
        "apple" to listOf("ba", "na", "na"),
        "test" to mapOf(
            "ba" to mapOf(
                "ba" to "na",
                "fa" to "pa"
            ),
            "fa" to mapOf(
                "ba" to "na",
                "fa" to listOf("test", "ppp")
            )
        )
    )

    @Test
    fun testFlowNestedMap() {
        Thread.sleep(1000)
        allFlow.testDynamic(
            testContent,
            true
        )
    }
}