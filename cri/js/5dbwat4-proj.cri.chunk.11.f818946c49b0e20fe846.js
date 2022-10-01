"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[11],{

/***/ 727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Schema)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(pattern$2.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "internalSelectionMenuInjectionKey": () => (/* binding */ internalSelectionMenuInjectionKey),
/* harmony export */   "internalSelectionMenuBodyInjectionKey": () => (/* binding */ internalSelectionMenuBodyInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

const internalSelectionMenuInjectionKey = (0,_utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-internal-select-menu');
const internalSelectionMenuBodyInjectionKey = (0,_utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-internal-select-menu-body');


/***/ }),

/***/ 726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(579);


const {
  cubicBezierEaseInOut
} = _common_common__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  name = 'fade-down',
  fromOffset = '-4px',
  enterDuration = '.3s',
  leaveDuration = '.3s',
  enterCubicBezier = cubicBezierEaseInOut,
  leaveCubicBezier = cubicBezierEaseInOut
} = {}) {
  return [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${fromOffset})`
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-enter-to, &.${name}-transition-leave-from`, {
    opacity: 1,
    transform: 'translateY(0)'
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-leave-active`, {
    transition: `opacity ${leaveDuration} ${leaveCubicBezier}, transform ${leaveDuration} ${leaveCubicBezier}`
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-enter-active`, {
    transition: `opacity ${enterDuration} ${enterCubicBezier}, transform ${enterDuration} ${enterCubicBezier}`
  })];
}

/***/ }),

/***/ 703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAdjustedTo": () => (/* binding */ useAdjustedTo)
/* harmony export */ });
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(708);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _modal_src_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(704);
/* harmony import */ var _drawer_src_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(705);
/* harmony import */ var _popover_src_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(706);
/* harmony import */ var _internal_select_menu_src_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(707);






const teleportDisabled = '__disabled__';
function useAdjustedTo(props) {
    const modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_modal_src_interface__WEBPACK_IMPORTED_MODULE_1__.modalBodyInjectionKey, null);
    const drawer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_drawer_src_interface__WEBPACK_IMPORTED_MODULE_2__.drawerBodyInjectionKey, null);
    const popover = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_popover_src_interface__WEBPACK_IMPORTED_MODULE_3__.popoverBodyInjectionKey, null);
    const selectMenu = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_internal_select_menu_src_interface__WEBPACK_IMPORTED_MODULE_4__.internalSelectionMenuBodyInjectionKey, null);
    return (0,vooks__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
        var _a;
        const { to } = props;
        if (to !== undefined) {
            if (to === false)
                return teleportDisabled;
            if (to === true)
                return 'body';
            return to;
        }
        if (modal === null || modal === void 0 ? void 0 : modal.value) {
            return (_a = modal.value.$el) !== null && _a !== void 0 ? _a : modal.value;
        }
        if (drawer === null || drawer === void 0 ? void 0 : drawer.value)
            return drawer.value;
        if (popover === null || popover === void 0 ? void 0 : popover.value)
            return popover.value;
        if (selectMenu === null || selectMenu === void 0 ? void 0 : selectMenu.value)
            return selectMenu.value;
        return to !== null && to !== void 0 ? to : 'body';
    });
}
// teleport disabled key
useAdjustedTo.tdkey = teleportDisabled;
useAdjustedTo.propTo = {
    type: [String, Object, Boolean],
    default: undefined
};



/***/ }),

/***/ 698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keysOf": () => (/* binding */ keysOf)
/* harmony export */ });
function keysOf(obj) {
    return Object.keys(obj);
}


/***/ }),

/***/ 729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'FormItemFeedback',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        explains: Array,
        feedback: String
    },
    render() {
        var _a;
        const { $slots, feedback, clsPrefix } = this;
        if ($slots.default) {
            return $slots.default();
        }
        return feedback ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: feedback, class: `${clsPrefix}-form-item-feedback__line` }, feedback)) : ((_a = this.explains) === null || _a === void 0 ? void 0 : _a.map((explain) => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: explain, class: `${clsPrefix}-form-item-feedback__line` }, explain))));
    }
}));


/***/ }),

/***/ 574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(690);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(692);
/* harmony import */ var _styles_form_cssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(691);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(698);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(699);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






const formProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { inline: Boolean, labelWidth: [Number, String], labelAlign: String, labelPlacement: {
        type: String,
        default: 'top'
    }, model: {
        type: Object,
        default: () => { }
    }, rules: Object, disabled: Boolean, size: String, showRequireMark: {
        type: Boolean,
        default: undefined
    }, requireMarkPlacement: String, showFeedback: {
        type: Boolean,
        default: true
    }, onSubmit: {
        type: Function,
        default: (e) => e.preventDefault()
    }, showLabel: {
        type: Boolean,
        default: undefined
    } });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Form',
    props: formProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
        (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Form', '-form', _styles_form_cssr__WEBPACK_IMPORTED_MODULE_3__["default"], _styles__WEBPACK_IMPORTED_MODULE_4__["default"], props, mergedClsPrefixRef);
        // from path to form-item
        const formItems = {};
        // for label-width = 'auto'
        const maxChildLabelWidthRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(undefined);
        const deriveMaxChildLabelWidth = (currentWidth) => {
            const currentMaxChildLabelWidth = maxChildLabelWidthRef.value;
            if (currentMaxChildLabelWidth === undefined ||
                currentWidth >= currentMaxChildLabelWidth) {
                maxChildLabelWidthRef.value = currentWidth;
            }
        };
        function validate(validateCallback, shouldRuleBeApplied = () => true) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    const formItemValidationPromises = [];
                    for (const key of (0,_utils__WEBPACK_IMPORTED_MODULE_5__.keysOf)(formItems)) {
                        const formItemInstances = formItems[key];
                        for (const formItemInstance of formItemInstances) {
                            if (formItemInstance.path) {
                                formItemValidationPromises.push(formItemInstance.internalValidate(null, shouldRuleBeApplied));
                            }
                        }
                    }
                    void Promise.all(formItemValidationPromises).then((results) => {
                        if (results.some((result) => !result.valid)) {
                            const errors = results
                                .filter((result) => result.errors)
                                .map((result) => result.errors);
                            if (validateCallback) {
                                validateCallback(errors);
                            }
                            reject(errors);
                        }
                        else {
                            if (validateCallback)
                                validateCallback();
                            resolve();
                        }
                    });
                });
            });
        }
        function restoreValidation() {
            for (const key of (0,_utils__WEBPACK_IMPORTED_MODULE_5__.keysOf)(formItems)) {
                const formItemInstances = formItems[key];
                for (const formItemInstance of formItemInstances) {
                    formItemInstance.restoreValidation();
                }
            }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_6__.formInjectionKey, {
            props,
            maxChildLabelWidthRef,
            deriveMaxChildLabelWidth
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_context__WEBPACK_IMPORTED_MODULE_6__.formItemInstsInjectionKey, { formItems });
        const formExposedMethod = {
            validate,
            restoreValidation
        };
        return Object.assign(formExposedMethod, {
            mergedClsPrefix: mergedClsPrefixRef
        });
    },
    render() {
        const { mergedClsPrefix } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("form", { class: [
                `${mergedClsPrefix}-form`,
                this.inline && `${mergedClsPrefix}-form--inline`
            ], onSubmit: this.onSubmit }, this.$slots));
    }
}));


/***/ }),

/***/ 700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formItemProps": () => (/* binding */ formItemProps),
/* harmony export */   "formItemPropKeys": () => (/* binding */ formItemPropKeys),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var async_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(727);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(712);
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(724);
/* harmony import */ var _mixins_use_form_item__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(728);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(690);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(698);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(702);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(591);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(692);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(710);
/* harmony import */ var _Feedbacks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(729);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(699);
/* harmony import */ var _styles_form_item_cssr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(725);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












const formItemProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { label: String, labelWidth: [Number, String], labelStyle: [String, Object], labelAlign: String, labelPlacement: String, path: String, first: Boolean, rulePath: String, required: Boolean, showRequireMark: {
        type: Boolean,
        default: undefined
    }, requireMarkPlacement: String, showFeedback: {
        type: Boolean,
        default: undefined
    }, rule: [Object, Array], size: String, ignorePathChange: Boolean, validationStatus: String, feedback: String, showLabel: {
        type: Boolean,
        default: undefined
    }, labelProps: Object });
