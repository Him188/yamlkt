@file:Suppress("UNUSED_VARIABLE")

plugins {
    kotlin("multiplatform")
    id("kotlinx-serialization")
    `maven-publish`
    id("com.jfrog.bintray")
}

kotlin {
    targets {
        jvm()
        js()

        // TODO native targets
    }

    sourceSets {
        val serializationVersion: String = Versions.Kotlin.serialization

        fun kotlinx(name: String, version: String): String = "org.jetbrains.kotlinx:kotlinx-$name:$version"

        all {
            languageSettings.useExperimentalAnnotation("kotlin.RequiresOptIn")
            languageSettings.progressiveMode = true
        }

        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib-common"))
                api(kotlinx("serialization-runtime-common", serializationVersion))
            }
        }

        val jvmMain by getting {
            dependencies {
                implementation(kotlin("stdlib"))
                api(kotlinx("serialization-runtime", serializationVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                implementation(kotlin("stdlib-js"))
                api(kotlinx("serialization-runtime-js", serializationVersion))
            }
        }


        val commonTest by getting {
            languageSettings.languageVersion = "1.4"
            dependencies {
                implementation(kotlin("stdlib-common"))
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }

        val jvmTest by getting {
            languageSettings.languageVersion = "1.4"
            dependencies {
                dependsOn(commonTest)
                implementation(kotlin("stdlib"))
                implementation(kotlin("test"))
                implementation(kotlin("test-junit"))
                implementation("com.charleskorn.kaml:kaml:0.17.0")
                implementation("org.yaml:snakeyaml:1.26")
            }
        }

        val jsTest by getting {
            languageSettings.languageVersion = "1.4"
            dependencies {
                dependsOn(commonTest)
                implementation(kotlin("stdlib-js"))
                implementation(kotlin("test-js"))
            }
        }
    }
}
apply(from = "../gradle/publish.gradle")
