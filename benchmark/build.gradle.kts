import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    java
    kotlin("jvm")
    kotlin("kapt")
    kotlin("plugin.serialization")
    id("me.champeau.gradle.jmh")
}
apply(plugin = "me.champeau.gradle.jmh")

dependencies {
    api(kotlin("stdlib-jdk8"))
    api("org.openjdk.jmh:jmh-core:1.23")
    api("org.openjdk.jmh:jmh-generator-annprocess:1.21")
    api(project(":yamlkt"))
    kapt("org.openjdk.jmh:jmh-generator-annprocess:1.21")
    api("com.charleskorn.kaml:kaml:0.17.0")
    api("org.yaml:snakeyaml:1.26")
    api("com.google.code.gson:gson:2.8.6")
}


group = ""

jmh {
    include = listOf("DeserializingTest")
}

val compileKotlin: KotlinCompile by tasks
compileKotlin.kotlinOptions {
    jvmTarget = "1.8"
}
val compileTestKotlin: KotlinCompile by tasks
compileTestKotlin.kotlinOptions {
    jvmTarget = "1.8"
}