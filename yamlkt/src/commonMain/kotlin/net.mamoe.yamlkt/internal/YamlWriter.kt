@file:JvmMultifileClass
@file:JvmName("YamlUtils")

@file:Suppress("NOTHING_TO_INLINE")

package net.mamoe.yamlkt.internal

import kotlin.jvm.JvmField
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName


internal const val INDENT_STRING = "  "

internal class YamlWriter(
    /**
     * Mostly delegated by a [StringBuilder]
     */
    private val output: Appendable
) {
    @JvmField
    internal var level: Int = -1

    @JvmField
    internal var currentIndent = 0

    fun levelIncrease() {
        level++
    }

    fun levelDecrease() {
        level--
    }

    inline fun append(char: Char) {
        if (char == '\n') {
            currentIndent = 0
        } else currentIndent++
        output.append(char)
    }

    inline fun append(char: String) { // String doesn't matter indenting
        currentIndent += char.length
        output.append(char)
    }

    inline operator fun String.unaryPlus() {
        write(this)
    }

    inline operator fun Char.unaryPlus() {
        write(this)
    }

    internal val escapeBuf: StringBufHolder = StringBufHolder()
}

internal inline fun YamlWriter.write(char: Char) {
    append(char)
}

internal inline fun YamlWriter.writeln(char: Char) {
    write(char)
    writeln()
}

internal inline fun YamlWriter.writeln() {
    write('\n')
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
    write(chars)
    writeln()
}

internal inline fun YamlWriter.writelnIndented(chars: String) {
    writeIndented(chars)
    writeln()
}

internal inline fun YamlWriter.writeIndented(chars: String) {
    writeIndent()
    write(chars)
}

internal fun YamlWriter.writeIndentedSmart(chars: String) {
    val required = INDENT_STRING.length * level
    if (currentIndent > required) {
        error("Internal error: bad indent $currentIndent, expected no bigger than $required")
    }
    repeat(required - currentIndent) {
        append(' ')
    }
    write(chars)
}


internal inline fun YamlWriter.writelnIndented(char: Char) {
    writeIndented(char)
    writeln()
}

internal inline fun YamlWriter.writeIndent() {
    repeat(level) {
        write(INDENT_STRING)
    }
}

internal inline fun YamlWriter.writeIndented(char: Char) {
    writeIndent()
    write(char)
}
