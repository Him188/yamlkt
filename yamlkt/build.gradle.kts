@file:Suppress("UNUSED_VARIABLE")

import org.jetbrains.kotlin.gradle.dsl.KotlinJvmCompile

plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    `maven-publish`
    id("com.jfrog.bintray")
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


        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
            languageSettings.enableLanguageFeature("InlineClasses")
        }

        val jvmTest by getting {
            dependencies {
                dependsOn(commonTest)
                implementation(kotlin("test"))
                implementation(kotlin("test-junit"))
                implementation("com.charleskorn.kaml:kaml:0.19.0")
                implementation("org.yaml:snakeyaml:1.26")
            }
            languageSettings.enableLanguageFeature("InlineClasses")
        }

        val jsTest by getting {
            dependencies {
                dependsOn(commonTest)
                implementation(kotlin("test-js"))
            }
            languageSettings.enableLanguageFeature("InlineClasses")
        }

        val nativeTest by getting {
            languageSettings.enableLanguageFeature("InlineClasses")
        }
    }
}
apply(from = "../gradle/publish.gradle")
