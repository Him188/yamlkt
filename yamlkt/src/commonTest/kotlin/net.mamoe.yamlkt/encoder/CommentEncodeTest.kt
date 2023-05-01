package net.mamoe.yamlkt.encoder

import kotlinx.serialization.Serializable
import net.mamoe.yamlkt.Comment
import kotlin.test.Test


internal class CommentEncodeTest {
    @Serializable
    data class CommentTest(
        @Comment("testA")
        val value1: String,
        @Comment("testA\nff")
        val value2: String
    )

    @Test
    fun testComments() {
        allBlock.testDescriptorBased(CommentTest.serializer(), CommentTest("vv", "ss"), true)
    }

    @Serializable
    data class OuterClass(
        val inner: CommentTest,
    )

    @Test
    fun testCommentsWithHierarchy() {
        allBlock.testDescriptorBased(OuterClass.serializer(), OuterClass(CommentTest("vv", "ss")), true)
    }
}