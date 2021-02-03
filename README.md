# YamlKt
![Gradle CI](https://github.com/mamoe/yamlkt/workflows/Gradle%20CI/badge.svg?branch=master)
[![Download](https://api.bintray.com/packages/mamoe/yamlkt/yamlkt/images/download.svg)](https://bintray.com/mamoe/yamlkt/yamlkt/)

Fast multi-platform YAML with comments support for kotlinx.serialization

This project is in alpha state.

## Setup

Dependency requirements:

| yamlkt | Kotlin  | kotlinx.serialization |
|:------:|:-------:|:---------------------:|
| 0.3.3  | 1.3.70+ |        0.20.0         |
| 0.5.3  |  1.4.0  |       1.0.0-RC        |
| 0.6.0  | 1.4.10  |       1.0.0-RC2       |
| 0.8.0  | 1.4.10  |         1.0.1         |

#### Gradle

```kotlin
repositories {
  jcenter()
}
```

```kotlin
implementation("net.mamoe.yamlkt:yamlkt:0.8.0")
```
**If your project is multiplatform, you need only to add this dependency for commonMain.**  


#### Maven

```xml
<repository>
    <name>jcenter</name>
    <url>https://jcenter.bintray.com/</url>
</repository>
```

Only JVM is available for Maven.

```xml
<dependency>
    <groupId>net.mamoe.yamlkt</groupId>
    <artifactId>yamlkt</artifactId>
    <version>0.8.0</version>
</dependency>
```

## Overview
This library supports:
- fast deserializing YAML text to a structured object
- contextual and polymorphic serialization: `@Contextual`, `@Polymorphic`
- dynamic types: `YamlDynamicSerializer` which works on `Any`
- `YamlElement` wrapper classes, allowing `YamlMap.getInt`, `YamlMap.getLong`
- comments encoding (Using annotation `Comment`)

The features that aren't yet supported:
- Anchors (`*`, `&`)
- Explicit types (e.g. `!!map`)
- Multiline string (`|`, `>`, `\`)

## Learn to use

#### Serialize / deserialize with compiled serializers
This approach is fastest and recommended way as the type is already provided.
```kotlin
@Serializable
data class Test(
    val test: String,
    val optional: String = "optional", // Having default value means optional
    val nest: Nested,
    val list: List<String>
) {
    @Serializable
    data class Nested(
        val numberCast: Int
    )
}

println(Yaml.default.parse(Test.serializer(), """
test: testString
nest: 
  numberCast: 0xFE
list: [str, "str2"]
"""))
```

#### Contextual serializing / deserializing
YamlKt provides a contextual serializer `YamlDynamicSerializer` for `Any`  
and `YamlNullDynamicSerializer` for `Any?`

By default, `YamlDynamicSerializer` is installed to `Any`.  
You can start by using `@Contextual`:
```kotlin
@Serializable
data class Test(
    val any: @Contextual Any
)

Yaml.default.parse(Test.serializer(), yamlText)
```
For input YAML text:
```yaml
test: { key1: v1, key2: [v2, v3, v4] }
```



Alternatively, you can deserialize without any class:
```kotlin
val map: Map<String?, Any?> = Yaml.default.parseMap("""test: { key1: v1, key2: [v2, v3, v4] }""")
```


#### `YamlElement`
`YamlElement` is a type-safe way to deserialize without descriptors.
```kotlin
val map: YamlMap = Yaml.default.decodeYamlMapFromString("""test: { key1: v1, key2: [v2, v3, v4] }""")
```

#### Comments
Annotate your comments to a field(property) using `@Comment`:  
Example:
```kotlin
@Serializable
data class User(
  @Comment("The name of the user")
  val name: String = "value"
)
```
gives yaml text:
```yaml
# The name of the user
name: ""
```
