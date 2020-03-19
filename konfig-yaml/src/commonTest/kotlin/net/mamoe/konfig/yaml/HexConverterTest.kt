package net.mamoe.konfig.yaml

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

internal class HexConverterTest {
    @OptIn(ExperimentalUnsignedTypes::class)
    @Test
    fun hexToLong() {
        assertEquals(0x0, HexConverter.hexToLong("0x0", 2))
        assertEquals(0xFF, HexConverter.hexToLong("0xFF", 2))
        assertEquals(0xFFFFFFFF, HexConverter.hexToLong("0xFFFFFFFF", 2))
        assertEquals(0xFFFFFFFFFFFFFFFFu.toLong(), HexConverter.hexToLong("0xFFFFFFFFFFFFFFFF", 2))

        assertFailsWith<IllegalArgumentException> { HexConverter.hexToLong("0x", 2) }
        assertFailsWith<IllegalArgumentException> { HexConverter.hexToLong("0x", 3) }
        assertFailsWith<IllegalStateException> { HexConverter.hexToLong("0xG", 2) }
    }

    @OptIn(ExperimentalUnsignedTypes::class)
    @Test
    fun binToLong() {
        assertEquals(0b0, HexConverter.hexToLong("0b0", 2))
        assertEquals(0b1, HexConverter.hexToLong("0b1", 2))
        assertEquals(0b11111, BinaryConverter.binToLong("0b11111", 2))
        assertEquals(
            0b1111111111111111111111111111111111111111111111111111111111111111u.toLong(),
            HexConverter.hexToLong("0b1111111111111111111111111111111111111111111111111111111111111111", 2)
        )

        assertFailsWith<IllegalArgumentException> { HexConverter.hexToLong("0b", 2) }
        assertFailsWith<IllegalArgumentException> { HexConverter.hexToLong("0b", 3) }
        assertFailsWith<IllegalStateException> { HexConverter.hexToLong("0b12", 2) }
    }
}