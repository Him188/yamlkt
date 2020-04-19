package net.mamoe.konfig.yaml

import net.mamoe.konfig.yaml.internal.EndingTokens
import net.mamoe.konfig.yaml.internal.Token
import net.mamoe.konfig.yaml.internal.TokenStream


/**
 * Read all remaining tokens and join to string.
 */
@Suppress("RemoveExplicitTypeArguments")
internal fun TokenStream.joinTokenToString(): String =
    sequence<String> {
        while (true) {
            yield(
                when (val token = this@joinTokenToString.nextToken(EndingTokens.COLON)) {
                    Token.STRING -> "String(${this@joinTokenToString.strBuff!!})"
                    null -> return@sequence
                    else -> token.toString()
                }
            )
        }
    }.joinToString()
