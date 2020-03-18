import java.lang.System.getProperty

buildscript {
    repositories {
        mavenCentral()
    }

    dependencies {
        val kotlinVersion: String by project

        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
        classpath("org.jetbrains.kotlin:kotlin-serialization:$kotlinVersion")
    }
}

allprojects {
    group = "net.mamoe"
    version = getProperty("version")

    repositories {
        mavenCentral()
        jcenter()
    }
}