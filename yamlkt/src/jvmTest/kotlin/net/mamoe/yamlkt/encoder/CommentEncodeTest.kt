package net.mamoe.yamlkt.encoder

import kotlinx.serialization.ImplicitReflectionSerializer
import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Comment
import org.junit.Test


@OptIn(ImplicitReflectionSerializer::class)
internal class CommentEncodeTest {

    @Test
    fun testComments() {
        @Serializable
        data class CommentTest(
            @Comment("testA")
            val value1: String,
            @Comment("testA\nff")
            val value2: String
        )

        Thread.sleep(1000)
        allBlock.testDescriptorBased(CommentTest.serializer(), CommentTest("vv", "ss"), true)
    }
}