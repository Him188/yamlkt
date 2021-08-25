object Versions {
    const val version = "0.10.1"

    const val kotlin = "1.5.20"
    const val serialization = "1.2.1"

    const val mavenCentralPublish = "0.6.1"
}

@Suppress("unused")
fun kotlinx(id: String, version: String) = "org.jetbrains.kotlinx:kotlinx-$id:$version"