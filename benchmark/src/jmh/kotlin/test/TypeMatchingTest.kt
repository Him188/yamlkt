package test

import org.openjdk.jmh.annotations.*
import java.util.concurrent.TimeUnit


@BenchmarkMode(Mode.Throughput)
@Warmup(iterations = 3)
@Measurement(iterations = 5)
@Threads(8)
@Fork(2)
@OutputTimeUnit(TimeUnit.NANOSECONDS)
open class TypeMatchingTest {
    @Benchmark
    open fun testInstanceOf() {
        fun serialize(value: Any): Any {
            @Suppress("UNCHECKED_CAST")
            return when (value) {
                is Map<*, *> -> value
                is List<*> -> value
                is Byte -> value
                is Short -> value
                is Int -> value
                is Long -> value
                is Float -> value
                is Double -> value
                is Char -> value
                is Boolean -> value
                is Array<*> -> value
                is String -> value
                else -> value.toString()
            }
        }
        serialize("test")
    }

    @Benchmark
    open fun testClass() {
        fun serialize(value: Any): Any {
            @Suppress("UNCHECKED_CAST")
            return when (value::class.java) {
                Map::class.java -> value
                List::class.java -> value
                Byte::class.java -> value
                Short::class.java -> value
                Int::class.java -> value
                Long::class.java -> value
                Float::class.java -> value
                Double::class.java -> value
                Char::class.java -> value
                Boolean::class.java -> value
                Array<Any>::class.java -> value
                String::class.java -> value
                else -> value.toString()
            }
        }
        serialize("test")
    }
}