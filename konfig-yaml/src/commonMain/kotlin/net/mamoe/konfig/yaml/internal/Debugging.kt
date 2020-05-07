package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.SerialDescriptor
import kotlin.jvm.JvmStatic


@Suppress("ConstantConditionIf")
internal object Debugging {
    internal const val enabled: Boolean = false

    @JvmStatic
    var logIndent = 0

    @JvmStatic
    fun beginStructure(descriptor: SerialDescriptor, decoder: YamlDecoder.AbstractDecoder?) {
        if (!enabled) return
        if (decoder == null) {
            println(space(logIndent) + "${descriptor.serialName} {")
        } else {
            val indent = if (decoder is YamlDecoder.IndentedDecoder) {
                "indented ${decoder.baseIndent} "
            } else ""
            println(space(logIndent) + "${descriptor.serialName} by ${decoder.name} $indent{")
        }
        logIndent += 4
    }

    @JvmStatic
    fun endStructure(descriptor: SerialDescriptor?) {
        if (!enabled) return
        logIndent -= 4
        println(space(logIndent) + "}")
    }

    @JvmStatic
    private var decodeValue = 0

    @JvmStatic
    fun logDecode(descriptor: SerialDescriptor?, index: Int, value: String) {
        if (!enabled) return
        if (descriptor == null) {
            if (decodeValue > 0) {
                println(" = $value")
                decodeValue--
            } else {
                print(space(logIndent) + value)
                decodeValue++
            }
        } else {
            println(space(logIndent) + "${descriptor.getElementName(index)}: $value")
        }
    }

    inline fun logCustom(message: () -> String) {
        if (!enabled) return
        println(space(logIndent) + message())
    }


    @JvmStatic
    private fun space(count: Int) = " ".repeat(count.coerceAtLeast(0))
}

@Suppress("NOTHING_TO_INLINE")
internal inline fun String?.debuggingLogDecoder(descriptor: SerialDescriptor?, index: Int): String? {
    Debugging.logDecode(descriptor, index, this ?: "<null>")
    return this
}
