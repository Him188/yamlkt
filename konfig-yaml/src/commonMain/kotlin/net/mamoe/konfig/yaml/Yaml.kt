package net.mamoe.konfig.yaml

import kotlinx.io.core.Input
import kotlinx.io.core.Output
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy
import kotlinx.serialization.StringFormat
import kotlinx.serialization.modules.EmptyModule
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.IOFormat
import net.mamoe.konfig.asCharStream

/**
 * The main entry point to work with YAML serialization.
 */
class Yaml(
    private val configuration: YamlConfiguration = YamlConfiguration(),
    override val context: SerialModule = EmptyModule
) : IOFormat, StringFormat {
    override fun <T> dumpTo(serializer: SerializationStrategy<T>, value: T, output: Output) {
        TODO("not implemented")
    }

    override fun <T> load(deserializer: DeserializationStrategy<T>, input: Input): T {
        return deserializer.deserialize(YamlDecoder(configuration, YamlReader(input.asCharStream()), context))
    }

    override fun <T> parse(deserializer: DeserializationStrategy<T>, string: String): T {
        return deserializer.deserialize(YamlDecoder(configuration, YamlReader(string.asCharStream()), context))
    }

    override fun <T> stringify(serializer: SerializationStrategy<T>, value: T): String {
        TODO("not implemented")
    }

    companion object {
        /**
         * The [Yaml] using all default configurations
         */
        val Default: Yaml = Yaml()

        /**
         * The [Yaml] using all non-strict configurations.
         * Some incompatible types may be casted unsafely.
         */
        val NonStrict: Yaml = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true,
                nonStrictNullability = true
            )
        )
    }
}