package net.mamoe.konfig

import kotlinx.io.core.ByteReadPacket
import kotlinx.io.core.Input
import kotlinx.io.core.Output
import kotlinx.io.core.buildPacket
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerialFormat
import kotlinx.serialization.SerializationStrategy

/**
 * The [SerialFormat] that supports streaming [Input]s and [Output]s.
 */
@ExperimentalKonfigApi("Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0")
interface IOFormat : SerialFormat {
    /**
     * Dump the value to [Output] using [serializer]
     *
     * **Note:** It's callers responsibility to close [output]
     */
    fun <T> dumpTo(serializer: SerializationStrategy<T>, value: T, output: Output)

    /**
     * Load the value from an [Input] using [deserializer].
     *
     * **Note:** It's callers responsibility to close [input]
     */
    fun <T> load(deserializer: DeserializationStrategy<T>, input: Input): T
}

/**
 * Dump the value to an [ByteReadPacket] using [serializer]
 */
@ExperimentalKonfigApi("Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0")
fun <T> IOFormat.dump(serializer: SerializationStrategy<T>, value: T): ByteReadPacket {
    return buildPacket { dumpTo(serializer, value, this) }
}

@ExperimentalKonfigApi("Input from kotlinx-io is not stable, there is a huge API-incompatible change in kotlinx-io:0.2.0")
fun <T> Input.readSerializable(deserializer: DeserializationStrategy<T>, format: IOFormat): T {
    return format.load(deserializer, this)
}