package net.mamoe.konfig.yaml

import kotlinx.io.core.Input
import kotlinx.io.core.Output
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy
import kotlinx.serialization.StringFormat
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.IOFormat

class Yaml(override val context: SerialModule) : IOFormat, StringFormat {
    override fun <T> dumpTo(serializer: SerializationStrategy<T>, value: T, output: Output) {
        TODO("not implemented")
    }

    override fun <T> load(deserializer: DeserializationStrategy<T>, input: Input): T {
        TODO("not implemented")
    }

    override fun <T> parse(deserializer: DeserializationStrategy<T>, string: String): T {
        TODO("not implemented")
    }

    override fun <T> stringify(serializer: SerializationStrategy<T>, value: T): String {
        TODO("not implemented")
    }

}