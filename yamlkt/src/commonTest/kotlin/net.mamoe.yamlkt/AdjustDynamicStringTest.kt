package net.mamoe.yamlkt

import net.mamoe.yamlkt.internal.adjustDynamicString
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertIs

internal class AdjustDynamicStringTest {

    private inline fun <reified T> test(expected: T, string: String) {
        val actual = string.adjustDynamicString(false)
        assertIs<T>(actual)
        println(expected)
        println(string)
        return assertEquals(expected, actual)
    }

    @Test
    fun `test double`() {
        test(1.0, "1.0")
        test(12.0, "12.0")
        test(12.1, "12.1")

        test(0.0, "0.0")

        test(-1.0, "-1.0")
        test(-12.0, "-12.0")
        test(-12.1, "-12.1")
    }

    @Test
    fun `test integer`() {
        test(1, "1")
        test(12, "12")

        test(0, "0")

        test(-1, "-1")
        test(-12, "-12")
    }

    @Test
    fun `test string`() {
        test("1.0xx", "1.0xx")
    }

    @Test
    fun `test boundaries`() {
        test(Int.MAX_VALUE, Int.MAX_VALUE.toString())
        test(Int.MIN_VALUE, Int.MIN_VALUE.toString())

        test(UInt.MAX_VALUE.toLong() + 1L, (UInt.MAX_VALUE.toLong() + 1L).toString())
        test(Int.MIN_VALUE.toLong() - 1L, (Int.MIN_VALUE.toLong() - 1L).toString())
    }
}