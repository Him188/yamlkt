package net.mamoe.yamlkt

// Copied from kotlinx.serialization. Copyright 2017-2020 JetBrains s.r.o.

enum class Platform {
    JVM, JS_LEGACY, JS_IR, NATIVE
}

expect val currentPlatform: Platform

fun isJs(): Boolean = currentPlatform == Platform.JS_LEGACY || currentPlatform == Platform.JS_IR
fun isJsLegacy(): Boolean = currentPlatform == Platform.JS_LEGACY
fun isJvm(): Boolean = currentPlatform == Platform.JVM
fun isNative(): Boolean = currentPlatform == Platform.NATIVE


inline fun noJs(test: () -> Unit) {
    if (!isJs()) test()
}

inline fun noLegacyJs(test: () -> Unit) {
    if (!isJsLegacy()) test()
}

inline fun jvmOnly(test: () -> Unit) {
    if (isJvm()) test()
}