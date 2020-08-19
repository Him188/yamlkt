@file:Suppress("unused")

package net.mamoe.yamlkt.encoder

import kotlinx.serialization.KSerializer
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlConfiguration
import net.mamoe.yamlkt.YamlDynamicSerializer
import kotlin.test.assertEquals


val snakeYaml = org.yaml.snakeyaml.Yaml()

fun <T> Yaml.testDescriptorBased(
    serializer: KSerializer<T>,
    value: T,
    print: Boolean = false
) {
    val dump = kotlin.runCatching {
        this.encodeToString(serializer, value)
    }.getOrElse {
        throw AssertionError("Filed dump. value=$value", it)
    }

    if (print) println(
        """
```
$dump
```
""".trim()
    )

    kotlin.runCatching {
        assertEquals(value.toString(), this.decodeFromString(serializer, dump).toString())
    }.getOrElse {
        throw AssertionError("Failed load, serializer=${serializer.descriptor.serialName} dump=\n```\n$dump\n``` \nvalue=$value", it)
    }
}

@Suppress("NOTHING_TO_INLINE")
inline fun Yaml.testDynamic(
    value: Any,
    print: Boolean = false
) = testDescriptorBased(YamlDynamicSerializer, value, print)

val allFlow = Yaml(
    configuration = YamlConfiguration(
        mapSerialization = YamlConfiguration.MapSerialization.FLOW_MAP,
        classSerialization = YamlConfiguration.MapSerialization.FLOW_MAP,
        listSerialization = YamlConfiguration.ListSerialization.FLOW_SEQUENCE
    )
)

val blockClassOtherFlow = Yaml(
    configuration = YamlConfiguration(
        mapSerialization = YamlConfiguration.MapSerialization.FLOW_MAP,
        classSerialization = YamlConfiguration.MapSerialization.BLOCK_MAP,
        listSerialization = YamlConfiguration.ListSerialization.FLOW_SEQUENCE
    )
)

val allBlock = Yaml(
    configuration = YamlConfiguration(
        mapSerialization = YamlConfiguration.MapSerialization.BLOCK_MAP,
        classSerialization = YamlConfiguration.MapSerialization.BLOCK_MAP,
        listSerialization = YamlConfiguration.ListSerialization.BLOCK_SEQUENCE
    )
)
