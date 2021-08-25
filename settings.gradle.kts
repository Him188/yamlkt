pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenLocal()
    }
}

rootProject.name = "yamlkt"

include(":yamlkt")
include(":benchmark")

enableFeaturePreview("GRADLE_METADATA")