const formItemPropKeys = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.keysOf)(formItemProps);
// wrap sync validator
function wrapValidator(validator, async) {
    return (...args) => {
        var _a;
        try {
            const validateResult = validator(...args);
            if ((!async &&
                (typeof validateResult === 'boolean' ||
                    validateResult instanceof Error ||
                    Array.isArray(validateResult))) || // Error[]
                ((_a = validateResult) === null || _a === void 0 ? void 0 : _a.then)) {
                return validateResult;
            }
            else if (validateResult === undefined) {
                return true;
            }
            else {
                (0,_utils__WEBPACK_IMPORTED_MODULE_3__.warn)('form-item/validate', `You return a ${typeof validateResult} ` +
                    'typed value in the validator method, which is not recommended. Please use ' +
                    (async ? '`Promise`' : '`boolean`, `Error` or `Promise`') +
                    ' typed value instead.');
                return true;
            }
        }
        catch (err) {
            (0,_utils__WEBPACK_IMPORTED_MODULE_3__.warn)('form-item/validate', 'An error is catched in the validation, ' +
                "so the validation won't be done. Your callback in `validate` method of " +
                "`n-form` or `n-form-item` won't be called in this validation.");
            console.error(err);
            // If returns undefined, async-validator won't trigger callback
            // so the result will be abandoned, which means not true and not false
            return undefined;
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'FormItem',
    props: formItemProps,
    setup(props) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.useInjectionInstanceCollection)(_context__WEBPACK_IMPORTED_MODULE_5__.formItemInstsInjectionKey, 'formItems', (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'path'));
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_6__["default"])(props);
        const NForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_5__.formInjectionKey, null);
        const formItemSizeRefs = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.formItemSize)(props);
        const formItemMiscRefs = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.formItemMisc)(props);
        const { validationErrored: validationErroredRef } = formItemMiscRefs;
        const { mergedRequired: mergedRequiredRef, mergedRules: mergedRulesRef } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.formItemRule)(props);
        const { mergedSize: mergedSizeRef } = formItemSizeRefs;
        const { mergedLabelPlacement: labelPlacementRef, mergedLabelAlign: labelTextAlignRef } = formItemMiscRefs;
        const explainsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
        const feedbackIdRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)((0,seemly__WEBPACK_IMPORTED_MODULE_8__.createId)());
        const hasFeedbackRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { feedback } = props;
            if (feedback !== undefined && feedback !== null)
                return true;
            return explainsRef.value.length;
        });
        const mergedDisabledRef = NForm
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(NForm.props, 'disabled')
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Form', '-form-item', _styles_form_item_cssr__WEBPACK_IMPORTED_MODULE_9__["default"], _styles__WEBPACK_IMPORTED_MODULE_10__["default"], props, mergedClsPrefixRef);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'path'), () => {
            if (props.ignorePathChange)
                return;
            restoreValidation();
        });
        function restoreValidation() {
            explainsRef.value = [];
            validationErroredRef.value = false;
            if (props.feedback) {
                feedbackIdRef.value = (0,seemly__WEBPACK_IMPORTED_MODULE_8__.createId)();
            }
        }
        function handleContentBlur() {
            void internalValidate('blur');
        }
        function handleContentChange() {
            void internalValidate('change');
        }
        function handleContentFocus() {
            void internalValidate('focus');
        }
        function handleContentInput() {
            void internalValidate('input');
        }
        function validate(options, callback) {
            return __awaiter(this, void 0, void 0, function* () {
                /** the following code is for compatibility */
                let trigger;
                let validateCallback;
                let shouldRuleBeApplied;
                let asyncValidatorOptions;
                if (typeof options === 'string') {
                    trigger = options;
                    validateCallback = callback;
                }
                else if (options !== null && typeof options === 'object') {
                    trigger = options.trigger;
                    validateCallback = options.callback;
                    shouldRuleBeApplied = options.shouldRuleBeApplied;
                    asyncValidatorOptions = options.options;
                }
                return yield new Promise((resolve, reject) => {
                    void internalValidate(trigger, shouldRuleBeApplied, asyncValidatorOptions).then(({ valid, errors }) => {
                        if (valid) {
                            if (validateCallback) {
                                validateCallback();
                            }
                            resolve();
                        }
                        else {
                            if (validateCallback) {
                                validateCallback(errors);
                            }
                            reject(errors);
                        }
                    });
                });
            });
        }
        const internalValidate = (trigger = null, shouldRuleBeApplied = () => true, options = {
            suppressWarning: true
        }) => __awaiter(this, void 0, void 0, function* () {
            const { path } = props;
            if (!options) {
                options = {};
            }
            else {
                if (!options.first)
                    options.first = props.first;
            }
            const { value: rules } = mergedRulesRef;
            const value = NForm ? (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__["default"])(NForm.props.model, path || '') : undefined;
            const activeRules = (!trigger
                ? rules
                : rules.filter((rule) => {
                    // if (rule.trigger === undefined) return true
                    if (Array.isArray(rule.trigger)) {
                        return rule.trigger.includes(trigger);
                    }
                    else {
                        return rule.trigger === trigger;
                    }
                }))
                .filter(shouldRuleBeApplied)
                .map((rule) => {
                const shallowClonedRule = Object.assign({}, rule);
                if (shallowClonedRule.validator) {
                    shallowClonedRule.validator = wrapValidator(shallowClonedRule.validator, false);
                }
                if (shallowClonedRule.asyncValidator) {
                    shallowClonedRule.asyncValidator = wrapValidator(shallowClonedRule.asyncValidator, true);
                }
                return shallowClonedRule;
            });
            if (!activeRules.length) {
                return yield Promise.resolve({
                    valid: true
                });
            }
            const mergedPath = path !== null && path !== void 0 ? path : '__n_no_path__';
            const validator = new async_validator__WEBPACK_IMPORTED_MODULE_12__["default"]({ [mergedPath]: activeRules });
            return yield new Promise((resolve) => {
                void validator.validate({ [mergedPath]: value }, options, (errors, fields) => {
                    if (errors === null || errors === void 0 ? void 0 : errors.length) {
                        explainsRef.value = errors.map((error) => (error === null || error === void 0 ? void 0 : error.message) || '');
                        validationErroredRef.value = true;
                        resolve({
                            valid: false,
                            errors
                        });
                    }
                    else {
                        restoreValidation();
                        resolve({
                            valid: true
                        });
                    }
                });
            });
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_mixins_use_form_item__WEBPACK_IMPORTED_MODULE_13__.formItemInjectionKey, {
            path: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'path'),
            disabled: mergedDisabledRef,
            mergedSize: formItemSizeRefs.mergedSize,
            mergedValidationStatus: formItemMiscRefs.mergedValidationStatus,
            restoreValidation,
            handleContentBlur,
            handleContentChange,
            handleContentFocus,
            handleContentInput
        });
        const exposedRef = {
            validate,
            restoreValidation,
            internalValidate
        };
        const labelElementRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            if (labelElementRef.value !== null) {
                NForm === null || NForm === void 0 ? void 0 : NForm.deriveMaxChildLabelWidth(Number(getComputedStyle(labelElementRef.value).width.slice(0, -2)));
            }
        });
        return Object.assign(Object.assign(Object.assign(Object.assign({ labelElementRef, mergedClsPrefix: mergedClsPrefixRef, mergedRequired: mergedRequiredRef, hasFeedback: hasFeedbackRef, feedbackId: feedbackIdRef, explains: explainsRef }, formItemMiscRefs), formItemSizeRefs), exposedRef), { cssVars: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                var _a;
                const { value: size } = mergedSizeRef;
                const { value: labelPlacement } = labelPlacementRef;
                const direction = labelPlacement === 'top' ? 'vertical' : 'horizontal';
                const { common: { cubicBezierEaseInOut }, self: { labelTextColor, asteriskColor, lineHeight, feedbackTextColor, feedbackTextColorWarning, feedbackTextColorError, feedbackPadding, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('labelHeight', size)]: labelHeight, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('blankHeight', size)]: blankHeight, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('feedbackFontSize', size)]: feedbackFontSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('feedbackHeight', size)]: feedbackHeight, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('labelPadding', direction)]: labelPadding, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('labelTextAlign', direction)]: labelTextAlign, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)((0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('labelFontSize', labelPlacement), size)]: labelFontSize } } = themeRef.value;
                let mergedLabelTextAlign = (_a = labelTextAlignRef.value) !== null && _a !== void 0 ? _a : labelTextAlign;
                if (labelPlacement === 'top') {
                    mergedLabelTextAlign =
                        mergedLabelTextAlign === 'right' ? 'flex-end' : 'flex-start';
                }
                const cssVars = {
                    '--n-bezier': cubicBezierEaseInOut,
                    '--n-line-height': lineHeight,
                    '--n-blank-height': blankHeight,
                    '--n-label-font-size': labelFontSize,
                    '--n-label-text-align': mergedLabelTextAlign,
                    '--n-label-height': labelHeight,
                    '--n-label-padding': labelPadding,
                    '--n-asterisk-color': asteriskColor,
                    '--n-label-text-color': labelTextColor,
                    '--n-feedback-padding': feedbackPadding,
                    '--n-feedback-font-size': feedbackFontSize,
                    '--n-feedback-height': feedbackHeight,
                    '--n-feedback-text-color': feedbackTextColor,
                    '--n-feedback-text-color-warning': feedbackTextColorWarning,
                    '--n-feedback-text-color-error': feedbackTextColorError
                };
                return cssVars;
            }) });
    },
    render() {
        var _a;
        const { $slots, mergedClsPrefix, mergedShowLabel, mergedShowRequireMark, mergedRequireMarkPlacement } = this;
        const renderedShowRequireMark = mergedShowRequireMark !== undefined
            ? mergedShowRequireMark
            : this.mergedRequired;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                `${mergedClsPrefix}-form-item`,
                `${mergedClsPrefix}-form-item--${this.mergedSize}-size`,
                `${mergedClsPrefix}-form-item--${this.mergedLabelPlacement}-labelled`,
                !mergedShowLabel && `${mergedClsPrefix}-form-item--no-label`
            ], style: this.cssVars },
            mergedShowLabel && (this.label || $slots.label) ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("label", Object.assign({}, this.labelProps, { class: [
                    (_a = this.labelProps) === null || _a === void 0 ? void 0 : _a.class,
                    `${mergedClsPrefix}-form-item-label`
                ], style: this.mergedLabelStyle, ref: "labelElementRef" }),
                mergedRequireMarkPlacement !== 'left'
                    ? $slots.label
                        ? $slots.label()
                        : this.label
                    : null,
                renderedShowRequireMark ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-form-item-label__asterisk` }, mergedRequireMarkPlacement !== 'left' ? '\u00A0*' : '*\u00A0')) : (mergedRequireMarkPlacement === 'right-hanging' && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-form-item-label__asterisk-placeholder` }, '\u00A0*'))),
                mergedRequireMarkPlacement === 'left'
                    ? $slots.label
                        ? $slots.label()
                        : this.label
                    : null)) : null,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                    `${mergedClsPrefix}-form-item-blank`,
                    this.mergedValidationStatus &&
                        `${mergedClsPrefix}-form-item-blank--${this.mergedValidationStatus}`
                ] }, $slots),
            this.mergedShowFeedback ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: this.feedbackId, class: `${mergedClsPrefix}-form-item-feedback-wrapper` },
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "fade-down-transition", mode: "out-in" }, {
                    default: () => {
                        const feedbacks = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_Feedbacks__WEBPACK_IMPORTED_MODULE_15__["default"], { clsPrefix: mergedClsPrefix, explains: this.explains, feedback: this.feedback }, { default: $slots.feedback }));
                        const { hasFeedback, mergedValidationStatus } = this;
                        return hasFeedback || $slots.feedback ? (mergedValidationStatus === 'warning' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "controlled-warning", class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--warning` }, feedbacks)) : mergedValidationStatus === 'error' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "controlled-error", class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--error` }, feedbacks)) : mergedValidationStatus === 'success' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "controlled-success", class: `${mergedClsPrefix}-form-item-feedback ${mergedClsPrefix}-form-item-feedback--success` }, feedbacks)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "controlled-default", class: `${mergedClsPrefix}-form-item-feedback` }, feedbacks))) : null;
                    }
                }))) : null));
    }
}));


