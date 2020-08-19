package net.mamoe.yamlkt.internal

/**
 * Mapping to `org.intellij.lang.annotations.Language` on JVM.
 */
@Retention(AnnotationRetention.BINARY)
@Target(
    AnnotationTarget.FUNCTION,
    AnnotationTarget.PROPERTY,
    AnnotationTarget.VALUE_PARAMETER,
    AnnotationTarget.LOCAL_VARIABLE,
    AnnotationTarget.ANNOTATION_CLASS
)
internal actual annotation class Language actual constructor(
    actual val value: String,
    actual val prefix: String,
    actual val suffix: String
)