package net.mamoe.yamlkt.testsFromIssues

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.internal.Debugging
import kotlin.test.Test
import kotlin.test.assertEquals

internal class Issue5 {
    @Serializable
    class Config(
        var tt: String? = null,
    )

    @Test
    fun test() {
        Debugging.enabled = true
        val result = Yaml.encodeToString(Config.serializer(), Config())
        assertEquals("tt: null", result.trim(), "Result: $result")
    }
}