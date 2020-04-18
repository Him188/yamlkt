package net.mamoe.konfig.yaml

import kotlinx.io.core.Input
import kotlinx.io.core.Output
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy
import kotlinx.serialization.StringFormat
import kotlinx.serialization.UpdateMode
import kotlinx.serialization.modules.EmptyModule
import kotlinx.serialization.modules.SerialModule
import net.mamoe.konfig.ExperimentalKonfigApi
import net.mamoe.konfig.IOFormat
import net.mamoe.konfig.asCharStream
import net.mamoe.konfig.yaml.internal.TokenStream
import net.mamoe.konfig.yaml.internal.YamlDecoder
import kotlin.jvm.JvmOverloads


/**
 * The main entry point to work with YAML serialization.
 *
 * @see Yaml.default The instance using default configurations.
 * @see Yaml.nonStrict The instance using all non-strict configurations.
 */
@OptIn(ExperimentalKonfigApi::class)
class Yaml @JvmOverloads constructor(
    val configuration: YamlConfiguration = YamlConfiguration(),
    override val context: SerialModule = EmptyModule
) : IOFormat, StringFormat {
    @ExperimentalKonfigApi("Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0")
    override fun <T> dumpTo(serializer: SerializationStrategy<T>, value: T, output: Output) {
        TODO("not implemented")
    }

    @ExperimentalKonfigApi("Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0")
    override fun <T> load(deserializer: DeserializationStrategy<T>, input: Input): T {
        return deserializer.deserialize(
            YamlDecoder(
                configuration,
                TokenStream(input.asCharStream()), context, UpdateMode.OVERWRITE // TODO: 2020/4/18 check UpdateMode
            )
        )
    }

    override fun <T> parse(deserializer: DeserializationStrategy<T>, string: String): T {
        return deserializer.deserialize(
            YamlDecoder(
                configuration,
                TokenStream(string.asCharStream()), context, UpdateMode.OVERWRITE// TODO: 2020/4/18 check UpdateMode
            )
        )
    }

    override fun <T> stringify(serializer: SerializationStrategy<T>, value: T): String {
        TODO("not implemented")
    }

    companion object {
        /**
         * The [Yaml] using all default configurations
         */
        val default: Yaml = Yaml()

        /**
         * The [Yaml] using all non-strict configurations.
         * Some incompatible types may be casted unsafely.
         */
        val nonStrict: Yaml = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true,
                nonStrictNullability = true
            )
        )
    }
}

@JvmOverloads
fun <T> String.parseAsYaml(deserializer: DeserializationStrategy<T>, yaml: Yaml = Yaml.default): T {
    return yaml.parse(deserializer, this)
}