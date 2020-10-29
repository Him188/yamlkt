@file:Suppress("unused")

package net.mamoe.yamlkt

import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.encoding.CompositeEncoder
import net.mamoe.yamlkt.YamlConfiguration.MapSerialization
import kotlin.DeprecationLevel.ERROR
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract
import kotlin.jvm.JvmField
import kotlin.jvm.JvmName
import kotlin.jvm.JvmStatic

/**
 * The builder for [YamlConfiguration].
 */
public class YamlConfigurationBuilder {

    // decoding

    /**
     * Recognize `null` as `0`, `0.0`, `0f`, "", '', or `false`
     */
    @JvmField
    public var nonStrictNullability: Boolean = false

    /**
     * Allows to perform number casting that may lose precision, e.g. from a [Double] to a [Int].
     *
     * This will also affect boolean casting, e.g. `1.0` can be converted to `true`, and `0.0` can be converted to `false`
     */
    @JvmField
    public var nonStrictNumber: Boolean = false

    // encoding

    /**
     * Whether the format should encode values that are equal to the default values.
     * @see CompositeEncoder.shouldEncodeElementDefault for more information
     */
    @JvmField
    public var encodeDefaultValues: Boolean = true

    /**
     * Encode all strings with quotation.
     */
    @JvmField
    public var stringSerialization: YamlConfiguration.StringSerialization = YamlConfiguration.StringSerialization.NONE

    /**
     * The value set for [Boolean] serialization.
     * Default: serialize [Boolean] as "on" or "off"
     */
    @JvmField
    public var booleanSerialization: YamlConfiguration.BooleanSerialization = YamlConfiguration.BooleanSerialization.TRUE_FALSE

    /**
     * The value set for `null` serialization.
     * Default: serialize `null` as "null"
     */
    @JvmField
    public var nullSerialization: YamlConfiguration.NullSerialization = YamlConfiguration.NullSerialization.NULL

    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s
     */
    @JvmField
    public var mapSerialization: MapSerialization = MapSerialization.BLOCK_MAP

    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s.
     *
     * Comments are supported only when this is set to [MapSerialization.BLOCK_MAP]
     */
    @JvmField
    public var classSerialization: MapSerialization = MapSerialization.BLOCK_MAP

    /**
     * The format for [StructureKind.LIST]s
     */
    @JvmField
    public var listSerialization: YamlConfiguration.ListSerialization = YamlConfiguration.ListSerialization.AUTO

    /**
     * Builds a [YamlConfiguration].
     */
    @Suppress("DEPRECATION_ERROR")
    public fun build(): YamlConfiguration = YamlConfiguration(
        nonStrictNullability,
        nonStrictNumber,
        encodeDefaultValues,
        stringSerialization,
        booleanSerialization,
        nullSerialization,
        mapSerialization,
        classSerialization,
        listSerialization
    )
}

/**
 * Builds a [YamlConfiguration] with [YamlConfigurationBuilder]
 */
public inline fun YamlConfiguration(apply: YamlConfigurationBuilder.() -> Unit): YamlConfiguration {
    contract { callsInPlace(apply, InvocationKind.EXACTLY_ONCE) }
    return YamlConfigurationBuilder().apply(apply).build()
}

/**
 * Configurations to [Yaml]
 *
 * @see YamlConfigurationBuilder
 */
