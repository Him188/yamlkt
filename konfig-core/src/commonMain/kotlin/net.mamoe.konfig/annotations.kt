package net.mamoe.konfig

import kotlin.annotation.AnnotationTarget.*

/**
 * This annotation marks the public API that is considered experimental and is subject to change.
 *
 * @param message The additional message
 */
@RequiresOptIn(level = RequiresOptIn.Level.WARNING)
@Retention(AnnotationRetention.BINARY)
@Target(
    CLASS, ANNOTATION_CLASS, PROPERTY, FIELD, LOCAL_VARIABLE, VALUE_PARAMETER,
    CONSTRUCTOR, FUNCTION, PROPERTY_GETTER, PROPERTY_SETTER, TYPEALIAS
)
@MustBeDocumented
annotation class ExperimentalKonfigApi(val message: String = "")