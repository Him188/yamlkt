@file:Suppress("unused", "MemberVisibilityCanBePrivate")

package net.mamoe.yamlkt

import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.internal.*
import kotlin.collections.component1
import kotlin.collections.component2
import kotlin.collections.set
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract
import kotlin.jvm.JvmName
import kotlin.jvm.JvmStatic
import kotlin.reflect.KClass

/**
 * Class representing single YAML element.
 * Can be [YamlPrimitive], [YamlMap] or [YamlList]
 *
 * The [YamlElement.toString] function from all [YamlElement] prints texts in YAML format, making it easier to cast to Strings.
 */
@Serializable(with = YamlElementSerializer::class)
sealed class YamlElement {
    /**
     * The content of this element.
     */
    abstract val content: Any?

    /**
     * Prints this element into YAML format.
     */
    abstract override fun toString(): String
}


/**
 * Cast to [YamlElement].
 *
 * Mappings:
 * - [String] and primitives => [YamlLiteral]
 * - `null` => [YamlNull]
 * - [Map] with supported generic types => [YamlMap]
 * - [List] with supported generic type => [YamlList]
 * - [Array] with supported generic type => [YamlList]
 *
 * Returns [this] itself if it is a [YamlElement]
 *
 * Note that `"null"` and `"~"` are casted to [YamlLiteral] but not [YamlNull].
 * Only `null` is casted to [YamlNull]
 *
 * This function is much more slower than contextual deserializing.
 *
 * @throws IllegalArgumentException if the type isn't supported
 */
fun Any?.toYamlElement(): YamlElement =
    toYamlElementOrNull() ?: throw IllegalArgumentException("unsupported class: ${this!!::class.simpleName}")

/**
 * Cast to [YamlElement].
 *
 * Mappings:
 * - [String] and primitives => [YamlLiteral]
 * - `null` => [YamlNull]
 * - [Map] with supported generic types => [YamlMap]
 * - [List] with supported generic type => [YamlList]
 * - [Array] with supported generic type => [YamlList]
 *
 * Returns [this] itself if it is a [YamlElement]
 *
 * Note that `"null"` and `"~"` are casted to [YamlLiteral] but not [YamlNull].
 * Only `null` is casted to [YamlNull]
 *
 * This function is much more slower than contextual deserializing.
 *
 * @return `null` if the type isn't supported, otherwise casted element.
 */
fun Any?.toYamlElementOrNull(): YamlElement? = asYamlElementOrNullImpl()

/**
 * @return `true` if [this] is [YamlNull], `false` otherwise.
 */
@OptIn(ExperimentalContracts::class)
fun YamlElement.isNotNull(): Boolean {
    contract {
        returns(true) implies (this@isNotNull !is YamlNull)
        returns(false) implies (this@isNotNull is YamlNull)
    }
    return this == YamlNull
}

/**
 * @return [this] as a [YamlLiteral], `null` otherwise
 */
@OptIn(ExperimentalContracts::class)
fun YamlElement.asLiteralOrNull(): YamlLiteral? {
    contract {
        returns(null) implies (this@asLiteralOrNull !is YamlLiteral)
        returnsNotNull() implies (this@asLiteralOrNull is YamlLiteral)
    }
    return this as? YamlLiteral
}

/**
 * @return [this] as a [YamlLiteral], `null` otherwise
 */
@OptIn(ExperimentalContracts::class)
inline fun YamlElement.asLiteral(
    crossinline lazyMessage: (YamlElement) -> String = { "$this is not a YamlLiteral" }
): YamlLiteral {
    return this as? YamlLiteral ?: error(lazyMessage(this))
}

/**
 * @return [this] as a [YamlPrimitive], `null` otherwise
 */
@OptIn(ExperimentalContracts::class)
fun YamlElement.asPrimitiveOrNull(): YamlPrimitive? {
    contract {
        returns(null) implies (this@asPrimitiveOrNull !is YamlPrimitive)
        returnsNotNull() implies (this@asPrimitiveOrNull is YamlPrimitive)
    }
    return this as? YamlPrimitive
}

/**
 * @return [this] as a [YamlPrimitive], `null` otherwise
 */
@OptIn(ExperimentalContracts::class)
inline fun YamlElement.asPrimitive(
    crossinline lazyMessage: (YamlElement) -> String = { "$this is not a YamlPrimitive" }
): YamlPrimitive {
    return this as? YamlPrimitive ?: error(lazyMessage(this))
}

