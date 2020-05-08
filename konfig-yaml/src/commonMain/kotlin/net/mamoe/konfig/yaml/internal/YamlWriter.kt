@file:JvmMultifileClass
@file:JvmName("KonfigYamlUtils")

@file:Suppress("NOTHING_TO_INLINE")

package net.mamoe.konfig.yaml.internal

import kotlin.jvm.JvmField
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName


internal const val INDENT_STRING = "  "

internal class YamlWriter(
    /**
     * Mostly delegated by a [StringBuilder]
     */
    output: Appendable
) : Appendable by output {
    @JvmField
    internal var level: Int = -1
    fun levelIncrease() {
        level++
    }

    fun levelDecrease() {
        level--
    }

    inline operator fun String.unaryPlus() {
        write(this)
    }

    inline operator fun Char.unaryPlus() {
        write(this)
    }
}

internal inline fun YamlWriter.write(char: Char) {
    append(char)
}

internal inline fun YamlWriter.writeln(char: Char) {
    append(char)
    writeln()
}

internal inline fun YamlWriter.writeln() {
    append('\n')
}

internal inline fun YamlWriter.write(chars: String) {
    append(chars)
}

internal inline fun YamlWriter.writeLine(line: YamlWriter.() -> Unit) {
    line()
    writeln()
}

internal inline fun YamlWriter.writeLineIndented(line: YamlWriter.() -> Unit) {
    writeIndent()
    line()
    writeln()
}

internal inline fun YamlWriter.writeln(chars: String) {
    append(chars)
    writeln()
}

internal inline fun YamlWriter.writelnIndented(chars: String) {
    writeIndented(chars)
    writeln()
}

internal inline fun YamlWriter.writeIndented(chars: String) {
    writeIndent()
    append(chars)
}

internal inline fun YamlWriter.writelnIndented(char: Char) {
    writeIndented(char)
    writeln()
}

internal inline fun YamlWriter.writeIndent() {
    repeat(level) {
        append(INDENT_STRING)
    }
}

internal inline fun YamlWriter.writeIndented(char: Char) {
    writeIndent()
    append(char)
}
