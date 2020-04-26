package net.mamoe.konfig.yaml

import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerializationStrategy
import kotlinx.serialization.StringFormat
import kotlinx.serialization.UpdateMode
import kotlinx.serialization.modules.SerialModule
import kotlinx.serialization.modules.SerializersModule
import net.mamoe.konfig.charInputStream
import net.mamoe.konfig.yaml.internal.TokenStream
import net.mamoe.konfig.yaml.internal.YamlDecoder
import net.mamoe.konfig.yaml.internal.YamlDynamicSerializer
import kotlin.jvm.JvmOverloads


/**
 * The main entry point to work with YAML serialization.
 *
 * @see Yaml.default The instance using default configurations.
 * @see Yaml.nonStrict The instance using all non-strict configurations.
 */
class Yaml @JvmOverloads constructor(
    val configuration: YamlConfiguration = YamlConfiguration(),
    override val context: SerialModule = SerializersModule {
        contextual(Any::class, YamlDynamicSerializer)
    }
) : IOFormat, StringFormat {
    override fun <T> dumpTo(serializer: SerializationStrategy<T>, value: T, output: OutputStream) {
        TODO("not implemented")
    }

    override fun <T> load(deserializer: DeserializationStrategy<T>, input: InputStream): T {
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
                TokenStream(string.charInputStream()), context, UpdateMode.OVERWRITE// TODO: 2020/4/18 check UpdateMode
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