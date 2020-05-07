package net.mamoe.konfig.yaml.decoder

import org.junit.Test
import org.yaml.snakeyaml.Yaml as SnakeYaml

internal class CompoundMapTest {


    @Test
    fun testCompoundMap() {
        val snakeYaml = SnakeYaml().load<String>(
            """
                test
            """.trimIndent()
        )
    }

}