package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.SerialDescriptor


@Suppress("ConstantConditionIf")
internal object Debugging {
    internal const val enabled: Boolean = false
    var logIndent = 0

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

    fun endStructure(descriptor: SerialDescriptor?) {
        if (!enabled) return
        logIndent -= 4
        println(space(logIndent) + "}")
    }

    private var decodeValue = 0
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


    private fun space(count: Int) = " ".repeat(count.coerceAtLeast(0))
}

@Suppress("NOTHING_TO_INLINE")
internal inline fun String?.debuggingLogDecoder(descriptor: SerialDescriptor?, index: Int): String? {
    Debugging.logDecode(descriptor, index, this ?: "<null>")
    return this
}
