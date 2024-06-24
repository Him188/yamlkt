plugins {
    id("me.him188.maven-central-publish")
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    `maven-publish`
}

kotlin {
    explicitApi()

    jvmToolchain(8)
    jvm()
    js {
        browser()
        nodejs()
    }

    // https://kotlinlang.org/docs/native-target-support.html
    // Updated for Kotlin 2.0.0, serialization 1.7.0
    // Commented ones are not supported by kotlinx-coroutines-core

    // Tier 1:
    macosX64()
    macosArm64()
    iosSimulatorArm64()
    iosX64()

    // Tier 2:
    linuxX64()
    linuxArm64()
    watchosSimulatorArm64()
    watchosX64()
    watchosArm32()
    watchosArm64()
    tvosSimulatorArm64()
    tvosX64()
    tvosArm64()
    iosArm64()

    // Tier 3:
    //androidNativeArm32()
    //androidNativeArm64()
    //androidNativeX86()
    //androidNativeX64()
    mingwX64()
    watchosDeviceArm64()

    applyDefaultHierarchyTemplate()
    sourceSets {
        val serializationVersion: String = Versions.serialization

        fun kotlinx(name: String, version: String): String = "org.jetbrains.kotlinx:kotlinx-$name:$version"

        all {
            languageSettings.optIn("kotlin.RequiresOptIn")
            languageSettings.optIn("kotlinx.serialization.ExperimentalSerializationApi")
            languageSettings.optIn("kotlin.contracts.ExperimentalContracts")
            languageSettings.progressiveMode = true

//            if (name.endsWith("Test")) {
////                languageSettings.optIn("kotlin.ExperimentalUnsignedTypes")
//            }
        }

        // don't configure nativeMain or nativeTest here. Source set names might be inconsistent on github actions.

        val commonMain by getting {
            dependencies {
                api(kotlin("stdlib", Versions.kotlin))
                api(kotlinx("serialization-core", serializationVersion))
            }
        }
        val commonTest by getting {
            dependencies {
                api(kotlin("test"))
                api(kotlin("reflect"))
            }
        }
        val jvmTest by getting {
            dependencies {
                api(kotlin("test-junit"))
                api("com.charleskorn.kaml:kaml:0.34.0")
                api("org.yaml:snakeyaml:1.26")
            }
        }
    }
}

mavenCentralPublish {
    singleDevGithubProject("Him188", "yamlkt")
    licenseFromGitHubProject("Apache-2.0", "master")
}
