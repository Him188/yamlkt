@file:Suppress("unused")

package net.mamoe.yamlkt.encoder

import kotlinx.serialization.KSerializer
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlBuilder
import net.mamoe.yamlkt.YamlDynamicSerializer
import net.mamoe.yamlkt.createAssertionError
import kotlin.test.assertEquals


fun <T> Yaml.testDescriptorBased(
    serializer: KSerializer<T>,
    value: T,
    print: Boolean = false,
    toString: (T) -> String = { it.toString() },
) {
    val dump = kotlin.runCatching {
        this.encodeToString(serializer, value)
    }.getOrElse {
        throw createAssertionError("Filed dump. value=$value", it)
    }

    if (print) println(
        """
```
$dump
```
""".trim()
    )

    val decoded = this.decodeFromString(serializer, dump)
    kotlin.runCatching {
        assertEquals(value.run(toString), decoded.run(toString))
    }.getOrElse {
        throw createAssertionError(
            "Failed load, serializer=${serializer.descriptor.serialName} dump=\n```\n$dump\n``` \nvalue=${
                value.run(
                    toString
                )
            }\ndecoded=${decoded.run(toString)}",
            it
        )
    }
}

@Suppress("UNCHECKED_CAST")
fun <T : Any> Yaml.testDynamic(
    value: T,
    print: Boolean = false,
    toString: (T) -> String = { it.toString() }
) = testDescriptorBased(YamlDynamicSerializer as KSerializer<T>, value, print, toString = toString)

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
