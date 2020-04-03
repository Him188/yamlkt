@file:Suppress("UNUSED_VARIABLE")

plugins {
    kotlin("multiplatform")
    id("kotlinx-serialization")
}

kotlin {
    targets {
        jvm()
        js()

        // TODO native targets
    }

    sourceSets {
        val serializationVersion: String by project
        val kotlinXIoVersion: String by project

        fun kotlinx(name: String, version: String): String = "org.jetbrains.kotlinx:kotlinx-$name:$version"

        all {
            languageSettings.useExperimentalAnnotation("kotlin.RequiresOptIn")
            dependencies {
                api(project(":konfig-core"))
            }
        }

        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib-common"))
                api(kotlinx("serialization-runtime-common", serializationVersion))
                api(kotlinx("io", kotlinXIoVersion))
            }
        }

        val jvmMain by getting {
            dependencies {
                implementation(kotlin("stdlib"))
                api(kotlinx("serialization-runtime", serializationVersion))
                api(kotlinx("io-jvm", kotlinXIoVersion))
            }
        }

        val jsMain by getting {
            dependencies {
                implementation(kotlin("stdlib-js"))
                api(kotlinx("serialization-runtime-js", serializationVersion))
                api(kotlinx("io-js", kotlinXIoVersion))
            }
        }


        val commonTest by getting {
            dependencies {
                implementation(kotlin("test-common"))
                implementation(kotlin("test-annotations-common"))
            }
        }

        val jvmTest by getting {
            dependencies {
                implementation(kotlin("test"))
                implementation(kotlin("test-junit5"))
            }
        }

        val jsTest by getting {
            dependencies {
                implementation(kotlin("test-js"))
            }
        }
    }
}