/**
 * @return [YamlLiteral.content] if this is a [YamlLiteral], `null` otherwise
 */
@OptIn(ExperimentalContracts::class)
val YamlElement.literalContentOrNull: String?
    get() = (this as? YamlLiteral)?.content

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

    companion object {
        @JvmName("of")
        operator fun invoke(value: String?): YamlPrimitive {
            return if (value == null) YamlNull else YamlLiteral(value)
        }
    }
}

/**
 * @return `true` if [this] is [YamlNull], `false` otherwise.
 */
@OptIn(ExperimentalContracts::class)
fun YamlPrimitive.isNull(): Boolean {
    contract {
        returns(false) implies (this@isNull is YamlLiteral)
        returns(true) implies (this@isNull is YamlNull)
    }
    return this == YamlNull
}

/**
 * @return `true` if [this] is [YamlNull], `false` otherwise.
 */
@OptIn(ExperimentalContracts::class)
fun YamlPrimitive.isNotNull(): Boolean {
    contract {
        returns(true) implies (this@isNotNull is YamlLiteral)
        returns(false) implies (this@isNotNull is YamlNull)
    }
    return this == YamlNull
}

/**
 * @return [this] as a [YamlLiteral] or `null`
 */
@OptIn(ExperimentalContracts::class)
fun YamlPrimitive.asLiteralOrNull(): YamlLiteral? {
    contract {
        returns(null) implies (this@asLiteralOrNull is YamlNull)
        returnsNotNull() implies (this@asLiteralOrNull is YamlLiteral)
    }
    return this as? YamlLiteral
}

/**
 * Class representing YAML literal value. Can be numbers, booleans and strings.
 */
@Serializable(with = YamlLiteralSerializer::class)
data class YamlLiteral(
    override val content: String
) : YamlPrimitive() {
    // Using members to make it easier to be used from Java.

    fun toByte(): Byte = content.toByte()
    fun toShort(): Short = content.toShort()
    fun toInt(): Int = content.toInt()
    fun toLong(): Long = content.toLong()
    fun toFloat(): Float = content.toFloat()
    fun toDouble(): Double = content.toDouble()

    /**
     * Returns `true` if [content] is equal to `"true"`, `"TRUE"`.
     * Returns `false` otherwise.
     */
    fun toBoolean(): Boolean = when (content) {
        "true", "TRUE" -> true
        else -> false
    }

    fun toByteOrNull(): Byte? = content.toByteOrNull()
    fun toShortOrNull(): Short? = content.toShortOrNull()
    fun toIntOrNull(): Int? = content.toIntOrNull()
    fun toLongOrNull(): Long? = content.toLongOrNull()
    fun toFloatOrNull(): Float? = content.toFloatOrNull()
    fun toDoubleOrNull(): Double? = content.toDoubleOrNull()
}

/**
 * Class representing YAML `null` value.
 * Unquoted "~" and "null" literals are read as [YamlNull].
 */
@Serializable(with = YamlNullSerializer::class)
object YamlNull : YamlPrimitive() {
    override val content: Nothing? get() = null
    fun serializer(): KSerializer<YamlNull> = YamlNullSerializer
    override fun equals(other: Any?): Boolean = other === this
    override fun hashCode(): Int = 1
}

//////////////
//// MAPS ////
//////////////

/**
 * Class representing YAML map.
 *
 * Yaml can have compound keys.
 */
