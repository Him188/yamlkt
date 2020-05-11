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
 *   @Comment("The name of the user", "Can be first name")
 *   val name: String = "value"
 * )
 * ```
 * gives yaml text:
 * ```yaml
 * # The name of the user
 * # Can be first name
 * value: ""
 * ```
 */
@SerialInfo
@Target(AnnotationTarget.FIELD, AnnotationTarget.PROPERTY)
@Repeatable
annotation class Comment(val line: String) // kotlin doesn't allow vararg as they have default values []