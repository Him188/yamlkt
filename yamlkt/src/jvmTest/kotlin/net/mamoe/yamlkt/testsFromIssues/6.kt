package net.mamoe.yamlkt.testsFromIssues

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.encoder.allBlock
import net.mamoe.yamlkt.encoder.allFlow
import net.mamoe.yamlkt.internal.Debugging
import org.junit.Test
import kotlin.test.assertEquals

internal class Issue6 {

    enum class MusicApi { QQ, NETEASE }

    @Serializable
    data class Config(
        var musicApi: MusicApi = MusicApi.QQ,
    )

    @Test
    fun testEnum() {
        Debugging.enabled = true
        var result = allBlock.encodeToString(Config.serializer(), Config())
        assertEquals("musicApi: QQ", result.trim())

        result = allFlow.encodeToString(Config.serializer(), Config())
        assertEquals("{ musicApi: QQ }", result.trim())
    }
}