@file:Suppress("unused")

package net.mamoe.yamlkt

import kotlinx.serialization.*
import kotlinx.serialization.modules.SerialModule
import kotlinx.serialization.modules.SerializersModule
import net.mamoe.yamlkt.internal.*
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
    companion object {
        /**
         * The [Yaml] using all default configurations
         */
        @JvmStatic
        val default: Yaml = Yaml()

        /**
         * The [Yaml] using all non-strict configurations.
         * Some incompatible types may be casted unsafely.
         *
         * It's not encouraged to use this.
         */
        @JvmStatic
        val nonStrict: Yaml = Yaml(
            configuration = YamlConfiguration(
                nonStrictNumber = true,
                nonStrictNullability = true
            )
        )
    }

    // region stringify

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
        val sb = StringBuilder()
        serializer.serialize(YamlEncoder(configuration, context, YamlWriter(sb)), value)
        return sb.toString()
    }

    /**
     * Stringify [value] to [String] in YAML format using [YamlNullableDynamicSerializer]
     *
     * **WARNING**: This approach is slow and may not work as expected on JS or native,
     * see [YamlDynamicSerializer] for more information
     */ // not annotated with @ImplicitReflectionSerializer as mostly config isn't supposed to have best performance.
    fun stringify(value: Any?): String {
        return stringify(YamlNullableDynamicSerializer, value)
    }

    // endregion


    // region parse

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
                TokenStream(string),
                context,
                updateMode
            )
        )
    }

    /**
     * Parse a [YamlElement] from [yamlContent].
     */
    fun parseYaml(@Language("yaml", "", "") yamlContent: String): YamlElement {
        return parse(YamlElement.serializer(), yamlContent)
    }

    /**
     * Parse a [YamlMap] from [yamlContent] safely
     */
    fun parseYamlMap(@Language("yaml", "", "") yamlContent: String): YamlMap {
        return parse(YamlMap.serializer(), yamlContent)
    }

    /**
     * Parse a [YamlList] from [yamlContent] safely
     */
    fun parseYamlList(@Language("yaml", "", "") yamlContent: String): YamlList {
        return parse(YamlList.serializer(), yamlContent)
    }


    /**
     * Parse a [Map] from [yamlContent].
     *
     * Non-literal keys are mapped using [Any.toString]
     *
     * @throws IllegalArgumentException if the [yamlContent] isn't a yaml map
     */
    fun parseMap(@Language("yaml", "", "") yamlContent: String): Map<String?, Any?> {
        @Suppress("IMPLICIT_CAST_TO_ANY", "USELESS_IS_CHECK", "UNCHECKED_CAST")
        return when (val v = parseMapOrNullImpl(yamlContent)) {
            null -> throw IllegalArgumentException("Cannot cast `null` to Map<String, Any?>")
            is Map<*, *> -> v
            else -> throw IllegalArgumentException("Cannot cast ${v.classSimpleName()} to Map<String, Any?>")
        } as Map<String?, Any?>
    }

    /**
     * Parse a [Map] from [yamlContent].
     *
     * Non-literal keys are mapped using [Any.toString]
     *
     * @return the [Map] if succeed, `null` otherwise.
     */
    fun parseMapOrNull(@Language("yaml", "", "") yamlContent: String): Map<String?, Any?>? {
        @Suppress("UNCHECKED_CAST")
        return parseMapOrNullImpl(yamlContent) as? Map<String?, Any?>
    }

    /**
     * Parse a [List] from [yamlContent].
     *
     * @throws IllegalArgumentException if the [yamlContent] isn't a yaml list(sequence)
     */
    fun parseList(@Language("yaml", "", "") yamlContent: String): List<Any?> {
        when (val v = parse(YamlNullableDynamicSerializer, yamlContent)) {
            is List<*> -> return v
            else -> throw IllegalArgumentException("Cannot cast ${v?.classSimpleName()} to List<Any?>")
        }
    }

    /**
     * Parse a [List] from [yamlContent].
     *
     * @throws IllegalArgumentException if the [yamlContent] isn't a yaml list(sequence)
     */
    fun parseListOrNull(@Language("yaml", "", "") yamlContent: String): List<Any?> {
        when (val v = parse(YamlNullableDynamicSerializer, yamlContent)) {
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
    fun parseAny(@Language("yaml", "", "") yamlContent: String): Any? {
        return parse(YamlNullableDynamicSerializer, yamlContent)
    }

    // endregion
}

// internal

internal fun Yaml.parseMapOrNullImpl(@Language("yaml", "", "") yamlContent: String): Any? {
    return when (val v = parse(YamlNullableDynamicSerializer, yamlContent)) {
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
