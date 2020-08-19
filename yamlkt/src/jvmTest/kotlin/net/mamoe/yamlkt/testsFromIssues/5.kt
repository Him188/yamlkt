package net.mamoe.yamlkt.testsFromIssues

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.internal.Debugging
import org.junit.Test
import kotlin.test.assertEquals

internal class Issue5 {
    @Test
    fun test() {
        @Serializable
        class Config(
            var tt: String? = null,
        )

        Debugging.enabled = true
        val result = Yaml.default.encodeToString(Config.serializer(), Config())
        assertEquals("tt: null", result.trim(), "Result: $result")
    }
}