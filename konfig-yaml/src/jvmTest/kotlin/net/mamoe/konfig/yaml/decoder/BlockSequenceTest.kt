package net.mamoe.konfig.yaml.decoder

import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer
import kotlinx.serialization.builtins.serializer
import net.mamoe.konfig.yaml.Yaml
import net.mamoe.konfig.yaml.YamlElement
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
}