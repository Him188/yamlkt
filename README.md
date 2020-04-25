# konfig
Multi-platform Yaml with comments support for kotlinx.serialization

This project is under development.

## Setup

Dependency requirements:

| konfig | Required Kotlin | Required kotlinx.serialization | Required kotlinx.io |
|:-------|:----------------|:-------------------------------|:-------------------------------|
| 0.1.0  | 1.3.71          | 0.20.0                         | 0.1.16                         |

#### Gradle
Replace `<version>` with the newest version here: \<not yet published\>

```kotlin
implementation("net.mamoe:konfig-yaml:<version>")
```


#### Maven
Replace `$version` with the newest version here: \<not yet published\>

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

println(yaml.parse(Test.serializer(), """
test: testString
test2: "quoted"
nest: 
  nestedTest: String
  numberCast: 0xFE
list: [str, "str2"]
"""))
```


## To-Do

|    | Done   |
|:---|:---|
| Nullable values |  √  |
| Multiline lists|  √  |
| Square block lists|  √  |
| Json-like maps|  √  |
| Yaml maps|  √  |
| Nesting | √   |
| Quotations |  √  |
| ContextualSerialization | √ |
| Multiline String   |    |
| Parsing without descriptor | |
| Anchors   |    |
| Compound key |    |
| Byte Order Mark| |
| Explicit types | |

