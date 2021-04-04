plugins {
    id("net.mamoe.maven-central-publish") version "0.1.13" apply false
    kotlin("multiplatform") version Versions.kotlin apply false
    kotlin("plugin.serialization") version Versions.kotlin apply false

    id("me.champeau.gradle.jmh") version "0.5.3" apply false
}

allprojects {
    group = "net.mamoe.yamlkt"
    version = Versions.version
    description = "Multiplatform YAML parser & serializer for kotlinx.serialization written in pure Kotlin."

    repositories {
        mavenLocal()
        mavenCentral()
        gradlePluginPortal()
    }
}

extensions.findByName("buildScan")?.withGroovyBuilder {
    setProperty("termsOfServiceUrl", "https://gradle.com/terms-of-service")
    setProperty("termsOfServiceAgree", "yes")
}