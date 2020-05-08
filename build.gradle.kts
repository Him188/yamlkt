buildscript {
    repositories {
        mavenCentral()
    }

    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:${Versions.Kotlin.stdlib}")
        classpath("org.jetbrains.kotlin:kotlin-serialization:${Versions.Kotlin.stdlib}")
        classpath("me.champeau.gradle:jmh-gradle-plugin:0.5.0")
    }
}

plugins {
    id("com.jfrog.bintray") version Versions.Publishing.bintray apply false
    id("me.champeau.gradle.jmh") version "0.5.0" apply false
}

allprojects {
    group = "net.mamoe.yamlkt"
    version = Versions.version

    repositories {
        mavenCentral()
        jcenter()
    }
}