(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-methods.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var asc = __webpack_require__(/*! ./_array-species-create */ "./node_modules/core-js/modules/_array-species-create.js");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-constructor.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var isArray = __webpack_require__(/*! ./_is-array */ "./node_modules/core-js/modules/_is-array.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-species-create.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(/*! ./_array-species-constructor */ "./node_modules/core-js/modules/_array-species-constructor.js");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_function-to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_function-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_meta.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('meta');
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var setDesc = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-assign.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-assign.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/modules/_object-gops.js");
var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gopd.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gops.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-pie.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var $toString = __webpack_require__(/*! ./_function-to-string */ "./node_modules/core-js/modules/_function-to-string.js");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"container\">\n\n    <div style=\"text-align:center\">\n        <br>\n              <img src=\"./assets/symbol.gif\" alt=\"Avatar\" style=\"width:200px\" class=\"center\">\n              <h3>Byculla Fire Station</h3>\n              <p> The Fire Department is committed to creating safer communities through prevention, preparedness, and effective emergency response. It is the mission of the Fire Department to prevent the loss of life and the loss of property by applying all of our professional knowledge and resources.</p>\n        \n         <br>\n         <table style=\"width:100%\">\n            <tr>\n              <td>Category :</td>\n              <td>Fire Brigade Services</td>\n            </tr>\n            <tr>\n              <td>Publish date :\t</td>\n              <td>November 23, 2014 </td> \n            </tr>\n            <tr>\n                <td>Address:\t</td>\n                <td><p>Near Khatau Mill & Opposite Y Bridge,<br> Bapurao Jagtap Road, Byculla,<br> Mumbai - 400027, Maharashtra, INDIA</p> </td> \n              </tr>\n              <tr>\n                  <td>Phone No:\t</td>\n                  <td>\t+(91)-22-23085991,23085992</td> \n                </tr>\n          </table>\n            <br><br>\n         <p> Byculla Fire Station Head Office in Mumbai, Fire Station Head Office in Byculla Mumbai, Fire Station Head Office in Mumbai Byculla, Fire protection system in Mumbai, Mumbai Fire Station Head Office in Byculla</p>\n\n         \n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-router></app-router>\n<div class=\"container\">\n    <div style=\"text-align:center\">\n      <p class=\"h1\">\n        Google Maps in Angular 6\n      </p>\n    </div>\n    <br>\n  \n    <div class=\"row\">\n  \n      <div class=\"col-md-6 col-sm-12 col-xs-12\">\n        <form class=\"form-inline\" #form=\"ngForm\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"latitude\" [(ngModel)]=\"latitude\" placeholder=\"Enter latitude\" required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"longitude\" [(ngModel)]=\"longitude\" placeholder=\"Enter longitude\" required>\n          </div>\n          <button  type=\"button\" (click)=\"setCenter()\" class=\"btn btn-primary\" [disabled]=\"form.invalid\"> Go</button>\n  \n  \n        </form>\n      </div>\n  \n      <div class=\"col-md-6 col-sm-12 col-xs-12\">\n        <label>Select Marker: </label>\n        <select [(ngModel)]=\"selectedMarkerType\" name=\"category\">\n          <option *ngFor=\"let marker of markerTypes\" [value]=\"marker.value\">{{marker.text}}</option>\n        </select>\n        <button type=\"button\" (click)=\"showCustomMarker()\" class=\"btn btn-primary\" [disabled]=\"form.invalid\"> Custom Marker</button>\n      </div>\n    </div>\n    <br>\n  \n    <div class=\"row\">\n      <button (click)=\"setMapType('terrain')\" class=\"btn btn-primary\">Terrain</button>\n      <button (click)=\"setMapType('satellite')\" class=\"btn btn-danger\">Satellite</button>\n      <button (click)=\"setMapType('roadmap')\" class=\"btn btn-warning\">Road Map</button>\n  \n      <button type=\"button\" (click)=\"toggleMap()\" class=\"btn btn-primary\">Toggle Map</button>\n      \n    </div>\n    <br>\n    <div class=\"row\" >\n      <div class=\"col-md-12\">\n        <div class=\"text-center\">\n          <h3>\n            <div #gmap style=\"width:100%;height:400px\" ></div>\n          </h3>\n        </div>\n      </div>\n    </div>\n  \n   \n  </div>\n \n  \n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_position_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/position.service */ "./src/app/position.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="@types/googlemaps" />



//import { } from '@types/googlemaps';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(PositionMemService) {
        this.PositionMemService = PositionMemService;
        this.model = {};
        this.iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        this.markerTypes = [
            {
                text: "Parking", value: "parking_lot_maps.png"
            },
            {
                text: "Library", value: "library_maps.png"
            },
            {
                text: "Information", value: "info-i_maps.png"
            }
        ];
        this.selectedMarkerType = "parking_lot_maps.png";
        this.isHidden = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.PositionMemService.getLocation().subscribe(function (res) {
            //console.log(res)
        });
    };
    AdminComponent.prototype.ngAfterContentInit = function () {
        var mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    };
    AdminComponent.prototype.setMapType = function (mapTypeId) {
        this.map.setMapTypeId(mapTypeId);
    };
    AdminComponent.prototype.setCenter = function () {
        var _this = this;
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        console.log("inside survey");
        console.log(this.latitude);
        /* this.locationList.push({
           latitude : this.latitude,
           longitude : this.longitude
         });*/
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            title: 'Got you!'
        });
        marker.addListener('click', this.simpleMarkerHandler);
        marker.addListener('click', function () {
            _this.markerHandler(marker);
        });
        console.log('Function called');
        console.log(JSON.stringify((this.model)));
        alert('Your details are successfully saved!');
        this.model.latitude = this.latitude;
        this.model.longitude = this.longitude;
        this.PositionMemService.insertmem(this.model);
        this.PositionMemService.List.reset();
        this.PositionMemService.List.setValue({
            $key: null,
            latitude: null,
            longitude: null,
        });
    };
    AdminComponent.prototype.simpleMarkerHandler = function () {
        alert('Simple Component\'s function...');
    };
    AdminComponent.prototype.markerHandler = function (marker) {
        alert('Marker\'s Title: ' + marker.getTitle());
    };
    AdminComponent.prototype.showCustomMarker = function () {
        this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
        var location = new google.maps.LatLng(this.latitude, this.longitude);
        console.log("selected marker: " + this.selectedMarkerType);
        var marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: this.iconBase + this.selectedMarkerType,
            title: 'Got you!'
        });
    };
    AdminComponent.prototype.toggleMap = function () {
        this.isHidden = !this.isHidden;
        this.gmapElement.nativeElement.hidden = this.isHidden;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], AdminComponent.prototype, "gmapElement", void 0);
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_position_service__WEBPACK_IMPORTED_MODULE_1__["PositionService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav > li{\r\n    padding-left:10px;\r\n    padding-right:10px;\r\n  }\r\n\r\n  li a:hover:not(.active) {\r\n    background-color:#00b3b3;\r\n  }\r\n\r\n  .split {\r\n    height: 60%;\r\n    width: 100%;\r\n    background-image: \"tp\\src\\assets\\logo2.jpg\";\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 7;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n  }\r\n\r\n  .aa {\r\n    font-family:\"Comic Sans MS\";\r\n    font-size: 17px;\r\n   } \r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css\">\n\n<!-- jQuery library -->\n<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n\n<!-- Popper JS -->\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js\"></script>\n\n<!-- Latest compiled JavaScript -->\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js\"></script>\n\n<!-- Load an icon library -->\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <ul class=\"navbar-nav justify-content-left\">\n    <li class=\"nav-item active\">\n      <a class=\" nav-link \" href=\"#\" routerLink='home' routerLinkActive='active'><i class=\"fa fa-fw fa-home\"></i> Home</a> \n    </li>\n    <li class=\"nav-item active\">\n      <a class=\" nav-link \" href=\"#\"  routerLink='about' routerLinkActive='active'><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i> About </a> \n    </li>\n    <li class=\"nav-item active\">\n      <a class=\" nav-link \" href=\"#\" routerLink='news' routerLinkActive='active'><i class=\"fa fa-cogs \" aria-hidden=\"true\"></i>News</a> \n    </li>\n    <li class=\"nav-item active\">\n      <a class=\" nav-link \" href=\"#\" routerLink='measures' routerLinkActive='active'> <i class=\"fa fa-code\" aria-hidden=\"true\"></i> Safety Measures</a> \n    </li>\n    <li class=\"nav-item active\">\n      <a class=\" nav-link \" href=\"#\" routerLink='training' routerLinkActive='active'><i class=\"fa fa-globe\" aria-hidden=\"true\"></i> Trainings </a> \n    </li>\n    <li class=\"nav-item active\">\n        <a class=\" nav-link \" href=\"#\" routerLink='vol' routerLinkActive='active'><i class=\"fa fa-globe\" aria-hidden=\"true\"></i> Volunteers </a> \n      </li>\n      <li class=\"nav-item active\">\n        <a class=\" nav-link \" href=\"#\"  routerLink='/chat' routerLinkActive='active'><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i> Chat </a> \n      </li>\n      <li class=\"nav-item active\">\n          <a class=\" nav-link \" href=\"http://91c6fdb8.ngrok.io/\" ><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i> Data Visualization </a> \n        </li>\n    <li class=\"nav-item active\">\n      <a class=\" nav-link \" href=\"#\" routerLink='/login' routerLinkActive='active'><i class=\"fa fa-fw fa-home\"></i> Login </a> \n    </li>\n    <li class=\"nav-item active\">\n      <a class=\" nav-link \" href=\"#\"  routerLink='/signup' routerLinkActive='active'><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i> Register </a> \n    </li>\n    \n  </ul>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Firestation';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/esm5/angular-image-slider.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-popup */ "./node_modules/@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _vol_vol_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vol/vol.component */ "./src/app/vol/vol.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _inlogin_inlogin_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./inlogin/inlogin.component */ "./src/app/inlogin/inlogin.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _training_training_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./training/training.component */ "./src/app/training/training.component.ts");
/* harmony import */ var _usermap_usermap_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./usermap/usermap.component */ "./src/app/usermap/usermap.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _measures_measures_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./measures/measures.component */ "./src/app/measures/measures.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//for pop-up


