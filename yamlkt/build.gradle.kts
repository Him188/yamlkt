@file:Suppress("UNUSED_VARIABLE")

import org.apache.tools.ant.taskdefs.condition.Os
import org.jetbrains.kotlin.gradle.plugin.KotlinSourceSet

plugins {
    id("me.him188.maven-central-publish")
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    `maven-publish`
}

kotlin {
    explicitApi()

    targets {
        jvm {
            compilations.all {
                kotlinOptions.jvmTarget = "1.8"
            }
        }
        js(IR) {
            compilations.all {
                kotlinOptions {
                    moduleKind = "umd"
                    sourceMap = true
                    metaInfo = true
                }
            }
            browser()
            nodejs()
        }


        val ideaActive = System.getProperty("idea.active") == "true" && System.getProperty("publication.test") != "true"

        val nativeMainSets = mutableListOf<KotlinSourceSet>()
        val nativeTestSets = mutableListOf<KotlinSourceSet>()

        if (ideaActive) {
            when {
                Os.isFamily(Os.FAMILY_MAC) -> if (Os.isArch("aarch64")) macosArm64("native") else macosX64("native")
                Os.isFamily(Os.FAMILY_WINDOWS) -> mingwX64("native")
                else -> linuxX64("native")
            }
        } else {
            // 1.6.0
            val nativeTargets: List<String> = arrayOf(
                // serialization doesn't support those commented targets
//                "androidNativeArm32, androidNativeArm64, androidNativeX86, androidNativeX64",
                "iosArm32, iosArm64, iosX64, iosSimulatorArm64",
                "watchosArm32, watchosArm64, watchosX86, watchosX64, watchosSimulatorArm64",
                "tvosArm64, tvosX64, tvosSimulatorArm64",
                "macosX64, macosArm64",
                "linuxArm64, linuxArm32Hfp, linuxX64",
                "mingwX64, mingwX86",
//                "wasm32"
            ).flatMap { it.split(", ") }
            presets.filter { it.name in nativeTargets }
                .forEach { preset ->
                    val target = targetFromPreset(preset, preset.name)
                    nativeMainSets.add(target.compilations[org.jetbrains.kotlin.gradle.plugin.KotlinCompilation.MAIN_COMPILATION_NAME].kotlinSourceSets.first())
                    nativeTestSets.add(target.compilations[org.jetbrains.kotlin.gradle.plugin.KotlinCompilation.TEST_COMPILATION_NAME].kotlinSourceSets.first())
                }

            sourceSets {
                if (!ideaActive) {
                    configure(nativeMainSets) {
                        dependsOn(sourceSets.maybeCreate("nativeMain"))
                    }

                    configure(nativeTestSets) {
                        dependsOn(sourceSets.maybeCreate("nativeTest"))
                    }
                }
            }
        }

        /*
        val hostOs = System.getProperty("os.name")
        val isMingwX64 = hostOs.startsWith("Windows")
        val nativeTarget = when {
            hostOs == "Mac OS X" -> macosX64("native")
            hostOs == "Linux" -> linuxX64("native")
            isMingwX64 -> mingwX64("native")
            else -> throw GradleException("Host OS is not supported in Kotlin/Native.")
        }*/
    }

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

        val jvmMain by getting
        val jvmTest by getting {
            dependencies {
                api(kotlin("test-junit"))
                api("com.charleskorn.kaml:kaml:0.34.0")
                api("org.yaml:snakeyaml:1.26")
            }
        }

        val jsMain by getting
        val jsTest by getting

        val nativeMain by getting {
            dependsOn(commonMain)
        }

        val nativeTest by getting {
            dependsOn(commonTest)
        }
    }
}

mavenCentralPublish {
    singleDevGithubProject("Him188", "yamlkt")
    licenseFromGitHubProject("Apache-2.0", "master")
}