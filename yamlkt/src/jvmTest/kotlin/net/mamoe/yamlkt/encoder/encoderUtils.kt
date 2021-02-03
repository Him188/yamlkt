@file:Suppress("unused")

package net.mamoe.yamlkt.encoder

import kotlinx.serialization.KSerializer
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlBuilder
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

val allFlow = Yaml {
    mapSerialization = YamlBuilder.MapSerialization.FLOW_MAP
    classSerialization = YamlBuilder.MapSerialization.FLOW_MAP
    listSerialization = YamlBuilder.ListSerialization.FLOW_SEQUENCE
}

val blockClassOtherFlow = Yaml {
    mapSerialization = YamlBuilder.MapSerialization.FLOW_MAP
    classSerialization = YamlBuilder.MapSerialization.BLOCK_MAP
    listSerialization = YamlBuilder.ListSerialization.FLOW_SEQUENCE
}

val allBlock = Yaml {
    mapSerialization = YamlBuilder.MapSerialization.BLOCK_MAP
    classSerialization = YamlBuilder.MapSerialization.BLOCK_MAP
    listSerialization = YamlBuilder.ListSerialization.BLOCK_SEQUENCE
}
