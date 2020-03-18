package net.mamoe.konfig

import kotlinx.io.core.ByteReadPacket
import kotlinx.io.core.Input
import kotlinx.io.core.Output
import kotlinx.io.core.buildPacket
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerialFormat
import kotlinx.serialization.SerializationStrategy

/**
 * The [SerialFormat] that supports streaming inputs and outputs.
 */
interface IOFormat : SerialFormat {
    /**
     * Dump the value to [Output] using [serializer]
     */
    fun <T> dumpTo(serializer: SerializationStrategy<T>, value: T, output: Output)

    /**
     * Load the value from an [Input] using [deserializer]
     */
    fun <T> load(deserializer: DeserializationStrategy<T>, input: Input): T
}

/**
 * Dump the value to an [ByteReadPacket] using [serializer]
 */
fun <T> IOFormat.dump(serializer: SerializationStrategy<T>, value: T): ByteReadPacket {
    return buildPacket { dumpTo(serializer, value, this) }
}