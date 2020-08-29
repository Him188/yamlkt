@file:JvmMultifileClass
@file:JvmName("YamlUtils")
@file:OptIn(ExperimentalMultiplatform::class)

package net.mamoe.yamlkt.internal

import kotlin.jvm.JvmMultifileClass
import kotlin.jvm.JvmName


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
@OptionalExpectation
internal expect annotation class Language(
    val value: String,
    val prefix: String = "",
    val suffix: String = ""
)