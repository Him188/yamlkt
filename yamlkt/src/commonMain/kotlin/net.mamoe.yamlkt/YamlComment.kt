package net.mamoe.yamlkt

import kotlinx.serialization.SerialInfo

/**
 * The inline comment on a class or a field.
 *
 * Comments are supported only in encoding, and are ignored while decoding.
 *
 * Comments are supported only for block maps. A typical commented block map is:
 * ```
 * # The age of the person
 * age: 20
 * # The gender of the person
 * gender: male
 * ```
 * Therefore ensure you are using [YamlConfiguration.MapSerialization.BLOCK_MAP] for [YamlConfiguration.classSerialization]
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
 * gives yaml text:
 * ```yaml
 * # The name of the user
 * name: ""
 * ```
 *
 * @param lines '\n' is allowed to generate multi lines.
 */
@SerialInfo
@Target(AnnotationTarget.FIELD, AnnotationTarget.PROPERTY, AnnotationTarget.VALUE_PARAMETER)
annotation class Comment(val lines: String) //https://github.com/Kotlin/kotlinx.serialization/issues/836