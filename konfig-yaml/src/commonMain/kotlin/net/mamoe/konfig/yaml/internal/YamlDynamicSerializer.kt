package net.mamoe.konfig.yaml.internal

import kotlinx.serialization.*
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.MapSerializer


/**
 * Can deserialize [String]s, [Map]s, [List]s. All primitives aren't supported. Should be casted from [String]
 */
object YamlDynamicSerializer : KSerializer<Any> {
    override val descriptor: SerialDescriptor = SerialDescriptor("net.mamoe.konfig.yaml.internal.YamlDynamicSerializer", UnionKind.CONTEXTUAL)

    private val listSerializer = ListSerializer(this)
    private val mapSerializer = MapSerializer(this, this)

    override fun deserialize(decoder: Decoder): Any = decoder.decodeStructure(descriptor) {
        return@decodeStructure when (this) {
            is YamlDecoder.JsonLikeMapDecoder -> mapSerializer.deserialize(this)
            is YamlDecoder.YamlLikeMapDecoder -> mapSerializer.deserialize(this)
            is YamlDecoder.SquareListDecoder -> listSerializer.deserialize(this)
            is YamlDecoder.MultilineListDecoder -> listSerializer.deserialize(this)
            is YamlDecoder.YamlStringDecoder -> this.parentYamlDecoder.tokenStream.strBuff!!
            else -> error("bad decoder returned: $this")
        }

        check(this is YamlDecoder.AbstractDecoder)
        val yamlDecoder = this.parentYamlDecoder

        val endingTokenForKey = this.endingTokensForKey
        val endingTokenForValue = this.endingTokensForValue

        // peek values to guess type, then push them back to reuseStack and call specific serializers.

        loop@ while (true) {
            when (val token = yamlDecoder.tokenStream.nextToken(endingTokenForKey + Token.COMMA)) {
                END_OF_LINE -> return@decodeStructure TODO("NULL?")
                is Token.LINE_SEPARATOR -> continue@loop

                // TODO: 2020/4/25 CASTING & EXPLICIT TYPES (!!)

                is Token.STRING -> {
                    if (this is YamlDecoder.IndentedDecoder) {
                        if (!this.checkIndent(yamlDecoder.tokenStream.currentIndent)) {
                            throw yamlDecoder.contextualDecodingException("Expecting a value")
                        }
                    }

                    // the value is at least a String, and can also be List or Map.

                    val beforeIndent = yamlDecoder.tokenStream.currentIndent
                    val stringValue = yamlDecoder.tokenStream.strBuff!!

                    inner@ while (true) {
                        return@decodeStructure when (val next = yamlDecoder.tokenStream.nextToken(endingTokenForValue + Token.COLON)) {
                            END_OF_LINE -> stringValue
                            is Token.LINE_SEPARATOR -> continue@inner

                            Token.COLON -> {
                                // inferred map
                                yamlDecoder.tokenStream.currentIndent = beforeIndent
                                yamlDecoder.tokenStream.reuseToken(next)
                                yamlDecoder.tokenStream.reuseToken(stringValue)
                                mapSerializer.deserialize(this)
                            }

                            Token.STRING -> {
                                yamlDecoder.tokenStream.reuseToken(yamlDecoder.tokenStream.strBuff!!)
                                stringValue
                            }
                            else -> {
                                yamlDecoder.tokenStream.reuseToken(next)
                                stringValue
                            }
                        }
                    }
                }

                is Token.MULTILINE_STRING_FLAG -> {
                    TODO("Token.MULTILINE_STRING_FLAG")
                }

                Token.LIST_BEGIN,
                Token.MULTILINE_LIST_FLAG
                -> {
                    // yamlDecoder.tokenStream.reuseToken(token)
                    yamlDecoder.tokenStream.reuseToken(token)
                    listSerializer.deserialize(this)
                }

                Token.MAP_BEGIN -> {
                    yamlDecoder.tokenStream.reuseToken(yamlDecoder.tokenStream.strBuff!!)
                    mapSerializer.deserialize(this)
                }
                else -> throw yamlDecoder.contextualDecodingException("illegal token $token on decoding dynamic element")
            }
        }
    }

    override fun serialize(encoder: Encoder, value: Any) {
        /*
        check(decoder is YamlDecoder || decoder is YamlDecoder.AbstractDecoder) {
            "YamlDynamicSerializer can only be used in Yaml serializing and deserializing"
        }*/


        TODO("not implemented")
    }
}

private inline operator fun <reified T> Array<out T>.plus(colon: T): Array<T> {
    return arrayOf(*this, colon)
}
