@file:JvmMultifileClass
@file:JvmName("YamlUtils")

package net.mamoe.yamlkt.internal

import kotlinx.serialization.descriptors.SerialDescriptor
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName
import kotlin.jvm.JvmStatic
import kotlin.native.concurrent.ThreadLocal


@ThreadLocal
internal object Debugging {
    internal var enabled: Boolean = false

    var logIndent: Int = 0

    @JvmStatic
    private var decodeValue: Int = 0

    @JvmStatic
    fun beginStructure(descriptor: SerialDescriptor, decoder: YamlDecoder.AbstractDecoder?) {
        if (!enabled) return
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
    fun endStructure() {
        if (!enabled) return
        logIndent -= 4
        println(space(logIndent) + "}")
    }

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

internal fun String?.debuggingLogDecoder(descriptor: SerialDescriptor?, index: Int): String? {
    Debugging.logDecode(descriptor, index, this ?: "<null>")
    return this
}
