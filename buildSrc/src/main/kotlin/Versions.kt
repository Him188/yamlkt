object Versions {
    const val version = "0.13.0"

    const val kotlin = "2.0.0"
    const val serialization = "1.7.0"

    const val mavenCentralPublish = "1.0.0-dev-3"
}

@Suppress("unused")
fun kotlinx(id: String, version: String) = "org.jetbrains.kotlinx:kotlinx-$id:$version"