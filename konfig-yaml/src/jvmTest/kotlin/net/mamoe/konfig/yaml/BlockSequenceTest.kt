package net.mamoe.konfig.yaml

import kotlinx.serialization.builtins.ListSerializer
import org.junit.Test


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
}