//import { AppRoutingModule } from './app-routing.module';

//import { MemberregComponent } from './register/memberreg/memberreg.component';

//import { RouterModule } from '@angular/router';






//import { VolregComponent } from './register/volreg/volreg.component';















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _vol_vol_component__WEBPACK_IMPORTED_MODULE_20__["VolComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"],
                _inlogin_inlogin_component__WEBPACK_IMPORTED_MODULE_22__["InloginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_24__["NewsComponent"],
                _training_training_component__WEBPACK_IMPORTED_MODULE_25__["TrainingComponent"],
                _usermap_usermap_component__WEBPACK_IMPORTED_MODULE_26__["UsermapComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"],
                _measures_measures_component__WEBPACK_IMPORTED_MODULE_28__["MeasuresComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _progress_kendo_angular_popup__WEBPACK_IMPORTED_MODULE_5__["PopupModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                //AppRoutingModule,
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].fireconfig),
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_13__["AngularFireDatabaseModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_19__["MDBBootstrapModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_image_slider__WEBPACK_IMPORTED_MODULE_3__["SliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
                    /*  {path: 'qa', component: QaComponent},*/
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    // { path: 'qa/:$data', component: QaComponent},
                    // { path: 'api', component: ApiComponent},
                    // { path: 'nm', component : NmComponent},*/
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
                    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"] },
                    { path: 'vol', component: _vol_vol_component__WEBPACK_IMPORTED_MODULE_20__["VolComponent"] },
                    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_21__["ChatComponent"] },
                    { path: 'inlogin', component: _inlogin_inlogin_component__WEBPACK_IMPORTED_MODULE_22__["InloginComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"] },
                    { path: 'training', component: _training_training_component__WEBPACK_IMPORTED_MODULE_25__["TrainingComponent"] },
                    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_24__["NewsComponent"] },
                    { path: 'usermap', component: _usermap_usermap_component__WEBPACK_IMPORTED_MODULE_26__["UsermapComponent"] },
                    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"] },
                    { path: 'measures', component: _measures_measures_component__WEBPACK_IMPORTED_MODULE_28__["MeasuresComponent"] },
                    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_24__["NewsComponent"] },
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [angularfire2_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-wrap {\r\n    width: 800px;\r\n    margin: 15px 600px;\r\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"container\" id=\"page-wrap\">\n    <br><br><br>\n\n<iframe\n    allow=\"microphone;\"\n    width=\"650\"\n    height=\"630\"\n    src=\"https://console.dialogflow.com/api-client/demo/embedded/8d1dfe3c-a880-457b-b0b5-11e9d90903ee\">\n</iframe>\n\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.img {\r\n    background-image: url('background.jpg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n }\r\n \r\n .center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 100%;\r\n  }\r\n \r\n .zoom {\r\n    \r\n    padding: 20px;\r\n    transition: -webkit-transform .2s;\r\n    transition: transform .2s;\r\n    transition: transform .2s, -webkit-transform .2s; /* Animation */\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 0 auto;\r\n  }\r\n \r\n .yy{\r\n    background: url('back.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    color: white\r\n  }\r\n \r\n .zoom:hover {\r\n    -webkit-transform: scale(1.5);\r\n            transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */\r\n  }\r\n \r\n .aa {\r\n     font-family:\"Comic Sans MS\";\r\n     font-size: 17px;\r\n    }\r\n \r\n section {\r\n        padding: 60px 0;\r\n    }\r\n \r\n section .section-title {\r\n        text-align: center;\r\n        color: #007b5e;\r\n        margin-bottom: 50px;\r\n        text-transform: uppercase;\r\n    }\r\n \r\n #footer {\r\n        background: black !important;\r\n    }\r\n \r\n #footer h5{\r\n       padding-left: 10px;\r\n        border-left: 3px solid #eeeeee;\r\n        padding-bottom: 6px;\r\n        margin-bottom: 20px;\r\n        color:#ffffff;\r\n    }\r\n \r\n #footer a {\r\n        color: #ffffff;\r\n        text-decoration: none !important;\r\n        background-color: transparent;\r\n        -webkit-text-decoration-skip: objects;\r\n    }\r\n \r\n #footer ul.social li{\r\n       padding: 3px 0;\r\n    }\r\n \r\n #footer ul.social li a i {\r\n        margin-right: 5px;\r\n       font-size:25px;\r\n       transition: .5s all ease;\r\n    }\r\n \r\n #footer ul.social li:hover a i {\r\n       font-size:30px;\r\n       margin-top:-10px;\r\n    }\r\n \r\n #footer ul.social li a,\r\n    #footer ul.quick-links li a{\r\n       color:#ffffff;\r\n    }\r\n \r\n #footer ul.social li a:hover{\r\n       color:#eeeeee;\r\n    }\r\n \r\n #footer ul.quick-links li{\r\n       padding: 3px 0;\r\n       transition: .5s all ease;\r\n    }\r\n \r\n #footer ul.quick-links li:hover{\r\n       padding: 3px 0;\r\n       margin-left:5px;\r\n       font-weight:700;\r\n    }\r\n \r\n #footer ul.quick-links li a i{\r\n       margin-right: 5px;\r\n    }\r\n \r\n #footer ul.quick-links li:hover a i {\r\n        font-weight: 700;\r\n    }\r\n \r\n @media (max-width:767px){\r\n       #footer h5 {\r\n        padding-left: 0;\r\n        border-left: transparent;\r\n        padding-bottom: 0px;\r\n        margin-bottom: 10px;\r\n    }\r\n    }  \r\n "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n<body>\n    <div class='aa'>\n        <div class=\"img\">\n            <br><br><br><br><br>\n                \n            <br><br><br><br><br>\n              \n              <!----<button type=\"button\" (click) ='fun1()'>Click Me</button>\n              \n              <a href=\"#\" routerLink='p1' routerLinkActive='active'>About Us</a> -->\n             \n              <br>\n          <br>\n          <br>\n          <br>\n          \n              </div>\n          \n              <div class='aa'>\n                  <style> \n                    marquee {\n                      width: 100%;\n                      padding: 10px 0;\n                      background-color: #cc5200;\n                    }\n                  </style>\n                  <marquee direction=\"scroll\">Recent News: In 6 months, the city of Mumbai has suffered 12 major fires with 22 related deaths. </marquee>\n                </div>\n                <br>\n          <div class=\"yy\" >\n              <div class='container' style='text-align: center'> \n                <br>\n                  <p class='aa' style='text-align:center' >Don't let your future go up in smoke follow Fire Safety</p>\n              <form action =\"https://www.google.com/search\" method=\"GET\">\n                <input type=\"text\" name=\"q\" placeholder=\"Google Search\">\n                <input type=\"submit\" value=\"Google Search\">\n              </form>\n          </div>\n          <br>\n          <div style=\"text-align:center\">\n            <br>\n                  <img src=\"./assets/symbol.gif\" alt=\"Avatar\" style=\"width:200px\" class=\"center\">\n                  <h3>Byculla Fire Station</h3>\n                  <p> The Fire Department is committed to creating safer communities through prevention, preparedness, and effective emergency response. It is the mission of the Fire Department to prevent the loss of life and the loss of property by applying all of our professional knowledge and resources.</p>\n            \n             <br>\n                </div>\n          </div>\n         \n         <br><br>\n          <mdb-carousel [animation]=\"'slide'\">\n              <mdb-carousel-item>\n                <img class=\"d-block w-100\" src=\"./assets/images.jpeg\" alt=\"First slide\">\n              </mdb-carousel-item>\n              <mdb-carousel-item>\n                <img class=\"d-block w-100\" src=\"./assets/images1.jpeg\" alt=\"Second slide\">\n              </mdb-carousel-item>\n              <mdb-carousel-item>\n                <img class=\"d-block w-100\" src=\"./assets/images2.jpeg\" alt=\"Third slide\">\n              </mdb-carousel-item>\n            </mdb-carousel>\n          <br>\n          <br>\n          \n    </div>\n    \n\n    <app-usermap></app-usermap>\n    <section id=\"footer\">\n        <div class=\"container\">\n          <div class=\"row text-center text-xs-center text-sm-left text-md-left\">\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\n              <h5>Quick links</h5>\n              <ul class=\"list-unstyled quick-links\">\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n              </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\n              <h5>Quick links</h5>\n              <ul class=\"list-unstyled quick-links\">\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Videos</a></li>\n              </ul>\n            </div>\n            <div class=\"col-xs-12 col-sm-4 col-md-4\">\n              <h5>Quick links</h5>\n              <ul class=\"list-unstyled quick-links\">\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>FAQ</a></li>\n                <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n                <li><a href=\"https://wwwe.sunlimetech.com\" title=\"Design and developed by\"><i class=\"fa fa-angle-double-right\"></i>Imprint</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n              <ul class=\"list-unstyled list-inline social text-center\">\n                <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"https://twitter.com\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"https://www.instagram.com\"><i class=\"fa fa-instagram\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\n              </ul>\n            </div>\n            <hr>\n          </div>\t\n      \n        </div>\n      </section>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inlogin/inlogin.component.css":
/*!***********************************************!*\
  !*** ./src/app/inlogin/inlogin.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 56px;\r\n}\r\n.sidebar {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n.sidebar a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n.sidebar a:hover {\r\n    color: #f1f1f1;\r\n}\r\n.sidebar .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n.openbtn {\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    background-color: #111;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    border: none;\r\n}\r\n.openbtn:hover {\r\n    background-color: #444;\r\n}\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 16px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidebar {padding-top: 15px;}\r\n    .sidebar a {font-size: 18px;}\r\n}\r\n#team {\r\n    background: #eee !important;\r\n}\r\n.center-content{\r\n    align-content: center;\r\n    text-align: center;\r\n}\r\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\r\nsection {\r\n    padding: 60px 0;\r\n}\r\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n"

/***/ }),

