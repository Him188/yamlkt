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
        companion object {
            val values: CharArray = charArrayOf(N.value, R.value)
        }

        object N : LINE_SEPARATOR('\n')
        object R : LINE_SEPARATOR('\r')
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
    private val tokenStack: MutableList<TokenClass> = ArrayList(8)
    private fun pushToken(token: TokenClass) {
        tokenStack.add(token)
    }

    private val currentToken: TokenClass
        get() = tokenStack.last()

    private val currentTokenOrNull: TokenClass?
        get() = tokenStack.lastOrNull()

    private fun popToken(): TokenClass {
        if (tokenStack.isEmpty()) error("tokenStack is empty")
        return tokenStack.removeAt(0)
    }

    /**
     * null means EOF
     */
    private fun nextNotSpaceOrNull(): Char? {
        input.readAhead { if (it != ' ') return it }
        return null
    }

    /**
     * Reads the next token. Next non-blank value must be a token or null is returned
     *
     * @return `null` if EOF, or [TokenClass] if the char is a token, or [Char] otherwise.
     */
    fun nextTokenOrNull(): Any? =
        nextNotSpaceOrNull()?.let { char ->
            TokenClass.findByValue(char) ?: char
        }

    fun nextValue(): String? = when (currentToken) {
        COLON, // "": "" // map element
        COMMA,
        TokenClass.CURLY_BRACKET_LEFT -> { // [1, 2, 3] // array
            when (val next = nextTokenOrNull()) {
                is TokenClass -> {
                    check(next is TokenClass.QUOTATION) {
                        "required a value but found token $next"
                    }
                    readStringUntil(*next.ESCAPE_PATTERN, end = next.value)
                }
                is Char -> {
                    readStringUntil {
                        if (it in TokenClass.LINE_SEPARATOR.values) {
                            return@readStringUntil true
                        }
                        TokenClass.findByValue(it)?.let { token ->
                            error("Unexpected token $token when reading a value")
                        }
                        false
                    }
                }
                null -> null
                else -> error("internal error: unexpected return value: ${next::class.simpleName} from nextTokenOrNull")
            }
        }
        else -> {
            TODO()
        }
    }
}

/**
 * Read a [String], decoding escapes
 */
internal fun CharStream.readStringUntil(vararg escape: Char, end: Char): String {
    return readStringUntil(*escape) { it == end }
}

internal inline fun CharStream.readStringUntil(vararg escape: Char, endMatcher: (Char) -> Boolean): String {
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
                endMatcher(it) -> return@readAhead
                else -> append(it)
            }
        }
    }
}