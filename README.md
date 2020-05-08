# YamlKt
![Gradle CI](https://github.com/mamoe/yamlkt/workflows/Gradle%20CI/badge.svg?branch=master)
[![Download](https://api.bintray.com/packages/mamoe/yamlkt/yamlkt/images/download.svg)](https://bintray.com/mamoe/yamlkt/yamlkt/)

Fast multi-platform YAML with comments support for kotlinx.serialization

This project is experimental.

## Setup

Dependency requirements:

| yamlkt | Required Kotlin | Using kotlinx.serialization |
|:-------|:----------------|:-------------------------------|
| 0.1.0  | 1.3.70+          | 0.20.0                         |

#### Gradle
Replace `<version>` with the newest version here: [![Download](https://api.bintray.com/packages/mamoe/yamlkt/yamlkt/images/download.svg)](https://bintray.com/mamoe/yamlkt/yamlkt/)

```kotlin
implementation("net.mamoe.yamlkt:yamlkt:<version>")
```


#### Maven
Replace `$version` with the newest version here: [![Download](https://api.bintray.com/packages/mamoe/yamlkt/yamlkt/images/download.svg)](https://bintray.com/mamoe/yamlkt/yamlkt/)

```xml
<repository>
    <name>jcenter</name>
    <url>https://jcenter.bintray.com/</url>
</repository>
```
```xml
<dependency>
    <groupId>net.mamoe.yamlkt</groupId>
    <artifactId>yamlkt</artifactId>
    <version>$version</version>
</dependency>
```

## Overview
This library supports:
- fast deserializing YAML text to a structured object
- contextual deserializing: `@ContextualSerialization`
- dynamic types: `YamlDynamicSerializer` which can serialize and deserialize `Any`
- `YamlElement` wrapper classes, allowing `YamlMap.getInt`, `YamlMap.getLong`
- comments encoding (Using annotation `Comment`)

The YAML features that are't yet supported:
- Anchors (`*`, `&`)
- Explicit types (e.g. `!!map`)
- Multiline string (`|`, `>`, `\`)

## Learn to use

#### Serialize / deserialize with compiled serializers
This approach is the most fast and recommended way as the type is already provided.
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

println(yaml.parse(Test.serializer(), """
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
You can start by using `@ContextualSerialization`:
```kotlin
@Serializable
data class Test(
    val any: @ContextualSerialization Any
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
val map: YamlMap = Yaml.default.parseYamlMap("""test: { key1: v1, key2: [v2, v3, v4] }""")
```