package net.mamoe.konfig.yaml

import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import net.mamoe.konfig.yaml.internal.BinaryConverter
import net.mamoe.konfig.yaml.internal.HexConverter
import kotlin.collections.component1
import kotlin.collections.component2
import kotlin.collections.set

/**
 * Class representing single YAML element.
 * Can be [YamlPrimitive], [YamlMap] or [YamlList]
 */
@Serializable(with = YamlElementSerializer::class)
sealed class YamlElement {
    /**
     * The content of this primitive value.
     */
    abstract val content: Any?

    /**
     * Prints this element to YAML text
     */
    abstract override fun toString(): String
}


/**
 * Cast to [YamlElement].
 *
 * Supported types:
 * - [String] and primitives: [YamlLiteral]
 * - `null`: [YamlNull]
 * - [Map] with supported generic types: [YamlMap]
 * - [List] with supported generic type: [YamlList]
 * - [Array] with supported generic type: [YamlList]
 *
 * Returns [this] itself if it is a [YamlElement]
 *
 * @throws IllegalArgumentException if the type isn't supported
 */
fun Any?.asYamlElement(): YamlElement =
    asYamlElementOrNull() ?: throw IllegalArgumentException("unsupported class: ${this!!::class.simpleName}")

/**
 * Cast to [YamlElement].
 *
 * Supported types:
 * - [String] and primitives: [YamlLiteral]
 * - `null`: [YamlNull]
 * - [Map] with supported generic types: [YamlMap]
 * - [List] with supported generic type: [YamlList]
 * - [Array] with supported generic type: [YamlList]
 *
 * Returns [this] itself if it is a [YamlElement]
 *
 * Note that `"null"` and `"~"` are casted to [YamlLiteral] but not [YamlNull].
 * Only `null` is casted to [YamlNull]
 *
 * @return `null` if the type isn't supported, otherwise casted element.
 */
fun Any?.asYamlElementOrNull(): YamlElement? = when (this) {
    null -> YamlNull
    is YamlElement -> this
    is String -> YamlLiteral(this)
    is Double -> YamlLiteral(this.toString())
    is Float -> YamlLiteral(this.toString())
    is Int -> YamlLiteral(this.toString())
    is Long -> YamlLiteral(this.toString())
    is Byte -> YamlLiteral(this.toString())
    is Short -> YamlLiteral(this.toString())
    is Char -> YamlLiteral(this.toString())
    is Boolean -> YamlLiteral(this.toString())
    is Array<*> -> YamlList(this.map { it.asYamlElement() })
    is ByteArray -> YamlList(this.map { it.asYamlElement() })
    is IntArray -> YamlList(this.map { it.asYamlElement() })
    is ShortArray -> YamlList(this.map { it.asYamlElement() })
    is LongArray -> YamlList(this.map { it.asYamlElement() })
    is FloatArray -> YamlList(this.map { it.asYamlElement() })
    is DoubleArray -> YamlList(this.map { it.asYamlElement() })
    is CharArray -> YamlList(this.map { it.asYamlElement() })
    is BooleanArray -> YamlList(this.map { it.asYamlElement() })
    is Map<*, *> -> {
        val map = HashMap<YamlElement, YamlElement>(this.size)
        for ((key, value) in this) {
            map[key.asYamlElement()] = value.asYamlElement()
        }
        YamlMap(map)
    }
    is List<*> -> YamlList(this.map { it.asYamlElement() })
    else -> null
}

////////////////////
//// PRIMITIVES ////
////////////////////

/**
 * Class representing YAML scalar (primitive) value.
 * Can be [YamlNull] or [YamlLiteral]
 */
@Serializable(with = YamlPrimitiveSerializer::class)
sealed class YamlPrimitive : YamlElement() { // We prefer to use 'primitive' over 'scalar' in Kotlin.
    /**
     * The content of this primitive value.
     *
     * Decimal numbers are parsed using [String.toInt], [String.toFloat], etc.
     * Hexadecimal numbers are parsed using [HexConverter].
     * Binary numbers are parsed using [BinaryConverter].
     *
     * May return `null` if this is a [YamlNull]
     */
    abstract override val content: String?

    /**
     * @return `"null"` if this is a [YamlNull], otherwise [content]
     */
    final override fun toString(): String = content ?: "null"
}

/**
 * Class representing YAML literal value. Can be numbers, booleans and strings.
 */
@Serializable(with = YamlLiteralSerializer::class)
data class YamlLiteral(
    override val content: String
) : YamlPrimitive()

/**
 * Class representing YAML `null` value.
 * "~" and "null" literals are read as [YamlNull].
 */
@Serializable(with = YamlNullSerializer::class)
object YamlNull : YamlPrimitive() {
    override val content: Nothing? get() = null

    fun serializer(): KSerializer<YamlNull> = YamlNullSerializer
}

//////////////
//// MAPS ////
//////////////

/**
 * Class representing YAML map.
 */
@Serializable(with = YamlMapSerializer::class)
open class YamlMap(
    final override val content: Map<YamlElement, YamlElement>
) : YamlElement(), Map<YamlElement, YamlElement> by content {
    override fun toString(): String = content.joinToYamlString()

    /**
     * Gets a value whose corresponding key's [YamlElement.content] is [key]
     *
     * @throws NoSuchElementException if not found
     */
    operator fun get(key: String): YamlElement {
        return getOrNull(key) ?: throw NoSuchElementException(key)
    }

    /**
     * Gets a value whose corresponding key's [YamlElement.content] is [key]
     * @return `null` if not found, otherwise the matched value.
     */
    fun getOrNull(key: String): YamlElement? {
        for ((k, value) in this) {
            if (k.content == key) return value
        }
        return null
    }
}

//////////////
//// MAPS ////
//////////////

/**
 * Class representing YAML sequences.
 */
@Serializable(with = YamlListSerializer::class)
class YamlList(
    override val content: List<YamlElement>
) : YamlElement(), List<YamlElement> by content {
    override fun toString(): String = this.joinToYamlString()
}

/**
 * Joins this [List] to valid YAML [String] value.
 * Returns `"[foo, bar, test]"` for example.
 */
fun List<YamlElement>.joinToYamlString(): String {
    return this.joinToString(
        separator = ",",
        prefix = "[",
        postfix = "]"
    )
}


// internal

/**
 * Joins this map to valid YAML [String] value.
 * Returns `"{age:12,name:huang}"` for example.
 */
internal fun Map<*, *>.joinToYamlString(): String {
    return this.entries.joinToString(
        separator = ",",
        prefix = "{",
        postfix = "}",
        transform = { (key, value) -> "$key:$value" }
    )
}
