@file:JvmMultifileClass
@file:JvmName("YamlUtils")

package net.mamoe.yamlkt.internal

import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract
import kotlin.jvm.JvmField
import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName

@Suppress("ClassName", "PropertyName")
internal enum class Token(val value: Char) {
    COMMA(','),
    COLON(':'),

    MULTILINE_LIST_FLAG('-'),

    LIST_BEGIN('['),
    LIST_END(']'),

    MAP_BEGIN('{'),
    MAP_END('}'),


    STRING(' '),
    STRING_NULL(' ');

    companion object {
        // char-TokenClass mapping
        @JvmField
        var values: Array<Token?>? = null

        private const val valuesLastIndex: Char = 125.toChar()

        @Suppress("NOTHING_TO_INLINE")
        inline operator fun get(char: Char): Token? =
            if (char > valuesLastIndex) null else values!![char.toInt()]
    }
}

// https://youtrack.jetbrains.com/issue/KT-38383
@Suppress("ObjectPropertyName")
internal val __init = run {
    val all = arrayOf(
        Token.COMMA,
        Token.COLON,
        Token.LIST_END, Token.LIST_BEGIN,
        Token.MAP_END, Token.MAP_BEGIN,
        Token.MULTILINE_LIST_FLAG
    )

    Token.values = arrayOfNulls<Token>(
        all.map { it.value.toInt() }.maxOrNull()!! + 1
    ).apply {
        for (tokenClass in all) {
            set(tokenClass.value.toInt(), tokenClass)
        }
    }
}

internal inline val END_OF_FILE: Nothing? get() = null

/**
 * Resizable [CharArray], keep the size in a whole process.
 */
internal open class StringBufHolder {

    /**
     * Only for internal use
     */
    private var _stringBuf: CharArray = CharArray(32)

    @Suppress("PropertyName")
    protected var _stringLength: Int = 0

    private fun incStringBuf() {
        _stringBuf = _stringBuf.copyOf(_stringBuf.size + _stringBuf.size.ushr(1))
    }

    fun takeStringBuf(): String {
        return this._stringBuf.concatToString(0, 0 + _stringLength).also {
            _stringLength = 0
            // println(it)
        }
    }

    fun takeStringBufTrimEnd(): String {
        for (i in _stringLength - 1 downTo 0) {
            if (_stringBuf[i] != ' ') {
                _stringLength = 0
                return _stringBuf.concatToString(0, 0 + (i + 1))
            }
        }
        return ""
    }

    fun append(c: Char) {
        if (_stringLength == _stringBuf.size) incStringBuf()
        _stringBuf[_stringLength++] = c
    }

    fun append(source: String, startIndex: Int, endIndex: Int) {
        val length = endIndex - startIndex
        val requiredSize = _stringLength + length + 1
        while (_stringBuf.size < requiredSize) {
            incStringBuf()
        }
        for (i in 0..length) _stringBuf[_stringLength++] = source[startIndex + i]
    }
}

/**
 * The stream of [Token]s and [String]s
 *
 * ### Example
 * For input YAML string
 * ```yaml
 * list:
 *   - a
 *   - b
 * ```
 * This stream provides a sequence of values(whitespaces omitted):
 * `"list"`, [Token.COLON], [Token.MULTILINE_LIST_FLAG], `"a"`, [Token.MULTILINE_LIST_FLAG], `"b"`
 */
