plugins {
    kotlin("multiplatform") version Versions.kotlin apply false
    kotlin("plugin.serialization") version Versions.kotlin apply false

    id("com.jfrog.bintray") version Versions.bintray apply false
    id("me.champeau.gradle.jmh") version "0.5.0" apply false
}

allprojects {
    group = "net.mamoe.yamlkt"
    version = Versions.version

    repositories {
        mavenLocal()
        mavenCentral()
        jcenter()
    }
}