package net.mamoe.konfig.yaml

import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.SerialDescriptor
import kotlinx.serialization.internal.TaggedDecoder


internal class Tag(
    val serialName: String
)

@OptIn(InternalSerializationApi::class)
internal class YamlDecoder(
    val reader: YamlReader
) : TaggedDecoder<Tag>() {
    override fun SerialDescriptor.getTag(index: Int): Tag {
        TODO()
    }

    override fun decodeElementIndex(descriptor: SerialDescriptor): Int {
        TODO("not implemented")
    }

    fun ne() {

    }

    override fun decodeSequentially(): Boolean = false


}