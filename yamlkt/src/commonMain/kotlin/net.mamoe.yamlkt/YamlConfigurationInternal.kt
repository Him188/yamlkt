@file:Suppress("unused")

package net.mamoe.yamlkt

import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.StructureKind
import kotlinx.serialization.encoding.CompositeEncoder
import kotlinx.serialization.modules.SerializersModule
import net.mamoe.yamlkt.YamlBuilder.MapSerialization
import kotlin.jvm.JvmField

/**
 * The builder for [YamlConfigurationInternal].
 */
public class YamlBuilder internal constructor(
    conf: YamlConfigurationInternal
) {

    /**
     * @see SerializersModule
     */
    @JvmField
    public var serializersModule: SerializersModule = conf.serializersModule

    // decoding

    /**
     * Recognize `null` as `0`, `0.0`, `0f`, "", '', or `false`
     */
    @JvmField
    public var nonStrictNullability: Boolean = conf.nonStrictNullability

    /**
     * Allows to perform number casting that may lose precision, e.g. from a [Double] to a [Int].
     *
     * This will also affect boolean casting, e.g. `1.0` can be converted to `true`, and `0.0` can be converted to `false`
     */
    @JvmField
    public var nonStrictNumber: Boolean = conf.nonStrictNumber

    // encoding

    /**
     * Whether the format should encode values that are equal to the default values.
     * @see CompositeEncoder.shouldEncodeElementDefault for more information
     */
    @JvmField
    public var encodeDefaultValues: Boolean = conf.encodeDefaultValues

    /**
     * Configure how to serialize strings.
     */
    @JvmField
    public var stringSerialization: StringSerialization = conf.stringSerialization

    /**
     * Configure how to serialize chars
     * */
    @JvmField
    public var charSerialization: CharSerialization = conf.charSerialization

    /**
     * The value set for `null` serialization.
     * Default: serialize `null` as "null"
     */
    @JvmField
    public var nullSerialization: NullSerialization = conf.nullSerialization

    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s
     */
    @JvmField
    public var mapSerialization: MapSerialization = conf.mapSerialization

    /**
     * The format for [StructureKind.MAP]s and [StructureKind.CLASS]s.
     *
     * Comments are supported only when this is set to [MapSerialization.BLOCK_MAP]
     */
    @JvmField
    public var classSerialization: MapSerialization = conf.classSerialization

    /**
     * The format for [StructureKind.LIST]s
     */
    @JvmField
    public var listSerialization: ListSerialization = conf.listSerialization

    /**
     * The suggested format for [Char] serialization.
     *
     * [Char] isn't always serialized in this format, depending on the content.
     *
     * Some escape sequences of special characters will be processed as escaped characters _(such as '\n')_
     * */
    public enum class CharSerialization {
        /**
         * Quote all [Char]s with `'`
         *
         * If a value can't be serialized using single quotation, it will use [CHAR_DOUBLE_QUOTATION]
         */
        CHAR_SINGLE_QUOTATION,

        /**
         * Quote all [Char]s with `"`
         */
        CHAR_DOUBLE_QUOTATION,

        /**
         * Convert all [Char]s to their corresponding Unicode code points [Int]
         *
         * For example, the character 'A' will be converted to 65
         *
         * It will work like [Byte]
         */
        CHAR_UNICODE_CODE,

        /**
         * Directly use the character content of [Char]
         *
         * When escaping is necessary, it defaults to using [CHAR_SINGLE_QUOTATION]
         */
        NORMAL,
    }


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
     * The value for `null` serialization
     */
    public enum class NullSerialization(
        public val value: String
    ) {
        TILDE("~"),
        NULL("null"),
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


    @PublishedApi
    internal fun build(): YamlConfigurationInternal = YamlConfigurationInternal(
        serializersModule,
        nonStrictNullability,
        nonStrictNumber,
        encodeDefaultValues,
        stringSerialization,
        charSerialization,
        nullSerialization,
        mapSerialization,
        classSerialization,
        listSerialization
    )
}

internal class YamlConfigurationInternal internal constructor(
    @JvmField val serializersModule: SerializersModule = SerializersModule { },
    // decoding
    @JvmField val nonStrictNullability: Boolean = false,
    @JvmField val nonStrictNumber: Boolean = false,

    // encoding
    @JvmField val encodeDefaultValues: Boolean = true,
    @JvmField val stringSerialization: YamlBuilder.StringSerialization = YamlBuilder.StringSerialization.NONE,
    @JvmField val charSerialization: YamlBuilder.CharSerialization = YamlBuilder.CharSerialization.NORMAL,
    @JvmField val nullSerialization: YamlBuilder.NullSerialization = YamlBuilder.NullSerialization.NULL,
    @JvmField val mapSerialization: MapSerialization = MapSerialization.BLOCK_MAP,
    @JvmField val classSerialization: MapSerialization = MapSerialization.BLOCK_MAP,
    @JvmField val listSerialization: YamlBuilder.ListSerialization = YamlBuilder.ListSerialization.AUTO
)

