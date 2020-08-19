package net.mamoe.yamlkt

import kotlinx.serialization.SerialInfo

/**
 * The *inlined comment* on a field.
 *
 * Comments are supported only in encoding, and are **ignored** while decoding.
 *
 * Comments are supported only for block maps. A typical commented block map is:
 * ```yaml
 * # The age of the person
 * age: 20
 * # The gender of the person
 * gender: male
 * ```
 * Therefore ensure you are using [YamlConfiguration.MapSerialization.BLOCK_MAP] for [YamlConfiguration.classSerialization], or use default configuration
 *
 *
 * Example:
 * ```
 * @Serializable
 * data class User(
 *   @Comment("The name of the user")
 *   val name: String = "value"
 * )
 * ```
 * Gives YAML text:
 * ```yaml
 * # The name of the user
 * name: "value"
 * ```
 */
@SerialInfo
@Target(AnnotationTarget.FIELD, AnnotationTarget.PROPERTY)
public annotation class Comment(
    /**
     * Lines of comments. It is converted by [String.trimIndent] and then separated by '\n'.
     *
     * ```
     * @Serializable
     * data class User(
     *   @Comment("""
     *   Line 1
     *   Line 2
     *   """)
     *   val name: String = "value"
     * )
     * ```
     * Gives YAML text:
     * ```
     * # Line 1
     * # Line 2
     * name: "value"
     * ```
     *
     * @suppress **WARNING**: This is experimental. [lines] might be changed to `vararg` if issue#836 from kotlinx.serialization is fixed.
     */
    public val lines: String
) //https://github.com/Kotlin/kotlinx.serialization/issues/836