@file:Suppress("unused")

package net.mamoe.yamlkt

import kotlinx.serialization.*
import kotlinx.serialization.modules.EmptySerializersModule
import kotlinx.serialization.modules.SerializersModule
import net.mamoe.yamlkt.internal.*
import kotlin.collections.component1
import kotlin.collections.component2
import kotlin.collections.set
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract
import kotlin.jvm.JvmOverloads
import kotlin.jvm.JvmStatic


/**
 * The main entry point to work with YAML serialization.
 *
 *
 * ## Examples of usage
 * ```
 * val yaml = Yaml(...)
 *
 * @Serializer
 * class User(val name: String, val age: Int)
 *
 * // parsing from string to an object
 * yaml.parse(User.serializer(), """
 *   name: Bob
 *   age: 20
 * """.trimIndent())
 *
 * // flow maps are also supported
 * yaml.parse(User.serializer(), "{name: Bob, age: 20}")
 *
 * // dumping an object to YAML string
 * val string = yaml.stringify(User.serializer())
 *
 * // parsing YamlMap without specific descriptors
 * val map: YamlMap = yaml.decodeYamlMapFromString("{name: Bob, age: 20}")
 * val name = map["name"].toString()
 *
 * // parsing Map without specific descriptors
 * val map: Map = yaml.parseMap("{name: Bob, age: 20}")
 * val name = map["name"].toString()
 * ```
 *
 * @see Yaml.default The instance using default configurations.
 * @see Yaml.nonStrict The instance using all non-strict configurations.
 */
