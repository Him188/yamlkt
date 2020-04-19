@file:Suppress("DELEGATED_MEMBER_HIDES_SUPERTYPE_OVERRIDE")

package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.SerialDescriptor
import kotlinx.serialization.SerializationException

open class YamlSerializationException : SerializationException {
    constructor(message: String) : super(message)
    constructor(message: String, cause: Throwable?) : super(message, cause)
}

class YamlUnexpectedNullException internal constructor(
    descriptor: SerialDescriptor?,
    index: Int? // -1 if null
) : YamlSerializationException(
    "unexpected null value " +
        "when reading property '${index.takeIf { it != -1 }?.let { descriptor?.getElementName(it) ?: "<unknown element indexed $index>" } ?: "<unknown element>"}' " +
        "for ${descriptor?.serialName ?: "<unknown descriptor>"} " +
        "you can enable `nonStrictNullability` to cast null to 0 or false."
)

class YamlIllegalNumberFormatException internal constructor(
    numberString: String,
    type: String,
    descriptor: SerialDescriptor?,
    index: Int?,
    cause: Throwable?
) : YamlSerializationException(
    "'$numberString' is not a valid $type " +
        "when reading property '${index?.let { descriptor?.getElementName(it) ?: "<unknown element indexed $index>" } ?: "<unknown element>"}' " +
        "for ${descriptor?.serialName ?: "<unknown descriptor>"}", cause
)