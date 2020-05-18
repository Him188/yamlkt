package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlElement
import org.junit.Test
import kotlin.test.assertEquals


internal class BlockSequenceTest {

    @Test
    fun `simple descriptor block sequence`() {
        val map = Yaml.default.parse(
            ListSerializer(YamlElement.serializer()),
            """
                        - part_nox
                        - test
                        - pp
                        """
        )

        println(map)

    }

    @Test
    fun `simple dynamic block sequence`() {
        val map = Yaml.default.parseYamlList(
            """
- part_nox
- test
- pp
"""
        )

        println(map)

    }

    @Test
    fun `nested descriptor block sequence`() {
        val map = Yaml.default.parse(
            ListSerializer(ListSerializer(String.serializer())),
            """
                        - [part_nox]
                        - [test]
                        - [pp]
                        """
        )

        println(map)

    }

    @Test
    fun `nested descriptor block sequence2`() {
        val list = Yaml.default.parse(
            ListSerializer(MapSerializer(String.serializer(), String.serializer())),
            """
- pp: s
  ss: p

-
  pp: s
  ss: p

"""
        )

        println(list)

    }

    @Test
    fun `nested dynamic block sequence2`() {
        val list = Yaml.default.parseList(
            """
- pp: s
  ss: p

-
  pp: s
  ss: p

"""
        )
        assertEquals(
            listOf(
                mapOf(
                    "pp" to "s",
                    "ss" to "p"
                ),
                mapOf(
                    "pp" to "s",
                    "ss" to "p"
                )
            ),
            list
        )
    }

    @Test
    fun `nested dynamic block sequence`() {
        val map = Yaml.default.parseYamlList(
            """
                        - part_nox
                        - test
                        - pp
                        """
        )

        println(map)

    }

    /**
     * Test data from https://github.com/Him188/yamlkt/issues/1
     */
    @Test
    fun testNestedList() {
        @Serializable
        data class NestedTestData(val item1: String, val item2: String)

        @Serializable
        data class TestData(val list: List<List<NestedTestData>>)

        assertEquals(
            TestData(
                listOf(
                    listOf(
                        NestedTestData("1", "A"),
                        NestedTestData("2", "B")
                    ),
                    listOf(
                        NestedTestData("3", "C")
                    )
                )
            ),
            Yaml.default.parse(
                TestData.serializer(), """
                    list:
                    - - item1: 1
                        item2: A
                      - item1: 2
                        item2: B
                    - - item1: 3
                        item2: C
                """.trimIndent()
            )
        )
    }

    @Test
    fun testMixedNestingList() {
        @Serializable
        data class NestedTestData(val item1: String, val item2: String)

        @Serializable
        data class TestData(val list: List<List<NestedTestData>>)

        assertEquals(
            TestData(
                listOf(
                    listOf(
                        NestedTestData("1", "A"),
                        NestedTestData("2", "B")
                    ),
                    listOf(
                        NestedTestData("3", "C")
                    ),
                    listOf(
                        NestedTestData("1", "A")
                    )
                )
            ),
            Yaml.default.parse(
                TestData.serializer(), """
                    list:
                    - [ {item1: 1, item2: A}, { item1: 2, item2: B} ]
                    - - item1: 3
                        item2: C
                    - [{item1: 1, item2: A}]
                """.trimIndent()
            )
        )
    }
}