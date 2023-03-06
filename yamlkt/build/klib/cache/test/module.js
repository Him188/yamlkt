(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './yamlkt-yamlkt.js', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-kotlin-test-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./yamlkt-yamlkt.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['yamlkt-yamlkt'] === 'undefined') {
      throw new Error("Error loading module 'yamlkt-yamlkt-test'. Its dependency 'yamlkt-yamlkt' was not found. Please, check whether 'yamlkt-yamlkt' is loaded prior to 'yamlkt-yamlkt-test'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'yamlkt-yamlkt-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'yamlkt-yamlkt-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'yamlkt-yamlkt-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'yamlkt-yamlkt-test'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'yamlkt-yamlkt-test'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'yamlkt-yamlkt-test'.");
    }
    root['yamlkt-yamlkt-test'] = factory(typeof this['yamlkt-yamlkt-test'] === 'undefined' ? {} : this['yamlkt-yamlkt-test'], this['yamlkt-yamlkt'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-kotlin-test-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_net_mamoe_yamlkt_yamlkt, kotlin_kotlin, kotlin_kotlin_test, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var adjustDynamicString = kotlin_net_mamoe_yamlkt_yamlkt.$_$.l;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.f2;
  var arrayOf = kotlin_kotlin.$_$.f7;
  var createKType = kotlin_kotlin.$_$.a;
  var assertIsOfType = kotlin_kotlin_test.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.a7;
  var Unit_getInstance = kotlin_kotlin.$_$.k2;
  var println = kotlin_kotlin.$_$.y3;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.c2;
  var Companion_getInstance = kotlin_kotlin.$_$.j2;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.p1;
  var toLong = kotlin_kotlin.$_$.i5;
  var Long = kotlin_kotlin.$_$.y6;
  var getKClass = kotlin_kotlin.$_$.d;
  var classMeta = kotlin_kotlin.$_$.g4;
  var setMetadataFor = kotlin_kotlin.$_$.h5;
  var suite = kotlin_kotlin_test.$_$.e;
  var test = kotlin_kotlin_test.$_$.f;
  var Default_getInstance = kotlin_net_mamoe_yamlkt_yamlkt.$_$.f;
  var YamlDecodingException = kotlin_net_mamoe_yamlkt_yamlkt.$_$.m;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.i2;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.i1;
  var createFailure = kotlin_kotlin.$_$.g7;
  var checkResultIsFailure = kotlin_kotlin_test.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.g5;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p2;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o2;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l2;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m2;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r2;
  var hashCode = kotlin_kotlin.$_$.n4;
  var equals = kotlin_kotlin.$_$.i4;
  var ByteSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k2;
  var ShortSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var FloatSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var DoubleSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var CharSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.d1;
  var getStringHashCode = kotlin_kotlin.$_$.m4;
  var toString = kotlin_kotlin.$_$.j5;
  var Char = kotlin_kotlin.$_$.u6;
  var getNumberHashCode = kotlin_kotlin.$_$.k4;
  var Char__hashCode_impl_otmys = kotlin_kotlin.$_$.f1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.j1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.y;
  var Yaml$default = kotlin_net_mamoe_yamlkt_yamlkt.$_$.b;
  var to = kotlin_kotlin.$_$.o7;
  var mapOf = kotlin_kotlin.$_$.r3;
  var checkResultIsFailure_0 = kotlin_kotlin_test.$_$.c;
  var listOf = kotlin_kotlin.$_$.p3;
  var mapOf_0 = kotlin_kotlin.$_$.s3;
  var HexConverter_getInstance = kotlin_net_mamoe_yamlkt_yamlkt.$_$.e;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.s1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.t1;
  var IllegalArgumentException = kotlin_kotlin.$_$.w6;
  var IllegalStateException = kotlin_kotlin.$_$.x6;
  var BinaryConverter_getInstance = kotlin_net_mamoe_yamlkt_yamlkt.$_$.c;
  var UIntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var UInt = kotlin_kotlin.$_$.d7;
  var UInt__hashCode_impl_z2mhuw = kotlin_kotlin.$_$.q1;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w2;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q2;
  var InlineClassDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n2;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var ListSerialization_FLOW_SEQUENCE_getInstance = kotlin_net_mamoe_yamlkt_yamlkt.$_$.a;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.o1;
  var Debugging_getInstance = kotlin_net_mamoe_yamlkt_yamlkt.$_$.d;
  var listOf_0 = kotlin_kotlin.$_$.o3;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.m7;
  var trimIndent = kotlin_kotlin.$_$.r6;
  var THROW_ISE = kotlin_kotlin.$_$.b7;
  var Enum = kotlin_kotlin.$_$.v6;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var interfaceMeta = kotlin_kotlin.$_$.o4;
  var SerializersModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t2;
  var PolymorphicModuleBuilder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s2;
  var ContextualSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v2;
  var YamlDynamicSerializer_getInstance = kotlin_net_mamoe_yamlkt_yamlkt.$_$.g;
  var Companion_getInstance_1 = kotlin_net_mamoe_yamlkt_yamlkt.$_$.j;
  var yamlListOf = kotlin_net_mamoe_yamlkt_yamlkt.$_$.o;
  var Companion_getInstance_2 = kotlin_net_mamoe_yamlkt_yamlkt.$_$.h;
  var YamlLiteral = kotlin_net_mamoe_yamlkt_yamlkt.$_$.n;
  var Companion_getInstance_3 = kotlin_net_mamoe_yamlkt_yamlkt.$_$.i;
  var YamlNull_getInstance = kotlin_net_mamoe_yamlkt_yamlkt.$_$.k;
  var Annotation = kotlin_kotlin.$_$.t6;
  var toString_0 = kotlin_kotlin.$_$.n7;
  //endregion
  //region block: pre-declaration
  setMetadataFor(AdjustDynamicStringTest, 'AdjustDynamicStringTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(DecoderFailTest, 'DecoderFailTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Inner, 'Inner', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance}, []);
  setMetadataFor(Companion_0, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_0, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Outer, 'Outer', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_0}, []);
  setMetadataFor(Companion_1, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_1, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_2, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_2, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_3, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_3, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_4, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_4, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_5, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_5, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_6, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_6, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_7, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_7, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_8, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_8, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(NestedTestData, 'NestedTestData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_1}, []);
  setMetadataFor(TestByteData, 'TestByteData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_2}, []);
  setMetadataFor(TestBooleanData, 'TestBooleanData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_3}, []);
  setMetadataFor(TestStringData, 'TestStringData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_4}, []);
  setMetadataFor(TestIntListData, 'TestIntListData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_5}, []);
  setMetadataFor(TestStringMapData, 'TestStringMapData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_6}, []);
  setMetadataFor(TestStringListData, 'TestStringListData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_7}, []);
  setMetadataFor(TestPrimitiveTypesData, 'TestPrimitiveTypesData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_8}, []);
  setMetadataFor(DecoderTest, 'DecoderTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(HexConverterTest, 'HexConverterTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_9, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_9, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(SimpleContainerForUInt, 'SimpleContainerForUInt', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_9}, []);
  setMetadataFor(Companion_10, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(MyUInt, 'MyUInt', classMeta, undefined, undefined, undefined, {0: MyUIntSerializer_getInstance}, []);
  setMetadataFor(MyUIntSerializer, 'MyUIntSerializer', objectMeta, undefined, [KSerializer], undefined, undefined, []);
  setMetadataFor(Companion_11, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_10, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(SimpleContainerForMyType, 'SimpleContainerForMyType', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_10}, []);
  setMetadataFor(Companion_12, 'Companion', objectMeta, undefined, [SerializerFactory], undefined, undefined, []);
  setMetadataFor($serializer_11, '$serializer', classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(MyList, 'MyList', classMeta, undefined, undefined, undefined, {0: Companion_getInstance_17}, []);
  setMetadataFor(Companion_13, 'Companion', objectMeta, undefined, [SerializerFactory], undefined, undefined, []);
  setMetadataFor($serializer_12, '$serializer', classMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(ContainerForList, 'ContainerForList', classMeta, undefined, undefined, undefined, {0: Companion_getInstance_18}, []);
  setMetadataFor(Companion_14, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_13, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(UnsignedInBoxedPosition, 'UnsignedInBoxedPosition', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_11}, []);
  setMetadataFor(Companion_15, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_14, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(MixedPositions, 'MixedPositions', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_12}, []);
  setMetadataFor(InlineClassesTest, 'InlineClassesTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_16, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_15, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_17, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_16, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(TestStringData_0, 'TestStringData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_13}, []);
  setMetadataFor(TestTwoStringData, 'TestTwoStringData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_14}, []);
  setMetadataFor(MultilineStringTest, 'MultilineStringTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Platform, 'Platform', classMeta, Enum, undefined, undefined, undefined, []);
  setMetadataFor(Companion_18, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_17, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Companion_19, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_18, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(Fruit, 'Fruit', interfaceMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Banana, 'Banana', classMeta, undefined, [Fruit], undefined, {0: $serializer_getInstance_15}, []);
  setMetadataFor(Poly, 'Poly', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_16}, []);
  setMetadataFor(PolymorphismTest, 'PolymorphismTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_20, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_19, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(TestData, 'TestData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_17}, []);
  setMetadataFor(YamlDynamicSerializerTest, 'YamlDynamicSerializerTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlElementDeserializingTest, 'YamlElementDeserializingTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(YamlElementTests, 'YamlElementTests', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(Companion_21, 'Companion', objectMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor($serializer_20, '$serializer', objectMeta, undefined, [GeneratedSerializer], undefined, undefined, []);
  setMetadataFor(TestData_0, 'TestData', classMeta, undefined, undefined, undefined, {0: $serializer_getInstance_18}, []);
  setMetadataFor(DoubleQuotationMultilineTest, 'DoubleQuotationMultilineTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(TDsl, 'TDsl', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(SingleQuotationMultilineTest, 'SingleQuotationMultilineTest', classMeta, undefined, undefined, undefined, undefined, []);
  setMetadataFor(TDsl_0, 'TDsl', classMeta, undefined, [Annotation], undefined, undefined, []);
  setMetadataFor(UnquotedMultilineTest, 'UnquotedMultilineTest', classMeta, undefined, undefined, undefined, undefined, []);
  //endregion
  function AdjustDynamicStringTest() {
  }
  AdjustDynamicStringTest.prototype.double_3j5ri8_k$ = function () {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual = adjustDynamicString('1.0', false);
    var tmp$ret$0;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp = createKType(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), arrayOf([]), false);
    assertIsOfType(actual, tmp, typeof actual === 'number', null);
    tmp$ret$0 = typeof actual === 'number' ? actual : THROW_CCE();
    println(1.0);
    println('1.0');
    assertEquals$default(1.0, actual, null, 4, null);
    tmp$ret$1 = Unit_getInstance();
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_0 = adjustDynamicString('12.0', false);
    var tmp$ret$2;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = createKType(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), arrayOf([]), false);
    assertIsOfType(actual_0, tmp_0, typeof actual_0 === 'number', null);
    tmp$ret$2 = typeof actual_0 === 'number' ? actual_0 : THROW_CCE();
    println(12.0);
    println('12.0');
    assertEquals$default(12.0, actual_0, null, 4, null);
    tmp$ret$3 = Unit_getInstance();
    var tmp$ret$5;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_1 = adjustDynamicString('12.1', false);
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1 = createKType(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), arrayOf([]), false);
    assertIsOfType(actual_1, tmp_1, typeof actual_1 === 'number', null);
    tmp$ret$4 = typeof actual_1 === 'number' ? actual_1 : THROW_CCE();
    println(12.1);
    println('12.1');
    assertEquals$default(12.1, actual_1, null, 4, null);
    tmp$ret$5 = Unit_getInstance();
    var tmp$ret$7;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_2 = adjustDynamicString('0.0', false);
    var tmp$ret$6;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2 = createKType(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), arrayOf([]), false);
    assertIsOfType(actual_2, tmp_2, typeof actual_2 === 'number', null);
    tmp$ret$6 = typeof actual_2 === 'number' ? actual_2 : THROW_CCE();
    println(0.0);
    println('0.0');
    assertEquals$default(0.0, actual_2, null, 4, null);
    tmp$ret$7 = Unit_getInstance();
    var tmp$ret$9;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_3 = adjustDynamicString('-1.0', false);
    var tmp$ret$8;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3 = createKType(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), arrayOf([]), false);
    assertIsOfType(actual_3, tmp_3, typeof actual_3 === 'number', null);
    tmp$ret$8 = typeof actual_3 === 'number' ? actual_3 : THROW_CCE();
    println(-1.0);
    println('-1.0');
    assertEquals$default(-1.0, actual_3, null, 4, null);
    tmp$ret$9 = Unit_getInstance();
    var tmp$ret$11;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_4 = adjustDynamicString('-12.0', false);
    var tmp$ret$10;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_4 = createKType(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), arrayOf([]), false);
    assertIsOfType(actual_4, tmp_4, typeof actual_4 === 'number', null);
    tmp$ret$10 = typeof actual_4 === 'number' ? actual_4 : THROW_CCE();
    println(-12.0);
    println('-12.0');
    assertEquals$default(-12.0, actual_4, null, 4, null);
    tmp$ret$11 = Unit_getInstance();
    var tmp$ret$13;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_5 = adjustDynamicString('-12.1', false);
    var tmp$ret$12;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_5 = createKType(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), arrayOf([]), false);
    assertIsOfType(actual_5, tmp_5, typeof actual_5 === 'number', null);
    tmp$ret$12 = typeof actual_5 === 'number' ? actual_5 : THROW_CCE();
    println(-12.1);
    println('-12.1');
    assertEquals$default(-12.1, actual_5, null, 4, null);
    tmp$ret$13 = Unit_getInstance();
  };
  AdjustDynamicStringTest.prototype.integer_a6bsa5_k$ = function () {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual = adjustDynamicString('1', false);
    var tmp$ret$0;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp = createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false);
    assertIsOfType(actual, tmp, typeof actual === 'number', null);
    tmp$ret$0 = typeof actual === 'number' ? actual : THROW_CCE();
    println(1);
    println('1');
    assertEquals$default(1, actual, null, 4, null);
    tmp$ret$1 = Unit_getInstance();
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_0 = adjustDynamicString('12', false);
    var tmp$ret$2;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false);
    assertIsOfType(actual_0, tmp_0, typeof actual_0 === 'number', null);
    tmp$ret$2 = typeof actual_0 === 'number' ? actual_0 : THROW_CCE();
    println(12);
    println('12');
    assertEquals$default(12, actual_0, null, 4, null);
    tmp$ret$3 = Unit_getInstance();
    var tmp$ret$5;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_1 = adjustDynamicString('0', false);
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1 = createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false);
    assertIsOfType(actual_1, tmp_1, typeof actual_1 === 'number', null);
    tmp$ret$4 = typeof actual_1 === 'number' ? actual_1 : THROW_CCE();
    println(0);
    println('0');
    assertEquals$default(0, actual_1, null, 4, null);
    tmp$ret$5 = Unit_getInstance();
    var tmp$ret$7;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_2 = adjustDynamicString('-1', false);
    var tmp$ret$6;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2 = createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false);
    assertIsOfType(actual_2, tmp_2, typeof actual_2 === 'number', null);
    tmp$ret$6 = typeof actual_2 === 'number' ? actual_2 : THROW_CCE();
    println(-1);
    println('-1');
    assertEquals$default(-1, actual_2, null, 4, null);
    tmp$ret$7 = Unit_getInstance();
    var tmp$ret$9;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual_3 = adjustDynamicString('-12', false);
    var tmp$ret$8;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3 = createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false);
    assertIsOfType(actual_3, tmp_3, typeof actual_3 === 'number', null);
    tmp$ret$8 = typeof actual_3 === 'number' ? actual_3 : THROW_CCE();
    println(-12);
    println('-12');
    assertEquals$default(-12, actual_3, null, 4, null);
    tmp$ret$9 = Unit_getInstance();
  };
  AdjustDynamicStringTest.prototype.string_awrxkw_k$ = function () {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var actual = adjustDynamicString('1.0xx', false);
    var tmp$ret$0;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp = createKType(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), arrayOf([]), false);
    assertIsOfType(actual, tmp, typeof actual === 'string', null);
    tmp$ret$0 = typeof actual === 'string' ? actual : THROW_CCE();
    println('1.0xx');
    println('1.0xx');
    assertEquals$default('1.0xx', actual, null, 4, null);
    tmp$ret$1 = Unit_getInstance();
  };
  AdjustDynamicStringTest.prototype.boundaries_kagtfb_k$ = function () {
    var tmp$ret$1;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var tmp0_test = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    var tmp1_test = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$().toString();
    var actual = adjustDynamicString(tmp1_test, false);
    var tmp$ret$0;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp = createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false);
    assertIsOfType(actual, tmp, typeof actual === 'number', null);
    tmp$ret$0 = typeof actual === 'number' ? actual : THROW_CCE();
    println(tmp0_test);
    println(tmp1_test);
    assertEquals$default(tmp0_test, actual, null, 4, null);
    tmp$ret$1 = Unit_getInstance();
    var tmp$ret$3;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var tmp2_test = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
    var tmp3_test = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$().toString();
    var actual_0 = adjustDynamicString(tmp3_test, false);
    var tmp$ret$2;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_0 = createKType(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), arrayOf([]), false);
    assertIsOfType(actual_0, tmp_0, typeof actual_0 === 'number', null);
    tmp$ret$2 = typeof actual_0 === 'number' ? actual_0 : THROW_CCE();
    println(tmp2_test);
    println(tmp3_test);
    assertEquals$default(tmp2_test, actual_0, null, 4, null);
    tmp$ret$3 = Unit_getInstance();
    var tmp$ret$7;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var tmp$ret$4;
    // Inline function 'kotlin.UInt.toLong' call
    var tmp4_toLong = Companion_getInstance().get_MAX_VALUE_blthzm_k$();
    tmp$ret$4 = toLong(_UInt___get_data__impl__f0vqqw(tmp4_toLong)).and_jhajnj_k$(new Long(-1, 0));
    var tmp6_test = tmp$ret$4.plus_u6jwas_k$(new Long(1, 0));
    var tmp$ret$5;
    // Inline function 'kotlin.UInt.toLong' call
    var tmp5_toLong = Companion_getInstance().get_MAX_VALUE_blthzm_k$();
    tmp$ret$5 = toLong(_UInt___get_data__impl__f0vqqw(tmp5_toLong)).and_jhajnj_k$(new Long(-1, 0));
    var tmp7_test = tmp$ret$5.plus_u6jwas_k$(new Long(1, 0)).toString();
    var actual_1 = adjustDynamicString(tmp7_test, false);
    var tmp$ret$6;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1 = createKType(getKClass(Long), arrayOf([]), false);
    assertIsOfType(actual_1, tmp_1, actual_1 instanceof Long, null);
    tmp$ret$6 = actual_1 instanceof Long ? actual_1 : THROW_CCE();
    println(tmp6_test);
    println(tmp7_test);
    assertEquals$default(tmp6_test, actual_1, null, 4, null);
    tmp$ret$7 = Unit_getInstance();
    var tmp$ret$9;
    // Inline function 'net.mamoe.yamlkt.AdjustDynamicStringTest.test' call
    var tmp8_test = toLong(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$()).minus_llf5ei_k$(new Long(1, 0));
    var tmp9_test = toLong(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$()).minus_llf5ei_k$(new Long(1, 0)).toString();
    var actual_2 = adjustDynamicString(tmp9_test, false);
    var tmp$ret$8;
    // Inline function 'kotlin.test.assertIs' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp_2 = createKType(getKClass(Long), arrayOf([]), false);
    assertIsOfType(actual_2, tmp_2, actual_2 instanceof Long, null);
    tmp$ret$8 = actual_2 instanceof Long ? actual_2 : THROW_CCE();
    println(tmp8_test);
    println(tmp9_test);
    assertEquals$default(tmp8_test, actual_2, null, 4, null);
    tmp$ret$9 = Unit_getInstance();
  };
  function test_fun_izoufj() {
    suite('AdjustDynamicStringTest', false, test_fun$AdjustDynamicStringTest_test_fun_ypol3l);
  }
  function test_fun$AdjustDynamicStringTest_test_fun_ypol3l() {
    test('double', false, test_fun$AdjustDynamicStringTest_test_fun$double_test_fun_wbnrt9);
    test('integer', false, test_fun$AdjustDynamicStringTest_test_fun$integer_test_fun_jeg16i);
    test('string', false, test_fun$AdjustDynamicStringTest_test_fun$string_test_fun_r37uer);
    test('boundaries', false, test_fun$AdjustDynamicStringTest_test_fun$boundaries_test_fun_avsakq);
    return Unit_getInstance();
  }
  function test_fun$AdjustDynamicStringTest_test_fun$double_test_fun_wbnrt9() {
    var tmp = new AdjustDynamicStringTest();
    tmp.double_3j5ri8_k$();
    return Unit_getInstance();
  }
  function test_fun$AdjustDynamicStringTest_test_fun$integer_test_fun_jeg16i() {
    var tmp = new AdjustDynamicStringTest();
    tmp.integer_a6bsa5_k$();
    return Unit_getInstance();
  }
  function test_fun$AdjustDynamicStringTest_test_fun$string_test_fun_r37uer() {
    var tmp = new AdjustDynamicStringTest();
    tmp.string_awrxkw_k$();
    return Unit_getInstance();
  }
  function test_fun$AdjustDynamicStringTest_test_fun$boundaries_test_fun_avsakq() {
    var tmp = new AdjustDynamicStringTest();
    tmp.boundaries_kagtfb_k$();
    return Unit_getInstance();
  }
  function DecoderFailTest() {
  }
  DecoderFailTest.prototype.testBadNumber_2744q3_k$ = function () {
  };
  DecoderFailTest.prototype.ensureMapWithNoSpaceAfterColonFails_c6k3hc_k$ = function () {
    Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_11().serializer_9w0wvi_k$(), 'map: \n    foo: bar\n    nonNull:\n        value\n    no: space');
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp0_assertFailsWith = getKClass(YamlDecodingException);
    var tmp$ret$3;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_11().serializer_9w0wvi_k$(), 'map: \n    foo: bar\n    nonNull:\n        value\n    no:space');
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = checkResultIsFailure(tmp0_assertFailsWith, null, tmp$ret$2);
    tmp$ret$4 = tmp$ret$3;
  };
  function test_fun_izoufj_0() {
    suite('DecoderFailTest', false, test_fun$DecoderFailTest_test_fun_dlgbw0);
  }
  function test_fun$DecoderFailTest_test_fun_dlgbw0() {
    test('testBadNumber', false, test_fun$DecoderFailTest_test_fun$testBadNumber_test_fun_n4iwrb);
    test('ensureMapWithNoSpaceAfterColonFails', false, test_fun$DecoderFailTest_test_fun$ensureMapWithNoSpaceAfterColonFails_test_fun_n7tnho);
    return Unit_getInstance();
  }
  function test_fun$DecoderFailTest_test_fun$testBadNumber_test_fun_n4iwrb() {
    var tmp = new DecoderFailTest();
    tmp.testBadNumber_2744q3_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderFailTest_test_fun$ensureMapWithNoSpaceAfterColonFails_test_fun_n7tnho() {
    var tmp = new DecoderFailTest();
    tmp.ensureMapWithNoSpaceAfterColonFails_c6k3hc_k$();
    return Unit_getInstance();
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.NestedTestData.Outer.Inner', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('map', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Inner_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer.prototype.serialize_jld5bz_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), value.map_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_jld5bz_k$(encoder, value instanceof Inner ? value : THROW_CCE());
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Inner_init_$Init$(seen1, map, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance().descriptor_1);
    }
    $this.map_1 = map;
    return $this;
  }
  function Inner_init_$Create$(seen1, map, serializationConstructorMarker) {
    return Inner_init_$Init$(seen1, map, serializationConstructorMarker, Object.create(Inner.prototype));
  }
  function Inner(map) {
    Companion_getInstance_4();
    this.map_1 = map;
  }
  Inner.prototype.get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  Inner.prototype.component1_7eebsc_k$ = function () {
    return this.map_1;
  };
  Inner.prototype.copy_j91n4m_k$ = function (map) {
    return new Inner(map);
  };
  Inner.prototype.copy$default_afo4ms_k$ = function (map, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      map = this.map_1;
    return this.copy_j91n4m_k$(map);
  };
  Inner.prototype.toString = function () {
    return 'Inner(map=' + this.map_1 + ')';
  };
  Inner.prototype.hashCode = function () {
    return hashCode(this.map_1);
  };
  Inner.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Inner))
      return false;
    var tmp0_other_with_cast = other instanceof Inner ? other : THROW_CCE();
    if (!equals(this.map_1, tmp0_other_with_cast.map_1))
      return false;
    return true;
  };
  function Companion_0() {
    Companion_instance_0 = this;
  }
  Companion_0.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.NestedTestData.Outer', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('inner', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_0.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [$serializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_0.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, $serializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Outer_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_0.prototype.serialize_cbdfja_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, $serializer_getInstance(), value.inner_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_0.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_cbdfja_k$(encoder, value instanceof Outer ? value : THROW_CCE());
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Outer_init_$Init$(seen1, inner, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_0().descriptor_1);
    }
    $this.inner_1 = inner;
    return $this;
  }
  function Outer_init_$Create$(seen1, inner, serializationConstructorMarker) {
    return Outer_init_$Init$(seen1, inner, serializationConstructorMarker, Object.create(Outer.prototype));
  }
  function Outer(inner) {
    Companion_getInstance_5();
    this.inner_1 = inner;
  }
  Outer.prototype.get_inner_it4enh_k$ = function () {
    return this.inner_1;
  };
  Outer.prototype.component1_7eebsc_k$ = function () {
    return this.inner_1;
  };
  Outer.prototype.copy_lu5gem_k$ = function (inner) {
    return new Outer(inner);
  };
  Outer.prototype.copy$default_31l80o_k$ = function (inner, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      inner = this.inner_1;
    return this.copy_lu5gem_k$(inner);
  };
  Outer.prototype.toString = function () {
    return 'Outer(inner=' + this.inner_1 + ')';
  };
  Outer.prototype.hashCode = function () {
    return this.inner_1.hashCode();
  };
  Outer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Outer))
      return false;
    var tmp0_other_with_cast = other instanceof Outer ? other : THROW_CCE();
    if (!this.inner_1.equals(tmp0_other_with_cast.inner_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  Companion_1.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.NestedTestData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('outer', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_1.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_1.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [$serializer_getInstance_0()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_1.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, $serializer_getInstance_0(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return NestedTestData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_1.prototype.serialize_tkv55y_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, $serializer_getInstance_0(), value.outer_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_1.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_tkv55y_k$(encoder, value instanceof NestedTestData ? value : THROW_CCE());
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function NestedTestData_init_$Init$(seen1, outer, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_1().descriptor_1);
    }
    $this.outer_1 = outer;
    return $this;
  }
  function NestedTestData_init_$Create$(seen1, outer, serializationConstructorMarker) {
    return NestedTestData_init_$Init$(seen1, outer, serializationConstructorMarker, Object.create(NestedTestData.prototype));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  Companion_2.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_2();
  };
  var Companion_instance_2;
  function Companion_getInstance_7() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.TestByteData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('byte', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_2.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_2.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [ByteSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_2.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeByteElement_76b0gq_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeByteElement_76b0gq_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestByteData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_2.prototype.serialize_74oy6h_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeByteElement_r2fm3n_k$(tmp0_desc, 0, value.byte_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_2.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_74oy6h_k$(encoder, value instanceof TestByteData ? value : THROW_CCE());
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function TestByteData_init_$Init$(seen1, byte, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_2().descriptor_1);
    }
    $this.byte_1 = byte;
    return $this;
  }
  function TestByteData_init_$Create$(seen1, byte, serializationConstructorMarker) {
    return TestByteData_init_$Init$(seen1, byte, serializationConstructorMarker, Object.create(TestByteData.prototype));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  Companion_3.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_3();
  };
  var Companion_instance_3;
  function Companion_getInstance_8() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.TestBooleanData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('bool', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_3.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_3.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [BooleanSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_3.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = false;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeBooleanElement_3vswy_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeBooleanElement_3vswy_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestBooleanData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_3.prototype.serialize_oatduz_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeBooleanElement_2l5aov_k$(tmp0_desc, 0, value.bool_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_3.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_oatduz_k$(encoder, value instanceof TestBooleanData ? value : THROW_CCE());
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function TestBooleanData_init_$Init$(seen1, bool, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_3().descriptor_1);
    }
    $this.bool_1 = bool;
    return $this;
  }
  function TestBooleanData_init_$Create$(seen1, bool, serializationConstructorMarker) {
    return TestBooleanData_init_$Init$(seen1, bool, serializationConstructorMarker, Object.create(TestBooleanData.prototype));
  }
  function Companion_4() {
    Companion_instance_4 = this;
  }
  Companion_4.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_4();
  };
  var Companion_instance_4;
  function Companion_getInstance_9() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.TestStringData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('key', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_4.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_4.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_4.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestStringData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_4.prototype.serialize_u9jb4_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.key_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_4.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_u9jb4_k$(encoder, value instanceof TestStringData ? value : THROW_CCE());
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function TestStringData_init_$Init$(seen1, key, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_4().descriptor_1);
    }
    $this.key_1 = key;
    return $this;
  }
  function TestStringData_init_$Create$(seen1, key, serializationConstructorMarker) {
    return TestStringData_init_$Init$(seen1, key, serializationConstructorMarker, Object.create(TestStringData.prototype));
  }
  function Companion_5() {
    Companion_instance_5 = this;
  }
  Companion_5.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_5;
  function Companion_getInstance_10() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.TestIntListData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('list', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_5.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_5.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new ArrayListSerializer(IntSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_5.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ArrayListSerializer(IntSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ArrayListSerializer(IntSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestIntListData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_5.prototype.serialize_7d3swg_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, new ArrayListSerializer(IntSerializer_getInstance()), value.list_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_5.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_7d3swg_k$(encoder, value instanceof TestIntListData ? value : THROW_CCE());
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function TestIntListData_init_$Init$(seen1, list, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_5().descriptor_1);
    }
    $this.list_1 = list;
    return $this;
  }
  function TestIntListData_init_$Create$(seen1, list, serializationConstructorMarker) {
    return TestIntListData_init_$Init$(seen1, list, serializationConstructorMarker, Object.create(TestIntListData.prototype));
  }
  function Companion_6() {
    Companion_instance_6 = this;
  }
  Companion_6.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_6;
  function Companion_getInstance_11() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.TestStringMapData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('map', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_6.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_6.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_6.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestStringMapData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_6.prototype.serialize_do2cb2_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, new LinkedHashMapSerializer(StringSerializer_getInstance(), StringSerializer_getInstance()), value.map_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_6.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_do2cb2_k$(encoder, value instanceof TestStringMapData ? value : THROW_CCE());
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function TestStringMapData_init_$Init$(seen1, map, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_6().descriptor_1);
    }
    $this.map_1 = map;
    return $this;
  }
  function TestStringMapData_init_$Create$(seen1, map, serializationConstructorMarker) {
    return TestStringMapData_init_$Init$(seen1, map, serializationConstructorMarker, Object.create(TestStringMapData.prototype));
  }
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_7();
  };
  var Companion_instance_7;
  function Companion_getInstance_12() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.TestStringListData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('list', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_7.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_7.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new ArrayListSerializer(StringSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_7.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ArrayListSerializer(StringSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ArrayListSerializer(StringSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestStringListData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_7.prototype.serialize_5nkyf2_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, new ArrayListSerializer(StringSerializer_getInstance()), value.list_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_7.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_5nkyf2_k$(encoder, value instanceof TestStringListData ? value : THROW_CCE());
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function TestStringListData_init_$Init$(seen1, list, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_7().descriptor_1);
    }
    $this.list_1 = list;
    return $this;
  }
  function TestStringListData_init_$Create$(seen1, list, serializationConstructorMarker) {
    return TestStringListData_init_$Init$(seen1, list, serializationConstructorMarker, Object.create(TestStringListData.prototype));
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  Companion_8.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_8;
  function Companion_getInstance_13() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.DecoderTest.TestPrimitiveTypesData', this, 11);
    tmp0_serialDesc.addElement_ifop3j_k$('negative', false);
    tmp0_serialDesc.addElement_ifop3j_k$('int', false);
    tmp0_serialDesc.addElement_ifop3j_k$('short', false);
    tmp0_serialDesc.addElement_ifop3j_k$('byte', false);
    tmp0_serialDesc.addElement_ifop3j_k$('long', false);
    tmp0_serialDesc.addElement_ifop3j_k$('boolean', false);
    tmp0_serialDesc.addElement_ifop3j_k$('float', false);
    tmp0_serialDesc.addElement_ifop3j_k$('double', false);
    tmp0_serialDesc.addElement_ifop3j_k$('char', false);
    tmp0_serialDesc.addElement_ifop3j_k$('string', false);
    tmp0_serialDesc.addElement_ifop3j_k$('quotedString', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_8.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_8.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), IntSerializer_getInstance(), ShortSerializer_getInstance(), ByteSerializer_getInstance(), LongSerializer_getInstance(), BooleanSerializer_getInstance(), FloatSerializer_getInstance(), DoubleSerializer_getInstance(), CharSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_8.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_local4 = new Long(0, 0);
    var tmp9_local5 = false;
    var tmp10_local6 = 0.0;
    var tmp11_local7 = 0.0;
    var tmp12_local8 = _Char___init__impl__6a9atx(0);
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp15_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp15_input.decodeIntElement_cmpvet_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.decodeIntElement_cmpvet_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.decodeShortElement_zjkfm_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.decodeByteElement_76b0gq_k$(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.decodeLongElement_kyznym_k$(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.decodeBooleanElement_3vswy_k$(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.decodeFloatElement_nl5jiq_k$(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.decodeDoubleElement_42w6gz_k$(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.decodeCharElement_pg5vs7_k$(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.decodeStringElement_4is7ib_k$(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.decodeStringElement_4is7ib_k$(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.decodeIntElement_cmpvet_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.decodeIntElement_cmpvet_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.decodeShortElement_zjkfm_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.decodeByteElement_76b0gq_k$(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.decodeLongElement_kyznym_k$(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.decodeBooleanElement_3vswy_k$(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.decodeFloatElement_nl5jiq_k$(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.decodeDoubleElement_42w6gz_k$(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.decodeCharElement_pg5vs7_k$(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.decodeStringElement_4is7ib_k$(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.decodeStringElement_4is7ib_k$(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestPrimitiveTypesData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  $serializer_8.prototype.serialize_af57b5_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeIntElement_utywpf_k$(tmp0_desc, 0, value.negative_1);
    tmp1_output.encodeIntElement_utywpf_k$(tmp0_desc, 1, value.int_1);
    tmp1_output.encodeShortElement_2nnlvd_k$(tmp0_desc, 2, value.short_1);
    tmp1_output.encodeByteElement_r2fm3n_k$(tmp0_desc, 3, value.byte_1);
    tmp1_output.encodeLongElement_xtv8il_k$(tmp0_desc, 4, value.long_1);
    tmp1_output.encodeBooleanElement_2l5aov_k$(tmp0_desc, 5, value.boolean_1);
    tmp1_output.encodeFloatElement_o97mfb_k$(tmp0_desc, 6, value.float_1);
    tmp1_output.encodeDoubleElement_m8xcw3_k$(tmp0_desc, 7, value.double_1);
    tmp1_output.encodeCharElement_4fawdf_k$(tmp0_desc, 8, value.char_1);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 9, value.string_1);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 10, value.quotedString_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_8.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_af57b5_k$(encoder, value instanceof TestPrimitiveTypesData ? value : THROW_CCE());
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function TestPrimitiveTypesData_init_$Init$(seen1, negative, int, short, byte, long, boolean, float, double, char, string, quotedString, serializationConstructorMarker, $this) {
    if (!(2047 === (2047 & seen1))) {
      throwMissingFieldException(seen1, 2047, $serializer_getInstance_8().descriptor_1);
    }
    $this.negative_1 = negative;
    $this.int_1 = int;
    $this.short_1 = short;
    $this.byte_1 = byte;
    $this.long_1 = long;
    $this.boolean_1 = boolean;
    $this.float_1 = float;
    $this.double_1 = double;
    $this.char_1 = char;
    $this.string_1 = string;
    $this.quotedString_1 = quotedString;
    return $this;
  }
  function TestPrimitiveTypesData_init_$Create$(seen1, negative, int, short, byte, long, boolean, float, double, char, string, quotedString, serializationConstructorMarker) {
    return TestPrimitiveTypesData_init_$Init$(seen1, negative, int, short, byte, long, boolean, float, double, char, string, quotedString, serializationConstructorMarker, Object.create(TestPrimitiveTypesData.prototype));
  }
  function _get_default__p7r30w($this) {
    return $this.default_1;
  }
  function _get_nonStrictNullability__8ylc02($this) {
    return $this.nonStrictNullability_1;
  }
  function _get_nonStrictNumber__8sgahe($this) {
    return $this.nonStrictNumber_1;
  }
  function NestedTestData(outer) {
    Companion_getInstance_6();
    this.outer_1 = outer;
  }
  NestedTestData.prototype.get_outer_iwjrki_k$ = function () {
    return this.outer_1;
  };
  NestedTestData.prototype.component1_7eebsc_k$ = function () {
    return this.outer_1;
  };
  NestedTestData.prototype.copy_lqq3hl_k$ = function (outer) {
    return new NestedTestData(outer);
  };
  NestedTestData.prototype.copy$default_4b8av7_k$ = function (outer, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      outer = this.outer_1;
    return this.copy_lqq3hl_k$(outer);
  };
  NestedTestData.prototype.toString = function () {
    return 'NestedTestData(outer=' + this.outer_1 + ')';
  };
  NestedTestData.prototype.hashCode = function () {
    return this.outer_1.hashCode();
  };
  NestedTestData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof NestedTestData))
      return false;
    var tmp0_other_with_cast = other instanceof NestedTestData ? other : THROW_CCE();
    if (!this.outer_1.equals(tmp0_other_with_cast.outer_1))
      return false;
    return true;
  };
  function TestByteData(byte) {
    Companion_getInstance_7();
    this.byte_1 = byte;
  }
  TestByteData.prototype.get_byte_wojsr5_k$ = function () {
    return this.byte_1;
  };
  TestByteData.prototype.component1_7eebsc_k$ = function () {
    return this.byte_1;
  };
  TestByteData.prototype.copy_ec20q3_k$ = function (byte) {
    return new TestByteData(byte);
  };
  TestByteData.prototype.copy$default_rqzlja_k$ = function (byte, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      byte = this.byte_1;
    return this.copy_ec20q3_k$(byte);
  };
  TestByteData.prototype.toString = function () {
    return 'TestByteData(byte=' + this.byte_1 + ')';
  };
  TestByteData.prototype.hashCode = function () {
    return this.byte_1;
  };
  TestByteData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestByteData))
      return false;
    var tmp0_other_with_cast = other instanceof TestByteData ? other : THROW_CCE();
    if (!(this.byte_1 === tmp0_other_with_cast.byte_1))
      return false;
    return true;
  };
  function TestBooleanData(bool) {
    Companion_getInstance_8();
    this.bool_1 = bool;
  }
  TestBooleanData.prototype.get_bool_wojl83_k$ = function () {
    return this.bool_1;
  };
  TestBooleanData.prototype.component1_7eebsc_k$ = function () {
    return this.bool_1;
  };
  TestBooleanData.prototype.copy_85j4f9_k$ = function (bool) {
    return new TestBooleanData(bool);
  };
  TestBooleanData.prototype.copy$default_xbav8a_k$ = function (bool, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      bool = this.bool_1;
    return this.copy_85j4f9_k$(bool);
  };
  TestBooleanData.prototype.toString = function () {
    return 'TestBooleanData(bool=' + this.bool_1 + ')';
  };
  TestBooleanData.prototype.hashCode = function () {
    return this.bool_1 | 0;
  };
  TestBooleanData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestBooleanData))
      return false;
    var tmp0_other_with_cast = other instanceof TestBooleanData ? other : THROW_CCE();
    if (!(this.bool_1 === tmp0_other_with_cast.bool_1))
      return false;
    return true;
  };
  function TestStringData(key) {
    Companion_getInstance_9();
    this.key_1 = key;
  }
  TestStringData.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  TestStringData.prototype.component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  TestStringData.prototype.copy_3t26ic_k$ = function (key) {
    return new TestStringData(key);
  };
  TestStringData.prototype.copy$default_q3pzg4_k$ = function (key, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this.key_1;
    return this.copy_3t26ic_k$(key);
  };
  TestStringData.prototype.toString = function () {
    return 'TestStringData(key=' + this.key_1 + ')';
  };
  TestStringData.prototype.hashCode = function () {
    return getStringHashCode(this.key_1);
  };
  TestStringData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestStringData))
      return false;
    var tmp0_other_with_cast = other instanceof TestStringData ? other : THROW_CCE();
    if (!(this.key_1 === tmp0_other_with_cast.key_1))
      return false;
    return true;
  };
  function TestIntListData(list) {
    Companion_getInstance_10();
    this.list_1 = list;
  }
  TestIntListData.prototype.get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  TestIntListData.prototype.component1_7eebsc_k$ = function () {
    return this.list_1;
  };
  TestIntListData.prototype.copy_h9j596_k$ = function (list) {
    return new TestIntListData(list);
  };
  TestIntListData.prototype.copy$default_813ckm_k$ = function (list, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      list = this.list_1;
    return this.copy_h9j596_k$(list);
  };
  TestIntListData.prototype.toString = function () {
    return 'TestIntListData(list=' + this.list_1 + ')';
  };
  TestIntListData.prototype.hashCode = function () {
    return hashCode(this.list_1);
  };
  TestIntListData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestIntListData))
      return false;
    var tmp0_other_with_cast = other instanceof TestIntListData ? other : THROW_CCE();
    if (!equals(this.list_1, tmp0_other_with_cast.list_1))
      return false;
    return true;
  };
  function TestStringMapData(map) {
    Companion_getInstance_11();
    this.map_1 = map;
  }
  TestStringMapData.prototype.get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  TestStringMapData.prototype.component1_7eebsc_k$ = function () {
    return this.map_1;
  };
  TestStringMapData.prototype.copy_j91n4m_k$ = function (map) {
    return new TestStringMapData(map);
  };
  TestStringMapData.prototype.copy$default_afo4ms_k$ = function (map, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      map = this.map_1;
    return this.copy_j91n4m_k$(map);
  };
  TestStringMapData.prototype.toString = function () {
    return 'TestStringMapData(map=' + this.map_1 + ')';
  };
  TestStringMapData.prototype.hashCode = function () {
    return hashCode(this.map_1);
  };
  TestStringMapData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestStringMapData))
      return false;
    var tmp0_other_with_cast = other instanceof TestStringMapData ? other : THROW_CCE();
    if (!equals(this.map_1, tmp0_other_with_cast.map_1))
      return false;
    return true;
  };
  function TestStringListData(list) {
    Companion_getInstance_12();
    this.list_1 = list;
  }
  TestStringListData.prototype.get_list_wopuqv_k$ = function () {
    return this.list_1;
  };
  TestStringListData.prototype.component1_7eebsc_k$ = function () {
    return this.list_1;
  };
  TestStringListData.prototype.copy_7lypfm_k$ = function (list) {
    return new TestStringListData(list);
  };
  TestStringListData.prototype.copy$default_ns4pou_k$ = function (list, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      list = this.list_1;
    return this.copy_7lypfm_k$(list);
  };
  TestStringListData.prototype.toString = function () {
    return 'TestStringListData(list=' + this.list_1 + ')';
  };
  TestStringListData.prototype.hashCode = function () {
    return hashCode(this.list_1);
  };
  TestStringListData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestStringListData))
      return false;
    var tmp0_other_with_cast = other instanceof TestStringListData ? other : THROW_CCE();
    if (!equals(this.list_1, tmp0_other_with_cast.list_1))
      return false;
    return true;
  };
  function TestPrimitiveTypesData(negative, int, short, byte, long, boolean, float, double, char, string, quotedString) {
    Companion_getInstance_13();
    this.negative_1 = negative;
    this.int_1 = int;
    this.short_1 = short;
    this.byte_1 = byte;
    this.long_1 = long;
    this.boolean_1 = boolean;
    this.float_1 = float;
    this.double_1 = double;
    this.char_1 = char;
    this.string_1 = string;
    this.quotedString_1 = quotedString;
  }
  TestPrimitiveTypesData.prototype.get_negative_gkj4ea_k$ = function () {
    return this.negative_1;
  };
  TestPrimitiveTypesData.prototype.get_int_18j3i2_k$ = function () {
    return this.int_1;
  };
  TestPrimitiveTypesData.prototype.get_short_iyijpv_k$ = function () {
    return this.short_1;
  };
  TestPrimitiveTypesData.prototype.get_byte_wojsr5_k$ = function () {
    return this.byte_1;
  };
  TestPrimitiveTypesData.prototype.get_long_wopz2d_k$ = function () {
    return this.long_1;
  };
  TestPrimitiveTypesData.prototype.get_boolean_2c2xxb_k$ = function () {
    return this.boolean_1;
  };
  TestPrimitiveTypesData.prototype.get_float_irfrjn_k$ = function () {
    return this.float_1;
  };
  TestPrimitiveTypesData.prototype.get_double_chc9ne_k$ = function () {
    return this.double_1;
  };
  TestPrimitiveTypesData.prototype.get_char_tqtb1c_k$ = function () {
    return this.char_1;
  };
  TestPrimitiveTypesData.prototype.get_string_jnpst6_k$ = function () {
    return this.string_1;
  };
  TestPrimitiveTypesData.prototype.get_quotedString_bbw5cu_k$ = function () {
    return this.quotedString_1;
  };
  TestPrimitiveTypesData.prototype.component1_7eebsc_k$ = function () {
    return this.negative_1;
  };
  TestPrimitiveTypesData.prototype.component2_7eebsb_k$ = function () {
    return this.int_1;
  };
  TestPrimitiveTypesData.prototype.component3_7eebsa_k$ = function () {
    return this.short_1;
  };
  TestPrimitiveTypesData.prototype.component4_7eebs9_k$ = function () {
    return this.byte_1;
  };
  TestPrimitiveTypesData.prototype.component5_7eebs8_k$ = function () {
    return this.long_1;
  };
  TestPrimitiveTypesData.prototype.component6_7eebs7_k$ = function () {
    return this.boolean_1;
  };
  TestPrimitiveTypesData.prototype.component7_7eebs6_k$ = function () {
    return this.float_1;
  };
  TestPrimitiveTypesData.prototype.component8_7eebs5_k$ = function () {
    return this.double_1;
  };
  TestPrimitiveTypesData.prototype.component9_641uw3_k$ = function () {
    return this.char_1;
  };
  TestPrimitiveTypesData.prototype.component10_gazzfo_k$ = function () {
    return this.string_1;
  };
  TestPrimitiveTypesData.prototype.component11_gazzfn_k$ = function () {
    return this.quotedString_1;
  };
  TestPrimitiveTypesData.prototype.copy_ehncha_k$ = function (negative, int, short, byte, long, boolean, float, double, char, string, quotedString) {
    return new TestPrimitiveTypesData(negative, int, short, byte, long, boolean, float, double, char, string, quotedString);
  };
  TestPrimitiveTypesData.prototype.copy$default_bj3qs1_k$ = function (negative, int, short, byte, long, boolean, float, double, char, string, quotedString, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      negative = this.negative_1;
    if (!(($mask0 & 2) === 0))
      int = this.int_1;
    if (!(($mask0 & 4) === 0))
      short = this.short_1;
    if (!(($mask0 & 8) === 0))
      byte = this.byte_1;
    if (!(($mask0 & 16) === 0))
      long = this.long_1;
    if (!(($mask0 & 32) === 0))
      boolean = this.boolean_1;
    if (!(($mask0 & 64) === 0))
      float = this.float_1;
    if (!(($mask0 & 128) === 0))
      double = this.double_1;
    if (!(($mask0 & 256) === 0))
      char = this.char_1;
    if (!(($mask0 & 512) === 0))
      string = this.string_1;
    if (!(($mask0 & 1024) === 0))
      quotedString = this.quotedString_1;
    return this.copy_ehncha_k$(negative, int, short, byte, long, boolean, float, double, char, string, quotedString);
  };
  TestPrimitiveTypesData.prototype.toString = function () {
    return 'TestPrimitiveTypesData(negative=' + this.negative_1 + ', int=' + this.int_1 + ', short=' + this.short_1 + ', byte=' + this.byte_1 + ', long=' + toString(this.long_1) + ', boolean=' + this.boolean_1 + ', float=' + this.float_1 + ', double=' + this.double_1 + ', char=' + new Char(this.char_1) + ', string=' + this.string_1 + ', quotedString=' + this.quotedString_1 + ')';
  };
  TestPrimitiveTypesData.prototype.hashCode = function () {
    var result = this.negative_1;
    result = imul(result, 31) + this.int_1 | 0;
    result = imul(result, 31) + this.short_1 | 0;
    result = imul(result, 31) + this.byte_1 | 0;
    result = imul(result, 31) + this.long_1.hashCode() | 0;
    result = imul(result, 31) + (this.boolean_1 | 0) | 0;
    result = imul(result, 31) + getNumberHashCode(this.float_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.double_1) | 0;
    result = imul(result, 31) + Char__hashCode_impl_otmys(this.char_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.string_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.quotedString_1) | 0;
    return result;
  };
  TestPrimitiveTypesData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestPrimitiveTypesData))
      return false;
    var tmp0_other_with_cast = other instanceof TestPrimitiveTypesData ? other : THROW_CCE();
    if (!(this.negative_1 === tmp0_other_with_cast.negative_1))
      return false;
    if (!(this.int_1 === tmp0_other_with_cast.int_1))
      return false;
    if (!(this.short_1 === tmp0_other_with_cast.short_1))
      return false;
    if (!(this.byte_1 === tmp0_other_with_cast.byte_1))
      return false;
    if (!this.long_1.equals(tmp0_other_with_cast.long_1))
      return false;
    if (!(this.boolean_1 === tmp0_other_with_cast.boolean_1))
      return false;
    if (!equals(this.float_1, tmp0_other_with_cast.float_1))
      return false;
    if (!equals(this.double_1, tmp0_other_with_cast.double_1))
      return false;
    if (!equals(new Char(this.char_1), new Char(tmp0_other_with_cast.char_1)))
      return false;
    if (!(this.string_1 === tmp0_other_with_cast.string_1))
      return false;
    if (!(this.quotedString_1 === tmp0_other_with_cast.quotedString_1))
      return false;
    return true;
  };
  function testBooleanCasting$testBoolean(_this__u8e3s4, expect, string) {
    var indexedObject = string;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'net.mamoe.yamlkt.DecoderTest.testBooleanCasting.testBoolean.<anonymous>' call
      var tmp$ret$2;
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        var tmp$ret$0;
        // Inline function 'kotlin.Companion.success' call
        var tmp0_success = Companion_getInstance_0();
        var tmp_0 = new TestBooleanData(expect);
        var tmp_1 = _this__u8e3s4.decodeFromString_d9fce8_k$(Companion_getInstance_8().serializer_9w0wvi_k$(), 'bool: ' + element);
        assertEquals$default(tmp_0, tmp_1, null, 4, null);
        var tmp1_success = Unit_getInstance();
        tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
        tmp = tmp$ret$0;
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var tmp$ret$1;
          // Inline function 'kotlin.Companion.failure' call
          var tmp2_failure = Companion_getInstance_0();
          tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
          tmp_2 = tmp$ret$1;
        } else {
          throw $p;
        }
        tmp = tmp_2;
      }
      tmp$ret$2 = tmp;
      var tmp0_safe_receiver = Result__exceptionOrNull_impl_p6xea9(tmp$ret$2);
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$3;
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        throw IllegalStateException_init_$Create$('error when testing ' + element, tmp0_safe_receiver);
      }
    }
    return Unit_getInstance();
  }
  function DecoderTest$nonStrictNullability$lambda($this$Yaml) {
    $this$Yaml.set_nonStrictNullability_o6gsfz_k$(true);
    return Unit_getInstance();
  }
  function DecoderTest$nonStrictNumber$lambda($this$Yaml) {
    $this$Yaml.set_nonStrictNumber_j5lwt5_k$(true);
    return Unit_getInstance();
  }
  function DecoderTest$testNonStrictNumberCasting$lambda($this$Yaml) {
    $this$Yaml.set_nonStrictNumber_j5lwt5_k$(true);
    return Unit_getInstance();
  }
  function DecoderTest$testNonStrictNumberCasting$lambda_0($this$Yaml) {
    $this$Yaml.set_nonStrictNumber_j5lwt5_k$(false);
    return Unit_getInstance();
  }
  function DecoderTest$testNonStrictNullCasting$lambda($this$Yaml) {
    $this$Yaml.set_nonStrictNullability_o6gsfz_k$(true);
    return Unit_getInstance();
  }
  function DecoderTest() {
    var tmp = this;
    tmp.default_1 = Yaml$default(null, null, 3, null);
    var tmp_0 = this;
    tmp_0.nonStrictNullability_1 = Yaml$default(null, DecoderTest$nonStrictNullability$lambda, 1, null);
    var tmp_1 = this;
    tmp_1.nonStrictNumber_1 = Yaml$default(null, DecoderTest$nonStrictNumber$lambda, 1, null);
  }
  DecoderTest.prototype.testNested_n5cieg_k$ = function () {
    var tmp = new NestedTestData(new Outer(new Inner(mapOf(to('foo', 'bar')))));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_6().serializer_9w0wvi_k$(), 'outer: \n  inner:\n    map: \n      foo: bar');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DecoderTest.prototype.testNonStrictNumberCasting_yr8ji3_k$ = function () {
    var nonStrict = Yaml$default(null, DecoderTest$testNonStrictNumberCasting$lambda, 1, null);
    var tmp = new TestByteData(123);
    var tmp_0 = nonStrict.decodeFromString_d9fce8_k$(Companion_getInstance_7().serializer_9w0wvi_k$(), 'byte: 123.8');
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = new TestByteData(123);
    var tmp_2 = nonStrict.decodeFromString_d9fce8_k$(Companion_getInstance_7().serializer_9w0wvi_k$(), 'byte: 123.0');
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
    var strict = Yaml$default(null, DecoderTest$testNonStrictNumberCasting$lambda_0, 1, null);
    var tmp$ret$3;
    // Inline function 'kotlin.test.assertFails' call
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp_3;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      strict.decodeFromString_d9fce8_k$(Companion_getInstance_7().serializer_9w0wvi_k$(), 'byte: 123.0');
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_3 = tmp$ret$0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_4 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    tmp$ret$2 = tmp_3;
    tmp$ret$3 = checkResultIsFailure_0(null, tmp$ret$2);
  };
  DecoderTest.prototype.testNonStrictNullCasting_9uuvyf_k$ = function () {
    var yaml = Yaml$default(null, DecoderTest$testNonStrictNullCasting$lambda, 1, null);
    var tmp = new TestByteData(0);
    var tmp_0 = yaml.decodeFromString_d9fce8_k$(Companion_getInstance_7().serializer_9w0wvi_k$(), 'byte: null');
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = new TestByteData(123);
    var tmp_2 = this.nonStrictNumber_1.decodeFromString_d9fce8_k$(Companion_getInstance_7().serializer_9w0wvi_k$(), 'byte: 123.0');
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
  };
  DecoderTest.prototype.testBooleanCasting_ofosh0_k$ = function () {
    testBooleanCasting$testBoolean(this.default_1, true, ['true', '1', 'TRUE']);
    testBooleanCasting$testBoolean(this.default_1, false, ['false', '0', 'FALSE']);
    var tmp$ret$3;
    // Inline function 'kotlin.test.assertFails' call
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      testBooleanCasting$testBoolean(this.default_1, true, ['1.0']);
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = checkResultIsFailure_0(null, tmp$ret$2);
    testBooleanCasting$testBoolean(this.nonStrictNumber_1, true, ['1.0', '1.000000000']);
    testBooleanCasting$testBoolean(this.nonStrictNumber_1, false, ['0.0', '-0.0']);
    testBooleanCasting$testBoolean(this.nonStrictNullability_1, false, ['~', 'null', 'nUll']);
  };
  DecoderTest.prototype.testSimpleClass_hz0bbx_k$ = function () {
    var tmp = new TestStringData('value');
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_9().serializer_9w0wvi_k$(), 'key: value');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DecoderTest.prototype.testSimpleMultilineList_wftkba_k$ = function () {
    var tmp = new TestIntListData(listOf([1, 2, 3]));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_10().serializer_9w0wvi_k$(), 'list:\n- 1\n- 2\n- 3');
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = new TestIntListData(listOf([1, 2, 3]));
    var tmp_2 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_10().serializer_9w0wvi_k$(), 'list:\n  - 1\n  - 2\n  - 3');
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
  };
  DecoderTest.prototype.testJsonMap_q2fggh_k$ = function () {
    var tmp = new TestStringMapData(mapOf_0([to('foo', 'bar'), to('test', 'ok')]));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_11().serializer_9w0wvi_k$(), 'map: {foo: bar, test: ok}');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DecoderTest.prototype.testYamlMap_ooxb76_k$ = function () {
    var tmp = new TestStringMapData(mapOf_0([to('foo', 'bar'), to('test', 'ok')]));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_11().serializer_9w0wvi_k$(), 'map: \n  foo: bar\n  test: ok');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DecoderTest.prototype.testSquareList_usg3zw_k$ = function () {
    var tmp = new TestStringListData(listOf(['foo', 'bar']));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_12().serializer_9w0wvi_k$(), 'list: [foo, bar]');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DecoderTest.prototype.testSimpleStructure_fk9h9a_k$ = function () {
    var tmp = new TestPrimitiveTypesData(-1, 123, 123, 123, new Long(123, 0), true, 123.0, 123.0, _Char___init__impl__6a9atx(115), 'string', '123');
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_13().serializer_9w0wvi_k$(), 'negative: -1\nint: 123\nshort: 123\nbyte: 123\nlong: 123\nboolean: true\nfloat: 123\ndouble: 123\nchar: s\nstring: string\nquotedString: 123');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  function test_fun_izoufj_1() {
    suite('DecoderTest', false, test_fun$DecoderTest_test_fun_mukysy);
  }
  function test_fun$DecoderTest_test_fun_mukysy() {
    test('testNested', false, test_fun$DecoderTest_test_fun$testNested_test_fun_vkb0zy);
    test('testNonStrictNumberCasting', false, test_fun$DecoderTest_test_fun$testNonStrictNumberCasting_test_fun_irghut);
    test('testNonStrictNullCasting', false, test_fun$DecoderTest_test_fun$testNonStrictNullCasting_test_fun_q9safx);
    test('testBooleanCasting', false, test_fun$DecoderTest_test_fun$testBooleanCasting_test_fun_lli9ua);
    test('testSimpleClass', false, test_fun$DecoderTest_test_fun$testSimpleClass_test_fun_7swea5);
    test('testSimpleMultilineList', false, test_fun$DecoderTest_test_fun$testSimpleMultilineList_test_fun_682wm8);
    test('testJsonMap', false, test_fun$DecoderTest_test_fun$testJsonMap_test_fun_5hn3zv);
    test('testYamlMap', false, test_fun$DecoderTest_test_fun$testYamlMap_test_fun_dr7dc4);
    test('testSquareList', false, test_fun$DecoderTest_test_fun$testSquareList_test_fun_jeiz02);
    test('testSimpleStructure', false, test_fun$DecoderTest_test_fun$testSimpleStructure_test_fun_6lg2qw);
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testNested_test_fun_vkb0zy() {
    var tmp = new DecoderTest();
    tmp.testNested_n5cieg_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testNonStrictNumberCasting_test_fun_irghut() {
    var tmp = new DecoderTest();
    tmp.testNonStrictNumberCasting_yr8ji3_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testNonStrictNullCasting_test_fun_q9safx() {
    var tmp = new DecoderTest();
    tmp.testNonStrictNullCasting_9uuvyf_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testBooleanCasting_test_fun_lli9ua() {
    var tmp = new DecoderTest();
    tmp.testBooleanCasting_ofosh0_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testSimpleClass_test_fun_7swea5() {
    var tmp = new DecoderTest();
    tmp.testSimpleClass_hz0bbx_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testSimpleMultilineList_test_fun_682wm8() {
    var tmp = new DecoderTest();
    tmp.testSimpleMultilineList_wftkba_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testJsonMap_test_fun_5hn3zv() {
    var tmp = new DecoderTest();
    tmp.testJsonMap_q2fggh_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testYamlMap_test_fun_dr7dc4() {
    var tmp = new DecoderTest();
    tmp.testYamlMap_ooxb76_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testSquareList_test_fun_jeiz02() {
    var tmp = new DecoderTest();
    tmp.testSquareList_usg3zw_k$();
    return Unit_getInstance();
  }
  function test_fun$DecoderTest_test_fun$testSimpleStructure_test_fun_6lg2qw() {
    var tmp = new DecoderTest();
    tmp.testSimpleStructure_fk9h9a_k$();
    return Unit_getInstance();
  }
  function HexConverterTest() {
  }
  HexConverterTest.prototype.hexToLong_2vwn9b_k$ = function () {
    var tmp = new Long(0, 0);
    var tmp_0 = HexConverter_getInstance().hexToLong_stdpjk_k$('0x0', 2);
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = new Long(255, 0);
    var tmp_2 = HexConverter_getInstance().hexToLong_stdpjk_k$('0xFF', 2);
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
    var tmp_3 = new Long(-1, 0);
    var tmp_4 = HexConverter_getInstance().hexToLong_stdpjk_k$('0xFFFFFFFF', 2);
    assertEquals$default(tmp_3, tmp_4, null, 4, null);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, -1)));
    var tmp_5 = tmp$ret$0;
    var tmp_6 = HexConverter_getInstance().hexToLong_stdpjk_k$('0xFFFFFFFFFFFFFFFF', 2);
    assertEquals$default(tmp_5, tmp_6, null, 4, null);
    var tmp$ret$5;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith = getKClass(IllegalArgumentException);
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp_7;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      HexConverter_getInstance().hexToLong_stdpjk_k$('0x', 2);
      var tmp1_success = Unit_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_7 = tmp$ret$1;
    } catch ($p) {
      var tmp_8;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_8 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp_7 = tmp_8;
    }
    tmp$ret$3 = tmp_7;
    tmp$ret$4 = checkResultIsFailure(tmp3_assertFailsWith, null, tmp$ret$3);
    tmp$ret$5 = tmp$ret$4;
    var tmp$ret$10;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$9;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith_0 = getKClass(IllegalArgumentException);
    var tmp$ret$8;
    // Inline function 'kotlin.runCatching' call
    var tmp_9;
    try {
      var tmp$ret$6;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success_0 = Companion_getInstance_0();
      HexConverter_getInstance().hexToLong_stdpjk_k$('0x', 3);
      var tmp1_success_0 = Unit_getInstance();
      tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_9 = tmp$ret$6;
    } catch ($p) {
      var tmp_10;
      if ($p instanceof Error) {
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure_0 = Companion_getInstance_0();
        tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_10 = tmp$ret$7;
      } else {
        throw $p;
      }
      tmp_9 = tmp_10;
    }
    tmp$ret$8 = tmp_9;
    tmp$ret$9 = checkResultIsFailure(tmp3_assertFailsWith_0, null, tmp$ret$8);
    tmp$ret$10 = tmp$ret$9;
    var tmp$ret$15;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$14;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith_1 = getKClass(IllegalStateException);
    var tmp$ret$13;
    // Inline function 'kotlin.runCatching' call
    var tmp_11;
    try {
      var tmp$ret$11;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success_1 = Companion_getInstance_0();
      HexConverter_getInstance().hexToLong_stdpjk_k$('0xG', 2);
      var tmp1_success_1 = Unit_getInstance();
      tmp$ret$11 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_11 = tmp$ret$11;
    } catch ($p) {
      var tmp_12;
      if ($p instanceof Error) {
        var tmp$ret$12;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure_1 = Companion_getInstance_0();
        tmp$ret$12 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_12 = tmp$ret$12;
      } else {
        throw $p;
      }
      tmp_11 = tmp_12;
    }
    tmp$ret$13 = tmp_11;
    tmp$ret$14 = checkResultIsFailure(tmp3_assertFailsWith_1, null, tmp$ret$13);
    tmp$ret$15 = tmp$ret$14;
  };
  HexConverterTest.prototype.binToLong_726sib_k$ = function () {
    var tmp = new Long(0, 0);
    var tmp_0 = BinaryConverter_getInstance().binToLong_r0xlng_k$('0b0', 2);
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = new Long(1, 0);
    var tmp_2 = BinaryConverter_getInstance().binToLong_r0xlng_k$('0b1', 2);
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
    var tmp_3 = new Long(31, 0);
    var tmp_4 = BinaryConverter_getInstance().binToLong_r0xlng_k$('0b11111', 2);
    assertEquals$default(tmp_3, tmp_4, null, 4, null);
    var tmp$ret$0;
    // Inline function 'kotlin.ULong.toLong' call
    tmp$ret$0 = _ULong___get_data__impl__fggpzb(_ULong___init__impl__c78o9k(new Long(-1, -1)));
    var tmp_5 = tmp$ret$0;
    var tmp_6 = BinaryConverter_getInstance().binToLong_r0xlng_k$('0b1111111111111111111111111111111111111111111111111111111111111111', 2);
    assertEquals$default(tmp_5, tmp_6, null, 4, null);
    var tmp$ret$5;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith = getKClass(IllegalArgumentException);
    var tmp$ret$3;
    // Inline function 'kotlin.runCatching' call
    var tmp_7;
    try {
      var tmp$ret$1;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      BinaryConverter_getInstance().binToLong_r0xlng_k$('0b', 2);
      var tmp1_success = Unit_getInstance();
      tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_7 = tmp$ret$1;
    } catch ($p) {
      var tmp_8;
      if ($p instanceof Error) {
        var tmp$ret$2;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_8 = tmp$ret$2;
      } else {
        throw $p;
      }
      tmp_7 = tmp_8;
    }
    tmp$ret$3 = tmp_7;
    tmp$ret$4 = checkResultIsFailure(tmp3_assertFailsWith, null, tmp$ret$3);
    tmp$ret$5 = tmp$ret$4;
    var tmp$ret$10;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$9;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith_0 = getKClass(IllegalArgumentException);
    var tmp$ret$8;
    // Inline function 'kotlin.runCatching' call
    var tmp_9;
    try {
      var tmp$ret$6;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success_0 = Companion_getInstance_0();
      BinaryConverter_getInstance().binToLong_r0xlng_k$('0b', 3);
      var tmp1_success_0 = Unit_getInstance();
      tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_9 = tmp$ret$6;
    } catch ($p) {
      var tmp_10;
      if ($p instanceof Error) {
        var tmp$ret$7;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure_0 = Companion_getInstance_0();
        tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_10 = tmp$ret$7;
      } else {
        throw $p;
      }
      tmp_9 = tmp_10;
    }
    tmp$ret$8 = tmp_9;
    tmp$ret$9 = checkResultIsFailure(tmp3_assertFailsWith_0, null, tmp$ret$8);
    tmp$ret$10 = tmp$ret$9;
    var tmp$ret$15;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$14;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith_1 = getKClass(IllegalStateException);
    var tmp$ret$13;
    // Inline function 'kotlin.runCatching' call
    var tmp_11;
    try {
      var tmp$ret$11;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success_1 = Companion_getInstance_0();
      BinaryConverter_getInstance().binToLong_r0xlng_k$('0b12', 2);
      var tmp1_success_1 = Unit_getInstance();
      tmp$ret$11 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_11 = tmp$ret$11;
    } catch ($p) {
      var tmp_12;
      if ($p instanceof Error) {
        var tmp$ret$12;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure_1 = Companion_getInstance_0();
        tmp$ret$12 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_12 = tmp$ret$12;
      } else {
        throw $p;
      }
      tmp_11 = tmp_12;
    }
    tmp$ret$13 = tmp_11;
    tmp$ret$14 = checkResultIsFailure(tmp3_assertFailsWith_1, null, tmp$ret$13);
    tmp$ret$15 = tmp$ret$14;
  };
  function test_fun_izoufj_2() {
    suite('HexConverterTest', false, test_fun$HexConverterTest_test_fun_j8fy1l);
  }
  function test_fun$HexConverterTest_test_fun_j8fy1l() {
    test('hexToLong', false, test_fun$HexConverterTest_test_fun$hexToLong_test_fun_g8h84k);
    test('binToLong', false, test_fun$HexConverterTest_test_fun$binToLong_test_fun_rgnfm8);
    return Unit_getInstance();
  }
  function test_fun$HexConverterTest_test_fun$hexToLong_test_fun_g8h84k() {
    var tmp = new HexConverterTest();
    tmp.hexToLong_2vwn9b_k$();
    return Unit_getInstance();
  }
  function test_fun$HexConverterTest_test_fun$binToLong_test_fun_rgnfm8() {
    var tmp = new HexConverterTest();
    tmp.binToLong_726sib_k$();
    return Unit_getInstance();
  }
  function Companion_9() {
    Companion_instance_9 = this;
  }
  Companion_9.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_9;
  function Companion_getInstance_14() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.SimpleContainerForUInt', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('i', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_9.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_9.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [UIntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_9.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, UIntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, UIntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    var tmp = tmp3_bitMask0;
    var tmp_0 = tmp4_local0;
    return SimpleContainerForUInt_init_$Create$(tmp, tmp_0 == null ? null : tmp_0.data_1, null);
  };
  $serializer_9.prototype.serialize_1zcron_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, UIntSerializer_getInstance(), new UInt(value.i_1));
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_9.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_1zcron_k$(encoder, value instanceof SimpleContainerForUInt ? value : THROW_CCE());
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function SimpleContainerForUInt_init_$Init$(seen1, i, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_9().descriptor_1);
    }
    $this.i_1 = i;
    return $this;
  }
  function SimpleContainerForUInt_init_$Create$(seen1, i, serializationConstructorMarker) {
    return SimpleContainerForUInt_init_$Init$(seen1, i, serializationConstructorMarker, Object.create(SimpleContainerForUInt.prototype));
  }
  function SimpleContainerForUInt(i) {
    Companion_getInstance_14();
    this.i_1 = i;
  }
  SimpleContainerForUInt.prototype.get_i_j8tqn9_k$ = function () {
    return this.i_1;
  };
  SimpleContainerForUInt.prototype.component1_rxs6k9_k$ = function () {
    return this.i_1;
  };
  SimpleContainerForUInt.prototype.copy_ecd5r1_k$ = function (i) {
    return new SimpleContainerForUInt(i);
  };
  SimpleContainerForUInt.prototype.copy$default_pghmoz_k$ = function (i, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      i = this.i_1;
    return this.copy_ecd5r1_k$(i);
  };
  SimpleContainerForUInt.prototype.toString = function () {
    return 'SimpleContainerForUInt(i=' + new UInt(this.i_1) + ')';
  };
  SimpleContainerForUInt.prototype.hashCode = function () {
    return UInt__hashCode_impl_z2mhuw(this.i_1);
  };
  SimpleContainerForUInt.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SimpleContainerForUInt))
      return false;
    var tmp0_other_with_cast = other instanceof SimpleContainerForUInt ? other : THROW_CCE();
    if (!(this.i_1 === tmp0_other_with_cast.i_1))
      return false;
    return true;
  };
  function _MyUInt___init__impl__53xc1n(m) {
    return m;
  }
  function _MyUInt___get_m__impl__2hf76b($this) {
    return $this;
  }
  function Companion_10() {
    Companion_instance_10 = this;
  }
  Companion_10.prototype.serializer_9w0wvi_k$ = function () {
    return MyUIntSerializer_getInstance();
  };
  var Companion_instance_10;
  function Companion_getInstance_15() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function MyUInt__toString_impl_5yrfh7($this) {
    return 'MyUInt(m=' + $this + ')';
  }
  function MyUInt__hashCode_impl_fsehbo($this) {
    return $this;
  }
  function MyUInt__equals_impl_vybiw($this, other) {
    if (!(other instanceof MyUInt))
      return false;
    var tmp0_other_with_cast = other instanceof MyUInt ? other.m_1 : THROW_CCE();
    if (!($this === tmp0_other_with_cast))
      return false;
    return true;
  }
  function MyUInt(m) {
    Companion_getInstance_15();
    this.m_1 = m;
  }
  MyUInt.prototype.toString = function () {
    return MyUInt__toString_impl_5yrfh7(this.m_1);
  };
  MyUInt.prototype.hashCode = function () {
    return MyUInt__hashCode_impl_fsehbo(this.m_1);
  };
  MyUInt.prototype.equals = function (other) {
    return MyUInt__equals_impl_vybiw(this.m_1, other);
  };
  function MyUIntSerializer() {
    MyUIntSerializer_instance = this;
    this.descriptor_1 = serializer(Companion_getInstance()).get_descriptor_wjt6a0_k$();
  }
  MyUIntSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  MyUIntSerializer.prototype.serialize_oybkw7_k$ = function (encoder, value) {
    encoder.encodeInline_8gn4q6_k$(this.descriptor_1).encodeInt_5vxmon_k$(_MyUInt___get_m__impl__2hf76b(value));
  };
  MyUIntSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_oybkw7_k$(encoder, value instanceof MyUInt ? value.m_1 : THROW_CCE());
  };
  MyUIntSerializer.prototype.deserialize_f70lqo_k$ = function (decoder) {
    return _MyUInt___init__impl__53xc1n(decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeInt_8iq8f5_k$());
  };
  MyUIntSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new MyUInt(this.deserialize_f70lqo_k$(decoder));
  };
  var MyUIntSerializer_instance;
  function MyUIntSerializer_getInstance() {
    if (MyUIntSerializer_instance == null)
      new MyUIntSerializer();
    return MyUIntSerializer_instance;
  }
  function Companion_11() {
    Companion_instance_11 = this;
  }
  Companion_11.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_10();
  };
  var Companion_instance_11;
  function Companion_getInstance_16() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.SimpleContainerForMyType', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('i', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_10.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_10.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [MyUIntSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_10.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, MyUIntSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, MyUIntSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    var tmp = tmp3_bitMask0;
    var tmp_0 = tmp4_local0;
    return SimpleContainerForMyType_init_$Create$(tmp, tmp_0 == null ? null : tmp_0.m_1, null);
  };
  $serializer_10.prototype.serialize_vplsvn_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, MyUIntSerializer_getInstance(), new MyUInt(value.i_1));
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_10.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_vplsvn_k$(encoder, value instanceof SimpleContainerForMyType ? value : THROW_CCE());
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function SimpleContainerForMyType_init_$Init$(seen1, i, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_10().descriptor_1);
    }
    $this.i_1 = i;
    return $this;
  }
  function SimpleContainerForMyType_init_$Create$(seen1, i, serializationConstructorMarker) {
    return SimpleContainerForMyType_init_$Init$(seen1, i, serializationConstructorMarker, Object.create(SimpleContainerForMyType.prototype));
  }
  function SimpleContainerForMyType(i) {
    Companion_getInstance_16();
    this.i_1 = i;
  }
  SimpleContainerForMyType.prototype.get_i_lfgiku_k$ = function () {
    return this.i_1;
  };
  SimpleContainerForMyType.prototype.component1_cq5f5m_k$ = function () {
    return this.i_1;
  };
  SimpleContainerForMyType.prototype.copy_ze73u2_k$ = function (i) {
    return new SimpleContainerForMyType(i);
  };
  SimpleContainerForMyType.prototype.copy$default_t3k6hi_k$ = function (i, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      i = this.i_1;
    return this.copy_ze73u2_k$(i);
  };
  SimpleContainerForMyType.prototype.toString = function () {
    return 'SimpleContainerForMyType(i=' + new MyUInt(this.i_1) + ')';
  };
  SimpleContainerForMyType.prototype.hashCode = function () {
    return MyUInt__hashCode_impl_fsehbo(this.i_1);
  };
  SimpleContainerForMyType.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SimpleContainerForMyType))
      return false;
    var tmp0_other_with_cast = other instanceof SimpleContainerForMyType ? other : THROW_CCE();
    if (!(this.i_1 === tmp0_other_with_cast.i_1))
      return false;
    return true;
  };
  function _get_typeSerial0__3fdbgx($this) {
    return $this.typeSerial0__1;
  }
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer_11.call($this);
    $this.typeSerial0__1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, Object.create($serializer_11.prototype));
  }
  function _MyList___init__impl__z365ef(list) {
    return list;
  }
  function _MyList___get_list__impl__wiwo2s($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_12 = this;
  }
  Companion_12.prototype.serializer_idvbxl_k$ = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  Companion_12.prototype.serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_idvbxl_k$(typeParamsSerializers[0]);
  };
  var Companion_instance_12;
  function Companion_getInstance_17() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function $serializer_11() {
    var tmp0_serialDesc = new InlineClassDescriptor('net.mamoe.yamlkt.MyList', this);
    tmp0_serialDesc.addElement_ifop3j_k$('list', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_11.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_11.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new ArrayListSerializer(this.typeSerial0__1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_11.prototype.deserialize_xkycb6_k$ = function (decoder) {
    return _MyList___init__impl__z365ef(decoder.decodeInline_k1q7ba_k$(this.descriptor_1).decodeSerializableValue_6v83lo_k$(new ArrayListSerializer(this.typeSerial0__1)));
  };
  $serializer_11.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new MyList(this.deserialize_xkycb6_k$(decoder));
  };
  $serializer_11.prototype.serialize_51b693_k$ = function (encoder, value) {
    var tmp0_inlineEncoder = encoder.encodeInline_8gn4q6_k$(this.descriptor_1);
    if (tmp0_inlineEncoder == null)
      null;
    else {
      tmp0_inlineEncoder.encodeSerializableValue_g55msp_k$(new ArrayListSerializer(this.typeSerial0__1), _MyList___get_list__impl__wiwo2s(value));
    }
  };
  $serializer_11.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_51b693_k$(encoder, value instanceof MyList ? value.list_1 : THROW_CCE());
  };
  $serializer_11.prototype.typeParametersSerializers_fr94fx_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.typeSerial0__1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function MyList__toString_impl_mv5j($this) {
    return 'MyList(list=' + $this + ')';
  }
  function MyList__hashCode_impl_lqj1nc($this) {
    return hashCode($this);
  }
  function MyList__equals_impl_7b6kas($this, other) {
    if (!(other instanceof MyList))
      return false;
    var tmp0_other_with_cast = other instanceof MyList ? other.list_1 : THROW_CCE();
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function MyList(list) {
    Companion_getInstance_17();
    this.list_1 = list;
  }
  MyList.prototype.toString = function () {
    return MyList__toString_impl_mv5j(this.list_1);
  };
  MyList.prototype.hashCode = function () {
    return MyList__hashCode_impl_lqj1nc(this.list_1);
  };
  MyList.prototype.equals = function (other) {
    return MyList__equals_impl_7b6kas(this.list_1, other);
  };
  function _get_$cachedDescriptor__zglc2s($this) {
    return $this.$cachedDescriptor_1;
  }
  function _get_typeSerial0__3fdbgx_0($this) {
    return $this.typeSerial0__1;
  }
  function $serializer_init_$Init$_0(typeSerial0, $this) {
    $serializer_12.call($this);
    $this.typeSerial0__1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$_0(typeSerial0) {
    return $serializer_init_$Init$_0(typeSerial0, Object.create($serializer_12.prototype));
  }
  function Companion_13() {
    Companion_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.ContainerForList', null, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('i', false);
    Companion_getInstance_18().$cachedDescriptor_1 = tmp0_serialDesc;
  }
  Companion_13.prototype.serializer_idvbxl_k$ = function (typeSerial0) {
    return $serializer_init_$Create$_0(typeSerial0);
  };
  Companion_13.prototype.serializer_5xgt5t_k$ = function (typeParamsSerializers) {
    return this.serializer_idvbxl_k$(typeParamsSerializers[0]);
  };
  var Companion_instance_13;
  function Companion_getInstance_18() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function $serializer_12() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.ContainerForList', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('i', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_12.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_12.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [$serializer_init_$Create$(this.typeSerial0__1)];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_12.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, $serializer_init_$Create$(this.typeSerial0__1), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, $serializer_init_$Create$(this.typeSerial0__1), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    var tmp = tmp3_bitMask0;
    var tmp_0 = tmp4_local0;
    return ContainerForList_init_$Create$(tmp, tmp_0 == null ? null : tmp_0.list_1, null);
  };
  $serializer_12.prototype.serialize_2yiosr_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, $serializer_init_$Create$(this.typeSerial0__1), new MyList(value.i_1));
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_12.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_2yiosr_k$(encoder, value instanceof ContainerForList ? value : THROW_CCE());
  };
  $serializer_12.prototype.typeParametersSerializers_fr94fx_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [this.typeSerial0__1];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  function ContainerForList_init_$Init$(seen1, i, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, Companion_getInstance_18().$cachedDescriptor_1);
    }
    $this.i_1 = i;
    return $this;
  }
  function ContainerForList_init_$Create$(seen1, i, serializationConstructorMarker) {
    return ContainerForList_init_$Init$(seen1, i, serializationConstructorMarker, Object.create(ContainerForList.prototype));
  }
  function ContainerForList(i) {
    Companion_getInstance_18();
    this.i_1 = i;
  }
  ContainerForList.prototype.get_i_nmdjzk_k$ = function () {
    return this.i_1;
  };
  ContainerForList.prototype.component1_f70c1w_k$ = function () {
    return this.i_1;
  };
  ContainerForList.prototype.copy_54nnfc_k$ = function (i) {
    return new ContainerForList(i);
  };
  ContainerForList.prototype.copy$default_h7w70w_k$ = function (i, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      i = this.i_1;
    return this.copy_54nnfc_k$(i);
  };
  ContainerForList.prototype.toString = function () {
    return 'ContainerForList(i=' + new MyList(this.i_1) + ')';
  };
  ContainerForList.prototype.hashCode = function () {
    return MyList__hashCode_impl_lqj1nc(this.i_1);
  };
  ContainerForList.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ContainerForList))
      return false;
    var tmp0_other_with_cast = other instanceof ContainerForList ? other : THROW_CCE();
    if (!equals(this.i_1, tmp0_other_with_cast.i_1))
      return false;
    return true;
  };
  function Companion_14() {
    Companion_instance_14 = this;
  }
  Companion_14.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_11();
  };
  var Companion_instance_14;
  function Companion_getInstance_19() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function $serializer_13() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.UnsignedInBoxedPosition', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('i', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_13.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_13.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [new ArrayListSerializer(UIntSerializer_getInstance())];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_13.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ArrayListSerializer(UIntSerializer_getInstance()), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ArrayListSerializer(UIntSerializer_getInstance()), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return UnsignedInBoxedPosition_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_13.prototype.serialize_yudnd0_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, new ArrayListSerializer(UIntSerializer_getInstance()), value.i_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_13.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_yudnd0_k$(encoder, value instanceof UnsignedInBoxedPosition ? value : THROW_CCE());
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_13();
    return $serializer_instance_11;
  }
  function UnsignedInBoxedPosition_init_$Init$(seen1, i, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_11().descriptor_1);
    }
    $this.i_1 = i;
    return $this;
  }
  function UnsignedInBoxedPosition_init_$Create$(seen1, i, serializationConstructorMarker) {
    return UnsignedInBoxedPosition_init_$Init$(seen1, i, serializationConstructorMarker, Object.create(UnsignedInBoxedPosition.prototype));
  }
  function UnsignedInBoxedPosition(i) {
    Companion_getInstance_19();
    this.i_1 = i;
  }
  UnsignedInBoxedPosition.prototype.get_i_1mhr5s_k$ = function () {
    return this.i_1;
  };
  UnsignedInBoxedPosition.prototype.component1_7eebsc_k$ = function () {
    return this.i_1;
  };
  UnsignedInBoxedPosition.prototype.copy_wvh3ev_k$ = function (i) {
    return new UnsignedInBoxedPosition(i);
  };
  UnsignedInBoxedPosition.prototype.copy$default_juhiev_k$ = function (i, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      i = this.i_1;
    return this.copy_wvh3ev_k$(i);
  };
  UnsignedInBoxedPosition.prototype.toString = function () {
    return 'UnsignedInBoxedPosition(i=' + this.i_1 + ')';
  };
  UnsignedInBoxedPosition.prototype.hashCode = function () {
    return hashCode(this.i_1);
  };
  UnsignedInBoxedPosition.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UnsignedInBoxedPosition))
      return false;
    var tmp0_other_with_cast = other instanceof UnsignedInBoxedPosition ? other : THROW_CCE();
    if (!equals(this.i_1, tmp0_other_with_cast.i_1))
      return false;
    return true;
  };
  function Companion_15() {
    Companion_instance_15 = this;
  }
  Companion_15.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_12();
  };
  var Companion_instance_15;
  function Companion_getInstance_20() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function $serializer_14() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.MixedPositions', this, 8);
    tmp0_serialDesc.addElement_ifop3j_k$('int', false);
    tmp0_serialDesc.addElement_ifop3j_k$('intNullable', false);
    tmp0_serialDesc.addElement_ifop3j_k$('uint', false);
    tmp0_serialDesc.addElement_ifop3j_k$('uintNullable', false);
    tmp0_serialDesc.addElement_ifop3j_k$('boxedInt', false);
    tmp0_serialDesc.addElement_ifop3j_k$('boxedUInt', false);
    tmp0_serialDesc.addElement_ifop3j_k$('boxedNullableInt', false);
    tmp0_serialDesc.addElement_ifop3j_k$('boxedNullableUInt', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_14.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_14.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [IntSerializer_getInstance(), get_nullable(IntSerializer_getInstance()), UIntSerializer_getInstance(), get_nullable(UIntSerializer_getInstance()), new ArrayListSerializer(IntSerializer_getInstance()), new ArrayListSerializer(UIntSerializer_getInstance()), new ArrayListSerializer(get_nullable(IntSerializer_getInstance())), new ArrayListSerializer(get_nullable(UIntSerializer_getInstance()))];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_14.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp12_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp12_input.decodeIntElement_cmpvet_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp12_input.decodeNullableSerializableElement_1n5pmg_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 2, UIntSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp12_input.decodeNullableSerializableElement_1n5pmg_k$(tmp0_desc, 3, UIntSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 4, new ArrayListSerializer(IntSerializer_getInstance()), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 5, new ArrayListSerializer(UIntSerializer_getInstance()), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 6, new ArrayListSerializer(get_nullable(IntSerializer_getInstance())), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 7, new ArrayListSerializer(get_nullable(UIntSerializer_getInstance())), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp12_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp12_input.decodeIntElement_cmpvet_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp12_input.decodeNullableSerializableElement_1n5pmg_k$(tmp0_desc, 1, IntSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 2, UIntSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp12_input.decodeNullableSerializableElement_1n5pmg_k$(tmp0_desc, 3, UIntSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 4, new ArrayListSerializer(IntSerializer_getInstance()), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 5, new ArrayListSerializer(UIntSerializer_getInstance()), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 6, new ArrayListSerializer(get_nullable(IntSerializer_getInstance())), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp12_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 7, new ArrayListSerializer(get_nullable(UIntSerializer_getInstance())), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp12_input.endStructure_e64gd4_k$(tmp0_desc);
    var tmp = tmp3_bitMask0;
    var tmp_0 = tmp4_local0;
    var tmp_1 = tmp5_local1;
    var tmp_2 = tmp6_local2;
    var tmp_3 = tmp_2 == null ? null : tmp_2.data_1;
    var tmp_4 = tmp7_local3;
    return MixedPositions_init_$Create$(tmp, tmp_0, tmp_1, tmp_3, tmp_4 == null ? null : tmp_4.data_1, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, null);
  };
  $serializer_14.prototype.serialize_h52joi_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeIntElement_utywpf_k$(tmp0_desc, 0, value.int_1);
    tmp1_output.encodeNullableSerializableElement_j50jzb_k$(tmp0_desc, 1, IntSerializer_getInstance(), value.intNullable_1);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 2, UIntSerializer_getInstance(), new UInt(value.uint_1));
    var tmp = UIntSerializer_getInstance();
    var tmp_0 = value.uintNullable_1;
    tmp1_output.encodeNullableSerializableElement_j50jzb_k$(tmp0_desc, 3, tmp, tmp_0 == null ? null : new UInt(tmp_0));
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 4, new ArrayListSerializer(IntSerializer_getInstance()), value.boxedInt_1);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 5, new ArrayListSerializer(UIntSerializer_getInstance()), value.boxedUInt_1);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 6, new ArrayListSerializer(get_nullable(IntSerializer_getInstance())), value.boxedNullableInt_1);
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 7, new ArrayListSerializer(get_nullable(UIntSerializer_getInstance())), value.boxedNullableUInt_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_14.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_h52joi_k$(encoder, value instanceof MixedPositions ? value : THROW_CCE());
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_14();
    return $serializer_instance_12;
  }
  function MixedPositions_init_$Init$(seen1, int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt, serializationConstructorMarker, $this) {
    if (!(255 === (255 & seen1))) {
      throwMissingFieldException(seen1, 255, $serializer_getInstance_12().descriptor_1);
    }
    $this.int_1 = int;
    $this.intNullable_1 = intNullable;
    $this.uint_1 = uint;
    $this.uintNullable_1 = uintNullable;
    $this.boxedInt_1 = boxedInt;
    $this.boxedUInt_1 = boxedUInt;
    $this.boxedNullableInt_1 = boxedNullableInt;
    $this.boxedNullableUInt_1 = boxedNullableUInt;
    return $this;
  }
  function MixedPositions_init_$Create$(seen1, int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt, serializationConstructorMarker) {
    return MixedPositions_init_$Init$(seen1, int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt, serializationConstructorMarker, Object.create(MixedPositions.prototype));
  }
  function MixedPositions(int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt) {
    Companion_getInstance_20();
    this.int_1 = int;
    this.intNullable_1 = intNullable;
    this.uint_1 = uint;
    this.uintNullable_1 = uintNullable;
    this.boxedInt_1 = boxedInt;
    this.boxedUInt_1 = boxedUInt;
    this.boxedNullableInt_1 = boxedNullableInt;
    this.boxedNullableUInt_1 = boxedNullableUInt;
  }
  MixedPositions.prototype.get_int_18j3i2_k$ = function () {
    return this.int_1;
  };
  MixedPositions.prototype.get_intNullable_x133t_k$ = function () {
    return this.intNullable_1;
  };
  MixedPositions.prototype.get_uint_8lrwnc_k$ = function () {
    return this.uint_1;
  };
  MixedPositions.prototype.get_uintNullable_8ym0x6_k$ = function () {
    return this.uintNullable_1;
  };
  MixedPositions.prototype.get_boxedInt_5iy2em_k$ = function () {
    return this.boxedInt_1;
  };
  MixedPositions.prototype.get_boxedUInt_t9auzf_k$ = function () {
    return this.boxedUInt_1;
  };
  MixedPositions.prototype.get_boxedNullableInt_i95x0z_k$ = function () {
    return this.boxedNullableInt_1;
  };
  MixedPositions.prototype.get_boxedNullableUInt_2czwbg_k$ = function () {
    return this.boxedNullableUInt_1;
  };
  MixedPositions.prototype.component1_7eebsc_k$ = function () {
    return this.int_1;
  };
  MixedPositions.prototype.component2_7eebsb_k$ = function () {
    return this.intNullable_1;
  };
  MixedPositions.prototype.component3_1o4dh7_k$ = function () {
    return this.uint_1;
  };
  MixedPositions.prototype.component4_za4vwj_k$ = function () {
    return this.uintNullable_1;
  };
  MixedPositions.prototype.component5_7eebs8_k$ = function () {
    return this.boxedInt_1;
  };
  MixedPositions.prototype.component6_7eebs7_k$ = function () {
    return this.boxedUInt_1;
  };
  MixedPositions.prototype.component7_7eebs6_k$ = function () {
    return this.boxedNullableInt_1;
  };
  MixedPositions.prototype.component8_7eebs5_k$ = function () {
    return this.boxedNullableUInt_1;
  };
  MixedPositions.prototype.copy_7tvx9f_k$ = function (int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt) {
    return new MixedPositions(int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt);
  };
  MixedPositions.prototype.copy$default_ncaxq1_k$ = function (int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      int = this.int_1;
    if (!(($mask0 & 2) === 0))
      intNullable = this.intNullable_1;
    if (!(($mask0 & 4) === 0))
      uint = this.uint_1;
    if (!(($mask0 & 8) === 0))
      uintNullable = this.uintNullable_1;
    if (!(($mask0 & 16) === 0))
      boxedInt = this.boxedInt_1;
    if (!(($mask0 & 32) === 0))
      boxedUInt = this.boxedUInt_1;
    if (!(($mask0 & 64) === 0))
      boxedNullableInt = this.boxedNullableInt_1;
    if (!(($mask0 & 128) === 0))
      boxedNullableUInt = this.boxedNullableUInt_1;
    return this.copy_7tvx9f_k$(int, intNullable, uint, uintNullable, boxedInt, boxedUInt, boxedNullableInt, boxedNullableUInt);
  };
  MixedPositions.prototype.toString = function () {
    var tmp = new UInt(this.uint_1);
    var tmp_0 = this.uintNullable_1;
    return 'MixedPositions(int=' + this.int_1 + ', intNullable=' + this.intNullable_1 + ', uint=' + tmp + ', uintNullable=' + (tmp_0 == null ? null : new UInt(tmp_0)) + ', boxedInt=' + this.boxedInt_1 + ', boxedUInt=' + this.boxedUInt_1 + ', boxedNullableInt=' + this.boxedNullableInt_1 + ', boxedNullableUInt=' + this.boxedNullableUInt_1 + ')';
  };
  MixedPositions.prototype.hashCode = function () {
    var result = this.int_1;
    result = imul(result, 31) + (this.intNullable_1 == null ? 0 : this.intNullable_1) | 0;
    result = imul(result, 31) + UInt__hashCode_impl_z2mhuw(this.uint_1) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.uintNullable_1;
    if ((tmp_1 == null ? null : new UInt(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = UInt__hashCode_impl_z2mhuw(this.uintNullable_1);
    }
    result = tmp + tmp_0 | 0;
    result = imul(result, 31) + hashCode(this.boxedInt_1) | 0;
    result = imul(result, 31) + hashCode(this.boxedUInt_1) | 0;
    result = imul(result, 31) + hashCode(this.boxedNullableInt_1) | 0;
    result = imul(result, 31) + hashCode(this.boxedNullableUInt_1) | 0;
    return result;
  };
  MixedPositions.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MixedPositions))
      return false;
    var tmp0_other_with_cast = other instanceof MixedPositions ? other : THROW_CCE();
    if (!(this.int_1 === tmp0_other_with_cast.int_1))
      return false;
    if (!(this.intNullable_1 == tmp0_other_with_cast.intNullable_1))
      return false;
    if (!(this.uint_1 === tmp0_other_with_cast.uint_1))
      return false;
    var tmp = this.uintNullable_1;
    var tmp_0 = tmp == null ? null : new UInt(tmp);
    var tmp_1 = tmp0_other_with_cast.uintNullable_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new UInt(tmp_1)))
      return false;
    if (!equals(this.boxedInt_1, tmp0_other_with_cast.boxedInt_1))
      return false;
    if (!equals(this.boxedUInt_1, tmp0_other_with_cast.boxedUInt_1))
      return false;
    if (!equals(this.boxedNullableInt_1, tmp0_other_with_cast.boxedNullableInt_1))
      return false;
    if (!equals(this.boxedNullableUInt_1, tmp0_other_with_cast.boxedNullableUInt_1))
      return false;
    return true;
  };
  function _get_precedent__izjb3v($this) {
    return $this.precedent_1;
  }
  function InlineClassesTest$testSimpleContainerForList$lambda($this$Yaml) {
    $this$Yaml.set_listSerialization_ydi3a5_k$(ListSerialization_FLOW_SEQUENCE_getInstance());
    return Unit_getInstance();
  }
  function InlineClassesTest$testUnsignedInBoxedPosition$lambda($this$Yaml) {
    $this$Yaml.set_listSerialization_ydi3a5_k$(ListSerialization_FLOW_SEQUENCE_getInstance());
    return Unit_getInstance();
  }
  function InlineClassesTest() {
    var tmp = this;
    var tmp$ret$2;
    // Inline function 'kotlin.UInt.plus' call
    var tmp$ret$0;
    // Inline function 'kotlin.toUInt' call
    var tmp0_toUInt = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
    tmp$ret$0 = _UInt___init__impl__l7qpdl(tmp0_toUInt);
    var tmp1_plus = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.toUInt' call
    tmp$ret$1 = _UInt___init__impl__l7qpdl(10);
    var tmp2_plus = tmp$ret$1;
    tmp$ret$2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp1_plus) + _UInt___get_data__impl__f0vqqw(tmp2_plus) | 0);
    tmp.precedent_1 = tmp$ret$2;
  }
  InlineClassesTest.prototype.testSimpleContainer_exv0ic_k$ = function () {
    var tmp;
    if (!isJsLegacy()) {
      var tmp0_assertStringFormAndRestored = new SimpleContainerForUInt(this.precedent_1);
      var tmp1_assertStringFormAndRestored = Companion_getInstance_14().serializer_9w0wvi_k$();
      var tmp2_assertStringFormAndRestored = Default_getInstance();
      var string = tmp2_assertStringFormAndRestored.encodeToString_bhi5ce_k$(tmp1_assertStringFormAndRestored, tmp0_assertStringFormAndRestored);
      if (false) {
        println('[Serialized form] ' + string);
      }
      assertEquals$default('i: 2147483657', string, null, 4, null);
      var restored = tmp2_assertStringFormAndRestored.decodeFromString_d9fce8_k$(tmp1_assertStringFormAndRestored, string);
      if (false) {
        println('[Restored form] ' + restored);
      }
      assertEquals$default(tmp0_assertStringFormAndRestored, restored, null, 4, null);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  InlineClassesTest.prototype.testSimpleContainerForMyTypeWithCustomSerializer_9raz7a_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp0_toInt = this.precedent_1;
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
    var tmp1_assertStringFormAndRestored = new SimpleContainerForMyType(_MyUInt___init__impl__53xc1n(tmp$ret$0));
    var tmp2_assertStringFormAndRestored = Companion_getInstance_16().serializer_9w0wvi_k$();
    var tmp3_assertStringFormAndRestored = Default_getInstance();
    var string = tmp3_assertStringFormAndRestored.encodeToString_bhi5ce_k$(tmp2_assertStringFormAndRestored, tmp1_assertStringFormAndRestored);
    if (false) {
      println('[Serialized form] ' + string);
    }
    assertEquals$default('i: 2147483657', string, null, 4, null);
    var restored = tmp3_assertStringFormAndRestored.decodeFromString_d9fce8_k$(tmp2_assertStringFormAndRestored, string);
    if (false) {
      println('[Restored form] ' + restored);
    }
    return assertEquals$default(tmp1_assertStringFormAndRestored, restored, null, 4, null);
  };
  InlineClassesTest.prototype.testSimpleContainerForList_1s1b7d_k$ = function () {
    var tmp;
    if (!isJsLegacy()) {
      Debugging_getInstance().set_enabled_qjnymd_k$(true);
      var tmp0_expected = 'i: [ 2147483657 ]\n';
      var tmp1_original = new ContainerForList(_MyList___init__impl__z365ef(listOf_0(new UInt(this.precedent_1))));
      var tmp2_serializer = Companion_getInstance_18().serializer_idvbxl_k$(serializer(Companion_getInstance()));
      var tmp3_format = Yaml$default(null, InlineClassesTest$testSimpleContainerForList$lambda, 1, null);
      var string = tmp3_format.encodeToString_bhi5ce_k$(tmp2_serializer, tmp1_original);
      {
        println('[Serialized form] ' + string);
      }
      assertEquals$default(tmp0_expected, string, null, 4, null);
      var restored = tmp3_format.decodeFromString_d9fce8_k$(tmp2_serializer, string);
      {
        println('[Restored form] ' + restored);
      }
      assertEquals$default(tmp1_original, restored, null, 4, null);
      tmp = Unit_getInstance();
    }
    return tmp;
  };
  InlineClassesTest.prototype.testUnsignedInBoxedPosition_8yrg2y_k$ = function () {
    var tmp0_assertStringFormAndRestored = 'i: [ 2147483657 ]\n';
    var tmp1_assertStringFormAndRestored = new UnsignedInBoxedPosition(listOf_0(new UInt(this.precedent_1)));
    var tmp2_assertStringFormAndRestored = Companion_getInstance_19().serializer_9w0wvi_k$();
    var tmp3_assertStringFormAndRestored = Yaml$default(null, InlineClassesTest$testUnsignedInBoxedPosition$lambda, 1, null);
    var string = tmp3_assertStringFormAndRestored.encodeToString_bhi5ce_k$(tmp2_assertStringFormAndRestored, tmp1_assertStringFormAndRestored);
    if (false) {
      println('[Serialized form] ' + string);
    }
    assertEquals$default(tmp0_assertStringFormAndRestored, string, null, 4, null);
    var restored = tmp3_assertStringFormAndRestored.decodeFromString_d9fce8_k$(tmp2_assertStringFormAndRestored, string);
    if (false) {
      println('[Restored form] ' + restored);
    }
    return assertEquals$default(tmp1_assertStringFormAndRestored, restored, null, 4, null);
  };
  InlineClassesTest.prototype.testMixedPositions_qgjd68_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp0_toInt = this.precedent_1;
    tmp$ret$0 = _UInt___get_data__impl__f0vqqw(tmp0_toInt);
    var tmp = tmp$ret$0;
    var tmp$ret$1;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp1_toInt = this.precedent_1;
    tmp$ret$1 = _UInt___get_data__impl__f0vqqw(tmp1_toInt);
    var tmp_0 = tmp$ret$1;
    var tmp$ret$2;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp2_toInt = this.precedent_1;
    tmp$ret$2 = _UInt___get_data__impl__f0vqqw(tmp2_toInt);
    var tmp_1 = listOf_0(tmp$ret$2);
    var tmp_2 = listOf_0(new UInt(this.precedent_1));
    var tmp$ret$3;
    // Inline function 'kotlin.UInt.toInt' call
    var tmp3_toInt = this.precedent_1;
    tmp$ret$3 = _UInt___get_data__impl__f0vqqw(tmp3_toInt);
    var o = new MixedPositions(tmp, tmp_0, this.precedent_1, this.precedent_1, tmp_1, tmp_2, listOf([null, tmp$ret$3, null]), listOf([null, new UInt(this.precedent_1), null]));
    // Inline function 'net.mamoe.yamlkt.assertStringFormAndRestored' call
    var tmp4_assertStringFormAndRestored = 'int: -2147483639\nintNullable: -2147483639\nuint: 2147483657\nuintNullable: 2147483657\nboxedInt: \n  - -2147483639\nboxedUInt: \n  - 2147483657\nboxedNullableInt: \n  - null\n  - -2147483639\n  - null\nboxedNullableUInt: \n  - null\n  - 2147483657\n  - null';
    var tmp5_assertStringFormAndRestored = Companion_getInstance_20().serializer_9w0wvi_k$();
    var tmp6_assertStringFormAndRestored = Default_getInstance();
    var string = tmp6_assertStringFormAndRestored.encodeToString_bhi5ce_k$(tmp5_assertStringFormAndRestored, o);
    if (false) {
      println('[Serialized form] ' + string);
    }
    assertEquals$default(tmp4_assertStringFormAndRestored, string, null, 4, null);
    var restored = tmp6_assertStringFormAndRestored.decodeFromString_d9fce8_k$(tmp5_assertStringFormAndRestored, string);
    if (false) {
      println('[Restored form] ' + restored);
    }
    assertEquals$default(o, restored, null, 4, null);
  };
  function test_fun_izoufj_3() {
    suite('InlineClassesTest', false, test_fun$InlineClassesTest_test_fun_sqjyzf);
  }
  function test_fun$InlineClassesTest_test_fun_sqjyzf() {
    test('testSimpleContainer', false, test_fun$InlineClassesTest_test_fun$testSimpleContainer_test_fun_dk1k2b);
    test('testSimpleContainerForMyTypeWithCustomSerializer', false, test_fun$InlineClassesTest_test_fun$testSimpleContainerForMyTypeWithCustomSerializer_test_fun_1c68dl);
    test('testSimpleContainerForList', false, test_fun$InlineClassesTest_test_fun$testSimpleContainerForList_test_fun_nunx14);
    test('testUnsignedInBoxedPosition', false, test_fun$InlineClassesTest_test_fun$testUnsignedInBoxedPosition_test_fun_5tkvs9);
    test('testMixedPositions', false, test_fun$InlineClassesTest_test_fun$testMixedPositions_test_fun_y9szhr);
    return Unit_getInstance();
  }
  function test_fun$InlineClassesTest_test_fun$testSimpleContainer_test_fun_dk1k2b() {
    var tmp = new InlineClassesTest();
    tmp.testSimpleContainer_exv0ic_k$();
    return Unit_getInstance();
  }
  function test_fun$InlineClassesTest_test_fun$testSimpleContainerForMyTypeWithCustomSerializer_test_fun_1c68dl() {
    var tmp = new InlineClassesTest();
    tmp.testSimpleContainerForMyTypeWithCustomSerializer_9raz7a_k$();
    return Unit_getInstance();
  }
  function test_fun$InlineClassesTest_test_fun$testSimpleContainerForList_test_fun_nunx14() {
    var tmp = new InlineClassesTest();
    tmp.testSimpleContainerForList_1s1b7d_k$();
    return Unit_getInstance();
  }
  function test_fun$InlineClassesTest_test_fun$testUnsignedInBoxedPosition_test_fun_5tkvs9() {
    var tmp = new InlineClassesTest();
    tmp.testUnsignedInBoxedPosition_8yrg2y_k$();
    return Unit_getInstance();
  }
  function test_fun$InlineClassesTest_test_fun$testMixedPositions_test_fun_y9szhr() {
    var tmp = new InlineClassesTest();
    tmp.testMixedPositions_qgjd68_k$();
    return Unit_getInstance();
  }
  function Companion_16() {
    Companion_instance_16 = this;
  }
  Companion_16.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_13();
  };
  var Companion_instance_16;
  function Companion_getInstance_21() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function $serializer_15() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.MultilineStringTest.TestStringData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('key', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_15.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_15.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_15.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestStringData_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_15.prototype.serialize_u9jb4_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.key_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_15.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_u9jb4_k$(encoder, value instanceof TestStringData_0 ? value : THROW_CCE());
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_15();
    return $serializer_instance_13;
  }
  function TestStringData_init_$Init$_0(seen1, key, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_13().descriptor_1);
    }
    $this.key_1 = key;
    return $this;
  }
  function TestStringData_init_$Create$_0(seen1, key, serializationConstructorMarker) {
    return TestStringData_init_$Init$_0(seen1, key, serializationConstructorMarker, Object.create(TestStringData_0.prototype));
  }
  function Companion_17() {
    Companion_instance_17 = this;
  }
  Companion_17.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_14();
  };
  var Companion_instance_17;
  function Companion_getInstance_22() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function $serializer_16() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.MultilineStringTest.TestTwoStringData', this, 2);
    tmp0_serialDesc.addElement_ifop3j_k$('string1', false);
    tmp0_serialDesc.addElement_ifop3j_k$('string2', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_16.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_16.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_16.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeStringElement_4is7ib_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestTwoStringData_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer_16.prototype.serialize_fz04zk_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.string1__1);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 1, value.string2__1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_16.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_fz04zk_k$(encoder, value instanceof TestTwoStringData ? value : THROW_CCE());
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_16();
    return $serializer_instance_14;
  }
  function TestTwoStringData_init_$Init$(seen1, string1, string2, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1))) {
      throwMissingFieldException(seen1, 3, $serializer_getInstance_14().descriptor_1);
    }
    $this.string1__1 = string1;
    $this.string2__1 = string2;
    return $this;
  }
  function TestTwoStringData_init_$Create$(seen1, string1, string2, serializationConstructorMarker) {
    return TestTwoStringData_init_$Init$(seen1, string1, string2, serializationConstructorMarker, Object.create(TestTwoStringData.prototype));
  }
  function TestStringData_0(key) {
    Companion_getInstance_21();
    this.key_1 = key;
  }
  TestStringData_0.prototype.get_key_18j28a_k$ = function () {
    return this.key_1;
  };
  TestStringData_0.prototype.component1_7eebsc_k$ = function () {
    return this.key_1;
  };
  TestStringData_0.prototype.copy_3t26ic_k$ = function (key) {
    return new TestStringData_0(key);
  };
  TestStringData_0.prototype.copy$default_q3pzg4_k$ = function (key, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      key = this.key_1;
    return this.copy_3t26ic_k$(key);
  };
  TestStringData_0.prototype.toString = function () {
    return 'TestStringData(key=' + this.key_1 + ')';
  };
  TestStringData_0.prototype.hashCode = function () {
    return getStringHashCode(this.key_1);
  };
  TestStringData_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestStringData_0))
      return false;
    var tmp0_other_with_cast = other instanceof TestStringData_0 ? other : THROW_CCE();
    if (!(this.key_1 === tmp0_other_with_cast.key_1))
      return false;
    return true;
  };
  function TestTwoStringData(string1, string2) {
    Companion_getInstance_22();
    this.string1__1 = string1;
    this.string2__1 = string2;
  }
  TestTwoStringData.prototype.get_string1_tusomh_k$ = function () {
    return this.string1__1;
  };
  TestTwoStringData.prototype.get_string2_tusomg_k$ = function () {
    return this.string2__1;
  };
  TestTwoStringData.prototype.component1_7eebsc_k$ = function () {
    return this.string1__1;
  };
  TestTwoStringData.prototype.component2_7eebsb_k$ = function () {
    return this.string2__1;
  };
  TestTwoStringData.prototype.copy_jxa1ir_k$ = function (string1, string2) {
    return new TestTwoStringData(string1, string2);
  };
  TestTwoStringData.prototype.copy$default_jej4nk_k$ = function (string1, string2, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      string1 = this.string1__1;
    if (!(($mask0 & 2) === 0))
      string2 = this.string2__1;
    return this.copy_jxa1ir_k$(string1, string2);
  };
  TestTwoStringData.prototype.toString = function () {
    return 'TestTwoStringData(string1=' + this.string1__1 + ', string2=' + this.string2__1 + ')';
  };
  TestTwoStringData.prototype.hashCode = function () {
    var result = getStringHashCode(this.string1__1);
    result = imul(result, 31) + getStringHashCode(this.string2__1) | 0;
    return result;
  };
  TestTwoStringData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestTwoStringData))
      return false;
    var tmp0_other_with_cast = other instanceof TestTwoStringData ? other : THROW_CCE();
    if (!(this.string1__1 === tmp0_other_with_cast.string1__1))
      return false;
    if (!(this.string2__1 === tmp0_other_with_cast.string2__1))
      return false;
    return true;
  };
  function _get_line1__eq4hfw($this) {
    return $this.line1__1;
  }
  function _get_line2__eq4hf1($this) {
    return $this.line2__1;
  }
  function _set_testStringDataSerializer__dc2d6w($this, _set____db54di) {
    $this.testStringDataSerializer_1 = _set____db54di;
  }
  function _get_testStringDataSerializer__8tp5jo($this) {
    var tmp = $this.testStringDataSerializer_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('testStringDataSerializer');
    }
  }
  function _set_testTwoStringDataSerializer__pjpqzm($this, _set____db54di) {
    $this.testTwoStringDataSerializer_1 = _set____db54di;
  }
  function _get_testTwoStringDataSerializer__i7vzqi($this) {
    var tmp = $this.testTwoStringDataSerializer_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('testTwoStringDataSerializer');
    }
  }
  function MultilineStringTest() {
    this.line1__1 = 'This is a multiline string';
    this.line2__1 = 'This is the second line';
  }
  MultilineStringTest.prototype.createSerializers_pfepg_k$ = function () {
    this.testStringDataSerializer_1 = Companion_getInstance_21().serializer_9w0wvi_k$();
    this.testTwoStringDataSerializer_1 = Companion_getInstance_22().serializer_9w0wvi_k$();
  };
  MultilineStringTest.prototype.testMultilineUnquotedString_rahzes_k$ = function () {
    var yaml = trimIndent('\n            key: ' + this.line1__1 + '\n                 ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + ' ' + this.line2__1);
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineSingleQuotedString_e6qt6z_k$ = function () {
    var yaml = trimIndent("\n            key: '" + this.line1__1 + '\n                    ' + this.line2__1 + "'\n        ");
    var expected = new TestStringData_0(this.line1__1 + ' ' + this.line2__1);
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineDoubleQuotedString_8anvzg_k$ = function () {
    var yaml = trimIndent('\n            key: "' + this.line1__1 + '\\n\n                    ' + this.line2__1 + '"\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n ' + this.line2__1);
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithNoLineBreak_6wuzdz_k$ = function () {
    var yaml = trimIndent('\n            key: > ' + this.line1__1 + '\n        ');
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$3;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith = getKClass(YamlDecodingException);
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = checkResultIsFailure(tmp3_assertFailsWith, null, tmp$ret$2);
    tmp$ret$4 = tmp$ret$3;
  };
  MultilineStringTest.prototype.testMultilineFoldedStringEmpty_q5835c_k$ = function () {
    var yaml = 'key: >';
    var expected = new TestStringData_0('');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedString_ktogkl_k$ = function () {
    var yaml = trimIndent('\n            key: >\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + ' ' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithSpacesAfterBracket_kug38m_k$ = function () {
    var yaml = trimIndent('\n            key: >  \n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + ' ' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithLeadingSpace_7blwzj_k$ = function () {
    var yaml = trimIndent('\n            key: >\n              ' + this.line1__1 + '\n               ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n ' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithTrailingNewlines_ozlsqk_k$ = function () {
    var yaml = trimIndent('\n            key: >\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n              \n              \n        ');
    var expected = new TestStringData_0(this.line1__1 + ' ' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithStrippedNewlines_i6wrqh_k$ = function () {
    var yaml = trimIndent('\n            key: >-\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n              \n              \n        ');
    var expected = new TestStringData_0(this.line1__1 + ' ' + this.line2__1);
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithKeptNewlines_brmnpe_k$ = function () {
    var yaml = trimIndent('\n            key: >+\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n              \n              \n        ');
    var expected = new TestStringData_0(this.line1__1 + ' ' + this.line2__1 + '\n\n\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithBlankLines_q18bl8_k$ = function () {
    var yaml = trimIndent('\n            key: >\n              ' + this.line1__1 + '\n              \n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithAdditionalContent_k8tj5d_k$ = function () {
    var yaml = 'string1: >\n  foo\nstring2: bar';
    var expected = new TestTwoStringData('foo\n', 'bar');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithMultipleFoldedStrings_57kmgh_k$ = function () {
    var yaml = 'string1: >+\n  foo\n  \nstring2: >-\n  bar';
    var expected = new TestTwoStringData('foo\n\n', 'bar');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithLeadingNewline_tcsecx_k$ = function () {
    var yaml = trimIndent('\n            key: >\n            \n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0('\n' + this.line1__1 + ' ' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithLeadingNewlines_r8q1z2_k$ = function () {
    var yaml = trimIndent('\n            key: >\n            \n            \n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0('\n\n' + this.line1__1 + ' ' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithOnlyLeadingNewlines_uunzue_k$ = function () {
    var yaml = 'string1: >\n\nstring2: >\n foo';
    var expected = new TestTwoStringData('', 'foo\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineFoldedStringWithOneEmpty_ixrdm0_k$ = function () {
    var yaml = 'string1: >\nstring2: >\n foo';
    var expected = new TestTwoStringData('', 'foo\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithNoLineBreak_1g3npq_k$ = function () {
    var yaml = trimIndent('\n            key: | ' + this.line1__1 + '\n        ');
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$3;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith = getKClass(YamlDecodingException);
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = checkResultIsFailure(tmp3_assertFailsWith, null, tmp$ret$2);
    tmp$ret$4 = tmp$ret$3;
  };
  MultilineStringTest.prototype.testMultilineLiteralStringEmpty_92q0nr_k$ = function () {
    var yaml = 'key: |';
    var expected = new TestStringData_0('');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralString_3wqucs_k$ = function () {
    var yaml = trimIndent('\n            key: |\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithSpacesAfterBracket_4h4o6l_k$ = function () {
    var yaml = trimIndent('\n            key: |  \n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithLeadingSpace_yowux2_k$ = function () {
    var yaml = trimIndent('\n            key: |\n              ' + this.line1__1 + '\n               ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n ' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithTrailingNewlines_et0l4l_k$ = function () {
    var yaml = trimIndent('\n            key: |\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n              \n              \n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithStrippedNewlines_sdhzcg_k$ = function () {
    var yaml = trimIndent('\n            key: |-\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n              \n              \n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n' + this.line2__1);
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithKeptNewlines_vw6gc7_k$ = function () {
    var yaml = trimIndent('\n            key: |+\n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n              \n              \n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n' + this.line2__1 + '\n\n\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithTwoBlankLines_6tgaxn_k$ = function () {
    var yaml = trimIndent('\n            key: |\n              ' + this.line1__1 + '\n              \n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithThreeBlankLines_jjb40j_k$ = function () {
    var yaml = trimIndent('\n            key: |\n              ' + this.line1__1 + '\n              \n              \n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0(this.line1__1 + '\n\n\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithAdditionalContent_j8h6t2_k$ = function () {
    var yaml = 'string1: |\n  foo\nstring2: bar';
    var expected = new TestTwoStringData('foo\n', 'bar');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithMultipleLiteralStrings_qm0yzh_k$ = function () {
    var yaml = 'string1: |+\n  foo\n  \nstring2: |-\n  bar';
    var expected = new TestTwoStringData('foo\n\n', 'bar');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithLeadingNewline_kyw6h4_k$ = function () {
    var yaml = trimIndent('\n            key: |\n            \n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0('\n' + this.line1__1 + '\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithLeadingNewlines_tv1bkn_k$ = function () {
    var yaml = trimIndent('\n            key: |\n            \n            \n              ' + this.line1__1 + '\n              ' + this.line2__1 + '\n        ');
    var expected = new TestStringData_0('\n\n' + this.line1__1 + '\n' + this.line2__1 + '\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testStringDataSerializer__8tp5jo(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithOnlyLeadingNewlines_txeh7n_k$ = function () {
    var yaml = 'string1: |\n\nstring2: |\n foo';
    var expected = new TestTwoStringData('', 'foo\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  MultilineStringTest.prototype.testMultilineLiteralStringWithOneEmpty_2gpwbl_k$ = function () {
    var yaml = 'string1: |\nstring2: |\n foo';
    var expected = new TestTwoStringData('', 'foo\n');
    var actual = Default_getInstance().decodeFromString_d9fce8_k$(_get_testTwoStringDataSerializer__i7vzqi(this), yaml);
    assertEquals$default(expected, actual, null, 4, null);
  };
  function test_fun_izoufj_4() {
    suite('MultilineStringTest', false, test_fun$MultilineStringTest_test_fun_5hhpo4);
  }
  function test_fun$MultilineStringTest_test_fun_5hhpo4() {
    test('testMultilineUnquotedString', false, test_fun$MultilineStringTest_test_fun$testMultilineUnquotedString_test_fun_71n0ic);
    test('testMultilineSingleQuotedString', false, test_fun$MultilineStringTest_test_fun$testMultilineSingleQuotedString_test_fun_n8j257);
    test('testMultilineDoubleQuotedString', false, test_fun$MultilineStringTest_test_fun$testMultilineDoubleQuotedString_test_fun_3kpwu4);
    test('testMultilineFoldedStringWithNoLineBreak', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithNoLineBreak_test_fun_t0rs15);
    test('testMultilineFoldedStringEmpty', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringEmpty_test_fun_nrhdog);
    test('testMultilineFoldedString', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedString_test_fun_snnwq3);
    test('testMultilineFoldedStringWithSpacesAfterBracket', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithSpacesAfterBracket_test_fun_8bfgfq);
    test('testMultilineFoldedStringWithLeadingSpace', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithLeadingSpace_test_fun_x17sy9);
    test('testMultilineFoldedStringWithTrailingNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithTrailingNewlines_test_fun_r0swlw);
    test('testMultilineFoldedStringWithStrippedNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithStrippedNewlines_test_fun_hb2elj);
    test('testMultilineFoldedStringWithKeptNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithKeptNewlines_test_fun_vwvmaa);
    test('testMultilineFoldedStringWithBlankLines', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithBlankLines_test_fun_7woppg);
    test('testMultilineFoldedStringWithAdditionalContent', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithAdditionalContent_test_fun_3tu8hr);
    test('testMultilineFoldedStringWithMultipleFoldedStrings', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithMultipleFoldedStrings_test_fun_h7kmwv);
    test('testMultilineFoldedStringWithLeadingNewline', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithLeadingNewline_test_fun_n1f21r);
    test('testMultilineFoldedStringWithLeadingNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithLeadingNewlines_test_fun_l6m9xu);
    test('testMultilineFoldedStringWithOnlyLeadingNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithOnlyLeadingNewlines_test_fun_by9d6i);
    test('testMultilineFoldedStringWithOneEmpty', false, test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithOneEmpty_test_fun_o5ljyw);
    test('testMultilineLiteralStringWithNoLineBreak', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithNoLineBreak_test_fun_60ccaq);
    test('testMultilineLiteralStringEmpty', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringEmpty_test_fun_h0s42v);
    test('testMultilineLiteralString', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralString_test_fun_huegpo);
    test('testMultilineLiteralStringWithSpacesAfterBracket', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithSpacesAfterBracket_test_fun_jmt9h9);
    test('testMultilineLiteralStringWithLeadingSpace', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithLeadingSpace_test_fun_yxq912);
    test('testMultilineLiteralStringWithTrailingNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithTrailingNewlines_test_fun_bh3fmt);
    test('testMultilineLiteralStringWithStrippedNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithStrippedNewlines_test_fun_f85b4w);
    test('testMultilineLiteralStringWithKeptNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithKeptNewlines_test_fun_supmah);
    test('testMultilineLiteralStringWithTwoBlankLines', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithTwoBlankLines_test_fun_izqrf9);
    test('testMultilineLiteralStringWithThreeBlankLines', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithThreeBlankLines_test_fun_lhgxz7);
    test('testMultilineLiteralStringWithAdditionalContent', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithAdditionalContent_test_fun_aa85lm);
    test('testMultilineLiteralStringWithMultipleLiteralStrings', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithMultipleLiteralStrings_test_fun_f2g3x);
    test('testMultilineLiteralStringWithLeadingNewline', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithLeadingNewline_test_fun_jf5e3s);
    test('testMultilineLiteralStringWithLeadingNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithLeadingNewlines_test_fun_giyn9j);
    test('testMultilineLiteralStringWithOnlyLeadingNewlines', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithOnlyLeadingNewlines_test_fun_7ll3mb);
    test('testMultilineLiteralStringWithOneEmpty', false, test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithOneEmpty_test_fun_7kdwep);
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineUnquotedString_test_fun_71n0ic() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineUnquotedString_rahzes_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineSingleQuotedString_test_fun_n8j257() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineSingleQuotedString_e6qt6z_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineDoubleQuotedString_test_fun_3kpwu4() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineDoubleQuotedString_8anvzg_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithNoLineBreak_test_fun_t0rs15() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithNoLineBreak_6wuzdz_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringEmpty_test_fun_nrhdog() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringEmpty_q5835c_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedString_test_fun_snnwq3() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedString_ktogkl_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithSpacesAfterBracket_test_fun_8bfgfq() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithSpacesAfterBracket_kug38m_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithLeadingSpace_test_fun_x17sy9() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithLeadingSpace_7blwzj_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithTrailingNewlines_test_fun_r0swlw() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithTrailingNewlines_ozlsqk_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithStrippedNewlines_test_fun_hb2elj() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithStrippedNewlines_i6wrqh_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithKeptNewlines_test_fun_vwvmaa() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithKeptNewlines_brmnpe_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithBlankLines_test_fun_7woppg() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithBlankLines_q18bl8_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithAdditionalContent_test_fun_3tu8hr() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithAdditionalContent_k8tj5d_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithMultipleFoldedStrings_test_fun_h7kmwv() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithMultipleFoldedStrings_57kmgh_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithLeadingNewline_test_fun_n1f21r() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithLeadingNewline_tcsecx_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithLeadingNewlines_test_fun_l6m9xu() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithLeadingNewlines_r8q1z2_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithOnlyLeadingNewlines_test_fun_by9d6i() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithOnlyLeadingNewlines_uunzue_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineFoldedStringWithOneEmpty_test_fun_o5ljyw() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineFoldedStringWithOneEmpty_ixrdm0_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithNoLineBreak_test_fun_60ccaq() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithNoLineBreak_1g3npq_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringEmpty_test_fun_h0s42v() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringEmpty_92q0nr_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralString_test_fun_huegpo() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralString_3wqucs_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithSpacesAfterBracket_test_fun_jmt9h9() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithSpacesAfterBracket_4h4o6l_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithLeadingSpace_test_fun_yxq912() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithLeadingSpace_yowux2_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithTrailingNewlines_test_fun_bh3fmt() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithTrailingNewlines_et0l4l_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithStrippedNewlines_test_fun_f85b4w() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithStrippedNewlines_sdhzcg_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithKeptNewlines_test_fun_supmah() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithKeptNewlines_vw6gc7_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithTwoBlankLines_test_fun_izqrf9() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithTwoBlankLines_6tgaxn_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithThreeBlankLines_test_fun_lhgxz7() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithThreeBlankLines_jjb40j_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithAdditionalContent_test_fun_aa85lm() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithAdditionalContent_j8h6t2_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithMultipleLiteralStrings_test_fun_f2g3x() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithMultipleLiteralStrings_qm0yzh_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithLeadingNewline_test_fun_jf5e3s() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithLeadingNewline_kyw6h4_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithLeadingNewlines_test_fun_giyn9j() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithLeadingNewlines_tv1bkn_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithOnlyLeadingNewlines_test_fun_7ll3mb() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithOnlyLeadingNewlines_txeh7n_k$();
    return Unit_getInstance();
  }
  function test_fun$MultilineStringTest_test_fun$testMultilineLiteralStringWithOneEmpty_test_fun_7kdwep() {
    var tmp = new MultilineStringTest();
    tmp.createSerializers_pfepg_k$();
    tmp.testMultilineLiteralStringWithOneEmpty_2gpwbl_k$();
    return Unit_getInstance();
  }
  var Platform_JVM_instance;
  var Platform_JS_LEGACY_instance;
  var Platform_JS_IR_instance;
  var Platform_NATIVE_instance;
  function values() {
    return [Platform_JVM_getInstance(), Platform_JS_LEGACY_getInstance(), Platform_JS_IR_getInstance(), Platform_NATIVE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'JVM':
        return Platform_JVM_getInstance();
      case 'JS_LEGACY':
        return Platform_JS_LEGACY_getInstance();
      case 'JS_IR':
        return Platform_JS_IR_getInstance();
      case 'NATIVE':
        return Platform_NATIVE_getInstance();
      default:
        Platform_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_JVM_instance = new Platform('JVM', 0);
    Platform_JS_LEGACY_instance = new Platform('JS_LEGACY', 1);
    Platform_JS_IR_instance = new Platform('JS_IR', 2);
    Platform_NATIVE_instance = new Platform('NATIVE', 3);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function isJs() {
    return get_currentPlatform().equals(Platform_JS_LEGACY_getInstance()) ? true : get_currentPlatform().equals(Platform_JS_IR_getInstance());
  }
  function isJsLegacy() {
    return get_currentPlatform().equals(Platform_JS_LEGACY_getInstance());
  }
  function isJvm() {
    return get_currentPlatform().equals(Platform_JVM_getInstance());
  }
  function isNative() {
    return get_currentPlatform().equals(Platform_NATIVE_getInstance());
  }
  function noJs(test) {
    if (!isJs())
      test();
  }
  function noLegacyJs(test) {
    if (!isJsLegacy())
      test();
  }
  function jvmOnly(test) {
    if (isJvm())
      test();
  }
  function Platform_JVM_getInstance() {
    Platform_initEntries();
    return Platform_JVM_instance;
  }
  function Platform_JS_LEGACY_getInstance() {
    Platform_initEntries();
    return Platform_JS_LEGACY_instance;
  }
  function Platform_JS_IR_getInstance() {
    Platform_initEntries();
    return Platform_JS_IR_instance;
  }
  function Platform_NATIVE_getInstance() {
    Platform_initEntries();
    return Platform_NATIVE_instance;
  }
  function Companion_18() {
    Companion_instance_18 = this;
  }
  Companion_18.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_15();
  };
  var Companion_instance_18;
  function Companion_getInstance_23() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function $serializer_17() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.PolymorphismTest.Banana', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('prop', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_17.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_17.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_17.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Banana_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_17.prototype.serialize_s9cduw_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.prop_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_17.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_s9cduw_k$(encoder, value instanceof Banana ? value : THROW_CCE());
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_17();
    return $serializer_instance_15;
  }
  function Banana_init_$Init$(seen1, prop, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_15().descriptor_1);
    }
    $this.prop_1 = prop;
    return $this;
  }
  function Banana_init_$Create$(seen1, prop, serializationConstructorMarker) {
    return Banana_init_$Init$(seen1, prop, serializationConstructorMarker, Object.create(Banana.prototype));
  }
  function Companion_19() {
    Companion_instance_19 = this;
  }
  Companion_19.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_16();
  };
  var Companion_instance_19;
  function Companion_getInstance_24() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function $serializer_18() {
    $serializer_instance_16 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.PolymorphismTest.Poly', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('fruit', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_18.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_18.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp = getKClass(Fruit);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_arrayOf = [PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2)];
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp0_arrayOf;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  $serializer_18.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      var tmp = getKClass(Fruit);
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_0 = getKClass(Fruit);
            var tmp$ret$5;
            // Inline function 'kotlin.arrayOf' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$3;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = [];
            tmp$ret$4 = tmp$ret$3;
            tmp$ret$5 = tmp$ret$4;

            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp_0, tmp$ret$5), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return Poly_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_18.prototype.serialize_wyxfi9_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    var tmp = getKClass(Fruit);
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2), value.fruit_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_18.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wyxfi9_k$(encoder, value instanceof Poly ? value : THROW_CCE());
  };
  var $serializer_instance_16;
  function $serializer_getInstance_16() {
    if ($serializer_instance_16 == null)
      new $serializer_18();
    return $serializer_instance_16;
  }
  function Poly_init_$Init$(seen1, fruit, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_16().descriptor_1);
    }
    $this.fruit_1 = fruit;
    return $this;
  }
  function Poly_init_$Create$(seen1, fruit, serializationConstructorMarker) {
    return Poly_init_$Init$(seen1, fruit, serializationConstructorMarker, Object.create(Poly.prototype));
  }
  function Fruit() {
  }
  function Banana(prop) {
    Companion_getInstance_23();
    this.prop_1 = prop;
  }
  Banana.prototype.get_prop_wosl9o_k$ = function () {
    return this.prop_1;
  };
  Banana.prototype.component1_7eebsc_k$ = function () {
    return this.prop_1;
  };
  Banana.prototype.copy_3t26ic_k$ = function (prop) {
    return new Banana(prop);
  };
  Banana.prototype.copy$default_q3pzg4_k$ = function (prop, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      prop = this.prop_1;
    return this.copy_3t26ic_k$(prop);
  };
  Banana.prototype.toString = function () {
    return 'Banana(prop=' + this.prop_1 + ')';
  };
  Banana.prototype.hashCode = function () {
    return getStringHashCode(this.prop_1);
  };
  Banana.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Banana))
      return false;
    var tmp0_other_with_cast = other instanceof Banana ? other : THROW_CCE();
    if (!(this.prop_1 === tmp0_other_with_cast.prop_1))
      return false;
    return true;
  };
  function Poly(fruit) {
    Companion_getInstance_24();
    this.fruit_1 = fruit;
  }
  Poly.prototype.get_fruit_irjq3v_k$ = function () {
    return this.fruit_1;
  };
  Poly.prototype.component1_7eebsc_k$ = function () {
    return this.fruit_1;
  };
  Poly.prototype.copy_lvq4y8_k$ = function (fruit) {
    return new Poly(fruit);
  };
  Poly.prototype.copy$default_3iy4x6_k$ = function (fruit, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      fruit = this.fruit_1;
    return this.copy_lvq4y8_k$(fruit);
  };
  Poly.prototype.toString = function () {
    return 'Poly(fruit=' + this.fruit_1 + ')';
  };
  Poly.prototype.hashCode = function () {
    return hashCode(this.fruit_1);
  };
  Poly.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Poly))
      return false;
    var tmp0_other_with_cast = other instanceof Poly ? other : THROW_CCE();
    if (!equals(this.fruit_1, tmp0_other_with_cast.fruit_1))
      return false;
    return true;
  };
  function PolymorphismTest$yaml$lambda($this$Yaml) {
    var tmp$ret$0;
    // Inline function 'kotlinx.serialization.modules.SerializersModule' call
    var builder = new SerializersModuleBuilder();
    // Inline function 'net.mamoe.yamlkt.PolymorphismTest.yaml.<anonymous>.<anonymous>' call
    // Inline function 'kotlinx.serialization.modules.polymorphic' call
    var tmp0_polymorphic = getKClass(Fruit);
    var builder_0 = new PolymorphicModuleBuilder(tmp0_polymorphic, null);
    // Inline function 'net.mamoe.yamlkt.PolymorphismTest.yaml.<anonymous>.<anonymous>.<anonymous>' call
    builder_0.subclass_tslaf9_k$(getKClass(Banana), Companion_getInstance_23().serializer_9w0wvi_k$());
    builder_0.buildTo_ivxld_k$(builder);
    tmp$ret$0 = builder.build_1k0s4u_k$();
    $this$Yaml.set_serializersModule_ohq86n_k$(tmp$ret$0);
    return Unit_getInstance();
  }
  function PolymorphismTest() {
    var tmp = this;
    tmp.yaml_1 = Yaml$default(null, PolymorphismTest$yaml$lambda, 1, null);
  }
  PolymorphismTest.prototype.get_yaml_woxzhs_k$ = function () {
    return this.yaml_1;
  };
  PolymorphismTest.prototype.simpleDataDump_n5kb7l_k$ = function () {
    var poly = new Poly(new Banana('prop'));
    var result = this.yaml_1.encodeToString_68634t_k$(poly);
    println(result);
    var decode = this.yaml_1.decodeFromString_d9fce8_k$(Companion_getInstance_24().serializer_9w0wvi_k$(), result);
    assertEquals$default(poly, decode, null, 4, null);
  };
  function test_fun_izoufj_5() {
    suite('PolymorphismTest', false, test_fun$PolymorphismTest_test_fun_lcit2d);
  }
  function test_fun$PolymorphismTest_test_fun_lcit2d() {
    test('simpleDataDump', false, test_fun$PolymorphismTest_test_fun$simpleDataDump_test_fun_4plif2);
    return Unit_getInstance();
  }
  function test_fun$PolymorphismTest_test_fun$simpleDataDump_test_fun_4plif2() {
    var tmp = new PolymorphismTest();
    tmp.simpleDataDump_n5kb7l_k$();
    return Unit_getInstance();
  }
  function Companion_20() {
    Companion_instance_20 = this;
  }
  Companion_20.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_17();
  };
  var Companion_instance_20;
  function Companion_getInstance_25() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function $serializer_19() {
    $serializer_instance_17 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.YamlDynamicSerializerTest.TestData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('v', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_19.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_19.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    var tmp = PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    var tmp0_arrayOf = [new ContextualSerializer(tmp, null, tmp$ret$2)];
    var tmp$ret$4;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$3;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = tmp0_arrayOf;
    tmp$ret$4 = tmp$ret$3;
    tmp$ret$5 = tmp$ret$4;
    return tmp$ret$5;
  };
  $serializer_19.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      var tmp = PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$();
      var tmp$ret$2;
      // Inline function 'kotlin.arrayOf' call
      var tmp$ret$1;
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp$ret$0;
      // Inline function 'kotlin.js.asDynamic' call
      tmp$ret$0 = [];
      tmp$ret$1 = tmp$ret$0;
      tmp$ret$2 = tmp$ret$1;
      tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ContextualSerializer(tmp, null, tmp$ret$2), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            var tmp_0 = PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$();
            var tmp$ret$5;
            // Inline function 'kotlin.arrayOf' call
            var tmp$ret$4;
            // Inline function 'kotlin.js.unsafeCast' call
            var tmp$ret$3;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = [];
            tmp$ret$4 = tmp$ret$3;
            tmp$ret$5 = tmp$ret$4;

            tmp4_local0 = tmp5_input.decodeSerializableElement_nrfur_k$(tmp0_desc, 0, new ContextualSerializer(tmp_0, null, tmp$ret$5), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestData_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_19.prototype.serialize_7ac1m9_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    var tmp = PrimitiveClasses_getInstance().get_anyClass_x0jl4l_k$();
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = [];
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    tmp1_output.encodeSerializableElement_cw68jm_k$(tmp0_desc, 0, new ContextualSerializer(tmp, null, tmp$ret$2), value.v_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_19.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_7ac1m9_k$(encoder, value instanceof TestData ? value : THROW_CCE());
  };
  var $serializer_instance_17;
  function $serializer_getInstance_17() {
    if ($serializer_instance_17 == null)
      new $serializer_19();
    return $serializer_instance_17;
  }
  function TestData_init_$Init$(seen1, v, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_17().descriptor_1);
    }
    $this.v_1 = v;
    return $this;
  }
  function TestData_init_$Create$(seen1, v, serializationConstructorMarker) {
    return TestData_init_$Init$(seen1, v, serializationConstructorMarker, Object.create(TestData.prototype));
  }
  function TestData(v) {
    Companion_getInstance_25();
    this.v_1 = v;
  }
  TestData.prototype.get_v_1mhr65_k$ = function () {
    return this.v_1;
  };
  TestData.prototype.component1_7eebsc_k$ = function () {
    return this.v_1;
  };
  TestData.prototype.copy_u8zey1_k$ = function (v) {
    return new TestData(v);
  };
  TestData.prototype.copy$default_y52g3z_k$ = function (v, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      v = this.v_1;
    return this.copy_u8zey1_k$(v);
  };
  TestData.prototype.toString = function () {
    return 'TestData(v=' + toString(this.v_1) + ')';
  };
  TestData.prototype.hashCode = function () {
    return hashCode(this.v_1);
  };
  TestData.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestData))
      return false;
    var tmp0_other_with_cast = other instanceof TestData ? other : THROW_CCE();
    if (!equals(this.v_1, tmp0_other_with_cast.v_1))
      return false;
    return true;
  };
  function YamlDynamicSerializerTest() {
  }
  YamlDynamicSerializerTest.prototype.testDynamicAsMultilineList_bmmxs5_k$ = function () {
    var tmp = (new TestData(listOf_0('test, set, tet, tes'))).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_25().serializer_9w0wvi_k$(), 'v: \n- test\n- set\n- tet\n- tes').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  YamlDynamicSerializerTest.prototype.testDynamicAsList_l5kyfg_k$ = function () {
    var tmp = (new TestData(listOf_0('test, set, tet, tes'))).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_25().serializer_9w0wvi_k$(), 'v: [test, set, tet, tes]').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  YamlDynamicSerializerTest.prototype.testDynamicAsMap_au2xbg_k$ = function () {
    var tmp = new TestData(mapOf_0([to('foo', 'v1'), to('fooBar', 'v2')]));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_25().serializer_9w0wvi_k$(), 'v:\n  foo: v1\n  fooBar: v2');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  YamlDynamicSerializerTest.prototype.testDynamicAsTopLevel_79vhcz_k$ = function () {
    var tmp = mapOf(to('v', mapOf_0([to('foo', 'v1'), to('fooBar', 'v2')])));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(YamlDynamicSerializer_getInstance(), 'v:\n  foo: v1\n  fooBar: v2');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  function test_fun_izoufj_6() {
    suite('YamlDynamicSerializerTest', false, test_fun$YamlDynamicSerializerTest_test_fun_e87eq0);
  }
  function test_fun$YamlDynamicSerializerTest_test_fun_e87eq0() {
    test('testDynamicAsMultilineList', false, test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsMultilineList_test_fun_rezj3d);
    test('testDynamicAsList', false, test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsList_test_fun_1ryyvk);
    test('testDynamicAsMap', false, test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsMap_test_fun_6e45d4);
    test('testDynamicAsTopLevel', false, test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsTopLevel_test_fun_smrvgh);
    return Unit_getInstance();
  }
  function test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsMultilineList_test_fun_rezj3d() {
    var tmp = new YamlDynamicSerializerTest();
    tmp.testDynamicAsMultilineList_bmmxs5_k$();
    return Unit_getInstance();
  }
  function test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsList_test_fun_1ryyvk() {
    var tmp = new YamlDynamicSerializerTest();
    tmp.testDynamicAsList_l5kyfg_k$();
    return Unit_getInstance();
  }
  function test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsMap_test_fun_6e45d4() {
    var tmp = new YamlDynamicSerializerTest();
    tmp.testDynamicAsMap_au2xbg_k$();
    return Unit_getInstance();
  }
  function test_fun$YamlDynamicSerializerTest_test_fun$testDynamicAsTopLevel_test_fun_smrvgh() {
    var tmp = new YamlDynamicSerializerTest();
    tmp.testDynamicAsTopLevel_79vhcz_k$();
    return Unit_getInstance();
  }
  function YamlElementDeserializingTest() {
  }
  YamlElementDeserializingTest.prototype.testYamlMapSerializer_j3f5zw_k$ = function () {
    var tmp = Companion_getInstance_1().invoke_a3d5yg_k$(mapOf(to('test', 'sss')));
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_1().serializer_9w0wvi_k$(), 'test: sss');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  YamlElementDeserializingTest.prototype.testYamlListSerializer_yo1yrc_k$ = function () {
    var tmp = yamlListOf(['banana', 'apple', 'raspberry']);
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_2().serializer_9w0wvi_k$(), '[banana, apple, raspberry]');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  YamlElementDeserializingTest.prototype.testYamlLiteralSerializer_zh1ekp_k$ = function () {
    var tmp = new YamlLiteral('banana');
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), 'banana');
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = new YamlLiteral('null');
    var tmp_2 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), '"null"');
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
    var tmp_3 = new YamlLiteral('~');
    var tmp_4 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), '"~"');
    assertEquals$default(tmp_3, tmp_4, null, 4, null);
  };
  YamlElementDeserializingTest.prototype.testYamlLiteralSerializerWhenNull_oew648_k$ = function () {
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$3;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith = getKClass(YamlDecodingException);
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      println(Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), '~'));
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp = tmp$ret$0;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_0 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    tmp$ret$2 = tmp;
    tmp$ret$3 = checkResultIsFailure(tmp3_assertFailsWith, null, tmp$ret$2);
    tmp$ret$4 = tmp$ret$3;
    var tmp$ret$9;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$8;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith_0 = getKClass(YamlDecodingException);
    var tmp$ret$7;
    // Inline function 'kotlin.runCatching' call
    var tmp_1;
    try {
      var tmp$ret$5;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success_0 = Companion_getInstance_0();
      Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_3().serializer_9w0wvi_k$(), 'null');
      var tmp1_success_0 = Unit_getInstance();
      tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_1 = tmp$ret$5;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Error) {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure_0 = Companion_getInstance_0();
        tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_2 = tmp$ret$6;
      } else {
        throw $p;
      }
      tmp_1 = tmp_2;
    }
    tmp$ret$7 = tmp_1;
    tmp$ret$8 = checkResultIsFailure(tmp3_assertFailsWith_0, null, tmp$ret$7);
    tmp$ret$9 = tmp$ret$8;
  };
  YamlElementDeserializingTest.prototype.testYamlNullSerializer_3trb35_k$ = function () {
    var tmp = YamlNull_getInstance();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(YamlNull_getInstance().serializer_9w0wvi_k$(), '~');
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = YamlNull_getInstance();
    var tmp_2 = Default_getInstance().decodeFromString_d9fce8_k$(YamlNull_getInstance().serializer_9w0wvi_k$(), 'null');
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
    var tmp$ret$4;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$3;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith = getKClass(YamlDecodingException);
    var tmp$ret$2;
    // Inline function 'kotlin.runCatching' call
    var tmp_3;
    try {
      var tmp$ret$0;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success = Companion_getInstance_0();
      Default_getInstance().decodeFromString_d9fce8_k$(YamlNull_getInstance().serializer_9w0wvi_k$(), 'foo');
      var tmp1_success = Unit_getInstance();
      tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_3 = tmp$ret$0;
    } catch ($p) {
      var tmp_4;
      if ($p instanceof Error) {
        var tmp$ret$1;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure = Companion_getInstance_0();
        tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_4 = tmp$ret$1;
      } else {
        throw $p;
      }
      tmp_3 = tmp_4;
    }
    tmp$ret$2 = tmp_3;
    tmp$ret$3 = checkResultIsFailure(tmp3_assertFailsWith, null, tmp$ret$2);
    tmp$ret$4 = tmp$ret$3;
    var tmp$ret$9;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp$ret$8;
    // Inline function 'kotlin.test.assertFailsWith' call
    var tmp3_assertFailsWith_0 = getKClass(YamlDecodingException);
    var tmp$ret$7;
    // Inline function 'kotlin.runCatching' call
    var tmp_5;
    try {
      var tmp$ret$5;
      // Inline function 'kotlin.Companion.success' call
      var tmp0_success_0 = Companion_getInstance_0();
      Default_getInstance().decodeFromString_d9fce8_k$(YamlNull_getInstance().serializer_9w0wvi_k$(), '"~"');
      var tmp1_success_0 = Unit_getInstance();
      tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_getInstance());
      tmp_5 = tmp$ret$5;
    } catch ($p) {
      var tmp_6;
      if ($p instanceof Error) {
        var tmp$ret$6;
        // Inline function 'kotlin.Companion.failure' call
        var tmp2_failure_0 = Companion_getInstance_0();
        tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure($p));
        tmp_6 = tmp$ret$6;
      } else {
        throw $p;
      }
      tmp_5 = tmp_6;
    }
    tmp$ret$7 = tmp_5;
    tmp$ret$8 = checkResultIsFailure(tmp3_assertFailsWith_0, null, tmp$ret$7);
    tmp$ret$9 = tmp$ret$8;
  };
  function test_fun_izoufj_7() {
    suite('YamlElementDeserializingTest', false, test_fun$YamlElementDeserializingTest_test_fun_px6xxh);
  }
  function test_fun$YamlElementDeserializingTest_test_fun_px6xxh() {
    test('testYamlMapSerializer', false, test_fun$YamlElementDeserializingTest_test_fun$testYamlMapSerializer_test_fun_9uz58l);
    test('testYamlListSerializer', false, test_fun$YamlElementDeserializingTest_test_fun$testYamlListSerializer_test_fun_8lky47);
    test('testYamlLiteralSerializer', false, test_fun$YamlElementDeserializingTest_test_fun$testYamlLiteralSerializer_test_fun_vgbomw);
    test('testYamlLiteralSerializerWhenNull', false, test_fun$YamlElementDeserializingTest_test_fun$testYamlLiteralSerializerWhenNull_test_fun_d6xavt);
    test('testYamlNullSerializer', false, test_fun$YamlElementDeserializingTest_test_fun$testYamlNullSerializer_test_fun_cvpfi8);
    return Unit_getInstance();
  }
  function test_fun$YamlElementDeserializingTest_test_fun$testYamlMapSerializer_test_fun_9uz58l() {
    var tmp = new YamlElementDeserializingTest();
    tmp.testYamlMapSerializer_j3f5zw_k$();
    return Unit_getInstance();
  }
  function test_fun$YamlElementDeserializingTest_test_fun$testYamlListSerializer_test_fun_8lky47() {
    var tmp = new YamlElementDeserializingTest();
    tmp.testYamlListSerializer_yo1yrc_k$();
    return Unit_getInstance();
  }
  function test_fun$YamlElementDeserializingTest_test_fun$testYamlLiteralSerializer_test_fun_vgbomw() {
    var tmp = new YamlElementDeserializingTest();
    tmp.testYamlLiteralSerializer_zh1ekp_k$();
    return Unit_getInstance();
  }
  function test_fun$YamlElementDeserializingTest_test_fun$testYamlLiteralSerializerWhenNull_test_fun_d6xavt() {
    var tmp = new YamlElementDeserializingTest();
    tmp.testYamlLiteralSerializerWhenNull_oew648_k$();
    return Unit_getInstance();
  }
  function test_fun$YamlElementDeserializingTest_test_fun$testYamlNullSerializer_test_fun_cvpfi8() {
    var tmp = new YamlElementDeserializingTest();
    tmp.testYamlNullSerializer_3trb35_k$();
    return Unit_getInstance();
  }
  function YamlElementTests() {
  }
  YamlElementTests.prototype.testYamlMapFactories_lkcxjo_k$ = function () {
    var tmp$ret$0;
    // Inline function 'kotlin.let' call
    var tmp0_let = Companion_getInstance_1().invoke_wdv9pf_k$(mapOf(to('value', new YamlLiteral('111'))));
    // Inline function 'kotlin.contracts.contract' call
    var tmp = new YamlLiteral('111');
    var tmp_0 = tmp0_let.get_content_h02jrk_k$().get_1mhr4y_k$(new YamlLiteral('value'));
    assertEquals$default(tmp, tmp_0, null, 4, null);
    tmp$ret$0 = Unit_getInstance();
    var tmp$ret$1;
    // Inline function 'kotlin.let' call
    var tmp1_let = Companion_getInstance_1().invoke_a3d5yg_k$(mapOf(to('value', 111)));
    // Inline function 'kotlin.contracts.contract' call
    var tmp_1 = new YamlLiteral('111');
    var tmp_2 = tmp1_let.get_content_h02jrk_k$().get_1mhr4y_k$(new YamlLiteral('value'));
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
    tmp$ret$1 = Unit_getInstance();
    var tmp$ret$2;
    // Inline function 'kotlin.let' call
    var tmp2_let = Companion_getInstance_1().invoke_ha3qha_k$(mapOf(to(new YamlLiteral('value'), 111)));
    // Inline function 'kotlin.contracts.contract' call
    var tmp_3 = new YamlLiteral('111');
    var tmp_4 = tmp2_let.get_content_h02jrk_k$().get_1mhr4y_k$(new YamlLiteral('value'));
    assertEquals$default(tmp_3, tmp_4, null, 4, null);
    tmp$ret$2 = Unit_getInstance();
  };
  function test_fun_izoufj_8() {
    suite('YamlElementTests', false, test_fun$YamlElementTests_test_fun_borqry);
  }
  function test_fun$YamlElementTests_test_fun_borqry() {
    test('testYamlMapFactories', false, test_fun$YamlElementTests_test_fun$testYamlMapFactories_test_fun_uvgq3e);
    return Unit_getInstance();
  }
  function test_fun$YamlElementTests_test_fun$testYamlMapFactories_test_fun_uvgq3e() {
    var tmp = new YamlElementTests();
    tmp.testYamlMapFactories_lkcxjo_k$();
    return Unit_getInstance();
  }
  function Companion_21() {
    Companion_instance_21 = this;
  }
  Companion_21.prototype.serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_18();
  };
  var Companion_instance_21;
  function Companion_getInstance_26() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function $serializer_20() {
    $serializer_instance_18 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('net.mamoe.yamlkt.escaping.DoubleQuotationMultilineTest.TestData', this, 1);
    tmp0_serialDesc.addElement_ifop3j_k$('v', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  $serializer_20.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  $serializer_20.prototype.childSerializers_5ghqw5_k$ = function () {
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    var tmp0_arrayOf = [StringSerializer_getInstance()];
    var tmp$ret$1;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0;
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$0 = tmp0_arrayOf;
    tmp$ret$1 = tmp$ret$0;
    tmp$ret$2 = tmp$ret$1;
    return tmp$ret$2;
  };
  $serializer_20.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.beginStructure_dv3yt3_k$(tmp0_desc);
    if (tmp5_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.decodeElementIndex_nk5a2l_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.decodeStringElement_4is7ib_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.endStructure_e64gd4_k$(tmp0_desc);
    return TestData_init_$Create$_0(tmp3_bitMask0, tmp4_local0, null);
  };
  $serializer_20.prototype.serialize_5hlatl_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_dv3yt3_k$(tmp0_desc);
    tmp1_output.encodeStringElement_pgmbgj_k$(tmp0_desc, 0, value.v_1);
    tmp1_output.endStructure_e64gd4_k$(tmp0_desc);
  };
  $serializer_20.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_5hlatl_k$(encoder, value instanceof TestData_0 ? value : THROW_CCE());
  };
  var $serializer_instance_18;
  function $serializer_getInstance_18() {
    if ($serializer_instance_18 == null)
      new $serializer_20();
    return $serializer_instance_18;
  }
  function TestData_init_$Init$_0(seen1, v, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen1))) {
      throwMissingFieldException(seen1, 1, $serializer_getInstance_18().descriptor_1);
    }
    $this.v_1 = v;
    return $this;
  }
  function TestData_init_$Create$_0(seen1, v, serializationConstructorMarker) {
    return TestData_init_$Init$_0(seen1, v, serializationConstructorMarker, Object.create(TestData_0.prototype));
  }
  function TestData_0(v) {
    Companion_getInstance_26();
    this.v_1 = v;
  }
  TestData_0.prototype.get_v_1mhr65_k$ = function () {
    return this.v_1;
  };
  TestData_0.prototype.component1_7eebsc_k$ = function () {
    return this.v_1;
  };
  TestData_0.prototype.copy_3t26ic_k$ = function (v) {
    return new TestData_0(v);
  };
  TestData_0.prototype.copy$default_q3pzg4_k$ = function (v, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      v = this.v_1;
    return this.copy_3t26ic_k$(v);
  };
  TestData_0.prototype.toString = function () {
    return 'TestData(v=' + this.v_1 + ')';
  };
  TestData_0.prototype.hashCode = function () {
    return getStringHashCode(this.v_1);
  };
  TestData_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TestData_0))
      return false;
    var tmp0_other_with_cast = other instanceof TestData_0 ? other : THROW_CCE();
    if (!(this.v_1 === tmp0_other_with_cast.v_1))
      return false;
    return true;
  };
  function DoubleQuotationMultilineTest() {
  }
  DoubleQuotationMultilineTest.prototype.testEscape_okxrj2_k$ = function () {
    var tmp = (new TestData_0('\n')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "\\n"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testSingleQuoteEscapeSingleQuotes_dgli0h_k$ = function () {
    var tmp = (new TestData_0("Don't")).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), "v: 'Don''t'").toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testDoubleQuoteNoEscapeLineSeparator_grn1s5_k$ = function () {
    var tmp = (new TestData_0('te st')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "te\nst"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testDoubleQuoteLeadingContactLines_7oo21x_k$ = function () {
    var tmp = (new TestData_0('te st')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "te\n st"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testDoubleQuoteLeadingEscapeNewline_h0xhpx_k$ = function () {
    var tmp = (new TestData_0('test')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "te\\\n   st"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testDoubleQuoteBlankLine_xxt61q_k$ = function () {
    var tmp = (new TestData_0('te\nst')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "te\n\n   st"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testDoubleQuoteBlankLine2_h43w4u_k$ = function () {
    var tmp = (new TestData_0('te\n\n\n\n\nst')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "te\n\n\n\n\n\n   st"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testDoubleQuoteBlankLine3_59m8b7_k$ = function () {
    var tmp = (new TestData_0(' st')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "\n   st"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testDoubleQuoteBlankLine4_rnccr8_k$ = function () {
    var tmp = (new TestData_0('\nst')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "\n\n   st"').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testNoEscape_i06zgj_k$ = function () {
    var tmp = (new TestData_0('\\n')).toString();
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: \\n').toString();
    assertEquals$default(tmp, tmp_0, null, 4, null);
    var tmp_1 = (new TestData_0('p\\n')).toString();
    var tmp_2 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: p\\n').toString();
    assertEquals$default(tmp_1, tmp_2, null, 4, null);
    var tmp_3 = (new TestData_0('p\\\\n')).toString();
    var tmp_4 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), "v: 'p\\\\n'").toString();
    assertEquals$default(tmp_3, tmp_4, null, 4, null);
    var tmp_5 = (new TestData_0('\\n')).toString();
    var tmp_6 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), "v: '\\n'").toString();
    assertEquals$default(tmp_5, tmp_6, null, 4, null);
  };
  DoubleQuotationMultilineTest.prototype.testEscapeExample_nqghlm_k$ = function () {
    var tmp = new TestData_0('Several lines of text, containing "double quotes". Escapes (like \\n) work.\nIn addition, newlines can be escaped to prevent them from being converted to a space.\nNewlines can also be added by leaving a blank line. Leading whitespace on lines is ignored.');
    var tmp_0 = Default_getInstance().decodeFromString_d9fce8_k$(Companion_getInstance_26().serializer_9w0wvi_k$(), 'v: "Several lines of text,\ncontaining \\"double quotes\\". Escapes (like \\\\n) work.\\nIn addition,\nnewlines can be esc\\\naped to prevent them from being converted to a space.\n\nNewlines can also be added by leaving a blank line.\n  Leading whitespace on lines is ignored."');
    assertEquals$default(tmp, tmp_0, null, 4, null);
  };
  function test_fun_izoufj_9() {
    suite('DoubleQuotationMultilineTest', false, test_fun$DoubleQuotationMultilineTest_test_fun_ewo4re);
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun_ewo4re() {
    test('testEscape', false, test_fun$DoubleQuotationMultilineTest_test_fun$testEscape_test_fun_ugqb4c);
    test('testSingleQuoteEscapeSingleQuotes', false, test_fun$DoubleQuotationMultilineTest_test_fun$testSingleQuoteEscapeSingleQuotes_test_fun_lr5u1l);
    test('testDoubleQuoteNoEscapeLineSeparator', false, test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteNoEscapeLineSeparator_test_fun_t5r03z);
    test('testDoubleQuoteLeadingContactLines', false, test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteLeadingContactLines_test_fun_k488bf);
    test('testDoubleQuoteLeadingEscapeNewline', false, test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteLeadingEscapeNewline_test_fun_ors79x);
    test('testDoubleQuoteBlankLine', false, test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine_test_fun_cpxah4);
    test('testDoubleQuoteBlankLine2', false, test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine2_test_fun_cqtwew);
    test('testDoubleQuoteBlankLine3', false, test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine3_test_fun_9htxmf);
    test('testDoubleQuoteBlankLine4', false, test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine4_test_fun_68tyty);
    test('testNoEscape', false, test_fun$DoubleQuotationMultilineTest_test_fun$testNoEscape_test_fun_qtlwdv);
    test('testEscapeExample', false, test_fun$DoubleQuotationMultilineTest_test_fun$testEscapeExample_test_fun_pp0xh8);
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testEscape_test_fun_ugqb4c() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testEscape_okxrj2_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testSingleQuoteEscapeSingleQuotes_test_fun_lr5u1l() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testSingleQuoteEscapeSingleQuotes_dgli0h_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteNoEscapeLineSeparator_test_fun_t5r03z() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testDoubleQuoteNoEscapeLineSeparator_grn1s5_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteLeadingContactLines_test_fun_k488bf() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testDoubleQuoteLeadingContactLines_7oo21x_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteLeadingEscapeNewline_test_fun_ors79x() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testDoubleQuoteLeadingEscapeNewline_h0xhpx_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine_test_fun_cpxah4() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testDoubleQuoteBlankLine_xxt61q_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine2_test_fun_cqtwew() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testDoubleQuoteBlankLine2_h43w4u_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine3_test_fun_9htxmf() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testDoubleQuoteBlankLine3_59m8b7_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testDoubleQuoteBlankLine4_test_fun_68tyty() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testDoubleQuoteBlankLine4_rnccr8_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testNoEscape_test_fun_qtlwdv() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testNoEscape_i06zgj_k$();
    return Unit_getInstance();
  }
  function test_fun$DoubleQuotationMultilineTest_test_fun$testEscapeExample_test_fun_pp0xh8() {
    var tmp = new DoubleQuotationMultilineTest();
    tmp.testEscapeExample_nqghlm_k$();
    return Unit_getInstance();
  }
  function TDsl() {
  }
  TDsl.prototype.equals = function (other) {
    if (!(other instanceof TDsl))
      return false;
    var tmp0_other_with_cast = other instanceof TDsl ? other : THROW_CCE();
    return true;
  };
  TDsl.prototype.hashCode = function () {
    return 0;
  };
  TDsl.prototype.toString = function () {
    return '@net.mamoe.yamlkt.escaping.SingleQuotationMultilineTest.TDsl()';
  };
  function from(_this__u8e3s4, $this, actual) {
    var tmp = toString_0(Default_getInstance().decodeAnyFromString_g6gmi0_k$(trimIndent(actual)));
    assertEquals$default(_this__u8e3s4, tmp, null, 4, null);
  }
  function SingleQuotationMultilineTest() {
  }
  SingleQuotationMultilineTest.prototype.newline_gne6yl_k$ = function () {
    from('\\n', this, "'\\n'");
  };
  SingleQuotationMultilineTest.prototype.testEscape_okxrj2_k$ = function () {
    from('\\n', this, "'\\n'");
  };
  SingleQuotationMultilineTest.prototype.example_3nnqqh_k$ = function () {
    from("Several lines of text, containing 'single quotes'. Escapes (like \\n) don't do anything.\nNewlines can be added by leaving a blank line. Leading whitespace on lines is ignored.", this, "'Several lines of text,\ncontaining ''single quotes''. Escapes (like \\n) don''t do anything.\n\nNewlines can be added by leaving a blank line.\n  Leading whitespace on lines is ignored.'");
  };
  function test_fun_izoufj_10() {
    suite('SingleQuotationMultilineTest', false, test_fun$SingleQuotationMultilineTest_test_fun_1boekj);
  }
  function test_fun$SingleQuotationMultilineTest_test_fun_1boekj() {
    test('newline', false, test_fun$SingleQuotationMultilineTest_test_fun$newline_test_fun_2spk5e);
    test('testEscape', false, test_fun$SingleQuotationMultilineTest_test_fun$testEscape_test_fun_8tzm1p);
    test('example', false, test_fun$SingleQuotationMultilineTest_test_fun$example_test_fun_j171yg);
    return Unit_getInstance();
  }
  function test_fun$SingleQuotationMultilineTest_test_fun$newline_test_fun_2spk5e() {
    var tmp = new SingleQuotationMultilineTest();
    tmp.newline_gne6yl_k$();
    return Unit_getInstance();
  }
  function test_fun$SingleQuotationMultilineTest_test_fun$testEscape_test_fun_8tzm1p() {
    var tmp = new SingleQuotationMultilineTest();
    tmp.testEscape_okxrj2_k$();
    return Unit_getInstance();
  }
  function test_fun$SingleQuotationMultilineTest_test_fun$example_test_fun_j171yg() {
    var tmp = new SingleQuotationMultilineTest();
    tmp.example_3nnqqh_k$();
    return Unit_getInstance();
  }
  function TDsl_0() {
  }
  TDsl_0.prototype.equals = function (other) {
    if (!(other instanceof TDsl_0))
      return false;
    var tmp0_other_with_cast = other instanceof TDsl_0 ? other : THROW_CCE();
    return true;
  };
  TDsl_0.prototype.hashCode = function () {
    return 0;
  };
  TDsl_0.prototype.toString = function () {
    return '@net.mamoe.yamlkt.escaping.UnquotedMultilineTest.TDsl()';
  };
  function from_0(_this__u8e3s4, $this, actual) {
    var tmp = toString_0(Default_getInstance().decodeAnyFromString_g6gmi0_k$(trimIndent(actual)));
    assertEquals$default(_this__u8e3s4, tmp, null, 4, null);
  }
  function UnquotedMultilineTest() {
  }
  UnquotedMultilineTest.prototype.example_3nnqqh_k$ = function () {
    from_0("Several lines of text, with some \"quotes\" of various 'types'. Escapes (like \\n) don't do anything.\nNewlines can be added by leaving a blank line. Additional leading whitespace is ignored.", this, "Several lines of text,\n  with some \"quotes\" of various 'types'.\n  Escapes (like \\n) don't do anything.\n  \n  Newlines can be added by leaving a blank line.\n    Additional leading whitespace is ignored.");
  };
  function test_fun_izoufj_11() {
    suite('UnquotedMultilineTest', false, test_fun$UnquotedMultilineTest_test_fun_6ovnru);
  }
  function test_fun$UnquotedMultilineTest_test_fun_6ovnru() {
    test('example', false, test_fun$UnquotedMultilineTest_test_fun$example_test_fun_t7wd7p);
    return Unit_getInstance();
  }
  function test_fun$UnquotedMultilineTest_test_fun$example_test_fun_t7wd7p() {
    var tmp = new UnquotedMultilineTest();
    tmp.example_3nnqqh_k$();
    return Unit_getInstance();
  }
  function get_currentPlatform() {
    init_properties_Platform_kt_l8up1j();
    return currentPlatform;
  }
  var currentPlatform;
  function isLegacyBackend() {
    init_properties_Platform_kt_l8up1j();
    var tmp$ret$0;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_unsafeCast = eval('(typeof Kotlin != "undefined" && typeof Kotlin.kotlin != "undefined")');
    tmp$ret$0 = tmp0_unsafeCast;
    return tmp$ret$0;
  }
  var properties_initialized_Platform_kt_qdcgvf;
  function init_properties_Platform_kt_l8up1j() {
    if (properties_initialized_Platform_kt_qdcgvf) {
    } else {
      properties_initialized_Platform_kt_qdcgvf = true;
      currentPlatform = isLegacyBackend() ? Platform_JS_LEGACY_getInstance() : Platform_JS_IR_getInstance();
    }
  }
  //region block: post-declaration
  $serializer.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_0.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_1.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_2.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_3.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_4.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_5.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_6.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_7.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_8.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_9.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_10.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_13.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_14.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_15.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_16.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_17.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_18.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_19.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  $serializer_20.prototype.typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: tests
  (function () {
    suite('net.mamoe.yamlkt', false, function () {
      test_fun_izoufj();
      test_fun_izoufj_0();
      test_fun_izoufj_1();
      test_fun_izoufj_2();
      test_fun_izoufj_3();
      test_fun_izoufj_4();
      test_fun_izoufj_5();
      test_fun_izoufj_6();
      test_fun_izoufj_7();
      test_fun_izoufj_8();
    });
    suite('net.mamoe.yamlkt.escaping', false, function () {
      test_fun_izoufj_9();
      test_fun_izoufj_10();
      test_fun_izoufj_11();
    });
  }());
  //endregion
  return _;
}));