@Suppress("ClassName")
public data class YamlConfiguration
@Deprecated("Please use YamlConfiguration builder dsl instead.", level = ERROR, replaceWith = ReplaceWith("YamlConfiguration {}"))
constructor(

    // decoding

    /**
     * Recognize `null` as `0`, `0.0`, `0f`, "", '', or `false`
     */
    @JvmField public val nonStrictNullability: Boolean = false,
    /**
     * Allows to perform number casting that may lose precision, e.g. from a [Double] to a [Int].
     *
     * This will also affect boolean casting, e.g. `1.0` can be converted to `true`, and `0.0` can be converted to `false`
     */
    @JvmField public val nonStrictNumber: Boolean = false,

    // encoding

    /**
     * Whether the format should encode values that are equal to the default values.
     * @see CompositeEncoder.shouldEncodeElementDefault for more information
     */
    @JvmField public val encodeDefaultValues: Boolean = true,
    /**
     * Encode all strings with quotation.
     */
    @JvmField public val stringSerialization: StringSerialization = StringSerialization.NONE,
    /**
     * The value set for [Boolean] serialization.
     * Default: serialize [Boolean] as "on" or "off"
     */
    @JvmField public val booleanSerialization: BooleanSerialization = BooleanSerialization.TRUE_FALSE,
    /**
     * The value set for `null` serialization.
     * Default: serialize `null` as "null"
     */
    @JvmField public val nullSerialization: NullSerialization = NullSerialization.NULL,
    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s
     */
    @JvmField public val mapSerialization: MapSerialization = MapSerialization.BLOCK_MAP,
    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s.
     *
     * Comments are supported only when this is set to [MapSerialization.BLOCK_MAP]
     */
    @JvmField public val classSerialization: MapSerialization = MapSerialization.BLOCK_MAP,
    /**
     * The format for [StructureKind.LIST]s
     */
    @JvmField public val listSerialization: ListSerialization = ListSerialization.AUTO
) {
    /**
     * The suggested format for [String] serialization.
     *
     * [String] isn't always serialized in this format, depending on the content.
     */
    public enum class StringSerialization {
        /**
         * Quote all [String]s with `'`
         *
         * If a value can't be serialized using single quotation, it will be in [DOUBLE_QUOTATION]
         */
        SINGLE_QUOTATION,

        /**
         * Quote all [String]s with `"`
         *
         * Char escaping is fully available in strings in this format. Strings can also have line breaks, as:
         * ```yaml
         * test: "YamlKt is a
         * YAML \u0123parser\u0125
         * "
         * ```
         * The value of deserialized 'test' is:
         * ```
         * YamlKt is a
         * YAML {parser}
         * ```
         */
        DOUBLE_QUOTATION,

        /**
         * Don't quote any [String] as mush as possible.
         *
         * Will still use [SINGLE_QUOTATION] if chars can't be serialized without escape.
         */
        NONE,

        /**
         * Automatically choose the best format.
         *
         * First [NONE], then [SINGLE_QUOTATION], finally [DOUBLE_QUOTATION].
         */
        BEST_PERFORMANCE
    }

    /**
     * The value set for [Boolean] serialization
     */
    public abstract class BooleanSerialization(
        public val trueValue: String,
        public val falseValue: String
    ) {
        /**
         * Serialize [Boolean] as `true` or `false`
         */
        public object TRUE_FALSE : BooleanSerialization("true", "false")

        /**
         * Serialize [Boolean] as `TRUE` or `FALSE`
         */
        public object TRUE_FALSE_UPPERCASE : BooleanSerialization("TRUE", "FALSE")

        @JvmName("getValue")
        public operator fun get(value: Boolean): String = if (value) trueValue else falseValue
    }

    /**
     * The value set for `null` serialization
     */
    public abstract class NullSerialization(
        public val value: String
    ) {
        /**
         * Serialize `null` as `~`
         */
        public object TILDE : NullSerialization("~")

        /**
         * Serialize `null` as `null`
         */
        public object NULL : NullSerialization("null")

        /**
         * Serialize `null` as `NULL`
         */
        public object NULL_UPPERCASE : NullSerialization("NULL")
    }

    /**
     * The serial format for [StructureKind.MAP]s and [StructureKind.CLASS]s
     */
    public enum class MapSerialization {
        /**
         * Serialize [StructureKind.MAP]s and [StructureKind.CLASS]s as block maps.
         *
         * YAML text example:
         * ```yaml
         * name: Alice
         * age: 20
         * ```
         *
         * For classes, [BLOCK_MAP] enabled the comment feature, see [Comment] for details.
         */
        BLOCK_MAP,

        /**
         * Serialize [StructureKind.MAP]s and [StructureKind.CLASS]s as flow maps
         *
         * YAML text example:
         * ```yaml
         * { name: Alice, age: 20 }
         * ```
         */
        FLOW_MAP
    }

    /**
     * The serial format for [StructureKind.LIST]s.
     */
    public enum class ListSerialization {
        /**
         * Force serialize [StructureKind.LIST]s as block(multiline) sequences
         *
         * YAML text example:
         * ```yaml
         * - orange
         * - apple
         * - banana
         * ```
         */
        BLOCK_SEQUENCE,

        /**
         * Force serialize [StructureKind.LIST]s as flow sequences
         *
         * YAML text example:
         * ```yaml
         * [orange, apple, banana]
         * ```
         */
        FLOW_SEQUENCE,

        /**
         * Automatically chose the format depending on the type of elements.
         *
         * If the element is [PrimitiveKind], it is then serialized in [FLOW_SEQUENCE],
         * otherwise in [BLOCK_SEQUENCE].
         *
         * YAML text example:
         * ```yaml
         * - [orange, apple, banana]
         * - [java, kotlin, golang]
         * ```
         */
        AUTO
    }

    public companion object {
        /**
         * The [YamlConfiguration] instance using all default values.
         */
        @JvmStatic
        public val Default: YamlConfiguration = @Suppress("DEPRECATION_ERROR") YamlConfiguration()
    }
}

