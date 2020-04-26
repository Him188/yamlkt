package net.mamoe.konfig.yaml

/**
 * Class representing single YAML element.
 * Can be [YamlPrimitive], [YamlMap], [YamlList]
 */
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

////////////////////
//// PRIMITIVES ////
////////////////////

/**
 * Class representing YAML scalar (primitive) value.
 * Can be [YamlNull] or [YamlLiteral]
 */
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
data class YamlLiteral(
    override val content: String,
    /**
     * Determine whether this value is quoted.
     */
    val quoted: Boolean
) : YamlPrimitive()

/**
 * Class representing YAML `null` value.
 * "~" and "null" literals are read as [YamlNull].
 */
object YamlNull : YamlPrimitive() {
    override val content: Nothing? get() = null
}

//////////////
//// MAPS ////
//////////////

typealias YamlMapContent = Map<String, YamlElement>

/**
 * Class representing YAML map.
 */
class YamlMap(
    override val content: YamlMapContent
) : YamlElement(), Map<String, YamlElement> by content {
    override fun toString(): String = content.toYamlString()
}

/**
 * Joins this [YamlMapContent] to valid YAML [String] value.
 * Returns `"{age:12,name:huang}"` for example.
 */
fun Map<String, YamlElement>.toYamlString(): String {
    return this.entries.joinToString(
        separator = ",",
        prefix = "{",
        postfix = "}",
        transform = { (key, value) -> "$key:$value" }
    )
}


//////////////
//// MAPS ////
//////////////

/**
 * Class representing YAML lists.
 */
class YamlList(
    override val content: List<YamlElement>
) : YamlElement(), List<YamlElement> by content {
    override fun toString(): String = this.toYamlString()
}

/**
 * Joins this [List] to valid YAML [String] value.
 * Returns `"[foo, bar, test]"` for example.
 */
fun List<YamlElement>.toYamlString(): String {
    return this.joinToString(
        separator = ",",
        prefix = "[",
        postfix = "]"
    )
}