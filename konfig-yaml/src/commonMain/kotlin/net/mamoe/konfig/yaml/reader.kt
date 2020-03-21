package net.mamoe.konfig.yaml

import kotlinx.serialization.InternalSerializationApi
import net.mamoe.konfig.CharStream
import net.mamoe.konfig.readAhead
import net.mamoe.konfig.yaml.TokenClass.COLON
import net.mamoe.konfig.yaml.TokenClass.COMMA
import net.mamoe.konfig.yaml.TokenClass.QUOTATION.DOUBLE_QUOTATION
import net.mamoe.konfig.yaml.TokenClass.QUOTATION.SINGLE_QUOTATION

@Suppress("ClassName", "PropertyName")
internal sealed class TokenClass(val value: Char) {
    final override fun toString(): String {
        return this::class.simpleName + "('$value')"
    }

    object COMMA : TokenClass(',')

    object PERIOD : TokenClass('.')

    object COLON : TokenClass(':')

    sealed class QUOTATION(value: Char) : TokenClass(value) {
        abstract val ESCAPE_PATTERN: CharArray

        object SINGLE_QUOTATION : QUOTATION('\'') {
            override val ESCAPE_PATTERN = charArrayOf('\"', '\'')
        }

        object DOUBLE_QUOTATION : QUOTATION('"') {
            override val ESCAPE_PATTERN = charArrayOf('\"', '\'')
        }
    }

    object PARENTHESES_LEFT : TokenClass('(')
    object PARENTHESES_RIGHT : TokenClass('(')

    object SQUARE_BRACKET_LEFT : TokenClass('[')
    object SQUARE_BRACKET_RIGHT : TokenClass(']')

    object CURLY_BRACKET_LEFT : TokenClass('{')
    object CURLY_BRACKET_RIGHT : TokenClass('}')

    sealed class LINE_SEPARATOR(value: Char) : TokenClass(value) {
        object N : LINE_SEPARATOR('\n')
        object R : LINE_SEPARATOR('\r')

        companion object {
            val values: CharArray by lazy {
                charArrayOf(N.value, R.value)
            }
        }
    }

    object MULTILINE : TokenClass('|')
    ;

    companion object {
        val values: Array<TokenClass> = arrayOf(
            COMMA, PERIOD, COLON, SINGLE_QUOTATION, DOUBLE_QUOTATION,
            PARENTHESES_LEFT, PARENTHESES_RIGHT,
            SQUARE_BRACKET_RIGHT, SQUARE_BRACKET_LEFT,
            CURLY_BRACKET_RIGHT,
            CURLY_BRACKET_LEFT,
            LINE_SEPARATOR.N,
            LINE_SEPARATOR.R,
            MULTILINE
        )

        fun findByValue(value: Char): TokenClass? = values.firstOrNull { it.value == value }

        fun isValueEnd(value: Char): Boolean {
            return when (value) {
                DOUBLE_QUOTATION.value,
                SINGLE_QUOTATION.value,
                COMMA.value,
                LINE_SEPARATOR.N.value,
                LINE_SEPARATOR.R.value,
                SQUARE_BRACKET_RIGHT.value
                -> true

                else -> false
            }
        }
    }
}

/**
 * Configurations to [Yaml]
 */
data class YamlConfiguration(
    /**
     * Recognize `null` as `0`, `0.0`, `0f`, "", '', or `false`
     */
    val nonStrictNullability: Boolean = false,
    /**
     * Allows to perform number casting that may lose precision, e.g. from a [Double] to a [Int]
     * TODO
     */
    val nonStrictNumber: Boolean = false,
    /**
     * Quote all [String]s
     */
    val forceQuotation: Boolean = false
)

