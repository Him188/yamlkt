package net.mamoe.yamlkt.decoder

import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.builtins.serializer
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.YamlDecodingException
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith


internal class BlockSequenceFailTest {


    @Test
    fun `nested descriptor block sequence3`() {
        assertFailsWith<YamlDecodingException> {
            Yaml.decodeFromString(
                ListSerializer(ListSerializer(String.serializer())),
                """
        - pp
        - sss
        -
          ss
        """
            )
        }
    }

    @Test
    fun `nested descriptor block sequence4`() {
        val list = Yaml.decodeFromString(
            ListSerializer(ListSerializer(String.serializer())),
            """
    - 
      - sss
      - ss
    - 
      - sss
      - ss
    
    """
        )
        assertEquals(listOf(listOf("sss", "ss"), listOf("sss", "ss")), list)
    }

    /*
        @Test
        fun `nested descriptor block sequence5`() {
            assertEquals(
                listOf(listOf("sss - ss")),
                Yaml.Yaml.decodeFromString(
                    ListSerializer(ListSerializer(String.serializer())),
                    """
            -
              - sss
               - ss

            """
                )
            )
        }

        @Test
        fun `nested descriptor block sequence6`() {
            assertFails {
                Yaml.Yaml.decodeFromString(
                    ListSerializer(ListSerializer(String.serializer())),
                    """
            -
              - sss
             - ss

            """
                )
            }
        }
    */
    @Test
    fun `nested descriptor block sequence7`() {
        assertEquals(
            listOf(listOf("sss - ss")),
            Yaml.decodeFromString(
                ListSerializer(ListSerializer(String.serializer())),
                """
        - 
          - sss
             - ss
        
        """
            )
        )
    }

}