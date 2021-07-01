@file:Suppress("UNUSED_VARIABLE")

plugins {
    id("net.mamoe.maven-central-publish")
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    `maven-publish`
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
    }
}

mavenCentralPublish {
    packageGroup = "net.mamoe"
    singleDevGithubProject("Him188", "yamlkt")
    licenseFromGitHubProject("Apache-2.0", "master")
}

@Suppress("DEPRECATION")
val samplessources = tasks.register("samplessources", Jar::class) {
    classifier = "samplessources"
}

publishing {
    publications.withType(MavenPublication::class) {
        if (name.contains("js")) {
            artifact(samplessources)
        }
    }
}