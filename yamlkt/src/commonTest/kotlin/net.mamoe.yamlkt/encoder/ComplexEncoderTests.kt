package net.mamoe.yamlkt.encoder

import kotlin.test.Test


internal class ComplexEncoderTests {
    @Test
    fun testNestedList() {
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
        allFlow.testDynamic(
            testContent,
            true
        )
    }
}