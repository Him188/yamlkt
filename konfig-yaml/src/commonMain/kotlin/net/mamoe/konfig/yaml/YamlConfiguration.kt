@file:Suppress("unused")

package net.mamoe.konfig.yaml

import kotlinx.serialization.CompositeEncoder
import kotlinx.serialization.PrimitiveKind
import kotlinx.serialization.StructureKind
import kotlin.jvm.JvmField
import kotlin.jvm.JvmName

/**
 * Configurations to [Yaml]
 */
@Suppress("ClassName")
data class YamlConfiguration(

    // decoding

    /**
     * Recognize `null` as `0`, `0.0`, `0f`, "", '', or `false`
     */
    @JvmField val nonStrictNullability: Boolean = false,
    /**
     * Allows to perform number casting that may lose precision, e.g. from a [Double] to a [Int].
     *
     * This will also affect boolean casting, e.g. `1.0` can be converted to `true`, and `0.0` can be converted to `false`
     */
    @JvmField val nonStrictNumber: Boolean = false,

    // encoding

    /**
     * Whether the format should encode values that are equal to the default values.
     * @see CompositeEncoder.shouldEncodeElementDefault for more information
     */
    @JvmField val encodeDefaultValues: Boolean = true,
    /**
     * Encode all strings with quotation.
     */
    @JvmField val stringSerialization: StringSerialization = StringSerialization.NONE,
    /**
     * The value set for [Boolean] serialization.
     * Default: serialize [Boolean] as "on" or "off"
     */
    @JvmField val booleanSerialization: BooleanSerialization = BooleanSerialization.TRUE_FALSE,
    /**
     * The value set for `null` serialization.
     * Default: serialize `null` as "null"
     */
    @JvmField val nullSerialization: NullSerialization = NullSerialization.NULL,
    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s
     */
    @JvmField val mapSerialization: MapSerialization = MapSerialization.BLOCK_MAP,
    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s
     */
    @JvmField val classSerialization: MapSerialization = MapSerialization.BLOCK_MAP,
    /**
     * The format for [StructureKind.LIST]s
     */
    @JvmField val listSerialization: ListSerialization = ListSerialization.AUTO
) {
    /**
     * The value set for [String] serialization
     */
    enum class StringSerialization {
        /**
         * Quote all [String]s with `'`
         *
         * Escaping is only available
         */
        SINGLE_QUOTATION,

        /**
         * Quote all [String]s with `"`
         *
         * Char escaping is fully available in strings in this format. Strings can also have line breaks, as:
         * ```yaml
         * test: "Konfig is a
         * YAML \u0123parser\u0125
         * "
         * ```
         * The value of deserialized 'test' is:
         * ```
         * Konfig is a
         * YAML {parser}
         * ```
         */
        DOUBLE_QUOTATION,

        /**
         * Don't quote any [String] as mush as possible.
         *
         * Will still use [SINGLE_QUOTATION] if chars can't be serialized without escape.
         */
        NONE
    }

    /**
     * The value set for [Boolean] serialization
     */
    abstract class BooleanSerialization(
        val trueValue: String,
        val falseValue: String
    ) {
        /**
         * Serialize [Boolean] as "true" or "false"
         */
        object TRUE_FALSE : BooleanSerialization("true", "false")

        /**
         * Serialize [Boolean] as "TRUE" or "FALSE"
         */
        object TRUE_FALSE_UPPERCASE : BooleanSerialization("TRUE", "FALSE")

        @JvmName("getValue")
        operator fun get(value: Boolean): String = if (value) trueValue else falseValue
    }

    /**
     * The value set for `null` serialization
     */
    abstract class NullSerialization(
        val value: String
    ) {
        /**
         * Serialize `null` as "~"
         */
        object TILDE : NullSerialization("~")

        /**
         * Serialize `null` as "null"
         */
        object NULL : NullSerialization("null")

        /**
         * Serialize `null` as "NULL"
         */
        object NULL_UPPERCASE : NullSerialization("NULL")
    }

    /**
     * The serial format for [StructureKind.MAP]s and [StructureKind.CLASS]s
     */
    enum class MapSerialization {
        /**
         * Serialize [StructureKind.MAP]s and [StructureKind.CLASS]s as block maps.
         *
         * YAML text example:
         * ```yaml
         * name: Alice
         * age: 20
         * ```
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
    enum class ListSerialization {
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
}

