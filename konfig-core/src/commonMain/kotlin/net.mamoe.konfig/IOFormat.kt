package net.mamoe.konfig

/*
import kotlinx.serialization.DeserializationStrategy
import kotlinx.serialization.SerialFormat
import kotlinx.serialization.SerializationStrategy

/**
 * The [SerialFormat] that supports streaming [Input]s and [Output]s.
 */
interface IOFormat : SerialFormat {
    /**
     * Dump the value to [Output] using [serializer]
     *
     * **Note:** It's callers responsibility to close [output]
     */
    fun <T> dumpTo(serializer: SerializationStrategy<T>, value: T, output: OutputStream)

    /**
     * Load the value from an [Input] using [deserializer].
     *
     * **Note:** It's callers responsibility to close [input]
     */
    fun <T> load(deserializer: DeserializationStrategy<T>, input: InputStream): T
}*/