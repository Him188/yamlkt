package net.mamoe.konfig.yaml.internal

import net.mamoe.konfig.yaml.YamlNull


internal fun String.asYamlNullOrNull(): YamlNull? = when {
    this == "~" -> YamlNull
    this.trimMatching(4) { cur ->
        (this[cur] == 'n' || this[cur] == 'N') &&
            (this[cur + 1] == 'u' || this[cur + 1] == 'U') &&
            (this[cur + 2] == 'l' || this[cur + 2] == 'L') &&
            (this[cur + 3] == 'l' || this[cur + 3] == 'L')
    } -> YamlNull

    else -> null
}

internal inline fun String.trimMatching(useLength: Int, block: String.(offset: Int) -> Boolean): Boolean {
    var cur = 0

    val maxOffset = this.length - useLength
    // skip ws
    while (cur <= maxOffset) {
        if (this[cur] != ' ') {
            // match
            if (!block(this, cur)) {
                return false
            }
            cur += useLength
            // skip ending ws
            while (cur < maxOffset) {
                if (this[cur] != ' ') {
                    // not matching
                    return false
                } else cur++
            }
            return true
        } else cur++
    }

    return false
}