/***/ }),

/***/ 699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formInjectionKey": () => (/* binding */ formInjectionKey),
/* harmony export */   "formItemInstsInjectionKey": () => (/* binding */ formItemInstsInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

const formInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-form');
const formItemInstsInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-form-item-insts');


/***/ }),

/***/ 725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var _styles_transitions_fade_down_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(726);

 // vars:
// --n-line-height
// --n-blank-height
// --n-feedback-padding
// --n-feedback-font-size
// --n-label-font-size-left
// --n-label-font-size-top
// --n-label-height
// --n-label-padding
// --n-asterisk-color
// --n-label-text-color
// --n-bezier
// --n-feedback-text-color
// --n-feedback-text-color-warning
// --n-feedback-text-color-error
// --n-label-text-align
// --n-label-padding

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item', {
  display: 'grid',
  lineHeight: 'var(--n-line-height)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item-label', `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('asterisk', `
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('asterisk-placeholder', `
 visibility: hidden; 
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item-blank', {
  gridArea: 'blank',
  minHeight: 'var(--n-blank-height)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('left-labelled', `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item-label', `
 height: var(--n-blank-height);
 line-height: var(--n-blank-height);
 box-sizing: border-box;
 white-space: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('top-labelled', `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: var(--n-label-height) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('no-label', `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item-label', {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'var(--n-label-text-align)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item-blank', `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item-feedback-wrapper', `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:not(:empty)', `
 padding: var(--n-feedback-padding);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item-feedback', {
  transition: 'color .3s var(--n-bezier)',
  color: 'var(--n-feedback-text-color)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('warning', {
  color: 'var(--n-feedback-text-color-warning)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('error', {
  color: 'var(--n-feedback-text-color-error)'
}), (0,_styles_transitions_fade_down_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  fromOffset: '-3px',
  enterDuration: '.3s',
  leaveDuration: '.2s'
})])])]));