@Serializable(with = YamlMapSerializer::class)
data class YamlMap(
    override val content: Map<YamlElement, YamlElement>
) : YamlElement(), Map<YamlElement, YamlElement> by content {
    override fun toString(): String = content.joinToYamlString()

    /**
     * Gets a value whose corresponding key's [YamlElement.content] is [key]
     * @return `null` if not found, otherwise the matched value.
     */
    operator fun get(key: Any?): YamlElement? {
        for ((k, value) in this) {
            if (k.content == key) return value
        }
        return null
    }

    /**
     * Gets a value whose corresponding key's [YamlElement.content] is [key]
     *
     * @throws NoSuchElementException if not found
     */
    fun getOrFail(key: Any?): YamlElement {
        return get(key) ?: throw NoSuchElementException(key.toString())
    }

    fun getInt(key: Any?): Int = getOrFail(key).asLiteral().content.toInt()
    fun getIntOrNull(key: Any?): Int? = get(key)?.asPrimitiveOrNull()?.content?.toIntOrNull()
    fun getDouble(key: Any?): Double = getOrFail(key).asLiteral().content.toDouble()
    fun getDoubleOrNull(key: Any?): Double? = get(key)?.asPrimitiveOrNull()?.content?.toDoubleOrNull()
    fun getFloat(key: Any?): Float = getOrFail(key).asLiteral().content.toFloat()
    fun getFloatOrNull(key: Any?): Float? = get(key)?.asPrimitiveOrNull()?.content?.toFloatOrNull()
    fun getByte(key: Any?): Byte = getOrFail(key).asLiteral().content.toByte()
    fun getByteOrNull(key: Any?): Byte? = get(key)?.asPrimitiveOrNull()?.content?.toByteOrNull()
    fun getShort(key: Any?): Short = getOrFail(key).asLiteral().content.toShort()
    fun getShortOrNull(key: Any?): Short? = get(key)?.asPrimitiveOrNull()?.content?.toShortOrNull()
    fun getString(key: Any?): String = getOrFail(key).asLiteral().content
    fun getStringOrNull(key: Any?): String? = get(key)?.asPrimitiveOrNull()?.content
    fun getLong(key: Any?): Long = getOrFail(key).asLiteral().content.toLong()
    fun getLongOrNull(key: Any?): Long? = get(key)?.asPrimitiveOrNull()?.content?.toLongOrNull()

    fun getList(key: Any?): List<Any?> = getOrFail(key) as List<Any?>

    @Suppress("UNCHECKED_CAST")
    fun getMap(key: Any?): Map<Any?, Any?> = getOrFail(key) as Map<Any?, Any?>

    companion object {
        @JvmStatic
        @JvmName("fromStringToElementMap")
        operator fun invoke(map: Map<out String?, YamlElement>): YamlMap {
            return YamlMap(map.mapKeys { it.toYamlElement() })
        }

        @JvmStatic
        @JvmName("fromStringToAnyMap")
        operator fun invoke(map: Map<out String?, Any?>): YamlMap {
            return YamlMap(
                LinkedHashMap<YamlElement, YamlElement>(map.size).apply {
                    map.forEach { (key, value) ->
                        put(YamlPrimitive(key), value.toYamlElement())
                    }
                }
            )
        }

        @JvmStatic
        @JvmName("fromElementToAnyMap")
        operator fun invoke(map: Map<out YamlElement, Any?>): YamlMap {
            return YamlMap(map.mapValues { it.toYamlElement() })
        }
    }
}

/**
 * Get a value then converts it to a primitive type or a [String]
 *
 * @throws NoSuchElementException if not found
 * @throws IllegalArgumentException if [R] is not a primitive type or [String]
 */
inline fun <reified R : Any> YamlMap.getPrimitive(key: String): R {
    return get(key)?.smartCastPrimitive(R::class) ?: throw NoSuchElementException(key)
}

/**
 * Get a value then converts it to a primitive type or a [String]
 *
 * @throws IllegalArgumentException if [R] is not a primitive type or [String]
 *
 * @return `null` if not found
 */
inline fun <reified R : Any> YamlMap.getPrimitiveOrNull(key: String): R? {
    return get(key)?.smartCastPrimitive(R::class)
}

/**
 * @return `true` if all keys are instances of [YamlLiteral]
 */
fun YamlMap.allKeysLiteral(): Boolean = this.all { it.key is YamlLiteral }

/**
 * @return `true` if all keys are instances of [YamlPrimitive]
 */
fun YamlMap.allKeysPrimitive(): Boolean = this.all { it.key is YamlPrimitive }

/**
 * Map keys to [String] using [YamlElement.toString], then map values using [YamlElement.content]
 */
fun YamlMap.toContentMap(): Map<String?, Any?> {
    return LinkedHashMap<String?, Any?>(this.size).apply {
        this@toContentMap.forEach { (key, value) ->
            put(key.content?.toString(), value.toContent())
        }
    }
}

///////////////
//// LISTS ////
///////////////

typealias YamlSequence = YamlList

/**
 * Class representing YAML sequences.
 */
