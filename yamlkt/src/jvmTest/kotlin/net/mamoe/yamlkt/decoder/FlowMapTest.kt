package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml.Companion.default
import org.junit.Test
import kotlin.test.assertEquals

internal class FlowMapTest {


    /**
     * The block map reading begins after `{`.
     * Because `{` is used to infer the type.
     *
     *
     * Yaml: `{name: Bob }`
     * Result: `{ name: 'Bob' }`
     *
     * Yaml: `{name: Bob , }`
     * Result: `{ name: 'Bob' }`
     *
     * Yaml: `{name: Bob , , }`
     * Result: `{ name: 'Bob', null: null }`
     *
     * Yaml: `{name: Bob ,age }`
     * Result: `{ name: 'Bob', age: null }`
     *
     * Yaml: `{name: Bob ,age , }`
     * Result: `{ name: 'Bob', age: null }`
     */

    @Serializable
    data class TestData(
        val name: String
    )

    @Test
    fun testFlowMap1() {
        assertEquals(
            TestData("Bob"),
            default.parse(TestData.serializer(), """{ name: Bob }""")
        )
    }

    @Test
    fun testFlowClassWithTrailingComma() {
        assertEquals(
            TestData("Bob"),
            default.parse(TestData.serializer(), """{ name: Bob, }""")
        )
    }

    @Test
    fun testFlowMapWithTrailingComma() {
        println(default.parseMap("""{ name: Bob, }"""))
    }

    @Test
    fun testFlowMapWithTwoTrailingComma() {
        val map = default.parseYamlMap("""{ name: Bob , , }""")
        // should give  `{ name: 'Bob', null: null }`
        assertEquals(2, map.size)
        assertEquals("name", map.entries.first().key.content)
        assertEquals("Bob", map.entries.first().value.content)
        assertEquals(null, map.entries.drop(1).single().key.content)
        assertEquals(null, map.entries.drop(1).single().value.content)
    }

    @Test
    fun testFlowYamlMapWithTwoBeginning() {
        val map = default.parseYamlMap("""{  , , name: Bob }""")
        // should give  `{ null: null, name: 'Bob' }`
        println(map)
        assertEquals(2, map.size)
        assertEquals(null, map.entries.first().key.content)
        assertEquals(null, map.entries.first().value.content)
        assertEquals("name", map.entries.drop(1).first().key.content)
        assertEquals("Bob", map.entries.drop(1).first().value.content)
    }

    /**
     * Test compatibility with legal JSON text.
     */
    @Test
    fun testFullJson() {
        val json = default.parseYamlMap(
            """
{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}"""
        )

        println(json)
    }

    @Test
    fun testNestedJson() {
        val json = default.parseYamlMap(
            """
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
        )


        println(json)
    }

    @Test
    fun `test flow map missing value`() {
        assertEquals(
            mapOf<String?, String?>("test" to null),
            default.parseMap(
                """{test}"""
            )
        )
    }


    @Test
    fun ttt() {
        println(default.parseMap("'123456789': 123456789"))
    }
}