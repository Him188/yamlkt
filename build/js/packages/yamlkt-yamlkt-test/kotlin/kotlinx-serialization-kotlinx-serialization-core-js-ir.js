(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.a7;
  var Annotation = kotlin_kotlin.$_$.t6;
  var classMeta = kotlin_kotlin.$_$.g4;
  var setMetadataFor = kotlin_kotlin.$_$.h5;
  var getKClass = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.m4;
  var emptyList = kotlin_kotlin.$_$.h3;
  var Unit_getInstance = kotlin_kotlin.$_$.k2;
  var asList = kotlin_kotlin.$_$.s2;
  var interfaceMeta = kotlin_kotlin.$_$.o4;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.e2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.j7;
  var KProperty1 = kotlin_kotlin.$_$.s5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l4;
  var captureStack = kotlin_kotlin.$_$.c4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.t;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.u;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.w;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.s;
  var IllegalArgumentException = kotlin_kotlin.$_$.w6;
  var isInterface = kotlin_kotlin.$_$.x4;
  var equals = kotlin_kotlin.$_$.i4;
  var Iterator = kotlin_kotlin.$_$.n2;
  var Iterable = kotlin_kotlin.$_$.m2;
  var isBlank = kotlin_kotlin.$_$.z5;
  var toString = kotlin_kotlin.$_$.j5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var toList = kotlin_kotlin.$_$.v3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.m;
  var toHashSet = kotlin_kotlin.$_$.u3;
  var copyToArray = kotlin_kotlin.$_$.g3;
  var toBooleanArray = kotlin_kotlin.$_$.t3;
  var withIndex = kotlin_kotlin.$_$.x3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var to = kotlin_kotlin.$_$.o7;
  var toMap = kotlin_kotlin.$_$.w3;
  var lazy_0 = kotlin_kotlin.$_$.k7;
  var contentEquals = kotlin_kotlin.$_$.v2;
  var until = kotlin_kotlin.$_$.o5;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var objectMeta = kotlin_kotlin.$_$.g5;
  var ensureNotNull = kotlin_kotlin.$_$.i7;
  var Char = kotlin_kotlin.$_$.u6;
  var isObject = kotlin_kotlin.$_$.z4;
  var toIntOrNull = kotlin_kotlin.$_$.k6;
  var hashCode = kotlin_kotlin.$_$.n4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x;
  var Map = kotlin_kotlin.$_$.r2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.o;
  var LinkedHashMap = kotlin_kotlin.$_$.o2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.p;
  var List = kotlin_kotlin.$_$.p2;
  var ArrayList = kotlin_kotlin.$_$.l2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.j;
  var step = kotlin_kotlin.$_$.n5;
  var getValue = kotlin_kotlin.$_$.k3;
  var isArray = kotlin_kotlin.$_$.p4;
  var arrayIterator = kotlin_kotlin.$_$.a4;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.c2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.p1;
  var UInt = kotlin_kotlin.$_$.d7;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.o1;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.l;
  var contentHashCode = kotlin_kotlin.$_$.w2;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var fillArrayVal = kotlin_kotlin.$_$.j4;
  var booleanArray = kotlin_kotlin.$_$.b4;
  var emptyMap = kotlin_kotlin.$_$.i3;
  var Companion_getInstance = kotlin_kotlin.$_$.g2;
  var isCharArray = kotlin_kotlin.$_$.s4;
  var charArray = kotlin_kotlin.$_$.d4;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.a2;
  var isDoubleArray = kotlin_kotlin.$_$.u4;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.b2;
  var isFloatArray = kotlin_kotlin.$_$.v4;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.h2;
  var isLongArray = kotlin_kotlin.$_$.y4;
  var longArray = kotlin_kotlin.$_$.c5;
  var isIntArray = kotlin_kotlin.$_$.w4;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.d2;
  var isShortArray = kotlin_kotlin.$_$.a5;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.z1;
  var isByteArray = kotlin_kotlin.$_$.r4;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.y1;
  var isBooleanArray = kotlin_kotlin.$_$.q4;
  var coerceAtLeast = kotlin_kotlin.$_$.k5;
  var copyOf = kotlin_kotlin.$_$.a3;
  var copyOf_0 = kotlin_kotlin.$_$.c3;
  var copyOf_1 = kotlin_kotlin.$_$.d3;
  var copyOf_2 = kotlin_kotlin.$_$.y2;
  var copyOf_3 = kotlin_kotlin.$_$.f3;
  var copyOf_4 = kotlin_kotlin.$_$.x2;
  var copyOf_5 = kotlin_kotlin.$_$.b3;
  var copyOf_6 = kotlin_kotlin.$_$.z2;
  var Long = kotlin_kotlin.$_$.y6;
  var Unit = kotlin_kotlin.$_$.e7;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var mapOf = kotlin_kotlin.$_$.s3;
  var Pair = kotlin_kotlin.$_$.z6;
  var Triple = kotlin_kotlin.$_$.c7;
  var Entry = kotlin_kotlin.$_$.q2;
  var KClass = kotlin_kotlin.$_$.p5;
  var asSequence = kotlin_kotlin.$_$.t2;
  var get_indices = kotlin_kotlin.$_$.m3;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.z;
  var get_indices_0 = kotlin_kotlin.$_$.l3;
  var get_js = kotlin_kotlin.$_$.b5;
  var findAssociatedObject = kotlin_kotlin.$_$.b;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalSerializationApi, 'ExperimentalSerializationApi', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(InternalSerializationApi, 'InternalSerializationApi', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(Serializable, 'Serializable', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(Serializer, 'Serializer', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(Contextual, 'Contextual', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(SerialInfo, 'SerialInfo', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(SerializationStrategy, 'SerializationStrategy', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DeserializationStrategy, 'DeserializationStrategy', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta, undefined, [SerializationStrategy, DeserializationStrategy], undefined, undefined, []);
  setMetadataFor(ContextualSerializer, 'ContextualSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer, undefined, undefined, undefined, []);
  setMetadataFor(SerialFormat, 'SerialFormat', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringFormat, 'StringFormat', interfaceMeta, undefined, [SerialFormat], undefined, undefined, []);
  setMetadataFor(SerializationException, 'SerializationException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(UnknownFieldException, 'UnknownFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(MissingFieldException, 'MissingFieldException', classMeta, SerializationException, undefined, undefined, undefined, []);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(elementDescriptors$1$1, undefined, classMeta, undefined, [Iterator], undefined, undefined, []);
  setMetadataFor(_no_name_provided__qut3iv, undefined, classMeta, undefined, [Iterable], undefined, undefined, []);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(SerialKind, 'SerialKind', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ENUM, 'ENUM', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind, undefined, undefined, undefined, []);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(MAP, 'MAP', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind, undefined, undefined, undefined, []);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind, undefined, undefined, undefined, []);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind, undefined, undefined, undefined, []);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.beginStructure_dv3yt3_k$(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.serialize_32qylj_k$(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_g55msp_k$(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.encodeNull_ek2hec_k$();
    } else {
      this.encodeNotNullMark_40lhgg_k$();
      this.encodeSerializableValue_g55msp_k$(serializer, value);
    }
  }
  setMetadataFor(Encoder, 'Encoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  setMetadataFor(CompositeEncoder, 'CompositeEncoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(AbstractEncoder, 'AbstractEncoder', classMeta, undefined, [Encoder, CompositeEncoder], undefined, undefined, []);
  function decodeSerializableValue(deserializer) {
    return deserializer.deserialize_2t41fm_k$(this);
  }
  function decodeNullableSerializableValue(deserializer) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_6v83lo_k$(deserializer) : this.decodeNull_jzrmuj_k$();
  }
  setMetadataFor(Decoder, 'Decoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeSerializableElement_nrfur_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function decodeNullableSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeNullableSerializableElement_1n5pmg_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  setMetadataFor(CompositeDecoder, 'CompositeDecoder', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(MapLikeDescriptor, 'MapLikeDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', classMeta, MapLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(ArrayListClassDesc, 'ArrayListClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(ArrayClassDesc, 'ArrayClassDesc', classMeta, ListLikeDescriptor, undefined, undefined, undefined, []);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ListLikeSerializer, 'ListLikeSerializer', classMeta, AbstractCollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, ListLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PrimitiveArrayBuilder, 'PrimitiveArrayBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MapLikeSerializer, 'MapLikeSerializer', classMeta, AbstractCollectionSerializer, undefined, undefined, undefined, []);
  setMetadataFor(LinkedHashMapSerializer, 'LinkedHashMapSerializer', classMeta, MapLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(ArrayListSerializer, 'ArrayListSerializer', classMeta, ListLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(ReferenceArraySerializer, 'ReferenceArraySerializer', classMeta, ListLikeSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor, undefined, undefined, undefined, []);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(InlinePrimitiveDescriptor$1, undefined, classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(NoOpEncoder, 'NoOpEncoder', objectMeta, AbstractEncoder, undefined, undefined, undefined, []);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, undefined, [SerialDescriptor, CachedNames], undefined, undefined, []);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(SerializerFactory, 'SerializerFactory', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer], undefined, undefined, []);
  setMetadataFor(CharArrayBuilder, 'CharArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(DoubleArrayBuilder, 'DoubleArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(FloatArrayBuilder, 'FloatArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(LongArrayBuilder, 'LongArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(IntArrayBuilder, 'IntArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(ShortArrayBuilder, 'ShortArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(ByteArrayBuilder, 'ByteArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(BooleanArrayBuilder, 'BooleanArrayBuilder', classMeta, PrimitiveArrayBuilder, undefined, undefined, undefined, []);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', classMeta, undefined, [SerialDescriptor], undefined, undefined, []);
  setMetadataFor(SerializationConstructorMarker, 'SerializationConstructorMarker', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(KeyValueSerializer, 'KeyValueSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(PairSerializer_0, 'PairSerializer', classMeta, KeyValueSerializer, undefined, undefined, undefined, []);
  setMetadataFor(TripleSerializer_0, 'TripleSerializer', classMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(MapEntry, 'MapEntry', classMeta, undefined, [Entry], undefined, undefined, []);
  setMetadataFor(MapEntrySerializer_0, 'MapEntrySerializer', classMeta, KeyValueSerializer, undefined, undefined, undefined, []);
  setMetadataFor(PolymorphicModuleBuilder, 'PolymorphicModuleBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerializersModule, 'SerializersModule', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(SerialModuleImpl, 'SerialModuleImpl', classMeta, SerializersModule, undefined, undefined, undefined, []);
  setMetadataFor(ContextualProvider, 'ContextualProvider', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Argless, 'Argless', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  setMetadataFor(WithTypeArguments, 'WithTypeArguments', classMeta, ContextualProvider, undefined, undefined, undefined, []);
  function contextual(kClass, serializer) {
    return this.contextual_oi2m58_k$(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  function polymorphicDefault(baseClass, defaultDeserializerProvider) {
    this.polymorphicDefaultDeserializer_rsx40t_k$(baseClass, defaultDeserializerProvider);
  }
  setMetadataFor(SerializersModuleCollector, 'SerializersModuleCollector', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(overwriteWith$1$1, undefined, classMeta, undefined, [SerializersModuleCollector], undefined, undefined, []);
  setMetadataFor(SerializersModuleBuilder, 'SerializersModuleBuilder', classMeta, undefined, [SerializersModuleCollector], undefined, undefined, []);
  setMetadataFor(SerializerAlreadyRegisteredException, 'SerializerAlreadyRegisteredException', classMeta, IllegalArgumentException, undefined, undefined, undefined, []);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, undefined, [Annotation], 0, undefined, []);
  //endregion
  function ExperimentalSerializationApi() {
  }
  ExperimentalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalSerializationApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalSerializationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.ExperimentalSerializationApi()';
  };
  function InternalSerializationApi() {
  }
  InternalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof InternalSerializationApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalSerializationApi ? other : THROW_CCE();
    return true;
  };
  InternalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  InternalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.InternalSerializationApi()';
  };
  function Serializable_init_$Init$(with_0, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      with_0 = getKClass(KSerializer);
    Serializable.call($this, with_0);
    return $this;
  }
  function Serializable_init_$Create$(with_0, $mask0, $marker) {
    return Serializable_init_$Init$(with_0, $mask0, $marker, Object.create(Serializable.prototype));
  }
  function Serializable(with_0) {
    this.with_1 = with_0;
  }
  Serializable.prototype.get_with_wowvm7_k$ = function () {
    return this.with_1;
  };
  Serializable.prototype.equals = function (other) {
    if (!(other instanceof Serializable))
      return false;
    var tmp0_other_with_cast = other instanceof Serializable ? other : THROW_CCE();
    if (!this.with_1.equals(tmp0_other_with_cast.with_1))
      return false;
    return true;
  };
  Serializable.prototype.hashCode = function () {
    return imul(getStringHashCode('with'), 127) ^ this.with_1.hashCode();
  };
  Serializable.prototype.toString = function () {
    return '@kotlinx.serialization.Serializable(with=' + this.with_1 + ')';
  };
  function Serializer(forClass) {
    this.forClass_1 = forClass;
  }
  Serializer.prototype.get_forClass_olla14_k$ = function () {
    return this.forClass_1;
  };
  Serializer.prototype.equals = function (other) {
    if (!(other instanceof Serializer))
      return false;
    var tmp0_other_with_cast = other instanceof Serializer ? other : THROW_CCE();
    if (!this.forClass_1.equals(tmp0_other_with_cast.forClass_1))
      return false;
    return true;
  };
  Serializer.prototype.hashCode = function () {
    return imul(getStringHashCode('forClass'), 127) ^ this.forClass_1.hashCode();
  };
  Serializer.prototype.toString = function () {
    return '@kotlinx.serialization.Serializer(forClass=' + this.forClass_1 + ')';
  };
  function Contextual() {
  }
  Contextual.prototype.equals = function (other) {
    if (!(other instanceof Contextual))
      return false;
    var tmp0_other_with_cast = other instanceof Contextual ? other : THROW_CCE();
    return true;
  };
  Contextual.prototype.hashCode = function () {
    return 0;
  };
  Contextual.prototype.toString = function () {
    return '@kotlinx.serialization.Contextual()';
  };
  function SerialInfo() {
  }
  SerialInfo.prototype.equals = function (other) {
    if (!(other instanceof SerialInfo))
      return false;
    var tmp0_other_with_cast = other instanceof SerialInfo ? other : THROW_CCE();
    return true;
  };
  SerialInfo.prototype.hashCode = function () {
    return 0;
  };
  SerialInfo.prototype.toString = function () {
    return '@kotlinx.serialization.SerialInfo()';
  };
  function _get_serializableClass__c75hzc($this) {
    return $this.serializableClass_1;
  }
  function _get_fallbackSerializer__wu91xl($this) {
    return $this.fallbackSerializer_1;
  }
  function _get_typeArgumentsSerializers__h5ygpy($this) {
    return $this.typeArgumentsSerializers_1;
  }
  function serializer($this, serializersModule) {
    var tmp0_elvis_lhs = serializersModule.getContextual_r3x7wt_k$($this.serializableClass_1, $this.typeArgumentsSerializers_1);
    var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? $this.fallbackSerializer_1 : tmp0_elvis_lhs;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      serializerNotRegistered($this.serializableClass_1);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function ContextualSerializer_init_$Init$(serializableClass, $this) {
    ContextualSerializer.call($this, serializableClass, null, get_EMPTY_SERIALIZER_ARRAY());
    return $this;
  }
  function ContextualSerializer_init_$Create$(serializableClass) {
    return ContextualSerializer_init_$Init$(serializableClass, Object.create(ContextualSerializer.prototype));
  }
  function ContextualSerializer$descriptor$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_safe_receiver = this$0.fallbackSerializer_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_descriptor_wjt6a0_k$();
      var tmp0_orEmpty = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_annotations_20dirp_k$();
      var tmp0_elvis_lhs = tmp0_orEmpty;
      tmp$ret$0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      $this$buildSerialDescriptor.set_annotations_vlf62n_k$(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function ContextualSerializer(serializableClass, fallbackSerializer, typeArgumentsSerializers) {
    this.serializableClass_1 = serializableClass;
    this.fallbackSerializer_1 = fallbackSerializer;
    this.typeArgumentsSerializers_1 = asList(typeArgumentsSerializers);
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = withContext(buildSerialDescriptor$default('kotlinx.serialization.ContextualSerializer', tmp_0, [], ContextualSerializer$descriptor$lambda(this), 4, null), this.serializableClass_1);
  }
  ContextualSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ContextualSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    encoder.encodeSerializableValue_g55msp_k$(serializer(this, encoder.get_serializersModule_piitvg_k$()), value);
  };
  ContextualSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeSerializableValue_6v83lo_k$(serializer(this, decoder.get_serializersModule_piitvg_k$()));
  };
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_e7t5h9_k$(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(klassName, _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.findPolymorphicSerializerOrNull_mimmn_k$(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(getKClassFromExpression(value), _this__u8e3s4.get_baseClass_lygw3m_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, Object.create(PolymorphicSerializer.prototype));
  }
  function _set__annotations__kk13ma($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq($this) {
    return $this._annotations_1;
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer_0(StringCompanionObject_getInstance()).get_descriptor_wjt6a0_k$();
      $this$buildSerialDescriptor.element$default_m7h690_k$('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.baseClass_1.get_simpleName_r6f8py_k$() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.element$default_m7h690_k$('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.set_annotations_vlf62n_k$(this$0._annotations_1);
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.baseClass_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.baseClass_1 = baseClass;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  PolymorphicSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory();
    tmp$ret$0 = this.descriptor$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.baseClass_1 + ')';
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function StringFormat() {
  }
  function SerialFormat() {
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_1(message, cause) {
    var tmp = SerializationException_init_$Init$_1(message, cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_1);
    return tmp;
  }
  function SerializationException_init_$Init$_2(cause, $this) {
    IllegalArgumentException_init_$Init$_2(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_2(cause) {
    var tmp = SerializationException_init_$Init$_2(cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_2);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function MissingFieldException_init_$Init$(fieldName, $this) {
    MissingFieldException.call($this, "Field '" + fieldName + "' is required, but it was missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(fieldName) {
    var tmp = MissingFieldException_init_$Init$(fieldName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException_init_$Init$_0(fieldNames, serialName, $this) {
    MissingFieldException.call($this, fieldNames.get_size_woubt6_k$() === 1 ? "Field '" + fieldNames.get_fkrdnv_k$(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + fieldNames + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$_0(fieldNames, serialName) {
    var tmp = MissingFieldException_init_$Init$_0(fieldNames, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$_0);
    return tmp;
  }
  function MissingFieldException(message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
  }
  function serializerOrNull(_this__u8e3s4) {
    var tmp0_elvis_lhs = compiledSerializerImpl(_this__u8e3s4);
    return tmp0_elvis_lhs == null ? builtinSerializerOrNull(_this__u8e3s4) : tmp0_elvis_lhs;
  }
  function serializer_0(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function PairSerializer(keySerializer, valueSerializer) {
    return new PairSerializer_0(keySerializer, valueSerializer);
  }
  function TripleSerializer(aSerializer, bSerializer, cSerializer) {
    return new TripleSerializer_0(aSerializer, bSerializer, cSerializer);
  }
  function MapEntrySerializer(keySerializer, valueSerializer) {
    return new MapEntrySerializer_0(keySerializer, valueSerializer);
  }
  function ArraySerializer(kClass, elementSerializer) {
    return new ReferenceArraySerializer(kClass, elementSerializer);
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function _get_original__l7ku1m($this) {
    return $this.original_1;
  }
  function ContextDescriptor(original, kClass) {
    this.original_1 = original;
    this.kClass_1 = kClass;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '<' + this.kClass_1.get_simpleName_r6f8py_k$() + '>';
  }
  ContextDescriptor.prototype.get_kClass_f4awuu_k$ = function () {
    return this.kClass_1;
  };
  ContextDescriptor.prototype.get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  ContextDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  ContextDescriptor.prototype.get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  ContextDescriptor.prototype.get_isNullable_67sy7o_k$ = function () {
    return this.original_1.get_isNullable_67sy7o_k$();
  };
  ContextDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  ContextDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.original_1.getElementAnnotations_a57oar_k$(index);
  };
  ContextDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.original_1.getElementDescriptor_sqz94k_k$(index);
  };
  ContextDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.original_1.getElementIndex_2hwbkl_k$(name);
  };
  ContextDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.original_1.getElementName_ykpypc_k$(index);
  };
  ContextDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.original_1.isElementOptional_c3hgb3_k$(index);
  };
  ContextDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.original_1, another.original_1) ? another.kClass_1.equals(this.kClass_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.kClass_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.serialName_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.kClass_1 + ', original: ' + this.original_1 + ')';
  };
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.Iterable' call
    tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    return tmp$ret$0;
  }
  function _set_elementsLeft__kqd1tz($this, _set____db54di) {
    $this.elementsLeft_1 = _set____db54di;
  }
  function _get_elementsLeft__56mb9v($this) {
    return $this.elementsLeft_1;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
    this.elementsLeft_1 = $this_elementDescriptors.get_elementsCount_288r0x_k$();
  }
  elementDescriptors$1$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.elementsLeft_1 > 0;
  };
  elementDescriptors$1$1.prototype.next_20eer_k$ = function () {
    var tmp = this.$this_elementDescriptors_1.get_elementsCount_288r0x_k$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.elementsLeft_1;
    tmp0_this.elementsLeft_1 = tmp1 - 1 | 0;
    return this.$this_elementDescriptors_1.getElementDescriptor_sqz94k_k$(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.iterator_jk1svi_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    tmp$ret$0 = new elementDescriptors$1$1(this.$this_elementDescriptors_1);
    return tmp$ret$0;
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    var tmp1_require = !equals(kind, CLASS_getInstance());
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      var message_0 = tmp$ret$2;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda;
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function _get_uniqueNames__t2j14q($this) {
    return $this.uniqueNames_1;
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName_1 = serialName;
    this.isNullable_1 = false;
    this.annotations_1 = emptyList();
    this.elementNames_1 = ArrayList_init_$Create$();
    this.uniqueNames_1 = HashSet_init_$Create$();
    this.elementDescriptors_1 = ArrayList_init_$Create$();
    this.elementAnnotations_1 = ArrayList_init_$Create$();
    this.elementOptionality_1 = ArrayList_init_$Create$();
  }
  ClassSerialDescriptorBuilder.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  ClassSerialDescriptorBuilder.prototype.set_isNullable_o72f9b_k$ = function (_set____db54di) {
    this.isNullable_1 = _set____db54di;
  };
  ClassSerialDescriptorBuilder.prototype.get_isNullable_67sy7o_k$ = function () {
    return this.isNullable_1;
  };
  ClassSerialDescriptorBuilder.prototype.set_annotations_vlf62n_k$ = function (_set____db54di) {
    this.annotations_1 = _set____db54di;
  };
  ClassSerialDescriptorBuilder.prototype.get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementNames_57dki3_k$ = function () {
    return this.elementNames_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementDescriptors_jxewnl_k$ = function () {
    return this.elementDescriptors_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementAnnotations_wjl0r5_k$ = function () {
    return this.elementAnnotations_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementOptionality_sheked_k$ = function () {
    return this.elementOptionality_1;
  };
  ClassSerialDescriptorBuilder.prototype.element_t1rubu_k$ = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.uniqueNames_1.add_1j60pz_k$(elementName);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp1_plusAssign = tmp0_this.elementNames_1;
    tmp1_plusAssign.add_1j60pz_k$(elementName);
    var tmp1_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = tmp1_this.elementDescriptors_1;
    tmp2_plusAssign.add_1j60pz_k$(descriptor);
    var tmp2_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp3_plusAssign = tmp2_this.elementAnnotations_1;
    tmp3_plusAssign.add_1j60pz_k$(annotations);
    var tmp3_this = this;
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp4_plusAssign = tmp3_this.elementOptionality_1;
    tmp4_plusAssign.add_1j60pz_k$(isOptional);
  };
  ClassSerialDescriptorBuilder.prototype.element$default_m7h690_k$ = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.element_t1rubu_k$(elementName, descriptor, annotations, isOptional);
  };
  function _get_elementNames__mdlk9t($this) {
    return $this.elementNames_1;
  }
  function _get_elementDescriptors__y23q9p($this) {
    return $this.elementDescriptors_1;
  }
  function _get_elementAnnotations__1vliwz($this) {
    return $this.elementAnnotations_1;
  }
  function _get_elementOptionality__ruzsih($this) {
    return $this.elementOptionality_1;
  }
  function _get_name2Index__3zzra8($this) {
    return $this.name2Index_1;
  }
  function _get_typeParametersDescriptors__7g731r($this) {
    return $this.typeParametersDescriptors_1;
  }
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory();
    tmp$ret$0 = $this._hashCode$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.typeParametersDescriptors_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.getElementName_ykpypc_k$(it) + ': ' + this$0.getElementDescriptor_sqz94k_k$(it).get_serialName_u2rqhk_k$();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
    this.elementsCount_1 = elementsCount;
    this.annotations_1 = builder.annotations_1;
    this.serialNames_1 = toHashSet(builder.elementNames_1);
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray = builder.elementNames_1;
    tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    tmp.elementNames_1 = tmp$ret$0;
    this.elementDescriptors_1 = compactArray(builder.elementDescriptors_1);
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp0_toTypedArray_0 = builder.elementAnnotations_1;
    tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    tmp_0.elementAnnotations_1 = tmp$ret$1;
    this.elementOptionality_1 = toBooleanArray(builder.elementOptionality_1);
    var tmp_1 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.map' call
    var tmp1_map = withIndex(this.elementNames_1);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map, 10));
    var tmp0_iterator = tmp1_map.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      tmp$ret$2 = to(item.get_value_j01efc_k$(), item.get_index_it478p_k$());
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
    }
    tmp$ret$3 = tmp0_mapTo;
    tmp$ret$4 = tmp$ret$3;
    tmp_1.name2Index_1 = toMap(tmp$ret$4);
    this.typeParametersDescriptors_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2._hashCode$delegate_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  SerialDescriptorImpl.prototype.get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  SerialDescriptorImpl.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  SerialDescriptorImpl.prototype.get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  SerialDescriptorImpl.prototype.get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  SerialDescriptorImpl.prototype.getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.elementNames_1, index);
  };
  SerialDescriptorImpl.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.name2Index_1.get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_1().get_UNKNOWN_NAME_lj8hxl_k$() : tmp0_elvis_lhs;
  };
  SerialDescriptorImpl.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return getChecked(this.elementAnnotations_1, index);
  };
  SerialDescriptorImpl.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(this.elementDescriptors_1, index);
  };
  SerialDescriptorImpl.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementOptionality_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.typeParametersDescriptors_1, tmp0__anonymous__q1qw7t.typeParametersDescriptors_1);
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.serialName_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  function buildClassSerialDescriptor(serialName, typeParameters, builderAction) {
    // Inline function 'kotlin.require' call
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotBlank' call
    tmp$ret$0 = !isBlank(serialName);
    var tmp0_require = tmp$ret$0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.descriptors.buildClassSerialDescriptor.<anonymous>' call
      tmp$ret$1 = 'Blank serial names are prohibited';
      var message = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builderAction(sdBuilder);
    return new SerialDescriptorImpl(serialName, CLASS_getInstance(), sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function buildClassSerialDescriptor$default(serialName, typeParameters, builderAction, $mask0, $handler) {
    if (!(($mask0 & 4) === 0)) {
      builderAction = buildClassSerialDescriptor$lambda;
    }
    return buildClassSerialDescriptor(serialName, typeParameters, builderAction);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function buildClassSerialDescriptor$lambda($this$null) {
    return Unit_getInstance();
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function AbstractEncoder() {
  }
  AbstractEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this;
  };
  AbstractEncoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
  };
  AbstractEncoder.prototype.encodeElement_gaiom2_k$ = function (descriptor, index) {
    return true;
  };
  AbstractEncoder.prototype.encodeValue_g5opg2_k$ = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + getKClassFromExpression(value) + ' is not supported by ' + getKClassFromExpression(this) + ' encoder');
  };
  AbstractEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  AbstractEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(new Char(value));
  };
  AbstractEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return this.encodeValue_g5opg2_k$(value);
  };
  AbstractEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeValue_g5opg2_k$(index);
  };
  AbstractEncoder.prototype.encodeInline_8gn4q6_k$ = function (inlineDescriptor) {
    return this;
  };
  AbstractEncoder.prototype.encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeBoolean_6cztl5_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeByte_gpyndp_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeShort_rh3vxz_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeInt_5vxmon_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeLong_rk3ab9_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeFloat_f5fde1_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeDouble_79ztsb_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeChar_kkx54x_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeString_90sumj_k$(value);
    }
  };
  AbstractEncoder.prototype.encodeInlineElement_9d3ws3_k$ = function (descriptor, index) {
    return this.encodeElement_gaiom2_k$(descriptor, index) ? this.encodeInline_8gn4q6_k$(descriptor.getElementDescriptor_sqz94k_k$(index)) : NoOpEncoder_getInstance();
  };
  AbstractEncoder.prototype.encodeSerializableElement_cw68jm_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeSerializableValue_g55msp_k$(serializer, value);
    }
  };
  AbstractEncoder.prototype.encodeNullableSerializableElement_j50jzb_k$ = function (descriptor, index, serializer, value) {
    if (this.encodeElement_gaiom2_k$(descriptor, index)) {
      this.encodeNullableSerializableValue_4n8qik_k$(serializer, value);
    }
  };
  function Decoder() {
  }
  function Companion() {
    Companion_instance = this;
    this.DECODE_DONE_1 = -1;
    this.UNKNOWN_NAME_1 = -3;
  }
  Companion.prototype.get_DECODE_DONE_1b8fna_k$ = function () {
    return this.DECODE_DONE_1;
  };
  Companion.prototype.get_UNKNOWN_NAME_lj8hxl_k$ = function () {
    return this.UNKNOWN_NAME_1;
  };
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
    Companion_getInstance_1();
  }
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_dv3yt3_k$(descriptor);
    var ex = null;
    try {
      return block(composite);
    } catch ($p) {
      if ($p instanceof Error) {
        ex = $p;
        throw $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (ex == null) {
        composite.endStructure_e64gd4_k$(descriptor);
      }
    }
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = _this__u8e3s4.beginCollection_dgpn47_k$(descriptor, collectionSize);
    // Inline function 'kotlin.contracts.contract' call
    block(tmp0_with);
    tmp0_with.endStructure_e64gd4_k$(descriptor);
    tmp$ret$0 = Unit_getInstance();
  }
  function encodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_dv3yt3_k$(descriptor);
    var ex = null;
    try {
      block(composite);
    } catch ($p) {
      if ($p instanceof Error) {
        ex = $p;
        throw $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (ex == null) {
        composite.endStructure_e64gd4_k$(descriptor);
      }
    }
  }
  function throwSubtypeNotRegistered(subClassName, baseClass) {
    var scope = "in the scope of '" + baseClass.get_simpleName_r6f8py_k$() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default polymorphic serializers were registered ' + scope : "Class '" + subClassName + "' is not registered for polymorphic serialization " + scope + '.\n' + "Mark the base class as 'sealed' or register the serializer explicitly.");
  }
  function throwSubtypeNotRegistered_0(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.get_simpleName_r6f8py_k$();
    throwSubtypeNotRegistered(tmp0_elvis_lhs == null ? '' + subClass : tmp0_elvis_lhs, baseClass);
  }
  function decodeSequentially_0($this, compositeDecoder) {
    var klassName = compositeDecoder.decodeStringElement_4is7ib_k$($this.get_descriptor_wjt6a0_k$(), 0);
    var serializer = findPolymorphicSerializer($this, compositeDecoder, klassName);
    var tmp = $this.get_descriptor_wjt6a0_k$();
    return compositeDecoder.decodeSerializableElement$default_t023k4_k$(tmp, 1, serializer, null, 8, null);
  }
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    var actualSerializer = findPolymorphicSerializer_0(this, encoder, value);
    // Inline function 'kotlinx.serialization.encoding.encodeStructure' call
    var tmp0_encodeStructure = this.get_descriptor_wjt6a0_k$();
    var composite = encoder.beginStructure_dv3yt3_k$(tmp0_encodeStructure);
    var ex = null;
    try {
      // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.serialize.<anonymous>' call
      composite.encodeStringElement_pgmbgj_k$(this.get_descriptor_wjt6a0_k$(), 0, actualSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
      var tmp = this.get_descriptor_wjt6a0_k$();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = isInterface(actualSerializer, SerializationStrategy) ? actualSerializer : THROW_CCE();
      composite.encodeSerializableElement_cw68jm_k$(tmp, 1, tmp$ret$0, value);
    } catch ($p) {
      if ($p instanceof Error) {
        ex = $p;
        throw $p;
      } else {
        throw $p;
      }
    }
    finally {
      if (ex == null) {
        composite.endStructure_e64gd4_k$(tmp0_encodeStructure);
      }
    }
  };
  AbstractPolymorphicSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$5;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.get_descriptor_wjt6a0_k$();
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$4;
        // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>' call
        var klassName = null;
        var value = null;
        if (composite.decodeSequentially_xlblqy_k$()) {
          return decodeSequentially_0(this, composite);
        }
        mainLoop: while (true) {
          var index = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
          if (index === Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$()) {
            break mainLoop;
          } else if (index === 0) {
            klassName = composite.decodeStringElement_4is7ib_k$(this.get_descriptor_wjt6a0_k$(), index);
          } else if (index === 1) {
            var tmp$ret$1;
            $l$block: {
              // Inline function 'kotlin.requireNotNull' call
              var tmp0_requireNotNull = klassName;
              // Inline function 'kotlin.contracts.contract' call
              if (tmp0_requireNotNull == null) {
                var tmp$ret$0;
                // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
                tmp$ret$0 = 'Cannot read polymorphic value before its type token';
                var message = tmp$ret$0;
                throw IllegalArgumentException_init_$Create$(toString(message));
              } else {
                tmp$ret$1 = tmp0_requireNotNull;
                break $l$block;
              }
            }
            klassName = tmp$ret$1;
            var serializer = findPolymorphicSerializer(this, composite, klassName);
            var tmp = this.get_descriptor_wjt6a0_k$();
            value = composite.decodeSerializableElement$default_t023k4_k$(tmp, index, serializer, null, 8, null);
          } else {
            var tmp0_elvis_lhs = klassName;
            throw SerializationException_init_$Create$_0('Invalid index in polymorphic deserialization of ' + (tmp0_elvis_lhs == null ? 'unknown class' : tmp0_elvis_lhs) + ('\n Expected 0, 1 or DECODE_DONE(-1), but found ' + index));
          }
        }
        var tmp$ret$3;
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          var tmp1_requireNotNull = value;
          // Inline function 'kotlin.contracts.contract' call
          if (tmp1_requireNotNull == null) {
            var tmp$ret$2;
            // Inline function 'kotlinx.serialization.internal.AbstractPolymorphicSerializer.deserialize.<anonymous>.<anonymous>' call
            tmp$ret$2 = 'Polymorphic value has not been read for class ' + klassName;
            var message_0 = tmp$ret$2;
            throw IllegalArgumentException_init_$Create$(toString(message_0));
          } else {
            tmp$ret$3 = tmp1_requireNotNull;
            break $l$block_0;
          }
        }
        var tmp_0 = tmp$ret$3;
        tmp$ret$4 = isObject(tmp_0) ? tmp_0 : THROW_CCE();
        tmp$ret$5 = tmp$ret$4;
        break $l$block_1;
      } catch ($p) {
        if ($p instanceof Error) {
          ex = $p;
          throw $p;
        } else {
          throw $p;
        }
      }
      finally {
        if (ex == null) {
          composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
        }
      }
    }
    return tmp$ret$5;
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_e7t5h9_k$ = function (decoder, klassName) {
    return decoder.get_serializersModule_piitvg_k$().getPolymorphic_39bkdo_k$(this.get_baseClass_lygw3m_k$(), klassName);
  };
  AbstractPolymorphicSerializer.prototype.findPolymorphicSerializerOrNull_mimmn_k$ = function (encoder, value) {
    return encoder.get_serializersModule_piitvg_k$().getPolymorphic_38ak3b_k$(this.get_baseClass_lygw3m_k$(), value);
  };
  function CachedNames() {
  }
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_1 = primitive.get_serialName_u2rqhk_k$() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor_1 = elementDescriptor;
    this.elementsCount_1 = 1;
  }
  ListLikeDescriptor.prototype.get_elementDescriptor_pui6ea_k$ = function () {
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  ListLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  ListLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.elementDescriptor_1, other.elementDescriptor_1) ? this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.elementDescriptor_1), 31) + getStringHashCode(this.get_serialName_u2rqhk_k$()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.elementDescriptor_1 + ')';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.ArrayList';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_1 = serialName;
    this.keyDescriptor_1 = keyDescriptor;
    this.valueDescriptor_1 = valueDescriptor;
    this.elementsCount_1 = 2;
  }
  MapLikeDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  MapLikeDescriptor.prototype.get_keyDescriptor_qkqayt_k$ = function () {
    return this.keyDescriptor_1;
  };
  MapLikeDescriptor.prototype.get_valueDescriptor_j2bi95_k$ = function () {
    return this.valueDescriptor_1;
  };
  MapLikeDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  MapLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.isElementOptional.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  MapLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementAnnotations.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    // Inline function 'kotlin.require' call
    var tmp0_require = index >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeDescriptor.getElementDescriptor.<anonymous>' call
      tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.keyDescriptor_1;
        break;
      case 1:
        tmp = this.valueDescriptor_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$()))
      return false;
    if (!equals(this.keyDescriptor_1, other.keyDescriptor_1))
      return false;
    if (!equals(this.valueDescriptor_1, other.valueDescriptor_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.get_serialName_u2rqhk_k$());
    result = imul(31, result) + hashCode(this.keyDescriptor_1) | 0;
    result = imul(31, result) + hashCode(this.valueDescriptor_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.keyDescriptor_1 + ', ' + this.valueDescriptor_1 + ')';
  };
  function get_LINKED_HASH_MAP_NAME() {
    return LINKED_HASH_MAP_NAME;
  }
  var LINKED_HASH_MAP_NAME;
  function get_ARRAY_LIST_NAME() {
    return ARRAY_LIST_NAME;
  }
  var ARRAY_LIST_NAME;
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.Array';
  };
  function get_ARRAY_NAME() {
    return ARRAY_NAME;
  }
  var ARRAY_NAME;
  function PrimitiveArraySerializer(primitiveSerializer) {
    ListLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_1 = new PrimitiveArrayDescriptor(primitiveSerializer.get_descriptor_wjt6a0_k$());
  }
  PrimitiveArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  PrimitiveArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_position_jfponi_k$();
  };
  PrimitiveArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.build_1k0s4u_k$();
  };
  PrimitiveArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  PrimitiveArraySerializer.prototype.collectionIterator_apv53g_k$ = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_apv53g_k$((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.builder_3thy1n_k$ = function () {
    return this.toBuilder_9n7g5t_k$(this.empty_1lj7f1_k$());
  };
  PrimitiveArraySerializer.prototype.serialize_q3dfzy_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.descriptor_1;
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.PrimitiveArraySerializer.serialize.<anonymous>' call
    this.writeContent_jq3j40_k$(tmp0_with, value, size);
    tmp0_with.endStructure_e64gd4_k$(tmp0_encodeCollection);
    tmp$ret$0 = Unit_getInstance();
  };
  PrimitiveArraySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ensureCapacity$default_ya9857_k$ = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.get_position_jfponi_k$() + 1 | 0;
    var tmp;
    if ($handler == null) {
      this.ensureCapacity_ignus8_k$(requiredCapacity);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(requiredCapacity);
    }
    return tmp;
  };
  function _get_elementSerializer__tegbkt($this) {
    return $this.elementSerializer_1;
  }
  function ListLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_1 = elementSerializer;
  }
  ListLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.with' call
    var tmp0_with = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.ListLikeSerializer.serialize.<anonymous>' call
    var iterator = this.collectionIterator_v9vfqb_k$(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp0_with.encodeSerializableElement_cw68jm_k$(this.get_descriptor_wjt6a0_k$(), index, this.elementSerializer_1, iterator.next_20eer_k$());
      }
       while (inductionVariable < size);
    tmp0_with.endStructure_e64gd4_k$(tmp0_encodeCollection);
    tmp$ret$0 = Unit_getInstance();
  };
  ListLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  ListLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.ListLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  ListLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this.get_descriptor_wjt6a0_k$();
    this.insert_64qdau_k$(builder, index, decoder.decodeSerializableElement$default_t023k4_k$(tmp, index, this.elementSerializer_1, null, 8, null));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_cd6i6s_k$($this.get_descriptor_wjt6a0_k$());
    $this.checkCapacity_ge5iis_k$(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.merge_6fpf53_k$ = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toBuilder_9n7g5t_k$(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.builder_3thy1n_k$() : tmp1_elvis_lhs;
    var startIndex = this.builderSize_mmbugq_k$(builder);
    var compositeDecoder = decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    if (compositeDecoder.decodeSequentially_xlblqy_k$()) {
      this.readAll_s7t1kq_k$(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        if (index === Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$())
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.readElement$default_s49edv_k$(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    return this.toResult_nzwaf2_k$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  AbstractCollectionSerializer.prototype.readElement$default_s49edv_k$ = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    var tmp;
    if ($handler == null) {
      this.readElement_yuufx2_k$(decoder, index, builder, checkIndex);
      tmp = Unit_getInstance();
    } else {
      tmp = $handler(decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new LinkedHashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  LinkedHashMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  LinkedHashMapSerializer.prototype.collectionSize_1ouzjx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  LinkedHashMapSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_1ouzjx_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.collectionIterator_kjktzq_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_kjktzq_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.builder_3thy1n_k$ = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.builderSize_39d0bl_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  LinkedHashMapSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_39d0bl_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toResult_8706jh_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_8706jh_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toBuilder_iza02_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_iza02_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.checkCapacity_n86247_k$ = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_n86247_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_o57l8p_k$ = function (_this__u8e3s4, index, key, value) {
    _this__u8e3s4.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_nrn1wz_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_o57l8p_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function ArrayListSerializer(element) {
    ListLikeSerializer.call(this, element);
    this.descriptor_1 = new ArrayListClassDesc(element.get_descriptor_wjt6a0_k$());
  }
  ArrayListSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ArrayListSerializer.prototype.collectionSize_arfs71_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  ArrayListSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_arfs71_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.collectionIterator_ye4tsa_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.iterator_jk1svi_k$();
  };
  ArrayListSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_ye4tsa_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.builderSize_pted1r_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  ArrayListSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_pted1r_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toResult_t33s23_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_t33s23_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toBuilder_9sdg76_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_9sdg76_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.checkCapacity_ao7vf_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  ArrayListSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_ao7vf_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.insert_fxdj4m_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  ArrayListSerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_fxdj4m_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  MapLikeSerializer.prototype.get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  MapLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    var tmp0_require = size >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readAll.<anonymous>' call
      tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    var step_0 = progression.get_step_woujh1_k$();
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this.get_descriptor_wjt6a0_k$();
    var key = decoder.decodeSerializableElement$default_t023k4_k$(tmp, index, this.keySerializer_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      // Inline function 'kotlin.also' call
      var tmp0_also = decoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>' call
      // Inline function 'kotlin.require' call
      var tmp0_require = tmp0_also === (index + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_require) {
        var tmp$ret$0;
        // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.readElement.<anonymous>.<anonymous>' call
        tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp$ret$1 = tmp0_also;
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.containsKey_wgk31w_k$(key)) {
      var tmp_3 = this.valueSerializer_1.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.decodeSerializableElement_nrfur_k$(this.get_descriptor_wjt6a0_k$(), vIndex, this.valueSerializer_1, getValue(builder, key));
    } else {
      var tmp_4 = this.get_descriptor_wjt6a0_k$();
      tmp_1 = decoder.decodeSerializableElement$default_t023k4_k$(tmp_4, vIndex, this.valueSerializer_1, null, 8, null);
    }
    var value = tmp_1;
    // Inline function 'kotlin.collections.set' call
    builder.put_3mhbri_k$(key, value);
  };
  MapLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
    var tmp$ret$3;
    // Inline function 'kotlin.with' call
    var tmp0_with = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>' call
    var iterator = this.collectionIterator_v9vfqb_k$(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = iterator;
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.internal.MapLikeSerializer.serialize.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var v = tmp$ret$2;
      var tmp = this.get_descriptor_wjt6a0_k$();
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      tmp0_with.encodeSerializableElement_cw68jm_k$(tmp, tmp0, this.keySerializer_1, k);
      var tmp_0 = this.get_descriptor_wjt6a0_k$();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      tmp0_with.encodeSerializableElement_cw68jm_k$(tmp_0, tmp1, this.valueSerializer_1, v);
    }
    tmp0_with.endStructure_e64gd4_k$(tmp0_encodeCollection);
    tmp$ret$3 = Unit_getInstance();
  };
  MapLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  function _get_kClass__80op26($this) {
    return $this.kClass_1;
  }
  function ReferenceArraySerializer(kClass, eSerializer) {
    ListLikeSerializer.call(this, eSerializer);
    this.kClass_1 = kClass;
    this.descriptor_1 = new ArrayClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  ReferenceArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ReferenceArraySerializer.prototype.collectionSize_sgvbkw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_sgvbkw_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.collectionIterator_hdgi7n_k$ = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_hdgi7n_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.builderSize_q7iht4_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  ReferenceArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_q7iht4_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toResult_l9vbl8_k$ = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.kClass_1);
  };
  ReferenceArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_l9vbl8_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toBuilder_qnyl35_k$ = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qnyl35_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.checkCapacity_3yirqq_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  ReferenceArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_3yirqq_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.insert_5tew8_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  ReferenceArraySerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_5tew8_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.isInline_1 = true;
  }
  InlineClassDescriptor.prototype.get_isInline_usk17w_k$ = function () {
    return this.isInline_1;
  };
  InlineClassDescriptor.prototype.hashCode = function () {
    return imul(PluginGeneratedSerialDescriptor.prototype.hashCode.call(this), 31);
  };
  InlineClassDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = tmp0__anonymous__q1qw7t.isInline_1 ? contentEquals(this.get_typeParameterDescriptors_hcpg9q_k$(), tmp0__anonymous__q1qw7t.get_typeParameterDescriptors_hcpg9q_k$()) : false;
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.$primitiveSerializer_1 = $primitiveSerializer;
  }
  InlinePrimitiveDescriptor$1.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.$primitiveSerializer_1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  InlinePrimitiveDescriptor$1.prototype.get_descriptor_wjt6a0_k$ = function () {
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.serialize_32qylj_k$ = function (encoder, value) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  InlinePrimitiveDescriptor$1.prototype.deserialize_2t41fm_k$ = function (decoder) {
    // Inline function 'kotlin.error' call
    throw IllegalStateException_init_$Create$('unsupported');
  };
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.descriptor_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_getInstance()));
  }
  UIntSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  UIntSerializer.prototype.serialize_to749g_k$ = function (encoder, value) {
    var tmp = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(value);
    tmp.encodeInt_5vxmon_k$(tmp$ret$0);
  };
  UIntSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_to749g_k$(encoder, value instanceof UInt ? value.data_1 : THROW_CCE());
  };
  UIntSerializer.prototype.deserialize_a51uql_k$ = function (decoder) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeInt_8iq8f5_k$();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    return tmp$ret$0;
  };
  UIntSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new UInt(this.deserialize_a51uql_k$(decoder));
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function NoOpEncoder() {
    NoOpEncoder_instance = this;
    AbstractEncoder.call(this);
    this.serializersModule_1 = get_EmptySerializersModule();
  }
  NoOpEncoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  NoOpEncoder.prototype.encodeValue_g5opg2_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    return Unit_getInstance();
  };
  NoOpEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return Unit_getInstance();
  };
  var NoOpEncoder_instance;
  function NoOpEncoder_getInstance() {
    if (NoOpEncoder_instance == null)
      new NoOpEncoder();
    return NoOpEncoder_instance;
  }
  function _get_serializer__hdpyrd($this) {
    return $this.serializer_1;
  }
  function NullableSerializer(serializer) {
    this.serializer_1 = serializer;
    this.descriptor_1 = new SerialDescriptorForNullable(this.serializer_1.get_descriptor_wjt6a0_k$());
  }
  NullableSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  NullableSerializer.prototype.serialize_l9nmnw_k$ = function (encoder, value) {
    if (!(value == null)) {
      encoder.encodeNotNullMark_40lhgg_k$();
      encoder.encodeSerializableValue_g55msp_k$(this.serializer_1, value);
    } else {
      encoder.encodeNull_ek2hec_k$();
    }
  };
  NullableSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_l9nmnw_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  NullableSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeNotNullMark_us4ba1_k$() ? decoder.decodeSerializableValue_6v83lo_k$(this.serializer_1) : decoder.decodeNull_jzrmuj_k$();
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.serializer_1, other.serializer_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.serializer_1);
  };
  function SerialDescriptorForNullable(original) {
    this.original_1 = original;
    this.serialName_1 = this.original_1.get_serialName_u2rqhk_k$() + '?';
    this.serialNames_1 = cachedSerialNames(this.original_1);
  }
  SerialDescriptorForNullable.prototype.get_original_8zw1nq_k$ = function () {
    return this.original_1;
  };
  SerialDescriptorForNullable.prototype.get_annotations_20dirp_k$ = function () {
    return this.original_1.get_annotations_20dirp_k$();
  };
  SerialDescriptorForNullable.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.original_1.get_elementsCount_288r0x_k$();
  };
  SerialDescriptorForNullable.prototype.get_isInline_usk17w_k$ = function () {
    return this.original_1.get_isInline_usk17w_k$();
  };
  SerialDescriptorForNullable.prototype.get_kind_wop7ml_k$ = function () {
    return this.original_1.get_kind_wop7ml_k$();
  };
  SerialDescriptorForNullable.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return this.original_1.getElementAnnotations_a57oar_k$(index);
  };
  SerialDescriptorForNullable.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return this.original_1.getElementDescriptor_sqz94k_k$(index);
  };
  SerialDescriptorForNullable.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    return this.original_1.getElementIndex_2hwbkl_k$(name);
  };
  SerialDescriptorForNullable.prototype.getElementName_ykpypc_k$ = function (index) {
    return this.original_1.getElementName_ykpypc_k$(index);
  };
  SerialDescriptorForNullable.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return this.original_1.isElementOptional_c3hgb3_k$(index);
  };
  SerialDescriptorForNullable.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  SerialDescriptorForNullable.prototype.get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  SerialDescriptorForNullable.prototype.get_isNullable_67sy7o_k$ = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.original_1, other.original_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.original_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.original_1), 31);
  };
  function _get_objectInstance__h8002x($this) {
    return $this.objectInstance_1;
  }
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, Object.create(ObjectSerializer.prototype));
  }
  function _set__annotations__kk13ma_0($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq_0($this) {
    return $this._annotations_1;
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.set_annotations_vlf62n_k$(this$0._annotations_1);
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_1 = objectInstance;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = descriptor$factory_0();
    tmp$ret$0 = this.descriptor$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    encoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$()).endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
  };
  ObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$()).endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    return this.objectInstance_1;
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    var tmp$ret$1;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.isEmpty_y1axqb_k$();
    tmp$ret$1 = tmp$ret$0;
    if (!tmp$ret$1) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    tmp$ret$2 = tmp;
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$0;
      // Inline function 'kotlin.hashCode' call
      var tmp0_hashCode = selector(element);
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$1 = tmp + tmp$ret$0 | 0;
      accumulator = tmp$ret$1;
    }
    tmp$ret$2 = accumulator;
    return tmp$ret$2;
  }
  function serializerNotRegistered(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    throw SerializationException_init_$Create$_0("Serializer for class '" + _this__u8e3s4.get_simpleName_r6f8py_k$() + "' is not found.\n" + 'Mark the class as @Serializable or provide the serializer explicitly.');
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.get_serialNames_8zf3cl_k$();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.get_elementsCount_288r0x_k$());
    var inductionVariable = 0;
    var last = _this__u8e3s4.get_elementsCount_288r0x_k$();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var tmp0_plusAssign = _this__u8e3s4.getElementName_ykpypc_k$(i);
        result.add_1j60pz_k$(tmp0_plusAssign);
      }
       while (inductionVariable < last);
    return result;
  }
  function cast_0(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, SerializationStrategy) ? _this__u8e3s4 : THROW_CCE();
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var tmp0_plusAssign = descriptor.getElementName_ykpypc_k$(i);
          missingFields.add_1j60pz_k$(tmp0_plusAssign);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$_0(missingFields, descriptor.get_serialName_u2rqhk_k$());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.get_serialName_u2rqhk_k$());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$2;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t = accumulator;
      var tmp = imul(31, tmp0__anonymous__q1qw7t);
      var tmp$ret$1;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$0 = element.get_serialName_u2rqhk_k$();
      var tmp0_hashCode = tmp$ret$0;
      var tmp0_safe_receiver = tmp0_hashCode;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      tmp$ret$2 = tmp + tmp$ret$1 | 0;
      accumulator = tmp$ret$2;
    }
    tmp$ret$3 = accumulator;
    tmp$ret$4 = tmp$ret$3;
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    var tmp$ret$8;
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp$ret$7;
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var tmp0__anonymous__q1qw7t_0 = accumulator_0;
      var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
      var tmp$ret$6;
      // Inline function 'kotlin.hashCode' call
      var tmp$ret$5;
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      tmp$ret$5 = element_0.get_kind_wop7ml_k$();
      var tmp0_hashCode_0 = tmp$ret$5;
      var tmp0_safe_receiver_0 = tmp0_hashCode_0;
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
      tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
      accumulator_0 = tmp$ret$7;
    }
    tmp$ret$8 = accumulator_0;
    tmp$ret$9 = tmp$ret$8;
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function PluginGeneratedSerialDescriptor_init_$Init$(serialName, generatedSerializer, elementsCount, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      generatedSerializer = null;
    PluginGeneratedSerialDescriptor.call($this, serialName, generatedSerializer, elementsCount);
    return $this;
  }
  function PluginGeneratedSerialDescriptor_init_$Create$(serialName, generatedSerializer, elementsCount, $mask0, $marker) {
    return PluginGeneratedSerialDescriptor_init_$Init$(serialName, generatedSerializer, elementsCount, $mask0, $marker, Object.create(PluginGeneratedSerialDescriptor.prototype));
  }
  function _get_generatedSerializer__wsoshc($this) {
    return $this.generatedSerializer_1;
  }
  function _set_added__c0kt39($this, _set____db54di) {
    $this.added_1 = _set____db54di;
  }
  function _get_added__k0jne7($this) {
    return $this.added_1;
  }
  function _get_names__dwg6t3($this) {
    return $this.names_1;
  }
  function _get_propertiesAnnotations__ni45q8($this) {
    return $this.propertiesAnnotations_1;
  }
  function _set_classAnnotations__ucvd1n($this, _set____db54di) {
    $this.classAnnotations_1 = _set____db54di;
  }
  function _get_classAnnotations__bl4fup($this) {
    return $this.classAnnotations_1;
  }
  function _get_elementsOptionality__u17gre($this) {
    return $this.elementsOptionality_1;
  }
  function _set_indices__8cam9u($this, _set____db54di) {
    $this.indices_1 = _set____db54di;
  }
  function _get_indices__xyiwmu($this) {
    return $this.indices_1;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = childSerializers$factory();
    tmp$ret$0 = $this.childSerializers$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = _hashCode$factory_0();
    tmp$ret$0 = $this._hashCode$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.names_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = $this.names_1[i];
        indices.put_3mhbri_k$(tmp0_set, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.childSerializers_5ghqw5_k$();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.generatedSerializer_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.typeParametersSerializers_fr94fx_k$();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        // Inline function 'kotlin.collections.map' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.mapTo' call
        var tmp0_mapTo = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$0;
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          tmp$ret$0 = item.get_descriptor_wjt6a0_k$();
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
        }
        tmp$ret$1 = tmp0_mapTo;
        tmp$ret$2 = tmp$ret$1;
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.get_typeParameterDescriptors_hcpg9q_k$());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.getElementName_ykpypc_k$(i) + ': ' + this$0.getElementDescriptor_sqz94k_k$(i).get_serialName_u2rqhk_k$();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.serialName_1 = serialName;
    this.generatedSerializer_1 = generatedSerializer;
    this.elementsCount_1 = elementsCount;
    this.added_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.elementsCount_1;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.names.<anonymous>' call
      tmp$ret$1 = '[UNINITIALIZED]';
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.names_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.elementsCount_1;
    tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp_4.propertiesAnnotations_1 = tmp$ret$2;
    this.classAnnotations_1 = null;
    this.elementsOptionality_1 = booleanArray(this.elementsCount_1);
    this.indices_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.childSerializers$delegate_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.typeParameterDescriptors$delegate_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9._hashCode$delegate_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  PluginGeneratedSerialDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  PluginGeneratedSerialDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.get_annotations_20dirp_k$ = function () {
    var tmp0_elvis_lhs = this.classAnnotations_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.get_serialNames_8zf3cl_k$ = function () {
    return this.indices_1.get_keys_wop4xp_k$();
  };
  PluginGeneratedSerialDescriptor.prototype.get_typeParameterDescriptors_hcpg9q_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = typeParameterDescriptors$factory();
    tmp$ret$0 = this.typeParameterDescriptors$delegate_1.get_value_j01efc_k$();
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.addElement_ifop3j_k$ = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.added_1 = tmp0_this.added_1 + 1 | 0;
    this.names_1[tmp0_this.added_1] = name;
    this.elementsOptionality_1[this.added_1] = isOptional;
    this.propertiesAnnotations_1[this.added_1] = null;
    if (this.added_1 === (this.elementsCount_1 - 1 | 0)) {
      this.indices_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.addElement$default_c7nl76_k$ = function (name, isOptional, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      isOptional = false;
    return this.addElement_ifop3j_k$(name, isOptional);
  };
  PluginGeneratedSerialDescriptor.prototype.pushAnnotation_kbn3rf_k$ = function (annotation) {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.propertiesAnnotations_1[this.added_1];
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.pushAnnotation.<anonymous>' call
    var tmp;
    if (tmp0_let == null) {
      var result = ArrayList_init_$Create$_0(1);
      this.propertiesAnnotations_1[this.added_1] = result;
      tmp = result;
    } else {
      tmp = tmp0_let;
    }
    tmp$ret$0 = tmp;
    tmp$ret$1 = tmp$ret$0;
    var list = tmp$ret$1;
    list.add_1j60pz_k$(annotation);
  };
  PluginGeneratedSerialDescriptor.prototype.pushClassAnnotation_tfb9g9_k$ = function (a) {
    if (this.classAnnotations_1 == null) {
      this.classAnnotations_1 = ArrayList_init_$Create$_0(1);
    }
    ensureNotNull(this.classAnnotations_1).add_1j60pz_k$(a);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).get_descriptor_wjt6a0_k$();
  };
  PluginGeneratedSerialDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementsOptionality_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    var tmp0_elvis_lhs = getChecked(this.propertiesAnnotations_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.names_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.indices_1.get_1mhr4y_k$(name);
    return tmp0_elvis_lhs == null ? Companion_getInstance_1().get_UNKNOWN_NAME_lj8hxl_k$() : tmp0_elvis_lhs;
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      var tmp0__anonymous__q1qw7t = other;
      tmp$ret$1 = contentEquals(this.get_typeParameterDescriptors_hcpg9q_k$(), tmp0__anonymous__q1qw7t.get_typeParameterDescriptors_hcpg9q_k$());
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.get_serialName_u2rqhk_k$() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.get_typeParameterDescriptors_hcpg9q_k$();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  function SerializerFactory() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(Companion_getInstance()));
  }
  CharArraySerializer_0.prototype.collectionSize_ws33uw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_ws33uw_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.toBuilder_waug93_k$ = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_waug93_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.readElement_le7skj_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_y20c3x_k$(decoder.decodeCharElement_pg5vs7_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  CharArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_le7skj_k$(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.writeContent_wscki9_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeCharElement_4fawdf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_wscki9_k$(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.collectionSize_pzip3n_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_pzip3n_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.toBuilder_b07jn0_k$ = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_b07jn0_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.readElement_g1li9q_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_g44bp4_k$(decoder.decodeDoubleElement_42w6gz_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  DoubleArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_g1li9q_k$(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.writeContent_xk6378_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeDoubleElement_m8xcw3_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_xk6378_k$(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.collectionSize_173jc8_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_173jc8_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.toBuilder_g1jv47_k$ = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_g1jv47_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.readElement_x45ji7_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_urs3el_k$(decoder.decodeFloatElement_nl5jiq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  FloatArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_x45ji7_k$(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.writeContent_z7nd2p_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeFloatElement_o97mfb_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_z7nd2p_k$(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.collectionSize_91vysi_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_91vysi_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.toBuilder_8knb6p_k$ = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_8knb6p_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.readElement_qrifnb_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_gvce4t_k$(decoder.decodeLongElement_kyznym_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  LongArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_qrifnb_k$(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.writeContent_42fxmf_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeLongElement_xtv8il_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_42fxmf_k$(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.collectionSize_p5ta3p_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_p5ta3p_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.toBuilder_murpja_k$ = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_murpja_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.readElement_q2v34c_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_da0tyi_k$(decoder.decodeIntElement_cmpvet_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  IntArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_q2v34c_k$(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.writeContent_h3vxwe_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeIntElement_utywpf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_h3vxwe_k$(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.collectionSize_tiggjs_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_tiggjs_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.toBuilder_qo79nd_k$ = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qo79nd_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.readElement_btg9b5_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_piqb6l_k$(decoder.decodeShortElement_zjkfm_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  ShortArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_btg9b5_k$(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.writeContent_i3wixd_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeShortElement_2nnlvd_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_i3wixd_k$(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.collectionSize_qzl5wq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_qzl5wq_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.toBuilder_rgttij_k$ = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_rgttij_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.readElement_9ieobv_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_jiz7k1_k$(decoder.decodeByteElement_76b0gq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  ByteArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_9ieobv_k$(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.writeContent_16s3nh_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeByteElement_r2fm3n_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_16s3nh_k$(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.collectionSize_keckzw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_keckzw_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.toBuilder_uo58bx_k$ = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_uo58bx_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.readElement_kzf5fx_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_l5nnnz_k$(decoder.decodeBooleanElement_3vswy_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  BooleanArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_kzf5fx_k$(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.writeContent_j8grad_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeBooleanElement_2l5aov_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_j8grad_k$(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  CharArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  CharArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  CharArrayBuilder.prototype.append_y20c3x_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_0($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  DoubleArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  DoubleArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_0(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.append_g44bp4_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_0(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_1($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_1($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_1($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  FloatArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  FloatArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_1(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  FloatArrayBuilder.prototype.append_urs3el_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_1(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_2($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_2($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_2($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  LongArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  LongArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_2(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  LongArrayBuilder.prototype.append_gvce4t_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_2(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_3($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_3($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_3($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  IntArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  IntArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_3(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  IntArrayBuilder.prototype.append_da0tyi_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_3(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_4($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_4($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_4($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ShortArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  ShortArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_4(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ShortArrayBuilder.prototype.append_piqb6l_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_4(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_5($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_5($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ByteArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  ByteArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_5(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ByteArrayBuilder.prototype.append_jiz7k1_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_5(this.buffer_1, this.position_1);
  };
  function _set_buffer__uxh4x5_6($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_6($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_6($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  BooleanArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  BooleanArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_6(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.append_l5nnnz_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_6(this.buffer_1, this.position_1);
  };
  function get_INITIAL_SIZE() {
    return INITIAL_SIZE;
  }
  var INITIAL_SIZE;
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  StringSerializer.prototype.serialize_xxlebn_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value);
  };
  StringSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_xxlebn_k$(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeString_x3hxsx_k$();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  CharSerializer.prototype.serialize_t91c8o_k$ = function (encoder, value) {
    return encoder.encodeChar_kkx54x_k$(value);
  };
  CharSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_t91c8o_k$(encoder, value instanceof Char ? value.value_1 : THROW_CCE());
  };
  CharSerializer.prototype.deserialize_a5cptt_k$ = function (decoder) {
    return decoder.decodeChar_dc2jtx_k$();
  };
  CharSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new Char(this.deserialize_a5cptt_k$(decoder));
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  DoubleSerializer.prototype.serialize_jhnp8j_k$ = function (encoder, value) {
    return encoder.encodeDouble_79ztsb_k$(value);
  };
  DoubleSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_jhnp8j_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeDouble_ur8l0f_k$();
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  FloatSerializer.prototype.serialize_4f2ixk_k$ = function (encoder, value) {
    return encoder.encodeFloat_f5fde1_k$(value);
  };
  FloatSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_4f2ixk_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeFloat_jcnrwu_k$();
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  LongSerializer.prototype.serialize_95a0ia_k$ = function (encoder, value) {
    return encoder.encodeLong_rk3ab9_k$(value);
  };
  LongSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_95a0ia_k$(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeLong_jzt186_k$();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  IntSerializer.prototype.serialize_ui7jaz_k$ = function (encoder, value) {
    return encoder.encodeInt_5vxmon_k$(value);
  };
  IntSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ui7jaz_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeInt_8iq8f5_k$();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ShortSerializer.prototype.serialize_tz9ag_k$ = function (encoder, value) {
    return encoder.encodeShort_rh3vxz_k$(value);
  };
  ShortSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_tz9ag_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeShort_jjqk32_k$();
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ByteSerializer.prototype.serialize_bswtxi_k$ = function (encoder, value) {
    return encoder.encodeByte_gpyndp_k$(value);
  };
  ByteSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bswtxi_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeByte_jzz7je_k$();
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  BooleanSerializer.prototype.serialize_bl0ez0_k$ = function (encoder, value) {
    return encoder.encodeBoolean_6cztl5_k$(value);
  };
  BooleanSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bl0ez0_k$(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeBoolean_m0aca_k$();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.$$delegate_0__1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  UnitSerializer.prototype.deserialize_a513f7_k$ = function (decoder) {
    this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  UnitSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    this.deserialize_a513f7_k$(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.serialize_x908om_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x908om_k$(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
  }
  PrimitiveSerialDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  PrimitiveSerialDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  PrimitiveSerialDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return 0;
  };
  PrimitiveSerialDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName_1 + ')';
  };
  function builtinSerializerOrNull(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp = get_BUILTIN_SERIALIZERS().get_1mhr4y_k$(_this__u8e3s4);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : THROW_CCE();
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), serializer_0(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_1(Companion_getInstance())), to(PrimitiveClasses_getInstance().get_charArrayClass_7lhfoe_k$(), CharArraySerializer()), to(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), serializer_2(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_doubleArrayClass_84hee1_k$(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$(), serializer_3(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_floatArrayClass_qngmha_k$(), FloatArraySerializer()), to(getKClass(Long), serializer_4(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().get_longArrayClass_v379a4_k$(), LongArraySerializer()), to(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), serializer_5(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_intArrayClass_h44pbv_k$(), IntArraySerializer()), to(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$(), serializer_6(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_shortArrayClass_c1p7wy_k$(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$(), serializer_7(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), serializer_8(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_booleanArrayClass_lnbwea_k$(), BooleanArraySerializer()), to(getKClass(Unit), serializer_9(Unit_getInstance()))]);
    }
  }
  function SerializationConstructorMarker() {
  }
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  function PairSerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = $keySerializer.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('first', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('second', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function PairSerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor$default('kotlin.Pair', [], PairSerializer$descriptor$lambda(keySerializer, valueSerializer), 2, null);
  }
  PairSerializer_0.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  PairSerializer_0.prototype.get_key_70crl3_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_first_irdx8n_k$();
  };
  PairSerializer_0.prototype.get_key_c7qyp5_k$ = function (_this__u8e3s4) {
    return this.get_key_70crl3_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.get_value_bt5arr_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_second_jf7fjx_k$();
  };
  PairSerializer_0.prototype.get_value_455tcn_k$ = function (_this__u8e3s4) {
    return this.get_value_bt5arr_k$(_this__u8e3s4 instanceof Pair ? _this__u8e3s4 : THROW_CCE());
  };
  PairSerializer_0.prototype.toResult_qr0m57_k$ = function (key, value) {
    return to(key, value);
  };
  function _get_aSerializer__qgvori($this) {
    return $this.aSerializer_1;
  }
  function _get_bSerializer__slqdml($this) {
    return $this.bSerializer_1;
  }
  function _get_cSerializer__uql2ho($this) {
    return $this.cSerializer_1;
  }
  function decodeSequentially_1($this, composite) {
    var a = composite.decodeSerializableElement$default_t023k4_k$($this.descriptor_1, 0, $this.aSerializer_1, null, 8, null);
    var b = composite.decodeSerializableElement$default_t023k4_k$($this.descriptor_1, 1, $this.bSerializer_1, null, 8, null);
    var c = composite.decodeSerializableElement$default_t023k4_k$($this.descriptor_1, 2, $this.cSerializer_1, null, 8, null);
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    return new Triple(a, b, c);
  }
  function decodeStructure_0($this, composite) {
    var a = get_NULL();
    var b = get_NULL();
    var c = get_NULL();
    mainLoop: while (true) {
      var index = composite.decodeElementIndex_nk5a2l_k$($this.descriptor_1);
      if (index === Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$()) {
        break mainLoop;
      } else if (index === 0) {
        a = composite.decodeSerializableElement$default_t023k4_k$($this.descriptor_1, 0, $this.aSerializer_1, null, 8, null);
      } else if (index === 1) {
        b = composite.decodeSerializableElement$default_t023k4_k$($this.descriptor_1, 1, $this.bSerializer_1, null, 8, null);
      } else if (index === 2) {
        c = composite.decodeSerializableElement$default_t023k4_k$($this.descriptor_1, 2, $this.cSerializer_1, null, 8, null);
      } else
        throw SerializationException_init_$Create$_0('Unexpected index ' + index);
    }
    composite.endStructure_e64gd4_k$($this.descriptor_1);
    if (a === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'first' is missing");
    if (b === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'second' is missing");
    if (c === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'third' is missing");
    var tmp = (a == null ? true : isObject(a)) ? a : THROW_CCE();
    var tmp_0 = (b == null ? true : isObject(b)) ? b : THROW_CCE();
    return new Triple(tmp, tmp_0, (c == null ? true : isObject(c)) ? c : THROW_CCE());
  }
  function TripleSerializer$descriptor$lambda(this$0) {
    return function ($this$buildClassSerialDescriptor) {
      var tmp = this$0.aSerializer_1.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('first', tmp, null, false, 12, null);
      var tmp_0 = this$0.bSerializer_1.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('second', tmp_0, null, false, 12, null);
      var tmp_1 = this$0.cSerializer_1.get_descriptor_wjt6a0_k$();
      $this$buildClassSerialDescriptor.element$default_m7h690_k$('third', tmp_1, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function TripleSerializer_0(aSerializer, bSerializer, cSerializer) {
    this.aSerializer_1 = aSerializer;
    this.bSerializer_1 = bSerializer;
    this.cSerializer_1 = cSerializer;
    var tmp = this;
    tmp.descriptor_1 = buildClassSerialDescriptor$default('kotlin.Triple', [], TripleSerializer$descriptor$lambda(this), 2, null);
  }
  TripleSerializer_0.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  TripleSerializer_0.prototype.serialize_dxgg6y_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.descriptor_1, 0, this.aSerializer_1, value.get_first_irdx8n_k$());
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.descriptor_1, 1, this.bSerializer_1, value.get_second_jf7fjx_k$());
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.descriptor_1, 2, this.cSerializer_1, value.get_third_iz27um_k$());
    structuredEncoder.endStructure_e64gd4_k$(this.descriptor_1);
  };
  TripleSerializer_0.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_dxgg6y_k$(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  TripleSerializer_0.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this.descriptor_1);
    if (composite.decodeSequentially_xlblqy_k$()) {
      return decodeSequentially_1(this, composite);
    }
    return decodeStructure_0(this, composite);
  };
  function MapEntry(key, value) {
    this.key_1 = key;
    this.value_1 = value;
  }
  MapEntry.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  MapEntry.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  MapEntry.prototype.component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  MapEntry.prototype.component2_7eebsb_k$ = function () {
    return this.value_1;
  };
  MapEntry.prototype.copy_8d20yw_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  MapEntry.prototype.copy$default_mlmd97_k$ = function (key, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this.key_1;
    if (!(($mask0 & 2) === 0))
      value = this.value_1;
    return this.copy_8d20yw_k$(key, value);
  };
  MapEntry.prototype.toString = function () {
    return 'MapEntry(key=' + this.key_1 + ', value=' + this.value_1 + ')';
  };
  MapEntry.prototype.hashCode = function () {
    var result = this.key_1 == null ? 0 : hashCode(this.key_1);
    result = imul(result, 31) + (this.value_1 == null ? 0 : hashCode(this.value_1)) | 0;
    return result;
  };
  MapEntry.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapEntry))
      return false;
    var tmp0_other_with_cast = other instanceof MapEntry ? other : THROW_CCE();
    if (!equals(this.key_1, tmp0_other_with_cast.key_1))
      return false;
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  function MapEntrySerializer$descriptor$lambda($keySerializer, $valueSerializer) {
    return function ($this$buildSerialDescriptor) {
      var tmp = $keySerializer.get_descriptor_wjt6a0_k$();
      $this$buildSerialDescriptor.element$default_m7h690_k$('key', tmp, null, false, 12, null);
      var tmp_0 = $valueSerializer.get_descriptor_wjt6a0_k$();
      $this$buildSerialDescriptor.element$default_m7h690_k$('value', tmp_0, null, false, 12, null);
      return Unit_getInstance();
    };
  }
  function MapEntrySerializer_0(keySerializer, valueSerializer) {
    KeyValueSerializer.call(this, keySerializer, valueSerializer);
    var tmp = this;
    var tmp_0 = MAP_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('kotlin.collections.Map.Entry', tmp_0, [], MapEntrySerializer$descriptor$lambda(keySerializer, valueSerializer), 4, null);
  }
  MapEntrySerializer_0.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  MapEntrySerializer_0.prototype.get_key_xwaw0y_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_key_18j28a_k$();
  };
  MapEntrySerializer_0.prototype.get_key_c7qyp5_k$ = function (_this__u8e3s4) {
    return this.get_key_xwaw0y_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.get_value_ajqqfk_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_value_j01efc_k$();
  };
  MapEntrySerializer_0.prototype.get_value_455tcn_k$ = function (_this__u8e3s4) {
    return this.get_value_ajqqfk_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Entry) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  MapEntrySerializer_0.prototype.toResult_qr0m57_k$ = function (key, value) {
    return new MapEntry(key, value);
  };
  function KeyValueSerializer(keySerializer, valueSerializer) {
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  KeyValueSerializer.prototype.get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  KeyValueSerializer.prototype.get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  KeyValueSerializer.prototype.serialize_n6wuhj_k$ = function (encoder, value) {
    var structuredEncoder = encoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.get_descriptor_wjt6a0_k$(), 0, this.keySerializer_1, this.get_key_c7qyp5_k$(value));
    structuredEncoder.encodeSerializableElement_cw68jm_k$(this.get_descriptor_wjt6a0_k$(), 1, this.valueSerializer_1, this.get_value_455tcn_k$(value));
    structuredEncoder.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
  };
  KeyValueSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_n6wuhj_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  KeyValueSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var composite = decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    if (composite.decodeSequentially_xlblqy_k$()) {
      var tmp = this.get_descriptor_wjt6a0_k$();
      var key = composite.decodeSerializableElement$default_t023k4_k$(tmp, 0, this.keySerializer_1, null, 8, null);
      var tmp_0 = this.get_descriptor_wjt6a0_k$();
      var value = composite.decodeSerializableElement$default_t023k4_k$(tmp_0, 1, this.valueSerializer_1, null, 8, null);
      return this.toResult_qr0m57_k$(key, value);
    }
    var key_0 = get_NULL();
    var value_0 = get_NULL();
    mainLoop: while (true) {
      var idx = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
      if (idx === Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$()) {
        break mainLoop;
      } else if (idx === 0) {
        var tmp_1 = this.get_descriptor_wjt6a0_k$();
        key_0 = composite.decodeSerializableElement$default_t023k4_k$(tmp_1, 0, this.keySerializer_1, null, 8, null);
      } else if (idx === 1) {
        var tmp_2 = this.get_descriptor_wjt6a0_k$();
        value_0 = composite.decodeSerializableElement$default_t023k4_k$(tmp_2, 1, this.valueSerializer_1, null, 8, null);
      } else
        throw SerializationException_init_$Create$_0('Invalid index: ' + idx);
    }
    composite.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    if (key_0 === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'key' is missing");
    if (value_0 === get_NULL())
      throw SerializationException_init_$Create$_0("Element 'value' is missing");
    var tmp_3 = (key_0 == null ? true : isObject(key_0)) ? key_0 : THROW_CCE();
    return this.toResult_qr0m57_k$(tmp_3, (value_0 == null ? true : isObject(value_0)) ? value_0 : THROW_CCE());
  };
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function PolymorphicModuleBuilder_init_$Init$(baseClass, baseSerializer, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      baseSerializer = null;
    PolymorphicModuleBuilder.call($this, baseClass, baseSerializer);
    return $this;
  }
  function PolymorphicModuleBuilder_init_$Create$(baseClass, baseSerializer, $mask0, $marker) {
    return PolymorphicModuleBuilder_init_$Init$(baseClass, baseSerializer, $mask0, $marker, Object.create(PolymorphicModuleBuilder.prototype));
  }
  function PolymorphicModuleBuilder(baseClass, baseSerializer) {
    this.baseClass_1 = baseClass;
    this.baseSerializer_1 = baseSerializer;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp$ret$0 = ArrayList_init_$Create$();
    tmp.subclasses_1 = tmp$ret$0;
    this.defaultSerializerProvider_1 = null;
    this.defaultDeserializerProvider_1 = null;
  }
  PolymorphicModuleBuilder.prototype.get_baseClass_lygw3m_k$ = function () {
    return this.baseClass_1;
  };
  PolymorphicModuleBuilder.prototype.get_baseSerializer_bxmbhw_k$ = function () {
    return this.baseSerializer_1;
  };
  PolymorphicModuleBuilder.prototype.get_subclasses_cxvjov_k$ = function () {
    return this.subclasses_1;
  };
  PolymorphicModuleBuilder.prototype.set_defaultSerializerProvider_hup0gh_k$ = function (_set____db54di) {
    this.defaultSerializerProvider_1 = _set____db54di;
  };
  PolymorphicModuleBuilder.prototype.get_defaultSerializerProvider_5s2kth_k$ = function () {
    return this.defaultSerializerProvider_1;
  };
  PolymorphicModuleBuilder.prototype.set_defaultDeserializerProvider_jkoasx_k$ = function (_set____db54di) {
    this.defaultDeserializerProvider_1 = _set____db54di;
  };
  PolymorphicModuleBuilder.prototype.get_defaultDeserializerProvider_z1yzg_k$ = function () {
    return this.defaultDeserializerProvider_1;
  };
  PolymorphicModuleBuilder.prototype.subclass_tslaf9_k$ = function (subclass, serializer) {
    this.subclasses_1.add_1j60pz_k$(to(subclass, serializer));
  };
  PolymorphicModuleBuilder.prototype.defaultDeserializer_40mtu2_k$ = function (defaultDeserializerProvider) {
    // Inline function 'kotlin.require' call
    var tmp0_require = this.defaultDeserializerProvider_1 == null;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.modules.PolymorphicModuleBuilder.defaultDeserializer.<anonymous>' call
      tmp$ret$0 = 'Default deserializer provider is already registered for class ' + this.baseClass_1 + ': ' + this.defaultDeserializerProvider_1;
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.defaultDeserializerProvider_1 = defaultDeserializerProvider;
  };
  PolymorphicModuleBuilder.prototype.default_hdkkw3_k$ = function (defaultSerializerProvider) {
    this.defaultDeserializer_40mtu2_k$(defaultSerializerProvider);
  };
  PolymorphicModuleBuilder.prototype.buildTo_ivxld_k$ = function (builder) {
    if (!(this.baseSerializer_1 == null)) {
      builder.registerPolymorphicSerializer$default_trhr6d_k$(this.baseClass_1, this.baseClass_1, this.baseSerializer_1, false, 8, null);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.subclasses_1;
    var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.PolymorphicModuleBuilder.buildTo.<anonymous>' call
      var kclass = element.component1_7eebsc_k$();
      var serializer = element.component2_7eebsb_k$();
      var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
      var tmp$ret$0;
      // Inline function 'kotlinx.serialization.internal.cast' call
      tmp$ret$0 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
      var tmp_0 = tmp$ret$0;
      builder.registerPolymorphicSerializer$default_trhr6d_k$(this.baseClass_1, tmp, tmp_0, false, 8, null);
    }
    var defaultSerializer = this.defaultSerializerProvider_1;
    if (!(defaultSerializer == null)) {
      builder.registerDefaultPolymorphicSerializer_5i0b4y_k$(this.baseClass_1, defaultSerializer, false);
    }
    var defaultDeserializer = this.defaultDeserializerProvider_1;
    if (!(defaultDeserializer == null)) {
      builder.registerDefaultPolymorphicDeserializer_81en3y_k$(this.baseClass_1, defaultDeserializer, false);
    }
  };
  function get_EmptySerializersModule() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.getContextual_fgazl8_k$ = function (kclass) {
    return this.getContextual_r3x7wt_k$(kclass, emptyList());
  };
  SerializersModule.prototype.getContextual$default_i0obdx_k$ = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.getContextual_r3x7wt_k$(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  function _get_class2ContextualFactory__qh9mum($this) {
    return $this.class2ContextualFactory_1;
  }
  function _get_polyBase2DefaultSerializerProvider__mm2oxw($this) {
    return $this.polyBase2DefaultSerializerProvider_1;
  }
  function _get_polyBase2NamedSerializers__2zbzbo($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultDeserializerProvider__uja6n9($this) {
    return $this.polyBase2DefaultDeserializerProvider_1;
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.class2ContextualFactory_1 = class2ContextualFactory;
    this.polyBase2Serializers_1 = polyBase2Serializers;
    this.polyBase2DefaultSerializerProvider_1 = polyBase2DefaultSerializerProvider;
    this.polyBase2NamedSerializers_1 = polyBase2NamedSerializers;
    this.polyBase2DefaultDeserializerProvider_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.get_polyBase2Serializers_eilxqt_k$ = function () {
    return this.polyBase2Serializers_1;
  };
  SerialModuleImpl.prototype.getPolymorphic_38ak3b_k$ = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.polyBase2Serializers_1.get_1mhr4y_k$(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.polyBase2DefaultSerializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.getPolymorphic_39bkdo_k$ = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.polyBase2NamedSerializers_1.get_1mhr4y_k$(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.get' call
      tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).get_1mhr4y_k$(serializedClassName);
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.polyBase2DefaultDeserializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.getContextual_r3x7wt_k$ = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.class2ContextualFactory_1.get_1mhr4y_k$(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_wrqehj_k$(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.dumpTo_q6va1n_k$ = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_forEach = this.class2ContextualFactory_1;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var kclass = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var serial = tmp$ret$2;
      var tmp0_subject = serial;
      if (tmp0_subject instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.serializer_1;
        collector.contextual_ki5uma_k$(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (tmp0_subject instanceof WithTypeArguments) {
          collector.contextual_oi2m58_k$(kclass, serial.provider_1);
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp1_forEach = this.polyBase2Serializers_1;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$3 = tmp1_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_0 = tmp$ret$3;
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$4;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$4 = element_0.get_key_18j28a_k$();
      var baseClass = tmp$ret$4;
      var tmp$ret$5;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$5 = element_0.get_value_j01efc_k$();
      var classMap = tmp$ret$5;
      // Inline function 'kotlin.collections.forEach' call
      var tmp$ret$6;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$6 = classMap.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator_1 = tmp$ret$6;
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_1 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>.<anonymous>' call
        var tmp$ret$7;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$7 = element_1.get_key_18j28a_k$();
        var actualClass = tmp$ret$7;
        var tmp$ret$8;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$8 = element_1.get_value_j01efc_k$();
        var serializer = tmp$ret$8;
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        var tmp$ret$9;
        // Inline function 'kotlinx.serialization.internal.cast' call
        tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.polymorphic_sbh4xj_k$(tmp_1, tmp_2, tmp$ret$9);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp2_forEach = this.polyBase2DefaultSerializerProvider_1;
    var tmp$ret$10;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$10 = tmp2_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_2 = tmp$ret$10;
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$11;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$11 = element_2.get_key_18j28a_k$();
      var baseClass_0 = tmp$ret$11;
      var tmp$ret$12;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$12 = element_2.get_value_j01efc_k$();
      var provider = tmp$ret$12;
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.polymorphicDefaultSerializer_g5ty2r_k$(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp3_forEach = this.polyBase2DefaultDeserializerProvider_1;
    var tmp$ret$13;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$13 = tmp3_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator_3 = tmp$ret$13;
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var element_3 = tmp0_iterator_3.next_20eer_k$();
      // Inline function 'kotlinx.serialization.modules.SerialModuleImpl.dumpTo.<anonymous>' call
      var tmp$ret$14;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$14 = element_3.get_key_18j28a_k$();
      var baseClass_1 = tmp$ret$14;
      var tmp$ret$15;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$15 = element_3.get_value_j01efc_k$();
      var provider_0 = tmp$ret$15;
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.polymorphicDefaultDeserializer_rsx40t_k$(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.serializer_1 = serializer;
  }
  Argless.prototype.get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  Argless.prototype.invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.serializer_1;
  };
  Argless.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.serializer_1, this.serializer_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Argless.prototype.hashCode = function () {
    return hashCode(this.serializer_1);
  };
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.provider_1 = provider;
  }
  WithTypeArguments.prototype.get_provider_mw8vcq_k$ = function () {
    return this.provider_1;
  };
  WithTypeArguments.prototype.invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.provider_1(typeArgumentsSerializers);
  };
  function ContextualProvider() {
  }
  function overwriteWith(_this__u8e3s4, other) {
    init_properties_SerializersModule_kt_swldyf();
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    // Inline function 'kotlinx.serialization.modules.overwriteWith.<anonymous>' call
    builder.include_if2r2v_k$(_this__u8e3s4);
    other.dumpTo_q6va1n_k$(new overwriteWith$1$1(builder));
    tmp$ret$0 = builder.build_1k0s4u_k$();
    return tmp$ret$0;
  }
  function overwriteWith$1$1($this_SerializersModule) {
    this.$this_SerializersModule_1 = $this_SerializersModule;
  }
  overwriteWith$1$1.prototype.contextual_ki5uma_k$ = function (kClass, serializer) {
    this.$this_SerializersModule_1.registerSerializer_fk7ob2_k$(kClass, new Argless(serializer), true);
  };
  overwriteWith$1$1.prototype.contextual_oi2m58_k$ = function (kClass, provider) {
    this.$this_SerializersModule_1.registerSerializer_fk7ob2_k$(kClass, new WithTypeArguments(provider), true);
  };
  overwriteWith$1$1.prototype.polymorphic_sbh4xj_k$ = function (baseClass, actualClass, actualSerializer) {
    this.$this_SerializersModule_1.registerPolymorphicSerializer_1wc2ku_k$(baseClass, actualClass, actualSerializer, true);
  };
  overwriteWith$1$1.prototype.polymorphicDefaultSerializer_g5ty2r_k$ = function (baseClass, defaultSerializerProvider) {
    this.$this_SerializersModule_1.registerDefaultPolymorphicSerializer_5i0b4y_k$(baseClass, defaultSerializerProvider, true);
  };
  overwriteWith$1$1.prototype.polymorphicDefaultDeserializer_rsx40t_k$ = function (baseClass, defaultDeserializerProvider) {
    this.$this_SerializersModule_1.registerDefaultPolymorphicDeserializer_81en3y_k$(baseClass, defaultDeserializerProvider, true);
  };
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModule_0(builderAction) {
    var builder = new SerializersModuleBuilder();
    builderAction(builder);
    return builder.build_1k0s4u_k$();
  }
  function _get_class2ContextualProvider__qmtxtd($this) {
    return $this.class2ContextualProvider_1;
  }
  function _get_polyBase2Serializers__z5x3wf($this) {
    return $this.polyBase2Serializers_1;
  }
  function _get_polyBase2DefaultSerializerProvider__mm2oxw_0($this) {
    return $this.polyBase2DefaultSerializerProvider_1;
  }
  function _get_polyBase2NamedSerializers__2zbzbo_0($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultDeserializerProvider__uja6n9_0($this) {
    return $this.polyBase2DefaultDeserializerProvider_1;
  }
  function SerializersModuleBuilder() {
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$0 = HashMap_init_$Create$();
    tmp.class2ContextualProvider_1 = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$1 = HashMap_init_$Create$();
    tmp_0.polyBase2Serializers_1 = tmp$ret$1;
    var tmp_1 = this;
    var tmp$ret$2;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$2 = HashMap_init_$Create$();
    tmp_1.polyBase2DefaultSerializerProvider_1 = tmp$ret$2;
    var tmp_2 = this;
    var tmp$ret$3;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$3 = HashMap_init_$Create$();
    tmp_2.polyBase2NamedSerializers_1 = tmp$ret$3;
    var tmp_3 = this;
    var tmp$ret$4;
    // Inline function 'kotlin.collections.hashMapOf' call
    tmp$ret$4 = HashMap_init_$Create$();
    tmp_3.polyBase2DefaultDeserializerProvider_1 = tmp$ret$4;
  }
  SerializersModuleBuilder.prototype.contextual_ki5uma_k$ = function (kClass, serializer) {
    var tmp = new Argless(serializer);
    return this.registerSerializer$default_d6odez_k$(kClass, tmp, false, 4, null);
  };
  SerializersModuleBuilder.prototype.contextual_oi2m58_k$ = function (kClass, provider) {
    var tmp = new WithTypeArguments(provider);
    return this.registerSerializer$default_d6odez_k$(kClass, tmp, false, 4, null);
  };
  SerializersModuleBuilder.prototype.polymorphic_sbh4xj_k$ = function (baseClass, actualClass, actualSerializer) {
    this.registerPolymorphicSerializer$default_trhr6d_k$(baseClass, actualClass, actualSerializer, false, 8, null);
  };
  SerializersModuleBuilder.prototype.polymorphicDefaultSerializer_g5ty2r_k$ = function (baseClass, defaultSerializerProvider) {
    this.registerDefaultPolymorphicSerializer_5i0b4y_k$(baseClass, defaultSerializerProvider, false);
  };
  SerializersModuleBuilder.prototype.polymorphicDefaultDeserializer_rsx40t_k$ = function (baseClass, defaultDeserializerProvider) {
    this.registerDefaultPolymorphicDeserializer_81en3y_k$(baseClass, defaultDeserializerProvider, false);
  };
  SerializersModuleBuilder.prototype.include_if2r2v_k$ = function (module_0) {
    module_0.dumpTo_q6va1n_k$(this);
  };
  SerializersModuleBuilder.prototype.registerSerializer_fk7ob2_k$ = function (forClass, provider, allowOverwrite) {
    if (!allowOverwrite) {
      var previous = this.class2ContextualProvider_1.get_1mhr4y_k$(forClass);
      if (!(previous == null) ? !equals(previous, provider) : false) {
        throw new SerializerAlreadyRegisteredException('Contextual serializer or serializer provider for ' + forClass + ' already registered in this module');
      }
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.class2ContextualProvider_1;
    tmp0_set.put_3mhbri_k$(forClass, provider);
  };
  SerializersModuleBuilder.prototype.registerSerializer$default_d6odez_k$ = function (forClass, provider, allowOverwrite, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      allowOverwrite = false;
    return this.registerSerializer_fk7ob2_k$(forClass, provider, allowOverwrite);
  };
  SerializersModuleBuilder.prototype.registerDefaultPolymorphicSerializer_5i0b4y_k$ = function (baseClass, defaultSerializerProvider, allowOverwrite) {
    var previous = this.polyBase2DefaultDeserializerProvider_1.get_1mhr4y_k$(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultSerializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default serializers provider for class ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.polyBase2DefaultSerializerProvider_1;
    tmp0_set.put_3mhbri_k$(baseClass, defaultSerializerProvider);
  };
  SerializersModuleBuilder.prototype.registerDefaultPolymorphicDeserializer_81en3y_k$ = function (baseClass, defaultDeserializerProvider, allowOverwrite) {
    var previous = this.polyBase2DefaultDeserializerProvider_1.get_1mhr4y_k$(baseClass);
    if ((!(previous == null) ? !equals(previous, defaultDeserializerProvider) : false) ? !allowOverwrite : false) {
      throw IllegalArgumentException_init_$Create$('Default deserializers provider for class ' + baseClass + ' is already registered: ' + previous);
    }
    // Inline function 'kotlin.collections.set' call
    var tmp0_set = this.polyBase2DefaultDeserializerProvider_1;
    tmp0_set.put_3mhbri_k$(baseClass, defaultDeserializerProvider);
  };
  SerializersModuleBuilder.prototype.registerPolymorphicSerializer_1wc2ku_k$ = function (baseClass, concreteClass, concreteSerializer, allowOverwrite) {
    var name = concreteSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$();
    var tmp$ret$1;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp0_getOrPut = this.polyBase2Serializers_1;
    var value = tmp0_getOrPut.get_1mhr4y_k$(baseClass);
    var tmp;
    if (value == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$0 = HashMap_init_$Create$();
      var answer = tmp$ret$0;
      tmp0_getOrPut.put_3mhbri_k$(baseClass, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    tmp$ret$1 = tmp;
    var baseClassSerializers = tmp$ret$1;
    var previousSerializer = baseClassSerializers.get_1mhr4y_k$(concreteClass);
    var tmp$ret$3;
    // Inline function 'kotlin.collections.getOrPut' call
    var tmp1_getOrPut = this.polyBase2NamedSerializers_1;
    var value_0 = tmp1_getOrPut.get_1mhr4y_k$(baseClass);
    var tmp_0;
    if (value_0 == null) {
      var tmp$ret$2;
      // Inline function 'kotlin.collections.hashMapOf' call
      tmp$ret$2 = HashMap_init_$Create$();
      var answer_0 = tmp$ret$2;
      tmp1_getOrPut.put_3mhbri_k$(baseClass, answer_0);
      tmp_0 = answer_0;
    } else {
      tmp_0 = value_0;
    }
    tmp$ret$3 = tmp_0;
    var names = tmp$ret$3;
    if (allowOverwrite) {
      if (!(previousSerializer == null)) {
        names.remove_8hbkc0_k$(previousSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
      }
      // Inline function 'kotlin.collections.set' call
      baseClassSerializers.put_3mhbri_k$(concreteClass, concreteSerializer);
      // Inline function 'kotlin.collections.set' call
      names.put_3mhbri_k$(name, concreteSerializer);
      return Unit_getInstance();
    }
    if (!(previousSerializer == null)) {
      if (!equals(previousSerializer, concreteSerializer)) {
        throw SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass);
      } else {
        names.remove_8hbkc0_k$(previousSerializer.get_descriptor_wjt6a0_k$().get_serialName_u2rqhk_k$());
      }
    }
    var previousByName = names.get_1mhr4y_k$(name);
    if (!(previousByName == null)) {
      var tmp$ret$6;
      // Inline function 'kotlin.sequences.find' call
      var tmp2_find = asSequence(ensureNotNull(this.polyBase2Serializers_1.get_1mhr4y_k$(baseClass)));
      var tmp$ret$5;
      $l$block: {
        // Inline function 'kotlin.sequences.firstOrNull' call
        var tmp0_iterator = tmp2_find.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$4;
          // Inline function 'kotlinx.serialization.modules.SerializersModuleBuilder.registerPolymorphicSerializer.<anonymous>' call
          tmp$ret$4 = element.get_value_j01efc_k$() === previousByName;
          if (tmp$ret$4) {
            tmp$ret$5 = element;
            break $l$block;
          }
        }
        tmp$ret$5 = null;
      }
      tmp$ret$6 = tmp$ret$5;
      var conflictingClass = tmp$ret$6;
      throw IllegalArgumentException_init_$Create$("Multiple polymorphic serializers for base class '" + baseClass + "' " + ("have the same serial name '" + name + "': '" + concreteClass + "' and '" + conflictingClass + "'"));
    }
    // Inline function 'kotlin.collections.set' call
    baseClassSerializers.put_3mhbri_k$(concreteClass, concreteSerializer);
    // Inline function 'kotlin.collections.set' call
    names.put_3mhbri_k$(name, concreteSerializer);
  };
  SerializersModuleBuilder.prototype.registerPolymorphicSerializer$default_trhr6d_k$ = function (baseClass, concreteClass, concreteSerializer, allowOverwrite, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      allowOverwrite = false;
    return this.registerPolymorphicSerializer_1wc2ku_k$(baseClass, concreteClass, concreteSerializer, allowOverwrite);
  };
  SerializersModuleBuilder.prototype.build_1k0s4u_k$ = function () {
    return new SerialModuleImpl(this.class2ContextualProvider_1, this.polyBase2Serializers_1, this.polyBase2DefaultSerializerProvider_1, this.polyBase2NamedSerializers_1, this.polyBase2DefaultDeserializerProvider_1);
  };
  function polymorphic(_this__u8e3s4, baseClass, baseSerializer, builderAction) {
    var builder = new PolymorphicModuleBuilder(baseClass, baseSerializer);
    builderAction(builder);
    builder.buildTo_ivxld_k$(_this__u8e3s4);
  }
  function SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, $this) {
    SerializerAlreadyRegisteredException.call($this, 'Serializer for ' + concreteClass + ' already registered in the scope of ' + baseClass);
    return $this;
  }
  function SerializerAlreadyRegisteredException_init_$Create$(baseClass, concreteClass) {
    var tmp = SerializerAlreadyRegisteredException_init_$Init$(baseClass, concreteClass, Object.create(SerializerAlreadyRegisteredException.prototype));
    captureStack(tmp, SerializerAlreadyRegisteredException_init_$Create$);
    return tmp;
  }
  function SerializerAlreadyRegisteredException(msg) {
    IllegalArgumentException_init_$Init$_0(msg, this);
    captureStack(this, SerializerAlreadyRegisteredException);
  }
  function polymorphic$lambda($this$null) {
    return Unit_getInstance();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith(serializer) {
    this.serializer_1 = serializer;
  }
  SerializableWith.prototype.get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  SerializableWith.prototype.equals = function (other) {
    if (!(other instanceof SerializableWith))
      return false;
    var tmp0_other_with_cast = other instanceof SerializableWith ? other : THROW_CCE();
    if (!this.serializer_1.equals(tmp0_other_with_cast.serializer_1))
      return false;
    return true;
  };
  SerializableWith.prototype.hashCode = function () {
    return imul(getStringHashCode('serializer'), 127) ^ this.serializer_1.hashCode();
  };
  SerializableWith.prototype.toString = function () {
    return '@kotlinx.serialization.SerializableWith(serializer=' + this.serializer_1 + ')';
  };
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.isInstance_6tn68w_k$(_this__u8e3s4);
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function compiledSerializerImpl(_this__u8e3s4) {
    var tmp1_elvis_lhs = constructSerializerForGivenTypeArgs(_this__u8e3s4, []);
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp0_asDynamic = get_js(_this__u8e3s4);
      tmp$ret$0 = tmp0_asDynamic;
      var tmp0_safe_receiver = tmp$ret$0.Companion;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.serializer();
      tmp = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function constructSerializerForGivenTypeArgs(_this__u8e3s4, args) {
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.reflect.findAssociatedObject' call
      tmp$ret$0 = findAssociatedObject(_this__u8e3s4, getKClass(SerializableWith));
      var assocObject = tmp$ret$0;
      var tmp_0;
      if (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) {
        tmp_0 = (!(assocObject == null) ? isInterface(assocObject, KSerializer) : false) ? assocObject : THROW_CCE();
      } else {
        if (!(assocObject == null) ? isInterface(assocObject, SerializerFactory) : false) {
          var tmp_1 = assocObject.serializer_5xgt5t_k$(args.slice());
          tmp_0 = isInterface(tmp_1, KSerializer) ? tmp_1 : THROW_CCE();
        } else {
          if (get_isInterface(_this__u8e3s4)) {
            tmp_0 = new PolymorphicSerializer(_this__u8e3s4);
          } else {
            tmp_0 = null;
          }
        }
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      {
        tmp_2 = null;
      }
      tmp = tmp_2;
    }
    return tmp;
  }
  function get_isInterface(_this__u8e3s4) {
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_asDynamic = get_js(_this__u8e3s4);
    tmp$ret$0 = tmp0_asDynamic;
    var tmp0_safe_receiver = tmp$ret$0.$metadata$;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kind) == 'interface';
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.toTypedArray' call
    tmp$ret$0 = copyToArray(_this__u8e3s4);
    return tmp$ret$0;
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  SerialDescriptorImpl.prototype.get_isInline_usk17w_k$ = get_isInline;
  AbstractEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  AbstractEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  AbstractEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  AbstractEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  AbstractEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  ListLikeDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ListLikeDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  ListLikeDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  PrimitiveArrayDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PrimitiveArrayDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  PrimitiveArrayDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  MapLikeDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  MapLikeDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  MapLikeDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  LinkedHashMapClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  LinkedHashMapClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  LinkedHashMapClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  ArrayListClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ArrayListClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  ArrayListClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  ArrayClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ArrayClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  ArrayClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  PluginGeneratedSerialDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  InlineClassDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  InlinePrimitiveDescriptor$1.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  NoOpEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  NoOpEncoder.prototype.beginCollection_dgpn47_k$ = beginCollection;
  NoOpEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  NoOpEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  NoOpEncoder.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  PrimitiveSerialDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PrimitiveSerialDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  PrimitiveSerialDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  overwriteWith$1$1.prototype.polymorphicDefault_fs392_k$ = polymorphicDefault;
  SerializersModuleBuilder.prototype.polymorphicDefault_fs392_k$ = polymorphicDefault;
  //endregion
  //region block: init
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  ARRAY_NAME = 'kotlin.Array';
  INITIAL_SIZE = 10;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = buildSerialDescriptor$default;
  _.$_$.b = decodeNullableSerializableElement$default;
  _.$_$.c = decodeSerializableElement$default;
  _.$_$.d = PolymorphicSerializer_init_$Create$;
  _.$_$.e = SerializationException_init_$Create$_0;
  _.$_$.f = SerializationException_init_$Init$_1;
  _.$_$.g = UnknownFieldException_init_$Create$;
  _.$_$.h = CONTEXTUAL_getInstance;
  _.$_$.i = CLASS_getInstance;
  _.$_$.j = LIST_getInstance;
  _.$_$.k = MAP_getInstance;
  _.$_$.l = Companion_getInstance_1;
  _.$_$.m = BooleanSerializer_getInstance;
  _.$_$.n = ByteSerializer_getInstance;
  _.$_$.o = CharSerializer_getInstance;
  _.$_$.p = DoubleSerializer_getInstance;
  _.$_$.q = FloatSerializer_getInstance;
  _.$_$.r = IntSerializer_getInstance;
  _.$_$.s = LongSerializer_getInstance;
  _.$_$.t = ShortSerializer_getInstance;
  _.$_$.u = StringSerializer_getInstance;
  _.$_$.v = UIntSerializer_getInstance;
  _.$_$.w = ArraySerializer;
  _.$_$.x = BooleanArraySerializer;
  _.$_$.y = ByteArraySerializer;
  _.$_$.z = CharArraySerializer;
  _.$_$.a1 = DoubleArraySerializer;
  _.$_$.b1 = FloatArraySerializer;
  _.$_$.c1 = IntArraySerializer;
  _.$_$.d1 = ListSerializer;
  _.$_$.e1 = LongArraySerializer;
  _.$_$.f1 = MapEntrySerializer;
  _.$_$.g1 = MapSerializer;
  _.$_$.h1 = PairSerializer;
  _.$_$.i1 = ShortArraySerializer;
  _.$_$.j1 = TripleSerializer;
  _.$_$.k1 = get_nullable;
  _.$_$.l1 = serializer_0;
  _.$_$.m1 = serializer_6;
  _.$_$.n1 = serializer_7;
  _.$_$.o1 = serializer_10;
  _.$_$.p1 = serializer_2;
  _.$_$.q1 = serializer_5;
  _.$_$.r1 = serializer_8;
  _.$_$.s1 = serializer_1;
  _.$_$.t1 = serializer_4;
  _.$_$.u1 = serializer_3;
  _.$_$.v1 = PolymorphicKind;
  _.$_$.w1 = AbstractEncoder;
  _.$_$.x1 = decodeCollectionSize;
  _.$_$.y1 = decodeSequentially;
  _.$_$.z1 = CompositeDecoder;
  _.$_$.a2 = shouldEncodeElementDefault;
  _.$_$.b2 = CompositeEncoder;
  _.$_$.c2 = decodeNullableSerializableValue;
  _.$_$.d2 = decodeSerializableValue;
  _.$_$.e2 = Decoder;
  _.$_$.f2 = beginCollection;
  _.$_$.g2 = encodeNotNullMark;
  _.$_$.h2 = encodeNullableSerializableValue;
  _.$_$.i2 = encodeSerializableValue;
  _.$_$.j2 = Encoder;
  _.$_$.k2 = ArrayListSerializer;
  _.$_$.l2 = typeParametersSerializers;
  _.$_$.m2 = GeneratedSerializer;
  _.$_$.n2 = InlineClassDescriptor;
  _.$_$.o2 = LinkedHashMapSerializer;
  _.$_$.p2 = PluginGeneratedSerialDescriptor;
  _.$_$.q2 = SerializerFactory;
  _.$_$.r2 = throwMissingFieldException;
  _.$_$.s2 = PolymorphicModuleBuilder;
  _.$_$.t2 = SerializersModuleBuilder;
  _.$_$.u2 = overwriteWith;
  _.$_$.v2 = ContextualSerializer;
  _.$_$.w2 = KSerializer;
  _.$_$.x2 = SerializationException;
  _.$_$.y2 = StringFormat;
  _.$_$.z2 = serializerOrNull;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map
