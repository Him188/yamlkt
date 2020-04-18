package net.mamoe.konfig.yaml.internal

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue


internal class TrimMatchingTest {


    @Test
    fun testTrimMatching() {
        assertTrue {
            "ts".trimMatching(2) { cur ->
                this[cur] == 't' && this[cur + 1] == 's'
            }
        }
        assertTrue {
            "  ts".trimMatching(2) { cur ->
                this[cur] == 't' && this[cur + 1] == 's'
            }
        }
        assertTrue {
            "  ts  ".trimMatching(2) { cur ->
                this[cur] == 't' && this[cur + 1] == 's'
            }
        }
        assertFalse {
            "  t s  ".trimMatching(2) { cur ->
                this[cur] == 't' && this[cur + 1] == 's'
            }
        }
        assertFalse {
            "  t".trimMatching(2) { cur ->
                this[cur] == 't' && this[cur + 1] == 's'
            }
        }
        assertFalse {
            "  t ".trimMatching(2) { cur ->
                this[cur] == 't' && this[cur + 1] == 's'
            }
        }
    }
}