/***/ "./src/app/inlogin/inlogin.component.html":
/*!************************************************!*\
  !*** ./src/app/inlogin/inlogin.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div id=\"mySidebar\" class=\"sidebar\">\n    <br>\n    <br>\n    <br>\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">×</a>\n    <a >Profile</a>\n    <a >Donors</a>\n    <a >Companies</a>\n    <a></a>\n</div>\n\n<div id=\"main\">\n    <button class=\"openbtn\" (click)=\"openNav()\">☰</button>\n\n</div>\n\n\n<!-- Page Content -->\n<div class=\"container\">\n\n\n    <!-- Page Features -->\n\n    <!-- Team -->\n    <section id=\"team\" class=\"pb-5\" >\n\n        <div class=\"container\">\n            <router-outlet class=\"center-content\"></router-outlet>\n            <h5 class=\"section-title h1\">Profile</h5>\n            \n\n                <!-- Team member -->\n                <div class=\"col-xs-12 col-sm-6 col-md-4\"  #userProfileBlock>\n                                        <h4 >Name:{{name}}</h4>\n                                        <p >E-mail: {{this.email}}</p>\n                                        <p >Contact No: {{this.contactno}}</p>\n                        \n                                        <h4 >Description:<br>{{this.desc}}</h4>\n                                        <!--<p class=\"card-text\">POC number: {{donor.PocNo}}</p>-->\n                                       \n                                \n                                \n                            \n                        \n                    \n             \n            </div>\n\n            <!--<a href=\"#\" class=\"btn btn-primary btn-sm\" routerLink=\"childDonor\" routerLinkActive=\"active\" ><i class=\"fa fa-plus\" >Public Request</i></a>-->\n\n        </div>\n    </section>\n    <!-- Team -->\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/inlogin/inlogin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/inlogin/inlogin.component.ts ***!
  \**********************************************/