/***/ }),

/***/ 691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('inline', `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('form-item', {
  width: 'auto',
  marginRight: '18px'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:last-child', {
  marginRight: 0
})])])]));

/***/ }),

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formItemSize": () => (/* binding */ formItemSize),
/* harmony export */   "formItemMisc": () => (/* binding */ formItemMisc),
/* harmony export */   "formItemRule": () => (/* binding */ formItemRule)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(712);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(699);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(711);




function formItemSize(props) {
    const NForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.formInjectionKey, null);
    return {
        mergedSize: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            if (props.size !== undefined)
                return props.size;
            if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.size) !== undefined)
                return NForm.props.size;
            return 'medium';
        })
    };
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function formItemMisc(props) {
    const NForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.formInjectionKey, null);
    const mergedLabelWidthRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        if (mergedLabelPlacementRef.value === 'top')
            return;
        const { labelWidth } = props;
        if (labelWidth !== undefined && labelWidth !== 'auto') {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatLength)(labelWidth);
        }
        if (labelWidth === 'auto' || (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelWidth) === 'auto') {
            const autoComputedWidth = NForm === null || NForm === void 0 ? void 0 : NForm.maxChildLabelWidthRef.value;
            if (autoComputedWidth !== undefined) {
                return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatLength)(autoComputedWidth);
            }
            else {
                return undefined;
            }
        }
        if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.labelWidth) !== undefined) {
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.formatLength)(NForm.props.labelWidth);
        }
        return undefined;
    });
    const mergedLabelPlacementRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { labelPlacement } = props;
        if (labelPlacement !== undefined)
            return labelPlacement;
        if (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelPlacement)
            return NForm.props.labelPlacement;
        return 'top';
    });
    const mergedLabelAlignRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { labelAlign } = props;
        if (labelAlign)
            return labelAlign;
        if (NForm === null || NForm === void 0 ? void 0 : NForm.props.labelAlign)
            return NForm.props.labelAlign;
        return undefined;
    });
    const mergedLabelStyleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return [
            (_a = props.labelProps) === null || _a === void 0 ? void 0 : _a.style,
            props.labelStyle,
            {
                width: mergedLabelWidthRef.value
            }
        ];
    });
    const mergedShowRequireMarkRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { showRequireMark } = props;
        if (showRequireMark !== undefined)
            return showRequireMark;
        return NForm === null || NForm === void 0 ? void 0 : NForm.props.showRequireMark;
    });
    const mergedRequireMarkPlacementRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { requireMarkPlacement } = props;
        if (requireMarkPlacement !== undefined)
            return requireMarkPlacement;
        return (NForm === null || NForm === void 0 ? void 0 : NForm.props.requireMarkPlacement) || 'right';
    });
    const validationErroredRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    const mergedValidationStatusRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { validationStatus } = props;
        if (validationStatus !== undefined)
            return validationStatus;
        if (validationErroredRef.value)
            return 'error';
        return undefined;
    });
    const mergedShowFeedbackRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { showFeedback } = props;
        if (showFeedback !== undefined)
            return showFeedback;
        if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.showFeedback) !== undefined)
            return NForm.props.showFeedback;
        return true;
    });
    const mergedShowLabelRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { showLabel } = props;
        if (showLabel !== undefined)
            return showLabel;
        if ((NForm === null || NForm === void 0 ? void 0 : NForm.props.showLabel) !== undefined)
            return NForm.props.showLabel;
        return true;
    });
    return {
        validationErrored: validationErroredRef,
        mergedLabelStyle: mergedLabelStyleRef,
        mergedLabelPlacement: mergedLabelPlacementRef,
        mergedLabelAlign: mergedLabelAlignRef,
        mergedShowRequireMark: mergedShowRequireMarkRef,
        mergedRequireMarkPlacement: mergedRequireMarkPlacementRef,
        mergedValidationStatus: mergedValidationStatusRef,
        mergedShowFeedback: mergedShowFeedbackRef,
        mergedShowLabel: mergedShowLabelRef
    };
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function formItemRule(props) {
    const NForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_context__WEBPACK_IMPORTED_MODULE_1__.formInjectionKey, null);
    const compatibleRulePathRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { rulePath } = props;
        if (rulePath !== undefined)
            return rulePath;
        const { path } = props;
        if (path !== undefined)
            return path;
        return undefined;
    });
    const mergedRulesRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const rules = [];
        const { rule } = props;
        if (rule !== undefined) {
            if (Array.isArray(rule))
                rules.push(...rule);
            else
                rules.push(rule);
        }
        if (NForm) {
            const { rules: formRules } = NForm.props;
            const { value: rulePath } = compatibleRulePathRef;
            if (formRules !== undefined && rulePath !== undefined) {
                const formRule = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__["default"])(formRules, rulePath);
                if (formRule !== undefined) {
                    if (Array.isArray(formRule)) {
                        rules.push(...formRule);
                    }
                    else {
                        // terminate object must be a form item rule
                        rules.push(formRule);
                    }
                }
            }
        }
        return rules;
    });
    const hasRequiredRuleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return mergedRulesRef.value.some((rule) => rule.required);
    });
    // deprecated
    const mergedRequiredRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        return hasRequiredRuleRef.value || props.required;
    });
    return {
        mergedRules: mergedRulesRef,
        mergedRequired: mergedRequiredRef
    };
}


/***/ }),

/***/ 693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    feedbackPadding: '4px 0 0 2px',
    feedbackHeightSmall: '24px',
    feedbackHeightMedium: '24px',
    feedbackHeightLarge: '26px',
    feedbackFontSizeSmall: '13px',
    feedbackFontSizeMedium: '14px',
    feedbackFontSizeLarge: '14px',
    labelFontSizeLeftSmall: '14px',
    labelFontSizeLeftMedium: '14px',
    labelFontSizeLeftLarge: '15px',
    labelFontSizeTopSmall: '13px',
    labelFontSizeTopMedium: '14px',
    labelFontSizeTopLarge: '14px',
    labelHeightSmall: '24px',
    labelHeightMedium: '26px',
    labelHeightLarge: '28px',
    labelPaddingVertical: '0 0 8px 2px',
    labelPaddingHorizontal: '0 12px 0 0',
    labelTextAlignVertical: 'left',
    labelTextAlignHorizontal: 'right'
});


/***/ }),

/***/ 692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(694);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(693);


const self = (vars) => {
    const { heightSmall, heightMedium, heightLarge, textColor1, errorColor, warningColor, lineHeight, textColor3 } = vars;
    return Object.assign(Object.assign({}, _common__WEBPACK_IMPORTED_MODULE_0__["default"]), { blankHeightSmall: heightSmall, blankHeightMedium: heightMedium, blankHeightLarge: heightLarge, lineHeight, labelTextColor: textColor1, asteriskColor: errorColor, feedbackTextColorError: errorColor, feedbackTextColorWarning: warningColor, feedbackTextColor: textColor3 });
};
const formLight = {
    name: 'Form',
    common: _styles_common__WEBPACK_IMPORTED_MODULE_1__["default"],
    self
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formLight);


/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ })

}]);