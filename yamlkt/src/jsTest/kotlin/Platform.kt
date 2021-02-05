package net.mamoe.yamlkt

actual val currentPlatform: Platform = if (isLegacyBackend()) Platform.JS_LEGACY else Platform.JS_IR

// from https://github.com/JetBrains/kotlin/blob/569187a7516e2e5ab217158a3170d4beb0c5cb5a/js/js.translator/testData/_commonFiles/testUtils.kt#L3
private fun isLegacyBackend(): Boolean =
    // Using eval to prevent DCE from thinking that following code depends on Kotlin module.
    eval("(typeof Kotlin != \"undefined\" && typeof Kotlin.kotlin != \"undefined\")").unsafeCast<Boolean>()