internal class TokenStream(
    @JvmField val source: String
) : StringBufHolder() {
    @JvmField
    var cur: Int = 0

    init {
        __init
    }

    @JvmField
    var currentIndent: Int = 0

    /**
     * The buffer for prepared [String] values
     */
    @JvmField
    var strBuff: String? = null

    /**
     * Whether the current string is quoted
     */
    @JvmField
    var quoted: Boolean = false

    inline val endOfInput: Boolean get() = cur == source.length

    @JvmField
    var escapeCount = 0


    fun subSourceTrimEnd(offset: Int, endIndex: Int): String {
        for (i in endIndex - 1 downTo offset) {
            if (source[i] != ' ') {
                return source.substring(offset, i + 1)
            }
        }
        return ""
    }

    // region escape buf
    fun flushEsc() {
        if (escapeCount == 0) {
            return
        }
        append(HexConverter.hexToLong(escapeBuff, 0, escapeCount).toInt().toChar())
        escapeCount = 0
    }

    /**
     * Used only in [readUnquotedString]
     */
    @JvmField
    val escapeBuff = CharArray(16)

    fun appendEsc(c: Char) {
        escapeBuff[escapeCount++] = c
        if (escapeCount == 4) {
            flushEsc()
        }
    }
    // endregion

    /**
     * Tokens that should be used one more time
     */
    private val reuseTokenStack: Stack<Any> = Stack()

    fun reuseToken(token: Token) {
        reuseTokenStack.add(token)
    }

    fun reuseToken(string: String) {
        reuseTokenStack.add(string)
    }


    /**
     * Pop the last element of [reuseTokenStack] if possible, or read a token or a string from [source]
     *
     * Returns [END_OF_FILE] if end of file is reached
     *
     * If [Token.STRING] is returned, [strBuff] will also be updated
     */
    fun nextToken(stopOnComma: Boolean): Token? {
        val reuse = reuseTokenStack.popOrNull()
        if (reuse != null) {
            return if (reuse is String) {
                // currentToken = Token.STRING
                strBuff = reuse
                Token.STRING
            } else {
                reuse as Token
            }
        }

        //currentIndent = 0
        whileNotEOF { char ->
            when (char) {
                ' ' -> {
                    currentIndent++
                }
                ':' -> {
                    currentIndent++
                    return Token.COLON
                }
                '\n', '\r' -> {
                    currentIndent = 0
                }
                ',' -> {
                    currentIndent++
                    return Token.COMMA
                }
                '{' -> {
                    currentIndent++
                    return Token.MAP_BEGIN
                }
                '}' -> {
                    currentIndent++
                    return Token.MAP_END
                }
                '[' -> {
                    currentIndent++
                    return Token.LIST_BEGIN
                }
                ']' -> {
                    currentIndent++
                    return Token.LIST_END
                }
                '-' -> {
                    currentIndent++
                    return Token.MULTILINE_LIST_FLAG
                }
                '#' -> {
                    this.skipLine()
                    currentIndent = 0
                }
                else -> {
                    val str = prepareStringAndNextToken(stopOnComma, char) ?: return Token.STRING_NULL
                    this.strBuff = str
                    return Token.STRING
                }
            }
        }
        return null
    }

    /**
     * Reads quoted or unquoted string, escaping chars.
     * Stores the string to [strBuff].
     *
     * Always read a next token after the string being read, and adds to [reuseTokenStack]
     */
    private fun prepareStringAndNextToken(stopOnComma: Boolean, begin: Char) = when (begin) {
        SINGLE_QUOTATION_CHAR -> {
            quoted = true
            readSingleQuotedString()
        }
        DOUBLE_QUOTATION_CHAR -> {
            quoted = true
            readDoubleQuotedString()
        }
        else -> { // unquoted
            quoted = false
            readUnquotedString(stopOnComma, begin).optimizeNull()
        }
    }
}

internal const val SINGLE_QUOTATION_CHAR = '\''
internal const val DOUBLE_QUOTATION_CHAR = '"'

@OptIn(ExperimentalContracts::class)
internal inline fun TokenStream.whileNotEOF(block: (char: Char) -> Unit): Nothing? {
    contract {
        callsInPlace(block, InvocationKind.UNKNOWN)
    }
    while (!endOfInput) {
        block(source[cur++]) // don't change
    }
    return null
}

/**
 * Move [TokenStream.cur] to the last unsatisfying point
 */
@OptIn(ExperimentalContracts::class)
internal inline fun TokenStream.skipIf(crossinline block: (char: Char) -> Boolean) {
    contract {
        callsInPlace(block, InvocationKind.UNKNOWN)
    }
    while (!endOfInput) {
        if (block(source[cur])) {// don't change
            cur++
        } else {
            break
        }
    }
}

/**
 * Move [TokenStream.cur] to the last unsatisfying point
 */
@OptIn(ExperimentalContracts::class)
internal inline fun TokenStream.countSkipIf(crossinline block: (char: Char) -> Boolean): Int {
    contract {
        callsInPlace(block, InvocationKind.UNKNOWN)
    }
    val start = cur
    while (!endOfInput) {
        if (block(source[cur])) {// don't change
            cur++
        } else {
            break
        }
    }
    return cur - start
}

@OptIn(ExperimentalContracts::class)
internal inline fun TokenStream.whileNotEOFWithBegin(begin: Char, block: (char: Char) -> Unit): Nothing? {
    contract {
        callsInPlace(block, InvocationKind.AT_LEAST_ONCE)
    }
    block(begin)
    while (!endOfInput) {
        block(source[cur++])
    }
    return null
}


@Suppress("UNCHECKED_CAST")
private class Stack<T> {
    @JvmField
    var cur = 0

    @JvmField
    var currentSize = 64

    @JvmField
    var content: Array<Any?> = arrayOfNulls(currentSize)

    fun increase() {
        val new = content.size.let { it + it.shr(1) }
        currentSize = new
        content = content.copyOf(currentSize)
    }

    fun add(value: T) {
        if (cur == currentSize) {
            increase()
        }
        content[cur++] = value
    }

    fun popOrNull(): T? {
        if (cur == 0) {
            return null
        }
        return content[--cur] as T
    }
}
