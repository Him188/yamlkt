package net.mamoe.yamlkt.decoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Yaml
import net.mamoe.yamlkt.internal.Debugging
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertFails

internal class NullabilityTest {
    @BeforeTest
    fun init() {
        Debugging.enabled = true
    }

    // decodeNotNullMark

    @Serializable
    data class User(
        val mailAddress: String? = null,
        val name: String,
    )

    @Test
    fun testNullable() {
        Yaml.decodeFromString(
            User.serializer(), """
name: cssxsh
mailAddress: 
 cssxsh@gmail.com
"""
        )
    }

    @Test
    fun testNullable2() {
        Yaml.decodeFromString(
            User.serializer(), """
name: cssxsh
mailAddress: cssxsh@gmail.com
"""
        )
    }

    @Test
    fun testNullableFail() {
        assertFails {
            Yaml.decodeFromString(
                User.serializer(), """
name: cssxsh
mailAddress: 
cssxsh@gmail.com
"""
            )
        }
    }

}