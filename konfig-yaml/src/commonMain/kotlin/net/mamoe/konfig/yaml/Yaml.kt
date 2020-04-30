@file:Suppress("unused")

package net.mamoe.konfig.yaml

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import kotlinx.serialization.modules.SerializersModule
import net.mamoe.konfig.Language
import net.mamoe.konfig.charInputStream
import net.mamoe.konfig.yaml.internal.*
import kotlin.jvm.JvmOverloads


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
 * val map: YamlMap = yaml.parseYamlMap("{name: Bob, age: 20}")
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
class Yaml @JvmOverloads constructor(
    val configuration: YamlConfiguration = YamlConfiguration(),

    /**
     * The context
     *
     * Use [YamlDynamicSerializer] as default to deserialize and serialize `Any` types marked with annotation [ContextualSerialization]
     */
    override val context: SerialModule = SerializersModule {
        contextual(Any::class, YamlDynamicSerializer)
    },
    private val updateMode: UpdateMode = UpdateMode.BANNED
) : StringFormat {

    /**
     * Parse [string] to a [T] using [deserializer]
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
    override fun <T> parse(
        deserializer: DeserializationStrategy<T>,
        @Language("yaml", "", "") string: String
    ): T {
        return deserializer.deserialize(
            YamlDecoder(
                configuration,
                TokenStream(string.charInputStream()),
                context,
                updateMode
            )
        )
    }

    /**
     * Stringify [value] to [String] in YAML format using [serializer]
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
         *
         * It's not encouraged to use this.
         */
        val nonStrict: Yaml = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true,
                nonStrictNullability = true
            )
        )
    }
}


/**
 * Parse a [YamlMap] from [yamlContent] safely
 */
fun Yaml.parseYamlMap(@Language("yaml", "", "") yamlContent: String): YamlMap {
    return parse(YamlMap.serializer(), yamlContent)
}

/**
 * Parse a [YamlList] from [yamlContent] safely
 */
fun Yaml.parseYamlList(@Language("yaml", "", "") yamlContent: String): YamlList {
    return parse(YamlList.serializer(), yamlContent)
}


/**
 * Parse a [Map] from [yamlContent].
 * Support only literal keys.
 *
 * @param condoneNullKey `true` if ignore entries with null key. Anyway there can only be one null key, otherwise a [YamlDecodingException] will be thrown.
 *
 * @throws IllegalStateException if a key is not literal. E.g. is compound or `null`
 * @throws IllegalArgumentException if the [yamlContent] isn't a yaml map
 */
fun Yaml.parseMap(@Language("yaml", "", "") yamlContent: String, condoneNullKey: Boolean = false): Map<String, Any?> {
    when (val v = parse(YamlDynamicNullableSerializer, yamlContent)) {
        is Map<*, *> -> {
            val result = LinkedHashMap<String, Any?>(v.size)

            v.forEach { (key, value) ->
                if (!condoneNullKey) {
                    checkNotNull(key) { "null key is not allowed" }
                }
                if (key == null) return@forEach

                if (key is String) {
                    result[key.toString()] = value
                } else error("Cannot cast compound key ${key.classSimpleName()} to a String. Consider using `Yaml.parseYamlMap`")
            }

            return result
        }
        else -> throw IllegalArgumentException("Cannot cast ${v?.classSimpleName()} to Map<String, Any?>")
    }
}

/**
 * Parse a [List] from [yamlContent].
 *
 * @throws IllegalArgumentException if the [yamlContent] isn't a yaml list(sequence)
 */
fun Yaml.parseList(@Language("yaml", "", "") yamlContent: String): List<Any?> {
    when (val v = parse(YamlDynamicNullableSerializer, yamlContent)) {
        is List<*> -> return v
        else -> throw IllegalArgumentException("Cannot cast ${v?.classSimpleName()} to List<Any?>")
    }
}