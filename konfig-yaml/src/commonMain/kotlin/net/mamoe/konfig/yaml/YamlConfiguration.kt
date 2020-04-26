@file:Suppress("unused")

package net.mamoe.konfig.yaml

import kotlinx.serialization.CompositeEncoder
import kotlin.jvm.JvmStatic
import kotlin.jvm.JvmSynthetic

/**
 * Configurations to [Yaml]
 */
@Suppress("ClassName")
data class YamlConfiguration(

    // decoding

    /**
     * Recognize `null` as `0`, `0.0`, `0f`, "", '', or `false`
     */
    val nonStrictNullability: Boolean = false,
    /**
     * Allows to perform number casting that may lose precision, e.g. from a [Double] to a [Int].
     *
     * This will also affect boolean casting, e.g. `1.0` can be converted to `true`, and `0.0` can be converted to `false`
     */
    val nonStrictNumber: Boolean = false,

    // encoding

    /**
     * Whether the format should encode values that are equal to the default values.
     * @see CompositeEncoder.shouldEncodeElementDefault for more information
     */
    val encodeDefaultValues: Boolean = false,
    /**
     * Encode all strings with quotation.
     */
    val stringSerialization: StringSerialization = StringSerialization.DOUBLE_QUOTATION,
    /**
     * The value set for [Boolean] serialization.
     * Default: serialize [Boolean] as "on" or "off"
     */
    val booleanSerialization: BooleanSerialization = BooleanSerialization.TRUE_FALSE,
    /**
     * The value set for `null` serialization.
     * Default: serialize `null` as "null"
     */
    val nullSerialization: NullSerialization = NullSerialization.NULL
) {
    /**
     * The value set for [String] serialization
     */
    enum class StringSerialization {
        /**
         * Quote all [String]s with `"`
         */
        SINGLE_QUOTATION,

        /**
         * Quote all [String]s with "'"
         */
        DOUBLE_QUOTATION,

        /**
         * Don't quote any [String].
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
         * Serialize [Boolean] as "on" or "off"
         */
        object ON_OFF : BooleanSerialization("on", "off")

        /**
         * Serialize [Boolean] as "true" or "false"
         */
        object TRUE_FALSE : BooleanSerialization("true", "false")

        /**
         * Serialize [Boolean] as "1" or "0"
         */
        object ONE_ZERO : BooleanSerialization("1", "0")
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
    }

    companion object {

        /**
         * Create a [YamlConfiguration] with default values and modify it using [block]
         */
        @JvmSynthetic
        @JvmStatic
        inline operator fun invoke(block: YamlConfiguration.() -> Unit): YamlConfiguration {
            return YamlConfiguration().apply(block)
        }
    }
}

