package net.mamoe.konfig.yaml.internal

import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract
import kotlin.jvm.JvmField

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
        all.map { it.value.toInt() }.max()!! + 1
    ).apply {
        for (tokenClass in all) {
            set(tokenClass.value.toInt(), tokenClass)
        }
    }
}

internal inline val NOT_A_TOKEN: Nothing? get() = null
internal inline val END_OF_FILE: Nothing? get() = null

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
) {
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
     * Only for internal use
     */
    @JvmField
    var _stringBuf: CharArray = CharArray(32)

    @JvmField
    var cur: Int = 0

    inline val endOfInput: Boolean get() = cur == source.length

    @JvmField
    var _stringLength: Int = 0

    /**
     * Used only in [readUnquotedString]
     */
    @JvmField
    val escapeBuff = CharArray(16)

    @JvmField
    var escapeCount = 0

    private fun incStringBuf() {
        _stringBuf = _stringBuf.copyOf(_stringBuf.size + _stringBuf.size.ushr(1))
    }

    fun takeStringBuf(): String {
        return String(this._stringBuf, 0, _stringLength).also {
            _stringLength = 0
            // println(it)
        }
    }

    fun subStringBufTrimEnd(offset: Int, endIndex: Int): String {
        for (i in endIndex downTo 0) {
            if (source[i] != ' ') {
                return source.substring(offset, i + 1)
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

    fun flushEsc() {
        val requiredSize = _stringLength + escapeCount + 1
        while (_stringBuf.size < requiredSize) {
            incStringBuf()
        }
        escapeBuff.copyInto(_stringBuf, _stringLength, 0, escapeCount)
    }

    fun appendEsc(c: Char) {
        escapeBuff[escapeCount++] = c
    }

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
    fun nextToken(): Token? {
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
            when {
                char == ' ' -> {
                    currentIndent++
                }
                char == '\n' -> {
                    currentIndent = 0
                }
                else -> {
                    val token = Token[char]
                    if (token == null) {
                        val str = prepareStringAndNextToken(char) ?: return Token.STRING_NULL
                        this.strBuff = str
                        //  currentToken = Token.STRING
                        return Token.STRING
                    }
                    currentIndent++
                    return token
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
    private fun prepareStringAndNextToken(begin: Char) = when (begin) {
        SINGLE_QUOTATION -> {
            readSingleQuotedString()
        }
        DOUBLE_QUOTATION -> {
            readDoubleQuotedString()
        }
        else -> { // unquoted
            readUnquotedString(begin).optimizeNull()
        }
    }
}

internal fun String.asTokenStream(): TokenStream = TokenStream(this)

internal const val SINGLE_QUOTATION = '\''
internal const val DOUBLE_QUOTATION = '"'

@OptIn(ExperimentalContracts::class)
internal inline fun TokenStream.whileNotEOF(block: (char: Char) -> Unit): Nothing? {
    contract {
        callsInPlace(block, InvocationKind.UNKNOWN)
    }
    while (!endOfInput) {
        block(source[cur++])
    }
    return null
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
