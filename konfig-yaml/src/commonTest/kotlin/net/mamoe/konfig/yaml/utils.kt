package net.mamoe.konfig.yaml

import net.mamoe.konfig.yaml.internal.END_OF_FILE
import net.mamoe.konfig.yaml.internal.EndingTokens
import net.mamoe.konfig.yaml.internal.Token
import net.mamoe.konfig.yaml.internal.TokenStream


/**
 * Read all remaining tokens and join to string.
 */
@Suppress("RemoveExplicitTypeArguments")
internal fun TokenStream.joinTokenToString(): String {
    return kotlin.runCatching {
        generateSequence {
            when (val token = this@joinTokenToString.nextToken(EndingTokens.COLON_AND_MAP_END)) {
                Token.STRING -> "String(${this@joinTokenToString.strBuff!!})"
                END_OF_FILE -> null
                else -> token.toString()
            }
        }.joinToString()
    }.getOrElse {
        throw IllegalStateException("exception on joinTokenToString", it)
    }
}
