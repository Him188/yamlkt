package net.mamoe.yamlkt

import kotlinx.serialization.SerializationException

public class YamlDecodingException(message: String, cause: Throwable? = null) : SerializationException(message, cause)