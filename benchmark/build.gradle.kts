import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    java
    kotlin("jvm")
    kotlin("kapt")
    kotlin("plugin.serialization")
    id("me.champeau.jmh")
}
apply(plugin = "me.champeau.jmh")

dependencies {
    api(kotlin("stdlib-jdk8"))
    api("org.openjdk.jmh:jmh-core:1.37")
    api("org.openjdk.jmh:jmh-generator-annprocess:1.37")
    api(project(":yamlkt"))
    api(kotlinx("serialization-core", Versions.serialization))
    api(kotlinx("serialization-json", Versions.serialization))
    kapt("org.openjdk.jmh:jmh-generator-annprocess:1.37")
    api("com.charleskorn.kaml:kaml:0.17.0")
    api("org.yaml:snakeyaml:1.26")
    api("com.google.code.gson:gson:2.11.0")
    api("com.alibaba:fastjson:1.2.83") // Next major: 2.0.51
}


group = ""

jmh {
    includes.set(listOf("DeserializingTest"))
}

val compileKotlin: KotlinCompile by tasks
compileKotlin.compilerOptions {
    jvmTarget.set(JvmTarget.JVM_1_8)
}
val compileTestKotlin: KotlinCompile by tasks
compileTestKotlin.compilerOptions {
    jvmTarget.set(JvmTarget.JVM_1_8)
}