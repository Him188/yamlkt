package test

import com.google.gson.Gson
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import net.mamoe.yamlkt.Yaml
import org.openjdk.jmh.annotations.*
import test.Constants.content
import test.Constants.gson
import test.Constants.kotlinJson
import test.Constants.yamlkt
import java.util.concurrent.TimeUnit

@Serializable
data class Data(
    val menu: Menu
) {
    @Serializable
    data class Menu(
        val header: String,
        val items: List<Item?>
    )

    @Serializable
    data class Item(
        val id: String = "",
        val label: String = ""
    )
}

@State(Scope.Thread)
object Constants {
    const val content: String = """
{"menu": {
    "header": "SVG Viewer",
    "items": [
        {"id": "Open"},
        {"id": "OpenNew", "label": "Open New"},
        null,
        {"id": "ZoomIn", "label": "Zoom In"},
        {"id": "ZoomOut", "label": "Zoom Out"},
        {"id": "OriginalView", "label": "Original View"},
        null,
        {"id": "Quality"},
        {"id": "Pause"},
        {"id": "Mute"},
        null,
        {"id": "Find", "label": "Find..."},
        {"id": "FindAgain", "label": "Find Again"},
        {"id": "Copy"},
        {"id": "CopyAgain", "label": "Copy Again"},
        {"id": "CopySVG", "label": "Copy SVG"},
        {"id": "ViewSVG", "label": "View SVG"},
        {"id": "ViewSource", "label": "View Source"},
        {"id": "SaveAs", "label": "Save As"},
        null,
        {"id": "Help"},
        {"id": "About", "label": "About Adobe CVG Viewer..."}
    ]
}}
"""

    val kotlinJson = Json { allowStructuredMapKeys = true }
    val yamlkt = Yaml.default
    val gson = Gson()

}

/*

Benchmark                                   Mode  Cnt       Score      Error  Units
DeserializingTest.gsonContextual            avgt   20    9539.982 ±   99.535  ns/op
DeserializingTest.kotlinContextual          avgt   20   11380.491 ±  366.462  ns/op
DeserializingTest.kotlinJsonWithDescriptor  avgt   20   12408.461 ± 1170.355  ns/op
DeserializingTest.snakeYaml                 avgt   20  277251.991 ± 1364.468  ns/op
DeserializingTest.yamlktContextual          avgt   20   20225.689 ±  217.721  ns/op
DeserializingTest.yamlktWithDescriptor      avgt   20   11864.706 ±  119.724  ns/op

 */

@BenchmarkMode(Mode.AverageTime)
@Warmup(iterations = 4)
@Measurement(iterations = 10)
@Threads(8)
@Fork(2)
@State(Scope.Thread)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
open class DeserializingTest {
    @Benchmark
    fun snakeYaml() {
        snakeYaml.load<Any>(content)
    }

    @Benchmark
    fun yamlktWithDescriptor() {
        yamlkt.decodeFromString(Data.serializer(), content)
    }

    @Benchmark
    fun yamlktContextual() {
        yamlkt.decodeYamlMapFromString(content)
    }

    private val snakeYaml = org.yaml.snakeyaml.Yaml()

    @Benchmark
    fun kotlinJsonWithDescriptor() {
        kotlinJson.decodeFromString(Data.serializer(), content)
    }

    @Benchmark
    fun kotlinContextual() {
        kotlinJson.parseToJsonElement(content)
    }

    @Benchmark
    fun gsonContextual() {
        gson.fromJson(content, Map::class.java)
    }
}