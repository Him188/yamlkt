package net.mamoe.konfig.yaml

import kotlinx.serialization.Serializable
import net.mamoe.konfig.yaml.Yaml.Companion.default
import org.junit.Test


internal class FlowListTest {

    @Test
    fun testFlowListWithDescriptor() {
        @Serializable
        class TestData(
            val list: List<List<String>>
        )

        default.parse(
            TestData.serializer(), """
list: [[test, test, test, ]] 
"""
        )
    }
}