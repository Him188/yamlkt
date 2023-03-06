(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'yamlkt-yamlkt'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'yamlkt-yamlkt'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'yamlkt-yamlkt'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'yamlkt-yamlkt'.");
    }
    root['yamlkt-yamlkt'] = factory(typeof this['yamlkt-yamlkt'] === 'undefined' ? {} : this['yamlkt-yamlkt'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.k2;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var overwriteWith = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u2;
  var objectMeta = kotlin_kotlin.$_$.g5;
  var setMetadataFor = kotlin_kotlin.$_$.h5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.q;
  var Companion_getInstance = kotlin_kotlin.$_$.i2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i1;
  var createFailure = kotlin_kotlin.$_$.g7;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.j1;
  var println = kotlin_kotlin.$_$.y3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.k1;
  var THROW_CCE = kotlin_kotlin.$_$.a7;
  var isObject = kotlin_kotlin.$_$.z4;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var Map = kotlin_kotlin.$_$.r2;
  var isInterface = kotlin_kotlin.$_$.x4;
  var List = kotlin_kotlin.$_$.p2;
  var StringFormat = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y2;
  var classMeta = kotlin_kotlin.$_$.g4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var toString = kotlin_kotlin.$_$.j5;
  var getStringHashCode = kotlin_kotlin.$_$.m4;
  var Annotation = kotlin_kotlin.$_$.t6;
  var THROW_ISE = kotlin_kotlin.$_$.b7;
  var Enum = kotlin_kotlin.$_$.v6;
  var captureStack = kotlin_kotlin.$_$.c4;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x2;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var buildSerialDescriptor$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.i7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var mapCapacity = kotlin_kotlin.$_$.q3;
  var equals = kotlin_kotlin.$_$.i4;
  var toString_0 = kotlin_kotlin.$_$.n7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var toInt = kotlin_kotlin.$_$.l6;
  var toIntOrNull = kotlin_kotlin.$_$.k6;
  var toDouble = kotlin_kotlin.$_$.j6;
  var toDoubleOrNull = kotlin_kotlin.$_$.i6;
  var toByte = kotlin_kotlin.$_$.h6;
  var toByteOrNull = kotlin_kotlin.$_$.g6;
  var toShort = kotlin_kotlin.$_$.p6;
  var toShortOrNull = kotlin_kotlin.$_$.o6;
  var toLong = kotlin_kotlin.$_$.n6;
  var toLongOrNull = kotlin_kotlin.$_$.m6;
  var hashCode = kotlin_kotlin.$_$.n4;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.u2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var map = kotlin_kotlin.$_$.t5;
  var toList = kotlin_kotlin.$_$.u5;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.e;
  var lazy = kotlin_kotlin.$_$.j7;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var joinToString$default = kotlin_kotlin.$_$.f;
  var isBooleanArray = kotlin_kotlin.$_$.q4;
  var Char = kotlin_kotlin.$_$.u6;
  var isCharArray = kotlin_kotlin.$_$.s4;
  var isDoubleArray = kotlin_kotlin.$_$.u4;
  var isFloatArray = kotlin_kotlin.$_$.v4;
  var isLongArray = kotlin_kotlin.$_$.y4;
  var isShortArray = kotlin_kotlin.$_$.a5;
  var isIntArray = kotlin_kotlin.$_$.w4;
  var isByteArray = kotlin_kotlin.$_$.r4;
  var isArray = kotlin_kotlin.$_$.p4;
  var Long = kotlin_kotlin.$_$.y6;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.e2;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var charSequenceGet = kotlin_kotlin.$_$.e4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var coerceAtLeast = kotlin_kotlin.$_$.k5;
  var charSequenceLength = kotlin_kotlin.$_$.f4;
  var get_indices = kotlin_kotlin.$_$.y5;
  var coerceIn = kotlin_kotlin.$_$.l5;
  var Pair = kotlin_kotlin.$_$.z6;
  var takeLast = kotlin_kotlin.$_$.e6;
  var take = kotlin_kotlin.$_$.f6;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.h2;
  var fillArrayVal = kotlin_kotlin.$_$.j4;
  var numberToLong = kotlin_kotlin.$_$.f5;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.g1;
  var doubleToULong = kotlin_kotlin.$_$.h7;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.t1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.z1;
  var toLong_0 = kotlin_kotlin.$_$.i5;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.c2;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.d2;
  var repeat = kotlin_kotlin.$_$.d6;
  var print = kotlin_kotlin.$_$.z3;
  var KMutableProperty0 = kotlin_kotlin.$_$.q5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.l4;
  var KMutableProperty1 = kotlin_kotlin.$_$.r5;
  var contains$default = kotlin_kotlin.$_$.g;
  var numberToInt = kotlin_kotlin.$_$.e5;
  var interfaceMeta = kotlin_kotlin.$_$.o4;
  var PairSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var TripleSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var Triple = kotlin_kotlin.$_$.c7;
  var ArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var MapEntrySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var Entry = kotlin_kotlin.$_$.q2;
  var rangeTo = kotlin_kotlin.$_$.m5;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.h1;
  var isWhitespace = kotlin_kotlin.$_$.a6;
  var last = kotlin_kotlin.$_$.b6;
  var first = kotlin_kotlin.$_$.x5;
  var getOrNull = kotlin_kotlin.$_$.j3;
  var isCharSequence = kotlin_kotlin.$_$.t4;
  var trimEnd = kotlin_kotlin.$_$.q6;
  var numberToChar = kotlin_kotlin.$_$.d5;
  var charArray = kotlin_kotlin.$_$.d4;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.o1;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.r1;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.s1;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.u1;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.l1;
  var UByte__toString_impl_v72jg = kotlin_kotlin.$_$.n1;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.v1;
  var UShort__toString_impl_edaoee = kotlin_kotlin.$_$.x1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j2;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.m1;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.w1;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.p1;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e2;
  var decodeNullableSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var decodeSerializableElement$default = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c1;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z1;
  var Char__compareTo_impl_ypi4mb = kotlin_kotlin.$_$.e1;
  var copyOf = kotlin_kotlin.$_$.a3;
  var concatToString = kotlin_kotlin.$_$.v5;
  var copyOf_0 = kotlin_kotlin.$_$.e3;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.a1;
  var get_lastIndex = kotlin_kotlin.$_$.n3;
  var compareTo = kotlin_kotlin.$_$.h4;
  var decodeSequentially = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var decodeCollectionSize = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x1;
  var decodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d2;
  var decodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c2;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var isBlank = kotlin_kotlin.$_$.z5;
  var equals_0 = kotlin_kotlin.$_$.w5;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var SerializationException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.l7;
  var trimIndent = kotlin_kotlin.$_$.r6;
  var lineSequence = kotlin_kotlin.$_$.c6;
  var trim = kotlin_kotlin.$_$.s6;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w1;
  var encodeNotNullMark = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var beginCollection = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f2;
  var encodeSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i2;
  var encodeNullableSerializableValue = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h2;
  var shouldEncodeElementDefault = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a2;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.g2;
  var serializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.y1;
  var serializer_1 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var serializer_2 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.a2;
  var serializer_3 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.b2;
  var serializer_4 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var serializer_5 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var serializer_6 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var serializer_7 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b2;
  var serializerOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z2;
  var getKClass = kotlin_kotlin.$_$.d;
  var BooleanArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var DoubleArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var FloatArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var CharArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var LongArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var ByteArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var ShortArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var IntArraySerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Yaml, 'Yaml', classMeta, undefined, [StringFormat], undefined, undefined, []);
  setMetadataFor(Default, 'Default', objectMeta, Yaml, undefined, undefined, undefined, []);
  setMetadataFor(YamlImpl, 'YamlImpl', classMeta, Yaml, undefined, undefined, undefined, []);
  setMetadataFor(Comment, 'Comment', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(YamlConfigurationInternal, 'YamlConfigurationInternal', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(StringSerialization, 'StringSerialization', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(NullSerialization, 'NullSerialization', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(MapSerialization, 'MapSerialization', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(ListSerialization, 'ListSerialization', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(YamlBuilder, 'YamlBuilder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlDecodingException, 'YamlDecodingException', classMeta, SerializationException, undefined, undefined, undefined, []);
  setMetadataFor(IYamlDynamicSerializer, 'IYamlDynamicSerializer', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlDynamicSerializer, 'YamlDynamicSerializer', objectMeta, undefined, [KSerializer, IYamlDynamicSerializer], undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlElement, 'YamlElement', classMeta, undefined, undefined, undefined, {0: YamlElementSerializer_getInstance}, []);
  setMetadataFor(YamlMap, 'YamlMap', classMeta, YamlElement, [YamlElement, Map], undefined, {0: YamlMapSerializer_getInstance}, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlList, 'YamlList', classMeta, YamlElement, [YamlElement, List], undefined, {0: YamlListSerializer_getInstance}, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlPrimitive, 'YamlPrimitive', classMeta, YamlElement, undefined, undefined, {0: YamlPrimitiveSerializer_getInstance}, []);
  setMetadataFor(YamlLiteral, 'YamlLiteral', classMeta, YamlPrimitive, undefined, undefined, {0: YamlLiteralSerializer_getInstance}, []);
  setMetadataFor(YamlNull, 'YamlNull', objectMeta, YamlPrimitive, [YamlPrimitive, SerializerFactory], undefined, {0: YamlNull_getInstance}, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlNullableDynamicSerializer, 'YamlNullableDynamicSerializer', objectMeta, undefined, [KSerializer, IYamlDynamicSerializer], undefined, undefined, []);
  setMetadataFor(HexConverter, 'HexConverter', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(BinaryConverter, 'BinaryConverter', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Debugging, 'Debugging', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlDynamicPairSerializer, 'YamlDynamicPairSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlDynamicTripleSerializer, 'YamlDynamicTripleSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(AnyTypedArraySerializer, 'AnyTypedArraySerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlDynamicMapSerializer, 'YamlDynamicMapSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlDynamicListSerializer, 'YamlDynamicListSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlMapEntrySerializer, 'YamlMapEntrySerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(EscapeCharMappings, 'EscapeCharMappings', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(InlineEncoder, 'InlineEncoder', classMeta, undefined, [Encoder], undefined, undefined, []);
  setMetadataFor(InlineDecoder, 'InlineDecoder', classMeta, undefined, [Decoder], undefined, undefined, []);
  setMetadataFor(InlineElementDecoder, 'InlineElementDecoder', classMeta, undefined, [Decoder, CompositeDecoder], undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Token, 'Token', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(StringBufHolder, 'StringBufHolder', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(TokenStream, 'TokenStream', classMeta, StringBufHolder, undefined, undefined, undefined, []);
  setMetadataFor(Stack, 'Stack', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Kind, 'Kind', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(AbstractDecoder, 'AbstractDecoder', classMeta, undefined, [CompositeDecoder, Decoder], undefined, undefined, []);
  setMetadataFor(IndentedDecoder, 'IndentedDecoder', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(EmptyClassDecoder, 'EmptyClassDecoder', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(BlockClassDecoder, 'BlockClassDecoder', classMeta, IndentedDecoder, undefined, undefined, undefined, []);
  setMetadataFor(BlockMapDecoder, 'BlockMapDecoder', classMeta, IndentedDecoder, undefined, undefined, undefined, []);
  setMetadataFor(FlowMapDecoder, 'FlowMapDecoder', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(FlowClassDecoder, 'FlowClassDecoder', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(FlowSequenceDecoder, 'FlowSequenceDecoder', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(BlockSequenceDecoder, 'BlockSequenceDecoder', classMeta, IndentedDecoder, undefined, undefined, undefined, []);
  setMetadataFor(YamlStringDecoder, 'YamlStringDecoder', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(YamlNullStringDecoder, 'YamlNullStringDecoder', classMeta, AbstractDecoder, undefined, undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlDecoder, 'YamlDecoder', classMeta, undefined, [Decoder], undefined, undefined, []);
  setMetadataFor(YamlMapSerializer, 'YamlMapSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlListSerializer, 'YamlListSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlLiteralSerializer, 'YamlLiteralSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlNullSerializer, 'YamlNullSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlElementSerializer, 'YamlElementSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlPrimitiveSerializer, 'YamlPrimitiveSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlElementMapSerializer, 'YamlElementMapSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlElementListSerializer, 'YamlElementListSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(YamlEncoder$AbstractEncoder$encodeInlineElement$1, undefined, classMeta, AbstractEncoder, undefined, undefined, undefined, []);
  setMetadataFor(AbstractEncoder_0, 'AbstractEncoder', classMeta, undefined, [CompositeEncoder, Encoder], undefined, undefined, []);
  setMetadataFor(FlowEncoder, 'FlowEncoder', classMeta, AbstractEncoder_0, undefined, undefined, undefined, []);
  setMetadataFor(FlowMapOrClassEncoder, 'FlowMapOrClassEncoder', classMeta, FlowEncoder, undefined, undefined, undefined, []);
  setMetadataFor(FlowSequenceEncoder, 'FlowSequenceEncoder', classMeta, FlowEncoder, undefined, undefined, undefined, []);
  setMetadataFor(EmptySequenceEncoder, 'EmptySequenceEncoder', classMeta, FlowEncoder, undefined, undefined, undefined, []);
  setMetadataFor(BlockEncoder, 'BlockEncoder', classMeta, AbstractEncoder_0, undefined, undefined, undefined, []);
  setMetadataFor(BlockSequenceEncoder, 'BlockSequenceEncoder', classMeta, BlockEncoder, undefined, undefined, undefined, []);
  setMetadataFor(BlockMapOrClassEncoder, 'BlockMapOrClassEncoder', classMeta, BlockEncoder, undefined, undefined, undefined, []);
  setMetadataFor(YamlEncoder, 'YamlEncoder', classMeta, undefined, [Encoder], undefined, undefined, []);
  setMetadataFor(YamlWriter, 'YamlWriter', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function Yaml$Default$nonStrict$lambda($this$Yaml) {
    $this$Yaml.set_nonStrictNumber_j5lwt5_k$(true);
    $this$Yaml.set_nonStrictNullability_o6gsfz_k$(true);
    return Unit_getInstance();
  }
  function Yaml_init_$Init$(configuration, serializersModule, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      // Inline function 'net.mamoe.yamlkt.Yaml.<init>.<anonymous>' call
      builder.contextual_ki5uma_k$(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), YamlDynamicSerializer_getInstance());
      tmp$ret$0 = builder.build_1k0s4u_k$();
      tmp$ret$0_0 = Unit_getInstance();
      serializersModule = overwriteWith(tmp$ret$0, configuration.get_serializersModule_piitvg_k$());
    }
    Yaml.call($this, configuration, serializersModule);
    return $this;
  }
  function Yaml_init_$Create$(configuration, serializersModule, $mask0, $marker) {
    return Yaml_init_$Init$(configuration, serializersModule, $mask0, $marker, Object.create(Yaml.prototype));
  }
  function Default() {
    Default_instance = this;
    var tmp = YamlConfigurationInternal_init_$Create$(null, false, false, false, null, null, null, null, null, 511, null);
    Yaml_init_$Init$(tmp, null, 2, null, this);
    var tmp_0 = this;
    tmp_0.nonStrict_1 = Yaml$default(null, Yaml$Default$nonStrict$lambda, 1, null);
  }
  Default.prototype.get_default_qtagd4_k$ = function () {
    return Default_getInstance();
  };
  Default.prototype.get_nonStrict_cqatl9_k$ = function () {
    return this.nonStrict_1;
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Yaml(configuration, serializersModule) {
    Default_getInstance();
    this.configuration_1 = configuration;
    this.serializersModule_1 = serializersModule;
  }
  Yaml.prototype.get_configuration_uqypjh_k$ = function () {
    return this.configuration_1;
  };
  Yaml.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  Yaml.prototype.encodeToString_bhi5ce_k$ = function (serializer, value) {
    var sb = StringBuilder_init_$Create$();
    var tmp$ret$5;
    // Inline function 'kotlin.fold' call
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      serializer.serialize_32qylj_k$(new YamlEncoder(this.configuration_1, this.get_serializersModule_piitvg_k$(), new YamlWriter(sb)), value);
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    var tmp3_fold = tmp$ret$2;
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(tmp3_fold);
    var tmp_1;
    if (exception == null) {
      var tmp_2 = _Result___get_value__impl__bjfvqg(tmp3_fold);
      var tmp4__anonymous__pkmkx7 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
      return sb.toString();
    } else {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
        var tmp0_logCustom = Debugging_getInstance();
        if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
          tmp$ret$3 = Unit_getInstance();
          break $l$block;
        }
        var tmp_3 = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.Yaml.encodeToString.<anonymous>.<anonymous>' call
        tmp$ret$4 = '[Debugging] Printed:\n\n```\n' + sb + '\n```';
        println(tmp_3 + tmp$ret$4);
      }
      throw exception;
    }
    tmp$ret$5 = tmp_1;
  };
  Yaml.prototype.encodeToString_68634t_k$ = function (value) {
    return this.encodeToString_bhi5ce_k$(YamlNullableDynamicSerializer_getInstance(), value);
  };
  Yaml.prototype.decodeFromString_d9fce8_k$ = function (deserializer, string) {
    return deserializer.deserialize_2t41fm_k$(new YamlDecoder(this.configuration_1, new TokenStream(string), this.get_serializersModule_piitvg_k$()));
  };
  Yaml.prototype.decodeYamlFromString_oj0433_k$ = function (yamlContent) {
    return this.decodeFromString_d9fce8_k$(Companion_getInstance_6().serializer_9w0wvi_k$(), yamlContent);
  };
  Yaml.prototype.decodeYamlMapFromString_k0tnkv_k$ = function (yamlContent) {
    return this.decodeFromString_d9fce8_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), yamlContent);
  };
  Yaml.prototype.decodeYamlListFromString_6ih2b1_k$ = function (yamlContent) {
    return this.decodeFromString_d9fce8_k$(Companion_getInstance_4().serializer_9w0wvi_k$(), yamlContent);
  };
  Yaml.prototype.decodeMapFromString_k1n9fc_k$ = function (yamlContent) {
    var v = parseMapOrNullImpl(this, yamlContent);
    var tmp;
    if (v == null) {
      throw IllegalArgumentException_init_$Create$('Cannot cast `null` to Map<String, Any?>');
    } else {
      if (!(v == null) ? isInterface(v, Map) : false) {
        tmp = v;
      } else {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.classSimpleName' call
        tmp$ret$0 = getKClassFromExpression(v).get_simpleName_r6f8py_k$();
        throw IllegalArgumentException_init_$Create$('Cannot cast ' + tmp$ret$0 + ' to Map<String, Any?>');
      }
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, Map) ? tmp_0 : THROW_CCE();
  };
  Yaml.prototype.decodeListFromString_5sz92e_k$ = function (yamlContent) {
    var v = this.decodeFromString_d9fce8_k$(YamlNullableDynamicSerializer_getInstance(), yamlContent);
    if (!(v == null) ? isInterface(v, List) : false)
      return v;
    else {
      var tmp0_safe_receiver = v;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.classSimpleName' call
        tmp$ret$0 = getKClassFromExpression(tmp0_safe_receiver).get_simpleName_r6f8py_k$();
        tmp = tmp$ret$0;
      }
      throw IllegalArgumentException_init_$Create$('Cannot cast ' + tmp + ' to List<Any?>');
    }
  };
  Yaml.prototype.decodeAnyFromString_g6gmi0_k$ = function (yamlContent) {
    return this.decodeFromString_d9fce8_k$(YamlNullableDynamicSerializer_getInstance(), yamlContent);
  };
  function Yaml_0(from, configuration) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new YamlBuilder(from.configuration_1);
    // Inline function 'kotlin.contracts.contract' call
    configuration(tmp0_apply);
    tmp$ret$0 = tmp0_apply;
    return new YamlImpl(tmp$ret$0.build_1k0s4u_k$());
  }
  function Yaml$default(from, configuration, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      from = Default_getInstance();
    if (!(($mask0 & 2) === 0)) {
      configuration = Yaml$lambda;
    }
    return Yaml_0(from, configuration);
  }
  function parseMapOrNullImpl(_this__u8e3s4, yamlContent) {
    var v = _this__u8e3s4.decodeFromString_d9fce8_k$(YamlNullableDynamicSerializer_getInstance(), yamlContent);
    var tmp;
    if (!(v == null) ? isInterface(v, Map) : false) {
      var result = LinkedHashMap_init_$Create$(v.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_forEach = v;
      var tmp$ret$0;
      // Inline function 'kotlin.collections.iterator' call
      tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'net.mamoe.yamlkt.parseMapOrNullImpl.<anonymous>' call
        var tmp$ret$1;
        // Inline function 'kotlin.collections.component1' call
        tmp$ret$1 = element.get_key_18j28a_k$();
        var key = tmp$ret$1;
        var tmp$ret$2;
        // Inline function 'kotlin.collections.component2' call
        tmp$ret$2 = element.get_value_j01efc_k$();
        var value = tmp$ret$2;
        // Inline function 'kotlin.collections.set' call
        var tmp0_safe_receiver = key;
        var tmp0_set = tmp0_safe_receiver == null ? null : toString(tmp0_safe_receiver);
        result.put_3mhbri_k$(tmp0_set, value);
      }
      tmp = result;
    } else {
      tmp = v;
    }
    return tmp;
  }
  function YamlImpl(configuration) {
    Yaml_init_$Init$(configuration, null, 2, null, this);
  }
  function Yaml$lambda($this$null) {
    return Unit_getInstance();
  }
  function Comment(lines) {
    this.lines_1 = lines;
  }
  Comment.prototype.get_lines_iuolhy_k$ = function () {
    return this.lines_1;
  };
  Comment.prototype.equals = function (other) {
    if (!(other instanceof Comment))
      return false;
    var tmp0_other_with_cast = other instanceof Comment ? other : THROW_CCE();
    if (!(this.lines_1 === tmp0_other_with_cast.lines_1))
      return false;
    return true;
  };
  Comment.prototype.hashCode = function () {
    return imul(getStringHashCode('lines'), 127) ^ getStringHashCode(this.lines_1);
  };
  Comment.prototype.toString = function () {
    return '@net.mamoe.yamlkt.Comment(lines=' + this.lines_1 + ')';
  };
  function YamlConfigurationInternal_init_$Init$(serializersModule, nonStrictNullability, nonStrictNumber, encodeDefaultValues, stringSerialization, nullSerialization, mapSerialization, classSerialization, listSerialization, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp$ret$1;
      var tmp$ret$1_0;
      // Inline function 'kotlinx.serialization.modules.SerializersModule' call
      var builder = new SerializersModuleBuilder();
      var tmp$ret$0;
      var tmp$ret$0_0;
      // Inline function 'net.mamoe.yamlkt.YamlConfigurationInternal.<init>.<anonymous>' call
      tmp$ret$0 = Unit_getInstance();
      tmp$ret$0_0 = Unit_getInstance();
      tmp$ret$1 = builder.build_1k0s4u_k$();
      tmp$ret$1_0 = Unit_getInstance();
      serializersModule = tmp$ret$1;
    }
    if (!(($mask0 & 2) === 0))
      nonStrictNullability = false;
    if (!(($mask0 & 4) === 0))
      nonStrictNumber = false;
    if (!(($mask0 & 8) === 0))
      encodeDefaultValues = true;
    if (!(($mask0 & 16) === 0))
      stringSerialization = StringSerialization_NONE_getInstance();
    if (!(($mask0 & 32) === 0))
      nullSerialization = NullSerialization_NULL_getInstance();
    if (!(($mask0 & 64) === 0))
      mapSerialization = MapSerialization_BLOCK_MAP_getInstance();
    if (!(($mask0 & 128) === 0))
      classSerialization = MapSerialization_BLOCK_MAP_getInstance();
    if (!(($mask0 & 256) === 0))
      listSerialization = ListSerialization_AUTO_getInstance();
    YamlConfigurationInternal.call($this, serializersModule, nonStrictNullability, nonStrictNumber, encodeDefaultValues, stringSerialization, nullSerialization, mapSerialization, classSerialization, listSerialization);
    return $this;
  }
  function YamlConfigurationInternal_init_$Create$(serializersModule, nonStrictNullability, nonStrictNumber, encodeDefaultValues, stringSerialization, nullSerialization, mapSerialization, classSerialization, listSerialization, $mask0, $marker) {
    return YamlConfigurationInternal_init_$Init$(serializersModule, nonStrictNullability, nonStrictNumber, encodeDefaultValues, stringSerialization, nullSerialization, mapSerialization, classSerialization, listSerialization, $mask0, $marker, Object.create(YamlConfigurationInternal.prototype));
  }
  function YamlConfigurationInternal(serializersModule, nonStrictNullability, nonStrictNumber, encodeDefaultValues, stringSerialization, nullSerialization, mapSerialization, classSerialization, listSerialization) {
    this.serializersModule_1 = serializersModule;
    this.nonStrictNullability_1 = nonStrictNullability;
    this.nonStrictNumber_1 = nonStrictNumber;
    this.encodeDefaultValues_1 = encodeDefaultValues;
    this.stringSerialization_1 = stringSerialization;
    this.nullSerialization_1 = nullSerialization;
    this.mapSerialization_1 = mapSerialization;
    this.classSerialization_1 = classSerialization;
    this.listSerialization_1 = listSerialization;
  }
  YamlConfigurationInternal.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  YamlConfigurationInternal.prototype.get_nonStrictNullability_m9bewm_k$ = function () {
    return this.nonStrictNullability_1;
  };
  YamlConfigurationInternal.prototype.get_nonStrictNumber_bmk1sa_k$ = function () {
    return this.nonStrictNumber_1;
  };
  YamlConfigurationInternal.prototype.get_encodeDefaultValues_bow2sc_k$ = function () {
    return this.encodeDefaultValues_1;
  };
  YamlConfigurationInternal.prototype.get_stringSerialization_qqa41i_k$ = function () {
    return this.stringSerialization_1;
  };
  YamlConfigurationInternal.prototype.get_nullSerialization_44dg5c_k$ = function () {
    return this.nullSerialization_1;
  };
  YamlConfigurationInternal.prototype.get_mapSerialization_ov7m0z_k$ = function () {
    return this.mapSerialization_1;
  };
  YamlConfigurationInternal.prototype.get_classSerialization_8kh6u9_k$ = function () {
    return this.classSerialization_1;
  };
  YamlConfigurationInternal.prototype.get_listSerialization_i0dw09_k$ = function () {
    return this.listSerialization_1;
  };
  var StringSerialization_SINGLE_QUOTATION_instance;
  var StringSerialization_DOUBLE_QUOTATION_instance;
  var StringSerialization_NONE_instance;
  var StringSerialization_BEST_PERFORMANCE_instance;
  function values() {
    return [StringSerialization_SINGLE_QUOTATION_getInstance(), StringSerialization_DOUBLE_QUOTATION_getInstance(), StringSerialization_NONE_getInstance(), StringSerialization_BEST_PERFORMANCE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'SINGLE_QUOTATION':
        return StringSerialization_SINGLE_QUOTATION_getInstance();
      case 'DOUBLE_QUOTATION':
        return StringSerialization_DOUBLE_QUOTATION_getInstance();
      case 'NONE':
        return StringSerialization_NONE_getInstance();
      case 'BEST_PERFORMANCE':
        return StringSerialization_BEST_PERFORMANCE_getInstance();
      default:
        StringSerialization_initEntries();
        THROW_ISE();
        break;
    }
  }
  var StringSerialization_entriesInitialized;
  function StringSerialization_initEntries() {
    if (StringSerialization_entriesInitialized)
      return Unit_getInstance();
    StringSerialization_entriesInitialized = true;
    StringSerialization_SINGLE_QUOTATION_instance = new StringSerialization('SINGLE_QUOTATION', 0);
    StringSerialization_DOUBLE_QUOTATION_instance = new StringSerialization('DOUBLE_QUOTATION', 1);
    StringSerialization_NONE_instance = new StringSerialization('NONE', 2);
    StringSerialization_BEST_PERFORMANCE_instance = new StringSerialization('BEST_PERFORMANCE', 3);
  }
  var NullSerialization_TILDE_instance;
  var NullSerialization_NULL_instance;
  function values_0() {
    return [NullSerialization_TILDE_getInstance(), NullSerialization_NULL_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TILDE':
        return NullSerialization_TILDE_getInstance();
      case 'NULL':
        return NullSerialization_NULL_getInstance();
      default:
        NullSerialization_initEntries();
        THROW_ISE();
        break;
    }
  }
  var NullSerialization_entriesInitialized;
  function NullSerialization_initEntries() {
    if (NullSerialization_entriesInitialized)
      return Unit_getInstance();
    NullSerialization_entriesInitialized = true;
    NullSerialization_TILDE_instance = new NullSerialization('TILDE', 0, '~');
    NullSerialization_NULL_instance = new NullSerialization('NULL', 1, 'null');
  }
  var MapSerialization_BLOCK_MAP_instance;
  var MapSerialization_FLOW_MAP_instance;
  function values_1() {
    return [MapSerialization_BLOCK_MAP_getInstance(), MapSerialization_FLOW_MAP_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'BLOCK_MAP':
        return MapSerialization_BLOCK_MAP_getInstance();
      case 'FLOW_MAP':
        return MapSerialization_FLOW_MAP_getInstance();
      default:
        MapSerialization_initEntries();
        THROW_ISE();
        break;
    }
  }
  var MapSerialization_entriesInitialized;
  function MapSerialization_initEntries() {
    if (MapSerialization_entriesInitialized)
      return Unit_getInstance();
    MapSerialization_entriesInitialized = true;
    MapSerialization_BLOCK_MAP_instance = new MapSerialization('BLOCK_MAP', 0);
    MapSerialization_FLOW_MAP_instance = new MapSerialization('FLOW_MAP', 1);
  }
  var ListSerialization_BLOCK_SEQUENCE_instance;
  var ListSerialization_FLOW_SEQUENCE_instance;
  var ListSerialization_AUTO_instance;
  function values_2() {
    return [ListSerialization_BLOCK_SEQUENCE_getInstance(), ListSerialization_FLOW_SEQUENCE_getInstance(), ListSerialization_AUTO_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'BLOCK_SEQUENCE':
        return ListSerialization_BLOCK_SEQUENCE_getInstance();
      case 'FLOW_SEQUENCE':
        return ListSerialization_FLOW_SEQUENCE_getInstance();
      case 'AUTO':
        return ListSerialization_AUTO_getInstance();
      default:
        ListSerialization_initEntries();
        THROW_ISE();
        break;
    }
  }
  var ListSerialization_entriesInitialized;
  function ListSerialization_initEntries() {
    if (ListSerialization_entriesInitialized)
      return Unit_getInstance();
    ListSerialization_entriesInitialized = true;
    ListSerialization_BLOCK_SEQUENCE_instance = new ListSerialization('BLOCK_SEQUENCE', 0);
    ListSerialization_FLOW_SEQUENCE_instance = new ListSerialization('FLOW_SEQUENCE', 1);
    ListSerialization_AUTO_instance = new ListSerialization('AUTO', 2);
  }
  function StringSerialization(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function NullSerialization(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  NullSerialization.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  function MapSerialization(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ListSerialization(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function StringSerialization_SINGLE_QUOTATION_getInstance() {
    StringSerialization_initEntries();
    return StringSerialization_SINGLE_QUOTATION_instance;
  }
  function StringSerialization_DOUBLE_QUOTATION_getInstance() {
    StringSerialization_initEntries();
    return StringSerialization_DOUBLE_QUOTATION_instance;
  }
  function StringSerialization_NONE_getInstance() {
    StringSerialization_initEntries();
    return StringSerialization_NONE_instance;
  }
  function StringSerialization_BEST_PERFORMANCE_getInstance() {
    StringSerialization_initEntries();
    return StringSerialization_BEST_PERFORMANCE_instance;
  }
  function NullSerialization_TILDE_getInstance() {
    NullSerialization_initEntries();
    return NullSerialization_TILDE_instance;
  }
  function NullSerialization_NULL_getInstance() {
    NullSerialization_initEntries();
    return NullSerialization_NULL_instance;
  }
  function MapSerialization_BLOCK_MAP_getInstance() {
    MapSerialization_initEntries();
    return MapSerialization_BLOCK_MAP_instance;
  }
  function MapSerialization_FLOW_MAP_getInstance() {
    MapSerialization_initEntries();
    return MapSerialization_FLOW_MAP_instance;
  }
  function ListSerialization_BLOCK_SEQUENCE_getInstance() {
    ListSerialization_initEntries();
    return ListSerialization_BLOCK_SEQUENCE_instance;
  }
  function ListSerialization_FLOW_SEQUENCE_getInstance() {
    ListSerialization_initEntries();
    return ListSerialization_FLOW_SEQUENCE_instance;
  }
  function ListSerialization_AUTO_getInstance() {
    ListSerialization_initEntries();
    return ListSerialization_AUTO_instance;
  }
  function YamlBuilder(conf) {
    this.serializersModule_1 = conf.serializersModule_1;
    this.nonStrictNullability_1 = conf.nonStrictNullability_1;
    this.nonStrictNumber_1 = conf.nonStrictNumber_1;
    this.encodeDefaultValues_1 = conf.encodeDefaultValues_1;
    this.stringSerialization_1 = conf.stringSerialization_1;
    this.nullSerialization_1 = conf.nullSerialization_1;
    this.mapSerialization_1 = conf.mapSerialization_1;
    this.classSerialization_1 = conf.classSerialization_1;
    this.listSerialization_1 = conf.listSerialization_1;
  }
  YamlBuilder.prototype.set_serializersModule_ohq86n_k$ = function (_set____db54di) {
    this.serializersModule_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  YamlBuilder.prototype.set_nonStrictNullability_o6gsfz_k$ = function (_set____db54di) {
    this.nonStrictNullability_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_nonStrictNullability_m9bewm_k$ = function () {
    return this.nonStrictNullability_1;
  };
  YamlBuilder.prototype.set_nonStrictNumber_j5lwt5_k$ = function (_set____db54di) {
    this.nonStrictNumber_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_nonStrictNumber_bmk1sa_k$ = function () {
    return this.nonStrictNumber_1;
  };
  YamlBuilder.prototype.set_encodeDefaultValues_hq44xz_k$ = function (_set____db54di) {
    this.encodeDefaultValues_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_encodeDefaultValues_bow2sc_k$ = function () {
    return this.encodeDefaultValues_1;
  };
  YamlBuilder.prototype.set_stringSerialization_8nd5hf_k$ = function (_set____db54di) {
    this.stringSerialization_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_stringSerialization_qqa41i_k$ = function () {
    return this.stringSerialization_1;
  };
  YamlBuilder.prototype.set_nullSerialization_vtx8l9_k$ = function (_set____db54di) {
    this.nullSerialization_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_nullSerialization_44dg5c_k$ = function () {
    return this.nullSerialization_1;
  };
  YamlBuilder.prototype.set_mapSerialization_ohj0jh_k$ = function (_set____db54di) {
    this.mapSerialization_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_mapSerialization_ov7m0z_k$ = function () {
    return this.mapSerialization_1;
  };
  YamlBuilder.prototype.set_classSerialization_8fpx2f_k$ = function (_set____db54di) {
    this.classSerialization_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_classSerialization_8kh6u9_k$ = function () {
    return this.classSerialization_1;
  };
  YamlBuilder.prototype.set_listSerialization_ydi3a5_k$ = function (_set____db54di) {
    this.listSerialization_1 = _set____db54di;
  };
  YamlBuilder.prototype.get_listSerialization_i0dw09_k$ = function () {
    return this.listSerialization_1;
  };
  YamlBuilder.prototype.build_1k0s4u_k$ = function () {
    return new YamlConfigurationInternal(this.serializersModule_1, this.nonStrictNullability_1, this.nonStrictNumber_1, this.encodeDefaultValues_1, this.stringSerialization_1, this.nullSerialization_1, this.mapSerialization_1, this.classSerialization_1, this.listSerialization_1);
  };
  function YamlDecodingException_init_$Init$(message, cause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cause = null;
    YamlDecodingException.call($this, message, cause);
    return $this;
  }
  function YamlDecodingException_init_$Create$(message, cause, $mask0, $marker) {
    var tmp = YamlDecodingException_init_$Init$(message, cause, $mask0, $marker, Object.create(YamlDecodingException.prototype));
    captureStack(tmp, YamlDecodingException_init_$Create$);
    return tmp;
  }
  function YamlDecodingException(message, cause) {
    SerializationException_init_$Init$(message, cause, this);
    captureStack(this, YamlDecodingException);
  }
  function YamlDynamicSerializer() {
    YamlDynamicSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlDynamic', tmp_0, [], null, 12, null);
  }
  YamlDynamicSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlDynamicSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$4;
    // Inline function 'net.mamoe.yamlkt.YamlNullableDynamicSerializer.decode' call
    var tmp1_decode = YamlNullableDynamicSerializer_getInstance();
    var tmp$ret$3;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = tmp1_decode.get_descriptor_wjt6a0_k$();
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'net.mamoe.yamlkt.YamlNullableDynamicSerializer.decode.<anonymous>' call
          var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
          var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
          var tmp;
          switch (tmp0) {
            case 1:
            case 6:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().get_mapSerializer_5u8n4r_k$().deserialize_2t41fm_k$(composite);
              break;
            case 2:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().get_listSerializer_bw1ctj_k$().deserialize_2t41fm_k$(composite);
              break;
            case 7:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().get_listSerializer_bw1ctj_k$().deserialize_2t41fm_k$(composite);
              break;
            case 3:
              tmp$ret$0 = adjustDynamicString(ensureNotNull(composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_strBuff_tvhfwl_k$()), composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_quoted_iq4nld_k$());
              break $l$block_0;
            case 4:
              // Inline function 'net.mamoe.yamlkt.YamlDynamicSerializer.deserialize.<anonymous>' call
              var tmp2__anonymous__z9zvc9 = composite;
              var tmp$ret$2;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              var tmp$ret$1;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              var tmp0_contextualDecodingException = tmp2__anonymous__z9zvc9.get_parentYamlDecoder_xu5cdm_k$();
              var tmp1_contextualDecodingException = tmp2__anonymous__z9zvc9.get_name_woqyms_k$() + ': ' + 'Unexpected null';
              tmp$ret$1 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
              tmp$ret$2 = tmp$ret$1;
              throw tmp$ret$2;

              tmp$ret$0 = null;
              break $l$block_0;
            default:
              var tmp0_error = 'bad decoder returned: ' + composite;
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
          }
          tmp$ret$0 = tmp;
        }
        tmp$ret$3 = tmp$ret$0;
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
    tmp$ret$4 = tmp$ret$3;
    return ensureNotNull(tmp$ret$4);
  };
  YamlDynamicSerializer.prototype.serialize_tzed1k_k$ = function (encoder, value) {
    return serializeImpl(this, encoder, value);
  };
  YamlDynamicSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_tzed1k_k$(encoder, isObject(value) ? value : THROW_CCE());
  };
  var YamlDynamicSerializer_instance;
  function YamlDynamicSerializer_getInstance() {
    if (YamlDynamicSerializer_instance == null)
      new YamlDynamicSerializer();
    return YamlDynamicSerializer_instance;
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.invoke_wdv9pf_k$ = function (map) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapKeys' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapKeysTo' call
    var tmp1_mapKeysTo = LinkedHashMap_init_$Create$(mapCapacity(map.get_size_woubt6_k$()));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = map.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.Companion.invoke.<anonymous>' call
      tmp$ret$0 = toYamlElement(element.get_key_18j28a_k$());
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'kotlin.collections.mapKeysTo.<anonymous>' call
      tmp$ret$1 = element.get_value_j01efc_k$();
      tmp1_mapKeysTo.put_3mhbri_k$(tmp, tmp$ret$1);
    }
    tmp$ret$2 = tmp1_mapKeysTo;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return new YamlMap(tmp$ret$4);
  };
  Companion.prototype.invoke_a3d5yg_k$ = function (map) {
    var tmp$ret$3;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = LinkedHashMap_init_$Create$(map.get_size_woubt6_k$());
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.Companion.invoke.<anonymous>' call
    // Inline function 'kotlin.collections.forEach' call
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'net.mamoe.yamlkt.Companion.invoke.<anonymous>.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = element.get_key_18j28a_k$();
      var key = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = element.get_value_j01efc_k$();
      var value = tmp$ret$2;
      tmp0_apply.put_3mhbri_k$(Companion_getInstance_7().invoke_u4jbhk_k$(key), toYamlElement(value));
    }
    tmp$ret$3 = tmp0_apply;
    return new YamlMap(tmp$ret$3);
  };
  Companion.prototype.invoke_ha3qha_k$ = function (map) {
    var tmp$ret$4;
    // Inline function 'kotlin.collections.mapValues' call
    var tmp$ret$3;
    // Inline function 'kotlin.collections.mapValuesTo' call
    var tmp1_mapValuesTo = LinkedHashMap_init_$Create$(mapCapacity(map.get_size_woubt6_k$()));
    var tmp$ret$2;
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_associateByTo = map.get_entries_p20ztl_k$();
    var tmp0_iterator = tmp0_associateByTo.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      tmp$ret$0 = element.get_key_18j28a_k$();
      var tmp = tmp$ret$0;
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.Companion.invoke.<anonymous>' call
      tmp$ret$1 = toYamlElement(element.get_value_j01efc_k$());
      tmp1_mapValuesTo.put_3mhbri_k$(tmp, tmp$ret$1);
    }
    tmp$ret$2 = tmp1_mapValuesTo;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return new YamlMap(tmp$ret$4);
  };
  Companion.prototype.serializer_9w0wvi_k$ = function () {
    return YamlMapSerializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_3() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function YamlMap(content) {
    Companion_getInstance_3();
    YamlElement.call(this);
    this.content_1 = content;
  }
  YamlMap.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  YamlMap.prototype.get_entries_p20ztl_k$ = function () {
    return this.content_1.get_entries_p20ztl_k$();
  };
  YamlMap.prototype.get_keys_wop4xp_k$ = function () {
    return this.content_1.get_keys_wop4xp_k$();
  };
  YamlMap.prototype.get_size_woubt6_k$ = function () {
    return this.content_1.get_size_woubt6_k$();
  };
  YamlMap.prototype.get_values_ksazhn_k$ = function () {
    return this.content_1.get_values_ksazhn_k$();
  };
  YamlMap.prototype.containsKey_9ej6me_k$ = function (key) {
    return this.content_1.containsKey_wgk31w_k$(key);
  };
  YamlMap.prototype.containsKey_wgk31w_k$ = function (key) {
    if (!(key instanceof YamlElement))
      return false;
    return this.containsKey_9ej6me_k$(key instanceof YamlElement ? key : THROW_CCE());
  };
  YamlMap.prototype.containsValue_1ux84_k$ = function (value) {
    return this.content_1.containsValue_5viga1_k$(value);
  };
  YamlMap.prototype.containsValue_5viga1_k$ = function (value) {
    if (!(value instanceof YamlElement))
      return false;
    return this.containsValue_1ux84_k$(value instanceof YamlElement ? value : THROW_CCE());
  };
  YamlMap.prototype.get_tx61kg_k$ = function (key) {
    return this.content_1.get_1mhr4y_k$(key);
  };
  YamlMap.prototype.get_1mhr4y_k$ = function (key) {
    if (!(key instanceof YamlElement))
      return null;
    return this.get_tx61kg_k$(key instanceof YamlElement ? key : THROW_CCE());
  };
  YamlMap.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  YamlMap.prototype.toString = function () {
    return joinToYamlString(this.content_1);
  };
  YamlMap.prototype.get_eccq09_k$ = function (key) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.iterator' call
    tmp$ret$0 = this.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    var tmp0_iterator = tmp$ret$0;
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
      var tmp$ret$1;
      // Inline function 'kotlin.collections.component1' call
      tmp$ret$1 = tmp1_loop_parameter.get_key_18j28a_k$();
      var k = tmp$ret$1;
      var tmp$ret$2;
      // Inline function 'kotlin.collections.component2' call
      tmp$ret$2 = tmp1_loop_parameter.get_value_j01efc_k$();
      var value = tmp$ret$2;
      if (equals(k.get_content_h02jrk_k$(), key))
        return value;
    }
    return null;
  };
  YamlMap.prototype.getOrFail_n49pew_k$ = function (key) {
    var tmp0_elvis_lhs = this.get_eccq09_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$(toString_0(key));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  YamlMap.prototype.getInt_nn1cu2_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.asLiteral' call
    var tmp1_asLiteral = this.getOrFail_n49pew_k$(key);
    var tmp0_elvis_lhs = tmp1_asLiteral instanceof YamlLiteral ? tmp1_asLiteral : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.asLiteral.<anonymous>' call
      tmp$ret$0 = '' + tmp1_asLiteral + ' is not a YamlLiteral';
      var tmp0_error = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    return toInt(tmp$ret$1.content_1);
  };
  YamlMap.prototype.getIntOrNull_mvq9gc_k$ = function (key) {
    var tmp0_safe_receiver = this.get_eccq09_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : asPrimitiveOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    return tmp2_safe_receiver == null ? null : toIntOrNull(tmp2_safe_receiver);
  };
  YamlMap.prototype.getDouble_c88mdk_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.asLiteral' call
    var tmp1_asLiteral = this.getOrFail_n49pew_k$(key);
    var tmp0_elvis_lhs = tmp1_asLiteral instanceof YamlLiteral ? tmp1_asLiteral : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.asLiteral.<anonymous>' call
      tmp$ret$0 = '' + tmp1_asLiteral + ' is not a YamlLiteral';
      var tmp0_error = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    return toDouble(tmp$ret$1.content_1);
  };
  YamlMap.prototype.getDoubleOrNull_kw08ge_k$ = function (key) {
    var tmp0_safe_receiver = this.get_eccq09_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : asPrimitiveOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    return tmp2_safe_receiver == null ? null : toDoubleOrNull(tmp2_safe_receiver);
  };
  YamlMap.prototype.getFloat_l1xc9l_k$ = function (key) {
    var tmp$ret$4;
    // Inline function 'kotlin.text.toFloat' call
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.asLiteral' call
    var tmp1_asLiteral = this.getOrFail_n49pew_k$(key);
    var tmp0_elvis_lhs = tmp1_asLiteral instanceof YamlLiteral ? tmp1_asLiteral : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.asLiteral.<anonymous>' call
      tmp$ret$0 = '' + tmp1_asLiteral + ' is not a YamlLiteral';
      var tmp0_error = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    var tmp3_toFloat = tmp$ret$1.content_1;
    var tmp$ret$3;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp2_unsafeCast = toDouble(tmp3_toFloat);
    var tmp$ret$2;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = tmp2_unsafeCast;
    tmp$ret$3 = tmp$ret$2;
    tmp$ret$4 = tmp$ret$3;
    return tmp$ret$4;
  };
  YamlMap.prototype.getFloatOrNull_kn9du9_k$ = function (key) {
    var tmp0_safe_receiver = this.get_eccq09_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : asPrimitiveOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      // Inline function 'kotlin.text.toFloatOrNull' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp0_unsafeCast = toDoubleOrNull(tmp2_safe_receiver);
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_unsafeCast;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp = tmp$ret$2;
    }
    return tmp;
  };
  YamlMap.prototype.getByte_r49mrj_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.asLiteral' call
    var tmp1_asLiteral = this.getOrFail_n49pew_k$(key);
    var tmp0_elvis_lhs = tmp1_asLiteral instanceof YamlLiteral ? tmp1_asLiteral : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.asLiteral.<anonymous>' call
      tmp$ret$0 = '' + tmp1_asLiteral + ' is not a YamlLiteral';
      var tmp0_error = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    return toByte(tmp$ret$1.content_1);
  };
  YamlMap.prototype.getByteOrNull_kqu21j_k$ = function (key) {
    var tmp0_safe_receiver = this.get_eccq09_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : asPrimitiveOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    return tmp2_safe_receiver == null ? null : toByteOrNull(tmp2_safe_receiver);
  };
  YamlMap.prototype.getShort_jh6cav_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.asLiteral' call
    var tmp1_asLiteral = this.getOrFail_n49pew_k$(key);
    var tmp0_elvis_lhs = tmp1_asLiteral instanceof YamlLiteral ? tmp1_asLiteral : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.asLiteral.<anonymous>' call
      tmp$ret$0 = '' + tmp1_asLiteral + ' is not a YamlLiteral';
      var tmp0_error = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    return toShort(tmp$ret$1.content_1);
  };
  YamlMap.prototype.getShortOrNull_o0vv5d_k$ = function (key) {
    var tmp0_safe_receiver = this.get_eccq09_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : asPrimitiveOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    return tmp2_safe_receiver == null ? null : toShortOrNull(tmp2_safe_receiver);
  };
  YamlMap.prototype.getString_ktan3s_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.asLiteral' call
    var tmp1_asLiteral = this.getOrFail_n49pew_k$(key);
    var tmp0_elvis_lhs = tmp1_asLiteral instanceof YamlLiteral ? tmp1_asLiteral : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.asLiteral.<anonymous>' call
      tmp$ret$0 = '' + tmp1_asLiteral + ' is not a YamlLiteral';
      var tmp0_error = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    return tmp$ret$1.content_1;
  };
  YamlMap.prototype.getStringOrNull_7hjqeq_k$ = function (key) {
    var tmp0_safe_receiver = this.get_eccq09_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : asPrimitiveOrNull(tmp0_safe_receiver);
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
  };
  YamlMap.prototype.getLong_hy5yb7_k$ = function (key) {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.asLiteral' call
    var tmp1_asLiteral = this.getOrFail_n49pew_k$(key);
    var tmp0_elvis_lhs = tmp1_asLiteral instanceof YamlLiteral ? tmp1_asLiteral : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.asLiteral.<anonymous>' call
      tmp$ret$0 = '' + tmp1_asLiteral + ' is not a YamlLiteral';
      var tmp0_error = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    tmp$ret$1 = tmp;
    return toLong(tmp$ret$1.content_1);
  };
  YamlMap.prototype.getLongOrNull_oyslsz_k$ = function (key) {
    var tmp0_safe_receiver = this.get_eccq09_k$(key);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : asPrimitiveOrNull(tmp0_safe_receiver);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.get_content_h02jrk_k$();
    return tmp2_safe_receiver == null ? null : toLongOrNull(tmp2_safe_receiver);
  };
  YamlMap.prototype.getList_nfq1nv_k$ = function (key) {
    var tmp = this.getOrFail_n49pew_k$(key);
    return isInterface(tmp, List) ? tmp : THROW_CCE();
  };
  YamlMap.prototype.getMap_wnhmmx_k$ = function (key) {
    var tmp = this.getOrFail_n49pew_k$(key);
    return isInterface(tmp, Map) ? tmp : THROW_CCE();
  };
  YamlMap.prototype.component1_7eebsc_k$ = function () {
    return this.content_1;
  };
  YamlMap.prototype.copy_rxf5ym_k$ = function (content) {
    return new YamlMap(content);
  };
  YamlMap.prototype.copy$default_5hf0kw_k$ = function (content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      content = this.content_1;
    return this.copy_rxf5ym_k$(content);
  };
  YamlMap.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  YamlMap.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlMap))
      return false;
    var tmp0_other_with_cast = other instanceof YamlMap ? other : THROW_CCE();
    if (!equals(this.content_1, tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  function YamlList$Companion$invoke$lambda(it) {
    return toYamlElement(it);
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.invoke_q6yw5p_k$ = function (values) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(values, 10));
    var tmp0_iterator = values.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.Companion.invoke.<anonymous>' call
      tmp$ret$0 = toYamlElement(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new YamlList(tmp$ret$2);
  };
  Companion_0.prototype.invoke_ugtagt_k$ = function (values) {
    var tmp$ret$2;
    // Inline function 'kotlin.collections.map' call
    var tmp$ret$1;
    // Inline function 'kotlin.collections.mapTo' call
    var tmp0_mapTo = ArrayList_init_$Create$(values.length);
    var indexedObject = values;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var item = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.Companion.invoke.<anonymous>' call
      tmp$ret$0 = toYamlElement(item);
      tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
    }
    tmp$ret$1 = tmp0_mapTo;
    tmp$ret$2 = tmp$ret$1;
    return new YamlList(tmp$ret$2);
  };
  Companion_0.prototype.invoke_q33e3x_k$ = function (values) {
    return new YamlList(toList(map(values, YamlList$Companion$invoke$lambda)));
  };
  Companion_0.prototype.serializer_9w0wvi_k$ = function () {
    return YamlListSerializer_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_4() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function YamlList(content) {
    Companion_getInstance_4();
    YamlElement.call(this);
    this.content_1 = content;
  }
  YamlList.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  YamlList.prototype.get_size_woubt6_k$ = function () {
    return this.content_1.get_size_woubt6_k$();
  };
  YamlList.prototype.contains_emb6ih_k$ = function (element) {
    return this.content_1.contains_2ehdt1_k$(element);
  };
  YamlList.prototype.contains_2ehdt1_k$ = function (element) {
    if (!(element instanceof YamlElement))
      return false;
    return this.contains_emb6ih_k$(element instanceof YamlElement ? element : THROW_CCE());
  };
  YamlList.prototype.containsAll_2ey7r6_k$ = function (elements) {
    return this.content_1.containsAll_jr3fla_k$(elements);
  };
  YamlList.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.containsAll_2ey7r6_k$(elements);
  };
  YamlList.prototype.get_fkrdnv_k$ = function (index) {
    return this.content_1.get_fkrdnv_k$(index);
  };
  YamlList.prototype.indexOf_1zql3x_k$ = function (element) {
    return this.content_1.indexOf_dcv8dt_k$(element);
  };
  YamlList.prototype.indexOf_dcv8dt_k$ = function (element) {
    if (!(element instanceof YamlElement))
      return -1;
    return this.indexOf_1zql3x_k$(element instanceof YamlElement ? element : THROW_CCE());
  };
  YamlList.prototype.isEmpty_y1axqb_k$ = function () {
    return this.content_1.isEmpty_y1axqb_k$();
  };
  YamlList.prototype.iterator_jk1svi_k$ = function () {
    return this.content_1.iterator_jk1svi_k$();
  };
  YamlList.prototype.lastIndexOf_2m8b2r_k$ = function (element) {
    return this.content_1.lastIndexOf_rzx8t5_k$(element);
  };
  YamlList.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    if (!(element instanceof YamlElement))
      return -1;
    return this.lastIndexOf_2m8b2r_k$(element instanceof YamlElement ? element : THROW_CCE());
  };
  YamlList.prototype.listIterator_xjshxw_k$ = function () {
    return this.content_1.listIterator_xjshxw_k$();
  };
  YamlList.prototype.listIterator_5hanv9_k$ = function (index) {
    return this.content_1.listIterator_5hanv9_k$(index);
  };
  YamlList.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    return this.content_1.subList_d153ha_k$(fromIndex, toIndex);
  };
  YamlList.prototype.toString = function () {
    return joinToYamlString_0(this);
  };
  YamlList.prototype.component1_7eebsc_k$ = function () {
    return this.content_1;
  };
  YamlList.prototype.copy_t7cl6z_k$ = function (content) {
    return new YamlList(content);
  };
  YamlList.prototype.copy$default_4l7d0h_k$ = function (content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      content = this.content_1;
    return this.copy_t7cl6z_k$(content);
  };
  YamlList.prototype.hashCode = function () {
    return hashCode(this.content_1);
  };
  YamlList.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlList))
      return false;
    var tmp0_other_with_cast = other instanceof YamlList ? other : THROW_CCE();
    if (!equals(this.content_1, tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  function yamlListOf(values) {
    return Companion_getInstance_4().invoke_ugtagt_k$(values);
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.serializer_9w0wvi_k$ = function () {
    return YamlLiteralSerializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_5() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function YamlLiteral(content) {
    Companion_getInstance_5();
    YamlPrimitive.call(this);
    this.content_1 = content;
  }
  YamlLiteral.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  YamlLiteral.prototype.toByte_edm0nx_k$ = function () {
    return toByte(this.content_1);
  };
  YamlLiteral.prototype.toShort_ja8oqn_k$ = function () {
    return toShort(this.content_1);
  };
  YamlLiteral.prototype.toInt_1tsl84_k$ = function () {
    return toInt(this.content_1);
  };
  YamlLiteral.prototype.toLong_edfucp_k$ = function () {
    return toLong(this.content_1);
  };
  YamlLiteral.prototype.toFloat_jhbgwv_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloat' call
    var tmp1_toFloat = this.content_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDouble(tmp1_toFloat);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  YamlLiteral.prototype.toDouble_ygsx0s_k$ = function () {
    return toDouble(this.content_1);
  };
  YamlLiteral.prototype.toBoolean_qfphar_k$ = function () {
    var tmp0_subject = this.content_1;
    switch (tmp0_subject) {
      case 'true':
      case 'TRUE':
        return true;
      default:
        return false;
    }
  };
  YamlLiteral.prototype.toByteOrNull_skiho3_k$ = function () {
    return toByteOrNull(this.content_1);
  };
  YamlLiteral.prototype.toShortOrNull_b71sl_k$ = function () {
    return toShortOrNull(this.content_1);
  };
  YamlLiteral.prototype.toIntOrNull_cejuxu_k$ = function () {
    return toIntOrNull(this.content_1);
  };
  YamlLiteral.prototype.toLongOrNull_n8jqf5_k$ = function () {
    return toLongOrNull(this.content_1);
  };
  YamlLiteral.prototype.toFloatOrNull_p3kw0b_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.text.toFloatOrNull' call
    var tmp1_toFloatOrNull = this.content_1;
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = toDoubleOrNull(tmp1_toFloatOrNull);
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_unsafeCast;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  YamlLiteral.prototype.toDoubleOrNull_18qnva_k$ = function () {
    return toDoubleOrNull(this.content_1);
  };
  YamlLiteral.prototype.component1_7eebsc_k$ = function () {
    return this.content_1;
  };
  YamlLiteral.prototype.copy_3t26ic_k$ = function (content) {
    return new YamlLiteral(content);
  };
  YamlLiteral.prototype.copy$default_q3pzg4_k$ = function (content, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      content = this.content_1;
    return this.copy_3t26ic_k$(content);
  };
  YamlLiteral.prototype.hashCode = function () {
    return getStringHashCode(this.content_1);
  };
  YamlLiteral.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof YamlLiteral))
      return false;
    var tmp0_other_with_cast = other instanceof YamlLiteral ? other : THROW_CCE();
    if (!(this.content_1 === tmp0_other_with_cast.content_1))
      return false;
    return true;
  };
  function _get_$cachedSerializer$delegate__hyykxm($this) {
    return $this.$cachedSerializer$delegate_1;
  }
  function YamlNull$$cachedSerializer$delegate$_anonymous__23580() {
    return YamlNullSerializer_getInstance();
  }
  function YamlNull() {
    YamlNull_instance = this;
    YamlPrimitive.call(this);
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.$cachedSerializer$delegate_1 = lazy(tmp_0, YamlNull$$cachedSerializer$delegate$_anonymous__23580);
  }
  YamlNull.prototype.get_content_h02jrk_k$ = function () {
    return null;
  };
  YamlNull.prototype.equals = function (other) {
    return other === this;
  };
  YamlNull.prototype.hashCode = function () {
    return 1;
  };
  YamlNull.prototype.serializer_9w0wvi_k$ = function () {
    return this.$cachedSerializer$delegate_1.get_value_j01efc_k$();
  };
  YamlNull.prototype.serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_9w0wvi_k$();
  };
  var YamlNull_instance;
  function YamlNull_getInstance() {
    if (YamlNull_instance == null)
      new YamlNull();
    return YamlNull_instance;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.serializer_9w0wvi_k$ = function () {
    return YamlElementSerializer_getInstance();
  };
  var Companion_instance_2;
  function Companion_getInstance_6() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function YamlElement() {
    Companion_getInstance_6();
  }
  function joinToYamlString(_this__u8e3s4) {
    var tmp = _this__u8e3s4.get_entries_p20ztl_k$();
    return joinToString$default(tmp, ',', '{', '}', 0, null, joinToYamlString$lambda, 24, null);
  }
  function asLiteral(_this__u8e3s4, lazyMessage) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof YamlLiteral ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_error = lazyMessage(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.invoke_u4jbhk_k$ = function (value) {
    return value == null ? YamlNull_getInstance() : new YamlLiteral(value);
  };
  Companion_3.prototype.serializer_9w0wvi_k$ = function () {
    return YamlPrimitiveSerializer_getInstance();
  };
  var Companion_instance_3;
  function Companion_getInstance_7() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function YamlPrimitive() {
    Companion_getInstance_7();
    YamlElement.call(this);
  }
  YamlPrimitive.prototype.toString = function () {
    var tmp0_elvis_lhs = this.get_content_h02jrk_k$();
    return tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs;
  };
  function asPrimitiveOrNull(_this__u8e3s4) {
    // Inline function 'kotlin.contracts.contract' call
    return _this__u8e3s4 instanceof YamlPrimitive ? _this__u8e3s4 : null;
  }
  function toYamlElement(_this__u8e3s4) {
    var tmp0_elvis_lhs = toYamlElementOrNull(_this__u8e3s4);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('unsupported class: ' + getKClassFromExpression(ensureNotNull(_this__u8e3s4)).get_simpleName_r6f8py_k$());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function joinToYamlString_0(_this__u8e3s4) {
    return joinToString$default(_this__u8e3s4, ',', '[', ']', 0, null, null, 56, null);
  }
  function toYamlElementOrNull(_this__u8e3s4) {
    return asYamlElementOrNullImpl(_this__u8e3s4);
  }
  function asYamlElementOrNullImpl(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    if (tmp0_subject == null) {
      tmp = YamlNull_getInstance();
    } else {
      if (tmp0_subject instanceof YamlElement) {
        tmp = _this__u8e3s4;
      } else {
        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'string' : false) {
          tmp = new YamlLiteral(_this__u8e3s4);
        } else {
          if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
            tmp = new YamlLiteral(toString(_this__u8e3s4));
          } else {
            if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
              tmp = new YamlLiteral(toString(_this__u8e3s4));
            } else {
              if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                tmp = new YamlLiteral(toString(_this__u8e3s4));
              } else {
                if (tmp0_subject instanceof Long) {
                  tmp = new YamlLiteral(toString(_this__u8e3s4));
                } else {
                  if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                    tmp = new YamlLiteral(toString(_this__u8e3s4));
                  } else {
                    if (!(tmp0_subject == null) ? typeof tmp0_subject === 'number' : false) {
                      tmp = new YamlLiteral(toString(_this__u8e3s4));
                    } else {
                      if (tmp0_subject instanceof Char) {
                        tmp = new YamlLiteral(toString(_this__u8e3s4));
                      } else {
                        if (!(tmp0_subject == null) ? typeof tmp0_subject === 'boolean' : false) {
                          tmp = new YamlLiteral(toString(_this__u8e3s4));
                        } else {
                          if (!(tmp0_subject == null) ? isArray(tmp0_subject) : false) {
                            var tmp$ret$2;
                            // Inline function 'kotlin.collections.map' call
                            var tmp1_map = _this__u8e3s4;
                            var tmp$ret$1;
                            // Inline function 'kotlin.collections.mapTo' call
                            var tmp0_mapTo = ArrayList_init_$Create$(tmp1_map.length);
                            var indexedObject = tmp1_map;
                            var inductionVariable = 0;
                            var last = indexedObject.length;
                            while (inductionVariable < last) {
                              var item = indexedObject[inductionVariable];
                              inductionVariable = inductionVariable + 1 | 0;
                              var tmp$ret$0;
                              // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                              tmp$ret$0 = toYamlElement(item);
                              tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
                            }
                            tmp$ret$1 = tmp0_mapTo;
                            tmp$ret$2 = tmp$ret$1;
                            tmp = new YamlList(tmp$ret$2);
                          } else {
                            if (!(tmp0_subject == null) ? isByteArray(tmp0_subject) : false) {
                              var tmp$ret$5;
                              // Inline function 'kotlin.collections.map' call
                              var tmp3_map = _this__u8e3s4;
                              var tmp$ret$4;
                              // Inline function 'kotlin.collections.mapTo' call
                              var tmp2_mapTo = ArrayList_init_$Create$(tmp3_map.length);
                              var indexedObject_0 = tmp3_map;
                              var inductionVariable_0 = 0;
                              var last_0 = indexedObject_0.length;
                              while (inductionVariable_0 < last_0) {
                                var item_0 = indexedObject_0[inductionVariable_0];
                                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                                var tmp$ret$3;
                                // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                tmp$ret$3 = toYamlElement(item_0);
                                tmp2_mapTo.add_1j60pz_k$(tmp$ret$3);
                              }
                              tmp$ret$4 = tmp2_mapTo;
                              tmp$ret$5 = tmp$ret$4;
                              tmp = new YamlList(tmp$ret$5);
                            } else {
                              if (!(tmp0_subject == null) ? isIntArray(tmp0_subject) : false) {
                                var tmp$ret$8;
                                // Inline function 'kotlin.collections.map' call
                                var tmp5_map = _this__u8e3s4;
                                var tmp$ret$7;
                                // Inline function 'kotlin.collections.mapTo' call
                                var tmp4_mapTo = ArrayList_init_$Create$(tmp5_map.length);
                                var indexedObject_1 = tmp5_map;
                                var inductionVariable_1 = 0;
                                var last_1 = indexedObject_1.length;
                                while (inductionVariable_1 < last_1) {
                                  var item_1 = indexedObject_1[inductionVariable_1];
                                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                                  var tmp$ret$6;
                                  // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                  tmp$ret$6 = toYamlElement(item_1);
                                  tmp4_mapTo.add_1j60pz_k$(tmp$ret$6);
                                }
                                tmp$ret$7 = tmp4_mapTo;
                                tmp$ret$8 = tmp$ret$7;
                                tmp = new YamlList(tmp$ret$8);
                              } else {
                                if (!(tmp0_subject == null) ? isShortArray(tmp0_subject) : false) {
                                  var tmp$ret$11;
                                  // Inline function 'kotlin.collections.map' call
                                  var tmp7_map = _this__u8e3s4;
                                  var tmp$ret$10;
                                  // Inline function 'kotlin.collections.mapTo' call
                                  var tmp6_mapTo = ArrayList_init_$Create$(tmp7_map.length);
                                  var indexedObject_2 = tmp7_map;
                                  var inductionVariable_2 = 0;
                                  var last_2 = indexedObject_2.length;
                                  while (inductionVariable_2 < last_2) {
                                    var item_2 = indexedObject_2[inductionVariable_2];
                                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                                    var tmp$ret$9;
                                    // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                    tmp$ret$9 = toYamlElement(item_2);
                                    tmp6_mapTo.add_1j60pz_k$(tmp$ret$9);
                                  }
                                  tmp$ret$10 = tmp6_mapTo;
                                  tmp$ret$11 = tmp$ret$10;
                                  tmp = new YamlList(tmp$ret$11);
                                } else {
                                  if (!(tmp0_subject == null) ? isLongArray(tmp0_subject) : false) {
                                    var tmp$ret$14;
                                    // Inline function 'kotlin.collections.map' call
                                    var tmp9_map = _this__u8e3s4;
                                    var tmp$ret$13;
                                    // Inline function 'kotlin.collections.mapTo' call
                                    var tmp8_mapTo = ArrayList_init_$Create$(tmp9_map.length);
                                    var indexedObject_3 = tmp9_map;
                                    var inductionVariable_3 = 0;
                                    var last_3 = indexedObject_3.length;
                                    while (inductionVariable_3 < last_3) {
                                      var item_3 = indexedObject_3[inductionVariable_3];
                                      inductionVariable_3 = inductionVariable_3 + 1 | 0;
                                      var tmp$ret$12;
                                      // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                      tmp$ret$12 = toYamlElement(item_3);
                                      tmp8_mapTo.add_1j60pz_k$(tmp$ret$12);
                                    }
                                    tmp$ret$13 = tmp8_mapTo;
                                    tmp$ret$14 = tmp$ret$13;
                                    tmp = new YamlList(tmp$ret$14);
                                  } else {
                                    if (!(tmp0_subject == null) ? isFloatArray(tmp0_subject) : false) {
                                      var tmp$ret$17;
                                      // Inline function 'kotlin.collections.map' call
                                      var tmp11_map = _this__u8e3s4;
                                      var tmp$ret$16;
                                      // Inline function 'kotlin.collections.mapTo' call
                                      var tmp10_mapTo = ArrayList_init_$Create$(tmp11_map.length);
                                      var indexedObject_4 = tmp11_map;
                                      var inductionVariable_4 = 0;
                                      var last_4 = indexedObject_4.length;
                                      while (inductionVariable_4 < last_4) {
                                        var item_4 = indexedObject_4[inductionVariable_4];
                                        inductionVariable_4 = inductionVariable_4 + 1 | 0;
                                        var tmp$ret$15;
                                        // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                        tmp$ret$15 = toYamlElement(item_4);
                                        tmp10_mapTo.add_1j60pz_k$(tmp$ret$15);
                                      }
                                      tmp$ret$16 = tmp10_mapTo;
                                      tmp$ret$17 = tmp$ret$16;
                                      tmp = new YamlList(tmp$ret$17);
                                    } else {
                                      if (!(tmp0_subject == null) ? isDoubleArray(tmp0_subject) : false) {
                                        var tmp$ret$20;
                                        // Inline function 'kotlin.collections.map' call
                                        var tmp13_map = _this__u8e3s4;
                                        var tmp$ret$19;
                                        // Inline function 'kotlin.collections.mapTo' call
                                        var tmp12_mapTo = ArrayList_init_$Create$(tmp13_map.length);
                                        var indexedObject_5 = tmp13_map;
                                        var inductionVariable_5 = 0;
                                        var last_5 = indexedObject_5.length;
                                        while (inductionVariable_5 < last_5) {
                                          var item_5 = indexedObject_5[inductionVariable_5];
                                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                                          var tmp$ret$18;
                                          // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                          tmp$ret$18 = toYamlElement(item_5);
                                          tmp12_mapTo.add_1j60pz_k$(tmp$ret$18);
                                        }
                                        tmp$ret$19 = tmp12_mapTo;
                                        tmp$ret$20 = tmp$ret$19;
                                        tmp = new YamlList(tmp$ret$20);
                                      } else {
                                        if (!(tmp0_subject == null) ? isCharArray(tmp0_subject) : false) {
                                          var tmp$ret$23;
                                          // Inline function 'kotlin.collections.map' call
                                          var tmp15_map = _this__u8e3s4;
                                          var tmp$ret$22;
                                          // Inline function 'kotlin.collections.mapTo' call
                                          var tmp14_mapTo = ArrayList_init_$Create$(tmp15_map.length);
                                          var indexedObject_6 = tmp15_map;
                                          var inductionVariable_6 = 0;
                                          var last_6 = indexedObject_6.length;
                                          while (inductionVariable_6 < last_6) {
                                            var item_6 = indexedObject_6[inductionVariable_6];
                                            inductionVariable_6 = inductionVariable_6 + 1 | 0;
                                            var tmp$ret$21;
                                            // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                            tmp$ret$21 = toYamlElement(new Char(item_6));
                                            tmp14_mapTo.add_1j60pz_k$(tmp$ret$21);
                                          }
                                          tmp$ret$22 = tmp14_mapTo;
                                          tmp$ret$23 = tmp$ret$22;
                                          tmp = new YamlList(tmp$ret$23);
                                        } else {
                                          if (!(tmp0_subject == null) ? isBooleanArray(tmp0_subject) : false) {
                                            var tmp$ret$26;
                                            // Inline function 'kotlin.collections.map' call
                                            var tmp17_map = _this__u8e3s4;
                                            var tmp$ret$25;
                                            // Inline function 'kotlin.collections.mapTo' call
                                            var tmp16_mapTo = ArrayList_init_$Create$(tmp17_map.length);
                                            var indexedObject_7 = tmp17_map;
                                            var inductionVariable_7 = 0;
                                            var last_7 = indexedObject_7.length;
                                            while (inductionVariable_7 < last_7) {
                                              var item_7 = indexedObject_7[inductionVariable_7];
                                              inductionVariable_7 = inductionVariable_7 + 1 | 0;
                                              var tmp$ret$24;
                                              // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                              tmp$ret$24 = toYamlElement(item_7);
                                              tmp16_mapTo.add_1j60pz_k$(tmp$ret$24);
                                            }
                                            tmp$ret$25 = tmp16_mapTo;
                                            tmp$ret$26 = tmp$ret$25;
                                            tmp = new YamlList(tmp$ret$26);
                                          } else {
                                            if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Map) : false) {
                                              var map = LinkedHashMap_init_$Create$(_this__u8e3s4.get_size_woubt6_k$());
                                              var tmp$ret$27;
                                              // Inline function 'kotlin.collections.iterator' call
                                              var tmp18_iterator = _this__u8e3s4;
                                              tmp$ret$27 = tmp18_iterator.get_entries_p20ztl_k$().iterator_jk1svi_k$();
                                              var tmp1_iterator = tmp$ret$27;
                                              while (tmp1_iterator.hasNext_bitz1p_k$()) {
                                                var tmp2_loop_parameter = tmp1_iterator.next_20eer_k$();
                                                var tmp$ret$28;
                                                // Inline function 'kotlin.collections.component1' call
                                                tmp$ret$28 = tmp2_loop_parameter.get_key_18j28a_k$();
                                                var key = tmp$ret$28;
                                                var tmp$ret$29;
                                                // Inline function 'kotlin.collections.component2' call
                                                tmp$ret$29 = tmp2_loop_parameter.get_value_j01efc_k$();
                                                var value = tmp$ret$29;
                                                // Inline function 'kotlin.collections.set' call
                                                var tmp19_set = toYamlElement(key);
                                                var tmp20_set = toYamlElement(value);
                                                map.put_3mhbri_k$(tmp19_set, tmp20_set);
                                              }
                                              tmp = new YamlMap(map);
                                            } else {
                                              if (!(tmp0_subject == null) ? isInterface(tmp0_subject, List) : false) {
                                                var tmp$ret$32;
                                                // Inline function 'kotlin.collections.map' call
                                                var tmp22_map = _this__u8e3s4;
                                                var tmp$ret$31;
                                                // Inline function 'kotlin.collections.mapTo' call
                                                var tmp21_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp22_map, 10));
                                                var tmp0_iterator = tmp22_map.iterator_jk1svi_k$();
                                                while (tmp0_iterator.hasNext_bitz1p_k$()) {
                                                  var item_8 = tmp0_iterator.next_20eer_k$();
                                                  var tmp$ret$30;
                                                  // Inline function 'net.mamoe.yamlkt.asYamlElementOrNullImpl.<anonymous>' call
                                                  tmp$ret$30 = toYamlElement(item_8);
                                                  tmp21_mapTo.add_1j60pz_k$(tmp$ret$30);
                                                }
                                                tmp$ret$31 = tmp21_mapTo;
                                                tmp$ret$32 = tmp$ret$31;
                                                tmp = new YamlList(tmp$ret$32);
                                              } else {
                                                tmp = null;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function joinToYamlString$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var tmp$ret$0;
    // Inline function 'kotlin.collections.component1' call
    tmp$ret$0 = _name_for_destructuring_parameter_0__wldtmu.get_key_18j28a_k$();
    var key = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.collections.component2' call
    tmp$ret$1 = _name_for_destructuring_parameter_0__wldtmu.get_value_j01efc_k$();
    var value = tmp$ret$1;
    return toString_0(key) + ':' + toString_0(value);
  }
  function asLiteral$lambda($this_asLiteral) {
    return function (it) {
      return '' + $this_asLiteral + ' is not a YamlLiteral';
    };
  }
  function YamlNullableDynamicSerializer$decode$lambda($this$null) {
    return Unit_getInstance();
  }
  function YamlNullableDynamicSerializer() {
    YamlNullableDynamicSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlNullableDynamic', tmp_0, [], null, 12, null);
    this.listSerializer_1 = ListSerializer(this);
    this.mapSerializer_1 = MapSerializer(this, this);
  }
  YamlNullableDynamicSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlNullableDynamicSerializer.prototype.get_listSerializer_bw1ctj_k$ = function () {
    return this.listSerializer_1;
  };
  YamlNullableDynamicSerializer.prototype.get_mapSerializer_5u8n4r_k$ = function () {
    return this.mapSerializer_1;
  };
  YamlNullableDynamicSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.YamlNullableDynamicSerializer.decode' call
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'net.mamoe.yamlkt.YamlNullableDynamicSerializer.decode.<anonymous>' call
          var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
          var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
          var tmp;
          switch (tmp0) {
            case 1:
            case 6:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().mapSerializer_1.deserialize_2t41fm_k$(composite);
              break;
            case 2:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().listSerializer_1.deserialize_2t41fm_k$(composite);
              break;
            case 7:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().listSerializer_1.deserialize_2t41fm_k$(composite);
              break;
            case 3:
              tmp$ret$0 = adjustDynamicString(ensureNotNull(composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_strBuff_tvhfwl_k$()), composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_quoted_iq4nld_k$());
              break $l$block_0;
            case 4:
              var tmp$ret$1;
              // Inline function 'net.mamoe.yamlkt.YamlNullableDynamicSerializer.decode.<anonymous>' call
              var tmp1__anonymous__uwfjfc = composite;
              tmp$ret$1 = Unit_getInstance();

              tmp$ret$0 = null;
              break $l$block_0;
            default:
              var tmp0_error = 'bad decoder returned: ' + composite;
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
          }
          tmp$ret$0 = tmp;
        }
        tmp$ret$2 = tmp$ret$0;
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
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  YamlNullableDynamicSerializer.prototype.decode_n7gize_k$ = function (decoder, whenNull) {
    var tmp$ret$1;
    $l$block_1: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'net.mamoe.yamlkt.YamlNullableDynamicSerializer.decode.<anonymous>' call
          var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
          var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
          var tmp;
          switch (tmp0) {
            case 1:
            case 6:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().mapSerializer_1.deserialize_2t41fm_k$(composite);
              break;
            case 2:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().listSerializer_1.deserialize_2t41fm_k$(composite);
              break;
            case 7:
              composite.set_dontWrapNextStructure_o3ncht_k$(true);
              tmp = YamlNullableDynamicSerializer_getInstance().listSerializer_1.deserialize_2t41fm_k$(composite);
              break;
            case 3:
              tmp$ret$0 = adjustDynamicString(ensureNotNull(composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_strBuff_tvhfwl_k$()), composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_quoted_iq4nld_k$());
              break $l$block_0;
            case 4:
              whenNull(composite);
              tmp$ret$0 = null;
              break $l$block_0;
            default:
              var tmp0_error = 'bad decoder returned: ' + composite;
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
          }
          tmp$ret$0 = tmp;
        }
        tmp$ret$1 = tmp$ret$0;
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
    return tmp$ret$1;
  };
  YamlNullableDynamicSerializer.prototype.serialize_30gerf_k$ = function (encoder, value) {
    if (value == null) {
      encoder.encodeNullableSerializableValue_4n8qik_k$(serializer(StringCompanionObject_getInstance()), value);
    } else {
      serializeImpl(this, encoder, value);
    }
  };
  YamlNullableDynamicSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_30gerf_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  var YamlNullableDynamicSerializer_instance;
  function YamlNullableDynamicSerializer_getInstance() {
    if (YamlNullableDynamicSerializer_instance == null)
      new YamlNullableDynamicSerializer();
    return YamlNullableDynamicSerializer_instance;
  }
  function contextualDecodingException(_this__u8e3s4, hint) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
    var tmp0_contextualDecodingException = _this__u8e3s4.get_parentYamlDecoder_xu5cdm_k$();
    var tmp1_contextualDecodingException = _this__u8e3s4.get_name_woqyms_k$() + ': ' + hint;
    tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
    return tmp$ret$0;
  }
  function contextualDecodingException_0(_this__u8e3s4, hint, descriptor, index, throwable) {
    return contextualDecodingException_3(_this__u8e3s4.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + hint, descriptor, index, throwable);
  }
  function contextualDecodingException_1(_this__u8e3s4, hint, descriptor, index, throwable) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
    var tmp0_contextualDecodingException = _this__u8e3s4.get_parentYamlDecoder_xu5cdm_k$();
    tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + hint, descriptor, index, throwable);
    return tmp$ret$0;
  }
  function contextualDecodingException_2(_this__u8e3s4, hint) {
    return contextualDecodingException$default(_this__u8e3s4, hint, null, -1, null, 8, null);
  }
  function skipLine(_this__u8e3s4) {
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.whileNotEOF' call
    // Inline function 'kotlin.contracts.contract' call
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$0) {
        break $l$loop;
      }
      // Inline function 'net.mamoe.yamlkt.internal.skipLine.<anonymous>' call
      var tmp = _this__u8e3s4.get_source_jl0x7o_k$();
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.get_cur_18j7s9_k$();
      tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
      var tmp0__anonymous__q1qw7t = charSequenceGet(tmp, tmp1);
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
      tmp$ret$1 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(13)));
      if (tmp$ret$1)
        return Unit_getInstance();
    }
    tmp$ret$2 = null;
  }
  function contextualDecodingException_3(_this__u8e3s4, hint, descriptor, index, throwable) {
    var tmp;
    if (descriptor == null) {
      tmp = hint;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException.<anonymous>' call
      tmp$ret$0 = descriptor.getElementName_ykpypc_k$(index);
      tmp$ret$1 = tmp$ret$0;
      tmp = hint + (" for '" + tmp$ret$1 + "' ") + ("in '" + descriptor.get_serialName_u2rqhk_k$() + "'");
    }
    var message = tmp;
    var v = get_lineNumberAndCurrentLine(_this__u8e3s4);
    var lineNumber = v.get_first_irdx8n_k$();
    var columnNumber = v.get_second_jf7fjx_k$().length + 1 | 0;
    var before = limitLast(v.get_second_jf7fjx_k$(), 32);
    var last = limitFirst(readLine(_this__u8e3s4), 32);
    var tmp_0;
    if (!(get_lineNumberAndCurrentLine(_this__u8e3s4).get_first_irdx8n_k$() === lineNumber)) {
      tmp_0 = before;
    } else {
      tmp_0 = before + last;
    }
    var text = tmp_0;
    var position = 'at line ' + lineNumber + ', column ' + columnNumber;
    var tmp$ret$4;
    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
    var tmp1_contextualDecodingException = coerceAtLeast(before.length - 1 | 0, 0);
    var tmp$ret$3;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException.<anonymous>' call
    tmp0_apply.append_ssq29y_k$(message);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    tmp0_apply.append_ssq29y_k$(text);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp1_contextualDecodingException)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException.<anonymous>.<anonymous>' call
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      }
       while (inductionVariable < tmp1_contextualDecodingException);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(94));
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    tmp0_apply.append_ssq29y_k$(position);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    tmp$ret$2 = tmp0_apply;
    tmp$ret$3 = tmp$ret$2.toString();
    tmp$ret$4 = new YamlDecodingException(tmp$ret$3, throwable);
    return tmp$ret$4;
  }
  function contextualDecodingException$default(_this__u8e3s4, hint, descriptor, index, throwable, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      throwable = null;
    return contextualDecodingException_3(_this__u8e3s4, hint, descriptor, index, throwable);
  }
  function isLineSeparator(_this__u8e3s4) {
    return equals(new Char(_this__u8e3s4), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(_this__u8e3s4), new Char(_Char___init__impl__6a9atx(13)));
  }
  function get_lineNumberAndCurrentLine(_this__u8e3s4) {
    var lineStartingCur = {_v: 0};
    var isLastLineSeparator = {_v: 0};
    var _lineNumber = {_v: 1};
    var tmp$ret$0;
    // Inline function 'kotlin.text.isNotEmpty' call
    var tmp0_isNotEmpty = _this__u8e3s4.get_source_jl0x7o_k$();
    tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    if (tmp$ret$0) {
      var inductionVariable = 0;
      var last = coerceIn(_this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0, get_indices(_this__u8e3s4.get_source_jl0x7o_k$()));
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _get_lineNumberAndCurrentLine_$read_mo10xu(_this__u8e3s4, isLastLineSeparator, lineStartingCur, _lineNumber, i);
        }
         while (!(i === last));
    }
    var tmp = _lineNumber._v - isLastLineSeparator._v | 0;
    var tmp$ret$2;
    // Inline function 'kotlin.text.substring' call
    var tmp1_substring = _this__u8e3s4.get_source_jl0x7o_k$();
    var tmp2_substring = lineStartingCur._v;
    var tmp3_substring = _this__u8e3s4.get_cur_18j7s9_k$() - isLastLineSeparator._v | 0;
    var tmp$ret$1;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$1 = tmp1_substring;
    tmp$ret$2 = tmp$ret$1.substring(tmp2_substring, tmp3_substring);
    return new Pair(tmp, tmp$ret$2);
  }
  function limitLast(_this__u8e3s4, length) {
    if (_this__u8e3s4.length <= length)
      return _this__u8e3s4;
    return '...' + takeLast(_this__u8e3s4, length);
  }
  function limitFirst(_this__u8e3s4, length) {
    if (_this__u8e3s4.length <= length)
      return _this__u8e3s4;
    return take(_this__u8e3s4, length) + '...';
  }
  function readLine(_this__u8e3s4) {
    var buffer = StringBuilder_init_$Create$();
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.whileNotEOF' call
    // Inline function 'kotlin.contracts.contract' call
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$0) {
        break $l$loop;
      }
      // Inline function 'net.mamoe.yamlkt.internal.readLine.<anonymous>' call
      var tmp = _this__u8e3s4.get_source_jl0x7o_k$();
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.get_cur_18j7s9_k$();
      tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
      var tmp0__anonymous__q1qw7t = charSequenceGet(tmp, tmp1);
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
      tmp$ret$1 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(13)));
      if (tmp$ret$1)
        return buffer.toString();
      buffer.append_t8oh9e_k$(tmp0__anonymous__q1qw7t);
    }
    tmp$ret$2 = null;
    return buffer.toString();
  }
  function contextualDecodingException_4(hint, text, cur, position, throwable) {
    var tmp$ret$1;
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = StringBuilder_init_$Create$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException.<anonymous>' call
    tmp0_apply.append_ssq29y_k$(hint);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    tmp0_apply.append_ssq29y_k$(text);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < cur)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException.<anonymous>.<anonymous>' call
        tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      }
       while (inductionVariable < cur);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(94));
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    tmp0_apply.append_ssq29y_k$(position);
    tmp0_apply.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    tmp$ret$0 = tmp0_apply;
    tmp$ret$1 = tmp$ret$0.toString();
    return new YamlDecodingException(tmp$ret$1, throwable);
  }
  function _get_lineNumberAndCurrentLine_$read_mo10xu($this_lineNumberAndCurrentLine, isLastLineSeparator, lineStartingCur, _lineNumber, i) {
    var tmp$ret$1;
    // Inline function 'kotlin.also' call
    var tmp0_also = charSequenceGet($this_lineNumberAndCurrentLine.get_source_jl0x7o_k$(), i);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.<get-lineNumberAndCurrentLine>.read.<anonymous>' call
    if (!(isLastLineSeparator._v === 0)) {
      lineStartingCur._v = (i + 1 | 0) - isLastLineSeparator._v | 0;
      isLastLineSeparator._v = 0;
    }
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
    tmp$ret$0 = equals(new Char(tmp0_also), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp0_also), new Char(_Char___init__impl__6a9atx(13)));
    if (tmp$ret$0) {
      var tmp0 = isLastLineSeparator._v;
      isLastLineSeparator._v = tmp0 + 1 | 0;
      var tmp1 = _lineNumber._v;
      _lineNumber._v = tmp1 + 1 | 0;
    }
    tmp$ret$1 = tmp0_also;
    return tmp$ret$1;
  }
  function _get_HEX_POW_TABLE__usu9am($this) {
    return $this.HEX_POW_TABLE_1;
  }
  function HexConverter() {
    HexConverter_instance = this;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = imul(Companion_getInstance_0().get_SIZE_BYTES_qphg4q_k$(), 2);
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.HexConverter.HEX_POW_TABLE.<anonymous>' call
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$1 = Math.pow(16.0, tmp_3);
      tmp$ret$2 = numberToLong(tmp$ret$1);
      tmp_2[tmp_3] = tmp$ret$2;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.HEX_POW_TABLE_1 = tmp_2;
  }
  HexConverter.prototype.hexToLong_stdpjk_k$ = function (value, offset) {
    // Inline function 'kotlin.check' call
    var tmp0_check = (value.length - offset | 0) <= imul(Companion_getInstance_0().get_SIZE_BYTES_qphg4q_k$(), 2);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.HexConverter.hexToLong.<anonymous>' call
      tmp$ret$0 = 'max ' + imul(Companion_getInstance_0().get_SIZE_BYTES_qphg4q_k$(), 2) + ' bits, but found ' + (value.length - offset | 0);
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed' call
    // Inline function 'kotlin.require' call
    var tmp1_require = offset <= (charSequenceLength(value) - 1 | 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
      tmp$ret$1 = 'length < offset';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var accumulator = new Long(0, 0);
    var index = 0;
    // Inline function 'kotlin.repeat' call
    var tmp2_repeat = charSequenceLength(value) - offset | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp2_repeat)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
        var element = charSequenceGet(value, (charSequenceLength(value) - index_0 | 0) - 1 | 0);
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.HexConverter.hexToLong.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var tmp3__anonymous__ufb84q = tmp0;
        var tmp4__anonymous__pkmkx7 = accumulator;
        var tmp0_subject = element;
        var tmp;
        if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) {
          tmp = numberToLong(Char__minus_impl_a2frrh(element, _Char___init__impl__6a9atx(65)) + 10 | 0).times_2zfqpc_k$(HexConverter_getInstance().HEX_POW_TABLE_1[tmp3__anonymous__ufb84q]);
        } else if (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) {
          tmp = numberToLong(Char__minus_impl_a2frrh(element, _Char___init__impl__6a9atx(97)) + 10 | 0).times_2zfqpc_k$(HexConverter_getInstance().HEX_POW_TABLE_1[tmp3__anonymous__ufb84q]);
        } else if (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) {
          tmp = numberToLong(Char__minus_impl_a2frrh(element, _Char___init__impl__6a9atx(48))).times_2zfqpc_k$(HexConverter_getInstance().HEX_POW_TABLE_1[tmp3__anonymous__ufb84q]);
        } else {
          var tmp0_error = "illegal digit '" + new Char(element) + "' in hexadecimal string " + value;
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
        tmp$ret$2 = tmp4__anonymous__pkmkx7.plus_u6jwas_k$(tmp);
        accumulator = tmp$ret$2;
      }
       while (inductionVariable < tmp2_repeat);
    tmp$ret$3 = accumulator;
    return tmp$ret$3;
  };
  HexConverter.prototype.hexToLong_lihuyl_k$ = function (value, offset, length) {
    // Inline function 'kotlin.check' call
    var tmp0_check = (value.length - offset | 0) <= imul(Companion_getInstance_0().get_SIZE_BYTES_qphg4q_k$(), 2);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.HexConverter.hexToLong.<anonymous>' call
      tmp$ret$0 = 'max ' + imul(Companion_getInstance_0().get_SIZE_BYTES_qphg4q_k$(), 2) + ' bits, but found ' + (value.length - offset | 0);
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed' call
    var accumulator = new Long(0, 0);
    var lastIndex = (offset + length | 0) - 1 | 0;
    var index = 0;
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
        var element = value[lastIndex - index_0 | 0];
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.HexConverter.hexToLong.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var tmp1__anonymous__uwfjfc = tmp0;
        var tmp2__anonymous__z9zvc9 = accumulator;
        var tmp0_subject = element;
        var tmp;
        if (_Char___init__impl__6a9atx(65) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(70) : false) {
          tmp = numberToLong(Char__minus_impl_a2frrh(element, _Char___init__impl__6a9atx(65)) + 10 | 0).times_2zfqpc_k$(HexConverter_getInstance().HEX_POW_TABLE_1[tmp1__anonymous__uwfjfc]);
        } else if (_Char___init__impl__6a9atx(97) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(102) : false) {
          tmp = numberToLong(Char__minus_impl_a2frrh(element, _Char___init__impl__6a9atx(97)) + 10 | 0).times_2zfqpc_k$(HexConverter_getInstance().HEX_POW_TABLE_1[tmp1__anonymous__uwfjfc]);
        } else if (_Char___init__impl__6a9atx(48) <= tmp0_subject ? tmp0_subject <= _Char___init__impl__6a9atx(57) : false) {
          tmp = numberToLong(Char__minus_impl_a2frrh(element, _Char___init__impl__6a9atx(48))).times_2zfqpc_k$(HexConverter_getInstance().HEX_POW_TABLE_1[tmp1__anonymous__uwfjfc]);
        } else {
          var tmp0_error = "illegal digit '" + new Char(element) + "' in hexadecimal string " + value;
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
        tmp$ret$1 = tmp2__anonymous__z9zvc9.plus_u6jwas_k$(tmp);
        accumulator = tmp$ret$1;
      }
       while (inductionVariable < length);
    tmp$ret$2 = accumulator;
    return tmp$ret$2;
  };
  var HexConverter_instance;
  function HexConverter_getInstance() {
    if (HexConverter_instance == null)
      new HexConverter();
    return HexConverter_instance;
  }
  function _get_BINARY_POW_TABLE__zaig5a($this) {
    return $this.BINARY_POW_TABLE_1;
  }
  function BinaryConverter() {
    BinaryConverter_instance = this;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$();
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$4;
      // Inline function 'net.mamoe.yamlkt.internal.BinaryConverter.BINARY_POW_TABLE.<anonymous>' call
      var tmp$ret$3;
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$2;
      // Inline function 'kotlin.toULong' call
      var tmp$ret$1;
      // Inline function 'kotlin.math.pow' call
      tmp$ret$1 = Math.pow(2.0, tmp_3);
      var tmp0_toULong = tmp$ret$1;
      tmp$ret$2 = doubleToULong(tmp0_toULong);
      var tmp1_toLong = tmp$ret$2;
      tmp$ret$3 = _ULong___get_data__impl__fggpzb(tmp1_toLong);
      tmp$ret$4 = tmp$ret$3;
      tmp_2[tmp_3] = tmp$ret$4;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.BINARY_POW_TABLE_1 = tmp_2;
  }
  BinaryConverter.prototype.binToLong_r0xlng_k$ = function (value, offset) {
    // Inline function 'kotlin.check' call
    var tmp0_check = (value.length - offset | 0) <= Companion_getInstance_0().get_SIZE_BITS_7qhjj9_k$();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'kotlin.check.<anonymous>' call
      tmp$ret$0 = 'Check failed.';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed' call
    // Inline function 'kotlin.require' call
    var tmp1_require = offset <= (charSequenceLength(value) - 1 | 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp1_require) {
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
      tmp$ret$1 = 'length < offset';
      var message_0 = tmp$ret$1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var accumulator = new Long(0, 0);
    var index = 0;
    // Inline function 'kotlin.repeat' call
    var tmp2_repeat = charSequenceLength(value) - offset | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp2_repeat)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
        var element = charSequenceGet(value, (charSequenceLength(value) - index_0 | 0) - 1 | 0);
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.BinaryConverter.binToLong.<anonymous>' call
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        var tmp3__anonymous__ufb84q = tmp0;
        var tmp4__anonymous__pkmkx7 = accumulator;
        var tmp0_subject = element;
        var tmp;
        if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(48)))) {
          tmp = new Long(0, 0);
        } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(49)))) {
          tmp = BinaryConverter_getInstance().BINARY_POW_TABLE_1[tmp3__anonymous__ufb84q];
        } else {
          var tmp0_error = "illegal digit '" + new Char(element) + "' in binary string " + value;
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
        tmp$ret$2 = tmp4__anonymous__pkmkx7.plus_u6jwas_k$(tmp);
        accumulator = tmp$ret$2;
      }
       while (inductionVariable < tmp2_repeat);
    tmp$ret$3 = accumulator;
    return tmp$ret$3;
  };
  var BinaryConverter_instance;
  function BinaryConverter_getInstance() {
    if (BinaryConverter_instance == null)
      new BinaryConverter();
    return BinaryConverter_instance;
  }
  function classSimpleName(_this__u8e3s4) {
    return getKClassFromExpression(_this__u8e3s4).get_simpleName_r6f8py_k$();
  }
  function foldFromRightOffsetIndexed(_this__u8e3s4, offset, initial, operation) {
    // Inline function 'kotlin.require' call
    var tmp0_require = offset <= (charSequenceLength(_this__u8e3s4) - 1 | 0);
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_require) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
      tmp$ret$0 = 'length < offset';
      var message = tmp$ret$0;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var accumulator = initial;
    var index = 0;
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = charSequenceLength(_this__u8e3s4) - offset | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp1_repeat)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
        var element = charSequenceGet(_this__u8e3s4, (charSequenceLength(_this__u8e3s4) - index_0 | 0) - 1 | 0);
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        accumulator = operation(tmp0, accumulator, new Char(element));
      }
       while (inductionVariable < tmp1_repeat);
    return accumulator;
  }
  function foldFromRightOffsetIndexed_0(_this__u8e3s4, offset, length, initial, operation) {
    var accumulator = initial;
    var lastIndex = (offset + length | 0) - 1 | 0;
    var index = 0;
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index_0 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.foldFromRightOffsetIndexed.<anonymous>' call
        var element = _this__u8e3s4[lastIndex - index_0 | 0];
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        accumulator = operation(tmp0, accumulator, new Char(element));
      }
       while (inductionVariable < length);
    return accumulator;
  }
  function limitToByte(_this__u8e3s4) {
    var containsLower = toLong_0(ByteCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
    if (_this__u8e3s4.compareTo_n4fqi2_k$(toLong_0(ByteCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) <= 0 ? containsLower.compareTo_n4fqi2_k$(_this__u8e3s4) <= 0 : false)
      return _this__u8e3s4.toByte_edm0nx_k$();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'value is too large for byte: ' + toString(_this__u8e3s4);
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function limitToInt(_this__u8e3s4) {
    var containsLower = toLong_0(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
    if (_this__u8e3s4.compareTo_n4fqi2_k$(toLong_0(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) <= 0 ? containsLower.compareTo_n4fqi2_k$(_this__u8e3s4) <= 0 : false)
      return _this__u8e3s4.toInt_1tsl84_k$();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'value is too large for int: ' + toString(_this__u8e3s4);
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function limitToShort(_this__u8e3s4) {
    var containsLower = toLong_0(ShortCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
    if (_this__u8e3s4.compareTo_n4fqi2_k$(toLong_0(ShortCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) <= 0 ? containsLower.compareTo_n4fqi2_k$(_this__u8e3s4) <= 0 : false)
      return _this__u8e3s4.toShort_ja8oqn_k$();
    // Inline function 'kotlin.error' call
    var tmp0_error = 'value is too large for short: ' + toString(_this__u8e3s4);
    throw IllegalStateException_init_$Create$(toString(tmp0_error));
  }
  function optimizeNull(_this__u8e3s4) {
    var tmp0_subject = _this__u8e3s4;
    switch (tmp0_subject) {
      case '~':
      case 'null':
      case 'NULL':
        return null;
      default:
        return _this__u8e3s4;
    }
  }
  function set_enabled0(_set____db54di) {
    enabled0 = _set____db54di;
  }
  function get_enabled0() {
    return enabled0;
  }
  var enabled0;
  function set_logIndent0(_set____db54di) {
    logIndent0 = _set____db54di;
  }
  function get_logIndent0() {
    return logIndent0;
  }
  var logIndent0;
  function set_decodeValue0(_set____db54di) {
    decodeValue0 = _set____db54di;
  }
  function get_decodeValue0() {
    return decodeValue0;
  }
  var decodeValue0;
  function _set_decodeValue__ywg726($this, _set____db54di) {
    var tmp0_setValue = decodeValue$factory();
    return $this.decodeValue$delegate_1.set(_set____db54di);
  }
  function _get_decodeValue__4m20qa($this) {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = decodeValue$factory_0();
    tmp$ret$0 = $this.decodeValue$delegate_1.get();
    return tmp$ret$0;
  }
  function space($this, count) {
    return repeat(' ', coerceAtLeast(count, 0));
  }
  function Debugging() {
    Debugging_instance = this;
    this.enabled$delegate_1 = enabled0$factory();
    this.logIndent$delegate_1 = logIndent0$factory();
    this.decodeValue$delegate_1 = decodeValue0$factory();
  }
  Debugging.prototype.set_enabled_qjnymd_k$ = function (_set____db54di) {
    var tmp0_setValue = enabled$factory();
    return this.enabled$delegate_1.set(_set____db54di);
  };
  Debugging.prototype.get_enabled_pcr8o8_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = enabled$factory_0();
    tmp$ret$0 = this.enabled$delegate_1.get();
    return tmp$ret$0;
  };
  Debugging.prototype.set_logIndent_5qh6cd_k$ = function (_set____db54di) {
    var tmp0_setValue = logIndent$factory();
    return this.logIndent$delegate_1.set(_set____db54di);
  };
  Debugging.prototype.get_logIndent_z294ex_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.getValue' call
    var tmp0_getValue = logIndent$factory_0();
    tmp$ret$0 = this.logIndent$delegate_1.get();
    return tmp$ret$0;
  };
  Debugging.prototype.beginStructure_ho3cfd_k$ = function (descriptor, decoder) {
    if (!this.get_enabled_pcr8o8_k$())
      return Unit_getInstance();
    if (!this.get_enabled_pcr8o8_k$())
      return Unit_getInstance();
    if (decoder == null) {
      println(space(this, this.get_logIndent_z294ex_k$()) + (descriptor.get_serialName_u2rqhk_k$() + ' {'));
    } else {
      var tmp;
      if (decoder instanceof IndentedDecoder) {
        tmp = 'indented ' + decoder.get_baseIndent_whzuqu_k$() + ' ';
      } else {
        tmp = '';
      }
      var indent = tmp;
      println(space(this, this.get_logIndent_z294ex_k$()) + (descriptor.get_serialName_u2rqhk_k$() + ' by ' + decoder.get_name_woqyms_k$() + ' ' + indent + '{'));
    }
    var tmp0_this = this;
    tmp0_this.set_logIndent_5qh6cd_k$(tmp0_this.get_logIndent_z294ex_k$() + 4 | 0);
  };
  Debugging.prototype.endStructure_ksk9dl_k$ = function () {
    if (!this.get_enabled_pcr8o8_k$())
      return Unit_getInstance();
    var tmp0_this = this;
    tmp0_this.set_logIndent_5qh6cd_k$(tmp0_this.get_logIndent_z294ex_k$() - 4 | 0);
    println(space(this, this.get_logIndent_z294ex_k$()) + '}');
  };
  Debugging.prototype.logDecode_uxlfy9_k$ = function (descriptor, index, value) {
    if (!this.get_enabled_pcr8o8_k$())
      return Unit_getInstance();
    if (descriptor == null) {
      if (_get_decodeValue__4m20qa(this) > 0) {
        println(' = ' + value);
        var tmp0_this = this;
        var tmp1 = _get_decodeValue__4m20qa(tmp0_this);
        _set_decodeValue__ywg726(tmp0_this, tmp1 - 1 | 0);
      } else {
        print(space(this, this.get_logIndent_z294ex_k$()) + value);
        var tmp2_this = this;
        var tmp3 = _get_decodeValue__4m20qa(tmp2_this);
        _set_decodeValue__ywg726(tmp2_this, tmp3 + 1 | 0);
      }
    } else {
      println(space(this, this.get_logIndent_z294ex_k$()) + (descriptor.getElementName_ykpypc_k$(index) + ': ' + value));
    }
  };
  Debugging.prototype.logCustom_vc5eqe_k$ = function (message) {
    if (!this.get_enabled_pcr8o8_k$())
      return Unit_getInstance();
    println(space(this, this.get_logIndent_z294ex_k$()) + message());
  };
  var Debugging_instance;
  function Debugging_getInstance() {
    if (Debugging_instance == null)
      new Debugging();
    return Debugging_instance;
  }
  function debuggingLogDecoder(_this__u8e3s4, descriptor, index) {
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    return _this__u8e3s4;
  }
  function enabled0$factory() {
    return getPropertyCallableRef('enabled0', 0, KMutableProperty0, function () {
      return enabled0;
    }, function (value) {
      enabled0 = value;
      return Unit_getInstance();
    });
  }
  function logIndent0$factory() {
    return getPropertyCallableRef('logIndent0', 0, KMutableProperty0, function () {
      return logIndent0;
    }, function (value) {
      logIndent0 = value;
      return Unit_getInstance();
    });
  }
  function decodeValue0$factory() {
    return getPropertyCallableRef('decodeValue0', 0, KMutableProperty0, function () {
      return decodeValue0;
    }, function (value) {
      decodeValue0 = value;
      return Unit_getInstance();
    });
  }
  function enabled$factory() {
    return getPropertyCallableRef('enabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_enabled_pcr8o8_k$();
    }, function (receiver, value) {
      return receiver.set_enabled_qjnymd_k$(value);
    });
  }
  function enabled$factory_0() {
    return getPropertyCallableRef('enabled', 1, KMutableProperty1, function (receiver) {
      return receiver.get_enabled_pcr8o8_k$();
    }, function (receiver, value) {
      return receiver.set_enabled_qjnymd_k$(value);
    });
  }
  function logIndent$factory() {
    return getPropertyCallableRef('logIndent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_logIndent_z294ex_k$();
    }, function (receiver, value) {
      return receiver.set_logIndent_5qh6cd_k$(value);
    });
  }
  function logIndent$factory_0() {
    return getPropertyCallableRef('logIndent', 1, KMutableProperty1, function (receiver) {
      return receiver.get_logIndent_z294ex_k$();
    }, function (receiver, value) {
      return receiver.set_logIndent_5qh6cd_k$(value);
    });
  }
  function decodeValue$factory() {
    return getPropertyCallableRef('decodeValue', 1, KMutableProperty1, function (receiver) {
      return _get_decodeValue__4m20qa(receiver);
    }, function (receiver, value) {
      return _set_decodeValue__ywg726(receiver, value);
    });
  }
  function decodeValue$factory_0() {
    return getPropertyCallableRef('decodeValue', 1, KMutableProperty1, function (receiver) {
      return _get_decodeValue__4m20qa(receiver);
    }, function (receiver, value) {
      return _set_decodeValue__ywg726(receiver, value);
    });
  }
  function get_LONG_AS_DOUBLE_RANGE() {
    init_properties_DynamicSerializersUtils_kt_288jmt();
    return LONG_AS_DOUBLE_RANGE;
  }
  var LONG_AS_DOUBLE_RANGE;
  function get_INT_AS_DOUBLE_RANGE() {
    init_properties_DynamicSerializersUtils_kt_288jmt();
    return INT_AS_DOUBLE_RANGE;
  }
  var INT_AS_DOUBLE_RANGE;
  function adjustDynamicString(_this__u8e3s4, quoted) {
    init_properties_DynamicSerializersUtils_kt_288jmt();
    if (quoted)
      return _this__u8e3s4;
    var tmp0_subject = _this__u8e3s4;
    var tmp;
    switch (tmp0_subject) {
      case 'true':
      case 'TRUE':
        tmp = true;
        break;
      case 'false':
      case 'FALSE':
        tmp = false;
        break;
      default:
        var tmp1_elvis_lhs = toDoubleOrNull(_this__u8e3s4);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          return _this__u8e3s4;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }

        var double = tmp_0;
        var tmp_1 = _Char___init__impl__6a9atx(46);
        if (contains$default(_this__u8e3s4, tmp_1, false, 2, null))
          return double;
        var tmp2_subject = double;
        tmp = get_INT_AS_DOUBLE_RANGE().contains_2ehdtg_k$(tmp2_subject) ? numberToInt(double) : get_LONG_AS_DOUBLE_RANGE().contains_2ehdtg_k$(tmp2_subject) ? numberToLong(double) : double;
        break;
    }
    return tmp;
  }
  function IYamlDynamicSerializer() {
  }
  function YamlDynamicPairSerializer() {
    YamlDynamicPairSerializer_instance = this;
    this.$$delegate_0__1 = PairSerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  YamlDynamicPairSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  YamlDynamicPairSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  YamlDynamicPairSerializer.prototype.serialize_pawp48_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  YamlDynamicPairSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_pawp48_k$(encoder, value instanceof Pair ? value : THROW_CCE());
  };
  var YamlDynamicPairSerializer_instance;
  function YamlDynamicPairSerializer_getInstance() {
    if (YamlDynamicPairSerializer_instance == null)
      new YamlDynamicPairSerializer();
    return YamlDynamicPairSerializer_instance;
  }
  function YamlDynamicTripleSerializer() {
    YamlDynamicTripleSerializer_instance = this;
    this.$$delegate_0__1 = TripleSerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  YamlDynamicTripleSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  YamlDynamicTripleSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  YamlDynamicTripleSerializer.prototype.serialize_jqvds0_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  YamlDynamicTripleSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_jqvds0_k$(encoder, value instanceof Triple ? value : THROW_CCE());
  };
  var YamlDynamicTripleSerializer_instance;
  function YamlDynamicTripleSerializer_getInstance() {
    if (YamlDynamicTripleSerializer_instance == null)
      new YamlDynamicTripleSerializer();
    return YamlDynamicTripleSerializer_instance;
  }
  function AnyTypedArraySerializer() {
    AnyTypedArraySerializer_instance = this;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.builtins.ArraySerializer' call
    var tmp0_ArraySerializer = YamlNullableDynamicSerializer_getInstance();
    tmp$ret$0 = ArraySerializer(PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$(), tmp0_ArraySerializer);
    tmp.$$delegate_0__1 = tmp$ret$0;
  }
  AnyTypedArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  AnyTypedArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  AnyTypedArraySerializer.prototype.serialize_nb9u7n_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  AnyTypedArraySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_nb9u7n_k$(encoder, (!(value == null) ? isArray(value) : false) ? value : THROW_CCE());
  };
  var AnyTypedArraySerializer_instance;
  function AnyTypedArraySerializer_getInstance() {
    if (AnyTypedArraySerializer_instance == null)
      new AnyTypedArraySerializer();
    return AnyTypedArraySerializer_instance;
  }
  function YamlDynamicMapSerializer() {
    YamlDynamicMapSerializer_instance = this;
    this.$$delegate_0__1 = MapSerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  YamlDynamicMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  YamlDynamicMapSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  YamlDynamicMapSerializer.prototype.serialize_yw0l1_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  YamlDynamicMapSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_yw0l1_k$(encoder, (!(value == null) ? isInterface(value, Map) : false) ? value : THROW_CCE());
  };
  var YamlDynamicMapSerializer_instance;
  function YamlDynamicMapSerializer_getInstance() {
    if (YamlDynamicMapSerializer_instance == null)
      new YamlDynamicMapSerializer();
    return YamlDynamicMapSerializer_instance;
  }
  function YamlDynamicListSerializer() {
    YamlDynamicListSerializer_instance = this;
    this.$$delegate_0__1 = ListSerializer(YamlNullableDynamicSerializer_getInstance());
  }
  YamlDynamicListSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  YamlDynamicListSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  YamlDynamicListSerializer.prototype.serialize_n407pr_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  YamlDynamicListSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_n407pr_k$(encoder, (!(value == null) ? isInterface(value, List) : false) ? value : THROW_CCE());
  };
  var YamlDynamicListSerializer_instance;
  function YamlDynamicListSerializer_getInstance() {
    if (YamlDynamicListSerializer_instance == null)
      new YamlDynamicListSerializer();
    return YamlDynamicListSerializer_instance;
  }
  function YamlMapEntrySerializer() {
    YamlMapEntrySerializer_instance = this;
    this.$$delegate_0__1 = MapEntrySerializer(YamlNullableDynamicSerializer_getInstance(), YamlNullableDynamicSerializer_getInstance());
  }
  YamlMapEntrySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  YamlMapEntrySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  YamlMapEntrySerializer.prototype.serialize_m5wsbl_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  YamlMapEntrySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_m5wsbl_k$(encoder, (!(value == null) ? isInterface(value, Entry) : false) ? value : THROW_CCE());
  };
  var YamlMapEntrySerializer_instance;
  function YamlMapEntrySerializer_getInstance() {
    if (YamlMapEntrySerializer_instance == null)
      new YamlMapEntrySerializer();
    return YamlMapEntrySerializer_instance;
  }
  var properties_initialized_DynamicSerializersUtils_kt_uymji7;
  function init_properties_DynamicSerializersUtils_kt_288jmt() {
    if (properties_initialized_DynamicSerializersUtils_kt_uymji7) {
    } else {
      properties_initialized_DynamicSerializersUtils_kt_uymji7 = true;
      LONG_AS_DOUBLE_RANGE = rangeTo(Companion_getInstance_0().get_MIN_VALUE_7nmmor_k$().toDouble_ygsx0s_k$(), Companion_getInstance_0().get_MAX_VALUE_54a9lf_k$().toDouble_ygsx0s_k$());
      INT_AS_DOUBLE_RANGE = rangeTo(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$(), IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    }
  }
  function get_REPLACEMENT_CHARS() {
    init_properties_Escape_kt_ll0njt();
    return REPLACEMENT_CHARS;
  }
  var REPLACEMENT_CHARS;
  function toEscapedString(_this__u8e3s4, buf, stringSerialization) {
    init_properties_Escape_kt_ll0njt();
    var availability = getQuotationAvailability(_this__u8e3s4);
    var tmp;
    if (stringSerialization.equals(StringSerialization_SINGLE_QUOTATION_getInstance())) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.hasFlag' call
      var tmp0_hasFlag = 1;
      tmp$ret$0 = !((availability & tmp0_hasFlag) === 0);
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    if (tmp)
      return "'" + _this__u8e3s4 + "'";
    else {
      var tmp_0;
      if (stringSerialization.equals(StringSerialization_NONE_getInstance())) {
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.hasFlag' call
        var tmp1_hasFlag = 2;
        tmp$ret$1 = !((availability & tmp1_hasFlag) === 0);
        tmp_0 = tmp$ret$1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0)
        return _this__u8e3s4;
      else {
        if (stringSerialization.equals(StringSerialization_DOUBLE_QUOTATION_getInstance())) {
          var tmp_1;
          var tmp$ret$2;
          // Inline function 'net.mamoe.yamlkt.internal.hasFlag' call
          var tmp2_hasFlag = 4;
          tmp$ret$2 = !((availability & tmp2_hasFlag) === 0);
          if (tmp$ret$2) {
            tmp_1 = '"' + _this__u8e3s4 + '"';
          } else {
            tmp_1 = toDoubleQuotedString(_this__u8e3s4, buf);
          }
          return tmp_1;
        }
      }
    }
    var tmp_2;
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.internal.hasFlag' call
    var tmp3_hasFlag = 2;
    tmp$ret$3 = !((availability & tmp3_hasFlag) === 0);
    if (tmp$ret$3) {
      tmp_2 = _this__u8e3s4;
    } else {
      var tmp$ret$4;
      // Inline function 'net.mamoe.yamlkt.internal.hasFlag' call
      var tmp4_hasFlag = 1;
      tmp$ret$4 = !((availability & tmp4_hasFlag) === 0);
      if (tmp$ret$4) {
        tmp_2 = "'" + _this__u8e3s4 + "'";
      } else {
        var tmp$ret$5;
        // Inline function 'net.mamoe.yamlkt.internal.hasFlag' call
        var tmp5_hasFlag = 4;
        tmp$ret$5 = !((availability & tmp5_hasFlag) === 0);
        if (tmp$ret$5) {
          tmp_2 = '"' + _this__u8e3s4 + '"';
        } else {
          var tmp_3;
          var tmp$ret$6;
          // Inline function 'net.mamoe.yamlkt.internal.hasFlag' call
          var tmp6_hasFlag = 4;
          tmp$ret$6 = !((availability & tmp6_hasFlag) === 0);
          if (tmp$ret$6) {
            tmp_3 = '"' + _this__u8e3s4 + '"';
          } else {
            tmp_3 = toDoubleQuotedString(_this__u8e3s4, buf);
          }
          return tmp_3;
        }
      }
    }
    return tmp_2;
  }
  function peekNext(_this__u8e3s4, block) {
    init_properties_Escape_kt_ll0njt();
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (tmp$ret$0)
      return null;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$() + 1 | 0);
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = block(new Char(tmp0_let));
    return tmp$ret$1;
  }
  function readUnquotedString(_this__u8e3s4, stopOnComma, begin) {
    init_properties_Escape_kt_ll0njt();
    var startingIndent = _this__u8e3s4.get_currentIndent_v1v68s_k$();
    var startCur = {_v: _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0};
    var escapedOnce = {_v: false};
    var tmp0_this = _this__u8e3s4;
    var tmp = tmp0_this.get_leadingSpace_u9hq8n_k$();
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.countSkipIf' call
    // Inline function 'kotlin.contracts.contract' call
    var start = _this__u8e3s4.get_cur_18j7s9_k$();
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$0) {
        break $l$loop_0;
      }
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.readUnquotedString.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
      tmp$ret$1 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(32)));
      if (tmp$ret$1) {
        var tmp0_this_0 = _this__u8e3s4;
        var tmp1 = tmp0_this_0.get_cur_18j7s9_k$();
        tmp0_this_0.set_cur_j8oru5_k$(tmp1 + 1 | 0);
      } else {
        break $l$loop_0;
      }
    }
    tmp$ret$2 = _this__u8e3s4.get_cur_18j7s9_k$() - start | 0;
    tmp0_this.set_leadingSpace_43618t_k$(tmp + tmp$ret$2 | 0);
    var tmp$ret$10;
    // Inline function 'net.mamoe.yamlkt.internal.whileNotEOFWithBegin' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.readUnquotedString.<anonymous>' call
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
    tmp$ret$3 = equals(new Char(begin), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(begin), new Char(_Char___init__impl__6a9atx(13)));
    if (tmp$ret$3) {
      _this__u8e3s4.set_currentIndent_27p6t4_k$(0);
      _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur._v, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
      escapedOnce._v = true;
      if (!runNewLineSkippingAndEscapingForUnquoted$default(_this__u8e3s4, startingIndent, false, 2, null)) {
        return _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
      }
      startCur._v = _this__u8e3s4.get_cur_18j7s9_k$();
    } else {
      var tmp0_subject = begin;
      if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(58)))) {
        _this__u8e3s4.reuseToken_l8k9sb_k$(Token_COLON_getInstance());
        return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(44)))) {
        if (stopOnComma) {
          _this__u8e3s4.reuseToken_l8k9sb_k$(Token_COMMA_getInstance());
          return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
        }
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(124)))) {
        return readMultilineString(_this__u8e3s4, readLinesForMultilineLiteralString$ref());
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(62)))) {
        return readMultilineString(_this__u8e3s4, readLinesForMultilineFoldedString$ref());
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(91)))) {
        _this__u8e3s4.reuseToken_l8k9sb_k$(Token_LIST_BEGIN_getInstance());
        return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(93)))) {
        _this__u8e3s4.reuseToken_l8k9sb_k$(Token_LIST_END_getInstance());
        return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(123)))) {
        _this__u8e3s4.reuseToken_l8k9sb_k$(Token_MAP_BEGIN_getInstance());
        return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(125)))) {
        _this__u8e3s4.reuseToken_l8k9sb_k$(Token_MAP_END_getInstance());
        return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
      } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(35)))) {
        var tmp$ret$5;
        // Inline function 'kotlin.run' call
        // Inline function 'kotlin.contracts.contract' call
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.internal.readUnquotedString.<anonymous>.<anonymous>' call
        var tmp_0;
        if (!escapedOnce._v) {
          tmp_0 = _this__u8e3s4.subSourceTrimEnd_tud8le_k$(startCur._v, _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0);
        } else {
          _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur._v, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
          tmp_0 = _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
        }
        tmp$ret$4 = tmp_0;
        tmp$ret$5 = tmp$ret$4;
        var toString = tmp$ret$5;
        skipLine(_this__u8e3s4);
        var tmp1_this = _this__u8e3s4;
        var tmp2 = tmp1_this.get_cur_18j7s9_k$();
        tmp1_this.set_cur_j8oru5_k$(tmp2 - 1 | 0);
        _this__u8e3s4.set_currentIndent_27p6t4_k$(0);
        return toString;
      }
    }
    $l$loop_1: while (true) {
      var tmp$ret$6;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$6 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$6) {
        break $l$loop_1;
      }
      // Inline function 'net.mamoe.yamlkt.internal.readUnquotedString.<anonymous>' call
      var tmp_1 = _this__u8e3s4.get_source_jl0x7o_k$();
      var tmp0_this_1 = _this__u8e3s4;
      var tmp1_0 = tmp0_this_1.get_cur_18j7s9_k$();
      tmp0_this_1.set_cur_j8oru5_k$(tmp1_0 + 1 | 0);
      var tmp1__anonymous__uwfjfc = charSequenceGet(tmp_1, tmp1_0);
      var tmp$ret$7;
      // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
      tmp$ret$7 = equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(13)));
      if (tmp$ret$7) {
        _this__u8e3s4.set_currentIndent_27p6t4_k$(0);
        _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur._v, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
        escapedOnce._v = true;
        if (!runNewLineSkippingAndEscapingForUnquoted$default(_this__u8e3s4, startingIndent, false, 2, null)) {
          return _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
        }
        startCur._v = _this__u8e3s4.get_cur_18j7s9_k$();
      } else {
        var tmp0_subject_0 = tmp1__anonymous__uwfjfc;
        if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(58)))) {
          _this__u8e3s4.reuseToken_l8k9sb_k$(Token_COLON_getInstance());
          return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(44)))) {
          if (stopOnComma) {
            _this__u8e3s4.reuseToken_l8k9sb_k$(Token_COMMA_getInstance());
            return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
          }
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(124)))) {
          return readMultilineString(_this__u8e3s4, readLinesForMultilineLiteralString$ref_0());
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(62)))) {
          return readMultilineString(_this__u8e3s4, readLinesForMultilineFoldedString$ref_0());
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(91)))) {
          _this__u8e3s4.reuseToken_l8k9sb_k$(Token_LIST_BEGIN_getInstance());
          return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(93)))) {
          _this__u8e3s4.reuseToken_l8k9sb_k$(Token_LIST_END_getInstance());
          return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(123)))) {
          _this__u8e3s4.reuseToken_l8k9sb_k$(Token_MAP_BEGIN_getInstance());
          return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(125)))) {
          _this__u8e3s4.reuseToken_l8k9sb_k$(Token_MAP_END_getInstance());
          return readUnquotedString$doEnd(escapedOnce, _this__u8e3s4, startCur);
        } else if (equals(new Char(tmp0_subject_0), new Char(_Char___init__impl__6a9atx(35)))) {
          var tmp$ret$9;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$8;
          // Inline function 'net.mamoe.yamlkt.internal.readUnquotedString.<anonymous>.<anonymous>' call
          var tmp_2;
          if (!escapedOnce._v) {
            tmp_2 = _this__u8e3s4.subSourceTrimEnd_tud8le_k$(startCur._v, _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0);
          } else {
            _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur._v, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
            tmp_2 = _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
          }
          tmp$ret$8 = tmp_2;
          tmp$ret$9 = tmp$ret$8;
          var toString_0 = tmp$ret$9;
          skipLine(_this__u8e3s4);
          var tmp1_this_0 = _this__u8e3s4;
          var tmp2_0 = tmp1_this_0.get_cur_18j7s9_k$();
          tmp1_this_0.set_cur_j8oru5_k$(tmp2_0 - 1 | 0);
          _this__u8e3s4.set_currentIndent_27p6t4_k$(0);
          return toString_0;
        }
      }
    }
    tmp$ret$10 = null;
    if (!escapedOnce._v) {
      return _this__u8e3s4.subSourceTrimEnd_tud8le_k$(startCur._v, _this__u8e3s4.get_cur_18j7s9_k$());
    }
    _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur._v, _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0);
    return _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
  }
  function readSingleQuotedString(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    var startCur = _this__u8e3s4.get_cur_18j7s9_k$();
    var escapedOnce = false;
    // Inline function 'net.mamoe.yamlkt.internal.skipIf' call
    // Inline function 'kotlin.contracts.contract' call
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$0) {
        break $l$loop_0;
      }
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.readSingleQuotedString.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
      tmp$ret$1 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(32)));
      if (tmp$ret$1) {
        var tmp0_this = _this__u8e3s4;
        var tmp1 = tmp0_this.get_cur_18j7s9_k$();
        tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
      } else {
        break $l$loop_0;
      }
    }
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
    var tmp1_isLineSeparator = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
    tmp$ret$2 = equals(new Char(tmp1_isLineSeparator), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp1_isLineSeparator), new Char(_Char___init__impl__6a9atx(13)));
    if (tmp$ret$2) {
      var tmp0_this_0 = _this__u8e3s4;
      var tmp1_0 = tmp0_this_0.get_cur_18j7s9_k$();
      tmp0_this_0.set_cur_j8oru5_k$(tmp1_0 + 1 | 0);
      escapedOnce = true;
      runNewLineSkippingAndEscaping$default(_this__u8e3s4, false, 1, null);
      startCur = _this__u8e3s4.get_cur_18j7s9_k$();
    }
    var tmp$ret$8;
    // Inline function 'net.mamoe.yamlkt.internal.whileNotEOF' call
    // Inline function 'kotlin.contracts.contract' call
    $l$loop_1: while (true) {
      var tmp$ret$3;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$3 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$3) {
        break $l$loop_1;
      }
      // Inline function 'net.mamoe.yamlkt.internal.readSingleQuotedString.<anonymous>' call
      var tmp = _this__u8e3s4.get_source_jl0x7o_k$();
      var tmp0_this_1 = _this__u8e3s4;
      var tmp1_1 = tmp0_this_1.get_cur_18j7s9_k$();
      tmp0_this_1.set_cur_j8oru5_k$(tmp1_1 + 1 | 0);
      var tmp2__anonymous__z9zvc9 = charSequenceGet(tmp, tmp1_1);
      if (equals(new Char(tmp2__anonymous__z9zvc9), new Char(get_SINGLE_QUOTATION_CHAR()))) {
        var tmp_0;
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$4 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
        if (!tmp$ret$4) {
          tmp_0 = equals(new Char(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$())), new Char(get_SINGLE_QUOTATION_CHAR()));
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          var tmp0_this_2 = _this__u8e3s4;
          var tmp1_2 = tmp0_this_2.get_cur_18j7s9_k$();
          tmp0_this_2.set_cur_j8oru5_k$(tmp1_2 + 1 | 0);
          _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
          escapedOnce = true;
          startCur = _this__u8e3s4.get_cur_18j7s9_k$();
        } else {
          if (!escapedOnce) {
            var tmp$ret$6;
            // Inline function 'kotlin.text.substring' call
            var tmp0_substring = _this__u8e3s4.get_source_jl0x7o_k$();
            var tmp1_substring = startCur;
            var tmp2_substring = _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0;
            var tmp$ret$5;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$5 = tmp0_substring;
            tmp$ret$6 = tmp$ret$5.substring(tmp1_substring, tmp2_substring);
            return tmp$ret$6;
          }
          _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
          return _this__u8e3s4.takeStringBuf_1s0a8r_k$();
        }
      } else {
        var tmp$ret$7;
        // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
        tmp$ret$7 = equals(new Char(tmp2__anonymous__z9zvc9), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp2__anonymous__z9zvc9), new Char(_Char___init__impl__6a9atx(13)));
        if (tmp$ret$7) {
          _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
          runNewLineSkippingAndEscaping$default(_this__u8e3s4, false, 1, null);
          startCur = _this__u8e3s4.get_cur_18j7s9_k$();
          escapedOnce = true;
        }
      }
    }
    tmp$ret$8 = null;
    var tmp$ret$9;
    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
    tmp$ret$9 = contextualDecodingException$default(_this__u8e3s4, 'Unexpected EOF', null, -1, null, 8, null);
    throw tmp$ret$9;
  }
  function readDoubleQuotedString(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    var startCur = _this__u8e3s4.get_cur_18j7s9_k$();
    var escapedOnce = false;
    // Inline function 'net.mamoe.yamlkt.internal.skipIf' call
    // Inline function 'kotlin.contracts.contract' call
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$0) {
        break $l$loop_0;
      }
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.readDoubleQuotedString.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
      tmp$ret$1 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(32)));
      if (tmp$ret$1) {
        var tmp0_this = _this__u8e3s4;
        var tmp1 = tmp0_this.get_cur_18j7s9_k$();
        tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
      } else {
        break $l$loop_0;
      }
    }
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
    var tmp1_isLineSeparator = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
    tmp$ret$2 = equals(new Char(tmp1_isLineSeparator), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp1_isLineSeparator), new Char(_Char___init__impl__6a9atx(13)));
    if (tmp$ret$2) {
      var tmp0_this_0 = _this__u8e3s4;
      var tmp1_0 = tmp0_this_0.get_cur_18j7s9_k$();
      tmp0_this_0.set_cur_j8oru5_k$(tmp1_0 + 1 | 0);
      escapedOnce = true;
      runNewLineSkippingAndEscaping$default(_this__u8e3s4, false, 1, null);
      startCur = _this__u8e3s4.get_cur_18j7s9_k$();
    }
    var tmp$ret$18;
    // Inline function 'net.mamoe.yamlkt.internal.whileNotEOF' call
    // Inline function 'kotlin.contracts.contract' call
    $l$loop_1: while (true) {
      var tmp$ret$3;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$3 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$3) {
        break $l$loop_1;
      }
      // Inline function 'net.mamoe.yamlkt.internal.readDoubleQuotedString.<anonymous>' call
      var tmp = _this__u8e3s4.get_source_jl0x7o_k$();
      var tmp0_this_1 = _this__u8e3s4;
      var tmp1_1 = tmp0_this_1.get_cur_18j7s9_k$();
      tmp0_this_1.set_cur_j8oru5_k$(tmp1_1 + 1 | 0);
      var tmp2__anonymous__z9zvc9 = charSequenceGet(tmp, tmp1_1);
      if (equals(new Char(tmp2__anonymous__z9zvc9), new Char(get_DOUBLE_QUOTATION_CHAR()))) {
        if (!escapedOnce) {
          var tmp$ret$5;
          // Inline function 'kotlin.text.substring' call
          var tmp0_substring = _this__u8e3s4.get_source_jl0x7o_k$();
          var tmp1_substring = startCur;
          var tmp2_substring = _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0;
          var tmp$ret$4;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$4 = tmp0_substring;
          tmp$ret$5 = tmp$ret$4.substring(tmp1_substring, tmp2_substring);
          return tmp$ret$5;
        }
        _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
        return _this__u8e3s4.takeStringBuf_1s0a8r_k$();
      } else {
        var tmp$ret$6;
        // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
        tmp$ret$6 = equals(new Char(tmp2__anonymous__z9zvc9), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp2__anonymous__z9zvc9), new Char(_Char___init__impl__6a9atx(13)));
        if (tmp$ret$6) {
          _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
          runNewLineSkippingAndEscaping$default(_this__u8e3s4, false, 1, null);
          startCur = _this__u8e3s4.get_cur_18j7s9_k$();
          escapedOnce = true;
        } else {
          if (equals(new Char(tmp2__anonymous__z9zvc9), new Char(_Char___init__impl__6a9atx(92)))) {
            _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), startCur, _this__u8e3s4.get_cur_18j7s9_k$() - 2 | 0);
            startCur = _this__u8e3s4.get_cur_18j7s9_k$() + 1 | 0;
            escapedOnce = true;
            // Inline function 'net.mamoe.yamlkt.internal.ensureNotEOF' call
            var tmp$ret$7;
            // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
            tmp$ret$7 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
            if (tmp$ret$7) {
              var tmp$ret$8;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              tmp$ret$8 = contextualDecodingException$default(_this__u8e3s4, 'Unexpected EOF', null, -1, null, 8, null);
              throw tmp$ret$8;
            }
            var tmp_0 = _this__u8e3s4.get_source_jl0x7o_k$();
            var tmp0_this_2 = _this__u8e3s4;
            var tmp1_2 = tmp0_this_2.get_cur_18j7s9_k$();
            tmp0_this_2.set_cur_j8oru5_k$(tmp1_2 + 1 | 0);
            var esChar = charSequenceGet(tmp_0, tmp1_2);
            var tmp$ret$9;
            // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
            tmp$ret$9 = equals(new Char(esChar), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(esChar), new Char(_Char___init__impl__6a9atx(13)));
            if (tmp$ret$9) {
              // Inline function 'net.mamoe.yamlkt.internal.skipIf' call
              // Inline function 'kotlin.contracts.contract' call
              $l$loop_3: while (true) {
                var tmp$ret$10;
                // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
                tmp$ret$10 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
                if (!!tmp$ret$10) {
                  break $l$loop_3;
                }
                if (isWhitespace(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$()))) {
                  var tmp0_this_3 = _this__u8e3s4;
                  var tmp1_3 = tmp0_this_3.get_cur_18j7s9_k$();
                  tmp0_this_3.set_cur_j8oru5_k$(tmp1_3 + 1 | 0);
                } else {
                  break $l$loop_3;
                }
              }
              startCur = _this__u8e3s4.get_cur_18j7s9_k$();
            } else {
              if (isWhitespace(esChar)) {
                _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(32));
                startCur = _this__u8e3s4.get_cur_18j7s9_k$();
              } else {
                var tmp$ret$11;
                // Inline function 'kotlin.code' call
                tmp$ret$11 = Char__toInt_impl_vasixd(esChar);
                var es = escapeToChar(tmp$ret$11);
                if (!equals(new Char(es), new Char(_Char___init__impl__6a9atx(0)))) {
                  _this__u8e3s4.append_y20c3x_k$(es);
                  startCur = _this__u8e3s4.get_cur_18j7s9_k$();
                } else {
                  var tmp2_subject = esChar;
                  var tmp_1;
                  if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(120)))) {
                    tmp_1 = 2;
                  } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(117)))) {
                    tmp_1 = 4;
                  } else if (equals(new Char(tmp2_subject), new Char(_Char___init__impl__6a9atx(85)))) {
                    tmp_1 = 8;
                  } else {
                    var tmp$ret$12;
                    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                    var tmp3_contextualDecodingException = "Illegal escape '" + new Char(esChar) + "' when reading double quoted String";
                    tmp$ret$12 = contextualDecodingException$default(_this__u8e3s4, tmp3_contextualDecodingException, null, -1, null, 8, null);
                    throw tmp$ret$12;
                  }
                  var digitCount = tmp_1;
                  // Inline function 'kotlin.repeat' call
                  // Inline function 'kotlin.contracts.contract' call
                  var inductionVariable = 0;
                  if (inductionVariable < digitCount)
                    do {
                      var index = inductionVariable;
                      inductionVariable = inductionVariable + 1 | 0;
                      // Inline function 'net.mamoe.yamlkt.internal.readDoubleQuotedString.<anonymous>.<anonymous>' call
                      var tmp$ret$14;
                      $l$block: {
                        // Inline function 'net.mamoe.yamlkt.internal.useNext' call
                        var tmp$ret$13;
                        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
                        tmp$ret$13 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
                        if (tmp$ret$13) {
                          tmp$ret$14 = null;
                          break $l$block;
                        }
                        var tmp$ret$17;
                        // Inline function 'kotlin.let' call
                        var tmp_2 = _this__u8e3s4.get_source_jl0x7o_k$();
                        var tmp0_this_4 = _this__u8e3s4;
                        var tmp1_4 = tmp0_this_4.get_cur_18j7s9_k$();
                        tmp0_this_4.set_cur_j8oru5_k$(tmp1_4 + 1 | 0);
                        var tmp0_let = charSequenceGet(tmp_2, tmp1_4);
                        // Inline function 'kotlin.contracts.contract' call
                        var tmp$ret$15;
                        // Inline function 'net.mamoe.yamlkt.internal.isHexDigit' call
                        tmp$ret$15 = ((_Char___init__impl__6a9atx(48) <= tmp0_let ? tmp0_let <= _Char___init__impl__6a9atx(57) : false) ? true : _Char___init__impl__6a9atx(97) <= tmp0_let ? tmp0_let <= _Char___init__impl__6a9atx(102) : false) ? true : _Char___init__impl__6a9atx(65) <= tmp0_let ? tmp0_let <= _Char___init__impl__6a9atx(70) : false;
                        if (!tmp$ret$15) {
                          var tmp$ret$16;
                          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                          var tmp0_contextualDecodingException = "Expected hex digit but found '" + new Char(tmp0_let) + "'";
                          tmp$ret$16 = contextualDecodingException$default(_this__u8e3s4, tmp0_contextualDecodingException, null, -1, null, 8, null);
                          throw tmp$ret$16;
                        }
                        _this__u8e3s4.appendEsc_rxkzte_k$(tmp0_let);
                        tmp$ret$17 = Unit_getInstance();
                        tmp$ret$14 = tmp$ret$17;
                      }
                    }
                     while (inductionVariable < digitCount);
                  startCur = _this__u8e3s4.get_cur_18j7s9_k$();
                  _this__u8e3s4.flushEsc_xmwsjk_k$();
                }
              }
            }
          }
        }
      }
    }
    tmp$ret$18 = null;
    var tmp$ret$19;
    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
    tmp$ret$19 = contextualDecodingException$default(_this__u8e3s4, 'Unexpected EOF', null, -1, null, 8, null);
    throw tmp$ret$19;
  }
  function getQuotationAvailability(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    var tmp$ret$0;
    // Inline function 'kotlin.text.isEmpty' call
    tmp$ret$0 = charSequenceLength(_this__u8e3s4) === 0;
    if (tmp$ret$0) {
      return 5;
    }
    var canBeSingleQuoted = true;
    var canBeUnquoted = true;
    var doubleWithoutEscape = true;
    if (isWhitespace(first(_this__u8e3s4)) ? true : isWhitespace(last(_this__u8e3s4))) {
      canBeUnquoted = false;
    }
    var lastIsColon = false;
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last_0 = indexedObject.length;
    while (inductionVariable < last_0) {
      var c = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      if ((!doubleWithoutEscape ? !canBeSingleQuoted : false) ? !canBeUnquoted : false)
        return 0;
      else {
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
        tmp$ret$1 = equals(new Char(c), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(c), new Char(_Char___init__impl__6a9atx(13)));
        if (tmp$ret$1) {
          return 0;
        } else {
          var tmp;
          if (doubleWithoutEscape) {
            var tmp_0 = get_REPLACEMENT_CHARS();
            var tmp$ret$2;
            // Inline function 'kotlin.code' call
            tmp$ret$2 = Char__toInt_impl_vasixd(c);
            tmp = !(getOrNull(tmp_0, tmp$ret$2) == null);
          } else {
            tmp = false;
          }
          if (tmp) {
            doubleWithoutEscape = false;
          } else {
            if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(39)))) {
              canBeSingleQuoted = false;
              canBeUnquoted = false;
            } else {
              if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(34)))) {
                doubleWithoutEscape = false;
                canBeUnquoted = false;
              } else {
                if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(35))))
                  canBeUnquoted = false;
                else {
                  if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(58))))
                    lastIsColon = true;
                  else {
                    if (equals(new Char(c), new Char(_Char___init__impl__6a9atx(32))) ? lastIsColon : false)
                      canBeUnquoted = false;
                    else {
                      if (contains$default('[]{}"\'$^*|>-?/~', c, false, 2, null)) {
                        canBeUnquoted = false;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (lastIsColon)
      canBeUnquoted = false;
    return (canBeSingleQuoted ? 1 : 0) | (canBeUnquoted ? 2 : 0) | (doubleWithoutEscape ? 4 : 0);
  }
  function hasFlag(_this__u8e3s4, flag) {
    init_properties_Escape_kt_ll0njt();
    return !((_this__u8e3s4 & flag) === 0);
  }
  function get_SINGLE() {
    return SINGLE;
  }
  var SINGLE;
  function get_UNQUOTED() {
    return UNQUOTED;
  }
  var UNQUOTED;
  function get_DOUBLE_WITHOUT_ESCAPE() {
    return DOUBLE_WITHOUT_ESCAPE;
  }
  var DOUBLE_WITHOUT_ESCAPE;
  function toDoubleQuotedString(_this__u8e3s4, buf) {
    init_properties_Escape_kt_ll0njt();
    var tmp$ret$2;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.internal.toDoubleQuotedString.<anonymous>' call
    buf.append_y20c3x_k$(_Char___init__impl__6a9atx(34));
    var indexedObject = _this__u8e3s4;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var ch = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = get_REPLACEMENT_CHARS();
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(ch);
      var es = getOrNull(tmp, tmp$ret$0);
      if (!(es == null)) {
        buf.append_ng9zdk_k$(es, 0, es.length - 1 | 0);
      } else {
        buf.append_y20c3x_k$(ch);
      }
    }
    buf.append_y20c3x_k$(_Char___init__impl__6a9atx(34));
    tmp$ret$1 = buf.takeStringBuf_1s0a8r_k$();
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  }
  function runNewLineSkippingAndEscapingForUnquoted(_this__u8e3s4, initialIntent, addCaret) {
    init_properties_Escape_kt_ll0njt();
    var $this = _this__u8e3s4;
    var initialIntent_0 = initialIntent;
    var addCaret_0 = addCaret;
    $l$1: do {
      $l$0: do {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$0 = $this.get_cur_18j7s9_k$() === $this.get_source_jl0x7o_k$().length;
        if (tmp$ret$0)
          return true;
        var tmp$ret$3;
        // Inline function 'net.mamoe.yamlkt.internal.countSkipIf' call
        // Inline function 'kotlin.contracts.contract' call
        var start = $this.get_cur_18j7s9_k$();
        $l$loop_0: while (true) {
          var tmp$ret$1;
          // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
          tmp$ret$1 = $this.get_cur_18j7s9_k$() === $this.get_source_jl0x7o_k$().length;
          if (!!tmp$ret$1) {
            break $l$loop_0;
          }
          var tmp$ret$2;
          // Inline function 'net.mamoe.yamlkt.internal.runNewLineSkippingAndEscapingForUnquoted.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet($this.get_source_jl0x7o_k$(), $this.get_cur_18j7s9_k$());
          tmp$ret$2 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(32)));
          if (tmp$ret$2) {
            var tmp0_this = $this;
            var tmp1 = tmp0_this.get_cur_18j7s9_k$();
            tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
          } else {
            break $l$loop_0;
          }
        }
        tmp$ret$3 = $this.get_cur_18j7s9_k$() - start | 0;
        var newIntent = tmp$ret$3;
        if (newIntent <= initialIntent_0) {
          var tmp0_this_0 = $this;
          tmp0_this_0.set_cur_j8oru5_k$(tmp0_this_0.get_cur_18j7s9_k$() - newIntent | 0);
          return false;
        }
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$4 = $this.get_cur_18j7s9_k$() === $this.get_source_jl0x7o_k$().length;
        if (tmp$ret$4)
          return true;
        var next = charSequenceGet($this.get_source_jl0x7o_k$(), $this.get_cur_18j7s9_k$());
        var tmp;
        var tmp$ret$5;
        // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
        tmp$ret$5 = equals(new Char(next), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(next), new Char(_Char___init__impl__6a9atx(13)));
        if (tmp$ret$5) {
          var tmp1_this = $this;
          var tmp2 = tmp1_this.get_cur_18j7s9_k$();
          tmp1_this.set_cur_j8oru5_k$(tmp2 + 1 | 0);
          $this.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
          var tmp0 = $this;
          var tmp1_0 = initialIntent_0;
          var tmp2_0 = false;
          $this = tmp0;
          initialIntent_0 = tmp1_0;
          addCaret_0 = tmp2_0;
          continue $l$0;
        } else {
          if (addCaret_0) {
            $this.append_y20c3x_k$(_Char___init__impl__6a9atx(32));
          }
          tmp = true;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function runNewLineSkippingAndEscapingForUnquoted$default(_this__u8e3s4, initialIntent, addCaret, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      addCaret = true;
    return runNewLineSkippingAndEscapingForUnquoted(_this__u8e3s4, initialIntent, addCaret);
  }
  function readMultilineString(_this__u8e3s4, readLines) {
    init_properties_Escape_kt_ll0njt();
    var tmp0_container = takeChompCharacter(_this__u8e3s4);
    var trimEnd_0 = tmp0_container.component1_7eebsc_k$();
    var keepTrailingNewlines = tmp0_container.component2_7eebsb_k$();
    advanceToEndOfLineThrowIfNotWhitespace(_this__u8e3s4);
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (!tmp$ret$0) {
      var tmp1_this = _this__u8e3s4;
      var tmp2 = tmp1_this.get_cur_18j7s9_k$();
      tmp1_this.set_cur_j8oru5_k$(tmp2 + 1 | 0);
    }
    var tmp3_container = advanceToNextNonBlankLine(_this__u8e3s4);
    var firstLineIndent = tmp3_container.component1_7eebsc_k$();
    var prependedNewlineCount = tmp3_container.component2_7eebsb_k$();
    if (firstLineIndent < _this__u8e3s4.get_currentIndent_v1v68s_k$()) {
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$1 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!tmp$ret$1) {
        var tmp4_this = _this__u8e3s4;
        tmp4_this.set_cur_j8oru5_k$(tmp4_this.get_cur_18j7s9_k$() - (firstLineIndent + 1 | 0) | 0);
      }
      return _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
    }
    var inductionVariable = 0;
    if (inductionVariable < prependedNewlineCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
      }
       while (inductionVariable < prependedNewlineCount);
    readLines(_this__u8e3s4, firstLineIndent, keepTrailingNewlines);
    var tmp;
    if (trimEnd_0) {
      var tmp$ret$2;
      // Inline function 'kotlin.text.trimEnd' call
      var tmp0_trimEnd = _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
      tmp$ret$2 = toString(trimEnd(isCharSequence(tmp0_trimEnd) ? tmp0_trimEnd : THROW_CCE()));
      tmp = tmp$ret$2;
    } else if (keepTrailingNewlines) {
      tmp = _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.text.trimEnd' call
      var tmp1_trimEnd = _this__u8e3s4.takeStringBufTrimEnd_rcivb6_k$();
      tmp$ret$3 = toString(trimEnd(isCharSequence(tmp1_trimEnd) ? tmp1_trimEnd : THROW_CCE()));
      tmp = tmp$ret$3 + '\n';
    }
    return tmp;
  }
  function readLinesForMultilineLiteralString(_this__u8e3s4, foldingIndent, keepTrailingLines) {
    init_properties_Escape_kt_ll0njt();
    var lineNumber = 0;
    var currentLineIndent = foldingIndent;
    var previousLineBlank = true;
    var trailingBlankLines = 0;
    $l$loop: while (true) {
      var tmp;
      if (currentLineIndent >= foldingIndent) {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
        tmp = !tmp$ret$0;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      readLineForMultilineLiteralString(_this__u8e3s4, lineNumber, foldingIndent, currentLineIndent, previousLineBlank);
      var tmp0_container = advanceToNextNonBlankLine(_this__u8e3s4);
      var nextIndent = tmp0_container.component1_7eebsc_k$();
      var blankLineCount = tmp0_container.component2_7eebsb_k$();
      previousLineBlank = blankLineCount > 0;
      trailingBlankLines = blankLineCount;
      currentLineIndent = nextIndent;
      var inductionVariable = 0;
      if (inductionVariable < blankLineCount)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
        }
         while (inductionVariable < blankLineCount);
      var tmp2 = lineNumber;
      lineNumber = tmp2 + 1 | 0;
    }
    finishMultilineString(_this__u8e3s4, foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines);
  }
  function readLinesForMultilineFoldedString(_this__u8e3s4, foldingIndent, keepTrailingLines) {
    init_properties_Escape_kt_ll0njt();
    var lineNumber = 0;
    var currentLineIndent = foldingIndent;
    var previousLineBlank = true;
    var trailingBlankLines = 0;
    $l$loop: while (true) {
      var tmp;
      if (currentLineIndent >= foldingIndent) {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
        tmp = !tmp$ret$0;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      readLineForMultilineFoldedString(_this__u8e3s4, lineNumber, foldingIndent, currentLineIndent, previousLineBlank);
      var tmp0_container = advanceToNextNonBlankLine(_this__u8e3s4);
      var nextIndent = tmp0_container.component1_7eebsc_k$();
      var blankLineCount = tmp0_container.component2_7eebsb_k$();
      previousLineBlank = blankLineCount > 0;
      trailingBlankLines = blankLineCount;
      currentLineIndent = nextIndent;
      if (blankLineCount > 0) {
        _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
      }
      var tmp1 = lineNumber;
      lineNumber = tmp1 + 1 | 0;
    }
    finishMultilineString(_this__u8e3s4, foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines);
  }
  function runNewLineSkippingAndEscaping(_this__u8e3s4, addCaret) {
    init_properties_Escape_kt_ll0njt();
    var $this = _this__u8e3s4;
    var addCaret_0 = addCaret;
    $l$1: do {
      $l$0: do {
        // Inline function 'net.mamoe.yamlkt.internal.ensureNotEOF' call
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$0 = $this.get_cur_18j7s9_k$() === $this.get_source_jl0x7o_k$().length;
        if (tmp$ret$0) {
          var tmp$ret$1;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          var tmp = $this;
          tmp$ret$1 = contextualDecodingException$default(tmp, 'Unexpected EOF', null, -1, null, 8, null);
          throw tmp$ret$1;
        }
        // Inline function 'net.mamoe.yamlkt.internal.skipIf' call
        // Inline function 'kotlin.contracts.contract' call
        $l$loop_0: while (true) {
          var tmp$ret$2;
          // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
          tmp$ret$2 = $this.get_cur_18j7s9_k$() === $this.get_source_jl0x7o_k$().length;
          if (!!tmp$ret$2) {
            break $l$loop_0;
          }
          var tmp$ret$3;
          // Inline function 'net.mamoe.yamlkt.internal.runNewLineSkippingAndEscaping.<anonymous>' call
          var tmp0__anonymous__q1qw7t = charSequenceGet($this.get_source_jl0x7o_k$(), $this.get_cur_18j7s9_k$());
          tmp$ret$3 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(32)));
          if (tmp$ret$3) {
            var tmp0_this = $this;
            var tmp1 = tmp0_this.get_cur_18j7s9_k$();
            tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
          } else {
            break $l$loop_0;
          }
        }
        // Inline function 'net.mamoe.yamlkt.internal.ensureNotEOF' call
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$4 = $this.get_cur_18j7s9_k$() === $this.get_source_jl0x7o_k$().length;
        if (tmp$ret$4) {
          var tmp$ret$5;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          var tmp_0 = $this;
          tmp$ret$5 = contextualDecodingException$default(tmp_0, 'Unexpected EOF', null, -1, null, 8, null);
          throw tmp$ret$5;
        }
        var next = charSequenceGet($this.get_source_jl0x7o_k$(), $this.get_cur_18j7s9_k$());
        var tmp$ret$6;
        // Inline function 'net.mamoe.yamlkt.internal.isLineSeparator' call
        tmp$ret$6 = equals(new Char(next), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(next), new Char(_Char___init__impl__6a9atx(13)));
        if (tmp$ret$6) {
          var tmp0_this_0 = $this;
          var tmp1_0 = tmp0_this_0.get_cur_18j7s9_k$();
          tmp0_this_0.set_cur_j8oru5_k$(tmp1_0 + 1 | 0);
          $this.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
          var tmp0 = $this;
          var tmp1_1 = false;
          $this = tmp0;
          addCaret_0 = tmp1_1;
          continue $l$0;
        } else {
          if (addCaret_0) {
            $this.append_y20c3x_k$(_Char___init__impl__6a9atx(32));
          }
          return Unit_getInstance();
        }
        break $l$1;
      }
       while (false);
    }
     while (true);
  }
  function runNewLineSkippingAndEscaping$default(_this__u8e3s4, addCaret, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      addCaret = true;
    return runNewLineSkippingAndEscaping(_this__u8e3s4, addCaret);
  }
  function get_STRING_ESC() {
    return STRING_ESC;
  }
  var STRING_ESC;
  function ensureNotEOF(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (tmp$ret$0) {
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      tmp$ret$1 = contextualDecodingException$default(_this__u8e3s4, 'Unexpected EOF', null, -1, null, 8, null);
      throw tmp$ret$1;
    }
  }
  function escapeToChar(c) {
    init_properties_Escape_kt_ll0njt();
    return c < 117 ? EscapeCharMappings_getInstance().ESCAPE_2_CHAR_1[c] : _Char___init__impl__6a9atx(0);
  }
  function get_INVALID() {
    return INVALID;
  }
  var INVALID;
  function useNext(_this__u8e3s4, block) {
    init_properties_Escape_kt_ll0njt();
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (tmp$ret$0)
      return null;
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp = _this__u8e3s4.get_source_jl0x7o_k$();
    var tmp0_this = _this__u8e3s4;
    var tmp1 = tmp0_this.get_cur_18j7s9_k$();
    tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
    var tmp0_let = charSequenceGet(tmp, tmp1);
    // Inline function 'kotlin.contracts.contract' call
    tmp$ret$1 = block(new Char(tmp0_let));
    return tmp$ret$1;
  }
  function isHexDigit(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    return ((_Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false) ? true : _Char___init__impl__6a9atx(97) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(102) : false) ? true : _Char___init__impl__6a9atx(65) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(70) : false;
  }
  function takeChompCharacter(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    var tmp;
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (!tmp$ret$0) {
      tmp = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
    } else {
      tmp = _Char___init__impl__6a9atx(10);
    }
    var startChar = tmp;
    var trimEnd = equals(new Char(startChar), new Char(_Char___init__impl__6a9atx(45)));
    var keepTrailingNewlines = equals(new Char(startChar), new Char(_Char___init__impl__6a9atx(43)));
    if (keepTrailingNewlines ? true : trimEnd) {
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.get_cur_18j7s9_k$();
      tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
    }
    return new Pair(trimEnd, keepTrailingNewlines);
  }
  function advanceToEndOfLineThrowIfNotWhitespace(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    $l$loop: while (true) {
      var tmp;
      var tmp_0;
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!tmp$ret$0) {
        tmp_0 = equals(new Char(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$())), new Char(_Char___init__impl__6a9atx(32)));
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = !equals(new Char(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$())), new Char(_Char___init__impl__6a9atx(10)));
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.get_cur_18j7s9_k$();
      tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
    }
    var tmp_1;
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$1 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (!tmp$ret$1) {
      tmp_1 = !equals(new Char(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$())), new Char(_Char___init__impl__6a9atx(10)));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      tmp$ret$2 = contextualDecodingException$default(_this__u8e3s4, "Only whitespace allowed after '>'", null, -1, null, 8, null);
      throw tmp$ret$2;
    }
  }
  function advanceToNextNonBlankLine(_this__u8e3s4) {
    init_properties_Escape_kt_ll0njt();
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.countSkipIf' call
    // Inline function 'kotlin.contracts.contract' call
    var start = _this__u8e3s4.get_cur_18j7s9_k$();
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!!tmp$ret$0) {
        break $l$loop_0;
      }
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.advanceToNextNonBlankLine.<anonymous>' call
      var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
      tmp$ret$1 = equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(32)));
      if (tmp$ret$1) {
        var tmp0_this = _this__u8e3s4;
        var tmp1 = tmp0_this.get_cur_18j7s9_k$();
        tmp0_this.set_cur_j8oru5_k$(tmp1 + 1 | 0);
      } else {
        break $l$loop_0;
      }
    }
    tmp$ret$2 = _this__u8e3s4.get_cur_18j7s9_k$() - start | 0;
    var lineIndent = tmp$ret$2;
    var prependedNewlineCount = 0;
    $l$loop_1: while (true) {
      var tmp;
      var tmp$ret$3;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$3 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!tmp$ret$3) {
        tmp = equals(new Char(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$())), new Char(_Char___init__impl__6a9atx(10)));
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop_1;
      }
      var tmp0 = prependedNewlineCount;
      prependedNewlineCount = tmp0 + 1 | 0;
      var tmp1_this = _this__u8e3s4;
      var tmp2 = tmp1_this.get_cur_18j7s9_k$();
      tmp1_this.set_cur_j8oru5_k$(tmp2 + 1 | 0);
      var tmp$ret$6;
      // Inline function 'net.mamoe.yamlkt.internal.countSkipIf' call
      // Inline function 'kotlin.contracts.contract' call
      var start_0 = _this__u8e3s4.get_cur_18j7s9_k$();
      $l$loop_3: while (true) {
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
        tmp$ret$4 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
        if (!!tmp$ret$4) {
          break $l$loop_3;
        }
        var tmp$ret$5;
        // Inline function 'net.mamoe.yamlkt.internal.advanceToNextNonBlankLine.<anonymous>' call
        var tmp1__anonymous__uwfjfc = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$());
        tmp$ret$5 = equals(new Char(tmp1__anonymous__uwfjfc), new Char(_Char___init__impl__6a9atx(32)));
        if (tmp$ret$5) {
          var tmp0_this_0 = _this__u8e3s4;
          var tmp1_0 = tmp0_this_0.get_cur_18j7s9_k$();
          tmp0_this_0.set_cur_j8oru5_k$(tmp1_0 + 1 | 0);
        } else {
          break $l$loop_3;
        }
      }
      tmp$ret$6 = _this__u8e3s4.get_cur_18j7s9_k$() - start_0 | 0;
      lineIndent = tmp$ret$6;
    }
    return new Pair(lineIndent, prependedNewlineCount);
  }
  function readLineForMultilineLiteralString(_this__u8e3s4, lineNumber, foldingIndent, lineIndent, previousLineBlank) {
    init_properties_Escape_kt_ll0njt();
    var lineStart = _this__u8e3s4.get_cur_18j7s9_k$();
    var lineLength = 0;
    $l$loop: while (true) {
      var tmp;
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!tmp$ret$0) {
        tmp = !equals(new Char(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$())), new Char(_Char___init__impl__6a9atx(10)));
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0 = lineLength;
      lineLength = tmp0 + 1 | 0;
      var tmp1_this = _this__u8e3s4;
      var tmp2 = tmp1_this.get_cur_18j7s9_k$();
      tmp1_this.set_cur_j8oru5_k$(tmp2 + 1 | 0);
    }
    if (lineNumber > 0) {
      _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
      if (lineIndent > foldingIndent) {
        var inductionVariable = lineIndent;
        var last = foldingIndent + 1 | 0;
        if (last <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(32));
          }
           while (!(i === last));
      }
    }
    if (lineLength > 0) {
      _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), lineStart, _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0);
    }
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$1 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (!tmp$ret$1) {
      var tmp4_this = _this__u8e3s4;
      var tmp5 = tmp4_this.get_cur_18j7s9_k$();
      tmp4_this.set_cur_j8oru5_k$(tmp5 + 1 | 0);
    }
    return lineLength;
  }
  function finishMultilineString(_this__u8e3s4, foldingIndent, currentLineIndent, lineNumber, keepTrailingLines, trailingBlankLines) {
    init_properties_Escape_kt_ll0njt();
    if (keepTrailingLines) {
      var inductionVariable = 0;
      if (inductionVariable < trailingBlankLines)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
        }
         while (inductionVariable < trailingBlankLines);
    }
    if (lineNumber > 0 ? currentLineIndent >= foldingIndent : false) {
      _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
    }
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (!tmp$ret$0) {
      var tmp1_this = _this__u8e3s4;
      tmp1_this.set_cur_j8oru5_k$(tmp1_this.get_cur_18j7s9_k$() - (currentLineIndent + 1 | 0) | 0);
    }
  }
  function readLineForMultilineFoldedString(_this__u8e3s4, lineNumber, foldingIndent, lineIndent, previousLineBlank) {
    init_properties_Escape_kt_ll0njt();
    var lineStart = _this__u8e3s4.get_cur_18j7s9_k$();
    var lineLength = 0;
    $l$loop: while (true) {
      var tmp;
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (!tmp$ret$0) {
        tmp = !equals(new Char(charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$())), new Char(_Char___init__impl__6a9atx(10)));
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      var tmp0 = lineLength;
      lineLength = tmp0 + 1 | 0;
      var tmp1_this = _this__u8e3s4;
      var tmp2 = tmp1_this.get_cur_18j7s9_k$();
      tmp1_this.set_cur_j8oru5_k$(tmp2 + 1 | 0);
    }
    if (lineNumber > 0) {
      if (lineIndent > foldingIndent) {
        _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(10));
        var inductionVariable = lineIndent;
        var last = foldingIndent + 1 | 0;
        if (last <= inductionVariable)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(32));
          }
           while (!(i === last));
      } else {
        if (lineLength > 0 ? !previousLineBlank : false) {
          _this__u8e3s4.append_y20c3x_k$(_Char___init__impl__6a9atx(32));
        }
      }
    }
    if (lineLength > 0) {
      _this__u8e3s4.append_ng9zdk_k$(_this__u8e3s4.get_source_jl0x7o_k$(), lineStart, _this__u8e3s4.get_cur_18j7s9_k$() - 1 | 0);
    }
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
    tmp$ret$1 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
    if (!tmp$ret$1) {
      var tmp4_this = _this__u8e3s4;
      var tmp5 = tmp4_this.get_cur_18j7s9_k$();
      tmp4_this.set_cur_j8oru5_k$(tmp5 + 1 | 0);
    }
    return lineLength;
  }
  function get_ESC2C_MAX() {
    return ESC2C_MAX;
  }
  var ESC2C_MAX;
  function initC2ESC($this, c, esc) {
    if (!equals(new Char(esc), new Char(_Char___init__impl__6a9atx(117)))) {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.ESCAPE_2_CHAR_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    var tmp$ret$0;
    // Inline function 'kotlin.code' call
    tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function EscapeCharMappings() {
    EscapeCharMappings_instance = this;
    this.ESCAPE_2_CHAR_1 = charArray(117);
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC(this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC(this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC(this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC(this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC(this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC(this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0(this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0(this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0(this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  EscapeCharMappings.prototype.get_ESCAPE_2_CHAR_5c0exk_k$ = function () {
    return this.ESCAPE_2_CHAR_1;
  };
  var EscapeCharMappings_instance;
  function EscapeCharMappings_getInstance() {
    if (EscapeCharMappings_instance == null)
      new EscapeCharMappings();
    return EscapeCharMappings_instance;
  }
  function get_UNICODE_ESC() {
    return UNICODE_ESC;
  }
  var UNICODE_ESC;
  function get_STRING() {
    return STRING;
  }
  var STRING;
  function readUnquotedString$doEnd(escapedOnce, $this_readUnquotedString, startCur) {
    if (!escapedOnce._v) {
      return $this_readUnquotedString.subSourceTrimEnd_tud8le_k$(startCur._v, $this_readUnquotedString.get_cur_18j7s9_k$() - 1 | 0);
    }
    $this_readUnquotedString.append_ng9zdk_k$($this_readUnquotedString.get_source_jl0x7o_k$(), startCur._v, $this_readUnquotedString.get_cur_18j7s9_k$() - 2 | 0);
    return $this_readUnquotedString.takeStringBufTrimEnd_rcivb6_k$();
  }
  function readLinesForMultilineLiteralString$ref() {
    var l = function (p0, p1, p2) {
      readLinesForMultilineLiteralString(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'readLinesForMultilineLiteralString';
    return l;
  }
  function readLinesForMultilineFoldedString$ref() {
    var l = function (p0, p1, p2) {
      readLinesForMultilineFoldedString(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'readLinesForMultilineFoldedString';
    return l;
  }
  function readLinesForMultilineLiteralString$ref_0() {
    var l = function (p0, p1, p2) {
      readLinesForMultilineLiteralString(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'readLinesForMultilineLiteralString';
    return l;
  }
  function readLinesForMultilineFoldedString$ref_0() {
    var l = function (p0, p1, p2) {
      readLinesForMultilineFoldedString(p0, p1, p2);
      return Unit_getInstance();
    };
    l.callableName = 'readLinesForMultilineFoldedString';
    return l;
  }
  var properties_initialized_Escape_kt_ebzbfn;
  function init_properties_Escape_kt_ll0njt() {
    if (properties_initialized_Escape_kt_ebzbfn) {
    } else {
      properties_initialized_Escape_kt_ebzbfn = true;
      var tmp$ret$7;
      // Inline function 'kotlin.apply' call
      var tmp$ret$0;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp$ret$0 = fillArrayVal(Array(128), null);
      var tmp0_apply = tmp$ret$0;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'net.mamoe.yamlkt.internal.REPLACEMENT_CHARS.<anonymous>' call
      var inductionVariable = 0;
      if (inductionVariable <= 15)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          tmp0_apply[i] = '\\u000' + i;
        }
         while (inductionVariable <= 15);
      var inductionVariable_0 = 16;
      if (inductionVariable_0 <= 31)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          tmp0_apply[i_0] = '\\u00' + i_0;
        }
         while (inductionVariable_0 <= 31);
      var tmp$ret$1;
      // Inline function 'kotlin.code' call
      tmp$ret$1 = 34;
      tmp0_apply[tmp$ret$1] = '\\"';
      var tmp$ret$2;
      // Inline function 'kotlin.code' call
      tmp$ret$2 = 92;
      tmp0_apply[tmp$ret$2] = '\\\\';
      var tmp$ret$3;
      // Inline function 'kotlin.code' call
      tmp$ret$3 = 9;
      tmp0_apply[tmp$ret$3] = '\\t';
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      tmp$ret$4 = 8;
      tmp0_apply[tmp$ret$4] = '\\b';
      var tmp$ret$5;
      // Inline function 'kotlin.code' call
      tmp$ret$5 = 10;
      tmp0_apply[tmp$ret$5] = '\\n';
      var tmp$ret$6;
      // Inline function 'kotlin.code' call
      tmp$ret$6 = 13;
      tmp0_apply[tmp$ret$6] = '\\r';
      tmp0_apply[12] = '\\f';
      tmp$ret$7 = tmp0_apply;
      REPLACEMENT_CHARS = tmp$ret$7;
    }
  }
  function _get_writer__6q3d3c($this) {
    return $this.writer_1;
  }
  function _get_encoder__7kiwsr($this) {
    return $this.encoder_1;
  }
  function InlineEncoder(writer, encoder, serializersModule) {
    this.writer_1 = writer;
    this.encoder_1 = encoder;
    this.serializersModule_1 = serializersModule;
  }
  InlineEncoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  InlineEncoder.prototype.beginCollection_dgpn47_k$ = function (descriptor, collectionSize) {
    return this.encoder_1.beginCollection_dgpn47_k$(descriptor, collectionSize);
  };
  InlineEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this.encoder_1.beginStructure_dv3yt3_k$(descriptor);
  };
  InlineEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    this.encoder_1.encodeBoolean_6cztl5_k$(value);
  };
  InlineEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    this.encoder_1.encodeChar_kkx54x_k$(value);
  };
  InlineEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    this.encoder_1.encodeDouble_79ztsb_k$(value);
  };
  InlineEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    this.encoder_1.encodeEnum_dzauii_k$(enumDescriptor, index);
  };
  InlineEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    this.encoder_1.encodeFloat_f5fde1_k$(value);
  };
  InlineEncoder.prototype.encodeInline_8gn4q6_k$ = function (inlineDescriptor) {
    return this.encoder_1.encodeInline_8gn4q6_k$(inlineDescriptor);
  };
  InlineEncoder.prototype.encodeNotNullMark_40lhgg_k$ = function () {
    this.encoder_1.encodeNotNullMark_40lhgg_k$();
  };
  InlineEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    this.encoder_1.encodeNull_ek2hec_k$();
  };
  InlineEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = function (serializer, value) {
    this.encoder_1.encodeNullableSerializableValue_4n8qik_k$(serializer, value);
  };
  InlineEncoder.prototype.encodeSerializableValue_g55msp_k$ = function (serializer, value) {
    this.encoder_1.encodeSerializableValue_g55msp_k$(serializer, value);
  };
  InlineEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    this.encoder_1.encodeString_90sumj_k$(value);
  };
  InlineEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    var tmp1_write = UInt__toString_impl_dbgl21(tmp$ret$0);
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  InlineEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    var tmp1_write = ULong__toString_impl_f9au7k(tmp$ret$0);
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  InlineEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    var tmp1_write = UByte__toString_impl_v72jg(tmp$ret$0);
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  InlineEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(value);
    var tmp1_write = UShort__toString_impl_edaoee(tmp$ret$0);
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  function _get_delegate__idh0py($this) {
    return $this.delegate_1;
  }
  function InlineDecoder(delegate) {
    this.delegate_1 = delegate;
  }
  InlineDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this.delegate_1.beginStructure_dv3yt3_k$(descriptor);
  };
  InlineDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    return this.delegate_1.decodeBoolean_m0aca_k$();
  };
  InlineDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    return this.delegate_1.decodeChar_dc2jtx_k$();
  };
  InlineDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    return this.delegate_1.decodeDouble_ur8l0f_k$();
  };
  InlineDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return this.delegate_1.decodeEnum_w3hzf6_k$(enumDescriptor);
  };
  InlineDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    return this.delegate_1.decodeFloat_jcnrwu_k$();
  };
  InlineDecoder.prototype.decodeInline_k1q7ba_k$ = function (inlineDescriptor) {
    return this.delegate_1.decodeInline_k1q7ba_k$(inlineDescriptor);
  };
  InlineDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return this.delegate_1.decodeNotNullMark_us4ba1_k$();
  };
  InlineDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return this.delegate_1.decodeNull_jzrmuj_k$();
  };
  InlineDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = function (deserializer) {
    return this.delegate_1.decodeNullableSerializableValue_f10m3r_k$(deserializer);
  };
  InlineDecoder.prototype.decodeSerializableValue_6v83lo_k$ = function (deserializer) {
    return this.delegate_1.decodeSerializableValue_6v83lo_k$(deserializer);
  };
  InlineDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    return this.delegate_1.decodeString_x3hxsx_k$();
  };
  InlineDecoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.delegate_1.get_serializersModule_piitvg_k$();
  };
  InlineDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.delegate_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineDecoder.decodeByte.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = tmp0_run.withIntegerValue_w988yz_k$(tmp0_run.decodeString_x3hxsx_k$(), 'UByte', null, -1);
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte.toByte_edm0nx_k$());
    var tmp1_toByte = tmp$ret$0;
    tmp$ret$1 = _UByte___get_data__impl__jof9qr(tmp1_toByte);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  InlineDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.delegate_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineDecoder.decodeShort.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = tmp0_run.withIntegerValue_w988yz_k$(tmp0_run.decodeString_x3hxsx_k$(), 'UShort', null, -1);
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort.toShort_ja8oqn_k$());
    var tmp1_toShort = tmp$ret$0;
    tmp$ret$1 = _UShort___get_data__impl__g0245(tmp1_toShort);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  InlineDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.delegate_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineDecoder.decodeInt.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = tmp0_run.withIntegerValue_w988yz_k$(tmp0_run.decodeString_x3hxsx_k$(), 'UInt', null, -1);
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp1_toInt);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  InlineDecoder.prototype.decodeLong_jzt186_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.delegate_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineDecoder.decodeLong.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = tmp0_run.withIntegerValue_w988yz_k$(tmp0_run.decodeString_x3hxsx_k$(), 'ULong', null, -1);
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    var tmp1_toLong = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toLong);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  function _get_yamlDecoder__alwntg($this) {
    return $this.yamlDecoder_1;
  }
  function _get_compositeDecoder__5z78oe($this) {
    return $this.compositeDecoder_1;
  }
  function _get_descriptor__bbb664($this) {
    return $this.descriptor_1;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function InlineElementDecoder(yamlDecoder, compositeDecoder, descriptor, index) {
    this.yamlDecoder_1 = yamlDecoder;
    this.compositeDecoder_1 = compositeDecoder;
    this.descriptor_1 = descriptor;
    this.index_1 = index;
  }
  InlineElementDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this.compositeDecoder_1.beginStructure_dv3yt3_k$(descriptor);
  };
  InlineElementDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    return this.compositeDecoder_1.decodeBoolean_m0aca_k$();
  };
  InlineElementDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    return this.compositeDecoder_1.decodeChar_dc2jtx_k$();
  };
  InlineElementDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    return this.compositeDecoder_1.decodeDouble_ur8l0f_k$();
  };
  InlineElementDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return this.compositeDecoder_1.decodeEnum_w3hzf6_k$(enumDescriptor);
  };
  InlineElementDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    return this.compositeDecoder_1.decodeFloat_jcnrwu_k$();
  };
  InlineElementDecoder.prototype.decodeInline_k1q7ba_k$ = function (inlineDescriptor) {
    return this.compositeDecoder_1.decodeInline_k1q7ba_k$(inlineDescriptor);
  };
  InlineElementDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return this.compositeDecoder_1.decodeNotNullMark_us4ba1_k$();
  };
  InlineElementDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    return this.compositeDecoder_1.decodeNull_jzrmuj_k$();
  };
  InlineElementDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = function (deserializer) {
    return this.compositeDecoder_1.decodeNullableSerializableValue_f10m3r_k$(deserializer);
  };
  InlineElementDecoder.prototype.decodeSerializableValue_6v83lo_k$ = function (deserializer) {
    return this.compositeDecoder_1.decodeSerializableValue_6v83lo_k$(deserializer);
  };
  InlineElementDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    return this.compositeDecoder_1.decodeString_x3hxsx_k$();
  };
  InlineElementDecoder.prototype.decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeBooleanElement_3vswy_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeByteElement_76b0gq_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeCharElement_pg5vs7_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = function (descriptor) {
    return this.compositeDecoder_1.decodeCollectionSize_cd6i6s_k$(descriptor);
  };
  InlineElementDecoder.prototype.decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeDoubleElement_42w6gz_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeFloatElement_nl5jiq_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeInlineElement_ddno8l_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeInlineElement_ddno8l_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeIntElement_cmpvet_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeLongElement_kyznym_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeNullableSerializableElement_1n5pmg_k$ = function (descriptor, index, deserializer, previousValue) {
    return this.compositeDecoder_1.decodeNullableSerializableElement_1n5pmg_k$(descriptor, index, deserializer, previousValue);
  };
  InlineElementDecoder.prototype.decodeSequentially_xlblqy_k$ = function () {
    return this.compositeDecoder_1.decodeSequentially_xlblqy_k$();
  };
  InlineElementDecoder.prototype.decodeSerializableElement_nrfur_k$ = function (descriptor, index, deserializer, previousValue) {
    return this.compositeDecoder_1.decodeSerializableElement_nrfur_k$(descriptor, index, deserializer, previousValue);
  };
  InlineElementDecoder.prototype.decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeShortElement_zjkfm_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return this.compositeDecoder_1.decodeStringElement_4is7ib_k$(descriptor, index);
  };
  InlineElementDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    this.compositeDecoder_1.endStructure_e64gd4_k$(descriptor);
  };
  InlineElementDecoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.yamlDecoder_1.get_serializersModule_piitvg_k$();
  };
  InlineElementDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    throw UnsupportedOperationException_init_$Create$('InlineDecoder.decodeElementIndex');
  };
  InlineElementDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.yamlDecoder_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineElementDecoder.decodeByte.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.UByte.toByte' call
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    var tmp0_toUByte = tmp0_run.withIntegerValue_w988yz_k$(this.compositeDecoder_1.decodeStringElement_4is7ib_k$(this.descriptor_1, this.index_1), 'UByte', null, -1);
    tmp$ret$0 = _UByte___init__impl__g9hnc4(tmp0_toUByte.toByte_edm0nx_k$());
    var tmp1_toByte = tmp$ret$0;
    tmp$ret$1 = _UByte___get_data__impl__jof9qr(tmp1_toByte);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  InlineElementDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.yamlDecoder_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineElementDecoder.decodeShort.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.UShort.toShort' call
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    var tmp0_toUShort = tmp0_run.withIntegerValue_w988yz_k$(this.compositeDecoder_1.decodeStringElement_4is7ib_k$(this.descriptor_1, this.index_1), 'UShort', null, -1);
    tmp$ret$0 = _UShort___init__impl__jigrne(tmp0_toUShort.toShort_ja8oqn_k$());
    var tmp1_toShort = tmp$ret$0;
    tmp$ret$1 = _UShort___get_data__impl__g0245(tmp1_toShort);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  InlineElementDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.yamlDecoder_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineElementDecoder.decodeInt.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = tmp0_run.withIntegerValue_w988yz_k$(this.compositeDecoder_1.decodeStringElement_4is7ib_k$(this.descriptor_1, this.index_1), 'UInt', null, -1);
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt.toInt_1tsl84_k$());
    var tmp1_toInt = tmp$ret$0;
    tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp1_toInt);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  InlineElementDecoder.prototype.decodeLong_jzt186_k$ = function () {
    var tmp$ret$3;
    // Inline function 'kotlin.run' call
    var tmp0_run = this.yamlDecoder_1;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$2;
    // Inline function 'net.mamoe.yamlkt.internal.InlineElementDecoder.decodeLong.<anonymous>' call
    var tmp$ret$1;
    // Inline function 'kotlin.ULong.toLong' call
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    var tmp0_toULong = tmp0_run.withIntegerValue_w988yz_k$(this.compositeDecoder_1.decodeStringElement_4is7ib_k$(this.descriptor_1, this.index_1), 'ULong', null, -1);
    tmp$ret$0 = _ULong___init__impl__c78o9k(tmp0_toULong);
    var tmp1_toLong = tmp$ret$0;
    tmp$ret$1 = _ULong___get_data__impl__fggpzb(tmp1_toLong);
    tmp$ret$2 = tmp$ret$1;
    tmp$ret$3 = tmp$ret$2;
    return tmp$ret$3;
  };
  function get___values__init() {
    init_properties_TokenStream_kt_hu9fej();
    return __values__init;
  }
  var __values__init;
  function _get_valuesLastIndex__qot761($this) {
    return $this.valuesLastIndex_1;
  }
  var Token_COMMA_instance;
  var Token_COLON_instance;
  var Token_MULTILINE_LIST_FLAG_instance;
  var Token_LIST_BEGIN_instance;
  var Token_LIST_END_instance;
  var Token_MAP_BEGIN_instance;
  var Token_MAP_END_instance;
  var Token_STRING_instance;
  var Token_STRING_NULL_instance;
  function Companion_4() {
    Companion_instance_4 = this;
    this.values_1 = get___values__init();
    this.valuesLastIndex_1 = _Char___init__impl__6a9atx(125);
  }
  Companion_4.prototype.get_values_ksazhn_k$ = function () {
    return this.values_1;
  };
  Companion_4.prototype.get_ecbl0m_k$ = function (char) {
    var tmp;
    if (Char__compareTo_impl_ypi4mb(char, _Char___init__impl__6a9atx(125)) > 0) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.code' call
      tmp$ret$0 = Char__toInt_impl_vasixd(char);
      tmp = this.values_1[tmp$ret$0];
    }
    return tmp;
  };
  var Companion_instance_4;
  function Companion_getInstance_8() {
    Token_initEntries();
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function values_3() {
    return [Token_COMMA_getInstance(), Token_COLON_getInstance(), Token_MULTILINE_LIST_FLAG_getInstance(), Token_LIST_BEGIN_getInstance(), Token_LIST_END_getInstance(), Token_MAP_BEGIN_getInstance(), Token_MAP_END_getInstance(), Token_STRING_getInstance(), Token_STRING_NULL_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'COMMA':
        return Token_COMMA_getInstance();
      case 'COLON':
        return Token_COLON_getInstance();
      case 'MULTILINE_LIST_FLAG':
        return Token_MULTILINE_LIST_FLAG_getInstance();
      case 'LIST_BEGIN':
        return Token_LIST_BEGIN_getInstance();
      case 'LIST_END':
        return Token_LIST_END_getInstance();
      case 'MAP_BEGIN':
        return Token_MAP_BEGIN_getInstance();
      case 'MAP_END':
        return Token_MAP_END_getInstance();
      case 'STRING':
        return Token_STRING_getInstance();
      case 'STRING_NULL':
        return Token_STRING_NULL_getInstance();
      default:
        Token_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Token_entriesInitialized;
  function Token_initEntries() {
    if (Token_entriesInitialized)
      return Unit_getInstance();
    Token_entriesInitialized = true;
    Token_COMMA_instance = new Token('COMMA', 0, _Char___init__impl__6a9atx(44));
    Token_COLON_instance = new Token('COLON', 1, _Char___init__impl__6a9atx(58));
    Token_MULTILINE_LIST_FLAG_instance = new Token('MULTILINE_LIST_FLAG', 2, _Char___init__impl__6a9atx(45));
    Token_LIST_BEGIN_instance = new Token('LIST_BEGIN', 3, _Char___init__impl__6a9atx(91));
    Token_LIST_END_instance = new Token('LIST_END', 4, _Char___init__impl__6a9atx(93));
    Token_MAP_BEGIN_instance = new Token('MAP_BEGIN', 5, _Char___init__impl__6a9atx(123));
    Token_MAP_END_instance = new Token('MAP_END', 6, _Char___init__impl__6a9atx(125));
    Token_STRING_instance = new Token('STRING', 7, _Char___init__impl__6a9atx(32));
    Token_STRING_NULL_instance = new Token('STRING_NULL', 8, _Char___init__impl__6a9atx(32));
    Companion_getInstance_8();
  }
  function Token(name, ordinal, value) {
    Enum.call(this, name, ordinal);
    this.value_1 = value;
  }
  Token.prototype.get_value_i6jr5j_k$ = function () {
    return this.value_1;
  };
  function _get_reuseTokenStack__7xcu9e($this) {
    return $this.reuseTokenStack_1;
  }
  function prepareStringAndNextToken($this, stopOnComma, begin) {
    var tmp0_subject = begin;
    var tmp;
    if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(39)))) {
      $this.quoted_1 = true;
      tmp = readSingleQuotedString($this);
    } else if (equals(new Char(tmp0_subject), new Char(_Char___init__impl__6a9atx(34)))) {
      $this.quoted_1 = true;
      tmp = readDoubleQuotedString($this);
    } else {
      $this.quoted_1 = false;
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.optimizeNull' call
      var tmp0_optimizeNull = readUnquotedString($this, stopOnComma, begin);
      var tmp0_subject_0 = tmp0_optimizeNull;
      switch (tmp0_subject_0) {
        case '~':
        case 'null':
        case 'NULL':
          tmp$ret$0 = null;
          break;
        default:
          tmp$ret$0 = tmp0_optimizeNull;
          break;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function TokenStream(source) {
    StringBufHolder.call(this);
    this.source_1 = source;
    this.cur_1 = 0;
    this.currentIndent_1 = 0;
    this.leadingSpace_1 = 0;
    this.strBuff_1 = null;
    this.quoted_1 = false;
    this.newLined_1 = false;
    this.escapeCount_1 = 0;
    this.escapeBuff_1 = charArray(16);
    this.reuseTokenStack_1 = new Stack();
  }
  TokenStream.prototype.get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  TokenStream.prototype.set_cur_j8oru5_k$ = function (_set____db54di) {
    this.cur_1 = _set____db54di;
  };
  TokenStream.prototype.get_cur_18j7s9_k$ = function () {
    return this.cur_1;
  };
  TokenStream.prototype.set_currentIndent_27p6t4_k$ = function (_set____db54di) {
    this.currentIndent_1 = _set____db54di;
  };
  TokenStream.prototype.get_currentIndent_v1v68s_k$ = function () {
    return this.currentIndent_1;
  };
  TokenStream.prototype.set_leadingSpace_43618t_k$ = function (_set____db54di) {
    this.leadingSpace_1 = _set____db54di;
  };
  TokenStream.prototype.get_leadingSpace_u9hq8n_k$ = function () {
    return this.leadingSpace_1;
  };
  TokenStream.prototype.set_strBuff_ifcc2g_k$ = function (_set____db54di) {
    this.strBuff_1 = _set____db54di;
  };
  TokenStream.prototype.get_strBuff_tvhfwl_k$ = function () {
    return this.strBuff_1;
  };
  TokenStream.prototype.set_quoted_klsmlg_k$ = function (_set____db54di) {
    this.quoted_1 = _set____db54di;
  };
  TokenStream.prototype.get_quoted_iq4nld_k$ = function () {
    return this.quoted_1;
  };
  TokenStream.prototype.set_newLined_j9ak0s_k$ = function (_set____db54di) {
    this.newLined_1 = _set____db54di;
  };
  TokenStream.prototype.get_newLined_9bjs3r_k$ = function () {
    return this.newLined_1;
  };
  TokenStream.prototype.get_endOfInput_skegkh_k$ = function () {
    return this.cur_1 === this.source_1.length;
  };
  TokenStream.prototype.set_escapeCount_rgp7dt_k$ = function (_set____db54di) {
    this.escapeCount_1 = _set____db54di;
  };
  TokenStream.prototype.get_escapeCount_epw8th_k$ = function () {
    return this.escapeCount_1;
  };
  TokenStream.prototype.subSourceTrimEnd_tud8le_k$ = function (offset, endIndex) {
    var inductionVariable = endIndex - 1 | 0;
    if (offset <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!equals(new Char(charSequenceGet(this.source_1, i)), new Char(_Char___init__impl__6a9atx(32)))) {
          var tmp$ret$1;
          // Inline function 'kotlin.text.substring' call
          var tmp0_substring = this.source_1;
          var tmp1_substring = i + 1 | 0;
          var tmp$ret$0;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$0 = tmp0_substring;
          tmp$ret$1 = tmp$ret$0.substring(offset, tmp1_substring);
          return tmp$ret$1;
        }
      }
       while (!(i === offset));
    return '';
  };
  TokenStream.prototype.flushEsc_xmwsjk_k$ = function () {
    if (this.escapeCount_1 === 0) {
      return Unit_getInstance();
    }
    this.append_y20c3x_k$(numberToChar(HexConverter_getInstance().hexToLong_lihuyl_k$(this.escapeBuff_1, 0, this.escapeCount_1).toInt_1tsl84_k$()));
    this.escapeCount_1 = 0;
  };
  TokenStream.prototype.get_escapeBuff_mfsnwj_k$ = function () {
    return this.escapeBuff_1;
  };
  TokenStream.prototype.appendEsc_rxkzte_k$ = function (c) {
    var tmp0_this = this;
    var tmp1 = tmp0_this.escapeCount_1;
    tmp0_this.escapeCount_1 = tmp1 + 1 | 0;
    this.escapeBuff_1[tmp1] = c;
    if (this.escapeCount_1 === 4) {
      this.flushEsc_xmwsjk_k$();
    }
  };
  TokenStream.prototype.reuseToken_l8k9sb_k$ = function (token) {
    this.reuseTokenStack_1.add_sf7wgr_k$(token);
  };
  TokenStream.prototype.reuseToken_m2na0d_k$ = function (string) {
    this.reuseTokenStack_1.add_sf7wgr_k$(string);
  };
  TokenStream.prototype.nextToken_aky1qk_k$ = function (stopOnComma) {
    var reuse = this.reuseTokenStack_1.popOrNull_s5k9xh_k$();
    if (!(reuse == null)) {
      var tmp;
      if (!(reuse == null) ? typeof reuse === 'string' : false) {
        this.strBuff_1 = reuse;
        tmp = Token_STRING_getInstance();
      } else {
        tmp = reuse instanceof Token ? reuse : THROW_CCE();
      }
      return tmp;
    }
    this.newLined_1 = false;
    this.leadingSpace_1 = 0;
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.internal.whileNotEOF' call
    // Inline function 'kotlin.contracts.contract' call
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = this.cur_1 === this.source_1.length;
      if (!!tmp$ret$0) {
        break $l$loop;
      }
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.nextToken.<anonymous>' call
      var tmp0_this = this;
      var tmp1 = tmp0_this.cur_1;
      tmp0_this.cur_1 = tmp1 + 1 | 0;
      var tmp0__anonymous__q1qw7t = charSequenceGet(this.source_1, tmp1);
      if (equals(new Char(tmp0__anonymous__q1qw7t), new Char(_Char___init__impl__6a9atx(32)))) {
        var tmp0_this_0 = this;
        var tmp1_0 = tmp0_this_0.currentIndent_1;
        tmp0_this_0.currentIndent_1 = tmp1_0 + 1 | 0;
        var tmp2_this = this;
        var tmp3 = tmp2_this.leadingSpace_1;
        tmp2_this.leadingSpace_1 = tmp3 + 1 | 0;
      } else {
        var tmp4_subject = tmp0__anonymous__q1qw7t;
        if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(58)))) {
          var tmp5_this = this;
          var tmp6 = tmp5_this.currentIndent_1;
          tmp5_this.currentIndent_1 = tmp6 + 1 | 0;
          return Token_COLON_getInstance();
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(10))) ? true : equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(13)))) {
          this.newLined_1 = true;
          this.currentIndent_1 = 0;
          this.leadingSpace_1 = 0;
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(44)))) {
          var tmp7_this = this;
          var tmp8 = tmp7_this.currentIndent_1;
          tmp7_this.currentIndent_1 = tmp8 + 1 | 0;
          return Token_COMMA_getInstance();
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(123)))) {
          var tmp9_this = this;
          var tmp10 = tmp9_this.currentIndent_1;
          tmp9_this.currentIndent_1 = tmp10 + 1 | 0;
          return Token_MAP_BEGIN_getInstance();
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(125)))) {
          var tmp11_this = this;
          var tmp12 = tmp11_this.currentIndent_1;
          tmp11_this.currentIndent_1 = tmp12 + 1 | 0;
          return Token_MAP_END_getInstance();
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(91)))) {
          var tmp13_this = this;
          var tmp14 = tmp13_this.currentIndent_1;
          tmp13_this.currentIndent_1 = tmp14 + 1 | 0;
          return Token_LIST_BEGIN_getInstance();
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(93)))) {
          var tmp15_this = this;
          var tmp16 = tmp15_this.currentIndent_1;
          tmp15_this.currentIndent_1 = tmp16 + 1 | 0;
          return Token_LIST_END_getInstance();
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(45)))) {
          var tmp17_this = this;
          var tmp18 = tmp17_this.currentIndent_1;
          tmp17_this.currentIndent_1 = tmp18 + 1 | 0;
          return Token_MULTILINE_LIST_FLAG_getInstance();
        } else if (equals(new Char(tmp4_subject), new Char(_Char___init__impl__6a9atx(35)))) {
          skipLine(this);
          this.currentIndent_1 = 0;
        } else {
          var tmp19_elvis_lhs = prepareStringAndNextToken(this, stopOnComma, tmp0__anonymous__q1qw7t);
          var tmp_0;
          if (tmp19_elvis_lhs == null) {
            return Token_STRING_NULL_getInstance();
          } else {
            tmp_0 = tmp19_elvis_lhs;
          }
          var str = tmp_0;
          this.strBuff_1 = str;
          return Token_STRING_getInstance();
        }
      }
    }
    tmp$ret$1 = null;
    return null;
  };
  function _set__stringBuf__o5qwbw($this, _set____db54di) {
    $this._stringBuf_1 = _set____db54di;
  }
  function _get__stringBuf__vt4ki0($this) {
    return $this._stringBuf_1;
  }
  function incStringBuf($this) {
    $this._stringBuf_1 = copyOf($this._stringBuf_1, $this._stringBuf_1.length + ($this._stringBuf_1.length >>> 1 | 0) | 0);
  }
  function StringBufHolder() {
    this._stringBuf_1 = charArray(32);
    this._stringLength_1 = 0;
  }
  StringBufHolder.prototype.set__stringLength_ldzoqx_k$ = function (_set____db54di) {
    this._stringLength_1 = _set____db54di;
  };
  StringBufHolder.prototype.get__stringLength_wti7f1_k$ = function () {
    return this._stringLength_1;
  };
  StringBufHolder.prototype.takeStringBuf_1s0a8r_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = concatToString(this._stringBuf_1, 0, 0 + this._stringLength_1 | 0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.StringBufHolder.takeStringBuf.<anonymous>' call
    this._stringLength_1 = 0;
    tmp$ret$0 = tmp0_also;
    return tmp$ret$0;
  };
  StringBufHolder.prototype.takeStringBufTrimEnd_rcivb6_k$ = function () {
    var inductionVariable = this._stringLength_1 - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!equals(new Char(this._stringBuf_1[i]), new Char(_Char___init__impl__6a9atx(32)))) {
          this._stringLength_1 = 0;
          return concatToString(this._stringBuf_1, 0, 0 + (i + 1 | 0) | 0);
        }
      }
       while (0 <= inductionVariable);
    return '';
  };
  StringBufHolder.prototype.append_y20c3x_k$ = function (c) {
    if (this._stringLength_1 === this._stringBuf_1.length) {
      incStringBuf(this);
    }
    var tmp = this._stringBuf_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this._stringLength_1;
    tmp0_this._stringLength_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  StringBufHolder.prototype.append_ng9zdk_k$ = function (source, startIndex, endIndex) {
    var length = endIndex - startIndex | 0;
    var requiredSize = (this._stringLength_1 + length | 0) + 1 | 0;
    while (this._stringBuf_1.length < requiredSize) {
      incStringBuf(this);
    }
    var inductionVariable = 0;
    if (inductionVariable <= length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this._stringBuf_1;
        var tmp1_this = this;
        var tmp2 = tmp1_this._stringLength_1;
        tmp1_this._stringLength_1 = tmp2 + 1 | 0;
        tmp[tmp2] = charSequenceGet(source, startIndex + i | 0);
      }
       while (!(i === length));
  };
  function get_END_OF_FILE() {
    init_properties_TokenStream_kt_hu9fej();
    return null;
  }
  function Stack() {
    this.cur_1 = 0;
    this.currentSize_1 = 64;
    var tmp = this;
    var tmp$ret$0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp0_arrayOfNulls = this.currentSize_1;
    tmp$ret$0 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    tmp.content_1 = tmp$ret$0;
  }
  Stack.prototype.set_cur_j8oru5_k$ = function (_set____db54di) {
    this.cur_1 = _set____db54di;
  };
  Stack.prototype.get_cur_18j7s9_k$ = function () {
    return this.cur_1;
  };
  Stack.prototype.set_currentSize_1fqg2b_k$ = function (_set____db54di) {
    this.currentSize_1 = _set____db54di;
  };
  Stack.prototype.get_currentSize_nu56ep_k$ = function () {
    return this.currentSize_1;
  };
  Stack.prototype.set_content_8s6ww6_k$ = function (_set____db54di) {
    this.content_1 = _set____db54di;
  };
  Stack.prototype.get_content_h02jrk_k$ = function () {
    return this.content_1;
  };
  Stack.prototype.increase_6gqs5r_k$ = function () {
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp0_let = this.content_1.length;
    // Inline function 'kotlin.contracts.contract' call
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.Stack.increase.<anonymous>' call
    tmp$ret$0 = tmp0_let + (tmp0_let >> 1) | 0;
    tmp$ret$1 = tmp$ret$0;
    var new_0 = tmp$ret$1;
    this.currentSize_1 = new_0;
    this.content_1 = copyOf_0(this.content_1, this.currentSize_1);
  };
  Stack.prototype.add_sf7wgr_k$ = function (value) {
    if (this.cur_1 === this.currentSize_1) {
      this.increase_6gqs5r_k$();
    }
    var tmp = this.content_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.cur_1;
    tmp0_this.cur_1 = tmp1 + 1 | 0;
    tmp[tmp1] = value;
  };
  Stack.prototype.popOrNull_s5k9xh_k$ = function () {
    if (this.cur_1 === 0) {
      return null;
    }
    var tmp = this.content_1;
    var tmp0_this = this;
    tmp0_this.cur_1 = tmp0_this.cur_1 - 1 | 0;
    var tmp_0 = tmp[tmp0_this.cur_1];
    return (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
  };
  function whileNotEOF(_this__u8e3s4, block) {
    init_properties_TokenStream_kt_hu9fej();
    // Inline function 'kotlin.contracts.contract' call
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.cur_1 === _this__u8e3s4.source_1.length;
      if (!!tmp$ret$0) {
        break $l$loop;
      }
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.cur_1;
      tmp0_this.cur_1 = tmp1 + 1 | 0;
      block(new Char(charSequenceGet(_this__u8e3s4.source_1, tmp1)));
    }
    return null;
  }
  function get_SINGLE_QUOTATION_CHAR() {
    return SINGLE_QUOTATION_CHAR;
  }
  var SINGLE_QUOTATION_CHAR;
  function get_DOUBLE_QUOTATION_CHAR() {
    return DOUBLE_QUOTATION_CHAR;
  }
  var DOUBLE_QUOTATION_CHAR;
  function countSkipIf(_this__u8e3s4, block) {
    init_properties_TokenStream_kt_hu9fej();
    // Inline function 'kotlin.contracts.contract' call
    var start = _this__u8e3s4.cur_1;
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.cur_1 === _this__u8e3s4.source_1.length;
      if (!!tmp$ret$0) {
        break $l$loop_0;
      }
      if (block(new Char(charSequenceGet(_this__u8e3s4.source_1, _this__u8e3s4.cur_1)))) {
        var tmp0_this = _this__u8e3s4;
        var tmp1 = tmp0_this.cur_1;
        tmp0_this.cur_1 = tmp1 + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
    return _this__u8e3s4.cur_1 - start | 0;
  }
  function whileNotEOFWithBegin(_this__u8e3s4, begin, block) {
    init_properties_TokenStream_kt_hu9fej();
    // Inline function 'kotlin.contracts.contract' call
    block(new Char(begin));
    $l$loop: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.cur_1 === _this__u8e3s4.source_1.length;
      if (!!tmp$ret$0) {
        break $l$loop;
      }
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.cur_1;
      tmp0_this.cur_1 = tmp1 + 1 | 0;
      block(new Char(charSequenceGet(_this__u8e3s4.source_1, tmp1)));
    }
    return null;
  }
  function skipIf(_this__u8e3s4, block) {
    init_properties_TokenStream_kt_hu9fej();
    // Inline function 'kotlin.contracts.contract' call
    $l$loop_0: while (true) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.cur_1 === _this__u8e3s4.source_1.length;
      if (!!tmp$ret$0) {
        break $l$loop_0;
      }
      if (block(new Char(charSequenceGet(_this__u8e3s4.source_1, _this__u8e3s4.cur_1)))) {
        var tmp0_this = _this__u8e3s4;
        var tmp1 = tmp0_this.cur_1;
        tmp0_this.cur_1 = tmp1 + 1 | 0;
      } else {
        break $l$loop_0;
      }
    }
  }
  function Token_COMMA_getInstance() {
    Token_initEntries();
    return Token_COMMA_instance;
  }
  function Token_COLON_getInstance() {
    Token_initEntries();
    return Token_COLON_instance;
  }
  function Token_MULTILINE_LIST_FLAG_getInstance() {
    Token_initEntries();
    return Token_MULTILINE_LIST_FLAG_instance;
  }
  function Token_LIST_BEGIN_getInstance() {
    Token_initEntries();
    return Token_LIST_BEGIN_instance;
  }
  function Token_LIST_END_getInstance() {
    Token_initEntries();
    return Token_LIST_END_instance;
  }
  function Token_MAP_BEGIN_getInstance() {
    Token_initEntries();
    return Token_MAP_BEGIN_instance;
  }
  function Token_MAP_END_getInstance() {
    Token_initEntries();
    return Token_MAP_END_instance;
  }
  function Token_STRING_getInstance() {
    Token_initEntries();
    return Token_STRING_instance;
  }
  function Token_STRING_NULL_getInstance() {
    Token_initEntries();
    return Token_STRING_NULL_instance;
  }
  var properties_initialized_TokenStream_kt_oy78mh;
  function init_properties_TokenStream_kt_hu9fej() {
    if (properties_initialized_TokenStream_kt_oy78mh) {
    } else {
      properties_initialized_TokenStream_kt_oy78mh = true;
      var tmp$ret$13;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$12;
      // Inline function 'net.mamoe.yamlkt.internal.__values__init.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp0_arrayOf = [Token_COMMA_getInstance(), Token_COLON_getInstance(), Token_LIST_END_getInstance(), Token_LIST_BEGIN_getInstance(), Token_MAP_END_getInstance(), Token_MAP_BEGIN_getInstance(), Token_MULTILINE_LIST_FLAG_getInstance()];
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = tmp0_arrayOf;
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      var all = tmp$ret$2;
      var tmp$ret$11;
      // Inline function 'kotlin.apply' call
      var tmp$ret$9;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$8;
      // Inline function 'kotlin.collections.maxOf' call
      var tmp$ret$3;
      // Inline function 'kotlin.collections.isEmpty' call
      tmp$ret$3 = all.length === 0;
      if (tmp$ret$3)
        throw NoSuchElementException_init_$Create$_0();
      var tmp$ret$5;
      // Inline function 'net.mamoe.yamlkt.internal.__values__init.<anonymous>.<anonymous>' call
      var tmp1__anonymous__uwfjfc = all[0];
      var tmp$ret$4;
      // Inline function 'kotlin.code' call
      var tmp0__get_code__88qj9g = tmp1__anonymous__uwfjfc.value_1;
      tmp$ret$4 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g);
      tmp$ret$5 = tmp$ret$4;
      var maxValue = tmp$ret$5;
      var inductionVariable = 1;
      var last = get_lastIndex(all);
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$7;
          // Inline function 'net.mamoe.yamlkt.internal.__values__init.<anonymous>.<anonymous>' call
          var tmp2__anonymous__z9zvc9 = all[i];
          var tmp$ret$6;
          // Inline function 'kotlin.code' call
          var tmp0__get_code__88qj9g_0 = tmp2__anonymous__z9zvc9.value_1;
          tmp$ret$6 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g_0);
          tmp$ret$7 = tmp$ret$6;
          var v = tmp$ret$7;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
         while (!(i === last));
      tmp$ret$8 = maxValue;
      var tmp3_arrayOfNulls = tmp$ret$8 + 1 | 0;
      tmp$ret$9 = fillArrayVal(Array(tmp3_arrayOfNulls), null);
      var tmp4_apply = tmp$ret$9;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'net.mamoe.yamlkt.internal.__values__init.<anonymous>.<anonymous>' call
      var indexedObject = all;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject.length;
      while (inductionVariable_0 < last_0) {
        var tokenClass = indexedObject[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp$ret$10;
        // Inline function 'kotlin.code' call
        var tmp0__get_code__88qj9g_1 = tokenClass.value_1;
        tmp$ret$10 = Char__toInt_impl_vasixd(tmp0__get_code__88qj9g_1);
        tmp4_apply[tmp$ret$10] = tokenClass;
      }
      tmp$ret$11 = tmp4_apply;
      tmp$ret$12 = tmp$ret$11;
      tmp$ret$13 = tmp$ret$12;
      __values__init = tmp$ret$13;
    }
  }
  var Kind_FLOW_CLASS_instance;
  var Kind_FLOW_MAP_instance;
  var Kind_FLOW_SEQUENCE_instance;
  var Kind_STRING_instance;
  var Kind_NULL_STRING_instance;
  var Kind_BLOCK_CLASS_instance;
  var Kind_BLOCK_MAP_instance;
  var Kind_BLOCK_SEQUENCE_instance;
  var Kind_EMPTY_CLASS_instance;
  function values_4() {
    return [Kind_FLOW_CLASS_getInstance(), Kind_FLOW_MAP_getInstance(), Kind_FLOW_SEQUENCE_getInstance(), Kind_STRING_getInstance(), Kind_NULL_STRING_getInstance(), Kind_BLOCK_CLASS_getInstance(), Kind_BLOCK_MAP_getInstance(), Kind_BLOCK_SEQUENCE_getInstance(), Kind_EMPTY_CLASS_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'FLOW_CLASS':
        return Kind_FLOW_CLASS_getInstance();
      case 'FLOW_MAP':
        return Kind_FLOW_MAP_getInstance();
      case 'FLOW_SEQUENCE':
        return Kind_FLOW_SEQUENCE_getInstance();
      case 'STRING':
        return Kind_STRING_getInstance();
      case 'NULL_STRING':
        return Kind_NULL_STRING_getInstance();
      case 'BLOCK_CLASS':
        return Kind_BLOCK_CLASS_getInstance();
      case 'BLOCK_MAP':
        return Kind_BLOCK_MAP_getInstance();
      case 'BLOCK_SEQUENCE':
        return Kind_BLOCK_SEQUENCE_getInstance();
      case 'EMPTY_CLASS':
        return Kind_EMPTY_CLASS_getInstance();
      default:
        Kind_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Kind_entriesInitialized;
  function Kind_initEntries() {
    if (Kind_entriesInitialized)
      return Unit_getInstance();
    Kind_entriesInitialized = true;
    Kind_FLOW_CLASS_instance = new Kind('FLOW_CLASS', 0);
    Kind_FLOW_MAP_instance = new Kind('FLOW_MAP', 1);
    Kind_FLOW_SEQUENCE_instance = new Kind('FLOW_SEQUENCE', 2);
    Kind_STRING_instance = new Kind('STRING', 3);
    Kind_NULL_STRING_instance = new Kind('NULL_STRING', 4);
    Kind_BLOCK_CLASS_instance = new Kind('BLOCK_CLASS', 5);
    Kind_BLOCK_MAP_instance = new Kind('BLOCK_MAP', 6);
    Kind_BLOCK_SEQUENCE_instance = new Kind('BLOCK_SEQUENCE', 7);
    Kind_EMPTY_CLASS_instance = new Kind('EMPTY_CLASS', 8);
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function _set_valueCache__ngos9y($this, _set____db54di) {
    $this.valueCache_1 = _set____db54di;
  }
  function _get_valueCache__8eg74q($this) {
    return $this.valueCache_1;
  }
  function _set_index__fyfqnn_0($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_1($this) {
    return $this.index_1;
  }
  function _set_index__fyfqnn_1($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_2($this) {
    return $this.index_1;
  }
  function _set_firstValueDecoded__rmxka8($this, _set____db54di) {
    $this.firstValueDecoded_1 = _set____db54di;
  }
  function _get_firstValueDecoded__lodlek($this) {
    return $this.firstValueDecoded_1;
  }
  function _set_index__fyfqnn_2($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_3($this) {
    return $this.index_1;
  }
  function handlePossibleNegativeValues($this, current) {
    if ($this.$this_2.isNextWhitespace_fu73ep_k$($this.$this_2.tokenStream_1)) {
      $this.$this_2.tokenStream_1.reuseToken_m2na0d_k$(readUnquotedString($this.$this_2.tokenStream_1, true, _Char___init__impl__6a9atx(45)));
      return Unit_getInstance();
    }
    var tmp0_elvis_lhs = $this.nextToken_5fb3mz_k$($this.$this_2.tokenStream_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException = $this.get_parentYamlDecoder_xu5cdm_k$();
      var tmp1_contextualDecodingException = $this.name_1 + ': ' + 'Unexpected end of text';
      tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
      tmp$ret$1 = tmp$ret$0;
      throw tmp$ret$1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var next = tmp;
    var tmp0 = next.get_ordinal_ip24qg_k$();
    if (tmp0 === 7) {
      $this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(next);
      $this.$this_2.tokenStream_1.set_strBuff_ifcc2g_k$('-' + $this.$this_2.tokenStream_1.get_strBuff_tvhfwl_k$());
    } else {
      $this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(current);
    }
  }
  function _set_index__fyfqnn_3($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_4($this) {
    return $this.index_1;
  }
  function _get_configuration__557qfv($this) {
    return $this.configuration_1;
  }
  function nextString($this, stopOnComma) {
    var tmp0_elvis_lhs = $this.tokenStream_1.nextToken_aky1qk_k$(stopOnComma);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    var tmp1_subject = token;
    var tmp0 = tmp1_subject.get_ordinal_ip24qg_k$();
    var tmp_0;
    switch (tmp0) {
      case 2:
        tmp_0 = '-' + toString_0(nextString($this, stopOnComma));
        break;
      case 8:
        return token;
      case 7:
        tmp_0 = ensureNotNull($this.tokenStream_1.get_strBuff_tvhfwl_k$());
        break;
      default:
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        var tmp0_contextualDecodingException = 'expected String, found token ' + token + ' instead';
        tmp$ret$0 = contextualDecodingException_3($this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, null, -1, null);

        throw tmp$ret$0;
    }
    return tmp_0;
  }
  function Kind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function _get_inlineDecoder__cf2iti($this) {
    return $this.inlineDecoder_1;
  }
  function AbstractDecoder($outer, name) {
    this.$this_1 = $outer;
    this.name_1 = name;
    this.dontWrapNextStructure_1 = false;
  }
  AbstractDecoder.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  AbstractDecoder.prototype.get_parentYamlDecoder_xu5cdm_k$ = function () {
    return this.$this_1;
  };
  AbstractDecoder.prototype.set_dontWrapNextStructure_o3ncht_k$ = function (_set____db54di) {
    this.dontWrapNextStructure_1 = _set____db54di;
  };
  AbstractDecoder.prototype.get_dontWrapNextStructure_q0thwc_k$ = function () {
    return this.dontWrapNextStructure_1;
  };
  AbstractDecoder.prototype.nextToken_5fb3mz_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.nextToken_aky1qk_k$(this.get_stopOnComma_tpjv6d_k$());
  };
  AbstractDecoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.$this_1.serializersModule_1;
  };
  AbstractDecoder.prototype.nextStringOrNull_pavq4u_k$ = function () {
    return nextStringOrNull(this.$this_1, this.get_stopOnComma_tpjv6d_k$());
  };
  AbstractDecoder.prototype.decodeBooleanElement_3vswy_k$ = function (descriptor, index) {
    return decodeBooleanElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeByteElement_76b0gq_k$ = function (descriptor, index) {
    return decodeByteElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeCharElement_pg5vs7_k$ = function (descriptor, index) {
    return decodeCharElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeDoubleElement_42w6gz_k$ = function (descriptor, index) {
    return decodeDoubleElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeFloatElement_nl5jiq_k$ = function (descriptor, index) {
    return decodeFloatElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeIntElement_cmpvet_k$ = function (descriptor, index) {
    return decodeIntElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeLongElement_kyznym_k$ = function (descriptor, index) {
    return decodeLongElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeShortElement_zjkfm_k$ = function (descriptor, index) {
    return decodeShortElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeStringElement_4is7ib_k$ = function (descriptor, index) {
    return decodeStringElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, descriptor, index);
  };
  AbstractDecoder.prototype.decodeInlineElement_ddno8l_k$ = function (descriptor, index) {
    return new InlineElementDecoder(this.$this_1, this, descriptor, index);
  };
  AbstractDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    return decodeShortElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    return decodeStringElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    return decodeBooleanElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    return decodeByteElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    return decodeCharElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    return decodeDoubleElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    return decodeFloatElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    return decodeIntElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeLong_jzt186_k$ = function () {
    return decodeLongElementImpl(this.nextStringOrNull_pavq4u_k$(), this.$this_1, null, -1);
  };
  AbstractDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString_x3hxsx_k$());
  };
  AbstractDecoder.prototype.decodeInline_k1q7ba_k$ = function (inlineDescriptor) {
    return this.$this_1.inlineDecoder_1;
  };
  AbstractDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var token = this.nextToken_5fb3mz_k$(this.$this_1.tokenStream_1);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$0 = null;
    if (equals(token, tmp$ret$0)) {
      tmp = false;
    } else {
      if (tmp0 === 8) {
        tmp = false;
      } else {
        this.$this_1.tokenStream_1.reuseToken_l8k9sb_k$(token);
        tmp = true;
      }
    }
    return tmp;
  };
  AbstractDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = null;
    tmp.logDecode_uxlfy9_k$(null, -1, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = null;
    var tmp_0 = tmp$ret$0;
    var tmp_1;
    var tmp_2;
    if (tmp_0 == null) {
      tmp_2 = true;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = tmp_0;
    } else {
      tmp_1 = THROW_CCE();
    }
    return tmp_1;
  };
  AbstractDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    if (this.dontWrapNextStructure_1) {
      this.dontWrapNextStructure_1 = false;
      return this;
    }
    return this.$this_1.beginStructureImpl_30sp90_k$(this, descriptor);
  };
  AbstractDecoder.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    Debugging_getInstance().endStructure_ksk9dl_k$();
  };
  AbstractDecoder.prototype.decodeNullableSerializableElement_1n5pmg_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp$ret$6;
    // Inline function 'kotlin.getOrElse' call
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.AbstractDecoder.decodeNullableSerializableElement.<anonymous>' call
      var tmp_0;
      if (this.decodeNotNullMark_us4ba1_k$()) {
        tmp_0 = deserializer.deserialize_2t41fm_k$(this);
      } else {
        tmp_0 = this.decodeNull_jzrmuj_k$();
      }
      tmp$ret$0 = tmp_0;
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_1 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_1;
    }
    tmp$ret$3 = tmp;
    var tmp3_getOrElse = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(tmp3_getOrElse);
    var tmp_2;
    if (exception == null) {
      var tmp_3 = _Result___get_value__impl__bjfvqg(tmp3_getOrElse);
      tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
    } else {
      var tmp$ret$5;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$4;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException = this.get_parentYamlDecoder_xu5cdm_k$();
      tmp$ret$4 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: deserializing nested class', descriptor, index, exception);
      tmp$ret$5 = tmp$ret$4;
      throw tmp$ret$5;
    }
    tmp$ret$6 = tmp_2;
    return tmp$ret$6;
  };
  AbstractDecoder.prototype.decodeSerializableElement_nrfur_k$ = function (descriptor, index, deserializer, previousValue) {
    var tmp$ret$6;
    // Inline function 'kotlin.getOrElse' call
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance();
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.AbstractDecoder.decodeSerializableElement.<anonymous>' call
      tmp$ret$0 = deserializer.deserialize_2t41fm_k$(this);
      var tmp1_success = tmp$ret$0;
      tmp$ret$1 = _Result___init__impl__xyqfz8(tmp1_success);
      tmp = tmp$ret$1;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$3 = tmp;
    var tmp3_getOrElse = tmp$ret$3;
    // Inline function 'kotlin.contracts.contract' call
    var exception = Result__exceptionOrNull_impl_p6xea9(tmp3_getOrElse);
    var tmp_1;
    if (exception == null) {
      var tmp_2 = _Result___get_value__impl__bjfvqg(tmp3_getOrElse);
      tmp_1 = (tmp_2 == null ? true : isObject(tmp_2)) ? tmp_2 : THROW_CCE();
    } else {
      var tmp$ret$5;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$4;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException = this.get_parentYamlDecoder_xu5cdm_k$();
      tmp$ret$4 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: deserializing nested class', descriptor, index, exception);
      tmp$ret$5 = tmp$ret$4;
      throw tmp$ret$5;
    }
    tmp$ret$6 = tmp_1;
    return tmp$ret$6;
  };
  function IndentedDecoder($outer, baseIndent, name) {
    this.$this_2 = $outer;
    AbstractDecoder.call(this, $outer, name);
    this.baseIndent_1 = baseIndent;
    // Inline function 'kotlin.check' call
    var tmp0_check = this.baseIndent_1 >= 0;
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp0_check) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.IndentedDecoder.<anonymous>' call
      tmp$ret$0 = 'baseIndent must be >= 0';
      var message = tmp$ret$0;
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  IndentedDecoder.prototype.get_baseIndent_whzuqu_k$ = function () {
    return this.baseIndent_1;
  };
  IndentedDecoder.prototype.checkIndent_67tjfx_k$ = function (newIndent) {
    if (newIndent > this.baseIndent_1) {
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException = 'bad indentation, baseIndent=' + this.baseIndent_1 + ', newIndent=' + newIndent;
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException_0 = this.get_parentYamlDecoder_xu5cdm_k$();
      var tmp1_contextualDecodingException = this.name_1 + ': ' + tmp0_contextualDecodingException;
      tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException_0.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
      tmp$ret$1 = tmp$ret$0;
      throw tmp$ret$1;
    }
    return this.baseIndent_1 <= newIndent;
  };
  function _get_emptyClassDecoder__g8fumw($this) {
    return $this.emptyClassDecoder_1;
  }
  function EmptyClassDecoder($outer) {
    this.$this_2 = $outer;
    AbstractDecoder.call(this, $outer, 'Yaml Empty Class');
  }
  EmptyClassDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_EMPTY_CLASS_getInstance();
  };
  EmptyClassDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    throw IllegalStateException_init_$Create$("shouldn't be called");
  };
  EmptyClassDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return false;
  };
  EmptyClassDecoder.prototype.decodeSequentially_xlblqy_k$ = function () {
    return false;
  };
  EmptyClassDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
    tmp$ret$0 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
    return tmp$ret$0;
  };
  function BlockClassDecoder($outer, baseIndent) {
    this.$this_3 = $outer;
    IndentedDecoder.call(this, $outer, baseIndent, 'Yaml Block Class');
  }
  BlockClassDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    return false;
  };
  BlockClassDecoder.prototype.decodeSequentially_xlblqy_k$ = function () {
    return false;
  };
  BlockClassDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_BLOCK_CLASS_getInstance();
  };
  BlockClassDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var indent = this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$();
    var leadingSpace = this.$this_3.tokenStream_1.get_leadingSpace_u9hq8n_k$();
    var token = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$0 = null;
    if (equals(token, tmp$ret$0)) {
      tmp = false;
    } else {
      if (tmp0 === 8) {
        tmp = false;
      } else {
        this.$this_3.tokenStream_1.reuseToken_l8k9sb_k$(token);
        if (this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$() > indent) {
          return true;
        }
        if (this.$this_3.tokenStream_1.get_leadingSpace_u9hq8n_k$() > leadingSpace ? !this.$this_3.tokenStream_1.get_quoted_iq4nld_k$() : false) {
          return true;
        }
        if (equals(token, Token_STRING_getInstance())) {
          return !((this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$() === indent ? !this.$this_3.tokenStream_1.get_quoted_iq4nld_k$() : false) ? this.$this_3.tokenStream_1.get_newLined_9bjs3r_k$() ? true : isBlank(ensureNotNull(this.$this_3.tokenStream_1.get_strBuff_tvhfwl_k$())) : false);
        }
        tmp = false;
      }
    }
    return tmp;
  };
  BlockClassDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var token = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    switch (tmp0) {
      case -1:
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
        tmp$ret$0 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();

        return tmp$ret$0;
      case 7:
        if (this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$() < this.baseIndent_1) {
          this.$this_3.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.$this_3.tokenStream_1.get_strBuff_tvhfwl_k$()));
          var tmp$ret$1;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$1 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$1;
        }

        if (!this.checkIndent_67tjfx_k$(this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$())) {
          var tmp$ret$2;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$2 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$2;
        }

        var index = descriptor.getElementIndex_2hwbkl_k$(ensureNotNull(this.$this_3.tokenStream_1.get_strBuff_tvhfwl_k$()));
        var current = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
        if (!equals(current, Token_COLON_getInstance())) {
          var tmp$ret$3;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          var tmp0_contextualDecodingException = this.$this_3.tokenStream_1;
          var tmp1_contextualDecodingException = 'There must be a COLON between class key and value but found ' + current + " for '" + descriptor.get_serialName_u2rqhk_k$() + "'";
          tmp$ret$3 = contextualDecodingException$default(tmp0_contextualDecodingException, tmp1_contextualDecodingException, null, -1, null, 8, null);
          throw tmp$ret$3;
        }

        var tmp;
        if (!(index === Companion_getInstance_1().get_UNKNOWN_NAME_lj8hxl_k$())) {
          tmp = index;
        } else {
          YamlNullableDynamicSerializer_getInstance().deserialize_2t41fm_k$(this);
          tmp = this.decodeElementIndex_nk5a2l_k$(descriptor);
        }

        return tmp;
      default:
        this.$this_3.tokenStream_1.reuseToken_l8k9sb_k$(token);
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
        tmp$ret$4 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();

        return tmp$ret$4;
    }
  };
  function BlockMapDecoder($outer, baseIndent) {
    this.$this_3 = $outer;
    IndentedDecoder.call(this, $outer, baseIndent, 'Yaml Block Map');
    this.index_1 = 0;
  }
  BlockMapDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    return false;
  };
  BlockMapDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_BLOCK_MAP_getInstance();
  };
  BlockMapDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var indent = this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$();
    var token = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$0 = null;
    if (equals(token, tmp$ret$0)) {
      tmp = false;
    } else {
      if (tmp0 === 8) {
        tmp = false;
      } else {
        this.$this_3.tokenStream_1.reuseToken_l8k9sb_k$(token);
        tmp = this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$() > indent;
      }
    }
    return tmp;
  };
  BlockMapDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.isOdd' call
    var tmp0_isOdd = this.index_1;
    tmp$ret$0 = !((tmp0_isOdd & 1) === 0);
    if (tmp$ret$0) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.index_1;
      tmp0_this.index_1 = tmp1 + 1 | 0;
      return tmp1;
    }
    var token = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$1 = null;
    if (equals(token, tmp$ret$1)) {
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
      tmp$ret$2 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
      return tmp$ret$2;
    } else {
      if (tmp0 === 7) {
        if (this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$() < this.baseIndent_1) {
          var tmp$ret$3;
          $l$block: {
            // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
            var tmp1_logCustom = Debugging_getInstance();
            if (!tmp1_logCustom.get_enabled_pcr8o8_k$()) {
              tmp$ret$3 = Unit_getInstance();
              break $l$block;
            }
            var tmp = space(tmp1_logCustom, tmp1_logCustom.get_logIndent_z294ex_k$());
            var tmp$ret$4;
            // Inline function 'net.mamoe.yamlkt.internal.BlockMapDecoder.decodeElementIndex.<anonymous>' call
            tmp$ret$4 = 'BlockMapDecoder exit: crt=' + this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$() + ', base=' + this.baseIndent_1;
            println(tmp + tmp$ret$4);
          }
          this.$this_3.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.$this_3.tokenStream_1.get_strBuff_tvhfwl_k$()));
          var tmp$ret$5;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$5 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$5;
        }
        if (!this.checkIndent_67tjfx_k$(this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$())) {
          var tmp$ret$6;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$6 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$6;
        }
        var current = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
        if (!equals(current, Token_COLON_getInstance())) {
          var tmp$ret$7;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          var tmp2_contextualDecodingException = this.$this_3.tokenStream_1;
          var tmp3_contextualDecodingException = 'There must be a COLON between map key and value but found ' + current + " for '" + descriptor.get_serialName_u2rqhk_k$() + "'";
          tmp$ret$7 = contextualDecodingException$default(tmp2_contextualDecodingException, tmp3_contextualDecodingException, null, -1, null, 8, null);
          throw tmp$ret$7;
        } else {
          var tmp$ret$8;
          // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
          var tmp4__get_endOfInput__fmg8l = this.$this_3.tokenStream_1;
          tmp$ret$8 = tmp4__get_endOfInput__fmg8l.get_cur_18j7s9_k$() === tmp4__get_endOfInput__fmg8l.get_source_jl0x7o_k$().length;
          if (!tmp$ret$8) {
            var char = charSequenceGet(this.$this_3.tokenStream_1.get_source_jl0x7o_k$(), this.$this_3.tokenStream_1.get_cur_18j7s9_k$());
            if (!isWhitespace(char)) {
              var tmp$ret$9;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              var tmp5_contextualDecodingException = this.$this_3.tokenStream_1;
              var tmp6_contextualDecodingException = 'Expected whitespace after COLON but found ' + new Char(char) + " for '" + descriptor.get_serialName_u2rqhk_k$() + "'";
              tmp$ret$9 = contextualDecodingException$default(tmp5_contextualDecodingException, tmp6_contextualDecodingException, null, -1, null, 8, null);
              throw tmp$ret$9;
            }
          }
        }
        this.$this_3.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.$this_3.tokenStream_1.get_strBuff_tvhfwl_k$()));
        var tmp2_this = this;
        var tmp3 = tmp2_this.index_1;
        tmp2_this.index_1 = tmp3 + 1 | 0;
        return tmp3;
      } else {
        this.$this_3.tokenStream_1.reuseToken_l8k9sb_k$(token);
        var tmp$ret$10;
        // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
        tmp$ret$10 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
        return tmp$ret$10;
      }
    }
  };
  function FlowMapDecoder($outer) {
    this.$this_2 = $outer;
    AbstractDecoder.call(this, $outer, 'Yaml Flow Map');
    this.valueCache_1 = null;
    this.index_1 = 0;
  }
  FlowMapDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    return true;
  };
  FlowMapDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_FLOW_MAP_getInstance();
  };
  FlowMapDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    if (!(this.valueCache_1 == null))
      return true;
    var token = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$0 = null;
    if (equals(token, tmp$ret$0)) {
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException = this.get_parentYamlDecoder_xu5cdm_k$();
      var tmp1_contextualDecodingException = this.name_1 + ': ' + 'Early EOF';
      tmp$ret$1 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
      tmp$ret$2 = tmp$ret$1;
      throw tmp$ret$2;
    } else {
      if (tmp0 === 6) {
        this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(token);
        tmp = false;
      } else {
        if (tmp0 === 7) {
          this.valueCache_1 = this.$this_2.tokenStream_1.get_strBuff_tvhfwl_k$();
          tmp = true;
        } else {
          if (tmp0 === 0) {
            tmp = false;
          } else {
            var tmp$ret$4;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_0 = 'Illegal token ' + token;
            var tmp$ret$3;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_1 = this.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException_0 = this.name_1 + ': ' + tmp0_contextualDecodingException_0;
            tmp$ret$3 = contextualDecodingException_3(tmp0_contextualDecodingException_1.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_0, null, -1, null);
            tmp$ret$4 = tmp$ret$3;
            throw tmp$ret$4;
          }
        }
      }
    }
    return tmp;
  };
  FlowMapDecoder.prototype.nextStringOrNull_pavq4u_k$ = function () {
    if (!(this.valueCache_1 == null)) {
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.valueCache_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'net.mamoe.yamlkt.internal.FlowMapDecoder.nextStringOrNull.<anonymous>' call
      this.valueCache_1 = null;
      tmp$ret$0 = tmp0_also;
      return tmp$ret$0;
    }
    return AbstractDecoder.prototype.nextStringOrNull_pavq4u_k$.call(this);
  };
  FlowMapDecoder.prototype.decodeSequentially_xlblqy_k$ = function () {
    return false;
  };
  FlowMapDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.isOdd' call
    var tmp0_isOdd = this.index_1;
    tmp$ret$0 = !((tmp0_isOdd & 1) === 0);
    if (tmp$ret$0) {
      var tmp0_this = this;
      var tmp1 = tmp0_this.index_1;
      tmp0_this.index_1 = tmp1 + 1 | 0;
      return tmp1;
    }
    if (this.index_1 > 1) {
      var token = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
      var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
      tmp$ret$1 = null;
      if (equals(token, tmp$ret$1)) {
        var tmp$ret$3;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        var tmp0_contextualDecodingException = this.get_parentYamlDecoder_xu5cdm_k$();
        var tmp1_contextualDecodingException = this.name_1 + ': ' + "Early EOF. Expected '}'.";
        tmp$ret$2 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
        tmp$ret$3 = tmp$ret$2;
        throw tmp$ret$3;
      } else {
        if (tmp0 === 6) {
          var tmp$ret$4;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$4 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$4;
        } else {
          if (tmp0 === 0) {
          } else {
            var tmp$ret$6;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp1_contextualDecodingException_0 = 'There must be a COMMA between flow map entries but found ' + token + " for '" + descriptor.get_serialName_u2rqhk_k$() + "'";
            var tmp$ret$5;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_0 = this.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException_1 = this.name_1 + ': ' + tmp1_contextualDecodingException_0;
            tmp$ret$5 = contextualDecodingException_3(tmp0_contextualDecodingException_0.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_1, null, -1, null);
            tmp$ret$6 = tmp$ret$5;
            throw tmp$ret$6;
          }
        }
      }
    }
    var token_0 = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
    var tmp0_0 = token_0 == null ? -1 : token_0.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$7;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$7 = null;
    if (equals(token_0, tmp$ret$7)) {
      var tmp$ret$9;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$8;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException_1 = this.get_parentYamlDecoder_xu5cdm_k$();
      var tmp1_contextualDecodingException_2 = this.name_1 + ': ' + "Early EOF. Expected '}'.";
      tmp$ret$8 = contextualDecodingException_3(tmp0_contextualDecodingException_1.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_2, null, -1, null);
      tmp$ret$9 = tmp$ret$8;
      throw tmp$ret$9;
    } else {
      if (tmp0_0 === 7) {
        var next = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
        var tmp0_1 = next == null ? -1 : next.get_ordinal_ip24qg_k$();
        switch (tmp0_1) {
          case 1:
            this.$this_2.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.$this_2.tokenStream_1.get_strBuff_tvhfwl_k$()));
            ;
            break;
          case 0:
          case 6:
            this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(next);
            this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(Token_STRING_NULL_getInstance());
            this.$this_2.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.$this_2.tokenStream_1.get_strBuff_tvhfwl_k$()));
            ;
            break;
          default:
            var tmp$ret$11;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp2_contextualDecodingException = 'Illegal token ' + token_0;
            var tmp$ret$10;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_2 = this.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException_3 = this.name_1 + ': ' + tmp2_contextualDecodingException;
            tmp$ret$10 = contextualDecodingException_3(tmp0_contextualDecodingException_2.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_3, null, -1, null);
            tmp$ret$11 = tmp$ret$10;

            throw tmp$ret$11;
        }
        var tmp2_this = this;
        var tmp3 = tmp2_this.index_1;
        tmp2_this.index_1 = tmp3 + 1 | 0;
        tmp = tmp3;
      } else {
        if (tmp0_0 === 6) {
          var tmp$ret$12;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$12 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          tmp = tmp$ret$12;
        } else {
          if (tmp0_0 === 0) {
            this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(Token_STRING_NULL_getInstance());
            this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(Token_STRING_NULL_getInstance());
            var tmp4_this = this;
            var tmp5 = tmp4_this.index_1;
            tmp4_this.index_1 = tmp5 + 1 | 0;
            tmp = tmp5;
          } else {
            var tmp$ret$14;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp3_contextualDecodingException = 'Illegal token ' + token_0;
            var tmp$ret$13;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_3 = this.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException_4 = this.name_1 + ': ' + tmp3_contextualDecodingException;
            tmp$ret$13 = contextualDecodingException_3(tmp0_contextualDecodingException_3.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_4, null, -1, null);
            tmp$ret$14 = tmp$ret$13;
            throw tmp$ret$14;
          }
        }
      }
    }
    return tmp;
  };
  function FlowClassDecoder($outer) {
    this.$this_2 = $outer;
    AbstractDecoder.call(this, $outer, 'Yaml Flow Class');
    this.index_1 = -5;
    this.firstValueDecoded_1 = false;
  }
  FlowClassDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    return true;
  };
  FlowClassDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_FLOW_CLASS_getInstance();
  };
  FlowClassDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var token = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$0 = null;
    if (equals(token, tmp$ret$0)) {
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException = this.get_parentYamlDecoder_xu5cdm_k$();
      var tmp1_contextualDecodingException = this.name_1 + ': ' + "Early EOF. Expected '}'.";
      tmp$ret$1 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
      tmp$ret$2 = tmp$ret$1;
      throw tmp$ret$2;
    } else {
      if (tmp0 === 6) {
        this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(token);
        tmp = false;
      } else {
        switch (tmp0) {
          case 5:
          case 3:
            this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(token);
            tmp = true;
            break;
          default:
            if (tmp0 === 8) {
              tmp = false;
            } else {
              if (tmp0 === 7) {
                this.$this_2.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.$this_2.tokenStream_1.get_strBuff_tvhfwl_k$()));
                tmp = true;
              } else {
                if (tmp0 === 2) {
                  var tmp$ret$3;
                  // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
                  var tmp0__get_endOfInput__4mypxj = this.$this_2.tokenStream_1;
                  tmp$ret$3 = tmp0__get_endOfInput__4mypxj.get_cur_18j7s9_k$() === tmp0__get_endOfInput__4mypxj.get_source_jl0x7o_k$().length;
                  if (tmp$ret$3) {
                    var tmp$ret$5;
                    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                    var tmp$ret$4;
                    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                    var tmp0_contextualDecodingException_0 = this.get_parentYamlDecoder_xu5cdm_k$();
                    var tmp1_contextualDecodingException_0 = this.name_1 + ': ' + "Early EOF. Expected '}'.";
                    tmp$ret$4 = contextualDecodingException_3(tmp0_contextualDecodingException_0.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_0, null, -1, null);
                    tmp$ret$5 = tmp$ret$4;
                    throw tmp$ret$5;
                  }
                  var tmp_0;
                  if (this.$this_2.isNextWhitespace_fu73ep_k$(this.$this_2.tokenStream_1)) {
                    this.$this_2.tokenStream_1.reuseToken_m2na0d_k$(readUnquotedString(this.$this_2.tokenStream_1, true, _Char___init__impl__6a9atx(45)));
                    tmp_0 = true;
                  } else {
                    var tmp$ret$7;
                    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                    var tmp1_contextualDecodingException_1 = 'Illegal token ' + token;
                    var tmp$ret$6;
                    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                    var tmp0_contextualDecodingException_1 = this.get_parentYamlDecoder_xu5cdm_k$();
                    var tmp1_contextualDecodingException_2 = this.name_1 + ': ' + tmp1_contextualDecodingException_1;
                    tmp$ret$6 = contextualDecodingException_3(tmp0_contextualDecodingException_1.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_2, null, -1, null);
                    tmp$ret$7 = tmp$ret$6;
                    throw tmp$ret$7;
                  }
                  tmp = tmp_0;
                } else {
                  if (tmp0 === 0) {
                    tmp = false;
                  } else {
                    var tmp$ret$9;
                    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                    var tmp2_contextualDecodingException = 'Illegal token ' + token;
                    var tmp$ret$8;
                    // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                    var tmp0_contextualDecodingException_2 = this.get_parentYamlDecoder_xu5cdm_k$();
                    var tmp1_contextualDecodingException_3 = this.name_1 + ': ' + tmp2_contextualDecodingException;
                    tmp$ret$8 = contextualDecodingException_3(tmp0_contextualDecodingException_2.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_3, null, -1, null);
                    tmp$ret$9 = tmp$ret$8;
                    throw tmp$ret$9;
                  }
                }
              }
            }

            break;
        }
      }
    }
    return tmp;
  };
  FlowClassDecoder.prototype.decodeSequentially_xlblqy_k$ = function () {
    return false;
  };
  FlowClassDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    if (this.firstValueDecoded_1) {
      var token = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
      var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
      tmp$ret$0 = null;
      if (equals(token, tmp$ret$0)) {
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        var tmp0_contextualDecodingException = this.get_parentYamlDecoder_xu5cdm_k$();
        var tmp1_contextualDecodingException = this.name_1 + ': ' + "Early EOF. Expected '}'.";
        tmp$ret$1 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
        tmp$ret$2 = tmp$ret$1;
        throw tmp$ret$2;
      } else {
        if (tmp0 === 6) {
          var tmp$ret$3;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$3 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$3;
        } else {
          if (tmp0 === 0) {
          } else {
            var tmp$ret$5;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_0 = 'There must be a COMMA between flow map entries but found ' + token + " for '" + descriptor.get_serialName_u2rqhk_k$() + "'";
            var tmp$ret$4;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_1 = this.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException_0 = this.name_1 + ': ' + tmp0_contextualDecodingException_0;
            tmp$ret$4 = contextualDecodingException_3(tmp0_contextualDecodingException_1.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_0, null, -1, null);
            tmp$ret$5 = tmp$ret$4;
            throw tmp$ret$5;
          }
        }
      }
    } else {
      this.firstValueDecoded_1 = true;
    }
    var token_0 = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
    var tmp0_0 = token_0 == null ? -1 : token_0.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$6;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$6 = null;
    if (equals(token_0, tmp$ret$6)) {
      var tmp$ret$8;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$7;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException_2 = this.get_parentYamlDecoder_xu5cdm_k$();
      var tmp1_contextualDecodingException_1 = this.name_1 + ': ' + "Early EOF. Expected '}'.";
      tmp$ret$7 = contextualDecodingException_3(tmp0_contextualDecodingException_2.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_1, null, -1, null);
      tmp$ret$8 = tmp$ret$7;
      throw tmp$ret$8;
    } else {
      if (tmp0_0 === 6) {
        var tmp$ret$9;
        // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
        tmp$ret$9 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
        tmp = tmp$ret$9;
      } else {
        if (tmp0_0 === 0) {
          return this.decodeElementIndex_nk5a2l_k$(descriptor);
        } else {
          if (tmp0_0 === 7) {
            var next = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
            if (!equals(next, Token_COLON_getInstance())) {
              var tmp$ret$11;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              var tmp1_contextualDecodingException_2 = 'Expected a COLON between flow map entries but found ' + next + " for '" + descriptor.get_serialName_u2rqhk_k$() + "'";
              var tmp$ret$10;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              var tmp0_contextualDecodingException_3 = this.get_parentYamlDecoder_xu5cdm_k$();
              var tmp1_contextualDecodingException_3 = this.name_1 + ': ' + tmp1_contextualDecodingException_2;
              tmp$ret$10 = contextualDecodingException_3(tmp0_contextualDecodingException_3.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_3, null, -1, null);
              tmp$ret$11 = tmp$ret$10;
              throw tmp$ret$11;
            }
            var index = descriptor.getElementIndex_2hwbkl_k$(ensureNotNull(this.$this_2.tokenStream_1.get_strBuff_tvhfwl_k$()));
            var tmp_0;
            if (!(index === Companion_getInstance_1().get_UNKNOWN_NAME_lj8hxl_k$())) {
              this.index_1 = index;
              tmp_0 = index;
            } else {
              this.index_1 = -1;
              YamlNullableDynamicSerializer_getInstance().deserialize_2t41fm_k$(this);
              return this.decodeElementIndex_nk5a2l_k$(descriptor);
            }
            tmp = tmp_0;
          } else {
            var tmp$ret$13;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp2_contextualDecodingException = 'Illegal token ' + token_0 + " for '" + descriptor.get_serialName_u2rqhk_k$() + "'";
            var tmp$ret$12;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_4 = this.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException_4 = this.name_1 + ': ' + tmp2_contextualDecodingException;
            tmp$ret$12 = contextualDecodingException_3(tmp0_contextualDecodingException_4.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_4, null, -1, null);
            tmp$ret$13 = tmp$ret$12;
            throw tmp$ret$13;
          }
        }
      }
    }
    return tmp;
  };
  function FlowSequenceDecoder($outer) {
    this.$this_2 = $outer;
    AbstractDecoder.call(this, $outer, 'Yaml Flow Sequence');
    this.index_1 = 0;
  }
  FlowSequenceDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    return true;
  };
  FlowSequenceDecoder.prototype.decodeSequentially_xlblqy_k$ = function () {
    return false;
  };
  FlowSequenceDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_FLOW_SEQUENCE_getInstance();
  };
  FlowSequenceDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    var current = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
    var tmp0 = current == null ? -1 : current.get_ordinal_ip24qg_k$();
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$0 = null;
    if (equals(current, tmp$ret$0)) {
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      var tmp0_contextualDecodingException = this.get_parentYamlDecoder_xu5cdm_k$();
      var tmp1_contextualDecodingException = this.name_1 + ': ' + 'Unexpected EOF';
      tmp$ret$1 = contextualDecodingException_3(tmp0_contextualDecodingException.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
      tmp$ret$2 = tmp$ret$1;
      throw tmp$ret$2;
    } else {
      if (tmp0 === 7) {
        var originString = ensureNotNull(this.$this_2.tokenStream_1.get_strBuff_tvhfwl_k$());
        var next = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
        var tmp0_0 = next == null ? -1 : next.get_ordinal_ip24qg_k$();
        switch (tmp0_0) {
          case 0:
            this.$this_2.tokenStream_1.reuseToken_m2na0d_k$(originString);
            ;
            break;
          case 4:
            this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(next);
            this.$this_2.tokenStream_1.reuseToken_m2na0d_k$(originString);
            ;
            break;
          default:
            var tmp$ret$4;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_0 = 'Illegal token ' + next;
            var tmp$ret$3;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException_1 = this.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException_0 = this.name_1 + ': ' + tmp0_contextualDecodingException_0;
            tmp$ret$3 = contextualDecodingException_3(tmp0_contextualDecodingException_1.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_0, null, -1, null);
            tmp$ret$4 = tmp$ret$3;

            throw tmp$ret$4;
        }
      } else {
        if (tmp0 === 4) {
          var tmp$ret$5;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$5 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$5;
        } else {
          if (tmp0 === 0) {
            var next_0 = this.nextToken_5fb3mz_k$(this.$this_2.tokenStream_1);
            var tmp0_1 = next_0 == null ? -1 : next_0.get_ordinal_ip24qg_k$();
            switch (tmp0_1) {
              case 4:
                var tmp$ret$6;
                // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
                tmp$ret$6 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();

                return tmp$ret$6;
              case 3:
              case 5:
                this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(next_0);
                ;
                break;
              case 8:
              case 7:
                this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(next_0);
                ;
                break;
              case 2:
                handlePossibleNegativeValues(this, current);
                var tmp0_this = this;
                var tmp1 = tmp0_this.index_1;
                tmp0_this.index_1 = tmp1 + 1 | 0;
                return tmp1;
              default:
                var tmp$ret$8;
                // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                var tmp1_contextualDecodingException_1 = 'Illegal token ' + next_0;
                var tmp$ret$7;
                // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                var tmp0_contextualDecodingException_2 = this.get_parentYamlDecoder_xu5cdm_k$();
                var tmp1_contextualDecodingException_2 = this.name_1 + ': ' + tmp1_contextualDecodingException_1;
                tmp$ret$7 = contextualDecodingException_3(tmp0_contextualDecodingException_2.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_2, null, -1, null);
                tmp$ret$8 = tmp$ret$7;

                throw tmp$ret$8;
            }
          } else {
            switch (tmp0) {
              case 3:
              case 5:
                this.$this_2.tokenStream_1.reuseToken_l8k9sb_k$(current);
                var tmp2_this = this;
                var tmp3 = tmp2_this.index_1;
                tmp2_this.index_1 = tmp3 + 1 | 0;
                return tmp3;
              default:
                if (tmp0 === 2) {
                  handlePossibleNegativeValues(this, current);
                  var tmp4_this = this;
                  var tmp5 = tmp4_this.index_1;
                  tmp4_this.index_1 = tmp5 + 1 | 0;
                  return tmp5;
                } else {
                  var tmp$ret$10;
                  // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                  var tmp2_contextualDecodingException = 'Illegal token ' + current;
                  var tmp$ret$9;
                  // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                  var tmp0_contextualDecodingException_3 = this.get_parentYamlDecoder_xu5cdm_k$();
                  var tmp1_contextualDecodingException_3 = this.name_1 + ': ' + tmp2_contextualDecodingException;
                  tmp$ret$9 = contextualDecodingException_3(tmp0_contextualDecodingException_3.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException_3, null, -1, null);
                  tmp$ret$10 = tmp$ret$9;
                  throw tmp$ret$10;
                }

                break;
            }
          }
        }
      }
    }
    var tmp6_this = this;
    var tmp7 = tmp6_this.index_1;
    tmp6_this.index_1 = tmp7 + 1 | 0;
    return tmp7;
  };
  function BlockSequenceDecoder($outer, baseIndent) {
    this.$this_3 = $outer;
    IndentedDecoder.call(this, $outer, baseIndent, 'Yaml Block Sequence');
    this.index_1 = 0;
  }
  BlockSequenceDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    return false;
  };
  BlockSequenceDecoder.prototype.decodeSequentially_xlblqy_k$ = function () {
    return false;
  };
  BlockSequenceDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_BLOCK_SEQUENCE_getInstance();
  };
  BlockSequenceDecoder.prototype.checkIndent_67tjfx_k$ = function (newIndent) {
    return this.baseIndent_1 <= newIndent;
  };
  BlockSequenceDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    if (this.index_1 === 0) {
      var token = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
      // Inline function 'kotlin.check' call
      var tmp0_check = equals(token, Token_MULTILINE_LIST_FLAG_getInstance());
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.BlockSequenceDecoder.decodeElementIndex.<anonymous>' call
        tmp$ret$0 = "The beginning token must be '-' but found " + token;
        var message = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var tmp0_this = this;
      var tmp1 = tmp0_this.index_1;
      tmp0_this.index_1 = tmp1 + 1 | 0;
      return tmp1;
    }
    var token_0 = this.nextToken_5fb3mz_k$(this.$this_3.tokenStream_1);
    var tmp0 = token_0 == null ? -1 : token_0.get_ordinal_ip24qg_k$();
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$1 = null;
    if (equals(token_0, tmp$ret$1)) {
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
      tmp$ret$2 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
      return tmp$ret$2;
    } else {
      if (tmp0 === 2) {
        var tmp;
        if (this.checkIndent_67tjfx_k$(this.$this_3.tokenStream_1.get_currentIndent_v1v68s_k$())) {
          var tmp2_this = this;
          var tmp3 = tmp2_this.index_1;
          tmp2_this.index_1 = tmp3 + 1 | 0;
          tmp = tmp3;
        } else {
          this.$this_3.tokenStream_1.reuseToken_l8k9sb_k$(token_0);
          var tmp$ret$3;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$3 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          tmp = tmp$ret$3;
        }
        return tmp;
      } else {
        if (tmp0 === 7) {
          this.$this_3.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.$this_3.tokenStream_1.get_strBuff_tvhfwl_k$()));
          var tmp$ret$4;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$4 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$4;
        } else {
          this.$this_3.tokenStream_1.reuseToken_l8k9sb_k$(token_0);
          var tmp$ret$5;
          // Inline function 'net.mamoe.yamlkt.internal.READ_DONE' call
          tmp$ret$5 = Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
          return tmp$ret$5;
        }
      }
    }
  };
  function _get_yamlStringDecoder__t2rxyz($this) {
    return $this.yamlStringDecoder_1;
  }
  function _get_yamlNullStringDecoder__kr0ms4($this) {
    return $this.yamlNullStringDecoder_1;
  }
  function YamlStringDecoder($outer) {
    this.$this_2 = $outer;
    AbstractDecoder.call(this, $outer, 'Yaml Literal');
  }
  YamlStringDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    return false;
  };
  YamlStringDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_STRING_getInstance();
  };
  YamlStringDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    throw IllegalStateException_init_$Create$("shouldn't be called");
  };
  function YamlNullStringDecoder($outer) {
    this.$this_2 = $outer;
    AbstractDecoder.call(this, $outer, 'Yaml Null');
  }
  YamlNullStringDecoder.prototype.decodeElementIndex_nk5a2l_k$ = function (descriptor) {
    throw IllegalStateException_init_$Create$("shouldn't be called");
  };
  YamlNullStringDecoder.prototype.get_kind_wop7ml_k$ = function () {
    return Kind_NULL_STRING_getInstance();
  };
  YamlNullStringDecoder.prototype.get_stopOnComma_tpjv6d_k$ = function () {
    throw IllegalStateException_init_$Create$("shouldn't be called");
  };
  YamlNullStringDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    return false;
  };
  function nextStringOrNull($this, stopOnComma) {
    var tmp0_safe_receiver = nextString($this, stopOnComma);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.nextStringOrNull.<anonymous>' call
      if (equals(tmp0_safe_receiver, Token_STRING_NULL_getInstance())) {
        return null;
      }
      if (tmp0_safe_receiver == null ? true : typeof tmp0_safe_receiver === 'string')
        tmp0_safe_receiver;
      else
        THROW_CCE();
      tmp$ret$0 = equals(tmp0_safe_receiver, '~') ? null : (tmp0_safe_receiver.length === 4 ? equals_0(tmp0_safe_receiver, 'null', true) : false) ? null : tmp0_safe_receiver;
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function nextStringOrNull$default($this, stopOnComma, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      stopOnComma = true;
    return nextStringOrNull($this, stopOnComma);
  }
  function decodeByteElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    return limitToByte($this.withIntegerValue_w988yz_k$(tmp$ret$0, 'byte', descriptor, index));
  }
  function decodeCharElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.decodeCharElementImpl.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp0_check = tmp0_safe_receiver.length === 1;
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.decodeCharElementImpl.<anonymous>.<anonymous>' call
        tmp$ret$1 = 'too many chars for a char: ' + tmp0_safe_receiver;
        var message = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      tmp$ret$2 = first(tmp0_safe_receiver);
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_1;
    var tmp_2 = tmp1_elvis_lhs;
    if ((tmp_2 == null ? null : new Char(tmp_2)) == null) {
      tmp_1 = checkNonStrictNullability($this, descriptor, index);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var tmp2_elvis_lhs = tmp_1;
    var tmp_3;
    var tmp_4 = tmp2_elvis_lhs;
    if ((tmp_4 == null ? null : new Char(tmp_4)) == null) {
      tmp_3 = _Char___init__impl__6a9atx(0);
    } else {
      tmp_3 = tmp2_elvis_lhs;
    }
    return tmp_3;
  }
  function decodeDoubleElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    return withDoubleValue(tmp$ret$0, $this, 'double', descriptor, index);
  }
  function decodeFloatElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    return withFloatValue(tmp$ret$0, $this, 'float', descriptor, index);
  }
  function decodeIntElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    return limitToInt($this.withIntegerValue_w988yz_k$(tmp$ret$0, 'int', descriptor, index));
  }
  function decodeLongElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    return $this.withIntegerValue_w988yz_k$(tmp$ret$0, 'long', descriptor, index);
  }
  function decodeShortElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    return limitToShort($this.withIntegerValue_w988yz_k$(tmp$ret$0, 'short', descriptor, index));
  }
  function decodeStringElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_elvis_lhs_0 = tmp$ret$0;
    var tmp1_elvis_lhs = tmp0_elvis_lhs_0 == null ? checkNonStrictNullability($this, descriptor, index) : tmp0_elvis_lhs_0;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function decodeBooleanElementImpl(_this__u8e3s4, $this, descriptor, index) {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = _this__u8e3s4;
    tmp.logDecode_uxlfy9_k$(descriptor, index, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = _this__u8e3s4;
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$2;
      // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.decodeBooleanElementImpl.<anonymous>' call
      var tmp0_subject = tmp0_safe_receiver;
      var tmp_1;
      switch (tmp0_subject) {
        case 'null':
        case '~':
          tmp_1 = null;
          break;
        case '1':
        case 'true':
        case 'TRUE':
          tmp_1 = true;
          break;
        case '0':
        case 'false':
        case 'FALSE':
          tmp_1 = false;
          break;
        default:
          if ($this.configuration_1.get_nonStrictNumber_bmk1sa_k$()) {
            var tmp1_subject = numberToInt(withDoubleValue(tmp0_safe_receiver, $this, 'boolean', descriptor, index));
            if (tmp1_subject === 1)
              return true;
            else if (tmp1_subject === 0)
              return false;
          }

          var tmp$ret$1;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          var tmp0_contextualDecodingException = 'illegal boolean value: ' + tmp0_safe_receiver;
          tmp$ret$1 = contextualDecodingException_3($this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, descriptor, index, null);

          throw tmp$ret$1;
      }
      tmp$ret$2 = tmp_1;
      tmp$ret$3 = tmp$ret$2;
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    var tmp_2;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$6;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$5;
      // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.decodeBooleanElementImpl.<anonymous>' call
      var tmp_3;
      if ($this.configuration_1.get_nonStrictNullability_m9bewm_k$()) {
        return false;
      } else {
        var tmp$ret$4;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        Companion_getInstance_9();
        var tmp0_contextualDecodingException_0 = 'unexpected null value, you may enable `nonStrictNullability`';
        tmp$ret$4 = contextualDecodingException_3($this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException_0, descriptor, index, null);
        throw tmp$ret$4;
      }
      tmp$ret$5 = tmp_3;
      tmp$ret$6 = tmp$ret$5;
      tmp_2 = tmp$ret$6;
    } else {
      tmp_2 = tmp1_elvis_lhs;
    }
    return tmp_2;
  }
  function castFromNullToZeroOrNull(_this__u8e3s4, $this, descriptor, index) {
    if ((_this__u8e3s4 == null ? true : _this__u8e3s4 === '~') ? true : _this__u8e3s4.length === 4 ? equals_0(_this__u8e3s4, 'null', true) : false) {
      if ($this.configuration_1.get_nonStrictNullability_m9bewm_k$()) {
        return new Long(0, 0);
      } else {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        Companion_getInstance_9();
        var tmp0_contextualDecodingException = 'unexpected null value, you may enable `nonStrictNullability`';
        tmp$ret$0 = contextualDecodingException_3($this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, descriptor, index, null);
        throw tmp$ret$0;
      }
    }
    return null;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.UNEXPECTED_NULL_MESSAGE_1 = 'unexpected null value, you may enable `nonStrictNullability`';
  }
  Companion_5.prototype.get_UNEXPECTED_NULL_MESSAGE_eyh3zo_k$ = function () {
    return this.UNEXPECTED_NULL_MESSAGE_1;
  };
  var Companion_instance_5;
  function Companion_getInstance_9() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function checkNonStrictNullability($this, descriptor, index) {
    if (!$this.configuration_1.get_nonStrictNullability_m9bewm_k$()) {
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
      Companion_getInstance_9();
      var tmp0_contextualDecodingException = 'unexpected null value, you may enable `nonStrictNullability`';
      tmp$ret$0 = contextualDecodingException_3($this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, descriptor, index, null);
      throw tmp$ret$0;
    }
    return null;
  }
  function withDoubleValue(_this__u8e3s4, $this, typeName, descriptor, index) {
    var tmp0_safe_receiver = castFromNullToZeroOrNull(_this__u8e3s4, $this, descriptor, index);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return 0.0;
      tmp = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$9;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$8;
      // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.withDoubleValue.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !(_this__u8e3s4 == null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$1;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$1 = 'Check failed.';
        var message = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var canBeHexOrBin = _this__u8e3s4.length > 2 ? equals(new Char(charSequenceGet(_this__u8e3s4, 0)), new Char(_Char___init__impl__6a9atx(48))) : false;
      if (canBeHexOrBin) {
        if (equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(120))) ? true : equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(88))))
          return HexConverter_getInstance().hexToLong_stdpjk_k$(_this__u8e3s4, 2).toDouble_ygsx0s_k$();
        else if (equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(98))) ? true : equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(66))))
          return BinaryConverter_getInstance().binToLong_r0xlng_k$(_this__u8e3s4, 2).toDouble_ygsx0s_k$();
      }
      var tmp$ret$7;
      // Inline function 'kotlin.getOrElse' call
      var tmp$ret$5;
      // Inline function 'kotlin.runCatching' call
      var tmp_1;
      try {
        var tmp$ret$3;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.withDoubleValue.<anonymous>.<anonymous>' call
        tmp$ret$2 = toDouble(_this__u8e3s4);
        var tmp2_success = tmp$ret$2;
        tmp$ret$3 = _Result___init__impl__xyqfz8(tmp2_success);
        tmp_1 = tmp$ret$3;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var tmp$ret$4;
          // Inline function 'kotlin.Companion.failure' call
          var tmp3_failure = Companion_getInstance();
          tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_2 = tmp$ret$4;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      tmp$ret$5 = tmp_1;
      var tmp4_getOrElse = tmp$ret$5;
      // Inline function 'kotlin.contracts.contract' call
      var exception = Result__exceptionOrNull_impl_p6xea9(tmp4_getOrElse);
      var tmp_3;
      if (exception == null) {
        var tmp_4 = _Result___get_value__impl__bjfvqg(tmp4_getOrElse);
        tmp_3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      } else {
        var tmp$ret$6;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        var tmp0_contextualDecodingException = 'Invalid ' + typeName + ': ' + _this__u8e3s4;
        tmp$ret$6 = contextualDecodingException_3($this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, descriptor, index, exception);
        throw tmp$ret$6;
      }
      tmp$ret$7 = tmp_3;
      tmp$ret$8 = tmp$ret$7;
      tmp$ret$9 = tmp$ret$8;
      tmp_0 = tmp$ret$9;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function withFloatValue(_this__u8e3s4, $this, typeName, descriptor, index) {
    var tmp0_safe_receiver = castFromNullToZeroOrNull(_this__u8e3s4, $this, descriptor, index);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return 0.0;
      tmp = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$12;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$11;
      // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.withFloatValue.<anonymous>' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !(_this__u8e3s4 == null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$1;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$1 = 'Check failed.';
        var message = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var canBeHexOrBin = _this__u8e3s4.length > 2 ? equals(new Char(charSequenceGet(_this__u8e3s4, 0)), new Char(_Char___init__impl__6a9atx(48))) : false;
      if (canBeHexOrBin) {
        if (equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(120))) ? true : equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(88))))
          return HexConverter_getInstance().hexToLong_stdpjk_k$(_this__u8e3s4, 2).toFloat_jhbgwv_k$();
        else if (equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(98))) ? true : equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(66))))
          return BinaryConverter_getInstance().binToLong_r0xlng_k$(_this__u8e3s4, 2).toFloat_jhbgwv_k$();
      }
      var tmp$ret$10;
      // Inline function 'kotlin.getOrElse' call
      var tmp$ret$8;
      // Inline function 'kotlin.runCatching' call
      var tmp_1;
      try {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.success' call
        var tmp1_success = Companion_getInstance();
        var tmp$ret$5;
        // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.withFloatValue.<anonymous>.<anonymous>' call
        var tmp$ret$4;
        // Inline function 'kotlin.text.toFloat' call
        var tmp$ret$3;
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp0_unsafeCast = toDouble(_this__u8e3s4);
        var tmp$ret$2;
        // Inline function 'kotlin.js.asDynamic' call
        tmp$ret$2 = tmp0_unsafeCast;
        tmp$ret$3 = tmp$ret$2;
        tmp$ret$4 = tmp$ret$3;
        tmp$ret$5 = tmp$ret$4;
        var tmp2_success = tmp$ret$5;
        tmp$ret$6 = _Result___init__impl__xyqfz8(tmp2_success);
        tmp_1 = tmp$ret$6;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var tmp$ret$7;
          // Inline function 'kotlin.Companion.failure' call
          var tmp3_failure = Companion_getInstance();
          tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_2 = tmp$ret$7;
        } else {
          throw $p;
        }
        tmp_1 = tmp_2;
      }
      tmp$ret$8 = tmp_1;
      var tmp4_getOrElse = tmp$ret$8;
      // Inline function 'kotlin.contracts.contract' call
      var exception = Result__exceptionOrNull_impl_p6xea9(tmp4_getOrElse);
      var tmp_3;
      if (exception == null) {
        var tmp_4 = _Result___get_value__impl__bjfvqg(tmp4_getOrElse);
        tmp_3 = (tmp_4 == null ? true : isObject(tmp_4)) ? tmp_4 : THROW_CCE();
      } else {
        var tmp$ret$9;
        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
        var tmp0_contextualDecodingException = 'Invalid ' + typeName + ': ' + _this__u8e3s4;
        tmp$ret$9 = contextualDecodingException_3($this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, descriptor, index, exception);
        throw tmp$ret$9;
      }
      tmp$ret$10 = tmp_3;
      tmp$ret$11 = tmp$ret$10;
      tmp$ret$12 = tmp$ret$11;
      tmp_0 = tmp$ret$12;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function beginStructureImpl$nextToken($parentDecoder, this$0) {
    var tmp0_safe_receiver = $parentDecoder;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.beginStructureImpl.nextToken.<anonymous>' call
      tmp$ret$0 = tmp0_safe_receiver.nextToken_5fb3mz_k$(this$0.tokenStream_1);
      tmp$ret$1 = tmp$ret$0;
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this$0.tokenStream_1.nextToken_aky1qk_k$(false) : tmp1_elvis_lhs;
  }
  function Kind_FLOW_CLASS_getInstance() {
    Kind_initEntries();
    return Kind_FLOW_CLASS_instance;
  }
  function Kind_FLOW_MAP_getInstance() {
    Kind_initEntries();
    return Kind_FLOW_MAP_instance;
  }
  function Kind_FLOW_SEQUENCE_getInstance() {
    Kind_initEntries();
    return Kind_FLOW_SEQUENCE_instance;
  }
  function Kind_STRING_getInstance() {
    Kind_initEntries();
    return Kind_STRING_instance;
  }
  function Kind_NULL_STRING_getInstance() {
    Kind_initEntries();
    return Kind_NULL_STRING_instance;
  }
  function Kind_BLOCK_CLASS_getInstance() {
    Kind_initEntries();
    return Kind_BLOCK_CLASS_instance;
  }
  function Kind_BLOCK_MAP_getInstance() {
    Kind_initEntries();
    return Kind_BLOCK_MAP_instance;
  }
  function Kind_BLOCK_SEQUENCE_getInstance() {
    Kind_initEntries();
    return Kind_BLOCK_SEQUENCE_instance;
  }
  function Kind_EMPTY_CLASS_getInstance() {
    Kind_initEntries();
    return Kind_EMPTY_CLASS_instance;
  }
  function YamlDecoder(configuration, tokenStream, serializersModule) {
    Companion_getInstance_9();
    this.configuration_1 = configuration;
    this.tokenStream_1 = tokenStream;
    this.serializersModule_1 = serializersModule;
    this.inlineDecoder_1 = new InlineDecoder(this);
    this.emptyClassDecoder_1 = new EmptyClassDecoder(this);
    this.yamlStringDecoder_1 = new YamlStringDecoder(this);
    this.yamlNullStringDecoder_1 = new YamlNullStringDecoder(this);
  }
  YamlDecoder.prototype.get_tokenStream_as3k40_k$ = function () {
    return this.tokenStream_1;
  };
  YamlDecoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  YamlDecoder.prototype.isNextWhitespace_fu73ep_k$ = function (_this__u8e3s4) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.peekNext' call
      var tmp$ret$0;
      // Inline function 'net.mamoe.yamlkt.internal.TokenStream.endOfInput' call
      tmp$ret$0 = _this__u8e3s4.get_cur_18j7s9_k$() === _this__u8e3s4.get_source_jl0x7o_k$().length;
      if (tmp$ret$0) {
        tmp$ret$1 = null;
        break $l$block;
      }
      var tmp$ret$4;
      // Inline function 'kotlin.let' call
      var tmp0_let = charSequenceGet(_this__u8e3s4.get_source_jl0x7o_k$(), _this__u8e3s4.get_cur_18j7s9_k$() + 1 | 0);
      // Inline function 'kotlin.contracts.contract' call
      var tmp;
      if (!isWhitespace(tmp0_let)) {
        var tmp_0;
        if (equals(new Char(tmp0_let), new Char(_Char___init__impl__6a9atx(45)))) {
          tmp_0 = true;
        } else {
          var tmp$ret$3;
          // Inline function 'net.mamoe.yamlkt.internal.Companion.get' call
          var tmp0_get = Companion_getInstance_8();
          var tmp_1;
          if (Char__compareTo_impl_ypi4mb(tmp0_let, _get_valuesLastIndex__qot761(tmp0_get)) > 0) {
            tmp_1 = null;
          } else {
            var tmp_2 = tmp0_get.get_values_ksazhn_k$();
            var tmp$ret$2;
            // Inline function 'kotlin.code' call
            tmp$ret$2 = Char__toInt_impl_vasixd(tmp0_let);
            tmp_1 = tmp_2[tmp$ret$2];
          }
          tmp$ret$3 = tmp_1;
          tmp_0 = tmp$ret$3 == null;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      if (tmp) {
        return true;
      }
      tmp$ret$4 = Unit_getInstance();
      tmp$ret$1 = tmp$ret$4;
    }
    return false;
  };
  YamlDecoder.prototype.decodeNotNullMark_us4ba1_k$ = function () {
    var token = this.tokenStream_1.nextToken_aky1qk_k$(false);
    var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
    var tmp;
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
    tmp$ret$0 = null;
    if (equals(token, tmp$ret$0)) {
      tmp = false;
    } else {
      if (tmp0 === 8) {
        tmp = false;
      } else {
        this.tokenStream_1.reuseToken_l8k9sb_k$(token);
        tmp = true;
      }
    }
    return tmp;
  };
  YamlDecoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return this.beginStructureImpl_30sp90_k$(null, descriptor);
  };
  YamlDecoder.prototype.beginStructureImpl_30sp90_k$ = function (parentDecoder, descriptor) {
    Debugging_getInstance().beginStructure_ho3cfd_k$(descriptor, parentDecoder);
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    if (equals(tmp0_subject, LIST_getInstance())) {
      var token = this.tokenStream_1.nextToken_aky1qk_k$(false);
      var tmp0 = token == null ? -1 : token.get_ordinal_ip24qg_k$();
      var tmp;
      switch (tmp0) {
        case -1:
          var tmp$ret$0;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          tmp$ret$0 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: Early EOF', null, -1, null);

          throw tmp$ret$0;
        case 3:
          tmp = new FlowSequenceDecoder(this);
          break;
        case 2:
          this.tokenStream_1.reuseToken_l8k9sb_k$(token);
          tmp = new BlockSequenceDecoder(this, this.tokenStream_1.get_currentIndent_v1v68s_k$());
          break;
        default:
          var tmp$ret$1;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          var tmp0_contextualDecodingException = 'expected list(sequence), but found ' + token;
          tmp$ret$1 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, null, -1, null);

          throw tmp$ret$1;
      }
      return tmp;
    } else {
      var tmp_0;
      if (tmp0_subject instanceof PolymorphicKind) {
        tmp_0 = true;
      } else {
        tmp_0 = equals(tmp0_subject, CLASS_getInstance());
      }
      if (tmp_0) {
        var token_0 = beginStructureImpl$nextToken(parentDecoder, this);
        var tmp0_0 = token_0 == null ? -1 : token_0.get_ordinal_ip24qg_k$();
        var tmp_1;
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
        tmp$ret$2 = null;
        if (equals(token_0, tmp$ret$2)) {
          tmp_1 = this.emptyClassDecoder_1;
        } else {
          if (tmp0_0 === 5) {
            tmp_1 = new FlowClassDecoder(this);
          } else {
            if (tmp0_0 === 7) {
              this.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.tokenStream_1.get_strBuff_tvhfwl_k$()));
              tmp_1 = new BlockClassDecoder(this, this.tokenStream_1.get_currentIndent_v1v68s_k$());
            } else {
              var tmp$ret$3;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              var tmp1_contextualDecodingException = 'illegal beginning token ' + token_0 + ' on decoding class';
              tmp$ret$3 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);
              throw tmp$ret$3;
            }
          }
        }
        return tmp_1;
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          var token_1 = beginStructureImpl$nextToken(parentDecoder, this);
          var tmp0_1 = token_1 == null ? -1 : token_1.get_ordinal_ip24qg_k$();
          var tmp_2;
          var tmp$ret$4;
          // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
          tmp$ret$4 = null;
          if (equals(token_1, tmp$ret$4)) {
            var tmp$ret$5;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            tmp$ret$5 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: Early EOF', null, -1, null);
            throw tmp$ret$5;
          } else {
            if (tmp0_1 === 5) {
              tmp_2 = new FlowMapDecoder(this);
            } else {
              if (tmp0_1 === 7) {
                this.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.tokenStream_1.get_strBuff_tvhfwl_k$()));
                tmp_2 = new BlockMapDecoder(this, this.tokenStream_1.get_currentIndent_v1v68s_k$());
              } else {
                var tmp$ret$6;
                // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                var tmp2_contextualDecodingException = 'illegal beginning token ' + token_1 + ' on decoding map';
                tmp$ret$6 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp2_contextualDecodingException, null, -1, null);
                throw tmp$ret$6;
              }
            }
          }
          return tmp_2;
        } else {
          if (equals(tmp0_subject, CONTEXTUAL_getInstance())) {
            var token_2 = beginStructureImpl$nextToken(parentDecoder, this);
            var tmp0_2 = token_2 == null ? -1 : token_2.get_ordinal_ip24qg_k$();
            var tmp_3;
            var tmp$ret$7;
            // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
            tmp$ret$7 = null;
            if (equals(token_2, tmp$ret$7)) {
              var tmp$ret$8;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              tmp$ret$8 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: Early EOF', null, -1, null);
              throw tmp$ret$8;
            } else {
              if (tmp0_2 === 5) {
                tmp_3 = new FlowMapDecoder(this);
              } else {
                if (tmp0_2 === 8) {
                  tmp_3 = this.yamlNullStringDecoder_1;
                } else {
                  if (tmp0_2 === 7) {
                    var beforeRealIndent = this.tokenStream_1.get_currentIndent_v1v68s_k$();
                    var beforeIndent = this.tokenStream_1.get_currentIndent_v1v68s_k$();
                    var stringValue = ensureNotNull(this.tokenStream_1.get_strBuff_tvhfwl_k$());
                    var next = beginStructureImpl$nextToken(parentDecoder, this);
                    var tmp0_3 = next == null ? -1 : next.get_ordinal_ip24qg_k$();
                    var tmp_4;
                    var tmp$ret$9;
                    // Inline function 'net.mamoe.yamlkt.internal.END_OF_FILE' call
                    tmp$ret$9 = null;
                    if (equals(next, tmp$ret$9)) {
                      tmp_4 = this.yamlStringDecoder_1;
                    } else {
                      if (tmp0_3 === 1) {
                        this.tokenStream_1.set_currentIndent_27p6t4_k$(beforeIndent);
                        this.tokenStream_1.reuseToken_l8k9sb_k$(next);
                        this.tokenStream_1.reuseToken_m2na0d_k$(stringValue);
                        tmp_4 = new BlockMapDecoder(this, beforeRealIndent);
                      } else {
                        if (tmp0_3 === 7) {
                          this.tokenStream_1.reuseToken_m2na0d_k$(ensureNotNull(this.tokenStream_1.get_strBuff_tvhfwl_k$()));
                          this.tokenStream_1.set_strBuff_ifcc2g_k$(stringValue);
                          tmp_4 = this.yamlStringDecoder_1;
                        } else {
                          this.tokenStream_1.reuseToken_l8k9sb_k$(next);
                          tmp_4 = this.yamlStringDecoder_1;
                        }
                      }
                    }
                    return tmp_4;
                  } else {
                    if (tmp0_2 === 3) {
                      tmp_3 = new FlowSequenceDecoder(this);
                    } else {
                      if (tmp0_2 === 2) {
                        this.tokenStream_1.reuseToken_l8k9sb_k$(token_2);
                        tmp_3 = new BlockSequenceDecoder(this, this.tokenStream_1.get_currentIndent_v1v68s_k$());
                      } else {
                        var tmp$ret$10;
                        // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
                        var tmp3_contextualDecodingException = 'illegal beginning token ' + token_2 + ' on decoding contextual';
                        tmp$ret$10 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp3_contextualDecodingException, null, -1, null);
                        throw tmp$ret$10;
                      }
                    }
                  }
                }
              }
            }
            return tmp_3;
          } else {
            var tmp$ret$11;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp4_contextualDecodingException = 'unsupported SerialKind ' + descriptor.get_kind_wop7ml_k$();
            tmp$ret$11 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp4_contextualDecodingException, null, -1, null);
            throw tmp$ret$11;
          }
        }
      }
    }
  };
  YamlDecoder.prototype.decodeShort_jjqk32_k$ = function () {
    return decodeShortElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeString_x3hxsx_k$ = function () {
    return decodeStringElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeBoolean_m0aca_k$ = function () {
    return decodeBooleanElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeByte_jzz7je_k$ = function () {
    return decodeByteElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeChar_dc2jtx_k$ = function () {
    return decodeCharElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeDouble_ur8l0f_k$ = function () {
    return decodeDoubleElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeFloat_jcnrwu_k$ = function () {
    return decodeFloatElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeInline_k1q7ba_k$ = function (inlineDescriptor) {
    return this.inlineDecoder_1;
  };
  YamlDecoder.prototype.decodeInt_8iq8f5_k$ = function () {
    return decodeIntElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeLong_jzt186_k$ = function () {
    return decodeLongElementImpl(nextStringOrNull$default(this, false, 2, null), this, null, -1);
  };
  YamlDecoder.prototype.decodeEnum_w3hzf6_k$ = function (enumDescriptor) {
    return getElementIndexOrThrow(enumDescriptor, this.decodeString_x3hxsx_k$());
  };
  YamlDecoder.prototype.decodeNull_jzrmuj_k$ = function () {
    var tmp$ret$0;
    // Inline function 'net.mamoe.yamlkt.internal.debuggingLogDecoder' call
    var tmp = Debugging_getInstance();
    var tmp0_elvis_lhs = null;
    tmp.logDecode_uxlfy9_k$(null, -1, tmp0_elvis_lhs == null ? '<null>' : tmp0_elvis_lhs);
    tmp$ret$0 = null;
    var tmp_0 = tmp$ret$0;
    var tmp_1;
    var tmp_2;
    if (tmp_0 == null) {
      tmp_2 = true;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = tmp_0;
    } else {
      tmp_1 = THROW_CCE();
    }
    return tmp_1;
  };
  YamlDecoder.prototype.withIntegerValue_w988yz_k$ = function (_this__u8e3s4, typeName, descriptor, index) {
    var tmp0_safe_receiver = castFromNullToZeroOrNull(_this__u8e3s4, this, descriptor, index);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return new Long(0, 0);
      tmp = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      var tmp$ret$18;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      var tmp0_check = !(_this__u8e3s4 == null);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp0_check) {
        var tmp$ret$1;
        // Inline function 'kotlin.check.<anonymous>' call
        tmp$ret$1 = 'Check failed.';
        var message = tmp$ret$1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var canBeHexOrBin = _this__u8e3s4.length > 2 ? equals(new Char(charSequenceGet(_this__u8e3s4, 0)), new Char(_Char___init__impl__6a9atx(48))) : false;
      if (canBeHexOrBin) {
        if (equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(120))) ? true : equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(88))))
          return HexConverter_getInstance().hexToLong_stdpjk_k$(_this__u8e3s4, 2);
        else if (equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(98))) ? true : equals(new Char(charSequenceGet(_this__u8e3s4, 1)), new Char(_Char___init__impl__6a9atx(66))))
          return BinaryConverter_getInstance().binToLong_r0xlng_k$(_this__u8e3s4, 2);
      }
      var tmp0_elvis_lhs = toLongOrNull(_this__u8e3s4);
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        var tmp$ret$17;
        // Inline function 'kotlin.getOrElse' call
        var tmp$ret$15;
        // Inline function 'kotlin.runCatching' call
        var tmp_2;
        try {
          var tmp$ret$13;
          // Inline function 'kotlin.Companion.success' call
          var tmp1_success = Companion_getInstance();
          var tmp$ret$12;
          // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.withIntegerValue.<anonymous>.<anonymous>' call
          var tmp_3;
          if (this.configuration_1.get_nonStrictNumber_bmk1sa_k$()) {
            var tmp$ret$10;
            // Inline function 'kotlin.getOrElse' call
            var tmp$ret$8;
            // Inline function 'kotlin.runCatching' call
            var tmp_4;
            try {
              var tmp$ret$6;
              // Inline function 'kotlin.Companion.success' call
              var tmp0_success = Companion_getInstance();
              var tmp$ret$5;
              // Inline function 'net.mamoe.yamlkt.internal.YamlDecoder.withIntegerValue.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$4;
              // Inline function 'kotlin.text.toFloat' call
              var tmp$ret$3;
              // Inline function 'kotlin.js.unsafeCast' call
              var tmp0_unsafeCast = toDouble(_this__u8e3s4);
              var tmp$ret$2;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$2 = tmp0_unsafeCast;
              tmp$ret$3 = tmp$ret$2;
              tmp$ret$4 = tmp$ret$3;
              tmp$ret$5 = tmp$ret$4;
              var tmp1_success_0 = tmp$ret$5;
              tmp$ret$6 = _Result___init__impl__xyqfz8(tmp1_success_0);
              tmp_4 = tmp$ret$6;
            } catch ($p) {
              var tmp_5;
              if ($p instanceof Error) {
                var tmp$ret$7;
                // Inline function 'kotlin.Companion.failure' call
                var tmp2_failure = Companion_getInstance();
                tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
                tmp_5 = tmp$ret$7;
              } else {
                throw $p;
              }
              tmp_4 = tmp_5;
            }
            tmp$ret$8 = tmp_4;
            var tmp3_getOrElse = tmp$ret$8;
            // Inline function 'kotlin.contracts.contract' call
            var exception = Result__exceptionOrNull_impl_p6xea9(tmp3_getOrElse);
            var tmp_6;
            if (exception == null) {
              var tmp_7 = _Result___get_value__impl__bjfvqg(tmp3_getOrElse);
              tmp_6 = (tmp_7 == null ? true : isObject(tmp_7)) ? tmp_7 : THROW_CCE();
            } else {
              var tmp$ret$9;
              // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
              var tmp0_contextualDecodingException = 'Cannot cast ' + _this__u8e3s4 + ' to ' + typeName;
              tmp$ret$9 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException, descriptor, index, null);
              throw tmp$ret$9;
            }
            tmp$ret$10 = tmp_6;
            tmp_3 = numberToLong(tmp$ret$10);
          } else {
            var tmp$ret$11;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp4_contextualDecodingException = 'Number ' + _this__u8e3s4 + ' overflow for ' + typeName;
            tmp$ret$11 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp4_contextualDecodingException, descriptor, index, null);
            throw tmp$ret$11;
          }
          tmp$ret$12 = tmp_3;
          var tmp2_success = tmp$ret$12;
          tmp$ret$13 = _Result___init__impl__xyqfz8(tmp2_success);
          tmp_2 = tmp$ret$13;
        } catch ($p) {
          var tmp_8;
          if ($p instanceof Error) {
            var tmp$ret$14;
            // Inline function 'kotlin.Companion.failure' call
            var tmp3_failure = Companion_getInstance();
            tmp$ret$14 = _Result___init__impl__xyqfz8(createFailure($p));
            tmp_8 = tmp$ret$14;
          } else {
            throw $p;
          }
          tmp_2 = tmp_8;
        }
        tmp$ret$15 = tmp_2;
        var tmp4_getOrElse = tmp$ret$15;
        // Inline function 'kotlin.contracts.contract' call
        var exception_0 = Result__exceptionOrNull_impl_p6xea9(tmp4_getOrElse);
        var tmp_9;
        if (exception_0 == null) {
          var tmp_10 = _Result___get_value__impl__bjfvqg(tmp4_getOrElse);
          tmp_9 = (tmp_10 == null ? true : isObject(tmp_10)) ? tmp_10 : THROW_CCE();
        } else {
          var tmp$ret$16;
          // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
          var tmp0_contextualDecodingException_0 = 'Invalid ' + typeName + ': ' + _this__u8e3s4;
          tmp$ret$16 = contextualDecodingException_3(this.tokenStream_1, 'Top-level decoder: ' + tmp0_contextualDecodingException_0, descriptor, index, exception_0);
          throw tmp$ret$16;
        }
        tmp$ret$17 = tmp_9;
        tmp_1 = tmp$ret$17;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      return tmp_1;
      tmp_0 = tmp$ret$18;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  };
  function getElementIndexOrThrow(_this__u8e3s4, name) {
    var index = _this__u8e3s4.getElementIndex_2hwbkl_k$(name);
    if (index === Companion_getInstance_1().get_UNKNOWN_NAME_lj8hxl_k$())
      throw SerializationException_init_$Create$(_this__u8e3s4.get_serialName_u2rqhk_k$() + " does not contain element with name '" + name + "'");
    return index;
  }
  function get_READ_DONE() {
    return Companion_getInstance_1().get_DECODE_DONE_1b8fna_k$();
  }
  function isOdd(_this__u8e3s4) {
    return !((_this__u8e3s4 & 1) === 0);
  }
  function YamlMapSerializer() {
    YamlMapSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlMap', tmp_0, [], null, 12, null);
  }
  YamlMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlMapSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlMapSerializer.deserialize.<anonymous>' call
        var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
        var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
        var tmp;
        switch (tmp0) {
          case 6:
            composite.set_dontWrapNextStructure_o3ncht_k$(true);
            tmp = new YamlMap(YamlElementMapSerializer_getInstance().deserialize_2t41fm_k$(composite));
            break;
          case 1:
            composite.set_dontWrapNextStructure_o3ncht_k$(true);
            tmp = new YamlMap(YamlElementMapSerializer_getInstance().deserialize_2t41fm_k$(composite));
            break;
          default:
            var tmp$ret$0;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException = composite.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException = 'Cannot read YamlMap from a ' + composite.get_name_woqyms_k$();
            tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);

            throw tmp$ret$0;
        }
        tmp$ret$1 = tmp;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
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
    var tmp_0 = tmp$ret$2;
    var tmp0_elvis_lhs = tmp_0 instanceof YamlMap ? tmp_0 : null;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Yaml Internal error: bad YamlElement casted for a map');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  };
  YamlMapSerializer.prototype.serialize_eqbs0w_k$ = function (encoder, value) {
    return encoder.encodeSerializableValue_g55msp_k$(YamlElementMapSerializer_getInstance(), value);
  };
  YamlMapSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_eqbs0w_k$(encoder, value instanceof YamlMap ? value : THROW_CCE());
  };
  var YamlMapSerializer_instance;
  function YamlMapSerializer_getInstance() {
    if (YamlMapSerializer_instance == null)
      new YamlMapSerializer();
    return YamlMapSerializer_instance;
  }
  function YamlListSerializer() {
    YamlListSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlList', tmp_0, [], null, 12, null);
  }
  YamlListSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlListSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlListSerializer.deserialize.<anonymous>' call
        var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
        var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
        var tmp;
        switch (tmp0) {
          case 2:
            composite.set_dontWrapNextStructure_o3ncht_k$(true);
            tmp = new YamlList(YamlElementListSerializer_getInstance().deserialize_2t41fm_k$(composite));
            break;
          case 7:
            composite.set_dontWrapNextStructure_o3ncht_k$(false);
            tmp = new YamlList(YamlElementListSerializer_getInstance().deserialize_2t41fm_k$(composite));
            break;
          default:
            var tmp$ret$0;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException = composite.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException = 'Cannot read YamlList from a ' + composite.get_name_woqyms_k$();
            tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);

            throw tmp$ret$0;
        }
        tmp$ret$1 = tmp;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
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
    var tmp_0 = tmp$ret$2;
    var tmp0_elvis_lhs = tmp_0 instanceof YamlList ? tmp_0 : null;
    var tmp_1;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Yaml Internal error: bad YamlElement casted for a list');
    } else {
      tmp_1 = tmp0_elvis_lhs;
    }
    return tmp_1;
  };
  YamlListSerializer.prototype.serialize_50pm0_k$ = function (encoder, value) {
    return encoder.encodeSerializableValue_g55msp_k$(YamlElementListSerializer_getInstance(), value);
  };
  YamlListSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_50pm0_k$(encoder, value instanceof YamlList ? value : THROW_CCE());
  };
  var YamlListSerializer_instance;
  function YamlListSerializer_getInstance() {
    if (YamlListSerializer_instance == null)
      new YamlListSerializer();
    return YamlListSerializer_instance;
  }
  function YamlLiteralSerializer() {
    YamlLiteralSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlLiteral', tmp_0, [], null, 12, null);
  }
  YamlLiteralSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlLiteralSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.YamlLiteralSerializer.deserialize.<anonymous>' call
        var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
        var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
        var tmp;
        switch (tmp0) {
          case 4:
            var tmp$ret$0;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException = composite.get_parentYamlDecoder_xu5cdm_k$();
            tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: Expected a YamlLiteral, but found YamlNull', null, -1, null);

            throw tmp$ret$0;
          case 3:
            tmp = new YamlLiteral(ensureNotNull(composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_strBuff_tvhfwl_k$()));
            break;
          default:
            var tmp$ret$1;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp1_contextualDecodingException = composite.get_parentYamlDecoder_xu5cdm_k$();
            var tmp2_contextualDecodingException = 'Cannot read YamlLiteral from a ' + composite.get_name_woqyms_k$();
            tmp$ret$1 = contextualDecodingException_3(tmp1_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp2_contextualDecodingException, null, -1, null);

            throw tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
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
    return tmp$ret$3;
  };
  YamlLiteralSerializer.prototype.serialize_a83dkj_k$ = function (encoder, value) {
    encoder.encodeSerializableValue_g55msp_k$(serializer(StringCompanionObject_getInstance()), value.get_content_h02jrk_k$());
  };
  YamlLiteralSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_a83dkj_k$(encoder, value instanceof YamlLiteral ? value : THROW_CCE());
  };
  var YamlLiteralSerializer_instance;
  function YamlLiteralSerializer_getInstance() {
    if (YamlLiteralSerializer_instance == null)
      new YamlLiteralSerializer();
    return YamlLiteralSerializer_instance;
  }
  function YamlNullSerializer() {
    YamlNullSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlNull', tmp_0, [], null, 12, null);
  }
  YamlNullSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlNullSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$2;
        // Inline function 'net.mamoe.yamlkt.internal.YamlNullSerializer.deserialize.<anonymous>' call
        var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
        var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
        var tmp;
        switch (tmp0) {
          case 4:
            tmp = YamlNull_getInstance();
            break;
          case 3:
            var tmp$ret$0;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException = composite.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException = 'Expected a YamlNull, but found YamlLiteral("' + composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_strBuff_tvhfwl_k$() + '")';
            tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);

            throw tmp$ret$0;
          default:
            var tmp$ret$1;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp2_contextualDecodingException = composite.get_parentYamlDecoder_xu5cdm_k$();
            var tmp3_contextualDecodingException = 'Cannot read YamlNull from a ' + composite.get_name_woqyms_k$();
            tmp$ret$1 = contextualDecodingException_3(tmp2_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp3_contextualDecodingException, null, -1, null);

            throw tmp$ret$1;
        }
        tmp$ret$2 = tmp;
        tmp$ret$3 = tmp$ret$2;
        break $l$block;
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
    return tmp$ret$3;
  };
  YamlNullSerializer.prototype.serialize_vs735r_k$ = function (encoder, value) {
    encoder.encodeNullableSerializableValue_4n8qik_k$(serializer(StringCompanionObject_getInstance()), null);
  };
  YamlNullSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_vs735r_k$(encoder, value instanceof YamlNull ? value : THROW_CCE());
  };
  var YamlNullSerializer_instance;
  function YamlNullSerializer_getInstance() {
    if (YamlNullSerializer_instance == null)
      new YamlNullSerializer();
    return YamlNullSerializer_instance;
  }
  function YamlElementSerializer() {
    YamlElementSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlElement', tmp_0, [], null, 12, null);
  }
  YamlElementSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlElementSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.YamlElementSerializer.deserialize.<anonymous>' call
        var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
        var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
        var tmp;
        switch (tmp0) {
          case 1:
          case 6:
            composite.set_dontWrapNextStructure_o3ncht_k$(true);
            tmp = new YamlMap(YamlElementMapSerializer_getInstance().deserialize_2t41fm_k$(composite));
            break;
          case 2:
          case 7:
            composite.set_dontWrapNextStructure_o3ncht_k$(true);
            tmp = new YamlList(YamlElementListSerializer_getInstance().deserialize_2t41fm_k$(composite));
            break;
          case 4:
            tmp = YamlNull_getInstance();
            break;
          case 3:
            tmp = new YamlLiteral(ensureNotNull(composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_strBuff_tvhfwl_k$()));
            break;
          default:
            var tmp0_error = 'Yaml Internal error: bad decoder: ' + composite;
            throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
        tmp$ret$0 = tmp;
        tmp$ret$1 = tmp$ret$0;
        break $l$block;
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
    return tmp$ret$1;
  };
  YamlElementSerializer.prototype.serialize_hthj28_k$ = function (encoder, value) {
    var tmp0_subject = value;
    var tmp;
    if (tmp0_subject instanceof YamlPrimitive) {
      Companion_getInstance_7().serializer_9w0wvi_k$().serialize_32qylj_k$(encoder, value);
      tmp = Unit_getInstance();
    } else {
      if (tmp0_subject instanceof YamlMap) {
        Companion_getInstance_3().serializer_9w0wvi_k$().serialize_32qylj_k$(encoder, value);
        tmp = Unit_getInstance();
      } else {
        if (tmp0_subject instanceof YamlList) {
          Companion_getInstance_4().serializer_9w0wvi_k$().serialize_32qylj_k$(encoder, value);
          tmp = Unit_getInstance();
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  YamlElementSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_hthj28_k$(encoder, value instanceof YamlElement ? value : THROW_CCE());
  };
  var YamlElementSerializer_instance;
  function YamlElementSerializer_getInstance() {
    if (YamlElementSerializer_instance == null)
      new YamlElementSerializer();
    return YamlElementSerializer_instance;
  }
  function YamlPrimitiveSerializer() {
    YamlPrimitiveSerializer_instance = this;
    var tmp = this;
    var tmp_0 = CONTEXTUAL_getInstance();
    tmp.descriptor_1 = buildSerialDescriptor$default('YamlPrimitive', tmp_0, [], null, 12, null);
  }
  YamlPrimitiveSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  YamlPrimitiveSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlinx.serialization.encoding.decodeStructure' call
      var tmp0_decodeStructure = this.descriptor_1;
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var ex = null;
      try {
        var tmp$ret$1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlPrimitiveSerializer.deserialize.<anonymous>' call
        var tmp0_subject = (composite instanceof AbstractDecoder ? composite : THROW_CCE()).get_kind_wop7ml_k$();
        var tmp0 = tmp0_subject.get_ordinal_ip24qg_k$();
        var tmp;
        switch (tmp0) {
          case 4:
            tmp = YamlNull_getInstance();
            break;
          case 3:
            tmp = new YamlLiteral(ensureNotNull(composite.get_parentYamlDecoder_xu5cdm_k$().get_tokenStream_as3k40_k$().get_strBuff_tvhfwl_k$()));
            break;
          default:
            var tmp$ret$0;
            // Inline function 'net.mamoe.yamlkt.internal.contextualDecodingException' call
            var tmp0_contextualDecodingException = composite.get_parentYamlDecoder_xu5cdm_k$();
            var tmp1_contextualDecodingException = 'Cannot read YamlPrimitive from a ' + composite.get_name_woqyms_k$();
            tmp$ret$0 = contextualDecodingException_3(tmp0_contextualDecodingException.get_tokenStream_as3k40_k$(), 'Top-level decoder: ' + tmp1_contextualDecodingException, null, -1, null);

            throw tmp$ret$0;
        }
        tmp$ret$1 = tmp;
        tmp$ret$2 = tmp$ret$1;
        break $l$block;
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
    return tmp$ret$2;
  };
  YamlPrimitiveSerializer.prototype.serialize_ebt563_k$ = function (encoder, value) {
    encoder.encodeNullableSerializableValue_4n8qik_k$(serializer(StringCompanionObject_getInstance()), value.get_content_h02jrk_k$());
  };
  YamlPrimitiveSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ebt563_k$(encoder, value instanceof YamlPrimitive ? value : THROW_CCE());
  };
  var YamlPrimitiveSerializer_instance;
  function YamlPrimitiveSerializer_getInstance() {
    if (YamlPrimitiveSerializer_instance == null)
      new YamlPrimitiveSerializer();
    return YamlPrimitiveSerializer_instance;
  }
  function YamlElementMapSerializer() {
    YamlElementMapSerializer_instance = this;
    this.$$delegate_0__1 = MapSerializer(Companion_getInstance_6().serializer_9w0wvi_k$(), Companion_getInstance_6().serializer_9w0wvi_k$());
  }
  YamlElementMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  YamlElementMapSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  YamlElementMapSerializer.prototype.serialize_52twoz_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  YamlElementMapSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_52twoz_k$(encoder, (!(value == null) ? isInterface(value, Map) : false) ? value : THROW_CCE());
  };
  var YamlElementMapSerializer_instance;
  function YamlElementMapSerializer_getInstance() {
    if (YamlElementMapSerializer_instance == null)
      new YamlElementMapSerializer();
    return YamlElementMapSerializer_instance;
  }
  function YamlElementListSerializer() {
    YamlElementListSerializer_instance = this;
    this.$$delegate_0__1 = ListSerializer(Companion_getInstance_6().serializer_9w0wvi_k$());
  }
  YamlElementListSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  YamlElementListSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  YamlElementListSerializer.prototype.serialize_l58lc4_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, value);
  };
  YamlElementListSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_l58lc4_k$(encoder, (!(value == null) ? isInterface(value, List) : false) ? value : THROW_CCE());
  };
  var YamlElementListSerializer_instance;
  function YamlElementListSerializer_getInstance() {
    if (YamlElementListSerializer_instance == null)
      new YamlElementListSerializer();
    return YamlElementListSerializer_instance;
  }
  function _set_justStarted__v1a08g($this, _set____db54di) {
    $this.justStarted_1 = _set____db54di;
  }
  function _get_justStarted__9pfves($this) {
    return $this.justStarted_1;
  }
  function _set_isKey__g0qqz4($this, _set____db54di) {
    $this.isKey_1 = _set____db54di;
  }
  function _get_isKey__g0dpic($this) {
    return $this.isKey_1;
  }
  function structuredKeyValue($this, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.isKey_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.structuredKeyValue.<anonymous>' call
    $this.isKey_1 = !$this.isKey_1;
    tmp$ret$0 = tmp0_also;
    var isKey = tmp$ret$0;
    if (isKey) {
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp1_write = $this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp1_write.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this = tmp1_write;
        var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
        tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
      }
      _get_output__ji2uqy(tmp1_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      if ($this.justStarted_1) {
        $this.justStarted_1 = false;
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        var tmp2_write = $this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp2_write.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_0 = tmp2_write;
          var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
          tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
        }
        _get_output__ji2uqy(tmp2_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(44));
      }
      block($this.$this_3.writer_1);
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp3_write = $this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_1 = tmp3_write;
      tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + ': '.length | 0);
      _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
    } else {
      block($this.$this_3.writer_1);
    }
  }
  function _set_justStarted__v1a08g_0($this, _set____db54di) {
    $this.justStarted_1 = _set____db54di;
  }
  function _get_justStarted__9pfves_0($this) {
    return $this.justStarted_1;
  }
  function _get_increaseBackLevel__fl6ryi($this) {
    return $this.increaseBackLevel_1;
  }
  function _set_justStarted__v1a08g_1($this, _set____db54di) {
    $this.justStarted_1 = _set____db54di;
  }
  function _get_justStarted__9pfves_1($this) {
    return $this.justStarted_1;
  }
  function _get_parent__oo9xup($this) {
    return $this.parent_1;
  }
  function _set_justStarted__v1a08g_2($this, _set____db54di) {
    $this.justStarted_1 = _set____db54di;
  }
  function _get_justStarted__9pfves_2($this) {
    return $this.justStarted_1;
  }
  function _set_isKey__g0qqz4_0($this, _set____db54di) {
    $this.isKey_1 = _set____db54di;
  }
  function _get_isKey__g0dpic_0($this) {
    return $this.isKey_1;
  }
  function structuredKeyValue_0($this, block) {
    var tmp$ret$0;
    // Inline function 'kotlin.also' call
    var tmp0_also = $this.isKey_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue.<anonymous>' call
    $this.isKey_1 = !tmp0_also;
    tmp$ret$0 = tmp0_also;
    var isKey = tmp$ret$0;
    if (isKey) {
      if ($this.justStarted_1) {
        var tmp = $this.parent_1;
        if (tmp instanceof BlockMapOrClassEncoder) {
          // Inline function 'net.mamoe.yamlkt.internal.writeln' call
          var tmp1_writeln = $this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp1_writeln.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this = tmp1_writeln;
            var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
            tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
          }
          _get_output__ji2uqy(tmp1_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        }
        $this.justStarted_1 = false;
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        var tmp2_writeln = $this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp2_writeln.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_0 = tmp2_writeln;
          var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
          tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
        }
        _get_output__ji2uqy(tmp2_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      writeIndentSmart($this.$this_3.writer_1);
      block($this.$this_3.writer_1);
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp3_write = $this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_1 = tmp3_write;
      tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + ': '.length | 0);
      _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
    } else {
      block($this.$this_3.writer_1);
    }
  }
  function writelnIfJustStartedAndParentIsBlockMap($this) {
    if ($this.justStarted_1) {
      var tmp = $this.parent_1;
      if (tmp instanceof BlockMapOrClassEncoder) {
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        var tmp0_writeln = $this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp0_writeln.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this = tmp0_writeln;
          var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
          tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
        }
        _get_output__ji2uqy(tmp0_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      $this.justStarted_1 = false;
    }
  }
  function getComments(_this__u8e3s4, $this, index) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_firstOrNull = _this__u8e3s4.getElementAnnotations_a57oar_k$(index);
      var tmp0_iterator = tmp0_firstOrNull.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.getComments.<anonymous>' call
        tmp$ret$0 = element instanceof Comment;
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp = tmp$ret$1;
    var tmp0_safe_receiver = (tmp == null ? true : tmp instanceof Comment) ? tmp : THROW_CCE();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_lines_iuolhy_k$();
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : trimIndent(tmp1_safe_receiver);
    return tmp2_safe_receiver == null ? null : lineSequence(tmp2_safe_receiver);
  }
  function writeComments(_this__u8e3s4, $this, descriptor, index) {
    var tmp0_safe_receiver = getComments(descriptor, $this, index);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.sequences.forEach' call
      var tmp0_iterator = tmp0_safe_receiver.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.writeComments.<anonymous>' call
        writeIndentedSmart(_this__u8e3s4, '# ');
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        var tmp$ret$0;
        // Inline function 'kotlin.text.trim' call
        tmp$ret$0 = toString(trim(isCharSequence(element) ? element : THROW_CCE()));
        var tmp0_write = tmp$ret$0;
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        var tmp0_this = _this__u8e3s4;
        tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp0_write.length | 0);
        _get_output__ji2uqy(_this__u8e3s4).append_oz4qxs_k$(tmp0_write);
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          _this__u8e3s4.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_0 = _this__u8e3s4;
          var tmp1 = tmp0_this_0.get_currentIndent_v1v68s_k$();
          tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
        }
        _get_output__ji2uqy(_this__u8e3s4).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
    }
  }
  function _get_linebreakAfterFinish__y35f09($this) {
    return $this.linebreakAfterFinish_1;
  }
  function YamlEncoder$AbstractEncoder$encodeInlineElement$1(this$0, $descriptor, $index) {
    this.this$0__1 = this$0;
    this.$descriptor_1 = $descriptor;
    this.$index_1 = $index;
    AbstractEncoder.call(this);
  }
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.this$0__1.get_serializersModule_piitvg_k$();
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.encodeByte_gpyndp_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUByte' call
    tmp$ret$0 = _UByte___init__impl__g9hnc4(value);
    return this.this$0__1.encodeSerializableUnquotedStringElement_1axywt_k$(this.$descriptor_1, this.$index_1, UByte__toString_impl_v72jg(tmp$ret$0));
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.encodeShort_rh3vxz_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUShort' call
    tmp$ret$0 = _UShort___init__impl__jigrne(value);
    return this.this$0__1.encodeSerializableUnquotedStringElement_1axywt_k$(this.$descriptor_1, this.$index_1, UShort__toString_impl_edaoee(tmp$ret$0));
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.encodeInt_5vxmon_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$0 = _UInt___init__impl__l7qpdl(value);
    return this.this$0__1.encodeSerializableUnquotedStringElement_1axywt_k$(this.$descriptor_1, this.$index_1, UInt__toString_impl_dbgl21(tmp$ret$0));
  };
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.encodeLong_rk3ab9_k$ = function (value) {
    var tmp$ret$0;
    // Inline function 'kotlin.toULong' call
    tmp$ret$0 = _ULong___init__impl__c78o9k(value);
    return this.this$0__1.encodeSerializableUnquotedStringElement_1axywt_k$(this.$descriptor_1, this.$index_1, ULong__toString_impl_f9au7k(tmp$ret$0));
  };
  function _get_configuration__557qfv_0($this) {
    return $this.configuration_1;
  }
  function _get_writer__6q3d3c_0($this) {
    return $this.writer_1;
  }
  function beginStructureImpl($this, parent, descriptor) {
    $this.writer_1.levelIncrease_gvoyuj_k$();
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, CLASS_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp1_subject = $this.configuration_1.get_classSerialization_8kh6u9_k$();
      var tmp0 = tmp1_subject.get_ordinal_ip24qg_k$();
      var tmp_1;
      switch (tmp0) {
        case 0:
          tmp_1 = new BlockMapOrClassEncoder($this, parent);
          break;
        case 1:
          tmp_1 = new FlowMapOrClassEncoder($this, parent instanceof BlockEncoder);
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        var tmp2_subject = $this.configuration_1.get_mapSerialization_ov7m0z_k$();
        var tmp0_0 = tmp2_subject.get_ordinal_ip24qg_k$();
        var tmp_2;
        switch (tmp0_0) {
          case 0:
            tmp_2 = new BlockMapOrClassEncoder($this, parent);
            break;
          case 1:
            tmp_2 = new FlowMapOrClassEncoder($this, parent instanceof BlockEncoder);
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_2;
      } else {
        if (equals(tmp0_subject, LIST_getInstance())) {
          var tmp3_subject = $this.configuration_1.get_listSerialization_i0dw09_k$();
          var tmp0_1 = tmp3_subject.get_ordinal_ip24qg_k$();
          var tmp_3;
          switch (tmp0_1) {
            case 1:
              tmp_3 = new FlowSequenceEncoder($this, parent instanceof BlockEncoder);
              break;
            case 0:
              var tmp_4;
              if (parent instanceof BlockMapOrClassEncoder) {
                $this.writer_1.levelDecrease_gh7j01_k$();
                tmp_4 = new BlockSequenceEncoder($this, parent, false, true);
              } else {
                tmp_4 = new BlockSequenceEncoder($this, parent, false, false);
              }

              tmp_3 = tmp_4;
              break;
            case 2:
              tmp_3 = new BlockSequenceEncoder($this, parent, false, false);
              break;
            default:
              noWhenBranchMatchedException();
              break;
          }
          tmp = tmp_3;
        } else {
          var tmp0_error = 'unsupported SerialKind: ' + descriptor.get_kind_wop7ml_k$();
          throw IllegalStateException_init_$Create$(toString(tmp0_error));
        }
      }
    }
    return tmp;
  }
  function FlowMapOrClassEncoder($outer, linebreakAfterFinish) {
    this.$this_3 = $outer;
    FlowEncoder.call(this, $outer, linebreakAfterFinish);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + '{'.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$('{');
    this.justStarted_1 = true;
    this.isKey_1 = true;
  }
  FlowMapOrClassEncoder.prototype.encodeValue_jhnaky_k$ = function (value) {
    this.justStarted_1 = false;
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp0_write.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this = tmp0_write;
      var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
      tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
    }
    _get_output__ji2uqy(tmp0_write).append_t8oh9e_k$(value);
  };
  FlowMapOrClassEncoder.prototype.encodeValue_x0fm53_k$ = function (value) {
    this.justStarted_1 = false;
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + value.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(value);
  };
  FlowMapOrClassEncoder.prototype.encodeElement_9wwrh5_k$ = function (descriptor, index, value) {
    this.writeValueHead_1tskv3_k$(descriptor, index);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp0_write.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this = tmp0_write;
      var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
      tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
    }
    _get_output__ji2uqy(tmp0_write).append_t8oh9e_k$(value);
    this.writeValueTail_d4aj3j_k$(descriptor, index);
  };
  FlowMapOrClassEncoder.prototype.encodeElement_pb9j9w_k$ = function (descriptor, index, value) {
    this.writeValueHead_1tskv3_k$(descriptor, index);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + value.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(value);
    this.writeValueTail_d4aj3j_k$(descriptor, index);
  };
  FlowMapOrClassEncoder.prototype.endStructure0_ou8i3s_k$ = function (descriptor) {
    if (!this.justStarted_1) {
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp0_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this = tmp0_write;
      tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + ' }'.length | 0);
      _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(' }');
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp1_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_0 = tmp1_write;
      tmp0_this_0.set_currentIndent_27p6t4_k$(tmp0_this_0.get_currentIndent_v1v68s_k$() + '}'.length | 0);
      _get_output__ji2uqy(tmp1_write).append_oz4qxs_k$('}');
    }
  };
  FlowMapOrClassEncoder.prototype.encodeSerializableElement0_vocg1o_k$ = function (descriptor, index, serializer, value) {
    if (equals(descriptor.get_kind_wop7ml_k$(), CLASS_getInstance())) {
      FlowEncoder.prototype.encodeSerializableElement0_vocg1o_k$.call(this, descriptor, index, serializer, value);
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.structuredKeyValue' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.isKey_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.structuredKeyValue.<anonymous>' call
      this.isKey_1 = !this.isKey_1;
      tmp$ret$0 = tmp0_also;
      var isKey = tmp$ret$0;
      if (isKey) {
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        var tmp1_write = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp1_write.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this = tmp1_write;
          var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
          tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
        }
        _get_output__ji2uqy(tmp1_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
        if (this.justStarted_1) {
          this.justStarted_1 = false;
        } else {
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          var tmp2_write = this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp2_write.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this_0 = tmp2_write;
            var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
            tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
          }
          _get_output__ji2uqy(tmp2_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(44));
        }
        // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.encodeSerializableElement0.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.$this_3.writer_1;
        FlowEncoder.prototype.encodeSerializableElement0_vocg1o_k$.call(this, descriptor, index, serializer, value);
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        var tmp3_write = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        var tmp0_this_1 = tmp3_write;
        tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + ': '.length | 0);
        _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.encodeSerializableElement0.<anonymous>' call
        var tmp1__anonymous__uwfjfc = this.$this_3.writer_1;
        FlowEncoder.prototype.encodeSerializableElement0_vocg1o_k$.call(this, descriptor, index, serializer, value);
      }
    }
  };
  FlowMapOrClassEncoder.prototype.encodeSerializableUnquotedStringImpl_c0z6wb_k$ = function (descriptor, index, value) {
    if (equals(descriptor.get_kind_wop7ml_k$(), CLASS_getInstance())) {
      this.encodeUnquotedString_ywqjfa_k$(value);
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.structuredKeyValue' call
      var tmp$ret$0;
      // Inline function 'kotlin.also' call
      var tmp0_also = this.isKey_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.structuredKeyValue.<anonymous>' call
      this.isKey_1 = !this.isKey_1;
      tmp$ret$0 = tmp0_also;
      var isKey = tmp$ret$0;
      if (isKey) {
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        var tmp1_write = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp1_write.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this = tmp1_write;
          var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
          tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
        }
        _get_output__ji2uqy(tmp1_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
        if (this.justStarted_1) {
          this.justStarted_1 = false;
        } else {
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          var tmp2_write = this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp2_write.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this_0 = tmp2_write;
            var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
            tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
          }
          _get_output__ji2uqy(tmp2_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(44));
        }
        // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.encodeSerializableUnquotedStringImpl.<anonymous>' call
        var tmp0__anonymous__q1qw7t = this.$this_3.writer_1;
        this.encodeUnquotedString_ywqjfa_k$(value);
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        var tmp3_write = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        var tmp0_this_1 = tmp3_write;
        tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + ': '.length | 0);
        _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.FlowMapOrClassEncoder.encodeSerializableUnquotedStringImpl.<anonymous>' call
        var tmp1__anonymous__uwfjfc = this.$this_3.writer_1;
        this.encodeUnquotedString_ywqjfa_k$(value);
      }
    }
  };
  FlowMapOrClassEncoder.prototype.writeValueHead_1tskv3_k$ = function (descriptor, index) {
    if (equals(descriptor.get_kind_wop7ml_k$(), MAP_getInstance()))
      return Unit_getInstance();
    if (equals(descriptor.get_kind_wop7ml_k$(), LIST_getInstance()))
      return Unit_getInstance();
    if (this.justStarted_1)
      this.justStarted_1 = false;
    else {
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp0_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(44)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_write.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this = tmp0_write;
        var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
        tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(44));
    }
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp1_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp1_write.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this_0 = tmp1_write;
      var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
      tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
    }
    _get_output__ji2uqy(tmp1_write).append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp2_write = this.$this_3.writer_1;
    var tmp3_write = descriptor.getElementName_ykpypc_k$(index);
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this_1 = tmp2_write;
    tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + tmp3_write.length | 0);
    _get_output__ji2uqy(tmp2_write).append_oz4qxs_k$(tmp3_write);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp4_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this_2 = tmp4_write;
    tmp0_this_2.set_currentIndent_27p6t4_k$(tmp0_this_2.get_currentIndent_v1v68s_k$() + ': '.length | 0);
    _get_output__ji2uqy(tmp4_write).append_oz4qxs_k$(': ');
  };
  function FlowSequenceEncoder($outer, linebreakAfterFinish) {
    this.$this_3 = $outer;
    FlowEncoder.call(this, $outer, linebreakAfterFinish);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + '[ '.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$('[ ');
    this.justStarted_1 = true;
  }
  FlowSequenceEncoder.prototype.endStructure0_ou8i3s_k$ = function (descriptor) {
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + ' ]'.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(' ]');
  };
  FlowSequenceEncoder.prototype.encodeValue_jhnaky_k$ = function (value) {
    this.justStarted_1 = false;
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp0_write.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this = tmp0_write;
      var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
      tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
    }
    _get_output__ji2uqy(tmp0_write).append_t8oh9e_k$(value);
  };
  FlowSequenceEncoder.prototype.encodeValue_x0fm53_k$ = function (value) {
    this.justStarted_1 = false;
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + value.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(value);
  };
  FlowSequenceEncoder.prototype.encodeElement_miswoa_k$ = function (descriptor, index, value) {
    throw IllegalStateException_init_$Create$("FlowSequenceEncoder.encodeElement shouldn't be called");
  };
  FlowSequenceEncoder.prototype.encodeElement_9wwrh5_k$ = function (descriptor, index, value) {
    return this.encodeElement_miswoa_k$(descriptor, index, value);
  };
  FlowSequenceEncoder.prototype.encodeElement_cq2a57_k$ = function (descriptor, index, value) {
    throw IllegalStateException_init_$Create$("FlowSequenceEncoder.encodeElement shouldn't be called");
  };
  FlowSequenceEncoder.prototype.encodeElement_pb9j9w_k$ = function (descriptor, index, value) {
    return this.encodeElement_cq2a57_k$(descriptor, index, value);
  };
  FlowSequenceEncoder.prototype.encodeSerializableElement0_vocg1o_k$ = function (descriptor, index, serializer, value) {
    if (this.justStarted_1)
      this.justStarted_1 = false;
    else {
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp0_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this = tmp0_write;
      tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + ', '.length | 0);
      _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(', ');
    }
    FlowEncoder.prototype.encodeSerializableElement0_vocg1o_k$.call(this, descriptor, index, serializer, value);
  };
  FlowSequenceEncoder.prototype.encodeSerializableUnquotedStringImpl_c0z6wb_k$ = function (descriptor, index, value) {
    if (this.justStarted_1)
      this.justStarted_1 = false;
    else {
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp0_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this = tmp0_write;
      tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + ', '.length | 0);
      _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(', ');
    }
    this.encodeUnquotedString_ywqjfa_k$(value);
  };
  FlowSequenceEncoder.prototype.writeValueHead_1tskv3_k$ = function (descriptor, index) {
    return Unit_getInstance();
  };
  function EmptySequenceEncoder($outer, linebreakAfterFinish) {
    this.$this_3 = $outer;
    FlowEncoder.call(this, $outer, linebreakAfterFinish);
  }
  EmptySequenceEncoder.prototype.encodeValue_x4v7r5_k$ = function (value) {
    throw IllegalStateException_init_$Create$("EmptySequenceEncoder.encodeValue shouldn't be called");
  };
  EmptySequenceEncoder.prototype.encodeValue_jhnaky_k$ = function (value) {
    return this.encodeValue_x4v7r5_k$(value);
  };
  EmptySequenceEncoder.prototype.encodeValue_db769y_k$ = function (value) {
    throw IllegalStateException_init_$Create$("EmptySequenceEncoder.encodeValue shouldn't be called");
  };
  EmptySequenceEncoder.prototype.encodeValue_x0fm53_k$ = function (value) {
    return this.encodeValue_db769y_k$(value);
  };
  EmptySequenceEncoder.prototype.encodeElement_miswoa_k$ = function (descriptor, index, value) {
    throw IllegalStateException_init_$Create$("EmptySequenceEncoder.encodeElement shouldn't be called");
  };
  EmptySequenceEncoder.prototype.encodeElement_9wwrh5_k$ = function (descriptor, index, value) {
    return this.encodeElement_miswoa_k$(descriptor, index, value);
  };
  EmptySequenceEncoder.prototype.encodeElement_cq2a57_k$ = function (descriptor, index, value) {
    throw IllegalStateException_init_$Create$("EmptySequenceEncoder.encodeElement shouldn't be called");
  };
  EmptySequenceEncoder.prototype.encodeElement_pb9j9w_k$ = function (descriptor, index, value) {
    return this.encodeElement_cq2a57_k$(descriptor, index, value);
  };
  EmptySequenceEncoder.prototype.endStructure0_ou8i3s_k$ = function (descriptor) {
    var tmp0_write = this.$this_3.writer_1;
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + '[]'.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$('[]');
    return Unit_getInstance();
  };
  EmptySequenceEncoder.prototype.writeValueHead_lv5iz2_k$ = function (descriptor, index) {
    throw IllegalStateException_init_$Create$("EmptySequenceEncoder.writeValueHead shouldn't be called");
  };
  EmptySequenceEncoder.prototype.writeValueHead_1tskv3_k$ = function (descriptor, index) {
    return this.writeValueHead_lv5iz2_k$(descriptor, index);
  };
  EmptySequenceEncoder.prototype.encodeSerializableUnquotedStringImpl_qtpfvq_k$ = function (descriptor, index, value) {
    throw IllegalStateException_init_$Create$("EmptySequenceEncoder.encodeSerializableUnquotedStringImpl shouldn't be called");
  };
  EmptySequenceEncoder.prototype.encodeSerializableUnquotedStringImpl_c0z6wb_k$ = function (descriptor, index, value) {
    return this.encodeSerializableUnquotedStringImpl_qtpfvq_k$(descriptor, index, value);
  };
  function BlockSequenceEncoder($outer, parent, linebreakAfterFinish, increaseBackLevel) {
    this.$this_3 = $outer;
    BlockEncoder.call(this, $outer, linebreakAfterFinish);
    this.increaseBackLevel_1 = increaseBackLevel;
    if (parent instanceof BlockMapOrClassEncoder) {
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      var tmp0_writeln = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this = tmp0_writeln;
        var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
        tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    }
    this.justStarted_1 = true;
  }
  BlockSequenceEncoder.prototype.encodeValue_jhnaky_k$ = function (value) {
    this.justStarted_1 = false;
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp0_write.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this = tmp0_write;
      var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
      tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
    }
    _get_output__ji2uqy(tmp0_write).append_t8oh9e_k$(value);
  };
  BlockSequenceEncoder.prototype.encodeValue_x0fm53_k$ = function (value) {
    this.justStarted_1 = false;
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp0_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + value.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(value);
  };
  BlockSequenceEncoder.prototype.encodeElement_miswoa_k$ = function (descriptor, index, value) {
    throw IllegalStateException_init_$Create$("BlockSequenceEncoder.encodeElement shouldn't be called");
  };
  BlockSequenceEncoder.prototype.encodeElement_9wwrh5_k$ = function (descriptor, index, value) {
    return this.encodeElement_miswoa_k$(descriptor, index, value);
  };
  BlockSequenceEncoder.prototype.encodeElement_cq2a57_k$ = function (descriptor, index, value) {
    throw IllegalStateException_init_$Create$("BlockSequenceEncoder.encodeElement shouldn't be called");
  };
  BlockSequenceEncoder.prototype.encodeElement_pb9j9w_k$ = function (descriptor, index, value) {
    return this.encodeElement_cq2a57_k$(descriptor, index, value);
  };
  BlockSequenceEncoder.prototype.endStructure0_ou8i3s_k$ = function (descriptor) {
    if (this.increaseBackLevel_1) {
      this.$this_3.writer_1.levelIncrease_gvoyuj_k$();
    }
  };
  BlockSequenceEncoder.prototype.encodeSerializableElement0_vocg1o_k$ = function (descriptor, index, serializer, value) {
    if (this.justStarted_1) {
      this.justStarted_1 = false;
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      var tmp0_writeln = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this = tmp0_writeln;
        var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
        tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    }
    writeIndentedSmart(this.$this_3.writer_1, '- ');
    BlockEncoder.prototype.encodeSerializableElement0_vocg1o_k$.call(this, descriptor, index, serializer, value);
  };
  BlockSequenceEncoder.prototype.encodeSerializableUnquotedStringImpl_c0z6wb_k$ = function (descriptor, index, value) {
    if (this.justStarted_1) {
      this.justStarted_1 = false;
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      var tmp0_writeln = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this = tmp0_writeln;
        var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
        tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    }
    writeIndentedSmart(this.$this_3.writer_1, '- ');
    this.encodeUnquotedString_ywqjfa_k$(value);
  };
  BlockSequenceEncoder.prototype.writeValueHead_1tskv3_k$ = function (descriptor, index) {
    return Unit_getInstance();
  };
  function BlockMapOrClassEncoder($outer, parent) {
    this.$this_3 = $outer;
    BlockEncoder.call(this, $outer, false);
    this.parent_1 = parent;
    this.justStarted_1 = true;
    this.isKey_1 = true;
  }
  BlockMapOrClassEncoder.prototype.encodeValue_jhnaky_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeValue.<anonymous>' call
      tmp$ret$1 = 'encodeValue, ' + new Char(value);
      println(tmp + tmp$ret$1);
    }
    writelnIfJustStartedAndParentIsBlockMap(this);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp1_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp1_write.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this = tmp1_write;
      var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
      tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
    }
    _get_output__ji2uqy(tmp1_write).append_t8oh9e_k$(value);
  };
  BlockMapOrClassEncoder.prototype.encodeValue_x0fm53_k$ = function (value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeValue.<anonymous>' call
      tmp$ret$1 = 'encodeValue, ' + value;
      println(tmp + tmp$ret$1);
    }
    writelnIfJustStartedAndParentIsBlockMap(this);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp1_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp1_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + value.length | 0);
    _get_output__ji2uqy(tmp1_write).append_oz4qxs_k$(value);
  };
  BlockMapOrClassEncoder.prototype.encodeSerializableElement0_vocg1o_k$ = function (descriptor, index, serializer, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeSerializableElement0.<anonymous>' call
      tmp$ret$1 = 'encodeSerializableElement0, elementName=' + descriptor.getElementName_ykpypc_k$(index);
      println(tmp + tmp$ret$1);
    }
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue' call
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.isKey_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue.<anonymous>' call
    this.isKey_1 = !tmp0_also;
    tmp$ret$2 = tmp0_also;
    var isKey = tmp$ret$2;
    if (isKey) {
      if (this.justStarted_1) {
        var tmp_0 = this.parent_1;
        if (tmp_0 instanceof BlockMapOrClassEncoder) {
          // Inline function 'net.mamoe.yamlkt.internal.writeln' call
          var tmp1_writeln = this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp1_writeln.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this = tmp1_writeln;
            var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
            tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
          }
          _get_output__ji2uqy(tmp1_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        }
        this.justStarted_1 = false;
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        var tmp2_writeln = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp2_writeln.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_0 = tmp2_writeln;
          var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
          tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
        }
        _get_output__ji2uqy(tmp2_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      writeIndentSmart(this.$this_3.writer_1);
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeSerializableElement0.<anonymous>' call
      var tmp1__anonymous__uwfjfc = this.$this_3.writer_1;
      BlockEncoder.prototype.encodeSerializableElement0_vocg1o_k$.call(this, descriptor, index, serializer, value);
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp3_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_1 = tmp3_write;
      tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + ': '.length | 0);
      _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeSerializableElement0.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = this.$this_3.writer_1;
      BlockEncoder.prototype.encodeSerializableElement0_vocg1o_k$.call(this, descriptor, index, serializer, value);
    }
  };
  BlockMapOrClassEncoder.prototype.encodeSerializableUnquotedStringImpl_c0z6wb_k$ = function (descriptor, index, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeSerializableUnquotedStringImpl.<anonymous>' call
      tmp$ret$1 = 'encodeSerializableUnquotedStringImpl, elementName=' + descriptor.getElementName_ykpypc_k$(index);
      println(tmp + tmp$ret$1);
    }
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue' call
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.isKey_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue.<anonymous>' call
    this.isKey_1 = !tmp0_also;
    tmp$ret$2 = tmp0_also;
    var isKey = tmp$ret$2;
    if (isKey) {
      if (this.justStarted_1) {
        var tmp_0 = this.parent_1;
        if (tmp_0 instanceof BlockMapOrClassEncoder) {
          // Inline function 'net.mamoe.yamlkt.internal.writeln' call
          var tmp1_writeln = this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp1_writeln.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this = tmp1_writeln;
            var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
            tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
          }
          _get_output__ji2uqy(tmp1_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        }
        this.justStarted_1 = false;
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        var tmp2_writeln = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp2_writeln.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_0 = tmp2_writeln;
          var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
          tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
        }
        _get_output__ji2uqy(tmp2_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      writeIndentSmart(this.$this_3.writer_1);
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeSerializableUnquotedStringImpl.<anonymous>' call
      var tmp1__anonymous__uwfjfc = this.$this_3.writer_1;
      this.encodeUnquotedString_ywqjfa_k$(value);
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp3_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_1 = tmp3_write;
      tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + ': '.length | 0);
      _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeSerializableUnquotedStringImpl.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = this.$this_3.writer_1;
      this.encodeUnquotedString_ywqjfa_k$(value);
    }
  };
  BlockMapOrClassEncoder.prototype.encodeElement_9wwrh5_k$ = function (descriptor, index, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeElement.<anonymous>' call
      tmp$ret$1 = 'encodeElement, elementName=' + descriptor.getElementName_ykpypc_k$(index);
      println(tmp + tmp$ret$1);
    }
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue' call
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.isKey_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue.<anonymous>' call
    this.isKey_1 = !tmp0_also;
    tmp$ret$2 = tmp0_also;
    var isKey = tmp$ret$2;
    if (isKey) {
      if (this.justStarted_1) {
        var tmp_0 = this.parent_1;
        if (tmp_0 instanceof BlockMapOrClassEncoder) {
          // Inline function 'net.mamoe.yamlkt.internal.writeln' call
          var tmp1_writeln = this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp1_writeln.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this = tmp1_writeln;
            var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
            tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
          }
          _get_output__ji2uqy(tmp1_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        }
        this.justStarted_1 = false;
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        var tmp2_writeln = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp2_writeln.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_0 = tmp2_writeln;
          var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
          tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
        }
        _get_output__ji2uqy(tmp2_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      writeIndentSmart(this.$this_3.writer_1);
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeElement.<anonymous>' call
      var tmp1__anonymous__uwfjfc = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp0_write = this.$this_3.writer_1;
      var tmp1_write = descriptor.getElementName_ykpypc_k$(index);
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_1 = tmp0_write;
      tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
      _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp3_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_2 = tmp3_write;
      tmp0_this_2.set_currentIndent_27p6t4_k$(tmp0_this_2.get_currentIndent_v1v68s_k$() + ': '.length | 0);
      _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeElement.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp0_write_0 = this.$this_3.writer_1;
      var tmp1_write_0 = descriptor.getElementName_ykpypc_k$(index);
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_3 = tmp0_write_0;
      tmp0_this_3.set_currentIndent_27p6t4_k$(tmp0_this_3.get_currentIndent_v1v68s_k$() + tmp1_write_0.length | 0);
      _get_output__ji2uqy(tmp0_write_0).append_oz4qxs_k$(tmp1_write_0);
    }
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue' call
    var tmp$ret$3;
    // Inline function 'kotlin.also' call
    var tmp0_also_0 = this.isKey_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue.<anonymous>' call
    this.isKey_1 = !tmp0_also_0;
    tmp$ret$3 = tmp0_also_0;
    var isKey_0 = tmp$ret$3;
    if (isKey_0) {
      if (this.justStarted_1) {
        var tmp_1 = this.parent_1;
        if (tmp_1 instanceof BlockMapOrClassEncoder) {
          // Inline function 'net.mamoe.yamlkt.internal.writeln' call
          var tmp1_writeln_0 = this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp1_writeln_0.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this_4 = tmp1_writeln_0;
            var tmp1_1 = tmp0_this_4.get_currentIndent_v1v68s_k$();
            tmp0_this_4.set_currentIndent_27p6t4_k$(tmp1_1 + 1 | 0);
          }
          _get_output__ji2uqy(tmp1_writeln_0).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        }
        this.justStarted_1 = false;
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        var tmp2_writeln_0 = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp2_writeln_0.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_5 = tmp2_writeln_0;
          var tmp1_2 = tmp0_this_5.get_currentIndent_v1v68s_k$();
          tmp0_this_5.set_currentIndent_27p6t4_k$(tmp1_2 + 1 | 0);
        }
        _get_output__ji2uqy(tmp2_writeln_0).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      writeIndentSmart(this.$this_3.writer_1);
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeElement.<anonymous>' call
      var tmp3__anonymous__ufb84q = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      var tmp0_writeln = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this_6 = tmp0_writeln;
        var tmp1_3 = tmp0_this_6.get_currentIndent_v1v68s_k$();
        tmp0_this_6.set_currentIndent_27p6t4_k$(tmp1_3 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln).append_t8oh9e_k$(value);
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this_7 = tmp0_writeln;
        var tmp1_4 = tmp0_this_7.get_currentIndent_v1v68s_k$();
        tmp0_this_7.set_currentIndent_27p6t4_k$(tmp1_4 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp3_write_0 = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_8 = tmp3_write_0;
      tmp0_this_8.set_currentIndent_27p6t4_k$(tmp0_this_8.get_currentIndent_v1v68s_k$() + ': '.length | 0);
      _get_output__ji2uqy(tmp3_write_0).append_oz4qxs_k$(': ');
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeElement.<anonymous>' call
      var tmp4__anonymous__pkmkx7 = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      var tmp0_writeln_0 = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln_0.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this_9 = tmp0_writeln_0;
        var tmp1_5 = tmp0_this_9.get_currentIndent_v1v68s_k$();
        tmp0_this_9.set_currentIndent_27p6t4_k$(tmp1_5 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln_0).append_t8oh9e_k$(value);
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln_0.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this_10 = tmp0_writeln_0;
        var tmp1_6 = tmp0_this_10.get_currentIndent_v1v68s_k$();
        tmp0_this_10.set_currentIndent_27p6t4_k$(tmp1_6 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln_0).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    }
  };
  BlockMapOrClassEncoder.prototype.encodeElement_pb9j9w_k$ = function (descriptor, index, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.encodeElement.<anonymous>' call
      tmp$ret$1 = 'encodeElement, elementName=' + descriptor.getElementName_ykpypc_k$(index);
      println(tmp + tmp$ret$1);
    }
    writelnIfJustStartedAndParentIsBlockMap(this);
    writeComments(this.$this_3.writer_1, this, descriptor, index);
    writeIndentedSmart(this.$this_3.writer_1, descriptor.getElementName_ykpypc_k$(index));
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    var tmp1_write = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = tmp1_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + ': '.length | 0);
    _get_output__ji2uqy(tmp1_write).append_oz4qxs_k$(': ');
    // Inline function 'net.mamoe.yamlkt.internal.writeln' call
    var tmp2_writeln = this.$this_3.writer_1;
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this_0 = tmp2_writeln;
    tmp0_this_0.set_currentIndent_27p6t4_k$(tmp0_this_0.get_currentIndent_v1v68s_k$() + value.length | 0);
    _get_output__ji2uqy(tmp2_writeln).append_oz4qxs_k$(value);
    // Inline function 'net.mamoe.yamlkt.internal.writeln' call
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp2_writeln.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this_1 = tmp2_writeln;
      var tmp1 = tmp0_this_1.get_currentIndent_v1v68s_k$();
      tmp0_this_1.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
    }
    _get_output__ji2uqy(tmp2_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
  };
  BlockMapOrClassEncoder.prototype.endStructure0_ou8i3s_k$ = function (descriptor) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.endStructure0.<anonymous>' call
      tmp$ret$1 = 'endStructure0';
      println(tmp + tmp$ret$1);
    }
    if (this.justStarted_1) {
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      var tmp1_writeln = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this = tmp1_writeln;
      tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + '{}'.length | 0);
      _get_output__ji2uqy(tmp1_writeln).append_oz4qxs_k$('{}');
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp1_writeln.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this_0 = tmp1_writeln;
        var tmp1 = tmp0_this_0.get_currentIndent_v1v68s_k$();
        tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
      }
      _get_output__ji2uqy(tmp1_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    }
  };
  BlockMapOrClassEncoder.prototype.writeValueHead_1tskv3_k$ = function (descriptor, index) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'net.mamoe.yamlkt.internal.Debugging.logCustom' call
      var tmp0_logCustom = Debugging_getInstance();
      if (!tmp0_logCustom.get_enabled_pcr8o8_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      var tmp = space(tmp0_logCustom, tmp0_logCustom.get_logIndent_z294ex_k$());
      var tmp$ret$1;
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.writeValueHead.<anonymous>' call
      tmp$ret$1 = 'writeValueHead, elementName=' + descriptor.getElementName_ykpypc_k$(index);
      println(tmp + tmp$ret$1);
    }
    if (equals(descriptor.get_kind_wop7ml_k$(), MAP_getInstance()))
      return Unit_getInstance();
    if (equals(descriptor.get_kind_wop7ml_k$(), LIST_getInstance()))
      return Unit_getInstance();
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue' call
    var tmp$ret$2;
    // Inline function 'kotlin.also' call
    var tmp0_also = this.isKey_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.structuredKeyValue.<anonymous>' call
    this.isKey_1 = !tmp0_also;
    tmp$ret$2 = tmp0_also;
    var isKey = tmp$ret$2;
    if (isKey) {
      if (this.justStarted_1) {
        var tmp_0 = this.parent_1;
        if (tmp_0 instanceof BlockMapOrClassEncoder) {
          // Inline function 'net.mamoe.yamlkt.internal.writeln' call
          var tmp1_writeln = this.$this_3.writer_1;
          // Inline function 'net.mamoe.yamlkt.internal.write' call
          // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
          if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
            tmp1_writeln.set_currentIndent_27p6t4_k$(0);
          } else {
            var tmp0_this = tmp1_writeln;
            var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
            tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
          }
          _get_output__ji2uqy(tmp1_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
        }
        this.justStarted_1 = false;
      } else {
        // Inline function 'net.mamoe.yamlkt.internal.writeln' call
        var tmp2_writeln = this.$this_3.writer_1;
        // Inline function 'net.mamoe.yamlkt.internal.write' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
          tmp2_writeln.set_currentIndent_27p6t4_k$(0);
        } else {
          var tmp0_this_0 = tmp2_writeln;
          var tmp1_0 = tmp0_this_0.get_currentIndent_v1v68s_k$();
          tmp0_this_0.set_currentIndent_27p6t4_k$(tmp1_0 + 1 | 0);
        }
        _get_output__ji2uqy(tmp2_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
      }
      writeIndentSmart(this.$this_3.writer_1);
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.writeValueHead.<anonymous>' call
      var tmp1__anonymous__uwfjfc = this.$this_3.writer_1;
      writeComments(this.$this_3.writer_1, this, descriptor, index);
      writeIndentedSmart(this.$this_3.writer_1, descriptor.getElementName_ykpypc_k$(index));
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      var tmp3_write = this.$this_3.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      var tmp0_this_1 = tmp3_write;
      tmp0_this_1.set_currentIndent_27p6t4_k$(tmp0_this_1.get_currentIndent_v1v68s_k$() + ': '.length | 0);
      _get_output__ji2uqy(tmp3_write).append_oz4qxs_k$(': ');
    } else {
      // Inline function 'net.mamoe.yamlkt.internal.BlockMapOrClassEncoder.writeValueHead.<anonymous>' call
      var tmp2__anonymous__z9zvc9 = this.$this_3.writer_1;
      writeComments(this.$this_3.writer_1, this, descriptor, index);
      writeIndentedSmart(this.$this_3.writer_1, descriptor.getElementName_ykpypc_k$(index));
    }
  };
  function FlowEncoder($outer, linebreakAfterFinish) {
    this.$this_2 = $outer;
    AbstractEncoder_0.call(this, $outer, linebreakAfterFinish);
  }
  FlowEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    this.$this_2.writer_1.levelIncrease_gvoyuj_k$();
    var tmp0_subject = descriptor.get_kind_wop7ml_k$();
    var tmp;
    if (equals(tmp0_subject, CLASS_getInstance())) {
      tmp = new FlowMapOrClassEncoder(this.$this_2, false);
    } else if (equals(tmp0_subject, MAP_getInstance())) {
      tmp = new FlowMapOrClassEncoder(this.$this_2, false);
    } else if (equals(tmp0_subject, LIST_getInstance())) {
      tmp = new FlowSequenceEncoder(this.$this_2, false);
    } else {
      var tmp0_error = 'unsupported SerialKind: ' + descriptor.get_kind_wop7ml_k$();
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    return tmp;
  };
  FlowEncoder.prototype.writeValueTail_d4aj3j_k$ = function (descriptor, index) {
    return Unit_getInstance();
  };
  function BlockEncoder($outer, linebreakAfterFinish) {
    this.$this_2 = $outer;
    AbstractEncoder_0.call(this, $outer, linebreakAfterFinish);
  }
  BlockEncoder.prototype.writeValueTail_d4aj3j_k$ = function (descriptor, index) {
  };
  function AbstractEncoder_0($outer, linebreakAfterFinish) {
    this.$this_1 = $outer;
    this.linebreakAfterFinish_1 = linebreakAfterFinish;
  }
  AbstractEncoder_0.prototype.endStructure_e64gd4_k$ = function (descriptor) {
    this.$this_1.writer_1.levelDecrease_gh7j01_k$();
    this.endStructure0_ou8i3s_k$(descriptor);
    if (this.linebreakAfterFinish_1) {
      // Inline function 'net.mamoe.yamlkt.internal.writeln' call
      var tmp0_writeln = this.$this_1.writer_1;
      // Inline function 'net.mamoe.yamlkt.internal.write' call
      // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
      if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
        tmp0_writeln.set_currentIndent_27p6t4_k$(0);
      } else {
        var tmp0_this = tmp0_writeln;
        var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
        tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
      }
      _get_output__ji2uqy(tmp0_writeln).append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
    }
  };
  AbstractEncoder_0.prototype.encodeSerializableElement0_vocg1o_k$ = function (descriptor, index, serializer, value) {
    serializer.serialize_32qylj_k$(this, value);
  };
  AbstractEncoder_0.prototype.encodeSerializableElement_cw68jm_k$ = function (descriptor, index, serializer, value) {
    this.writeValueHead_1tskv3_k$(descriptor, index);
    this.encodeSerializableElement0_vocg1o_k$(descriptor, index, serializer, value);
    this.writeValueTail_d4aj3j_k$(descriptor, index);
    return Unit_getInstance();
  };
  AbstractEncoder_0.prototype.encodeSerializableUnquotedStringElement_1axywt_k$ = function (descriptor, index, value) {
    this.writeValueHead_1tskv3_k$(descriptor, index);
    this.encodeSerializableUnquotedStringImpl_c0z6wb_k$(descriptor, index, value);
    this.writeValueTail_d4aj3j_k$(descriptor, index);
    return Unit_getInstance();
  };
  AbstractEncoder_0.prototype.beginCollection_dgpn47_k$ = function (descriptor, collectionSize) {
    if (collectionSize === 0) {
      if (equals(descriptor.get_kind_wop7ml_k$(), LIST_getInstance())) {
        this.$this_1.writer_1.levelIncrease_gvoyuj_k$();
        return new EmptySequenceEncoder(this.$this_1, this.linebreakAfterFinish_1);
      }
    }
    return beginCollection.call(this, descriptor, collectionSize);
  };
  AbstractEncoder_0.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return beginStructureImpl(this.$this_1, this, descriptor);
  };
  AbstractEncoder_0.prototype.encodeCharElement_4fawdf_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_0(Companion_getInstance_2()), new Char(value));
  };
  AbstractEncoder_0.prototype.encodeBooleanElement_2l5aov_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_1(BooleanCompanionObject_getInstance()), value);
  };
  AbstractEncoder_0.prototype.encodeByteElement_r2fm3n_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_2(ByteCompanionObject_getInstance()), value);
  };
  AbstractEncoder_0.prototype.encodeDoubleElement_m8xcw3_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_3(DoubleCompanionObject_getInstance()), value);
  };
  AbstractEncoder_0.prototype.encodeFloatElement_o97mfb_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_4(FloatCompanionObject_getInstance()), value);
  };
  AbstractEncoder_0.prototype.encodeIntElement_utywpf_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_5(IntCompanionObject_getInstance()), value);
  };
  AbstractEncoder_0.prototype.encodeLongElement_xtv8il_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_6(Companion_getInstance_0()), value);
  };
  AbstractEncoder_0.prototype.encodeShortElement_2nnlvd_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer_7(ShortCompanionObject_getInstance()), value);
  };
  AbstractEncoder_0.prototype.encodeStringElement_pgmbgj_k$ = function (descriptor, index, value) {
    return this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer(StringCompanionObject_getInstance()), value);
  };
  AbstractEncoder_0.prototype.encodeInlineElement_9d3ws3_k$ = function (descriptor, index) {
    return new YamlEncoder$AbstractEncoder$encodeInlineElement$1(this, descriptor, index);
  };
  AbstractEncoder_0.prototype.encodeNullableSerializableElement_j50jzb_k$ = function (descriptor, index, serializer, value) {
    if (value == null) {
      this.encodeSerializableUnquotedStringElement_1axywt_k$(descriptor, index, this.$this_1.configuration_1.get_nullSerialization_44dg5c_k$().get_value_j01efc_k$());
    } else {
      this.encodeSerializableElement_cw68jm_k$(descriptor, index, serializer, value);
    }
  };
  AbstractEncoder_0.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(value ? 'true' : 'false');
  };
  AbstractEncoder_0.prototype.encodeByte_gpyndp_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(value.toString());
  };
  AbstractEncoder_0.prototype.encodeChar_kkx54x_k$ = function (value) {
    return this.encodeValue_jhnaky_k$(value);
  };
  AbstractEncoder_0.prototype.encodeDouble_79ztsb_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(value.toString());
  };
  AbstractEncoder_0.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    return this.encodeValue_x0fm53_k$(enumDescriptor.getElementName_ykpypc_k$(index));
  };
  AbstractEncoder_0.prototype.encodeFloat_f5fde1_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(value.toString());
  };
  AbstractEncoder_0.prototype.encodeInt_5vxmon_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(value.toString());
  };
  AbstractEncoder_0.prototype.encodeLong_rk3ab9_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(value.toString());
  };
  AbstractEncoder_0.prototype.encodeNull_ek2hec_k$ = function () {
    return this.encodeUnquotedString_ywqjfa_k$(this.$this_1.configuration_1.get_nullSerialization_44dg5c_k$().get_value_j01efc_k$());
  };
  AbstractEncoder_0.prototype.encodeShort_rh3vxz_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(value.toString());
  };
  AbstractEncoder_0.prototype.encodeString_90sumj_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(toEscapedString(value, this.$this_1.writer_1.get_escapeBuf_t2a2dl_k$(), this.$this_1.configuration_1.get_stringSerialization_qqa41i_k$()));
  };
  AbstractEncoder_0.prototype.encodeUnquotedString_ywqjfa_k$ = function (value) {
    return this.encodeValue_x0fm53_k$(toEscapedString(value, this.$this_1.writer_1.get_escapeBuf_t2a2dl_k$(), StringSerialization_NONE_getInstance()));
  };
  AbstractEncoder_0.prototype.encodeInline_8gn4q6_k$ = function (inlineDescriptor) {
    return new InlineEncoder(this.$this_1.writer_1, this, this.get_serializersModule_piitvg_k$());
  };
  AbstractEncoder_0.prototype.shouldEncodeElementDefault_m92hrm_k$ = function (descriptor, index) {
    return this.$this_1.configuration_1.get_encodeDefaultValues_bow2sc_k$();
  };
  AbstractEncoder_0.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.$this_1.serializersModule_1;
  };
  function YamlEncoder(configuration, serializersModule, writer) {
    this.configuration_1 = configuration;
    this.serializersModule_1 = serializersModule;
    this.writer_1 = writer;
  }
  YamlEncoder.prototype.get_serializersModule_piitvg_k$ = function () {
    return this.serializersModule_1;
  };
  YamlEncoder.prototype.beginCollection_dgpn47_k$ = function (descriptor, collectionSize) {
    if (collectionSize === 0) {
      if (equals(descriptor.get_kind_wop7ml_k$(), LIST_getInstance())) {
        return new EmptySequenceEncoder(this, false);
      }
    }
    return beginCollection.call(this, descriptor, collectionSize);
  };
  YamlEncoder.prototype.beginStructure_dv3yt3_k$ = function (descriptor) {
    return beginStructureImpl(this, null, descriptor);
  };
  YamlEncoder.prototype.encodeBoolean_6cztl5_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = value ? 'true' : 'false';
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeByte_gpyndp_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = value.toString();
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeChar_kkx54x_k$ = function (value) {
    var tmp0_write = this.writer_1;
    if (equals(new Char(value), new Char(_Char___init__impl__6a9atx(10)))) {
      tmp0_write.set_currentIndent_27p6t4_k$(0);
    } else {
      var tmp0_this = tmp0_write;
      var tmp1 = tmp0_this.get_currentIndent_v1v68s_k$();
      tmp0_this.set_currentIndent_27p6t4_k$(tmp1 + 1 | 0);
    }
    _get_output__ji2uqy(tmp0_write).append_t8oh9e_k$(value);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeDouble_79ztsb_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = value.toString();
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeEnum_dzauii_k$ = function (enumDescriptor, index) {
    var tmp0_write = this.writer_1;
    var tmp1_write = enumDescriptor.getElementName_ykpypc_k$(index);
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeFloat_f5fde1_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = value.toString();
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeInline_8gn4q6_k$ = function (inlineDescriptor) {
    return new InlineEncoder(this.writer_1, this, this.serializersModule_1);
  };
  YamlEncoder.prototype.encodeInt_5vxmon_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = value.toString();
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeLong_rk3ab9_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = value.toString();
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeShort_rh3vxz_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = value.toString();
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeString_90sumj_k$ = function (value) {
    var tmp0_write = this.writer_1;
    var tmp1_write = toEscapedString(value, this.writer_1.get_escapeBuf_t2a2dl_k$(), this.configuration_1.get_stringSerialization_qqa41i_k$());
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeNull_ek2hec_k$ = function () {
    var tmp0_write = this.writer_1;
    var tmp1_write = this.configuration_1.get_nullSerialization_44dg5c_k$().get_value_j01efc_k$();
    var tmp0_this = tmp0_write;
    tmp0_this.set_currentIndent_27p6t4_k$(tmp0_this.get_currentIndent_v1v68s_k$() + tmp1_write.length | 0);
    _get_output__ji2uqy(tmp0_write).append_oz4qxs_k$(tmp1_write);
    return Unit_getInstance();
  };
  YamlEncoder.prototype.encodeSerializableValue_g55msp_k$ = function (serializer, value) {
    serializer.serialize_32qylj_k$(this, value);
  };
  function _get_output__ji2uqy($this) {
    return $this.output_1;
  }
  function YamlWriter(output) {
    this.output_1 = output;
    this.level_1 = -1;
    this.currentIndent_1 = 0;
    this.escapeBuf_1 = new StringBufHolder();
  }
  YamlWriter.prototype.set_level_tgstex_k$ = function (_set____db54di) {
    this.level_1 = _set____db54di;
  };
  YamlWriter.prototype.get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  YamlWriter.prototype.set_currentIndent_27p6t4_k$ = function (_set____db54di) {
    this.currentIndent_1 = _set____db54di;
  };
  YamlWriter.prototype.get_currentIndent_v1v68s_k$ = function () {
    return this.currentIndent_1;
  };
  YamlWriter.prototype.levelIncrease_gvoyuj_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 + 1 | 0;
  };
  YamlWriter.prototype.levelDecrease_gh7j01_k$ = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this.level_1;
    tmp0_this.level_1 = tmp1 - 1 | 0;
  };
  YamlWriter.prototype.append_y20c3x_k$ = function (char) {
    if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(10)))) {
      this.currentIndent_1 = 0;
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentIndent_1;
      tmp0_this.currentIndent_1 = tmp1 + 1 | 0;
    }
    this.output_1.append_t8oh9e_k$(char);
  };
  YamlWriter.prototype.append_1o6mm0_k$ = function (char) {
    var tmp0_this = this;
    tmp0_this.currentIndent_1 = tmp0_this.currentIndent_1 + char.length | 0;
    this.output_1.append_oz4qxs_k$(char);
  };
  YamlWriter.prototype.unaryPlus_g7ydph_k$ = function (_this__u8e3s4) {
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = this;
    tmp0_this.currentIndent_1 = tmp0_this.currentIndent_1 + _this__u8e3s4.length | 0;
    this.output_1.append_oz4qxs_k$(_this__u8e3s4);
  };
  YamlWriter.prototype.unaryPlus_yfzfca_k$ = function (_this__u8e3s4) {
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(_this__u8e3s4), new Char(_Char___init__impl__6a9atx(10)))) {
      this.currentIndent_1 = 0;
    } else {
      var tmp0_this = this;
      var tmp1 = tmp0_this.currentIndent_1;
      tmp0_this.currentIndent_1 = tmp1 + 1 | 0;
    }
    this.output_1.append_t8oh9e_k$(_this__u8e3s4);
  };
  YamlWriter.prototype.get_escapeBuf_t2a2dl_k$ = function () {
    return this.escapeBuf_1;
  };
  function write(_this__u8e3s4, chars) {
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = _this__u8e3s4;
    tmp0_this.currentIndent_1 = tmp0_this.currentIndent_1 + chars.length | 0;
    _this__u8e3s4.output_1.append_oz4qxs_k$(chars);
  }
  function write_0(_this__u8e3s4, char) {
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(10)))) {
      _this__u8e3s4.currentIndent_1 = 0;
    } else {
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.currentIndent_1;
      tmp0_this.currentIndent_1 = tmp1 + 1 | 0;
    }
    _this__u8e3s4.output_1.append_t8oh9e_k$(char);
  }
  function writeln(_this__u8e3s4) {
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
      _this__u8e3s4.currentIndent_1 = 0;
    } else {
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.currentIndent_1;
      tmp0_this.currentIndent_1 = tmp1 + 1 | 0;
    }
    _this__u8e3s4.output_1.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
  }
  function writeIndentedSmart(_this__u8e3s4, chars) {
    writeIndentSmart(_this__u8e3s4);
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = _this__u8e3s4;
    tmp0_this.currentIndent_1 = tmp0_this.currentIndent_1 + chars.length | 0;
    _this__u8e3s4.output_1.append_oz4qxs_k$(chars);
  }
  function writeIndentSmart(_this__u8e3s4) {
    var required = imul('  '.length, _this__u8e3s4.level_1);
    if (_this__u8e3s4.currentIndent_1 > required) {
      // Inline function 'kotlin.error' call
      var tmp0_error = 'Internal error: bad indent ' + _this__u8e3s4.currentIndent_1 + ', expected no bigger than ' + required;
      throw IllegalStateException_init_$Create$(toString(tmp0_error));
    }
    // Inline function 'kotlin.repeat' call
    var tmp1_repeat = required - _this__u8e3s4.currentIndent_1 | 0;
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < tmp1_repeat)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'net.mamoe.yamlkt.internal.writeIndentSmart.<anonymous>' call
        // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
        if (equals(new Char(_Char___init__impl__6a9atx(32)), new Char(_Char___init__impl__6a9atx(10)))) {
          _this__u8e3s4.currentIndent_1 = 0;
        } else {
          var tmp0_this = _this__u8e3s4;
          var tmp1 = tmp0_this.currentIndent_1;
          tmp0_this.currentIndent_1 = tmp1 + 1 | 0;
        }
        _this__u8e3s4.output_1.append_t8oh9e_k$(_Char___init__impl__6a9atx(32));
      }
       while (inductionVariable < tmp1_repeat);
  }
  function writeln_0(_this__u8e3s4, char) {
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(char), new Char(_Char___init__impl__6a9atx(10)))) {
      _this__u8e3s4.currentIndent_1 = 0;
    } else {
      var tmp0_this = _this__u8e3s4;
      var tmp1 = tmp0_this.currentIndent_1;
      tmp0_this.currentIndent_1 = tmp1 + 1 | 0;
    }
    _this__u8e3s4.output_1.append_t8oh9e_k$(char);
    // Inline function 'net.mamoe.yamlkt.internal.writeln' call
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
      _this__u8e3s4.currentIndent_1 = 0;
    } else {
      var tmp0_this_0 = _this__u8e3s4;
      var tmp1_0 = tmp0_this_0.currentIndent_1;
      tmp0_this_0.currentIndent_1 = tmp1_0 + 1 | 0;
    }
    _this__u8e3s4.output_1.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
  }
  function writeln_1(_this__u8e3s4, chars) {
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    var tmp0_this = _this__u8e3s4;
    tmp0_this.currentIndent_1 = tmp0_this.currentIndent_1 + chars.length | 0;
    _this__u8e3s4.output_1.append_oz4qxs_k$(chars);
    // Inline function 'net.mamoe.yamlkt.internal.writeln' call
    // Inline function 'net.mamoe.yamlkt.internal.write' call
    // Inline function 'net.mamoe.yamlkt.internal.YamlWriter.append' call
    if (equals(new Char(_Char___init__impl__6a9atx(10)), new Char(_Char___init__impl__6a9atx(10)))) {
      _this__u8e3s4.currentIndent_1 = 0;
    } else {
      var tmp0_this_0 = _this__u8e3s4;
      var tmp1 = tmp0_this_0.currentIndent_1;
      tmp0_this_0.currentIndent_1 = tmp1 + 1 | 0;
    }
    _this__u8e3s4.output_1.append_t8oh9e_k$(_Char___init__impl__6a9atx(10));
  }
  function get_INDENT_STRING() {
    return INDENT_STRING;
  }
  var INDENT_STRING;
  function serializeImpl(_this__u8e3s4, encoder, value) {
    var tmp0_subject = getKClassFromExpression(value);
    var tmp;
    if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      var tmp_0 = serializer_2(ByteCompanionObject_getInstance());
      encoder.encodeSerializableValue_g55msp_k$(tmp_0, typeof value === 'number' ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      var tmp_1 = serializer_7(ShortCompanionObject_getInstance());
      encoder.encodeSerializableValue_g55msp_k$(tmp_1, typeof value === 'number' ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      var tmp_2 = serializer_5(IntCompanionObject_getInstance());
      encoder.encodeSerializableValue_g55msp_k$(tmp_2, typeof value === 'number' ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(getKClass(Long))) {
      var tmp_3 = serializer_6(Companion_getInstance_0());
      encoder.encodeSerializableValue_g55msp_k$(tmp_3, value instanceof Long ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      var tmp_4 = serializer_4(FloatCompanionObject_getInstance());
      encoder.encodeSerializableValue_g55msp_k$(tmp_4, typeof value === 'number' ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      var tmp_5 = serializer_3(DoubleCompanionObject_getInstance());
      encoder.encodeSerializableValue_g55msp_k$(tmp_5, typeof value === 'number' ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(getKClass(Char))) {
      var tmp_6 = serializer_0(Companion_getInstance_2());
      encoder.encodeSerializableValue_g55msp_k$(tmp_6, new Char(value instanceof Char ? value.value_1 : THROW_CCE()));
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$())) {
      var tmp_7 = serializer(StringCompanionObject_getInstance());
      encoder.encodeSerializableValue_g55msp_k$(tmp_7, typeof value === 'string' ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$())) {
      var tmp_8 = serializer_1(BooleanCompanionObject_getInstance());
      encoder.encodeSerializableValue_g55msp_k$(tmp_8, typeof value === 'boolean' ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intArrayClass_h44pbv_k$())) {
      var tmp_9 = IntArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_9, isIntArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortArrayClass_c1p7wy_k$())) {
      var tmp_10 = ShortArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_10, isShortArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$())) {
      var tmp_11 = ByteArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_11, isByteArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_longArrayClass_v379a4_k$())) {
      var tmp_12 = LongArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_12, isLongArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_charArrayClass_7lhfoe_k$())) {
      var tmp_13 = CharArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_13, isCharArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_floatArrayClass_qngmha_k$())) {
      var tmp_14 = FloatArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_14, isFloatArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_doubleArrayClass_84hee1_k$())) {
      var tmp_15 = DoubleArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_15, isDoubleArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_booleanArrayClass_lnbwea_k$())) {
      var tmp_16 = BooleanArraySerializer();
      encoder.encodeSerializableValue_g55msp_k$(tmp_16, isBooleanArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(getKClass(Pair))) {
      var tmp_17 = YamlDynamicPairSerializer_getInstance();
      encoder.encodeSerializableValue_g55msp_k$(tmp_17, value instanceof Pair ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(getKClass(Triple))) {
      var tmp_18 = YamlDynamicTripleSerializer_getInstance();
      encoder.encodeSerializableValue_g55msp_k$(tmp_18, value instanceof Triple ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_arrayClass_udg0fc_k$())) {
      var tmp_19 = AnyTypedArraySerializer_getInstance();
      encoder.encodeSerializableValue_g55msp_k$(tmp_19, isArray(value) ? value : THROW_CCE());
      tmp = Unit_getInstance();
    } else {
      var tmp1_subject = value;
      var tmp_20;
      if (isInterface(tmp1_subject, Map)) {
        var tmp_21 = YamlDynamicMapSerializer_getInstance();
        encoder.encodeSerializableValue_g55msp_k$(tmp_21, isInterface(value, Map) ? value : THROW_CCE());
        tmp_20 = Unit_getInstance();
      } else {
        if (isInterface(tmp1_subject, List)) {
          var tmp_22 = YamlDynamicListSerializer_getInstance();
          encoder.encodeSerializableValue_g55msp_k$(tmp_22, isInterface(value, List) ? value : THROW_CCE());
          tmp_20 = Unit_getInstance();
        } else {
          if (isInterface(tmp1_subject, Entry)) {
            var tmp_23 = YamlMapEntrySerializer_getInstance();
            encoder.encodeSerializableValue_g55msp_k$(tmp_23, isInterface(value, Entry) ? value : THROW_CCE());
            tmp_20 = Unit_getInstance();
          } else {
            var tmp_24 = serializerOrNull(getKClassFromExpression(value));
            var tmp2_elvis_lhs = (tmp_24 == null ? true : isInterface(tmp_24, KSerializer)) ? tmp_24 : null;
            var tmp_25;
            if (tmp2_elvis_lhs == null) {
              var tmp$ret$0;
              // Inline function 'net.mamoe.yamlkt.internal.classSimpleName' call
              tmp$ret$0 = getKClassFromExpression(value).get_simpleName_r6f8py_k$();
              var tmp0_error = 'Cannot find serializer for ' + tmp$ret$0 + '. Please use specify serializers manually.';
              throw IllegalStateException_init_$Create$(toString(tmp0_error));
            } else {
              tmp_25 = tmp2_elvis_lhs;
            }
            encoder.encodeSerializableValue_g55msp_k$(tmp_25, value);
            tmp_20 = Unit_getInstance();
          }
        }
      }
      tmp = tmp_20;
    }
    return tmp;
  }
  //region block: post-declaration
  InlineElementDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  InlineElementDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  AbstractDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  AbstractDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  AbstractDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  AbstractDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  AbstractDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  AbstractDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  IndentedDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  IndentedDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  IndentedDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  IndentedDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  IndentedDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  IndentedDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  EmptyClassDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  EmptyClassDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  EmptyClassDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  EmptyClassDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  EmptyClassDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  BlockClassDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  BlockClassDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  BlockClassDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  BlockClassDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  BlockClassDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  BlockMapDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  BlockMapDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  BlockMapDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  BlockMapDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  BlockMapDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  BlockMapDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  FlowMapDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  FlowMapDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  FlowMapDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  FlowMapDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  FlowMapDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  FlowClassDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  FlowClassDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  FlowClassDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  FlowClassDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  FlowClassDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  FlowSequenceDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  FlowSequenceDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  FlowSequenceDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  FlowSequenceDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  FlowSequenceDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  BlockSequenceDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  BlockSequenceDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  BlockSequenceDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  BlockSequenceDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  BlockSequenceDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  YamlStringDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  YamlStringDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  YamlStringDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  YamlStringDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  YamlStringDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  YamlStringDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  YamlNullStringDecoder.prototype.decodeNullableSerializableElement$default_x1t78n_k$ = decodeNullableSerializableElement$default;
  YamlNullStringDecoder.prototype.decodeSerializableElement$default_t023k4_k$ = decodeSerializableElement$default;
  YamlNullStringDecoder.prototype.decodeSequentially_xlblqy_k$ = decodeSequentially;
  YamlNullStringDecoder.prototype.decodeCollectionSize_cd6i6s_k$ = decodeCollectionSize;
  YamlNullStringDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  YamlNullStringDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  YamlDecoder.prototype.decodeSerializableValue_6v83lo_k$ = decodeSerializableValue;
  YamlDecoder.prototype.decodeNullableSerializableValue_f10m3r_k$ = decodeNullableSerializableValue;
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.beginCollection_dgpn47_k$ = beginCollection;
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  YamlEncoder$AbstractEncoder$encodeInlineElement$1.prototype.shouldEncodeElementDefault_m92hrm_k$ = shouldEncodeElementDefault;
  AbstractEncoder_0.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  AbstractEncoder_0.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  AbstractEncoder_0.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  FlowEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  FlowEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  FlowEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  FlowMapOrClassEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  FlowMapOrClassEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  FlowMapOrClassEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  FlowSequenceEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  FlowSequenceEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  FlowSequenceEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  EmptySequenceEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  EmptySequenceEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  EmptySequenceEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  BlockEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  BlockEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  BlockEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  BlockSequenceEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  BlockSequenceEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  BlockSequenceEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  BlockMapOrClassEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  BlockMapOrClassEncoder.prototype.encodeSerializableValue_g55msp_k$ = encodeSerializableValue;
  BlockMapOrClassEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  YamlEncoder.prototype.encodeNotNullMark_40lhgg_k$ = encodeNotNullMark;
  YamlEncoder.prototype.encodeNullableSerializableValue_4n8qik_k$ = encodeNullableSerializableValue;
  //endregion
  //region block: init
  enabled0 = false;
  logIndent0 = 0;
  decodeValue0 = 0;
  SINGLE = 1;
  UNQUOTED = 2;
  DOUBLE_WITHOUT_ESCAPE = 4;
  STRING_ESC = _Char___init__impl__6a9atx(92);
  INVALID = _Char___init__impl__6a9atx(0);
  ESC2C_MAX = 117;
  UNICODE_ESC = _Char___init__impl__6a9atx(117);
  STRING = _Char___init__impl__6a9atx(34);
  SINGLE_QUOTATION_CHAR = _Char___init__impl__6a9atx(39);
  DOUBLE_QUOTATION_CHAR = _Char___init__impl__6a9atx(34);
  INDENT_STRING = '  ';
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ListSerialization_FLOW_SEQUENCE_getInstance;
  _.$_$.b = Yaml$default;
  _.$_$.c = BinaryConverter_getInstance;
  _.$_$.d = Debugging_getInstance;
  _.$_$.e = HexConverter_getInstance;
  _.$_$.f = Default_getInstance;
  _.$_$.g = YamlDynamicSerializer_getInstance;
  _.$_$.h = Companion_getInstance_4;
  _.$_$.i = Companion_getInstance_5;
  _.$_$.j = Companion_getInstance_3;
  _.$_$.k = YamlNull_getInstance;
  _.$_$.l = adjustDynamicString;
  _.$_$.m = YamlDecodingException;
  _.$_$.n = YamlLiteral;
  _.$_$.o = yamlListOf;
  //endregion
  return _;
}));