@Serializable(with = YamlListSerializer::class)
data class YamlList(
    override val content: List<YamlElement>
) : YamlElement(), List<YamlElement> by content {
    override fun toString(): String = this.joinToYamlString()

    companion object {
        @JvmStatic
        @JvmName("from")
        operator fun invoke(values: Collection<*>): YamlList {
            return YamlList(values.map { it.toYamlElement() })
        }

        @JvmStatic
        @JvmName("from")
        operator fun invoke(values: Array<*>): YamlList {
            return YamlList(values.map { it.toYamlElement() })
        }

        @JvmStatic
        @JvmName("from")
        operator fun invoke(values: Sequence<*>): YamlList {
            return YamlList(values.map { it.toYamlElement() }.toList())
        }
    }
}

/**
 * Returns a new read-only [YamlList] of given elements.
 */
fun yamlListOf(vararg values: YamlElement): YamlList =
    YamlList(values)

/**
 * Returns a new read-only [YamlList] of given elements.
 */
fun yamlListOf(vararg values: Any?): YamlList = YamlList(values)

/**
 * Converts [this] to a list containing [YamlElement.content]s
 */
fun YamlList.toContentList(): List<Any?> = this.map { it.toContent() }

/**
 * Gets a value at index [index] then converts it to a primitive type or a [String]
 *
 * @throws IndexOutOfBoundsException if not found
 * @throws IllegalArgumentException if [R] is not a primitive type or [String]
 */
inline fun <reified R : Any> YamlList.getPrimitive(index: Int): R {
    return getOrNull(index)?.smartCastPrimitive(R::class) ?: throw IndexOutOfBoundsException("$index")
}

/**
 * Gets a value at index [index] then converts it to a primitive type or a [String]
 *
 * @throws IllegalArgumentException if [R] is not a primitive type or [String]
 *
 * @return `null` if not found
 */
inline fun <reified R : Any> YamlList.getPrimitiveOrNull(index: Int): R? {
    return getOrNull(index)?.smartCastPrimitive(R::class)
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

internal fun Any?.asYamlElementOrNullImpl(): YamlElement? = when (this) {
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
    is Array<*> -> YamlList(this.map { it.toYamlElement() })
    is ByteArray -> YamlList(this.map { it.toYamlElement() })
    is IntArray -> YamlList(this.map { it.toYamlElement() })
    is ShortArray -> YamlList(this.map { it.toYamlElement() })
    is LongArray -> YamlList(this.map { it.toYamlElement() })
    is FloatArray -> YamlList(this.map { it.toYamlElement() })
    is DoubleArray -> YamlList(this.map { it.toYamlElement() })
    is CharArray -> YamlList(this.map { it.toYamlElement() })
    is BooleanArray -> YamlList(this.map { it.toYamlElement() })
    is Map<*, *> -> {
        val map = LinkedHashMap<YamlElement, YamlElement>(this.size)
        for ((key, value) in this) {
            map[key.toYamlElement()] = value.toYamlElement()
        }
        YamlMap(map)
    }
    is List<*> -> YamlList(this.map { it.toYamlElement() })
    else -> null
}

@Suppress("UNCHECKED_CAST", "IMPLICIT_CAST_TO_ANY")
@PublishedApi
internal fun <R : Any> YamlElement.smartCastPrimitive(clazz: KClass<R>): R { // reduce inlined bytecode size
    require(this is YamlPrimitive) { "the element is not YamlPrimitive" }
    return when (clazz) {
        Byte::class -> this.literalContentOrNull?.toByte()
        Short::class -> this.literalContentOrNull?.toShort()
        Int::class -> this.literalContentOrNull?.toInt()
        Long::class -> this.literalContentOrNull?.toLong()
        Float::class -> this.literalContentOrNull?.toFloat()
        Double::class -> this.literalContentOrNull?.toDouble()
        Char::class -> this.literalContentOrNull?.singleOrNull() ?: error("too many chars")
        Boolean::class -> this.literalContentOrNull?.toBoolean()
        String::class -> this.literalContentOrNull
        else -> null
    } as? R ?: throw IllegalStateException("$clazz is not a primitive type.")
}

internal fun YamlElement.toContent(): Any? {
    return when (this) {
        is YamlPrimitive -> this.content
        is YamlMap -> this.toContentMap()
        is YamlList -> this.toContentList()
    }
}
