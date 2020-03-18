package net.mamoe.konfig.yaml

import kotlinx.io.core.Input
import kotlinx.serialization.InternalSerializationApi

@Suppress("ClassName")
internal sealed class TokenClass {
    object COMMA : TokenClass()
    object PERIOD : TokenClass()

    object COLON : TokenClass()

    object SINGLE_QUOTATION : TokenClass()
    object DOUBLE_QUOTATION : TokenClass()

    object PARENTHESES : TokenClass()
    object SQUARE_BRACKET : TokenClass()
    object CURLY_BRACKET : TokenClass()
}

internal class YamlConfiguration(
    val forceQuotation: Boolean = false
)

@OptIn(InternalSerializationApi::class)
internal class YamlReader(
    val input: Input
) {
    fun next(): TokenClass {

        TODO()
    }
}

