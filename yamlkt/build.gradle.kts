@file:Suppress("UNUSED_VARIABLE")

import org.jetbrains.kotlin.gradle.dsl.KotlinJvmCompile

plugins {
    id("net.mamoe.maven-central-publish")
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    `maven-publish`
}

tasks.withType(KotlinJvmCompile::class) {
    kotlinOptions.useIR = true
}

kotlin {
    explicitApi()

    targets {
        jvm()
        js {
            useCommonJs()
        }
        apply(from = rootProject.file("gradle/compile-native-multiplatform.gradle"))

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
            languageSettings.useExperimentalAnnotation("kotlin.RequiresOptIn")
            languageSettings.useExperimentalAnnotation("kotlinx.serialization.ExperimentalSerializationApi")
            languageSettings.useExperimentalAnnotation("kotlin.contracts.ExperimentalContracts")
            languageSettings.progressiveMode = true

            if (name.endsWith("Test")) {
                languageSettings.enableLanguageFeature("InlineClasses")
                languageSettings.useExperimentalAnnotation("kotlin.ExperimentalUnsignedTypes")
            }
        }

        val commonMain by getting {
            dependencies {
                api(kotlinx("serialization-core", serializationVersion))
            }
        }

        val jvmMain by getting {
            dependencies {
            }
        }

        val jsMain by getting {
            dependencies {
            }
        }

        // don't configure nativeMain or nativeTest here. Source set names might be inconsistent on github actions.


        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }

        val jvmTest by getting {
            dependencies {
                dependsOn(commonTest)
                implementation(kotlin("test"))
                implementation(kotlin("test-junit"))
                implementation("com.charleskorn.kaml:kaml:0.19.0")
                implementation("org.yaml:snakeyaml:1.26")
            }
        }

        val jsTest by getting {
            dependencies {
                dependsOn(commonTest)
                implementation(kotlin("test-js"))
            }
        }
    }
}

mavenCentralPublish {
    singleDevGithubProject("Him188", "yamlkt")
    licenseFromGitHubProject("Apache-2.0", "master")
}