package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.decodeFromString
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.Yaml.Default
import net.mamoe.yamlkt.YamlElement
import kotlin.test.Test
import kotlin.test.assertEquals


internal class BlockSequenceTest {

    @Test
    fun simpleDescriptorBlockSequence() {
        val map = Yaml.decodeFromString(
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
    fun simpleDynamicBlockSequence() {
        val map = Default.decodeYamlListFromString(
            """
- part_nox
- test
- pp
"""
        )

        println(map)

    }

    @Test
    fun nestedDescriptorBlockSequence() {
        val map = Yaml.decodeFromString(
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
    fun nestedDescriptorBlockSequence2() {
        val list = Yaml.decodeFromString(
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
    fun nestedDynamicBlockSequence2() {
        val list = Default.decodeListFromString(
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
    fun nestedDynamicBlockSequence() {
        val map = Default.decodeYamlListFromString(
            """
                        - part_nox
                        - test
                        - pp
                        """
        )

        println(map)

    }

    @Serializable
    data class NestedTestData(val item1: String, val item2: String)

    @Serializable
    data class TestData(val list: List<List<NestedTestData>>)

    /**
     * Test data from https://github.com/Him188/yamlkt/issues/1
     */
    @Test
    fun testNestedList() {
        val yaml = """
            list:
            - - item1: 1
                item2: A
              - item1: 2
                item2: B
            - - item1: 3
                item2: C
        """

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
            Yaml.decodeFromString(TestData.serializer(), yaml)
        )

        // contextual
        assertEquals(
            mapOf<String?, Any?>(
                "list" to listOf(
                    listOf(
                        mapOf("item1" to "1", "item2" to "A"),
                        mapOf("item1" to "2", "item2" to "B")
                    ),
                    listOf(
                        mapOf("item1" to "3", "item2" to "C")
                    )
                )
            ).toString(),
            Default.decodeMapFromString(yaml).toString()
        )
    }

    @Test
    fun testMixedNestingList() {
        val yaml = """
                    list:
                    - [ {item1: 1, item2: A}, { item1: 2, item2: B} ]
                    - - item1: 3
                        item2: C
                    - [{item1: 1, item2: A}]
        """

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
            Yaml.decodeFromString(TestData.serializer(), yaml)
        )

        assertEquals(
            mapOf<String?, Any?>(
                "list" to listOf(
                    listOf(
                        mapOf("item1" to "1", "item2" to "A"),
                        mapOf("item1" to "2", "item2" to "B")
                    ),
                    listOf(
                        mapOf("item1" to "3", "item2" to "C")
                    ),
                    listOf(
                        mapOf("item1" to "1", "item2" to "A")
                    )
                )
            ).toString(),
            Default.decodeMapFromString(yaml).toString()
        )
    }

    @Test
    fun blockSeqWithNegativeValues() {
        assertEquals(
            listOf(-1),
            Default.decodeFromString(
                """
                - -1
            """.trimIndent()
            )
        )
    }
}