public class Yaml @JvmOverloads constructor(
    public val configuration: YamlConfiguration = YamlConfiguration.Default,

    /**
     * The context
     *
     * Use [YamlDynamicSerializer] as default to deserialize and serialize `Any` types marked with annotation [Contextual]
     */
    public override val serializersModule: SerializersModule = SerializersModule {
        contextual(Any::class, YamlDynamicSerializer)
    }
) : StringFormat {
    public companion object {
        /**
         * The [Yaml] using all default configurations
         */
        @JvmStatic
        public val default: Yaml = Yaml()

        /**
         * The [Yaml] using all non-strict configurations.
         * Some incompatible types may be casted unsafely.
         *
         * It's not encouraged to use this.
         */
        @JvmStatic
        public val nonStrict: Yaml = Yaml(
            configuration = YamlConfiguration {
                nonStrictNumber = true
                nonStrictNullability = true
            }
        )
    }

    // region stringify

    /**
     * Encode [value] to [String] in YAML format using [serializer]
     *
     * Example:
     * ```
     * @Serializer
     * class User(val name: String, val age: Int)
     *
     * val dump = Yaml.default.stringify(User.serializer(), User("Bob", 20))
     * // the value of `dump`:
     * // """
     * //  name: Bob
     * //  age: 20
     * // """
     * ```
     */
    public override fun <T> encodeToString(serializer: SerializationStrategy<T>, value: T): String {
        val sb = StringBuilder()
        kotlin.runCatching {
            serializer.serialize(YamlEncoder(configuration, serializersModule, YamlWriter(sb)), value)
        }.fold(
            onSuccess = { return sb.toString() },
            onFailure = {
                Debugging.logCustom { "[Debugging] Printed:\n\n```\n$sb\n```" }
                throw it
            }
        )
    }

    /**
     * Encode [value] to [String] in YAML format using [YamlNullableDynamicSerializer]
     *
     * **WARNING**: This approach is slow and may not work as expected on JS or native,
     * see [YamlDynamicSerializer] for more information
     */ // not annotated with @ImplicitReflectionSerializer as mostly config isn't supposed to have best performance.
    public fun encodeToString(value: Any?): String {
        return encodeToString(YamlNullableDynamicSerializer, value)
    }

    // endregion


    // region parse

    /**
     * Decode [string] to a [T] using [deserializer]
     *
     * Example:
     * ```
     * @Serializer
     * class User(val name: String, val age: Int)
     *
     * Yaml.default.parse(User.serializer(), """
     *   name: Bob
     *   age: 20
     * """.trimIndent())
     * ```
     */
    public override fun <T> decodeFromString(
        deserializer: DeserializationStrategy<T>,
        @Language("yaml") string: String
    ): T {
        return deserializer.deserialize(
            YamlDecoder(
                configuration,
                TokenStream(string),
                serializersModule
            )
        )
    }

    /**
     * Parse a [YamlElement] from [yamlContent].
     */
    public fun decodeYamlFromString(@Language("yaml") yamlContent: String): YamlElement {
        return decodeFromString(YamlElement.serializer(), yamlContent)
    }

    /**
     * Parse a [YamlMap] from [yamlContent] safely
     */
    public fun decodeYamlMapFromString(@Language("yaml") yamlContent: String): YamlMap {
        return decodeFromString(YamlMap.serializer(), yamlContent)
    }

    /**
     * Parse a [YamlList] from [yamlContent] safely
     */
    public fun decodeYamlListFromString(@Language("yaml") yamlContent: String): YamlList {
        return decodeFromString(YamlList.serializer(), yamlContent)
    }


    /**
     * Parse a [Map] from [yamlContent].
     *
     * Non-literal keys are mapped using [Any.toString]
     *
     * @throws IllegalArgumentException if the [yamlContent] isn't a yaml map
     */
    public fun decodeMapFromString(@Language("yaml") yamlContent: String): Map<String?, Any?> {
        @Suppress("IMPLICIT_CAST_TO_ANY", "USELESS_IS_CHECK", "UNCHECKED_CAST")
        return when (val v = parseMapOrNullImpl(yamlContent)) {
            null -> throw IllegalArgumentException("Cannot cast `null` to Map<String, Any?>")
            is Map<*, *> -> v
            else -> throw IllegalArgumentException("Cannot cast ${v.classSimpleName()} to Map<String, Any?>")
        } as Map<String?, Any?>
    }

    /**
     * Parse a [List] from [yamlContent].
     *
     * @throws IllegalArgumentException if the [yamlContent] isn't a yaml list(sequence)
     */
    public fun decodeListFromString(@Language("yaml") yamlContent: String): List<Any?> {
        when (val v = decodeFromString(YamlNullableDynamicSerializer, yamlContent)) {
            is List<*> -> return v
            else -> throw IllegalArgumentException("Cannot cast ${v?.classSimpleName()} to List<Any?>")
        }
    }

    /**
     * Parse an object from [yamlContent].
     *
     * @return can be `null`, [Int], [Long], [Boolean], [Double], [String], [List] or [Map] only.
     *
     * @throws IllegalArgumentException if the [yamlContent] isn't a yaml list(sequence)
     */
    public fun decodeAnyFromString(@Language("yaml") yamlContent: String): Any? {
        return decodeFromString(YamlNullableDynamicSerializer, yamlContent)
    }

    // endregion
}

/**
 * Creates a [Yaml] instance using the configuration [configuration]
 */
@ExperimentalSerializationApi
public inline fun Yaml(serializersModule: SerializersModule, configuration: YamlConfigurationBuilder.() -> Unit): Yaml {
    contract { callsInPlace(configuration, InvocationKind.EXACTLY_ONCE) }
    return Yaml(YamlConfigurationBuilder().apply(configuration).build(), serializersModule)
}

/**
 * Creates a [Yaml] instance using the configuration [configuration]
 */
public inline fun Yaml(configuration: YamlConfigurationBuilder.() -> Unit): Yaml {
    contract { callsInPlace(configuration, InvocationKind.EXACTLY_ONCE) }
    return Yaml(YamlConfigurationBuilder().apply(configuration).build(), EmptySerializersModule)
}

// internal

internal fun Yaml.parseMapOrNullImpl(@Language("yaml") yamlContent: String): Any? {
    return when (val v = decodeFromString(YamlNullableDynamicSerializer, yamlContent)) {
        is Map<*, *> -> {
            val result = LinkedHashMap<String?, Any?>(v.size)

            v.forEach { (key, value) ->
                result[key?.toString()] = value
            }

            result
        }
        else -> v
    }
}
