package test

import com.google.gson.Gson
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonConfiguration
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

    val kotlinJson = Json(JsonConfiguration.Stable)
    val yamlkt = Yaml.default
    val gson = Gson()

}

/*

Benchmark                                   Mode  Cnt       Score       Error  Units
DeserializingTest.snakeYaml                 avgt   10  273006.420 ± 38247.820  ns/op
DeserializingTest.yamlktContextual          avgt   10   19171.890 ±   970.259  ns/op
DeserializingTest.yamlktWithDescriptor      avgt   10   12812.011 ±   462.406  ns/op
DeserializingTest.kotlinContextual          avgt   10   11527.638 ±   457.245  ns/op
DeserializingTest.kotlinJsonWIthDescriptor  avgt   10   12650.368 ±   769.779  ns/op
DeserializingTest.gson                      avgt   10    8645.489 ±   465.499  ns/op

 */

@BenchmarkMode(Mode.AverageTime)
@Warmup(iterations = 3)
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
        yamlkt.parse(Data.serializer(), content)
    }

    @Benchmark
    fun yamlktContextual() {
        yamlkt.parseYamlMap(content)
    }

    private val snakeYaml = org.yaml.snakeyaml.Yaml()

    @Benchmark
    fun kotlinJsonWithDescriptor() {
        kotlinJson.parse(Data.serializer(), content)
    }

    @Benchmark
    fun kotlinContextual() {
        kotlinJson.parseJson(content)
    }

    @Benchmark
    fun gsonContextual() {
        gson.fromJson(content, Map::class.java)
    }
}