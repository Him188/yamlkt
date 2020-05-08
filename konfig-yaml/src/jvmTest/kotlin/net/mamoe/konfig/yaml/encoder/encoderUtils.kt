@file:Suppress("unused")

package net.mamoe.konfig.yaml.encoder

import kotlinx.serialization.KSerializer
import net.mamoe.konfig.yaml.Yaml
import net.mamoe.konfig.yaml.YamlConfiguration
import net.mamoe.konfig.yaml.YamlDynamicSerializer
import kotlin.test.assertEquals


fun <T> Yaml.testDescriptorBased(
    serializer: KSerializer<T>,
    value: T
) {
    val dump = kotlin.runCatching {
        this.stringify(serializer, value)
    }.getOrElse {
        throw AssertionError("Filed dump. value=$value", it)
    }

    kotlin.runCatching {
        assertEquals(value, this.parse(serializer, dump))
    }.getOrElse {
        throw AssertionError("Failed load, serializer=${serializer.descriptor.serialName} dump=\n```\n$dump\n``` \nvalue=$value", it)
    }
}

fun Yaml.testDynamic(
    value: Any
) = testDescriptorBased(YamlDynamicSerializer, value)

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
