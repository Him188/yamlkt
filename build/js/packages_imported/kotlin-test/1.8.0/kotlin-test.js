(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-test'.");
    }
    root['kotlin-test'] = factory(typeof this['kotlin-test'] === 'undefined' ? {} : this['kotlin-test'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toString = Kotlin.toString;
  var getCallableRef = Kotlin.getCallableRef;
  var equals = Kotlin.equals;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var ensureNotNull = Kotlin.ensureNotNull;
  var contains = Kotlin.kotlin.collections.contains_2ws7j4$;
  var contains_0 = Kotlin.kotlin.sequences.contains_9h40j2$;
  var contains_1 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var contentToString = Kotlin.arrayToString;
  var contains_2 = Kotlin.kotlin.collections.contains_jlnu8a$;
  var contains_3 = Kotlin.kotlin.collections.contains_s7ir3o$;
  var contains_4 = Kotlin.kotlin.collections.contains_c03ot6$;
  var contains_5 = Kotlin.kotlin.collections.contains_uxdaoa$;
  var contains_6 = Kotlin.kotlin.collections.contains_yax8s4$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var unboxChar = Kotlin.unboxChar;
  var contains_7 = Kotlin.kotlin.collections.contains_o2f9me$;
  var contentToString_0 = Kotlin.kotlin.collections.contentToString_wobjzt$;
  var contentToString_1 = Kotlin.kotlin.collections.contentToString_f9w13p$;
  var contentToString_2 = Kotlin.kotlin.collections.contentToString_a77i2m$;
  var contentToString_3 = Kotlin.kotlin.collections.contentToString_4zn9c5$;
  var contains_8 = Kotlin.kotlin.text.contains_sgbm27$;
  var contains_9 = Kotlin.kotlin.text.contains_li3zpu$;
  var contentEquals = Kotlin.arrayEquals;
  var contentEquals_0 = Kotlin.kotlin.collections.contentEquals_xfnp9r$;
  var contentEquals_1 = Kotlin.kotlin.collections.contentEquals_euueqt$;
  var contentEquals_2 = Kotlin.kotlin.collections.contentEquals_cpmkr$;
  var contentEquals_3 = Kotlin.kotlin.collections.contentEquals_5jhtf3$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init;
  var AssertionError_init_0 = Kotlin.kotlin.AssertionError_init_pdl1vj$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var AssertionError_init_1 = Kotlin.kotlin.AssertionError;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var toBits = Kotlin.doubleToBits;
  var toBits_0 = Kotlin.floatToBits;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var JsMath = Math;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Annotation = Kotlin.kotlin.Annotation;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Throwable = Error;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  function assertIterableContentEquals(typeName, message, expected, actual, iterator) {
    if (checkReferenceAndNullEquality(typeName, message, expected, actual, getCallableRef('toString', function ($receiver) {
      return toString($receiver);
    })))
      return;
    var index = 0;
    var expectedIt = iterator(expected);
    var actualIt = iterator(actual);
    while (expectedIt.hasNext() && actualIt.hasNext()) {
      var expectedElement = expectedIt.next();
      var actualElement = actualIt.next();
      if (!equals(expectedElement, actualElement)) {
        fail(messagePrefix(message) + elementsDifferMessage(typeName, index, expectedElement, actualElement));
      }
      index = index + 1 | 0;
    }
    if (expectedIt.hasNext()) {
      if (!!actualIt.hasNext()) {
        var message_0 = 'Check failed.';
        throw IllegalStateException_init(message_0.toString());
      }
      fail(messagePrefix(message) + (typeName + ' lengths differ. Expected length is bigger than ' + index + ', actual length is ' + index + '.'));
    }
    if (actualIt.hasNext()) {
      if (!!expectedIt.hasNext()) {
        var message_1 = 'Check failed.';
        throw IllegalStateException_init(message_1.toString());
      }
      fail(messagePrefix(message) + (typeName + ' lengths differ. Expected length is ' + index + ', actual length is bigger than ' + index + '.'));
    }
  }
  function assertArrayContentEquals(message, expected, actual, size, get, contentToString, contentEquals) {
    if (contentEquals(expected, actual))
      return;
    var typeName = 'Array';
    if (checkReferenceAndNullEquality(typeName, message, expected, actual, contentToString))
      return;
    var expectedSize = size(expected);
    var actualSize = size(actual);
    if (expectedSize !== actualSize) {
      var sizesDifferMessage = typeName + ' sizes differ. Expected size is ' + expectedSize + ', actual size is ' + actualSize + '.';
      var toString = 'Expected <' + contentToString(expected) + '>, actual <' + contentToString(actual) + '>.';
      fail(messagePrefix(message) + sizesDifferMessage + '\n' + toString);
    }
    for (var index = 0; index < expectedSize; index++) {
      var expectedElement = get(expected, index);
      var actualElement = get(actual, index);
      if (!equals(expectedElement, actualElement)) {
        var elementsDifferMessage_0 = elementsDifferMessage(typeName, index, expectedElement, actualElement);
        var toString_0 = 'Expected <' + contentToString(expected) + '>, actual <' + contentToString(actual) + '>.';
        fail(messagePrefix(message) + elementsDifferMessage_0 + '\n' + toString_0);
      }
    }
  }
  function checkReferenceAndNullEquality(typeName, message, expected, actual, contentToString) {
    if (expected === actual) {
      return true;
    }
    if (expected == null) {
      fail(messagePrefix(message) + ('Expected <null> ' + typeName + ', actual <' + contentToString(actual) + '>.'));
    }
    if (actual == null) {
      fail(messagePrefix(message) + ('Expected non-null ' + typeName + ' <' + contentToString(expected) + '>, actual <null>.'));
    }
    return false;
  }
  function elementsDifferMessage(typeName, index, expectedElement, actualElement) {
    return typeName + ' elements differ at index ' + index + '. Expected element <' + toString(expectedElement) + '>, actual element <' + toString(actualElement) + '>.';
  }
  function assertArrayContains$lambda(closure$message, closure$array, closure$contentToString, closure$element) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the array to contain the element.' + '\n' + 'Array <' + closure$contentToString(closure$array) + '>, element <' + toString(closure$element) + '>.');
    };
  }
  function assertRangeContains$lambda(closure$message, closure$range, closure$value) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the range <' + closure$range + '> to contain the value <' + toString(closure$value) + '>.');
    };
  }
  function get_asserter() {
    return _asserter != null ? _asserter : lookupAsserter();
  }
  var _asserter;
  var assertTrue = defineInlineFunction('kotlin-test.kotlin.test.assertTrue_i7pyzi$', wrapFunction(function () {
    var assertTrue = _.kotlin.test.assertTrue_ifx8ge$;
    return function (message, block) {
      if (message === void 0)
        message = null;
      assertTrue(block(), message);
    };
  }));
  function assertTrue_0(actual, message) {
    if (message === void 0)
      message = null;
    return get_asserter().assertTrue_4mavae$(message != null ? message : 'Expected value to be true.', actual);
  }
  var assertFalse = defineInlineFunction('kotlin-test.kotlin.test.assertFalse_i7pyzi$', wrapFunction(function () {
    var assertFalse = _.kotlin.test.assertFalse_ifx8ge$;
    return function (message, block) {
      if (message === void 0)
        message = null;
      assertFalse(block(), message);
    };
  }));
  function assertFalse_0(actual, message) {
    if (message === void 0)
      message = null;
    return get_asserter().assertTrue_4mavae$(message != null ? message : 'Expected value to be false.', !actual);
  }
  function assertEquals(expected, actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertEquals_lzc6tz$(message, expected, actual);
  }
  function assertEquals_0(expected, actual, absoluteTolerance, message) {
    if (message === void 0)
      message = null;
    checkDoublesAreEqual(expected, actual, absoluteTolerance, message);
  }
  function assertEquals_1(expected, actual, absoluteTolerance, message) {
    if (message === void 0)
      message = null;
    checkFloatsAreEqual(expected, actual, absoluteTolerance, message);
  }
  function assertNotEquals(illegal, actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertNotEquals_lzc6tz$(message, illegal, actual);
  }
  function assertNotEquals_0(illegal, actual, absoluteTolerance, message) {
    if (message === void 0)
      message = null;
    checkDoublesAreEqual(illegal, actual, absoluteTolerance, message, true);
  }
  function assertNotEquals_1(illegal, actual, absoluteTolerance, message) {
    if (message === void 0)
      message = null;
    checkFloatsAreEqual(illegal, actual, absoluteTolerance, message, true);
  }
  function assertSame(expected, actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertSame_lzc6tz$(message, expected, actual);
  }
  function assertNotSame(illegal, actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertNotSame_lzc6tz$(message, illegal, actual);
  }
  var assertIs = defineInlineFunction('kotlin-test.kotlin.test.assertIs_5ekknr$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var assertIsOfType = _.kotlin.test.assertIsOfType_5l1t6h$;
    var throwCCE = Kotlin.throwCCE;
    return function (T_0, isT, value, message) {
      if (message === void 0)
        message = null;
      var tmp$;
      assertIsOfType(value, getReifiedTypeParameterKType(T_0), isT(value), message);
      return isT(tmp$ = value) ? tmp$ : throwCCE();
    };
  }));
  function assertIsOfType$lambda(closure$message, closure$type, closure$value) {
    return function () {
      return messagePrefix(closure$message) + ('Expected value to be of type <' + closure$type + '>, actual <' + toString(closure$value != null ? Kotlin.getKClassFromExpression(closure$value) : null) + '>.');
    };
  }
  function assertIsOfType(value, type, result, message) {
    get_asserter().assertTrue_o10pc4$(assertIsOfType$lambda(message, type, value), result);
  }
  var assertIsNot = defineInlineFunction('kotlin-test.kotlin.test.assertIsNot_5ekknr$', wrapFunction(function () {
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var assertIsNotOfType = _.kotlin.test.assertIsNotOfType_5l1t6h$;
    return function (T_0, isT, value, message) {
      if (message === void 0)
        message = null;
      assertIsNotOfType(value, getReifiedTypeParameterKType(T_0), !isT(value), message);
    };
  }));
  function assertIsNotOfType$lambda(closure$message, closure$type) {
    return function () {
      return messagePrefix(closure$message) + ('Expected value to not be of type <' + closure$type + '>.');
    };
  }
  function assertIsNotOfType(value, type, result, message) {
    get_asserter().assertTrue_o10pc4$(assertIsNotOfType$lambda(message, type), result);
  }
  function assertNotNull(actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertNotNull_67rc9h$(message, actual);
    return ensureNotNull(actual);
  }
  var assertNotNull_0 = defineInlineFunction('kotlin-test.kotlin.test.assertNotNull_k6pbc4$', wrapFunction(function () {
    var assertNotNull = _.kotlin.test.assertNotNull_tkjle6$;
    return function (actual, message, block) {
      if (message === void 0)
        message = null;
      block(assertNotNull(actual, message));
    };
  }));
  function assertNull(actual, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertNull_67rc9h$(message, actual);
  }
  function assertContains$lambda(closure$message, closure$iterable, closure$element) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the collection to contain the element.' + '\n' + 'Collection <' + closure$iterable + '>, element <' + closure$element + '>.');
    };
  }
  function assertContains(iterable, element, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertContains$lambda(message, iterable, element), contains(iterable, element));
  }
  function assertContains$lambda_0(closure$message, closure$sequence, closure$element) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the sequence to contain the element.' + '\n' + 'Sequence <' + closure$sequence + '>, element <' + closure$element + '>.');
    };
  }
  function assertContains_0(sequence, element, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertContains$lambda_0(message, sequence, element), contains_0(sequence, element));
  }
  function assertContains_1(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString_0 = getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString_0, element), contains_1(array, element));
  }
  function assertContains_2(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString_0 = getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString_0, element), contains_2(array, element));
  }
  function assertContains_3(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString_0 = getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString_0, element), contains_3(array, element));
  }
  function assertContains_4(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString_0 = getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString_0, element), contains_4(array, element));
  }
  function assertContains_5(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString_0 = getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString_0, element), contains_5(array, element));
  }
  function assertContains_6(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString_0 = getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString_0, element), contains_6(array, element));
  }
  function assertContains_7(array, element, message) {
    if (message === void 0)
      message = null;
    var element_0 = toBoxedChar(element);
    var contentToString_0 = getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString_0, element_0), contains_7(array, unboxChar(element_0)));
  }
  function assertContains_8(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString = getCallableRef('contentToString', function ($receiver) {
      return contentToString_0($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString, element), array.contains_11rb$(element));
  }
  function assertContains_9(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString = getCallableRef('contentToString', function ($receiver) {
      return contentToString_1($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString, element), array.contains_11rb$(element));
  }
  function assertContains_10(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString = getCallableRef('contentToString', function ($receiver) {
      return contentToString_2($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString, element), array.contains_11rb$(element));
  }
  function assertContains_11(array, element, message) {
    if (message === void 0)
      message = null;
    var contentToString = getCallableRef('contentToString', function ($receiver) {
      return contentToString_3($receiver);
    });
    get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString, element), array.contains_11rb$(element));
  }
  var assertArrayContains = wrapFunction(function () {
    function assertArrayContains$lambda(closure$message, closure$array, closure$contentToString, closure$element) {
      return function () {
        return messagePrefix(closure$message) + ('Expected the array to contain the element.' + '\n' + 'Array <' + closure$contentToString(closure$array) + '>, element <' + toString(closure$element) + '>.');
      };
    }
    return function (array, element, message, contains, contentToString) {
      if (message === void 0)
        message = null;
      get_asserter().assertTrue_o10pc4$(assertArrayContains$lambda(message, array, contentToString, element), contains(array, element));
    };
  });
  function assertContains_12(range, value, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value), range.contains_mef7kx$(value));
  }
  function assertContains_13(range, value, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value), range.contains_mef7kx$(value));
  }
  function assertContains_14(range, value, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value), range.contains_mef7kx$(value));
  }
  function assertContains_15(range, value, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value), range.contains_mef7kx$(value));
  }
  function assertContains_16(range, value, message) {
    if (message === void 0)
      message = null;
    var value_0 = toBoxedChar(value);
    get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value_0), range.contains_mef7kx$(unboxChar(value_0)));
  }
  function assertContains_17(range, value, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value), range.contains_mef7kx$(value));
  }
  function assertContains_18(range, value, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value), range.contains_mef7kx$(value));
  }
  var assertRangeContains = wrapFunction(function () {
    function assertRangeContains$lambda(closure$message, closure$range, closure$value) {
      return function () {
        return messagePrefix(closure$message) + ('Expected the range <' + closure$range + '> to contain the value <' + toString(closure$value) + '>.');
      };
    }
    return function (range, value, message, contains) {
      if (message === void 0)
        message = null;
      get_asserter().assertTrue_o10pc4$(assertRangeContains$lambda(message, range, value), contains(range, value));
    };
  });
  function assertContains$lambda_1(closure$message, closure$map, closure$key) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the map to contain the key.' + '\n' + 'Map <' + closure$map + '>, key <' + closure$key + '>.');
    };
  }
  function assertContains_19(map, key, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertContains$lambda_1(message, map, key), map.containsKey_11rb$(key));
  }
  function assertContains$lambda_2(closure$message, closure$charSequence, closure$char, closure$ignoreCase) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the char sequence to contain the char.' + '\n' + 'CharSequence <' + closure$charSequence + '>, char <' + String.fromCharCode(closure$char) + '>, ignoreCase <' + closure$ignoreCase + '>.');
    };
  }
  function assertContains_20(charSequence, char, ignoreCase, message) {
    if (ignoreCase === void 0)
      ignoreCase = false;
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertContains$lambda_2(message, charSequence, char, ignoreCase), contains_8(charSequence, char, ignoreCase));
  }
  function assertContains$lambda_3(closure$message, closure$charSequence, closure$other, closure$ignoreCase) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the char sequence to contain the substring.' + '\n' + 'CharSequence <' + closure$charSequence + '>, substring <' + closure$other + '>, ignoreCase <' + closure$ignoreCase + '>.');
    };
  }
  function assertContains_21(charSequence, other, ignoreCase, message) {
    if (ignoreCase === void 0)
      ignoreCase = false;
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertContains$lambda_3(message, charSequence, other, ignoreCase), contains_9(charSequence, other, ignoreCase));
  }
  function assertContains$lambda_4(closure$message, closure$charSequence, closure$regex) {
    return function () {
      return messagePrefix(closure$message) + ('Expected the char sequence to contain the regular expression.' + '\n' + 'CharSequence <' + closure$charSequence + '>, regex <' + closure$regex + '>.');
    };
  }
  function assertContains_22(charSequence, regex, message) {
    if (message === void 0)
      message = null;
    get_asserter().assertTrue_o10pc4$(assertContains$lambda_4(message, charSequence, regex), regex.containsMatchIn_6bul2c$(charSequence));
  }
  function assertContentEquals(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertIterableContentEquals('Iterable', message, expected, actual, getCallableRef('iterator', function ($receiver) {
      return $receiver.iterator();
    }));
  }
  function assertContentEquals_0(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertContentEquals(expected, actual != null ? actual : null, message);
  }
  function assertContentEquals_1(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertIterableContentEquals('Sequence', message, expected, actual, getCallableRef('iterator', function ($receiver) {
      return $receiver.iterator();
    }));
  }
  function assertContentEquals$lambda(it) {
    return it.length;
  }
  function assertContentEquals_2(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_0(it) {
    return it.length;
  }
  function assertContentEquals_3(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_0, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_1(it) {
    return it.length;
  }
  function assertContentEquals_4(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_1, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_2(it) {
    return it.length;
  }
  function assertContentEquals_5(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_2, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_3(it) {
    return it.length;
  }
  function assertContentEquals_6(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_3, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_4(it) {
    return it.length;
  }
  function assertContentEquals_7(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_4, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_5(it) {
    return it.length;
  }
  function assertContentEquals_8(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_5, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_6(it) {
    return it.length;
  }
  function assertContentEquals_9(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_6, getCallableRef('get', function ($receiver, p1) {
      return $receiver[p1];
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_7(it) {
    return it.length;
  }
  function assertContentEquals_10(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_7, getCallableRef('get', function ($receiver, p1) {
      return toBoxedChar($receiver[p1]);
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_8(it) {
    return it.size;
  }
  function assertContentEquals_11(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_8, getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_za3lpa$(p1);
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString_0($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals_0($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_9(it) {
    return it.size;
  }
  function assertContentEquals_12(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_9, getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_za3lpa$(p1);
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString_1($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals_1($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_10(it) {
    return it.size;
  }
  function assertContentEquals_13(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_10, getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_za3lpa$(p1);
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString_2($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals_2($receiver, p1);
    }));
  }
  function assertContentEquals$lambda_11(it) {
    return it.size;
  }
  function assertContentEquals_14(expected, actual, message) {
    if (message === void 0)
      message = null;
    assertArrayContentEquals(message, expected, actual, assertContentEquals$lambda_11, getCallableRef('get', function ($receiver, p1) {
      return $receiver.get_za3lpa$(p1);
    }), getCallableRef('contentToString', function ($receiver) {
      return contentToString_3($receiver);
    }), getCallableRef('contentEquals', function ($receiver, p1) {
      return contentEquals_3($receiver, p1);
    }));
  }
  function fail(message) {
    if (message === void 0)
      message = null;
    get_asserter().fail_pdl1vj$(message);
  }
  function fail_0(message, cause) {
    if (message === void 0)
      message = null;
    if (cause === void 0)
      cause = null;
    get_asserter().fail_wspj0f$(message, cause);
  }
  var expect = defineInlineFunction('kotlin-test.kotlin.test.expect_e96eyq$', wrapFunction(function () {
    var assertEquals = _.kotlin.test.assertEquals_3m0tl5$;
    return function (expected, block) {
      assertEquals(expected, block());
    };
  }));
  var expect_0 = defineInlineFunction('kotlin-test.kotlin.test.expect_rr7wld$', wrapFunction(function () {
    var assertEquals = _.kotlin.test.assertEquals_3m0tl5$;
    return function (expected, message, block) {
      assertEquals(expected, block(), message);
    };
  }));
  var assertFails = defineInlineFunction('kotlin-test.kotlin.test.assertFails_o14v8n$', wrapFunction(function () {
    var checkResultIsFailure = _.kotlin.test.checkResultIsFailure_8v9b5x$;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function (block) {
      var tmp$;
      try {
        tmp$ = new Result(block());
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$ = new Result(createFailure(e));
        } else
          throw e;
      }
      return checkResultIsFailure(null, tmp$);
    };
  }));
  var assertFails_0 = defineInlineFunction('kotlin-test.kotlin.test.assertFails_9bodf6$', wrapFunction(function () {
    var checkResultIsFailure = _.kotlin.test.checkResultIsFailure_8v9b5x$;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function (message, block) {
      var tmp$;
      try {
        tmp$ = new Result(block());
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$ = new Result(createFailure(e));
        } else
          throw e;
      }
      return checkResultIsFailure(message, tmp$);
    };
  }));
  function checkResultIsFailure(message, blockResult) {
    var tmp$, tmp$_0;
    var exception = blockResult.exceptionOrNull();
    if (exception == null) {
      (tmp$ = blockResult.value) == null || Kotlin.isType(tmp$, Any) || throwCCE();
      tmp$_0 = get_asserter().fail_pdl1vj$(messagePrefix(message) + 'Expected an exception to be thrown, but was completed successfully.');
    } else {
      return exception;
    }
  }
  var assertFailsWith = defineInlineFunction('kotlin-test.kotlin.test.assertFailsWith_cnau6l$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var checkResultIsFailure = _.kotlin.test.checkResultIsFailure_3e4uyv$;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function (T_0, isT, message, block) {
      if (message === void 0)
        message = null;
      var exceptionClass = getKClass(T_0);
      var tmp$;
      try {
        tmp$ = new Result(block());
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$ = new Result(createFailure(e));
        } else
          throw e;
      }
      return checkResultIsFailure(exceptionClass, message, tmp$);
    };
  }));
  var assertFailsWith_0 = defineInlineFunction('kotlin-test.kotlin.test.assertFailsWith_jbbixx$', wrapFunction(function () {
    var checkResultIsFailure = _.kotlin.test.checkResultIsFailure_3e4uyv$;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function (exceptionClass, block) {
      var tmp$;
      try {
        tmp$ = new Result(block());
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$ = new Result(createFailure(e));
        } else
          throw e;
      }
      return checkResultIsFailure(exceptionClass, null, tmp$);
    };
  }));
  var assertFailsWith_1 = defineInlineFunction('kotlin-test.kotlin.test.assertFailsWith_l9oqa2$', wrapFunction(function () {
    var checkResultIsFailure = _.kotlin.test.checkResultIsFailure_3e4uyv$;
    var Result = Kotlin.kotlin.Result;
    var Throwable = Error;
    var createFailure = Kotlin.kotlin.createFailure_tcv7n7$;
    return function (exceptionClass, message, block) {
      var tmp$;
      try {
        tmp$ = new Result(block());
      } catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          tmp$ = new Result(createFailure(e));
        } else
          throw e;
      }
      return checkResultIsFailure(exceptionClass, message, tmp$);
    };
  }));
  function Asserter() {
  }
  Asserter.prototype.assertTrue_o10pc4$ = function (lazyMessage, actual) {
    if (!actual) {
      this.fail_pdl1vj$(lazyMessage());
    }
  };
  function Asserter$assertTrue$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  Asserter.prototype.assertTrue_4mavae$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertTrue$lambda(message), actual);
  };
  function Asserter$assertEquals$lambda(closure$message, closure$expected, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected <' + toString(closure$expected) + '>, actual <' + toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertEquals_lzc6tz$ = function (message, expected, actual) {
    this.assertTrue_o10pc4$(Asserter$assertEquals$lambda(message, expected, actual), equals(actual, expected));
  };
  function Asserter$assertNotEquals$lambda(closure$message, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Illegal value: <' + toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertNotEquals_lzc6tz$ = function (message, illegal, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNotEquals$lambda(message, actual), !equals(actual, illegal));
  };
  function Asserter$assertSame$lambda(closure$message, closure$expected, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected <' + toString(closure$expected) + '>, actual <' + toString(closure$actual) + '> is not same.');
    };
  }
  Asserter.prototype.assertSame_lzc6tz$ = function (message, expected, actual) {
    this.assertTrue_o10pc4$(Asserter$assertSame$lambda(message, expected, actual), actual === expected);
  };
  function Asserter$assertNotSame$lambda(closure$message, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected not same as <' + toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertNotSame_lzc6tz$ = function (message, illegal, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNotSame$lambda(message, actual), actual !== illegal);
  };
  function Asserter$assertNull$lambda(closure$message, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected value to be null, but was: <' + toString(closure$actual) + '>.');
    };
  }
  Asserter.prototype.assertNull_67rc9h$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNull$lambda(message, actual), actual == null);
  };
  function Asserter$assertNotNull$lambda(closure$message) {
    return function () {
      return messagePrefix(closure$message) + 'Expected value to be not null.';
    };
  }
  Asserter.prototype.assertNotNull_67rc9h$ = function (message, actual) {
    this.assertTrue_o10pc4$(Asserter$assertNotNull$lambda(message), actual != null);
  };
  Asserter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Asserter',
    interfaces: []
  };
  function AsserterContributor() {
  }
  AsserterContributor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsserterContributor',
    interfaces: []
  };
  function DefaultAsserter() {
    DefaultAsserter_instance = this;
  }
  DefaultAsserter.prototype.fail_pdl1vj$ = function (message) {
    if (message == null)
      throw AssertionError_init();
    else
      throw AssertionError_init_0(message);
  };
  DefaultAsserter.prototype.fail_wspj0f$ = function (message, cause) {
    throw new AssertionError_init_1(message, cause);
  };
  DefaultAsserter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultAsserter',
    interfaces: [Asserter]
  };
  var DefaultAsserter_instance = null;
  function DefaultAsserter_getInstance() {
    if (DefaultAsserter_instance === null) {
      new DefaultAsserter();
    }
    return DefaultAsserter_instance;
  }
  function messagePrefix(message) {
    return message == null ? '' : toString(message) + '. ';
  }
  function overrideAsserter(value) {
    var $receiver = _asserter;
    _asserter = value;
    return $receiver;
  }
  function checkAbsoluteTolerance(absoluteTolerance) {
    if (!(absoluteTolerance >= 0.0)) {
      var message = 'Illegal negative absolute tolerance <' + absoluteTolerance + '>.';
      throw IllegalArgumentException_init(message.toString());
    }
    if (!!isNaN_0(absoluteTolerance)) {
      var message_0 = 'Illegal NaN absolute tolerance <' + absoluteTolerance + '>.';
      throw IllegalArgumentException_init(message_0.toString());
    }
  }
  function checkDoublesAreEqual$lambda(closure$message, closure$expected, closure$absoluteTolerance, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected <' + closure$expected + '> with absolute tolerance <' + closure$absoluteTolerance + '>, actual <' + closure$actual + '>.');
    };
  }
  function checkDoublesAreEqual(expected, actual, absoluteTolerance, message, shouldFail) {
    if (shouldFail === void 0)
      shouldFail = false;
    checkAbsoluteTolerance(absoluteTolerance);
    var tmp$ = equals(toBits(expected), toBits(actual));
    if (!tmp$) {
      var x = expected - actual;
      tmp$ = JsMath.abs(x) <= absoluteTolerance;
    }
    var equal = tmp$;
    get_asserter().assertTrue_o10pc4$(checkDoublesAreEqual$lambda(message, expected, absoluteTolerance, actual), equal !== shouldFail);
  }
  function checkFloatsAreEqual$lambda(closure$message, closure$expected, closure$absoluteTolerance, closure$actual) {
    return function () {
      return messagePrefix(closure$message) + ('Expected <' + closure$expected + '> with absolute tolerance <' + closure$absoluteTolerance + '>, actual <' + closure$actual + '>.');
    };
  }
  function checkFloatsAreEqual(expected, actual, absoluteTolerance, message, shouldFail) {
    if (shouldFail === void 0)
      shouldFail = false;
    checkAbsoluteTolerance(absoluteTolerance);
    var tmp$ = toBits_0(expected) === toBits_0(actual);
    if (!tmp$) {
      var x = expected - actual;
      tmp$ = JsMath.abs(x) <= absoluteTolerance;
    }
    var equal = tmp$;
    get_asserter().assertTrue_o10pc4$(checkFloatsAreEqual$lambda(message, expected, absoluteTolerance, actual), equal !== shouldFail);
  }
  function setAdapter(adapter) {
    setAdapter_0(adapter);
  }
  function Test() {
  }
  Test.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Test',
    interfaces: [Annotation]
  };
  function Ignore() {
  }
  Ignore.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ignore',
    interfaces: [Annotation]
  };
  function BeforeTest() {
  }
  BeforeTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BeforeTest',
    interfaces: [Annotation]
  };
  function AfterTest() {
  }
  AfterTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AfterTest',
    interfaces: [Annotation]
  };
  function DefaultJsAsserter$failWithMessage$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  function assertHook$lambda(f) {
    return Unit;
  }
  var assertHook;
  function DefaultJsAsserter() {
    DefaultJsAsserter_instance = this;
    this.e_0 = undefined;
    this.a_0 = undefined;
  }
  DefaultJsAsserter.prototype.assertEquals_lzc6tz$ = function (message, expected, actual) {
    this.e_0 = expected;
    this.a_0 = actual;
    Asserter.prototype.assertEquals_lzc6tz$.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotEquals_lzc6tz$ = function (message, illegal, actual) {
    this.e_0 = illegal;
    this.a_0 = actual;
    Asserter.prototype.assertNotEquals_lzc6tz$.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertSame_lzc6tz$ = function (message, expected, actual) {
    this.e_0 = expected;
    this.a_0 = actual;
    Asserter.prototype.assertSame_lzc6tz$.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotSame_lzc6tz$ = function (message, illegal, actual) {
    this.e_0 = illegal;
    this.a_0 = actual;
    Asserter.prototype.assertNotSame_lzc6tz$.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertNull_67rc9h$ = function (message, actual) {
    this.a_0 = actual;
    Asserter.prototype.assertNull_67rc9h$.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertNotNull_67rc9h$ = function (message, actual) {
    this.a_0 = actual;
    Asserter.prototype.assertNotNull_67rc9h$.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertTrue_o10pc4$ = function (lazyMessage, actual) {
    if (!actual) {
      var message = lazyMessage();
      this.invokeHook_0(false, DefaultJsAsserter$failWithMessage$lambda(message));
      throw new AssertionError_init_1(message, null);
    } else {
      this.invokeHook_0(true, lazyMessage);
    }
  };
  function DefaultJsAsserter$assertTrue$lambda(closure$message) {
    return function () {
      return closure$message;
    };
  }
  DefaultJsAsserter.prototype.assertTrue_4mavae$ = function (message, actual) {
    this.assertTrue_o10pc4$(DefaultJsAsserter$assertTrue$lambda(message), actual);
  };
  DefaultJsAsserter.prototype.fail_pdl1vj$ = function (message) {
    this.fail_wspj0f$(message, null);
  };
  DefaultJsAsserter.prototype.fail_wspj0f$ = function (message, cause) {
    var message_0 = message;
    this.invokeHook_0(false, DefaultJsAsserter$failWithMessage$lambda(message_0));
    throw new AssertionError_init_1(message_0, cause);
  };
  DefaultJsAsserter.prototype.failWithMessage_0 = wrapFunction(function () {
    var AssertionError_init = Kotlin.kotlin.AssertionError;
    function DefaultJsAsserter$failWithMessage$lambda(closure$message) {
      return function () {
        return closure$message;
      };
    }
    return function (lazyMessage, cause) {
      var message = lazyMessage();
      this.invokeHook_0(false, DefaultJsAsserter$failWithMessage$lambda(message));
      throw new AssertionError_init(message, cause);
    };
  });
  function DefaultJsAsserter$invokeHook$ObjectLiteral(closure$result, closure$lazyMessage) {
    this.result_13foyd$_0 = closure$result;
    this.expected_q67qvk$_0 = DefaultJsAsserter_getInstance().e_0;
    this.actual_wkq0m2$_0 = DefaultJsAsserter_getInstance().a_0;
    this.lazyMessage_wfmiv$_0 = closure$lazyMessage;
  }
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'result', {
    configurable: true,
    get: function () {
      return this.result_13foyd$_0;
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'expected', {
    configurable: true,
    get: function () {
      return this.expected_q67qvk$_0;
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'actual', {
    configurable: true,
    get: function () {
      return this.actual_wkq0m2$_0;
    }
  });
  Object.defineProperty(DefaultJsAsserter$invokeHook$ObjectLiteral.prototype, 'lazyMessage', {
    configurable: true,
    get: function () {
      return this.lazyMessage_wfmiv$_0;
    }
  });
  DefaultJsAsserter$invokeHook$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  DefaultJsAsserter.prototype.invokeHook_0 = function (result, lazyMessage) {
    try {
      assertHook(new DefaultJsAsserter$invokeHook$ObjectLiteral(result, lazyMessage));
    }finally {
      this.e_0 = undefined;
      this.a_0 = undefined;
    }
  };
  DefaultJsAsserter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DefaultJsAsserter',
    interfaces: [Asserter]
  };
  var DefaultJsAsserter_instance = null;
  function DefaultJsAsserter_getInstance() {
    if (DefaultJsAsserter_instance === null) {
      new DefaultJsAsserter();
    }
    return DefaultJsAsserter_instance;
  }
  function todo(block) {
    println('TODO at ' + toString(block));
  }
  var AssertionErrorWithCause = defineInlineFunction('kotlin-test.kotlin.test.AssertionErrorWithCause_6umzry$', wrapFunction(function () {
    var AssertionError_init = Kotlin.kotlin.AssertionError;
    return function (message, cause) {
      return new AssertionError_init(message, cause);
    };
  }));
  function checkResultIsFailure_0(exceptionClass, message, blockResult) {
    var tmp$, tmp$_0;
    var exception = blockResult.exceptionOrNull();
    if (exception == null) {
      (tmp$ = blockResult.value) == null || Kotlin.isType(tmp$, Any) || throwCCE();
      tmp$_0 = get_asserter().fail_pdl1vj$(messagePrefix(message) + ('Expected an exception of ' + exceptionClass + ' to be thrown, but was completed successfully.'));
    } else {
      var tmp$_1;
      if (exceptionClass.isInstance_s8jyv4$(exception)) {
        return Kotlin.isType(tmp$_1 = exception, Throwable) ? tmp$_1 : throwCCE();
      }
      tmp$_0 = get_asserter().fail_wspj0f$(messagePrefix(message) + ('Expected an exception of ' + exceptionClass + ' to be thrown, but was ' + exception), exception);
    }
  }
  function lookupAsserter() {
    return DefaultJsAsserter_getInstance();
  }
  function setAdapter_0(adapter) {
    var tmp$;
    if (typeof adapter === 'string') {
      var tmp$_0;
      if ((tmp$ = NAME_TO_ADAPTER.get_11rb$(adapter)) != null) {
        setAdapter_0(tmp$());
        tmp$_0 = Unit;
      } else
        tmp$_0 = null;
      if (tmp$_0 == null) {
        throw IllegalArgumentException_init("Unsupported test framework adapter: '" + adapter.toString() + "'");
      }
    } else {
      currentAdapter = adapter;
    }
  }
  function setAssertHook(hook) {
    assertHook = hook;
  }
  function suite(name, ignored, suiteFn) {
    adapter().suite(name, ignored, suiteFn);
  }
  function test(name, ignored, testFn) {
    adapter().test(name, ignored, testFn);
  }
  var currentAdapter;
  function adapter() {
    var result = currentAdapter != null ? currentAdapter : detectAdapter();
    currentAdapter = result;
    return result;
  }
  function detectAdapter() {
    var tmp$, tmp$_0;
    if (isQUnit())
      tmp$ = new QUnitAdapter();
    else if (isJasmine())
      tmp$ = new JasmineLikeAdapter();
    else
      tmp$ = new BareAdapter();
    var frameworkAdapter = tmp$;
    if (!equals(typeof kotlinTest, 'undefined')) {
      var adapterTransform = kotlinTest.adapterTransformer;
      if (adapterTransform !== null) {
        tmp$_0 = adapterTransform(frameworkAdapter);
      } else
        tmp$_0 = frameworkAdapter;
    } else
      tmp$_0 = frameworkAdapter;
    return tmp$_0;
  }
  var NAME_TO_ADAPTER;
  function BareAdapter() {
  }
  BareAdapter.prototype.suite = function (name, ignored, suiteFn) {
    if (!ignored) {
      suiteFn();
    }
  };
  BareAdapter.prototype.test = function (name, ignored, testFn) {
    if (!ignored) {
      testFn();
    }
  };
  BareAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BareAdapter',
    interfaces: []
  };
  function isQUnit() {
    return typeof QUnit !== 'undefined';
  }
  function isJasmine() {
    return typeof describe === 'function' && typeof it === 'function';
  }
  function JasmineLikeAdapter() {
  }
  JasmineLikeAdapter.prototype.suite = function (name, ignored, suiteFn) {
    if (ignored) {
      xdescribe(name, suiteFn);
    } else {
      describe(name, suiteFn);
    }
  };
  JasmineLikeAdapter.prototype.test = function (name, ignored, testFn) {
    if (ignored) {
      xit(name, testFn);
    } else {
      it(name, testFn);
    }
  };
  JasmineLikeAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JasmineLikeAdapter',
    interfaces: []
  };
  function QUnitAdapter() {
    this.ignoredSuite = false;
  }
  QUnitAdapter.prototype.suite = function (name, ignored, suiteFn) {
    var prevIgnore = this.ignoredSuite;
    this.ignoredSuite = this.ignoredSuite | ignored;
    QUnit.module(name, suiteFn);
    this.ignoredSuite = prevIgnore;
  };
  QUnitAdapter.prototype.test = function (name, ignored, testFn) {
    if (ignored | this.ignoredSuite) {
      QUnit.skip(name, this.wrapTest_0(testFn));
    } else {
      QUnit.test(name, this.wrapTest_0(testFn));
    }
  };
  function QUnitAdapter$wrapTest$lambda$lambda(closure$assertionsHappened, closure$assert) {
    return function (testResult) {
      closure$assertionsHappened.v = true;
      closure$assert.ok(testResult.result, testResult.lazyMessage());
      return Unit;
    };
  }
  function QUnitAdapter$wrapTest$lambda(closure$testFn) {
    return function (assert) {
      var assertionsHappened = {v: false};
      assertHook = QUnitAdapter$wrapTest$lambda$lambda(assertionsHappened, assert);
      var possiblePromise = closure$testFn();
      if (!assertionsHappened.v) {
        assertTrue_0(true, 'A test with no assertions is considered successful');
      }
      return possiblePromise;
    };
  }
  QUnitAdapter.prototype.wrapTest_0 = function (testFn) {
    return QUnitAdapter$wrapTest$lambda(testFn);
  };
  QUnitAdapter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QUnitAdapter',
    interfaces: []
  };
  var package$kotlin = _.kotlin || (_.kotlin = {});
  var package$test = package$kotlin.test || (package$kotlin.test = {});
  package$test.assertIterableContentEquals_bczz9s$ = assertIterableContentEquals;
  package$test.assertArrayContentEquals_trjg0b$ = assertArrayContentEquals;
  Object.defineProperty(package$test, 'asserter', {
    get: get_asserter
  });
  Object.defineProperty(package$test, '_asserter_8be2vx$', {
    get: function () {
      return _asserter;
    },
    set: function (value) {
      _asserter = value;
    }
  });
  $$importsForInline$$['kotlin-test'] = _;
  package$test.assertTrue_ifx8ge$ = assertTrue_0;
  package$test.assertFalse_ifx8ge$ = assertFalse_0;
  package$test.assertEquals_3m0tl5$ = assertEquals;
  package$test.assertEquals_blq1e3$ = assertEquals_0;
  package$test.assertEquals_b89ns2$ = assertEquals_1;
  package$test.assertNotEquals_3m0tl5$ = assertNotEquals;
  package$test.assertNotEquals_blq1e3$ = assertNotEquals_0;
  package$test.assertNotEquals_b89ns2$ = assertNotEquals_1;
  package$test.assertSame_3m0tl5$ = assertSame;
  package$test.assertNotSame_3m0tl5$ = assertNotSame;
  package$test.assertIsOfType_5l1t6h$ = assertIsOfType;
  package$test.assertIsNotOfType_5l1t6h$ = assertIsNotOfType;
  package$test.assertNotNull_tkjle6$ = assertNotNull;
  package$test.assertNull_dzvdf1$ = assertNull;
  package$test.assertContains_h0u6ci$ = assertContains;
  package$test.assertContains_fy4kes$ = assertContains_0;
  package$test.assertContains_nk6az9$ = assertContains_1;
  package$test.assertContains_6qd1r4$ = assertContains_2;
  package$test.assertContains_xai3h8$ = assertContains_3;
  package$test.assertContains_rsr3pm$ = assertContains_4;
  package$test.assertContains_s42zs0$ = assertContains_5;
  package$test.assertContains_n68oxo$ = assertContains_6;
  package$test.assertContains_eugx40$ = assertContains_7;
  package$test.assertContains_vrfsgq$ = assertContains_8;
  package$test.assertContains_cf6000$ = assertContains_9;
  package$test.assertContains_82d7mo$ = assertContains_10;
  package$test.assertContains_29hd72$ = assertContains_11;
  package$test.assertContains_43ehmg$ = assertContains_12;
  package$test.assertContains_64ct0m$ = assertContains_13;
  package$test.assertContains_orhcf1$ = assertContains_14;
  package$test.assertContains_c83zke$ = assertContains_15;
  package$test.assertContains_ly7c2i$ = assertContains_16;
  package$test.assertContains_q62l5y$ = assertContains_17;
  package$test.assertContains_v2guz0$ = assertContains_18;
  package$test.assertContains_fdmjum$ = assertContains_19;
  package$test.assertContains_ij9av3$ = assertContains_20;
  package$test.assertContains_npt5u$ = assertContains_21;
  package$test.assertContains_mlouhu$ = assertContains_22;
  package$test.assertContentEquals_l1ffzf$ = assertContentEquals;
  package$test.assertContentEquals_gac0c5$ = assertContentEquals_0;
  package$test.assertContentEquals_c6qtpn$ = assertContentEquals_1;
  package$test.assertContentEquals_aatxjf$ = assertContentEquals_2;
  package$test.assertContentEquals_jwnx25$ = assertContentEquals_3;
  package$test.assertContentEquals_q8rtt$ = assertContentEquals_4;
  package$test.assertContentEquals_xai01t$ = assertContentEquals_5;
  package$test.assertContentEquals_sl9rej$ = assertContentEquals_6;
  package$test.assertContentEquals_h8ohlr$ = assertContentEquals_7;
  package$test.assertContentEquals_6vda35$ = assertContentEquals_8;
  package$test.assertContentEquals_6mo3s1$ = assertContentEquals_9;
  package$test.assertContentEquals_ffiybr$ = assertContentEquals_10;
  package$test.assertContentEquals_l1g8v$ = assertContentEquals_11;
  package$test.assertContentEquals_fzwyaj$ = assertContentEquals_12;
  package$test.assertContentEquals_9yltvl$ = assertContentEquals_13;
  package$test.assertContentEquals_eqzz7l$ = assertContentEquals_14;
  package$test.fail_pdl1vj$ = fail;
  package$test.fail_wspj0f$ = fail_0;
  package$test.checkResultIsFailure_8v9b5x$ = checkResultIsFailure;
  package$test.checkResultIsFailure_3e4uyv$ = checkResultIsFailure_0;
  package$test.Asserter = Asserter;
  package$test.AsserterContributor = AsserterContributor;
  Object.defineProperty(package$test, 'DefaultAsserter', {
    get: DefaultAsserter_getInstance
  });
  package$test.messagePrefix_7efafy$ = messagePrefix;
  package$test.overrideAsserter_wbnzx$ = overrideAsserter;
  package$test.checkDoublesAreEqual_8vvzvl$ = checkDoublesAreEqual;
  package$test.checkFloatsAreEqual_9dlid6$ = checkFloatsAreEqual;
  _.setAdapter = setAdapter;
  package$test.Test = Test;
  package$test.Ignore = Ignore;
  package$test.BeforeTest = BeforeTest;
  package$test.AfterTest = AfterTest;
  Object.defineProperty(package$test, 'assertHook_8be2vx$', {
    get: function () {
      return assertHook;
    },
    set: function (value) {
      assertHook = value;
    }
  });
  Object.defineProperty(package$test, 'DefaultJsAsserter', {
    get: DefaultJsAsserter_getInstance
  });
  package$test.todo_o14v8n$ = todo;
  package$test.AssertionErrorWithCause_6umzry$ = AssertionErrorWithCause;
  package$test.lookupAsserter_8be2vx$ = lookupAsserter;
  package$test.setAdapter_kcmwxo$ = setAdapter_0;
  package$test.setAssertHook_4duqou$ = setAssertHook;
  package$test.suite = suite;
  package$test.test = test;
  Object.defineProperty(package$test, 'currentAdapter_8be2vx$', {
    get: function () {
      return currentAdapter;
    },
    set: function (value) {
      currentAdapter = value;
    }
  });
  package$test.adapter_8be2vx$ = adapter;
  package$test.detectAdapter_8be2vx$ = detectAdapter;
  Object.defineProperty(package$test, 'NAME_TO_ADAPTER_8be2vx$', {
    get: function () {
      return NAME_TO_ADAPTER;
    }
  });
  var package$adapters = package$test.adapters || (package$test.adapters = {});
  package$adapters.BareAdapter = BareAdapter;
  package$adapters.isQUnit_8be2vx$ = isQUnit;
  package$adapters.isJasmine_8be2vx$ = isJasmine;
  package$adapters.JasmineLikeAdapter = JasmineLikeAdapter;
  package$adapters.QUnitAdapter = QUnitAdapter;
  DefaultAsserter.prototype.assertTrue_o10pc4$ = Asserter.prototype.assertTrue_o10pc4$;
  DefaultAsserter.prototype.assertTrue_4mavae$ = Asserter.prototype.assertTrue_4mavae$;
  DefaultAsserter.prototype.assertEquals_lzc6tz$ = Asserter.prototype.assertEquals_lzc6tz$;
  DefaultAsserter.prototype.assertNotEquals_lzc6tz$ = Asserter.prototype.assertNotEquals_lzc6tz$;
  DefaultAsserter.prototype.assertSame_lzc6tz$ = Asserter.prototype.assertSame_lzc6tz$;
  DefaultAsserter.prototype.assertNotSame_lzc6tz$ = Asserter.prototype.assertNotSame_lzc6tz$;
  DefaultAsserter.prototype.assertNull_67rc9h$ = Asserter.prototype.assertNull_67rc9h$;
  DefaultAsserter.prototype.assertNotNull_67rc9h$ = Asserter.prototype.assertNotNull_67rc9h$;
  _asserter = null;
  assertHook = assertHook$lambda;
  currentAdapter = null;
  NAME_TO_ADAPTER = mapOf([to('qunit', getCallableRef('QUnitAdapter', function () {
    return new QUnitAdapter();
  })), to('jasmine', getCallableRef('JasmineLikeAdapter', function () {
    return new JasmineLikeAdapter();
  })), to('mocha', getCallableRef('JasmineLikeAdapter', function () {
    return new JasmineLikeAdapter();
  })), to('jest', getCallableRef('JasmineLikeAdapter', function () {
    return new JasmineLikeAdapter();
  })), to('auto', getCallableRef('detectAdapter', function () {
    return detectAdapter();
  }))]);
  Kotlin.defineModule('kotlin-test', _);
  return _;
}));

//# sourceMappingURL=kotlin-test.js.map
