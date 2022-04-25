plugins {
    `kotlin-dsl`
}

repositories {
    mavenCentral()
}

kotlin {
    sourceSets.all {
        languageSettings.optIn("kotlin.Experimental")
        languageSettings.optIn("kotlin.RequiresOptIn")
    }
}