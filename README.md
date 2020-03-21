# konfig
Multi-platform Yaml with comments support for kotlinx.serialization

This project is under development.

## Setup


#### Gradle
Replace `<version>` with the newest version here: <not yet published>

```kotlin
implementation("net.mamoe:konfig-yaml:<version>")
```


#### Maven

```xml
<dependency>
    <groupId>net.mamoe</groupId>
    <artifactId>konfig-yaml</artifactId>
    <version>$version</version>
</dependency>
```

## Quick start

```kotlin
val yaml = Yaml {
    // settings here
}

@Serializable
data class Test(
    val test: String,
    val test2: String,
    val optional: String? = null,
    val nest: Nested,
    val list: List<String>
) {
    @Serializable
    data class Nested(
        val nestedTest: String,
        val numberCast: Int
    )
}

yaml.parse(Test.serializer(), """
test: testString
test2: "quoted"
nest: 
  nestedTest: String
  numberCast: 0xFE
list: [str, "str2"]
""")
```