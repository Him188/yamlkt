package net.mamoe.yamlkt

actual val currentPlatform: Platform = Platform.JVM


actual fun createAssertionError(message: String?, cause: Throwable?): AssertionError = AssertionError(message, cause)
