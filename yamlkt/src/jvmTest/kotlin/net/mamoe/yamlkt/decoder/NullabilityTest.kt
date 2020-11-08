package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.internal.Debugging
import org.junit.BeforeClass
import org.junit.Test
import kotlin.test.assertFails

internal class NullabilityTest {
    companion object {
        @BeforeClass
        @JvmStatic
        fun init() {
            Debugging.enabled = true
        }
    }

    // decodeNotNullMark

    @Serializable
    data class User(
        val mailAddress: String? = null,
        val name: String,
    )

    @Test
    fun testNullable() {
        Yaml.default.decodeFromString(
            User.serializer(), """
name: cssxsh
mailAddress: 
 cssxsh@gmail.com
"""
        )
    }

    @Test
    fun testNullable2() {
        Yaml.default.decodeFromString(
            User.serializer(), """
name: cssxsh
mailAddress: cssxsh@gmail.com
"""
        )
    }

    @Test
    fun testNullableFail() {
        assertFails {
            Yaml.default.decodeFromString(
                User.serializer(), """
name: cssxsh
mailAddress: 
cssxsh@gmail.com
"""
            )
        }
    }

}