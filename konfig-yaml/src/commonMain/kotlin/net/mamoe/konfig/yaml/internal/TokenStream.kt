package net.mamoe.konfig.yaml.internal

import net.mamoe.konfig.CharInputStream
import net.mamoe.konfig.charInputStream
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.InvocationKind
import kotlin.contracts.contract
import kotlin.jvm.JvmField

@Suppress("ClassName", "PropertyName")
internal sealed class Token(val value: Char, val canStopUnquotedString: Boolean) {
    override fun toString(): String {
        return this::class.simpleName + "('$value')"
    }

    object COMMA : Token(',', true)
    object COLON : Token(':', true)
    // object ObjectCast : TokenClass('!')

    object MULTILINE_LIST_FLAG : Token('-', false)

    object LIST_BEGIN : Token('[', true)
    object LIST_END : Token(']', true)

    object MAP_BEGIN : Token('{', true)
    object MAP_END : Token('}', true)

    sealed class LINE_SEPARATOR(value: Char) : Token(value, true) {
        object N : LINE_SEPARATOR('\n') {
            override fun toString(): String {
                return "LINE_SEPARATOR.N(\\n)"
            }
        }

        object R : LINE_SEPARATOR('\r') {
            override fun toString(): String {
                return "LINE_SEPARATOR.R(\\r)"
            }
        }
    }

    object SPACE : Token(' ', false)

    object MULTILINE_STRING_FLAG : Token('|', false)
    // object ESCAPE : Token('\\', false)


    object STRING : Token(' ', false) {
        override fun toString(): String {
            return "STRING"
        }
    } // STUB

    object STRING_NULL : Token(' ', false) {
        override fun toString(): String {
            return "STRING_NULL"
        }
    } // STUB

    companion object {
        // char-TokenClass mapping
        lateinit var values: Array<Token?>

        operator fun get(char: Char): Token? =
            if (char.toInt() > values.lastIndex) null else values[char.toInt()]
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
        Token.LINE_SEPARATOR.N,
        Token.LINE_SEPARATOR.R,
        Token.SPACE,
        Token.MULTILINE_STRING_FLAG,
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
    @JvmField val source: CharInputStream
) {
    init {
        __init
    }

    @JvmField
    var currentToken: Token? = null

    @JvmField
    var currentIndent: Int = 0

    /**
     * The buffer for prepared [String] values
     */
    @JvmField
    var strBuff: String? = null

    @JvmField
    var strQuoted: Boolean = false

    /**
     * Tokens that should be used one more time
     */
    @JvmField
    val reuseTokenStack: MutableList<Any> = ArrayList(8)

    /**
     * Used only in [readUnquotedString]
     */
    @JvmField
    var escapeBuff = CharArray(16)

    fun reuseToken(token: Token) {
        reuseTokenStack.add(token)
    }

    fun reuseToken(string: String) {
        reuseTokenStack.add(string)
    }


    /**
     * Calls [nextToken] and returns its result which isn't a [Token.LINE_SEPARATOR]
     *
     * Returns [END_OF_FILE] if end of file is reached
     *
     * If [Token.STRING] is returned, [strBuff] will also be updated
     */
    fun nextTokenSkippingEmptyLine(endingTokens: Array<out Token>): Token? {
        loop@ while (true) {
            return when (val token = nextToken(endingTokens)) {
                END_OF_FILE -> null
                is Token.LINE_SEPARATOR -> continue@loop
                else -> token
            }
        }
    }

    /**
     * Pop the last element of [reuseTokenStack] if possible, or read a token or a string from [source]
     *
     * Returns [END_OF_FILE] if end of file is reached
     *
     * If [Token.STRING] is returned, [strBuff] will also be updated
     */
    fun nextToken(endingTokens: Array<out Token>): Token? {
        if (reuseTokenStack.isNotEmpty()) {
            val reuse = reuseTokenStack.removeAt(reuseTokenStack.lastIndex)
            if (reuse is String) {
                currentToken = Token.STRING
                strBuff = reuse
            } else {
                currentToken = reuse as Token
            }
            return currentToken
        }

        currentIndent = 0
        whileNotEOF { char ->
            when (val token = Token[char]) {
                null -> {
                    prepareStringAndNextToken(char, endingTokens)
                    currentToken = Token.STRING
                    return Token.STRING
                }
                is Token.LINE_SEPARATOR -> {
                    currentIndent = 0
                }
                Token.SPACE -> {
                    currentIndent++
                }
                else -> {
                    currentToken = token
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
    private fun prepareStringAndNextToken(begin: Char, endingTokens: Array<out Token>) = when (begin) {
        SINGLE_QUOTATION -> {
            strQuoted = true
            readSingleQuotedString()
        }
        DOUBLE_QUOTATION -> {
            strQuoted = true
            readDoubleQuotedString()
        }
        else -> { // unquoted
            strQuoted = false
            readUnquotedString(begin, endingTokens)
        }
    }
}

internal fun String.asTokenStream(): TokenStream = TokenStream(this.charInputStream())

internal const val SINGLE_QUOTATION = '\''
internal const val DOUBLE_QUOTATION = '"'

@OptIn(ExperimentalContracts::class)
internal inline fun TokenStream.whileNotEOF(block: (char: Char) -> Unit): Nothing? {
    contract {
        callsInPlace(block, InvocationKind.UNKNOWN)
    }
    while (!source.endOfInput) {
        block(source.read())
    }
    return null
}

@OptIn(ExperimentalContracts::class)
internal inline fun TokenStream.whileNotEOFWithBegin(begin: Char, block: (char: Char) -> Unit): Nothing? {
    contract {
        callsInPlace(block, InvocationKind.AT_LEAST_ONCE)
    }
    block(begin)
    while (!source.endOfInput) {
        block(source.read())
    }
    return null
}

/**
 * Use only when creating contextual exception message.
 */
internal fun TokenStream.readUntilNewLine(limit: Int): String {
    return buildString {
        whileNotEOF { char ->
            if (length >= limit) {
                append("...")
                return@buildString
            }
            if (char == '\n' || char == '\r') {
                reuseToken(Token[char]!!)
                return@buildString
            }
            append(char)
        }
    }
}