/*! exports provided: InloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InloginComponent", function() { return InloginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_regservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/regservice.service */ "./src/app/services/regservice.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InloginComponent = /** @class */ (function () {
    function InloginComponent(router, serv, RegisterService) {
        this.router = router;
        this.serv = serv;
        this.RegisterService = RegisterService;
        this.DataArray = [];
    }
    InloginComponent.prototype.openNav = function () {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    };
    InloginComponent.prototype.closeNav = function () {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };
    InloginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serv.getLoggedInUser().subscribe(function (usr) {
            if (usr) {
                _this.user = usr;
                _this.userPresent = true;
                console.log(_this.userPresent, _this.user);
            }
            else {
                _this.userPresent = false;
            }
        });
        this.RegisterService.getmem().subscribe(function (list) {
            _this.DataArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            for (var i = 0; i < _this.DataArray.length; i++) {
                console.log(_this.DataArray[i].name);
                console.log(_this.DataArray[i].gender);
                console.log(_this.DataArray[i].Contact);
                console.log(_this.user.email);
                if (_this.user.email == _this.DataArray[i].email) {
                    _this.name = _this.DataArray[i].name;
                    _this.email = _this.DataArray[i].email;
                    _this.desc = _this.DataArray[i].desc;
                    _this.dob = _this.DataArray[i].dob;
                    _this.gender = _this.DataArray[i].gender;
                    _this.contactno = _this.DataArray[i].Contact;
                    console.log("valueeeeeeeeeeee");
                    console.log(_this.name);
                }
            }
        });
    };
    InloginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inlogin',
            template: __webpack_require__(/*! ./inlogin.component.html */ "./src/app/inlogin/inlogin.component.html"),
            styles: [__webpack_require__(/*! ./inlogin.component.css */ "./src/app/inlogin/inlogin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_regservice_service__WEBPACK_IMPORTED_MODULE_3__["RegserviceService"]])
    ], InloginComponent);
    return InloginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"text-align:center\">Login</h1>\n<div class=\"container\" id=\"login_div\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter Email\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-default\">Login</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"tryFacebookLogin()\">Login with Facebook</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"tryGoogleLogin()\">Login with Google</button>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <p>No account yet? <a routerLink=\"/register\">Create an account</a></p>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    /* tryFacebookLogin() {
      this.authService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/student']);
      });
    }*/
    LoginComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/inlogin']);
        });
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        if (this.authService.doLogin(value) && value.email == "tania@gmail.com") {
            this.router.navigate(['/admin']);
        }
        else {
            this.authService.doLogin(value)
                .then(function (res) {
                _this.router.navigate(['/inlogin']);
            }, function (err) {
                console.log(err);
                _this.errorMessage = err.message;
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/measures/measures.component.css":
/*!*************************************************!*\
  !*** ./src/app/measures/measures.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\r\n    background-image: url('safety.jpeg');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100%;\r\n }\r\n\r\n .aa {\r\n    font-family:\"Comic Sans MS\";\r\n    font-size: 22px;\r\n   } \r\n"

/***/ }),

/***/ "./src/app/measures/measures.component.html":
/*!**************************************************!*\
  !*** ./src/app/measures/measures.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n    <div class=\"container\">\n        <div class=\"img\">\n            <br><br><br><br><br>\n                \n            <br><br><br><br><br>   <br><br><br><br><br>\n                \n           \n    </div>\n    <br><br>\n    <div class=\"container aa\" style=\"text-align:center\">\n\n      <p>\n          Did you know that if a fire starts in your home you may have as little as two minutes to escape?<br> During a fire, early warning from a working smoke alarm plus a fire escape plan that has been practiced regularly can save lives. <br>Learn what else to do to keep your loved ones safe!<br>\n      </p><br>\n          <h2>Top Tips for Fire Safety</h2><br><br>\n       <p>   \n          Install smoke alarms on every level of your home, inside bedrooms and outside sleeping areas.<br>\n          \n          \n          Test smoke alarms every month. If they’re not working, change the batteries.<br>\n          \n          \n          Talk with all family members about a fire escape plan and practice the plan twice a year. <br>\n          \n          \n          If a fire occurs in your home, GET OUT, STAY OUT and CALL FOR HELP. Never go back inside for anything or anyone. <br>\n          \n      \n      </p>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/measures/measures.component.ts":
/*!************************************************!*\
  !*** ./src/app/measures/measures.component.ts ***!
  \************************************************/
/*! exports provided: MeasuresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasuresComponent", function() { return MeasuresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MeasuresComponent = /** @class */ (function () {
    function MeasuresComponent() {
    }
    MeasuresComponent.prototype.ngOnInit = function () {
    };
    MeasuresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-measures',
            template: __webpack_require__(/*! ./measures.component.html */ "./src/app/measures/measures.component.html"),
            styles: [__webpack_require__(/*! ./measures.component.css */ "./src/app/measures/measures.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeasuresComponent);
    return MeasuresComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    margin: 0;\r\n\tpadding: 0;\r\n}\r\nbody {\r\n\tbackground: #ccc;\r\n\tfont-family: arial, verdana, tahoma;\r\n}\r\n/*Time to apply widths for accordian to work\r\nWidth of image = 640px\r\ntotal images = 5\r\nso width of hovered image = 640px\r\nwidth of un-hovered image = 40px - you can set this to anything\r\nso total container width = 640 + 40*4 = 800px;\r\ndefault width = 800/5 = 160px;\r\n*/\r\n.accordian {\r\n\twidth: 805px; height: 520px;\r\n\toverflow: hidden;\r\n\r\n\t/*Time for some styling*/\r\n\tmargin: 100px auto;\r\n\tbox-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-webkit-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n\t-moz-box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.35);\r\n}\r\n/*A small hack to prevent flickering on some browsers*/\r\n.accordian ul {\r\n\twidth: 1200px;\r\n\t/*This will give ample space to the last item to move\r\n\tinstead of falling down/flickering during hovers.*/\r\n}\r\n.accordian li {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 805px; height: 520px;\r\n\tfloat: left;\r\n\r\n\tborder-left: 1px solid #888;\r\n\r\n\tbox-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-webkit-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\t-moz-box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.5);\r\n\r\n\t/*Transitions to give animation effect*/\r\n\ttransition: all 0.5s;\r\n\t-webkit-transition: all 0.5s;\r\n\t-moz-transition: all 0.5s;\r\n\t/*If you hover on the images now you should be able to\r\n\tsee the basic accordian*/\r\n}\r\n/*Reduce with of un-hovered elements*/\r\n.accordian ul:hover li {width: 40px;}\r\n/*Lets apply hover effects now*/\r\n/*The LI hover style should override the UL hover style*/\r\n.accordian ul li:hover {width: 640px;}\r\n.accordian li img {\r\n\tdisplay: block;\r\n}\r\n/*Image title styles*/\r\n.image_title {\r\n\tbackground: rgba(0, 0, 0, 0.5);\r\n\tposition: absolute;\r\n\tleft: 0; bottom: 0;\r\nwidth: 640px;\r\n\r\n}\r\n.image_title a {\r\n\tdisplay: block;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n\tpadding: 20px;\r\n\tfont-size: 16px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/news/news.component.html":
/*!******************************************!*\
  !*** ./src/app/news/news.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n        <h1 style=\"text-align:center\">News</h1>\r\n                <div class=\"accordian\">\r\n                    <ul>\r\n                      <li>\r\n                        <div class=\"image_title\">\r\n                          <a href=\"http://www.newindianexpress.com/cities/kochi/2019/mar/12/highrise-dwellers-lack-awareness-on-dealing-with-fire-accidents-1949791.html\">News 1</a>\r\n                        </div>\r\n                        <a href=\"http://www.newindianexpress.com/cities/kochi/2019/mar/12/highrise-dwellers-lack-awareness-on-dealing-with-fire-accidents-1949791.html\">\r\n                          <img src=\"./assets/news3.png\" width=\"905px\" height=\"520px\"/>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"image_title\">\r\n                          <a href=\"https://english.mathrubhumi.com/news/kerala/sabotage-in-fire-accidents-must-be-examined-says-fire-force-chief-kerala--1.3597403\">News 2</a>\r\n                        </div>\r\n                        <a href=\"https://english.mathrubhumi.com/news/kerala/sabotage-in-fire-accidents-must-be-examined-says-fire-force-chief-kerala--1.3597403\">\r\n                          <img src=\"./assets/news4.png\" width=\"905px\" height=\"520px\"/>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"image_title\">\r\n                          <a href=\"https://timesofindia.indiatimes.com/city/puducherry/two-thatched-roof-houses-burnt-in-fire-accidents/articleshow/68247526.cmsB\">News 3</a>\r\n                        </div>\r\n                        <a href=\"https://timesofindia.indiatimes.com/city/puducherry/two-thatched-roof-houses-burnt-in-fire-accidents/articleshow/68247526.cmsB\">\r\n                          <img src=\"./assets/news5.png\" width=\"905px\" height=\"520px\"/>\r\n                        </a>\r\n                      </li>\r\n                      \r\n                  </ul>\r\n                </div>\r\n           \r\n              \r\n              \r\n            "

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/position.service.ts":
/*!*************************************!*\
  !*** ./src/app/position.service.ts ***!
  \*************************************/
/*! exports provided: PositionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionService", function() { return PositionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionService = /** @class */ (function () {
    function PositionService(firebase) {
        this.firebase = firebase;
        this.List = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            latitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            longitude: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    PositionService.prototype.getLocation = function () {
        this.locationList = this.firebase.list('/location');
        return this.locationList.snapshotChanges();
    };
    PositionService.prototype.insertmem = function (List) {
        console.log("inside survey service");
        console.log(List.latitude);
        // JSON.parse( JSON.stringify(this.locationList ) )
        this.locationList.push({
            longitude: List.longitude,
            latitude: List.latitude,
        });
        // this.formList.push("reached data");
    };
    PositionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\" >\n  <div class=\"mat-bottom-sheet-container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 offset-md-3\">\n        <br>\n        <h3 style=\"color: #cc5200\"><strong>Registration Details</strong></h3>\n        <form id=\"f\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Member Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Member Name\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required />\n            <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"name.errors.required\">Member Name is required</div>\n            </div>\n          </div>\n          \n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Email ID\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required email />\n            <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"email.errors.required\">Email is required</div>\n              <div *ngIf=\"email.errors.email\">Email must be a valid email address</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Contact\">ContactNo</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Contact Number\"  name=\"Contact\" [(ngModel)]=\"model.Contact\" #Contact=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && Contact.invalid }\" required minlength=\"10\" />\n            <div *ngIf=\"f.submitted && Contact.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"Contact.errors.required\">Contact is required</div>\n              <div *ngIf=\"Contact.errors.minlength\">Contact must be 10 numbers long</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"address\">Address</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Address\" name=\"address\" [(ngModel)]=\"model.address\" #address=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && address.invalid }\" required address />\n            <div *ngIf=\"f.submitted && address.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"address.errors.required\">Address is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"gender\">Gender</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Gender\" name=\"gender\" [(ngModel)]=\"model.gender\" #gender=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && gender.invalid }\" required gender />\n            <div *ngIf=\"f.submitted && gender.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"gender.errors.required\">Gender is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"dob\">Date of Birth</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Date of Birth\" name=\"dob\" [(ngModel)]=\"model.dob\" #dob=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && dob.invalid }\" required dob />\n            <div *ngIf=\"f.submitted && gender.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"dob.errors.required\">Date of Birth is required</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"desc\">Describe yourself</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Please describe yourself\" name=\"desc\" [(ngModel)]=\"model.desc\" #desc=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && desc.invalid }\" required desc />\n            <div *ngIf=\"f.submitted && desc.invalid\" class=\"invalid-feedback\">\n              <div *ngIf=\"desc.errors.required\">Description is required</div>\n            </div>\n          </div>\n          \n         \n          <!--<div class=\"form-group login-group-checkbox\">-->\n          <!--<label for=\"reg_gender\" >Gender</label> <br>-->\n          <!--<input type=\"radio\" class=\"\" name=\"reg_gender\" id=\"male\" placeholder=\"username\">-->\n          <!--<label for=\"male\">Male</label>-->\n          <!--<br>-->\n          <!--<input type=\"radio\" class=\"\" name=\"reg_gender\" id=\"female\" placeholder=\"username\">-->\n          <!--<label for=\"female\">Female</label>-->\n          <!--</div>-->\n          <div class=\"form-group\">\n              <button  class=\"btn\" >Register</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/regservice.service */ "./src/app/services/regservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(RegistermemService) {
        this.RegistermemService = RegistermemService;
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.RegistermemService.getmem().subscribe(function (res) {
            console.log(res);
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        console.log('Function called');
        console.log(JSON.stringify((this.model)));
        alert('Your details are successfully saved!');
        this.submitted = true;
        this.RegistermemService.insertmem(this.model);
        this.showSuccessMessage = true;
        // setTimeout(handler: () => this.showSuccessMessage= false, timeout: 3000 );
        this.submitted = false;
        this.RegistermemService.mem.reset();
        this.RegistermemService.mem.setValue({
            $key: null,
            name: null,
            Contact: null,
            email: null,
            address: null,
            gender: null,
            dob: null,
            desc: null,
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, router, firebase) {
        this.afAuth = afAuth;
        this.router = router;
        this.firebase = firebase;
    }
    AuthService.prototype.getperson = function () {
        this.personList = this.firebase.list('person');
        return this.personList.snapshotChanges();
    };
    AuthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            });
        });
    };
    AuthService.prototype.doSignup = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.getLoggedInUser = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/regservice.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/regservice.service.ts ***!
  \************************************************/
/*! exports provided: RegserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegserviceService", function() { return RegserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegserviceService = /** @class */ (function () {
    function RegserviceService(firebase) {
        this.firebase = firebase;
        this.mem = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Contact: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            desc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    RegserviceService.prototype.getmem = function () {
        this.memList = this.firebase.list('/mem');
        return this.memList.snapshotChanges();
    };
    RegserviceService.prototype.insertmem = function (mem) {
        console.log("inside survey");
        console.log(mem);
        this.memList.push({
            name: mem.name,
            Contact: mem.Contact,
            email: mem.email,
            address: mem.address,
            gender: mem.gender,
            dob: mem.dob,
            desc: mem.desc,
        });
        // this.formList.push("reached data");
    };
    RegserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], RegserviceService);
    return RegserviceService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid row center-content\">\n  <div class=\"col-4\"></div>\n  <div class=\"col-4\">\n      <h3 class=\"card-text\" style=\"padding-top:5px;Font-size:20px;margin-left: 20px;text-decoration: underline\"></h3><br><br>\n      <h3 class=\"text-center\"> SIGN UP </h3>\n      <br>\n      <form [formGroup]=\"SignupForm\" class=\"form-custom center-content text-center\" >\n          <div class=\"form-group\">\n\n              <div class=\"form-label-group \">\n                  <input type=\"email\" id=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Personal Email\" required autofocus>\n                  <label for=\"email\">Email address</label>\n              </div>\n\n              <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n                  <label for=\"password\">Password</label>\n\n              </div>\n\n              <div class=\"form-label-group\">\n                  <input type=\"password\" id=\"inputConfirmPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                  <label for=\"inputConfirmPassword\">Confirm password</label>\n              </div>\n\n\n              <label class=\"error\">{{errorMessage}}</label>\n              <h1 class=\"success\">{{successMessage}}</h1>\n\n              <button type=\"submit\" (click)=\"trySignup(SignupForm.value)\" class=\"btn btn-info form-control col\">Get Started!</button>\n              <hr class=\"my-4\" >\n\n              <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n\n          </div>\n      </form>\n  </div>\n  <div class=\"col-4\"></div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.successMessage = '';
        this.model = {};
        this.createSignupForm();
        this.createLoginForm();
    }
    SignupComponent.prototype.onSubmit = function () {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.createSignupForm = function () {
        this.SignupForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    SignupComponent.prototype.createLoginForm = function () {
        this.LoginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    SignupComponent.prototype.trySignup = function (value) {
        var _this = this;
        this.authService.doSignup(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = '';
            _this.successMessage = 'Your account has been created';
            _this.router.navigate(['/register']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = '';
        });
    };
    SignupComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/register']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    SignupComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/register']);
        }, function (err) { return console.log(err); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/training/training.component.css":
/*!*************************************************!*\
  !*** ./src/app/training/training.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/training/training.component.html":
/*!**************************************************!*\
  !*** ./src/app/training/training.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<h1 style=\"text-align: center\">Trainings</h1>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-sm-12\">           \n              <div class=\"row\">\n                 <div class=\"col-sm-6\">  \n                    <div class=\"jumbotron\">   \n      <h5 style=\"text-align: center ;  font-size:medium\">Fire Safety Training Video</h5>\n      <div class=\"embed-responsive embed-responsive-16by9\" style=\"width: auto;  height: 400px; align-content: center\">\n          <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qhU8BOhrzic\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n      </div>\n    </div>\n  \n  \n\n    <div class=\"col-sm-6\">\n        <div class=\"jumbotron\">  \n      <h5 style=\"text-align: center ;  font-size:medium\">How to Operate Fire Extinguisher</h5>\n\n      <div class=\"embed-responsive embed-responsive-16by9\" style=\"width: auto;  height: 400px; align-content: center\">\n          <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/w4jHpHoYZhk\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n      </div>\n    </div>\n\n  </div>\n  </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-sm-12\">           \n          <div class=\"row\">\n             <div class=\"col-sm-6\">  \n                <div class=\"jumbotron\"> \n      <h5 style=\"text-align: center;  font-size:medium\">Fire Safety Awareness</h5>\n      <div class=\"embed-responsive embed-responsive-16by9\" style=\"width: auto;  height: 400px; align-content: center\">\n          <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/YKgIYadRGjA\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n      <div class=\"jumbotron\">  \n        <h5 style=\"text-align: center;  font-size:medium\">Fire Extinguisher Training</h5>\n        <div class=\"embed-responsive embed-responsive-16by9\" style=\"width: auto;  height: 400px; align-content: center\">\n            <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/leRoRx4mobI\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n          </div>\n  \n      </div>\n    </div>\n          </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-12\">           \n          <div class=\"row\">\n             <div class=\"col-sm-6\">  \n                <div class=\"jumbotron\"> \n          <h5 style=\"text-align: center;  font-size:medium\">Building and Office Evacuation</h5>\n          <div class=\"embed-responsive embed-responsive-16by9\" style=\"width: auto;  height: 400px; align-content: center\">\n              <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UuTowptYlrM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n            </div>\n    \n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n          <div class=\"jumbotron\">  \n            <h5 style=\"text-align: center;  font-size:medium\">Fire Drill Evacuation</h5>\n            <div class=\"embed-responsive embed-responsive-16by9\" style=\"width: auto;  height: 400px; align-content: center\">\n                <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/lAB1TM02moQ\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n              </div>\n      \n          </div>\n        </div>\n</div>\n    </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainingComponent = /** @class */ (function () {
    function TrainingComponent() {
    }
    TrainingComponent.prototype.ngOnInit = function () {
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/usermap/usermap.component.css":
/*!***********************************************!*\
  !*** ./src/app/usermap/usermap.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button, input{\r\n    margin-left: 10px\r\n}\r\n"

/***/ }),

/***/ "./src/app/usermap/usermap.component.html":
/*!************************************************!*\
  !*** ./src/app/usermap/usermap.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n    <div class=\"col-md-12\">\n      <div class=\"text-center\">\n        <h3>\n          <div #gmap style=\"width:100%;height:400px\" ></div>\n        </h3>\n      </div>\n    </div>\n  </div>\n  <!----\n  \n  <div class=\"col-xs-12 col-sm-6 col-md-4\"  *ngFor=\"let location of locationArray\" >\n    <script>\n  \n    console.log(\"chalbsdk\");\n  \n    </script>\n    \n                    <h4 class=\"card-title\">{{location.latitude}}</h4>\n                    <p class=\"card-text\">POC number: {{location.longitude }}</p>\n                    <a href=\"#\" class=\"btn btn-primary btn-sm\" routerLink=\"childReceiver\" routerLinkActive=\"active\" ><i class=\"fa fa-plus\" >View Request</i></a>\n                </div>\n      \n              -->\n  "

/***/ }),

/***/ "./src/app/usermap/usermap.component.ts":
/*!**********************************************!*\
  !*** ./src/app/usermap/usermap.component.ts ***!
  \**********************************************/
/*! exports provided: UsermapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermapComponent", function() { return UsermapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_position_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/position.service */ "./src/app/position.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="@types/googlemaps" />



//import { } from '@types/googlemaps';
var UsermapComponent = /** @class */ (function () {
    function UsermapComponent(PositionMemService) {
        this.PositionMemService = PositionMemService;
        this.iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    }
    UsermapComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("kya bhaiiiiiiiiiiiiiii");
        var mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        this.PositionMemService.getLocation().subscribe(function (res) {
            _this.locationArray = res.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            var _loop_1 = function (i) {
                console.log(i.latitude);
                var location_1 = new google.maps.LatLng(i.latitude, i.longitude);
                // 
                /* this.locationList.push({
                   latitude : this.latitude,
                   longitude : this.longitude
                 });*/
                var marker = new google.maps.Marker({
                    position: location_1,
                    map: _this.map,
                    title: 'Got you!'
                });
                marker.addListener('click', _this.simpleMarkerHandler);
                marker.addListener('click', function () {
                    _this.markerHandler(marker);
                });
            };
            for (var _i = 0, _a = _this.locationArray; _i < _a.length; _i++) {
                var i = _a[_i];
                _loop_1(i);
            }
        });
        /*
        
        */
    };
    UsermapComponent.prototype.ngAfterContentInit = function () {
        console.log("inside survey");
        console.log("User map values below");
        console.log(this.locationArray);
        console.log(JSON.stringify((this.locationArray)));
        console.log("Iteration");
    };
    UsermapComponent.prototype.simpleMarkerHandler = function () {
        alert('Simple Component\'s function...');
    };
    UsermapComponent.prototype.markerHandler = function (marker) {
        alert('Marker\'s Title: ' + marker.getTitle());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], UsermapComponent.prototype, "gmapElement", void 0);
    UsermapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usermap',
            template: __webpack_require__(/*! ./usermap.component.html */ "./src/app/usermap/usermap.component.html"),
            styles: [__webpack_require__(/*! ./usermap.component.css */ "./src/app/usermap/usermap.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_position_service__WEBPACK_IMPORTED_MODULE_1__["PositionService"]])
    ], UsermapComponent);
    return UsermapComponent;
}());



/***/ }),

/***/ "./src/app/vol/vol.component.css":
/*!***************************************!*\
  !*** ./src/app/vol/vol.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    padding-top: 56px;\r\n}\r\n.sidebar {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n}\r\n.sidebar a {\r\n    padding: 8px 8px 8px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n.sidebar a:hover {\r\n    color: #f1f1f1;\r\n}\r\n.sidebar .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n}\r\n.openbtn {\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    background-color: #111;\r\n    color: white;\r\n    padding: 10px 15px;\r\n    border: none;\r\n}\r\n.openbtn:hover {\r\n    background-color: #444;\r\n}\r\n#main {\r\n    transition: margin-left .5s;\r\n    padding: 16px;\r\n}\r\n/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */\r\n@media screen and (max-height: 450px) {\r\n    .sidebar {padding-top: 15px;}\r\n    .sidebar a {font-size: 18px;}\r\n}\r\n#team {\r\n    background: #eee !important;\r\n}\r\n.center-content{\r\n    align-content: center;\r\n    text-align: center;\r\n}\r\n.btn-primary:hover,\r\n.btn-primary:focus {\r\n    background-color: #108d6f;\r\n    border-color: #108d6f;\r\n    box-shadow: none;\r\n    outline: none;\r\n}\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007b5e;\r\n    border-color: #007b5e;\r\n}\r\nsection {\r\n    padding: 60px 0;\r\n}\r\nsection .section-title {\r\n    text-align: center;\r\n    color: #007b5e;\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n#team .card {\r\n    border: none;\r\n    background: #ffffff;\r\n}\r\n.image-flip:hover .backside,\r\n.image-flip.hover .backside {\r\n    -webkit-transform: rotateY(0deg);\r\n    transform: rotateY(0deg);\r\n    border-radius: .25rem;\r\n}\r\n.image-flip:hover .frontside,\r\n.image-flip.hover .frontside {\r\n    -webkit-transform: rotateY(180deg);\r\n    transform: rotateY(180deg);\r\n}\r\n.mainflip {\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -moz-transition: 1s;\r\n    -moz-transform: perspective(1000px);\r\n    -moz-transform-style: preserve-3d;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n    position: relative;\r\n}\r\n.frontside {\r\n    position: relative;\r\n    -webkit-transform: rotateY(0deg);\r\n    -ms-transform: rotateY(0deg);\r\n    z-index: 2;\r\n    margin-bottom: 30px;\r\n}\r\n.backside {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    background: white;\r\n    -webkit-transform: rotateY(-180deg);\r\n    transform: rotateY(-180deg);\r\n    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);\r\n}\r\n.frontside,\r\n\r\n.backside {\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transition: 1s;\r\n    -webkit-transform-style: preserve-3d;\r\n    -moz-transition: 1s;\r\n    -moz-transform-style: preserve-3d;\r\n    -o-transition: 1s;\r\n    -o-transform-style: preserve-3d;\r\n    -ms-transition: 1s;\r\n    -ms-transform-style: preserve-3d;\r\n    transition: 1s;\r\n    transform-style: preserve-3d;\r\n}\r\n.frontside .card,\r\n.backside .card {\r\n    min-height: 312px;\r\n}\r\n.backside .card a {\r\n    font-size: 18px;\r\n    color: #007b5e !important;\r\n}\r\n.frontside .card .card-title,\r\n.backside .card .card-title {\r\n    color: #007b5e !important;\r\n}\r\n.frontside .card .card-body img {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 50%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/vol/vol.component.html":
/*!****************************************!*\
  !*** ./src/app/vol/vol.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<div id=\"mySidebar\" class=\"sidebar\">\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">×</a>\r\n    <a >Profile</a>\r\n    <a >Donors</a>\r\n    <a >Companies</a>\r\n    <a></a>\r\n</div>\r\n\r\n<div id=\"main\">\r\n    <button class=\"openbtn\" (click)=\"openNav()\">☰</button>\r\n\r\n</div>\r\n\r\n\r\n<!-- Page Content -->\r\n<div class=\"container\">\r\n\r\n\r\n    <!-- Page Features -->\r\n\r\n    <!-- Team -->\r\n    <section id=\"team\" class=\"pb-5\" >\r\n\r\n        <div class=\"container\">\r\n            <router-outlet class=\"center-content\"></router-outlet>\r\n            <h5 class=\"section-title h1\">Volunteers</h5>\r\n            <div class=\"row\" >\r\n\r\n                <!-- Team member -->\r\n                <div class=\"col-xs-12 col-sm-6 col-md-4\"  *ngFor=\"let data of DataArray\">\r\n                    <div class=\"image-flip\" ontouchstart=\"this.classList.toggle('hover');\">\r\n                        <div class=\"mainflip\">\r\n                            <div class=\"frontside\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"card-body text-center\">\r\n                                        <br>\r\n                                        <br>\r\n                                        <br>\r\n                                        <h4 class=\"card-title\">Name:{{data.name}}</h4>\r\n                                        <p class=\"card-text\">E-mail: {{data.email}}</p>\r\n                                        <p class=\"card-text\">Contact No: {{data.contact}}</p>\r\n                                         </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"backside\">\r\n                                 <div class=\"card\">\r\n                                    <div class=\"card-body text-center mt-4\">\r\n                                        <br>\r\n                                        <br>\r\n                                        <br>\r\n                                        <h4 class=\"card-title\">Description:<br>{{data.desc}}</h4>\r\n                                        <!--<p class=\"card-text\">POC number: {{donor.PocNo}}</p>-->\r\n                                       \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!--<a href=\"#\" class=\"btn btn-primary btn-sm\" routerLink=\"childDonor\" routerLinkActive=\"active\" ><i class=\"fa fa-plus\" >Public Request</i></a>-->\r\n\r\n        </div>\r\n    </section>\r\n    <!-- Team -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/vol/vol.component.ts":
/*!**************************************!*\
  !*** ./src/app/vol/vol.component.ts ***!
  \**************************************/
/*! exports provided: VolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VolComponent", function() { return VolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_regservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/regservice.service */ "./src/app/services/regservice.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VolComponent = /** @class */ (function () {
    function VolComponent(RegisterService) {
        this.RegisterService = RegisterService;
        this.DataArray = [];
    }
    VolComponent.prototype.openNav = function () {
        document.getElementById("mySidebar").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    };
    VolComponent.prototype.closeNav = function () {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    };
    VolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.RegisterService.getmem().subscribe(function (list) {
            _this.DataArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    VolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vol',
            template: __webpack_require__(/*! ./vol.component.html */ "./src/app/vol/vol.component.html"),
            styles: [__webpack_require__(/*! ./vol.component.css */ "./src/app/vol/vol.component.css")]
        }),
        __metadata("design:paramtypes", [_services_regservice_service__WEBPACK_IMPORTED_MODULE_1__["RegserviceService"]])
    ], VolComponent);
    return VolComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    fireconfig: {
        apiKey: "AIzaSyDz9tH_mlOwk881s6LkxTI_xJDljSa-x9A",
        authDomain: "byculla-fire-station.firebaseapp.com",
        databaseURL: "https://byculla-fire-station.firebaseio.com/",
        projectId: "byculla-fire-station",
        storageBucket: "byculla-fire-station.appspot.com",
        messagingSenderId: "560201586393"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tania Rajabally\Desktop\Firestation\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map