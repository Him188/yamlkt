@file:OptIn(ExperimentalUnsignedTypes::class)

package net.mamoe.yamlkt

import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.Serializer
import kotlinx.serialization.StringFormat
import kotlinx.serialization.builtins.serializer
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import net.mamoe.yamlkt.internal.Debugging
import kotlin.test.Test
import kotlin.test.assertEquals

// Copied from kotlinx.serialization. Copyright 2017-2020 JetBrains s.r.o.

@Serializable
data class SimpleContainerForUInt(val i: UInt)

@Serializable(MyUIntSerializer::class)
inline class MyUInt(val m: Int)

@Serializer(forClass = MyUInt::class)
object MyUIntSerializer {
    override val descriptor = UInt.serializer().descriptor
    override fun serialize(encoder: Encoder, value: MyUInt) {
        encoder.encodeInline(descriptor).encodeInt(value.m)
    }

    override fun deserialize(decoder: Decoder): MyUInt {
        return MyUInt(decoder.decodeInline(descriptor).decodeInt())
    }
}

@Serializable
data class SimpleContainerForMyType(val i: MyUInt)

@Serializable
inline class MyList<T>(val list: List<T>)

@Serializable
data class ContainerForList<T>(val i: MyList<T>)

@Serializable
data class UnsignedInBoxedPosition(val i: List<UInt>)

@Serializable
data class MixedPositions(
    val int: Int,
    val intNullable: Int?,
    val uint: UInt,
    val uintNullable: UInt?,
    val boxedInt: List<Int>,
    val boxedUInt: List<UInt>,
    val boxedNullableInt: List<Int?>,
    val boxedNullableUInt: List<UInt?>
)

class InlineClassesTest {
    private val precedent: UInt = Int.MAX_VALUE.toUInt() + 10.toUInt()

    @Test
    fun testSimpleContainer() = noLegacyJs {
        assertStringFormAndRestored(
            """i: 2147483657""",
            SimpleContainerForUInt(precedent),
            SimpleContainerForUInt.serializer()
        )
    }

    @Test
    fun testSimpleContainerForMyTypeWithCustomSerializer() = assertStringFormAndRestored(
        """i: 2147483657""",
        SimpleContainerForMyType(MyUInt(precedent.toInt())),
        SimpleContainerForMyType.serializer(),
    )

    @Test
    fun testSimpleContainerForList() = noLegacyJs {
        Debugging.enabled = true
        assertStringFormAndRestored(
            """i: [ 2147483657 ]""" + "\n",// TODO: 2021/2/5 Fix \n // TODO: 2021/2/5 Fix spaces
            ContainerForList(MyList(listOf(precedent))),
            ContainerForList.serializer(UInt.serializer()),
            printResult = true,
            format = Yaml {
                listSerialization = YamlBuilder.ListSerialization.FLOW_SEQUENCE
            }
        )
    }

    @Test
    fun testUnsignedInBoxedPosition() = assertStringFormAndRestored(
        """i: [ 2147483657 ]""" + "\n",// TODO: 2021/2/5 Fix \n // TODO: 2021/2/5 Fix spaces
        UnsignedInBoxedPosition(listOf(precedent)),
        UnsignedInBoxedPosition.serializer(),
        Yaml {
            listSerialization = YamlBuilder.ListSerialization.FLOW_SEQUENCE
        }
    )

    @Test
    fun testMixedPositions() {
        val o = MixedPositions(
            int = precedent.toInt(),
            intNullable = precedent.toInt(),
            uint = precedent,
            uintNullable = precedent,
            boxedInt = listOf(precedent.toInt()),
            boxedUInt = listOf(precedent),
            boxedNullableInt = listOf(null, precedent.toInt(), null),
            boxedNullableUInt = listOf(null, precedent, null)
        )
        assertStringFormAndRestored(
            """
            int: -2147483639
            intNullable: -2147483639
            uint: 2147483657
            uintNullable: 2147483657
            boxedInt: 
              - -2147483639
            boxedUInt: 
              - 2147483657
            boxedNullableInt: 
              - null
              - -2147483639
              - null
            boxedNullableUInt: 
              - null
              - 2147483657
              - null
            """.trimIndent(),
            o,
            MixedPositions.serializer(),
        )
    }
}


inline fun <reified T : Any> assertStringFormAndRestored(
    expected: String,
    original: T,
    serializer: KSerializer<T>,
    format: StringFormat = Yaml,
    printResult: Boolean = false
) {
    val string = format.encodeToString(serializer, original)
    if (printResult) println("[Serialized form] $string")
    assertEquals(expected, string)
    val restored = format.decodeFromString(serializer, string)
    if (printResult) println("[Restored form] $restored")
    assertEquals(original, restored)
}
