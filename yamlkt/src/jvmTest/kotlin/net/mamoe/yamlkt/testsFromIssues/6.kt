package net.mamoe.yamlkt.testsFromIssues

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import org.junit.Test

internal class Issue6 {

    enum class MusicApi { QQ, NETEASE }

    @Serializable
    data class Config(
        var musicApi: MusicApi = MusicApi.QQ,
    )

    @Test
    fun test() {
        val result = Yaml.default.encodeToString(Config.serializer(), Config())
        println(result)
    }
}