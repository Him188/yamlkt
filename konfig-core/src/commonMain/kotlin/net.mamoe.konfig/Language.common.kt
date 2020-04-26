package net.mamoe.konfig


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
expect annotation class Language(
    val value: String,
    val prefix: String, // default values aren't supported yet
    val suffix: String
)