@OptIn(InternalSerializationApi::class)
internal class YamlReader(
    private val input: CharStream
) : CharStream by input {
    private var currentToken: IndentedToken = IndentedToken(0)

    /**
     * null means EOF
     */
    private fun nextNotSpaceOrNull(): IndentedToken? {
        var spaceCount = 0
        input.readAhead {
            if (it != ' ') return currentToken.apply {
                _indentSpaceCount = spaceCount
                _token = it
            } else spaceCount++
        }
        return null
    }

    class IndentedToken(
        internal var _indentSpaceCount: Int
    ) {
        override fun toString(): String {
            return "Token($token, indent=$indentSpaceCount)"
        }

        internal var _token: Any? = null
            set(value) {
                check(value == null || value is Char || value is TokenClass) { "internal error: illegal token: $value" }
                field = value
            }

        val indentSpaceCount: Int get() = _indentSpaceCount
        val token: Any? get() = _token
    }

    /**
     * Reads the next token. Next non-blank value must be a token or null is returned
     *
     * @return `null` if EOF, or [TokenClass] if the char is a token, or [Char] otherwise.
     */
    fun nextTokenOrNull(): IndentedToken? =
        nextNotSpaceOrNull()?.let { indentedToken ->
            indentedToken.apply {
                val find = TokenClass.findByValue(indentedToken._token as Char)
                indentedToken._token = find ?: indentedToken._token
            }
        }

    class IndentedValue(
        internal var _indentSpaceCount: Int,
        internal var _value: String
    ) {
        val indentSpaceCount: Int get() = _indentSpaceCount
        val value: String get() = _value
    }

    private val indentedValueTemp = IndentedValue(0, "")

    /**
     * Directly read next string value. Automatically solve quotations and escaping.
     *
     * @return `null` if EOF
     */
    fun nextValue(): IndentedValue? {
        if (currentToken.token == null) {
            nextTokenOrNull() // try start
        }
        return when (val currentTokenToken = currentToken.token) {
            is Char -> {
                indentedValueTemp.apply {
                    _indentSpaceCount = 0
                    _value = currentTokenToken + readStringUntil(endMatcher = {
                        it in TokenClass.LINE_SEPARATOR.values || it == COLON.value
                        // TODO: 2020/3/21 rewrite, 区分 `nextStringUntilColon`
                    })
                }
            }
            null -> null
            COLON, // "": "" // map element
            COMMA,
            TokenClass.CURLY_BRACKET_LEFT, // [1, 2, 3] // array
            TokenClass.SQUARE_BRACKET_LEFT -> {
                val indentedToken = nextTokenOrNull()
                when (val next = indentedToken?.token) {
                    is TokenClass.QUOTATION -> {
                        // quoted string doesn't need to trim
                        var doTrimStart = false
                        indentedValueTemp.apply {
                            _indentSpaceCount = indentedToken.indentSpaceCount
                            _value = readStringUntil(*next.ESCAPE_PATTERN, filterNot = {
                                if (doTrimStart) {
                                    if (it == ' ') true
                                    else {
                                        doTrimStart = false
                                        false
                                    }
                                } else false
                            }, end = next.value)
                        }
                    }
                    is TokenClass -> error("required a value but found token $next")
                    is Char -> {
                        indentedValueTemp.apply {
                            _indentSpaceCount = indentedToken.indentSpaceCount
                            _value = readStringUntil {
                                if (it in TokenClass.LINE_SEPARATOR.values) {
                                    return@readStringUntil true
                                }
                                TokenClass.findByValue(it)?.let { token ->
                                    error("Unexpected token $token when reading a value")
                                }
                                false
                            }.trim() // unquoted string should be trimmed
                        }
                    }
                    null -> null
                    else -> error("internal error: unexpected return value: ${next::class.simpleName} from nextTokenOrNull")
                }
            }

            is TokenClass.QUOTATION -> {// " " or ' '
                val indentedToken = nextTokenOrNull()
                when (val next = indentedToken?.token) {
                    null -> null
                    currentToken -> indentedValueTemp.apply {
                        _indentSpaceCount = indentedToken.indentSpaceCount
                        _value = ""
                    } // same quotation, which means a quotation block: `""` or `''`
                    is TokenClass -> error("required a value but found token $next")
                    is Char -> {
                        indentedValueTemp.apply {
                            _indentSpaceCount = indentedToken.indentSpaceCount
                            _value = readStringUntil {
                                if (it in TokenClass.LINE_SEPARATOR.values) {
                                    return@readStringUntil true
                                }
                                TokenClass.findByValue(it)?.let { token ->
                                    error("Unexpected token $token when reading a value")
                                }
                                false
                            }.trim() // unquoted string should be trimmed
                        }
                    }
                    else -> error("internal error: unexpected return value: ${next::class.simpleName} from nextTokenOrNull")
                }
            }
            else -> {
                error("unexpected token: ${currentToken.token}")
            }
        }
    }
}

/**
 * Read a [String], decoding escapes
 */
internal fun CharStream.readStringUntil(vararg escape: Char, filterNot: (Char) -> Boolean = { false }, end: Char): String {
    return readStringUntil(*escape, filterNot = filterNot) { it == end }
}

// TODO: 2020/3/21 重构 readString, 直接写成固定的几个读取模式

internal inline fun CharStream.readStringUntil(vararg escape: Char, filterNot: (Char) -> Boolean = { false }, endMatcher: (Char) -> Boolean): String {
    var isEscape = false
    return buildString {
        readAhead {
            when {
                isEscape -> {
                    if (it in escape) {
                        append(it)
                        isEscape = false
                    } else error("unsupported escape: '$it'")
                }
                escape.isNotEmpty() && it == '\\' -> isEscape = true
                endMatcher(it) -> return@buildString
                else -> {
                    if (!filterNot(it)) {
                        append(it)
                    }
                }
            }
        }
    }
}