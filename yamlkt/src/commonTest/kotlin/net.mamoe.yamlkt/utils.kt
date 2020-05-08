package net.mamoe.yamlkt

import net.mamoe.yamlkt.internal.END_OF_FILE
import net.mamoe.yamlkt.internal.Token
import net.mamoe.yamlkt.internal.TokenStream


/**
 * Read all remaining tokens and join to string.
 */
@Suppress("RemoveExplicitTypeArguments")
internal fun TokenStream.joinTokenToString(): String {
    return kotlin.runCatching {
        generateSequence {
            when (val token = this@joinTokenToString.nextToken()) {
                Token.STRING -> "String(${this@joinTokenToString.strBuff!!})"
                END_OF_FILE -> null
                else -> token.toString()
            }
        }.joinToString()
    }.getOrElse {
        throw IllegalStateException("exception on joinTokenToString", it)
    }
}
