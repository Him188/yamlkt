# konfig
Multi-platform Yaml with comments support for kotlinx.serialization

This project is under development.

## Setup

Dependency requirements:

| konfig | Required Kotlin | Required kotlinx.serialization |
|:-------|:----------------|:-------------------------------|
| 0.1.0  | 1.3.71          | 0.20.0                         |

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

## Overview
This library supports:
- fast descriptor-based deserializing
- contextual deserializing: `@ContextualSerialization`
- dynamic types: `YamlDynamicSerializer` which can deserialize `Any`
- `YamlElement` wrapper classes

The YAML features that are't yet supported:
- Anchors (`*`, `&`)
- Explicit types (e.g. `!!map`)
- Multiline string (`|`, `>`, `\`)
- Unicode escape (e.g. `\u0000`)

## Learn to use

### Serializing
In progress

### Deserializing

#### Descriptor-based deserializing
Like Json from `kotlinx.serialization`, Konfig supports deserialization with descriptors.  
Using descriptor is the most fast and recommended way as the decoder doesn't need to guess the type.
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

#### Contextual deserializing
Konfig provides a contextual serializer `YamlDynamicSerializer` for `Any`  
and `YamlNullDynamicSerializer` for `Any?

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
val map: Map<String, Any?> = Yaml.default.parseMap("""test: { key1: v1, key2: [v2, v3, v4] }""")
```


#### `YamlElement`
`YamlElement` is a type-safe way to deserialize without descriptors.
```kotlin
val map: YamlMap = Yaml.default.parseYamlMap("""test: { key1: v1, key2: [v2, v3, v4] }""")
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
| Parsing without descriptor | √|
| Anchors   |    |
| Compound key |  √  |
| Byte Order Mark| |
| Explicit types | |

