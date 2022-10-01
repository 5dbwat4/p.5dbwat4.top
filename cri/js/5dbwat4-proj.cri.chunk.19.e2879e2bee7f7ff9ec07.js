"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[19],{

/***/ 740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ 743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ 739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(740);

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(743);

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(746);
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ 737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(738);
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(739);
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(741);
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(742);
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(744);






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ 750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "on": () => (/* binding */ on),
/* harmony export */   "off": () => (/* binding */ off)
/* harmony export */ });
/* harmony import */ var _traps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(751);

// currently `once` and `passive` is not supported
function createDelegate() {
    if (typeof window === 'undefined') {
        return {
            on: () => { },
            off: () => { }
        };
    }
    const propagationStopped = new WeakMap();
    const immediatePropagationStopped = new WeakMap();
    function trackPropagation() {
        propagationStopped.set(this, true);
    }
    function trackImmediate() {
        propagationStopped.set(this, true);
        immediatePropagationStopped.set(this, true);
    }
    function spy(event, propName, fn) {
        const source = event[propName];
        event[propName] = function () {
            fn.apply(event, arguments);
            return source.apply(event, arguments);
        };
        return event;
    }
    function unspy(event, propName) {
        event[propName] = Event.prototype[propName];
    }
    const currentTargets = new WeakMap();
    const currentTargetDescriptor = Object.getOwnPropertyDescriptor(Event.prototype, 'currentTarget');
    function getCurrentTarget() {
        var _a;
        return (_a = currentTargets.get(this)) !== null && _a !== void 0 ? _a : null;
    }
    function defineCurrentTarget(event, getter) {
        if (currentTargetDescriptor === undefined)
            return;
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            enumerable: true,
            get: getter !== null && getter !== void 0 ? getter : currentTargetDescriptor.get
        });
    }
    const phaseToTypeToElToHandlers = {
        bubble: {},
        capture: {}
    };
    const typeToWindowEventHandlers = {};
    function createUnifiedHandler() {
        const delegeteHandler = function (e) {
            const { type, eventPhase, target, bubbles } = e;
            if (eventPhase === 2)
                return;
            const phase = eventPhase === 1 ? 'capture' : 'bubble';
            let cursor = target;
            const path = [];
            // collecting bubble path
            while (true) {
                if (cursor === null)
                    cursor = window;
                path.push(cursor);
                if (cursor === window) {
                    break;
                }
                // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                cursor = (cursor.parentNode || null);
            }
            const captureElToHandlers = phaseToTypeToElToHandlers.capture[type];
            const bubbleElToHandlers = phaseToTypeToElToHandlers.bubble[type];
            spy(e, 'stopPropagation', trackPropagation);
            spy(e, 'stopImmediatePropagation', trackImmediate);
            defineCurrentTarget(e, getCurrentTarget);
            if (phase === 'capture') {
                if (captureElToHandlers === undefined)
                    return;
                // capture
                for (let i = path.length - 1; i >= 0; --i) {
                    if (propagationStopped.has(e))
                        break;
                    const target = path[i];
                    const handlers = captureElToHandlers.get(target);
                    if (handlers !== undefined) {
                        currentTargets.set(e, target);
                        for (const handler of handlers) {
                            if (immediatePropagationStopped.has(e))
                                break;
                            handler(e);
                        }
                    }
                    if (i === 0 && !bubbles && bubbleElToHandlers !== undefined) {
                        const bubbleHandlers = bubbleElToHandlers.get(target);
                        if (bubbleHandlers !== undefined) {
                            for (const handler of bubbleHandlers) {
                                if (immediatePropagationStopped.has(e))
                                    break;
                                handler(e);
                            }
                        }
                    }
                }
            }
            else if (phase === 'bubble') {
                if (bubbleElToHandlers === undefined)
                    return;
                // bubble
                for (let i = 0; i < path.length; ++i) {
                    if (propagationStopped.has(e))
                        break;
                    const target = path[i];
                    const handlers = bubbleElToHandlers.get(target);
                    if (handlers !== undefined) {
                        currentTargets.set(e, target);
                        for (const handler of handlers) {
                            if (immediatePropagationStopped.has(e))
                                break;
                            handler(e);
                        }
                    }
                }
            }
            unspy(e, 'stopPropagation');
            unspy(e, 'stopImmediatePropagation');
            defineCurrentTarget(e);
        };
        delegeteHandler.displayName = 'evtdUnifiedHandler';
        return delegeteHandler;
    }
    function createUnifiedWindowEventHandler() {
        const delegateHandler = function (e) {
            const { type, eventPhase } = e;
            if (eventPhase !== 2)
                return;
            const handlers = typeToWindowEventHandlers[type];
            if (handlers === undefined)
                return;
            handlers.forEach((handler) => handler(e));
        };
        delegateHandler.displayName = 'evtdUnifiedWindowEventHandler';
        return delegateHandler;
    }
    const unifiedHandler = createUnifiedHandler();
    const unfiendWindowEventHandler = createUnifiedWindowEventHandler();
    function ensureElToHandlers(phase, type) {
        const phaseHandlers = phaseToTypeToElToHandlers[phase];
        if (phaseHandlers[type] === undefined) {
            phaseHandlers[type] = new Map();
            window.addEventListener(type, unifiedHandler, phase === 'capture');
        }
        return phaseHandlers[type];
    }
    function ensureWindowEventHandlers(type) {
        const windowEventHandlers = typeToWindowEventHandlers[type];
        if (windowEventHandlers === undefined) {
            typeToWindowEventHandlers[type] = new Set();
            window.addEventListener(type, unfiendWindowEventHandler);
        }
        return typeToWindowEventHandlers[type];
    }
    function ensureHandlers(elToHandlers, el) {
        let elHandlers = elToHandlers.get(el);
        if (elHandlers === undefined) {
            elToHandlers.set(el, (elHandlers = new Set()));
        }
        return elHandlers;
    }
    function handlerExist(el, phase, type, handler) {
        const elToHandlers = phaseToTypeToElToHandlers[phase][type];
        // phase ${type} event has handlers
        if (elToHandlers !== undefined) {
            const handlers = elToHandlers.get(el);
            // phase using el with ${type} event has handlers
            if (handlers !== undefined) {
                if (handlers.has(handler))
                    return true;
            }
        }
        return false;
    }
    function windowEventHandlerExist(type, handler) {
        const handlers = typeToWindowEventHandlers[type];
        if (handlers !== undefined) {
            if (handlers.has(handler)) {
                return true;
            }
        }
        return false;
    }
    function on(type, el, handler, options) {
        let mergedHandler;
        if (typeof options === 'object' && options.once === true) {
            mergedHandler = (e) => {
                off(type, el, mergedHandler, options);
                handler(e);
            };
        }
        else {
            mergedHandler = handler;
        }
        const trapped = (0,_traps__WEBPACK_IMPORTED_MODULE_0__.trapOn)(type, el, mergedHandler, options);
        if (trapped)
            return;
        const phase = options === true ||
            (typeof options === 'object' && options.capture === true)
            ? 'capture'
            : 'bubble';
        const elToHandlers = ensureElToHandlers(phase, type);
        const handlers = ensureHandlers(elToHandlers, el);
        if (!handlers.has(mergedHandler))
            handlers.add(mergedHandler);
        if (el === window) {
            const windowEventHandlers = ensureWindowEventHandlers(type);
            if (!windowEventHandlers.has(mergedHandler)) {
                windowEventHandlers.add(mergedHandler);
            }
        }
    }
    function off(type, el, handler, options) {
        const trapped = (0,_traps__WEBPACK_IMPORTED_MODULE_0__.trapOff)(type, el, handler, options);
        if (trapped)
            return;
        const capture = options === true ||
            (typeof options === 'object' && options.capture === true);
        const phase = capture ? 'capture' : 'bubble';
        const elToHandlers = ensureElToHandlers(phase, type);
        const handlers = ensureHandlers(elToHandlers, el);
        if (el === window) {
            const mirrorPhase = capture ? 'bubble' : 'capture';
            if (!handlerExist(el, mirrorPhase, type, handler) &&
                windowEventHandlerExist(type, handler)) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const windowEventHandlers = typeToWindowEventHandlers[type];
                windowEventHandlers.delete(handler);
                if (windowEventHandlers.size === 0) {
                    window.removeEventListener(type, unfiendWindowEventHandler);
                    typeToWindowEventHandlers[type] = undefined;
                }
            }
        }
        if (handlers.has(handler))
            handlers.delete(handler);
        if (handlers.size === 0) {
            elToHandlers.delete(el);
        }
        if (elToHandlers.size === 0) {
            window.removeEventListener(type, unifiedHandler, phase === 'capture');
            phaseToTypeToElToHandlers[phase][type] = undefined;
        }
    }
    return {
        on: on,
        off: off
    };
}
const { on, off } = createDelegate();



/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trapOff": () => (/* binding */ trapOff),
/* harmony export */   "trapOn": () => (/* binding */ trapOn)
/* harmony export */ });
/* harmony import */ var _delegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(750);

const traps = {
    mousemoveoutside: new WeakMap(),
    clickoutside: new WeakMap()
};
function createTrapHandler(name, el, originalHandler) {
    if (name === 'mousemoveoutside') {
        const moveHandler = (e) => {
            if (el.contains(e.target))
                return;
            originalHandler(e);
        };
        return {
            mousemove: moveHandler,
            touchstart: moveHandler
        };
    }
    else if (name === 'clickoutside') {
        let mouseDownOutside = false;
        const downHandler = (e) => {
            mouseDownOutside = !el.contains(e.target);
        };
        const upHanlder = (e) => {
            if (!mouseDownOutside)
                return;
            if (el.contains(e.target))
                return;
            originalHandler(e);
        };
        return {
            mousedown: downHandler,
            mouseup: upHanlder,
            touchstart: downHandler,
            touchend: upHanlder
        };
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.error(`[evtd/create-trap-handler]: name \`${name}\` is invalid. This could be a bug of evtd.`);
    return {};
}
function ensureTrapHandlers(name, el, handler) {
    const handlers = traps[name];
    let elHandlers = handlers.get(el);
    if (elHandlers === undefined) {
        handlers.set(el, elHandlers = new WeakMap());
    }
    let trapHandler = elHandlers.get(handler);
    if (trapHandler === undefined) {
        elHandlers.set(handler, trapHandler = createTrapHandler(name, el, handler));
    }
    return trapHandler;
}
function trapOn(name, el, handler, options) {
    if (name === 'mousemoveoutside' ||
        name === 'clickoutside') {
        const trapHandlers = ensureTrapHandlers(name, el, handler);
        Object.keys(trapHandlers).forEach(key => {
            (0,_delegate__WEBPACK_IMPORTED_MODULE_0__.on)(key, document, trapHandlers[key], options);
        });
        return true;
    }
    return false;
}
function trapOff(name, el, handler, options) {
    if (name === 'mousemoveoutside' ||
        name === 'clickoutside') {
        const trapHandlers = ensureTrapHandlers(name, el, handler);
        Object.keys(trapHandlers).forEach(key => {
            (0,_delegate__WEBPACK_IMPORTED_MODULE_0__.off)(key, document, trapHandlers[key], options);
        });
        return true;
    }
    return false;
}



/***/ }),

/***/ 766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(767);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(774);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var _icon_switch_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(770);
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(768);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BaseClear',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        show: Boolean,
        onClear: Function
    },
    setup(props) {
        (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('-base-clear', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__["default"], (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'clsPrefix'));
        return {
            handleMouseDown(e) {
                e.preventDefault();
            }
        };
    },
    render() {
        const { clsPrefix } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-clear` },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icon_switch_transition__WEBPACK_IMPORTED_MODULE_3__["default"], null, {
                default: () => {
                    var _a, _b;
                    return this.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icon__WEBPACK_IMPORTED_MODULE_4__["default"], { clsPrefix: clsPrefix, key: "dismiss", class: `${clsPrefix}-base-clear__clear`, onClick: this.onClear, onMousedown: this.handleMouseDown, "data-clear": true }, {
                        default: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icons__WEBPACK_IMPORTED_MODULE_5__["default"], null)
                    })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "icon", class: `${clsPrefix}-base-clear__placeholder` }, (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)));
                }
            })));
    }
}));


/***/ }),

/***/ 768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var _styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(769);

 // vars:
// --n-bezier
// --n-clear-color
// --n-clear-size
// --n-clear-color-hover
// --n-clear-color-pressed

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-clear', `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('clear', `
 font-size: var(--n-clear-size);
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', `
 color: var(--n-clear-color-hover)!important;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', `
 color: var(--n-clear-color-pressed)!important;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', `
 display: flex;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('clear, placeholder', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [(0,_styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  originalTransform: 'translateX(-50%) translateY(-50%)',
  left: '50%',
  top: '50%'
})])])]));

/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'FadeInExpandTransition',
    props: {
        appear: Boolean,
        group: Boolean,
        mode: String,
        onLeave: Function,
        onAfterLeave: Function,
        onAfterEnter: Function,
        width: Boolean,
        // reverse mode is only used in tree
        // it make it from expanded to collapsed after mounted
        reverse: Boolean
    },
    setup(props, { slots }) {
        function handleBeforeLeave(el) {
            if (props.width) {
                el.style.maxWidth = `${el.offsetWidth}px`;
            }
            else {
                el.style.maxHeight = `${el.offsetHeight}px`;
            }
            void el.offsetWidth;
        }
        function handleLeave(el) {
            if (props.width) {
                el.style.maxWidth = '0';
            }
            else {
                el.style.maxHeight = '0';
            }
            void el.offsetWidth;
            const { onLeave } = props;
            if (onLeave)
                onLeave();
        }
        function handleAfterLeave(el) {
            if (props.width) {
                el.style.maxWidth = '';
            }
            else {
                el.style.maxHeight = '';
            }
            const { onAfterLeave } = props;
            if (onAfterLeave)
                onAfterLeave();
        }
        function handleEnter(el) {
            el.style.transition = 'none';
            if (props.width) {
                const memorizedWidth = el.offsetWidth;
                el.style.maxWidth = '0';
                void el.offsetWidth;
                el.style.transition = '';
                el.style.maxWidth = `${memorizedWidth}px`;
            }
            else {
                if (props.reverse) {
                    el.style.maxHeight = `${el.offsetHeight}px`;
                    void el.offsetHeight;
                    el.style.transition = '';
                    el.style.maxHeight = '0';
                }
                else {
                    const memorizedHeight = el.offsetHeight;
                    el.style.maxHeight = '0';
                    void el.offsetWidth;
                    el.style.transition = '';
                    el.style.maxHeight = `${memorizedHeight}px`;
                }
            }
            void el.offsetWidth;
        }
        function handleAfterEnter(el) {
            var _a;
            if (props.width) {
                el.style.maxWidth = '';
            }
            else {
                if (!props.reverse) {
                    el.style.maxHeight = '';
                }
            }
            (_a = props.onAfterEnter) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        return () => {
            const type = props.group ? vue__WEBPACK_IMPORTED_MODULE_0__.TransitionGroup : vue__WEBPACK_IMPORTED_MODULE_0__.Transition;
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(type, {
                name: props.width
                    ? 'fade-in-width-expand-transition'
                    : 'fade-in-height-expand-transition',
                mode: props.mode,
                appear: props.appear,
                onEnter: handleEnter,
                onAfterEnter: handleAfterEnter,
                onBeforeLeave: handleBeforeLeave,
                onLeave: handleLeave,
                onAfterLeave: handleAfterLeave
            }, slots);
        };
    }
}));


/***/ }),

/***/ 770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(771);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BaseIconSwitchTransition',
    setup(_, { slots }) {
        const isMountedRef = (0,vooks__WEBPACK_IMPORTED_MODULE_1__["default"])();
        return () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "icon-switch-transition", appear: isMountedRef.value }, slots));
    }
}));


/***/ }),

/***/ 787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'ChevronDown',
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z", fill: "currentColor" })));
    }
}));


/***/ }),

/***/ 774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _replaceable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_replaceable__WEBPACK_IMPORTED_MODULE_1__.replaceable)('clear', (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { viewBox: "0 0 16 16", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("g", { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("g", { fill: "currentColor", "fill-rule": "nonzero" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z" }))))));


/***/ }),

/***/ 789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Eye',
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z", fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "32" }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { cx: "256", cy: "256", r: "80", fill: "none", stroke: "currentColor", "stroke-miterlimit": "10", "stroke-width": "32" })));
    }
}));


/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'EyeOff',
    render() {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z", fill: "currentColor" }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z", fill: "currentColor" }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z", fill: "currentColor" }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z", fill: "currentColor" }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("path", { d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z", fill: "currentColor" })));
    }
}));


/***/ }),

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(767);
/* harmony import */ var _icon_switch_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(770);
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(786);




const duration = '1.6s';
// The loading svg dom comes from https://codepen.io/FezVrasta/pen/oXrgdR
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BaseLoading',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        scale: {
            type: Number,
            default: 1
        },
        radius: {
            type: Number,
            default: 100
        },
        strokeWidth: {
            type: Number,
            default: 28
        },
        stroke: {
            type: String,
            default: undefined
        },
        show: {
            type: Boolean,
            default: true
        }
    },
    setup(props) {
        (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('-base-loading', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__["default"], (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'clsPrefix'));
    },
    render() {
        const { clsPrefix, radius, strokeWidth, stroke, scale } = this;
        const scaledRadius = radius / scale;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${clsPrefix}-base-loading`, role: "img", "aria-label": "loading" },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icon_switch_transition__WEBPACK_IMPORTED_MODULE_3__["default"], null, {
                default: () => this.show ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { class: `${clsPrefix}-base-loading__icon`, viewBox: `0 0 ${2 * scaledRadius} ${2 * scaledRadius}`, xmlns: "http://www.w3.org/2000/svg", style: { color: stroke } },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("g", null,
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${scaledRadius} ${scaledRadius};270 ${scaledRadius} ${scaledRadius}`, begin: "0s", dur: duration, fill: "freeze", repeatCount: "indefinite" }),
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("circle", { fill: "none", stroke: "currentColor", "stroke-width": strokeWidth, "stroke-linecap": "round", cx: scaledRadius, cy: scaledRadius, r: radius - strokeWidth / 2, "stroke-dasharray": 5.67 * radius, "stroke-dashoffset": 18.48 * radius },
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("animateTransform", { attributeName: "transform", type: "rotate", values: `0 ${scaledRadius} ${scaledRadius};135 ${scaledRadius} ${scaledRadius};450 ${scaledRadius} ${scaledRadius}`, begin: "0s", dur: duration, fill: "freeze", repeatCount: "indefinite" }),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("animate", { attributeName: "stroke-dashoffset", values: `${5.67 * radius};${1.42 * radius};${5.67 * radius}`, begin: "0s", dur: duration, fill: "freeze", repeatCount: "indefinite" }))))) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "placeholder", class: `${clsPrefix}-base-loading__placeholder` }, this.$slots))
            })));
    }
}));


/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var _styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(769);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-loading', `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [(0,_styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  left: '50%',
  top: '50%',
  originalTransform: 'translateX(-50%) translateY(-50%)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', `
 height: 1em;
 width: 1em;
 `, [(0,_styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])()])]));

/***/ }),

/***/ 757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "XScrollbar": () => (/* binding */ XScrollbar)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var evtd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(750);
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(762);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(758);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(690);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(755);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(761);
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(759);







const scrollbarProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { size: {
        type: Number,
        default: 5
    }, duration: {
        type: Number,
        default: 0
    }, scrollable: {
        type: Boolean,
        default: true
    }, xScrollable: Boolean, useUnifiedContainer: Boolean, triggerDisplayManually: Boolean, 
    // If container is set, resize observer won't not attached
    container: Function, content: Function, containerClass: String, containerStyle: [String, Object], contentClass: String, contentStyle: [String, Object], horizontalRailStyle: [String, Object], verticalRailStyle: [String, Object], onScroll: Function, onWheel: Function, onResize: Function, internalOnUpdateScrollLeft: Function });
const Scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Scrollbar',
    props: scrollbarProps,
    inheritAttrs: false,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
        // dom ref
        const wrapperRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const containerRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const contentRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const yRailRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const xRailRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        // data ref
        const contentHeightRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const contentWidthRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const containerHeightRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const containerWidthRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const yRailSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const xRailSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const containerScrollTopRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const containerScrollLeftRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
        const isShowXBarRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isShowYBarRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let yBarPressed = false;
        let xBarPressed = false;
        let xBarVanishTimerId;
        let yBarVanishTimerId;
        let memoYTop = 0;
        let memoXLeft = 0;
        let memoMouseX = 0;
        let memoMouseY = 0;
        const isIos = (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])();
        const yBarSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: containerHeight } = containerHeightRef;
            const { value: contentHeight } = contentHeightRef;
            const { value: yRailSize } = yRailSizeRef;
            if (containerHeight === null ||
                contentHeight === null ||
                yRailSize === null) {
                return 0;
            }
            else {
                return Math.min(containerHeight, (yRailSize * containerHeight) / contentHeight + props.size * 1.5);
            }
        });
        const yBarSizePxRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return `${yBarSizeRef.value}px`;
        });
        const xBarSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: containerWidth } = containerWidthRef;
            const { value: contentWidth } = contentWidthRef;
            const { value: xRailSize } = xRailSizeRef;
            if (containerWidth === null ||
                contentWidth === null ||
                xRailSize === null) {
                return 0;
            }
            else {
                return (xRailSize * containerWidth) / contentWidth + props.size * 1.5;
            }
        });
        const xBarSizePxRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return `${xBarSizeRef.value}px`;
        });
        const yBarTopRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: containerHeight } = containerHeightRef;
            const { value: containerScrollTop } = containerScrollTopRef;
            const { value: contentHeight } = contentHeightRef;
            const { value: yRailSize } = yRailSizeRef;
            if (containerHeight === null ||
                contentHeight === null ||
                yRailSize === null) {
                return 0;
            }
            else {
                return ((containerScrollTop / (contentHeight - containerHeight)) *
                    (yRailSize - yBarSizeRef.value));
            }
        });
        const yBarTopPxRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return `${yBarTopRef.value}px`;
        });
        const xBarLeftRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: containerWidth } = containerWidthRef;
            const { value: containerScrollLeft } = containerScrollLeftRef;
            const { value: contentWidth } = contentWidthRef;
            const { value: xRailSize } = xRailSizeRef;
            if (containerWidth === null ||
                contentWidth === null ||
                xRailSize === null) {
                return 0;
            }
            else {
                return ((containerScrollLeft / (contentWidth - containerWidth)) *
                    (xRailSize - xBarSizeRef.value));
            }
        });
        const xBarLeftPxRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return `${xBarLeftRef.value}px`;
        });
        const needYBarRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: containerHeight } = containerHeightRef;
            const { value: contentHeight } = contentHeightRef;
            return (containerHeight !== null &&
                contentHeight !== null &&
                contentHeight > containerHeight);
        });
        const needXBarRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: containerWidth } = containerWidthRef;
            const { value: contentWidth } = contentWidthRef;
            return (containerWidth !== null &&
                contentWidth !== null &&
                contentWidth > containerWidth);
        });
        const mergedContainerRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { container } = props;
            if (container)
                return container();
            return containerRef.value;
        });
        const mergedContentRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { content } = props;
            if (content)
                return content();
            return contentRef.value;
        });
        // methods
        const handleContentResize = sync;
        const handleContainerResize = (e) => {
            const { onResize } = props;
            if (onResize)
                onResize(e);
            sync();
        };
        const scrollTo = (options, y) => {
            if (!props.scrollable)
                return;
            if (typeof options === 'number') {
                scrollToPosition(options, y !== null && y !== void 0 ? y : 0, 0, false, 'auto');
                return;
            }
            const { left, top, index, elSize, position, behavior, el, debounce = true } = options;
            if (left !== undefined || top !== undefined) {
                scrollToPosition(left !== null && left !== void 0 ? left : 0, top !== null && top !== void 0 ? top : 0, 0, false, behavior);
            }
            if (el !== undefined) {
                scrollToPosition(0, el.offsetTop, el.offsetHeight, debounce, behavior);
            }
            else if (index !== undefined && elSize !== undefined) {
                scrollToPosition(0, index * elSize, elSize, debounce, behavior);
            }
            else if (position === 'bottom') {
                scrollToPosition(0, Number.MAX_SAFE_INTEGER, 0, false, behavior);
            }
            else if (position === 'top') {
                scrollToPosition(0, 0, 0, false, behavior);
            }
        };
        const scrollBy = (options, y) => {
            if (!props.scrollable)
                return;
            const { value: container } = mergedContainerRef;
            if (!container)
                return;
            if (typeof options === 'object') {
                container.scrollBy(options);
            }
            else {
                container.scrollBy(options, y || 0);
            }
        };
        function scrollToPosition(left, top, elSize, debounce, behavior) {
            const { value: container } = mergedContainerRef;
            if (!container)
                return;
            if (debounce) {
                const { scrollTop, offsetHeight } = container;
                if (top > scrollTop) {
                    if (top + elSize <= scrollTop + offsetHeight) {
                        // do nothing
                    }
                    else {
                        container.scrollTo({
                            left,
                            top: top + elSize - offsetHeight,
                            behavior
                        });
                    }
                    return;
                }
            }
            container.scrollTo({
                left,
                top,
                behavior
            });
        }
        function handleMouseEnterWrapper() {
            showXBar();
            showYBar();
            sync();
        }
        function handleMouseLeaveWrapper() {
            hideBar();
        }
        function hideBar() {
            hideYBar();
            hideXBar();
        }
        function hideYBar() {
            if (yBarVanishTimerId !== undefined) {
                window.clearTimeout(yBarVanishTimerId);
            }
            yBarVanishTimerId = window.setTimeout(() => {
                isShowYBarRef.value = false;
            }, props.duration);
        }
        function hideXBar() {
            if (xBarVanishTimerId !== undefined) {
                window.clearTimeout(xBarVanishTimerId);
            }
            xBarVanishTimerId = window.setTimeout(() => {
                isShowXBarRef.value = false;
            }, props.duration);
        }
        function showXBar() {
            if (xBarVanishTimerId !== undefined) {
                window.clearTimeout(xBarVanishTimerId);
            }
            isShowXBarRef.value = true;
        }
        function showYBar() {
            if (yBarVanishTimerId !== undefined) {
                window.clearTimeout(yBarVanishTimerId);
            }
            isShowYBarRef.value = true;
        }
        function handleScroll(e) {
            const { onScroll } = props;
            if (onScroll)
                onScroll(e);
            syncScrollState();
        }
        function syncScrollState() {
            // only collect scroll state, do not trigger any dom event
            const { value: container } = mergedContainerRef;
            if (container) {
                containerScrollTopRef.value = container.scrollTop;
                containerScrollLeftRef.value = container.scrollLeft;
            }
        }
        function syncPositionState() {
            // only collect position state, do not trigger any dom event
            // Don't use getClientBoundingRect because element may be scale transformed
            const { value: content } = mergedContentRef;
            if (content) {
                contentHeightRef.value = content.offsetHeight;
                contentWidthRef.value = content.offsetWidth;
            }
            const { value: container } = mergedContainerRef;
            if (container) {
                containerHeightRef.value = container.offsetHeight;
                containerWidthRef.value = container.offsetWidth;
            }
            const { value: xRailEl } = xRailRef;
            const { value: yRailEl } = yRailRef;
            if (xRailEl) {
                xRailSizeRef.value = xRailEl.offsetWidth;
            }
            if (yRailEl) {
                yRailSizeRef.value = yRailEl.offsetHeight;
            }
        }
        /**
         * Sometimes there's only one element that we can scroll,
         * For example for textarea, there won't be a content element.
         */
        function syncUnifiedContainer() {
            const { value: container } = mergedContainerRef;
            if (container) {
                containerScrollTopRef.value = container.scrollTop;
                containerScrollLeftRef.value = container.scrollLeft;
                containerHeightRef.value = container.offsetHeight;
                containerWidthRef.value = container.offsetWidth;
                contentHeightRef.value = container.scrollHeight;
                contentWidthRef.value = container.scrollWidth;
            }
            const { value: xRailEl } = xRailRef;
            const { value: yRailEl } = yRailRef;
            if (xRailEl) {
                xRailSizeRef.value = xRailEl.offsetWidth;
            }
            if (yRailEl) {
                yRailSizeRef.value = yRailEl.offsetHeight;
            }
        }
        function sync() {
            if (!props.scrollable)
                return;
            if (props.useUnifiedContainer) {
                syncUnifiedContainer();
            }
            else {
                syncPositionState();
                syncScrollState();
            }
        }
        function isMouseUpAway(e) {
            var _a;
            return !((_a = wrapperRef.value) === null || _a === void 0 ? void 0 : _a.contains(e.target));
        }
        function handleXScrollMouseDown(e) {
            e.preventDefault();
            e.stopPropagation();
            xBarPressed = true;
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.on)('mousemove', window, handleXScrollMouseMove, true);
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.on)('mouseup', window, handleXScrollMouseUp, true);
            memoXLeft = containerScrollLeftRef.value;
            memoMouseX = e.clientX;
        }
        function handleXScrollMouseMove(e) {
            if (!xBarPressed)
                return;
            if (xBarVanishTimerId !== undefined) {
                window.clearTimeout(xBarVanishTimerId);
            }
            if (yBarVanishTimerId !== undefined) {
                window.clearTimeout(yBarVanishTimerId);
            }
            const { value: containerWidth } = containerWidthRef;
            const { value: contentWidth } = contentWidthRef;
            const { value: xBarSize } = xBarSizeRef;
            if (containerWidth === null || contentWidth === null)
                return;
            const dX = e.clientX - memoMouseX;
            const dScrollLeft = (dX * (contentWidth - containerWidth)) / (containerWidth - xBarSize);
            const toScrollLeftUpperBound = contentWidth - containerWidth;
            let toScrollLeft = memoXLeft + dScrollLeft;
            toScrollLeft = Math.min(toScrollLeftUpperBound, toScrollLeft);
            toScrollLeft = Math.max(toScrollLeft, 0);
            const { value: container } = mergedContainerRef;
            if (container) {
                container.scrollLeft = toScrollLeft;
                const { internalOnUpdateScrollLeft } = props;
                if (internalOnUpdateScrollLeft)
                    internalOnUpdateScrollLeft(toScrollLeft);
            }
        }
        function handleXScrollMouseUp(e) {
            e.preventDefault();
            e.stopPropagation();
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.off)('mousemove', window, handleXScrollMouseMove, true);
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.off)('mouseup', window, handleXScrollMouseUp, true);
            xBarPressed = false;
            sync();
            if (isMouseUpAway(e)) {
                hideBar();
            }
        }
        function handleYScrollMouseDown(e) {
            e.preventDefault();
            e.stopPropagation();
            yBarPressed = true;
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.on)('mousemove', window, handleYScrollMouseMove, true);
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.on)('mouseup', window, handleYScrollMouseUp, true);
            memoYTop = containerScrollTopRef.value;
            memoMouseY = e.clientY;
        }
        function handleYScrollMouseMove(e) {
            if (!yBarPressed)
                return;
            if (xBarVanishTimerId !== undefined) {
                window.clearTimeout(xBarVanishTimerId);
            }
            if (yBarVanishTimerId !== undefined) {
                window.clearTimeout(yBarVanishTimerId);
            }
            const { value: containerHeight } = containerHeightRef;
            const { value: contentHeight } = contentHeightRef;
            const { value: yBarSize } = yBarSizeRef;
            if (containerHeight === null || contentHeight === null)
                return;
            const dY = e.clientY - memoMouseY;
            const dScrollTop = (dY * (contentHeight - containerHeight)) / (containerHeight - yBarSize);
            const toScrollTopUpperBound = contentHeight - containerHeight;
            let toScrollTop = memoYTop + dScrollTop;
            toScrollTop = Math.min(toScrollTopUpperBound, toScrollTop);
            toScrollTop = Math.max(toScrollTop, 0);
            const { value: container } = mergedContainerRef;
            if (container) {
                container.scrollTop = toScrollTop;
            }
        }
        function handleYScrollMouseUp(e) {
            e.preventDefault();
            e.stopPropagation();
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.off)('mousemove', window, handleYScrollMouseMove, true);
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.off)('mouseup', window, handleYScrollMouseUp, true);
            yBarPressed = false;
            sync();
            if (isMouseUpAway(e)) {
                hideBar();
            }
        }
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            const { value: needXBar } = needXBarRef;
            const { value: needYBar } = needYBarRef;
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            const { value: xRailEl } = xRailRef;
            const { value: yRailEl } = yRailRef;
            if (xRailEl) {
                if (!needXBar) {
                    xRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
                }
                else {
                    xRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
                }
            }
            if (yRailEl) {
                if (!needYBar) {
                    yRailEl.classList.add(`${mergedClsPrefix}-scrollbar-rail--disabled`);
                }
                else {
                    yRailEl.classList.remove(`${mergedClsPrefix}-scrollbar-rail--disabled`);
                }
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            // if container exist, it always can't be resolved when scrollbar is mounted
            // for example:
            // - component
            //   - scrollbar
            //     - inner
            // if you pass inner to scrollbar, you may use a ref inside component
            // however, when scrollbar is mounted, ref is not ready at component
            // you need to init by yourself
            if (props.container)
                return;
            sync();
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
            if (xBarVanishTimerId !== undefined) {
                window.clearTimeout(xBarVanishTimerId);
            }
            if (yBarVanishTimerId !== undefined) {
                window.clearTimeout(yBarVanishTimerId);
            }
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.off)('mousemove', window, handleYScrollMouseMove, true);
            (0,evtd__WEBPACK_IMPORTED_MODULE_4__.off)('mouseup', window, handleYScrollMouseUp, true);
        });
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Scrollbar', '-scrollbar', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_5__["default"], _styles__WEBPACK_IMPORTED_MODULE_6__["default"], props, mergedClsPrefixRef);
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { common: { cubicBezierEaseInOut, scrollbarBorderRadius, scrollbarHeight, scrollbarWidth }, self: { color, colorHover } } = themeRef.value;
            return {
                '--n-scrollbar-bezier': cubicBezierEaseInOut,
                '--n-scrollbar-color': color,
                '--n-scrollbar-color-hover': colorHover,
                '--n-scrollbar-border-radius': scrollbarBorderRadius,
                '--n-scrollbar-width': scrollbarWidth,
                '--n-scrollbar-height': scrollbarHeight
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_7__.useThemeClass)('scrollbar', undefined, cssVarsRef, props)
            : undefined;
        const exposedMethods = {
            scrollTo,
            scrollBy,
            sync,
            syncUnifiedContainer,
            handleMouseEnterWrapper,
            handleMouseLeaveWrapper
        };
        return Object.assign(Object.assign({}, exposedMethods), { mergedClsPrefix: mergedClsPrefixRef, containerScrollTop: containerScrollTopRef, wrapperRef,
            containerRef,
            contentRef,
            yRailRef,
            xRailRef, needYBar: needYBarRef, needXBar: needXBarRef, yBarSizePx: yBarSizePxRef, xBarSizePx: xBarSizePxRef, yBarTopPx: yBarTopPxRef, xBarLeftPx: xBarLeftPxRef, isShowXBar: isShowXBarRef, isShowYBar: isShowYBarRef, isIos,
            handleScroll,
            handleContentResize,
            handleContainerResize,
            handleYScrollMouseDown,
            handleXScrollMouseDown, cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender });
    },
    render() {
        var _a;
        const { $slots, mergedClsPrefix, triggerDisplayManually } = this;
        if (!this.scrollable)
            return (_a = $slots.default) === null || _a === void 0 ? void 0 : _a.call($slots);
        const createChildren = () => {
            var _a, _b;
            (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
            return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(this.$attrs, {
                role: 'none',
                ref: 'wrapperRef',
                class: [`${mergedClsPrefix}-scrollbar`, this.themeClass],
                style: this.cssVars,
                onMouseenter: triggerDisplayManually
                    ? undefined
                    : this.handleMouseEnterWrapper,
                onMouseleave: triggerDisplayManually
                    ? undefined
                    : this.handleMouseLeaveWrapper
            }), [
                this.container ? ((_b = $slots.default) === null || _b === void 0 ? void 0 : _b.call($slots)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { role: "none", ref: "containerRef", class: [
                        `${mergedClsPrefix}-scrollbar-container`,
                        this.containerClass
                    ], style: this.containerStyle, onScroll: this.handleScroll, onWheel: this.onWheel },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_8__["default"], { onResize: this.handleContentResize }, {
                        default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "contentRef", role: "none", style: [
                                {
                                    width: this.xScrollable ? 'fit-content' : null
                                },
                                this.contentStyle
                            ], class: [
                                `${mergedClsPrefix}-scrollbar-content`,
                                this.contentClass
                            ] }, $slots))
                    }))),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "yRailRef", class: `${mergedClsPrefix}-scrollbar-rail ${mergedClsPrefix}-scrollbar-rail--vertical`, style: this.horizontalRailStyle, "aria-hidden": true },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "fade-in-transition" }, {
                        default: () => this.needYBar && this.isShowYBar && !this.isIos ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`, style: {
                                height: this.yBarSizePx,
                                top: this.yBarTopPx
                            }, onMousedown: this.handleYScrollMouseDown })) : null
                    })),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "xRailRef", class: `${mergedClsPrefix}-scrollbar-rail ${mergedClsPrefix}-scrollbar-rail--horizontal`, style: this.verticalRailStyle, "aria-hidden": true },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Transition, { name: "fade-in-transition" }, {
                        default: () => this.needXBar && this.isShowXBar && !this.isIos ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-scrollbar-rail__scrollbar`, style: {
                                width: this.xBarSizePx,
                                left: this.xBarLeftPx
                            }, onMousedown: this.handleXScrollMouseDown })) : null
                    }))
            ]);
        };
        return this.container ? (createChildren()) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_8__["default"], { onResize: this.handleContainerResize }, {
            default: createChildren
        }));
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scrollbar);
const XScrollbar = Scrollbar;


/***/ }),

/***/ 759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var _styles_transitions_fade_in_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(760);

 // vars:
// --n-scrollbar-bezier
// --n-scrollbar-color
// --n-scrollbar-color-hover
// --n-scrollbar-width
// --n-scrollbar-height
// --n-scrollbar-border-radius

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('scrollbar', `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('scrollbar-container', `
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', `
 width: 0;
 height: 0;
 display: none;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('scrollbar-content', `
 box-sizing: border-box;
 min-width: 100%;
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('scrollbar-rail', `
 position: absolute;
 pointer-events: none;
 user-select: none;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('horizontal', `
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('scrollbar', `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('vertical', `
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('scrollbar', `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('scrollbar', {
  pointerEvents: 'none'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('>', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('scrollbar', `
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [(0,_styles_transitions_fade_in_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', {
  backgroundColor: 'var(--n-scrollbar-color-hover)'
})])])])])]));

/***/ }),

/***/ 761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(694);

const self = (vars) => {
    const { scrollbarColor, scrollbarColorHover } = vars;
    return {
        color: scrollbarColor,
        colorHover: scrollbarColorHover
    };
};
const scrollbarLight = {
    name: 'Scrollbar',
    common: _styles_common__WEBPACK_IMPORTED_MODULE_0__["default"],
    self
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollbarLight);


/***/ }),

/***/ 784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(766);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(785);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(772);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(787);
/* harmony import */ var _utils_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(756);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'InternalSelectionSuffix',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        showArrow: {
            type: Boolean,
            default: undefined
        },
        showClear: {
            type: Boolean,
            default: undefined
        },
        loading: {
            type: Boolean,
            default: false
        },
        onClear: Function
    },
    setup(props, { slots }) {
        return () => {
            const { clsPrefix } = props;
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_loading__WEBPACK_IMPORTED_MODULE_1__["default"], { clsPrefix: clsPrefix, class: `${clsPrefix}-base-suffix`, strokeWidth: 24, scale: 0.85, show: props.loading }, {
                default: () => props.showArrow ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_clear__WEBPACK_IMPORTED_MODULE_2__["default"], { clsPrefix: clsPrefix, show: props.showClear, onClear: props.onClear }, {
                    default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icon__WEBPACK_IMPORTED_MODULE_3__["default"], { clsPrefix: clsPrefix, class: `${clsPrefix}-base-suffix__arrow` }, {
                        default: () => (0,_utils_vue__WEBPACK_IMPORTED_MODULE_4__.resolveSlot)(slots.default, () => [
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_icons__WEBPACK_IMPORTED_MODULE_5__["default"], null)
                        ])
                    }))
                })) : null
            }));
        };
    }
}));


/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(767);
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(803);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'BaseWave',
    props: {
        clsPrefix: {
            type: String,
            required: true
        }
    },
    setup(props) {
        (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('-base-wave', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_2__["default"], (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'clsPrefix'));
        const selfRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const activeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let animationTimerId = null;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
            if (animationTimerId !== null) {
                window.clearTimeout(animationTimerId);
            }
        });
        return {
            active: activeRef,
            selfRef,
            play() {
                if (animationTimerId !== null) {
                    window.clearTimeout(animationTimerId);
                    activeRef.value = false;
                    animationTimerId = null;
                }
                void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                    var _a;
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    void ((_a = selfRef.value) === null || _a === void 0 ? void 0 : _a.offsetHeight);
                    activeRef.value = true;
                    animationTimerId = window.setTimeout(() => {
                        activeRef.value = false;
                        animationTimerId = null;
                    }, 1000);
                });
            }
        };
    },
    render() {
        const { clsPrefix } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "selfRef", "aria-hidden": true, class: [
                `${clsPrefix}-base-wave`,
                this.active && `${clsPrefix}-base-wave--active`
            ] }));
    }
}));


/***/ }),

/***/ 803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cB)('base-wave', `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`));

/***/ }),

/***/ 728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formItemInjectionKey": () => (/* binding */ formItemInjectionKey),
/* harmony export */   "default": () => (/* binding */ useFormItem)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(593);


const formItemInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createInjectionKey)('n-form-item');
function useFormItem(props, { defaultSize = 'medium', mergedSize, mergedDisabled } = {}) {
    const NFormItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(formItemInjectionKey, null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(formItemInjectionKey, null);
    const mergedSizeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(mergedSize
        ? () => mergedSize(NFormItem)
        : () => {
            const { size } = props;
            if (size)
                return size;
            if (NFormItem) {
                const { mergedSize } = NFormItem;
                if (mergedSize.value !== undefined) {
                    return mergedSize.value;
                }
            }
            return defaultSize;
        });
    const mergedDisabledRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(mergedDisabled
        ? () => mergedDisabled(NFormItem)
        : () => {
            const { disabled } = props;
            if (disabled !== undefined) {
                return disabled;
            }
            if (NFormItem) {
                return NFormItem.disabled.value;
            }
            return false;
        });
    const mergedStatusRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { status } = props;
        if (status)
            return status;
        return NFormItem === null || NFormItem === void 0 ? void 0 : NFormItem.mergedValidationStatus.value;
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
        if (NFormItem) {
            NFormItem.restoreValidation();
        }
    });
    return {
        mergedSizeRef,
        mergedDisabledRef,
        mergedStatusRef,
        nTriggerFormBlur() {
            if (NFormItem) {
                NFormItem.handleContentBlur();
            }
        },
        nTriggerFormChange() {
            if (NFormItem) {
                NFormItem.handleContentChange();
            }
        },
        nTriggerFormFocus() {
            if (NFormItem) {
                NFormItem.handleContentFocus();
            }
        },
        nTriggerFormInput() {
            if (NFormItem) {
                NFormItem.handleContentInput();
            }
        }
    };
}


/***/ }),

/***/ 734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLocale)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(735);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(736);
/* harmony import */ var _config_provider_src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(592);



function useLocale(ns) {
    const { mergedLocaleRef, mergedDateLocaleRef } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_config_provider_src_context__WEBPACK_IMPORTED_MODULE_1__.configProviderInjectionKey, null) || {};
    const localeRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a, _b;
        return (_b = (_a = mergedLocaleRef === null || mergedLocaleRef === void 0 ? void 0 : mergedLocaleRef.value) === null || _a === void 0 ? void 0 : _a[ns]) !== null && _b !== void 0 ? _b : _locales__WEBPACK_IMPORTED_MODULE_2__["default"][ns];
    });
    const dateLocaleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        var _a;
        return (_a = mergedDateLocaleRef === null || mergedDateLocaleRef === void 0 ? void 0 : mergedDateLocaleRef.value) !== null && _a !== void 0 ? _a : _locales__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    return {
        dateLocaleRef,
        localeRef
    };
}


/***/ }),

/***/ 798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useRtl)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var css_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(583);
/* harmony import */ var _css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(576);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(577);




function useRtl(mountId, rtlStateRef, clsPrefixRef) {
    if (!rtlStateRef)
        return undefined;
    const ssrAdapter = (0,_css_render_vue3_ssr__WEBPACK_IMPORTED_MODULE_1__.useSsrAdapter)();
    const componentRtlStateRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { value: rtlState } = rtlStateRef;
        if (!rtlState) {
            return undefined;
        }
        const componentRtlState = rtlState[mountId];
        if (!componentRtlState) {
            return undefined;
        }
        return componentRtlState;
    });
    const mountStyle = () => {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            const { value: clsPrefix } = clsPrefixRef;
            const id = `${clsPrefix}${mountId}Rtl`;
            // if it already exists, we only need to watch clsPrefix, although in most
            // of time it's unnecessary... However we can at least listen less
            // handlers, which is great.
            if ((0,css_render__WEBPACK_IMPORTED_MODULE_2__.exists)(id, ssrAdapter))
                return;
            const { value: componentRtlState } = componentRtlStateRef;
            if (!componentRtlState)
                return;
            componentRtlState.style.mount({
                id,
                head: true,
                anchorMetaName: _common__WEBPACK_IMPORTED_MODULE_3__.cssrAnchorMetaName,
                props: {
                    bPrefix: clsPrefix ? `.${clsPrefix}-` : undefined
                },
                ssr: ssrAdapter
            });
        });
    };
    if (ssrAdapter) {
        mountStyle();
    }
    else {
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(mountStyle);
    }
    return componentRtlStateRef;
}


/***/ }),

/***/ 795:
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
  duration = '.2s',
  delay = '.1s'
} = {}) {
  return [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to', {
    opacity: 1
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from', `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-width-expand-transition-leave-active', `
 overflow: hidden;
 transition:
 opacity ${duration} ${cubicBezierEaseInOut},
 max-width ${duration} ${cubicBezierEaseInOut} ${delay},
 margin-left ${duration} ${cubicBezierEaseInOut} ${delay},
 margin-right ${duration} ${cubicBezierEaseInOut} ${delay};
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.fade-in-width-expand-transition-enter-active', `
 overflow: hidden;
 transition:
 opacity ${duration} ${cubicBezierEaseInOut} ${delay},
 max-width ${duration} ${cubicBezierEaseInOut},
 margin-left ${duration} ${cubicBezierEaseInOut},
 margin-right ${duration} ${cubicBezierEaseInOut};
 `)];
}

/***/ }),

/***/ 760:
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
  name = 'fade-in',
  enterDuration = '0.2s',
  leaveDuration = '0.2s',
  enterCubicBezier = cubicBezierEaseInOut,
  leaveCubicBezier = cubicBezierEaseInOut
} = {}) {
  return [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-enter-active`, {
    transition: `all ${enterDuration} ${enterCubicBezier}!important`
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-leave-active`, {
    transition: `all ${leaveDuration} ${leaveCubicBezier}!important`
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-enter-from, &.${name}-transition-leave-to`, {
    opacity: 0
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)(`&.${name}-transition-leave-from, &.${name}-transition-enter-to`, {
    opacity: 1
  })];
}

/***/ }),

/***/ 769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(579);


const {
  cubicBezierEaseInOut,
  transformDebounceScale
} = _common_common__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__({
  originalTransform = '',
  left = 0,
  top = 0,
  transition = `all .3s ${cubicBezierEaseInOut} !important`
} = {}) {
  return [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to', {
    transform: originalTransform + ' scale(0.75)',
    left,
    top,
    opacity: 0
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from', {
    transform: `${transformDebounceScale} ${originalTransform}`,
    left,
    top,
    opacity: 1
  }), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_1__.c)('&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active', {
    transformOrigin: 'center',
    position: 'absolute',
    left,
    top,
    transition
  })];
}

/***/ }),

/***/ 799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHoverColor": () => (/* binding */ createHoverColor),
/* harmony export */   "createPressedColor": () => (/* binding */ createPressedColor)
/* harmony export */ });
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(695);

function createHoverColor(rgb) {
    return (0,seemly__WEBPACK_IMPORTED_MODULE_0__.composite)(rgb, [255, 255, 255, 0.16]);
}
function createPressedColor(rgb) {
    return (0,seemly__WEBPACK_IMPORTED_MODULE_0__.composite)(rgb, [0, 0, 0, 0.12]);
}


/***/ }),

/***/ 800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "color2Class": () => (/* binding */ color2Class)
/* harmony export */ });
function color2Class(color) {
    return color.replace(/#|\(|\)|,|\s/g, '_');
}


/***/ }),

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatLength": () => (/* binding */ formatLength)
/* harmony export */ });
const pureNumberRegex = /^(\d|\.)+$/;
const numberRegex = /(\d|\.)+/;
function formatLength(length, { c = 1, offset = 0, attachPx = true } = {}) {
    if (typeof length === 'number') {
        const result = (length + offset) * c;
        if (result === 0)
            return '0';
        return `${result}px`;
    }
    else if (typeof length === 'string') {
        if (pureNumberRegex.test(length)) {
            const result = (Number(length) + offset) * c;
            if (attachPx) {
                if (result === 0)
                    return '0';
                return `${result}px`;
            }
            else {
                return `${result}`;
            }
        }
        else {
            const result = numberRegex.exec(length);
            if (!result)
                return length;
            return length.replace(numberRegex, String((Number(result[0]) + offset) * c));
        }
    }
    return length;
}


/***/ }),

/***/ 791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "XButton": () => (/* binding */ XButton)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(708);
/* harmony import */ var _utils_color_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(799);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(728);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(690);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(755);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(801);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(770);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(785);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(802);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(749);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(591);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(800);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(756);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(796);
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(792);
/* harmony import */ var _styles_button_cssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(794);
/* harmony import */ var _mixins_use_rtl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(798);
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(695);











const buttonProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { color: String, textColor: String, text: Boolean, block: Boolean, loading: Boolean, disabled: Boolean, circle: Boolean, size: String, ghost: Boolean, round: Boolean, secondary: Boolean, tertiary: Boolean, quaternary: Boolean, strong: Boolean, focusable: {
        type: Boolean,
        default: true
    }, keyboard: {
        type: Boolean,
        default: true
    }, tag: {
        type: String,
        default: 'button'
    }, type: {
        type: String,
        default: 'default'
    }, dashed: Boolean, iconPlacement: {
        type: String,
        default: 'left'
    }, attrType: {
        type: String,
        default: 'button'
    }, bordered: {
        type: Boolean,
        default: true
    }, onClick: [Function, Array], internalAutoFocus: Boolean });
const Button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Button',
    props: buttonProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                const { dashed, ghost, text, secondary, tertiary, quaternary } = props;
                if ((dashed || ghost || text) &&
                    (secondary || tertiary || quaternary)) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('button', "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaterary` props.");
                }
            });
        }
        const selfElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const waveElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const enterPressedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            const { value: selfEl } = selfElRef;
            if (selfEl &&
                !props.disabled &&
                props.focusable &&
                props.internalAutoFocus) {
                selfEl.focus({ preventScroll: true });
            }
        });
        const showBorderRef = (0,vooks__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
            return (!props.quaternary &&
                !props.tertiary &&
                !props.secondary &&
                !props.text &&
                (!props.color || props.ghost || props.dashed) &&
                props.bordered);
        });
        const NButtonGroup = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__.buttonGroupInjectionKey, {});
        const { mergedSizeRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_5__["default"])({}, {
            defaultSize: 'medium',
            mergedSize: (NFormItem) => {
                const { size } = props;
                if (size)
                    return size;
                const { size: buttonGroupSize } = NButtonGroup;
                if (buttonGroupSize)
                    return buttonGroupSize;
                const { mergedSize: formItemSize } = NFormItem || {};
                if (formItemSize) {
                    return formItemSize.value;
                }
                return 'medium';
            }
        });
        const mergedFocusableRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            return props.focusable && !props.disabled;
        });
        const handleMousedown = (e) => {
            var _a;
            e.preventDefault();
            if (props.disabled) {
                return;
            }
            if (mergedFocusableRef.value) {
                (_a = selfElRef.value) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
            }
        };
        const handleClick = (e) => {
            var _a;
            if (!props.disabled && !props.loading) {
                const { onClick } = props;
                if (onClick)
                    (0,_utils__WEBPACK_IMPORTED_MODULE_6__.call)(onClick, e);
                if (!props.text) {
                    (_a = waveElRef.value) === null || _a === void 0 ? void 0 : _a.play();
                }
            }
        };
        const handleKeyup = (e) => {
            switch (e.code) {
                case 'Enter':
                case 'NumpadEnter':
                    if (!props.keyboard) {
                        return;
                    }
                    enterPressedRef.value = false;
            }
        };
        const handleKeydown = (e) => {
            switch (e.code) {
                case 'Enter':
                case 'NumpadEnter':
                    if (!props.keyboard || props.loading) {
                        e.preventDefault();
                        return;
                    }
                    enterPressedRef.value = true;
            }
        };
        const handleBlur = () => {
            enterPressedRef.value = false;
        };
        const { inlineThemeDisabled, mergedClsPrefixRef, mergedRtlRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Button', '-button', _styles_button_cssr__WEBPACK_IMPORTED_MODULE_8__["default"], _styles__WEBPACK_IMPORTED_MODULE_9__["default"], props, mergedClsPrefixRef);
        const rtlEnabledRef = (0,_mixins_use_rtl__WEBPACK_IMPORTED_MODULE_10__["default"])('Button', mergedRtlRef, mergedClsPrefixRef);
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const theme = themeRef.value;
            const { common: { cubicBezierEaseInOut, cubicBezierEaseOut }, self } = theme;
            const { rippleDuration, opacityDisabled, fontWeight, fontWeightStrong } = self;
            const size = mergedSizeRef.value;
            const { dashed, type, ghost, text, color, round, circle, textColor, secondary, tertiary, quaternary, strong } = props;
            // font
            const fontProps = {
                'font-weight': strong ? fontWeightStrong : fontWeight
            };
            // color
            let colorProps = {
                '--n-color': 'initial',
                '--n-color-hover': 'initial',
                '--n-color-pressed': 'initial',
                '--n-color-focus': 'initial',
                '--n-color-disabled': 'initial',
                '--n-ripple-color': 'initial',
                '--n-text-color': 'initial',
                '--n-text-color-hover': 'initial',
                '--n-text-color-pressed': 'initial',
                '--n-text-color-focus': 'initial',
                '--n-text-color-disabled': 'initial'
            };
            const typeIsTertiary = type === 'tertiary';
            const typeIsDefault = type === 'default';
            const mergedType = typeIsTertiary ? 'default' : type;
            if (text) {
                const propTextColor = textColor || color;
                const mergedTextColor = propTextColor || self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorText', mergedType)];
                colorProps = {
                    '--n-color': '#0000',
                    '--n-color-hover': '#0000',
                    '--n-color-pressed': '#0000',
                    '--n-color-focus': '#0000',
                    '--n-color-disabled': '#0000',
                    '--n-ripple-color': '#0000',
                    '--n-text-color': mergedTextColor,
                    '--n-text-color-hover': propTextColor
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createHoverColor)(propTextColor)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorTextHover', mergedType)],
                    '--n-text-color-pressed': propTextColor
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createPressedColor)(propTextColor)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorTextPressed', mergedType)],
                    '--n-text-color-focus': propTextColor
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createHoverColor)(propTextColor)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorTextHover', mergedType)],
                    '--n-text-color-disabled': propTextColor ||
                        self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorTextDisabled', mergedType)]
                };
            }
            else if (ghost || dashed) {
                const mergedTextColor = textColor || color;
                colorProps = {
                    '--n-color': '#0000',
                    '--n-color-hover': '#0000',
                    '--n-color-pressed': '#0000',
                    '--n-color-focus': '#0000',
                    '--n-color-disabled': '#0000',
                    '--n-ripple-color': color || self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('rippleColor', mergedType)],
                    '--n-text-color': mergedTextColor || self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorGhost', mergedType)],
                    '--n-text-color-hover': mergedTextColor
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createHoverColor)(mergedTextColor)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorGhostHover', mergedType)],
                    '--n-text-color-pressed': mergedTextColor
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createPressedColor)(mergedTextColor)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorGhostPressed', mergedType)],
                    '--n-text-color-focus': mergedTextColor
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createHoverColor)(mergedTextColor)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorGhostHover', mergedType)],
                    '--n-text-color-disabled': mergedTextColor ||
                        self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorGhostDisabled', mergedType)]
                };
            }
            else if (secondary) {
                const typeTextColor = typeIsDefault
                    ? self.textColor
                    : typeIsTertiary
                        ? self.textColorTertiary
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('color', mergedType)];
                const mergedTextColor = color || typeTextColor;
                const isColoredType = type !== 'default' && type !== 'tertiary';
                colorProps = {
                    '--n-color': isColoredType
                        ? (0,seemly__WEBPACK_IMPORTED_MODULE_13__.changeColor)(mergedTextColor, {
                            alpha: Number(self.colorOpacitySecondary)
                        })
                        : self.colorSecondary,
                    '--n-color-hover': isColoredType
                        ? (0,seemly__WEBPACK_IMPORTED_MODULE_13__.changeColor)(mergedTextColor, {
                            alpha: Number(self.colorOpacitySecondaryHover)
                        })
                        : self.colorSecondaryHover,
                    '--n-color-pressed': isColoredType
                        ? (0,seemly__WEBPACK_IMPORTED_MODULE_13__.changeColor)(mergedTextColor, {
                            alpha: Number(self.colorOpacitySecondaryPressed)
                        })
                        : self.colorSecondaryPressed,
                    '--n-color-focus': isColoredType
                        ? (0,seemly__WEBPACK_IMPORTED_MODULE_13__.changeColor)(mergedTextColor, {
                            alpha: Number(self.colorOpacitySecondaryHover)
                        })
                        : self.colorSecondaryHover,
                    '--n-color-disabled': self.colorSecondary,
                    '--n-ripple-color': '#0000',
                    '--n-text-color': mergedTextColor,
                    '--n-text-color-hover': mergedTextColor,
                    '--n-text-color-pressed': mergedTextColor,
                    '--n-text-color-focus': mergedTextColor,
                    '--n-text-color-disabled': mergedTextColor
                };
            }
            else if (tertiary || quaternary) {
                const typeColor = typeIsDefault
                    ? self.textColor
                    : typeIsTertiary
                        ? self.textColorTertiary
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('color', mergedType)];
                const mergedColor = color || typeColor;
                if (tertiary) {
                    colorProps['--n-color'] = self.colorTertiary;
                    colorProps['--n-color-hover'] = self.colorTertiaryHover;
                    colorProps['--n-color-pressed'] = self.colorTertiaryPressed;
                    colorProps['--n-color-focus'] = self.colorSecondaryHover;
                    colorProps['--n-color-disabled'] = self.colorTertiary;
                }
                else {
                    colorProps['--n-color'] = self.colorQuaternary;
                    colorProps['--n-color-hover'] = self.colorQuaternaryHover;
                    colorProps['--n-color-pressed'] = self.colorQuaternaryPressed;
                    colorProps['--n-color-focus'] = self.colorQuaternaryHover;
                    colorProps['--n-color-disabled'] = self.colorQuaternary;
                }
                colorProps['--n-ripple-color'] = '#0000';
                colorProps['--n-text-color'] = mergedColor;
                colorProps['--n-text-color-hover'] = mergedColor;
                colorProps['--n-text-color-pressed'] = mergedColor;
                colorProps['--n-text-color-focus'] = mergedColor;
                colorProps['--n-text-color-disabled'] = mergedColor;
            }
            else {
                colorProps = {
                    '--n-color': color || self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('color', mergedType)],
                    '--n-color-hover': color
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createHoverColor)(color)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('colorHover', mergedType)],
                    '--n-color-pressed': color
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createPressedColor)(color)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('colorPressed', mergedType)],
                    '--n-color-focus': color
                        ? (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createHoverColor)(color)
                        : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('colorFocus', mergedType)],
                    '--n-color-disabled': color || self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('colorDisabled', mergedType)],
                    '--n-ripple-color': color || self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('rippleColor', mergedType)],
                    '--n-text-color': textColor ||
                        (color
                            ? self.textColorPrimary
                            : typeIsTertiary
                                ? self.textColorTertiary
                                : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColor', mergedType)]),
                    '--n-text-color-hover': textColor ||
                        (color
                            ? self.textColorHoverPrimary
                            : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorHover', mergedType)]),
                    '--n-text-color-pressed': textColor ||
                        (color
                            ? self.textColorPressedPrimary
                            : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorPressed', mergedType)]),
                    '--n-text-color-focus': textColor ||
                        (color
                            ? self.textColorFocusPrimary
                            : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorFocus', mergedType)]),
                    '--n-text-color-disabled': textColor ||
                        (color
                            ? self.textColorDisabledPrimary
                            : self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('textColorDisabled', mergedType)])
                };
            }
            // border
            let borderProps = {
                '--n-border': 'initial',
                '--n-border-hover': 'initial',
                '--n-border-pressed': 'initial',
                '--n-border-focus': 'initial',
                '--n-border-disabled': 'initial'
            };
            if (text) {
                borderProps = {
                    '--n-border': 'none',
                    '--n-border-hover': 'none',
                    '--n-border-pressed': 'none',
                    '--n-border-focus': 'none',
                    '--n-border-disabled': 'none'
                };
            }
            else {
                borderProps = {
                    '--n-border': self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('border', mergedType)],
                    '--n-border-hover': self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('borderHover', mergedType)],
                    '--n-border-pressed': self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('borderPressed', mergedType)],
                    '--n-border-focus': self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('borderFocus', mergedType)],
                    '--n-border-disabled': self[(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('borderDisabled', mergedType)]
                };
            }
            // size
            const { [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('height', size)]: height, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('fontSize', size)]: fontSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('padding', size)]: padding, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('paddingRound', size)]: paddingRound, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('iconSize', size)]: iconSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('borderRadius', size)]: borderRadius, [(0,_utils__WEBPACK_IMPORTED_MODULE_11__.createKey)('iconMargin', size)]: iconMargin, waveOpacity } = self;
            const sizeProps = {
                '--n-width': circle && !text ? height : 'initial',
                '--n-height': text ? 'initial' : height,
                '--n-font-size': fontSize,
                '--n-padding': circle
                    ? 'initial'
                    : text
                        ? 'initial'
                        : round
                            ? paddingRound
                            : padding,
                '--n-icon-size': iconSize,
                '--n-icon-margin': iconMargin,
                '--n-border-radius': text
                    ? 'initial'
                    : circle || round
                        ? height
                        : borderRadius
            };
            return Object.assign(Object.assign(Object.assign(Object.assign({ '--n-bezier': cubicBezierEaseInOut, '--n-bezier-ease-out': cubicBezierEaseOut, '--n-ripple-duration': rippleDuration, '--n-opacity-disabled': opacityDisabled, '--n-wave-opacity': waveOpacity }, fontProps), colorProps), borderProps), sizeProps);
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_14__.useThemeClass)('button', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                let hash = '';
                const { dashed, type, ghost, text, color, round, circle, textColor, secondary, tertiary, quaternary, strong } = props;
                if (dashed)
                    hash += 'a';
                if (ghost)
                    hash += 'b';
                if (text)
                    hash += 'c';
                if (round)
                    hash += 'd';
                if (circle)
                    hash += 'e';
                if (secondary)
                    hash += 'f';
                if (tertiary)
                    hash += 'g';
                if (quaternary)
                    hash += 'h';
                if (strong)
                    hash += 'i';
                if (color)
                    hash += 'j' + (0,_utils__WEBPACK_IMPORTED_MODULE_15__.color2Class)(color);
                if (textColor)
                    hash += 'k' + (0,_utils__WEBPACK_IMPORTED_MODULE_15__.color2Class)(textColor);
                const { value: size } = mergedSizeRef;
                hash += 'l' + size[0];
                hash += 'm' + type[0];
                return hash;
            }), cssVarsRef, props)
            : undefined;
        return {
            selfElRef,
            waveElRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedFocusable: mergedFocusableRef,
            mergedSize: mergedSizeRef,
            showBorder: showBorderRef,
            enterPressed: enterPressedRef,
            rtlEnabled: rtlEnabledRef,
            handleMousedown,
            handleKeydown,
            handleBlur,
            handleKeyup,
            handleClick,
            customColorCssVars: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { color } = props;
                if (!color)
                    return null;
                const hoverColor = (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createHoverColor)(color);
                return {
                    '--n-border-color': color,
                    '--n-border-color-hover': hoverColor,
                    '--n-border-color-pressed': (0,_utils_color_index__WEBPACK_IMPORTED_MODULE_12__.createPressedColor)(color),
                    '--n-border-color-focus': hoverColor,
                    '--n-border-color-disabled': color
                };
            }),
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        const { mergedClsPrefix, tag: Component, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        const children = (0,_utils__WEBPACK_IMPORTED_MODULE_16__.resolveWrappedSlot)(this.$slots.default, (children) => children && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-button__content` }, children)));
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(Component, { ref: "selfElRef", class: [
                this.themeClass,
                `${mergedClsPrefix}-button`,
                `${mergedClsPrefix}-button--${this.type}-type`,
                `${mergedClsPrefix}-button--${this.mergedSize}-type`,
                this.rtlEnabled && `${mergedClsPrefix}-button--rtl`,
                this.disabled && `${mergedClsPrefix}-button--disabled`,
                this.block && `${mergedClsPrefix}-button--block`,
                this.enterPressed && `${mergedClsPrefix}-button--pressed`,
                !this.text && this.dashed && `${mergedClsPrefix}-button--dashed`,
                this.color && `${mergedClsPrefix}-button--color`,
                this.secondary && `${mergedClsPrefix}-button--secondary`,
                this.loading && `${mergedClsPrefix}-button--loading`,
                this.ghost && `${mergedClsPrefix}-button--ghost` // required for button group border collapse
            ], tabindex: this.mergedFocusable ? 0 : -1, type: this.attrType, style: this.cssVars, disabled: this.disabled, onClick: this.handleClick, onBlur: this.handleBlur, onMousedown: this.handleMousedown, onKeyup: this.handleKeyup, onKeydown: this.handleKeydown },
            this.iconPlacement === 'right' && children,
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_17__["default"], { width: true }, {
                default: () => (0,_utils__WEBPACK_IMPORTED_MODULE_16__.resolveWrappedSlot)(this.$slots.icon, (children) => (this.loading || children) && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-button__icon`, style: {
                        margin: (0,_utils__WEBPACK_IMPORTED_MODULE_16__.isSlotEmpty)(this.$slots.default) ? '0' : ''
                    } },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_18__["default"], null, {
                        default: () => this.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_19__["default"], { clsPrefix: mergedClsPrefix, key: "loading", class: `${mergedClsPrefix}-icon-slot`, strokeWidth: 20 })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { key: "icon", class: `${mergedClsPrefix}-icon-slot`, role: "none" }, children))
                    }))))
            }),
            this.iconPlacement === 'left' && children,
            !this.text ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_20__["default"], { ref: "waveElRef", clsPrefix: mergedClsPrefix })) : null,
            this.showBorder ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": true, class: `${mergedClsPrefix}-button__border`, style: this.customColorCssVars })) : null,
            this.showBorder ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-hidden": true, class: `${mergedClsPrefix}-button__state-border`, style: this.customColorCssVars })) : null));
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
// XButton is for tsx type checking
// It's not compitable with render function `h`
// Currently we don't expose it as public
// If there's any issue about this, we may expose it
// Since most people use template, the type checking phase doesn't work as tsx
const XButton = Button;
// Also, we may make XButton a generic type which support `tag` prop
// but currently vue doesn't export IntrinsicElementAttributes from runtime-dom
// so we can't easily make an attr map by hand
// just leave it for later


/***/ }),

/***/ 792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonGroupInjectionKey": () => (/* binding */ buttonGroupInjectionKey),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(690);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(767);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(593);
/* harmony import */ var _styles_button_group_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(793);




const buttonGroupInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createInjectionKey)('n-button-group');
const buttonGroupProps = {
    size: {
        type: String,
        default: undefined
    },
    vertical: Boolean
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'ButtonGroup',
    props: buttonGroupProps,
    setup(props) {
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
        (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])('-button-group', _styles_button_group_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], mergedClsPrefixRef);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(buttonGroupInjectionKey, props);
        return {
            mergedClsPrefix: mergedClsPrefixRef
        };
    },
    render() {
        const { mergedClsPrefix } = this;
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: [
                `${mergedClsPrefix}-button-group`,
                this.vertical && `${mergedClsPrefix}-button-group--vertical`
            ], role: "group" }, this.$slots));
    }
}));


/***/ }),

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);

const zero = '0!important';
const n1 = '-1px!important';

function createLeftBorderStyle(type) {
  return (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cM)(type + '-type', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('& +', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cB)('button', {}, [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cM)(type + '-type', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
    borderLeftWidth: zero
  }), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
    left: n1
  })])])])]);
}

function createTopBorderStyle(type) {
  return (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cM)(type + '-type', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('& +', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cB)('button', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cM)(type + '-type', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
    borderTopWidth: zero
  }), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
    top: n1
  })])])])]);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cB)('button-group', `
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`, [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cNotM)('vertical', {
  flexDirection: 'row'
}, [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cB)('button', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('&:first-child:not(:last-child)', `
 margin-right: ${zero};
 border-top-right-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('&:last-child:not(:first-child)', `
 margin-left: ${zero};
 border-top-left-radius: ${zero};
 border-bottom-left-radius: ${zero};
 `), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('&:not(:first-child):not(:last-child)', `
 margin-left: ${zero};
 margin-right: ${zero};
 border-radius: ${zero};
 `), createLeftBorderStyle('default'), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cM)('ghost', [createLeftBorderStyle('primary'), createLeftBorderStyle('info'), createLeftBorderStyle('success'), createLeftBorderStyle('warning'), createLeftBorderStyle('error')])])]), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cM)('vertical', {
  flexDirection: 'column'
}, [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cB)('button', [(0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('&:first-child:not(:last-child)', `
 margin-bottom: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-bottom-left-radius: ${zero};
 border-bottom-right-radius: ${zero};
 `), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('&:last-child:not(:first-child)', `
 margin-top: ${zero};
 margin-left: ${zero};
 margin-right: ${zero};
 border-top-left-radius: ${zero};
 border-top-right-radius: ${zero};
 `), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.c)('&:not(:first-child):not(:last-child)', `
 margin: ${zero};
 border-radius: ${zero};
 `), createTopBorderStyle('default'), (0,_utils_cssr_index__WEBPACK_IMPORTED_MODULE_0__.cM)('ghost', [createTopBorderStyle('primary'), createTopBorderStyle('info'), createTopBorderStyle('success'), createTopBorderStyle('warning'), createTopBorderStyle('error')])])])]));

/***/ }),

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var _styles_transitions_fade_in_width_expand_cssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(795);
/* harmony import */ var _styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(769);


 // vars:
// --n-bezier
// --n-bezier-ease-out
// --n-ripple-duration
// --n-opacity-disabled
// --n-text-color
// --n-text-color-hover
// --n-text-color-pressed
// --n-text-color-focus
// --n-text-color-disabled
// --n-color
// --n-color-hover
// --n-color-pressed
// --n-color-focus
// --n-color-disabled
// --n-border
// --n-border-hover
// --n-border-pressed
// --n-border-focus
// --n-border-disabled
// --n-ripple-color
// --n-border-radius
// --n-height
// --n-width
// --n-font-size
// --n-padding
// --n-icon-size
// --n-icon-margin
// --n-wave-opacity
// --n-font-weight
//
// private-vars:
// --n-border-color-xxx, used for custom color

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)([(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('button', `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('color', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  borderColor: 'var(--n-border-color)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  borderColor: 'var(--n-border-color-disabled)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:focus', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  borderColor: 'var(--n-border-color-focus)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  borderColor: 'var(--n-border-color-hover)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  borderColor: 'var(--n-border-color-pressed)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('pressed', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  borderColor: 'var(--n-border-color-pressed)'
})])])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  backgroundColor: 'var(--n-color-disabled)',
  color: 'var(--n-text-color-disabled)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  border: 'var(--n-border-disabled)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:focus', {
  backgroundColor: 'var(--n-color-focus)',
  color: 'var(--n-text-color-focus)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  border: 'var(--n-border-focus)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', {
  backgroundColor: 'var(--n-color-hover)',
  color: 'var(--n-text-color-hover)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  border: 'var(--n-border-hover)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', {
  backgroundColor: 'var(--n-color-pressed)',
  color: 'var(--n-text-color-pressed)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  border: 'var(--n-border-pressed)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('pressed', {
  backgroundColor: 'var(--n-color-pressed)',
  color: 'var(--n-text-color-pressed)'
}, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  border: 'var(--n-border-pressed)'
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('loading', {
  'pointer-events': 'none'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-wave', `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('active', {
  zIndex: 1,
  animationName: 'button-wave-spread, button-wave-opacity'
})]), typeof window !== 'undefined' && 'MozBoxSizing' in document.createElement('div').style ? (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::moz-focus-inner', {
  border: 0
}) : null, (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border, state-border', `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', {
  border: 'var(--n-border)'
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', {
  border: 'var(--n-border)',
  borderColor: '#0000',
  zIndex: 1
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon-slot', `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `, [(0,_styles_transitions_icon_switch_cssr__WEBPACK_IMPORTED_MODULE_1__["default"])({
  top: '50%',
  originalTransform: 'translateY(-50%)'
})]), (0,_styles_transitions_fade_in_width_expand_cssr__WEBPACK_IMPORTED_MODULE_2__["default"])()]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('content', `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('~', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('icon', {
  margin: 'var(--n-icon-margin)',
  marginRight: 0
})])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('block', `
 display: flex;
 width: 100%;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('dashed', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border, state-border', {
  borderStyle: 'dashed !important'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', {
  cursor: 'not-allowed',
  opacity: 'var(--n-opacity-disabled)'
})]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('@keyframes button-wave-spread', {
  from: {
    boxShadow: '0 0 0.5px 0 var(--n-ripple-color)'
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: '0 0 0.5px 4.5px var(--n-ripple-color)'
  }
}), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('@keyframes button-wave-opacity', {
  from: {
    opacity: 'var(--n-wave-opacity)'
  },
  to: {
    opacity: 0
  }
})]));

/***/ }),

/***/ 797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    paddingTiny: '0 6px',
    paddingSmall: '0 10px',
    paddingMedium: '0 14px',
    paddingLarge: '0 18px',
    paddingRoundTiny: '0 10px',
    paddingRoundSmall: '0 14px',
    paddingRoundMedium: '0 18px',
    paddingRoundLarge: '0 22px',
    iconMarginTiny: '6px',
    iconMarginSmall: '6px',
    iconMarginMedium: '6px',
    iconMarginLarge: '6px',
    iconSizeTiny: '14px',
    iconSizeSmall: '18px',
    iconSizeMedium: '18px',
    iconSizeLarge: '20px',
    rippleDuration: '.6s'
});


/***/ }),

/***/ 796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(797);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(694);


const self = (vars) => {
    const { heightTiny, heightSmall, heightMedium, heightLarge, borderRadius, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, opacityDisabled, textColor2, textColor3, primaryColorHover, primaryColorPressed, borderColor, primaryColor, baseColor, infoColor, infoColorHover, infoColorPressed, successColor, successColorHover, successColorPressed, warningColor, warningColorHover, warningColorPressed, errorColor, errorColorHover, errorColorPressed, fontWeight, buttonColor2, buttonColor2Hover, buttonColor2Pressed, fontWeightStrong } = vars;
    return Object.assign(Object.assign({}, _common__WEBPACK_IMPORTED_MODULE_0__["default"]), { heightTiny,
        heightSmall,
        heightMedium,
        heightLarge, borderRadiusTiny: borderRadius, borderRadiusSmall: borderRadius, borderRadiusMedium: borderRadius, borderRadiusLarge: borderRadius, fontSizeTiny: fontSizeTiny, fontSizeSmall: fontSizeSmall, fontSizeMedium: fontSizeMedium, fontSizeLarge: fontSizeLarge, opacityDisabled: opacityDisabled, 
        // secondary
        colorOpacitySecondary: '0.16', colorOpacitySecondaryHover: '0.22', colorOpacitySecondaryPressed: '0.28', colorSecondary: buttonColor2, colorSecondaryHover: buttonColor2Hover, colorSecondaryPressed: buttonColor2Pressed, 
        // tertiary
        colorTertiary: buttonColor2, colorTertiaryHover: buttonColor2Hover, colorTertiaryPressed: buttonColor2Pressed, 
        // quaternary
        colorQuaternary: '#0000', colorQuaternaryHover: buttonColor2Hover, colorQuaternaryPressed: buttonColor2Pressed, 
        // default type
        color: '#0000', colorHover: '#0000', colorPressed: '#0000', colorFocus: '#0000', colorDisabled: '#0000', textColor: textColor2, textColorTertiary: textColor3, textColorHover: primaryColorHover, textColorPressed: primaryColorPressed, textColorFocus: primaryColorHover, textColorDisabled: textColor2, textColorText: textColor2, textColorTextHover: primaryColorHover, textColorTextPressed: primaryColorPressed, textColorTextFocus: primaryColorHover, textColorTextDisabled: textColor2, textColorGhost: textColor2, textColorGhostHover: primaryColorHover, textColorGhostPressed: primaryColorPressed, textColorGhostFocus: primaryColorHover, textColorGhostDisabled: textColor2, border: `1px solid ${borderColor}`, borderHover: `1px solid ${primaryColorHover}`, borderPressed: `1px solid ${primaryColorPressed}`, borderFocus: `1px solid ${primaryColorHover}`, borderDisabled: `1px solid ${borderColor}`, rippleColor: primaryColor, 
        // primary
        colorPrimary: primaryColor, colorHoverPrimary: primaryColorHover, colorPressedPrimary: primaryColorPressed, colorFocusPrimary: primaryColorHover, colorDisabledPrimary: primaryColor, textColorPrimary: baseColor, textColorHoverPrimary: baseColor, textColorPressedPrimary: baseColor, textColorFocusPrimary: baseColor, textColorDisabledPrimary: baseColor, textColorTextPrimary: primaryColor, textColorTextHoverPrimary: primaryColorHover, textColorTextPressedPrimary: primaryColorPressed, textColorTextFocusPrimary: primaryColorHover, textColorTextDisabledPrimary: textColor2, textColorGhostPrimary: primaryColor, textColorGhostHoverPrimary: primaryColorHover, textColorGhostPressedPrimary: primaryColorPressed, textColorGhostFocusPrimary: primaryColorHover, textColorGhostDisabledPrimary: primaryColor, borderPrimary: `1px solid ${primaryColor}`, borderHoverPrimary: `1px solid ${primaryColorHover}`, borderPressedPrimary: `1px solid ${primaryColorPressed}`, borderFocusPrimary: `1px solid ${primaryColorHover}`, borderDisabledPrimary: `1px solid ${primaryColor}`, rippleColorPrimary: primaryColor, 
        // info
        colorInfo: infoColor, colorHoverInfo: infoColorHover, colorPressedInfo: infoColorPressed, colorFocusInfo: infoColorHover, colorDisabledInfo: infoColor, textColorInfo: baseColor, textColorHoverInfo: baseColor, textColorPressedInfo: baseColor, textColorFocusInfo: baseColor, textColorDisabledInfo: baseColor, textColorTextInfo: infoColor, textColorTextHoverInfo: infoColorHover, textColorTextPressedInfo: infoColorPressed, textColorTextFocusInfo: infoColorHover, textColorTextDisabledInfo: textColor2, textColorGhostInfo: infoColor, textColorGhostHoverInfo: infoColorHover, textColorGhostPressedInfo: infoColorPressed, textColorGhostFocusInfo: infoColorHover, textColorGhostDisabledInfo: infoColor, borderInfo: `1px solid ${infoColor}`, borderHoverInfo: `1px solid ${infoColorHover}`, borderPressedInfo: `1px solid ${infoColorPressed}`, borderFocusInfo: `1px solid ${infoColorHover}`, borderDisabledInfo: `1px solid ${infoColor}`, rippleColorInfo: infoColor, 
        // success
        colorSuccess: successColor, colorHoverSuccess: successColorHover, colorPressedSuccess: successColorPressed, colorFocusSuccess: successColorHover, colorDisabledSuccess: successColor, textColorSuccess: baseColor, textColorHoverSuccess: baseColor, textColorPressedSuccess: baseColor, textColorFocusSuccess: baseColor, textColorDisabledSuccess: baseColor, textColorTextSuccess: successColor, textColorTextHoverSuccess: successColorHover, textColorTextPressedSuccess: successColorPressed, textColorTextFocusSuccess: successColorHover, textColorTextDisabledSuccess: textColor2, textColorGhostSuccess: successColor, textColorGhostHoverSuccess: successColorHover, textColorGhostPressedSuccess: successColorPressed, textColorGhostFocusSuccess: successColorHover, textColorGhostDisabledSuccess: successColor, borderSuccess: `1px solid ${successColor}`, borderHoverSuccess: `1px solid ${successColorHover}`, borderPressedSuccess: `1px solid ${successColorPressed}`, borderFocusSuccess: `1px solid ${successColorHover}`, borderDisabledSuccess: `1px solid ${successColor}`, rippleColorSuccess: successColor, 
        // warning
        colorWarning: warningColor, colorHoverWarning: warningColorHover, colorPressedWarning: warningColorPressed, colorFocusWarning: warningColorHover, colorDisabledWarning: warningColor, textColorWarning: baseColor, textColorHoverWarning: baseColor, textColorPressedWarning: baseColor, textColorFocusWarning: baseColor, textColorDisabledWarning: baseColor, textColorTextWarning: warningColor, textColorTextHoverWarning: warningColorHover, textColorTextPressedWarning: warningColorPressed, textColorTextFocusWarning: warningColorHover, textColorTextDisabledWarning: textColor2, textColorGhostWarning: warningColor, textColorGhostHoverWarning: warningColorHover, textColorGhostPressedWarning: warningColorPressed, textColorGhostFocusWarning: warningColorHover, textColorGhostDisabledWarning: warningColor, borderWarning: `1px solid ${warningColor}`, borderHoverWarning: `1px solid ${warningColorHover}`, borderPressedWarning: `1px solid ${warningColorPressed}`, borderFocusWarning: `1px solid ${warningColorHover}`, borderDisabledWarning: `1px solid ${warningColor}`, rippleColorWarning: warningColor, 
        // error
        colorError: errorColor, colorHoverError: errorColorHover, colorPressedError: errorColorPressed, colorFocusError: errorColorHover, colorDisabledError: errorColor, textColorError: baseColor, textColorHoverError: baseColor, textColorPressedError: baseColor, textColorFocusError: baseColor, textColorDisabledError: baseColor, textColorTextError: errorColor, textColorTextHoverError: errorColorHover, textColorTextPressedError: errorColorPressed, textColorTextFocusError: errorColorHover, textColorTextDisabledError: textColor2, textColorGhostError: errorColor, textColorGhostHoverError: errorColorHover, textColorGhostPressedError: errorColorPressed, textColorGhostFocusError: errorColorHover, textColorGhostDisabledError: errorColor, borderError: `1px solid ${errorColor}`, borderHoverError: `1px solid ${errorColorHover}`, borderPressedError: `1px solid ${errorColorPressed}`, borderFocusError: `1px solid ${errorColorHover}`, borderDisabledError: `1px solid ${errorColor}`, rippleColorError: errorColor, waveOpacity: '0.6', fontWeight,
        fontWeightStrong });
};
const buttonLight = {
    name: 'Button',
    common: _styles_common__WEBPACK_IMPORTED_MODULE_1__["default"],
    self
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonLight);


/***/ }),

/***/ 705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawerBodyInjectionKey": () => (/* binding */ drawerBodyInjectionKey),
/* harmony export */   "drawerInjectionKey": () => (/* binding */ drawerInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

const drawerBodyInjectionKey = (0,_utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-drawer-body');
const drawerInjectionKey = (0,_utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-drawer');


/***/ }),

/***/ 730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(747);
/* harmony import */ var vooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(708);
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(753);
/* harmony import */ var vueuc__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(762);
/* harmony import */ var evtd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(750);
/* harmony import */ var _internal_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(789);
/* harmony import */ var _internal_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(790);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(757);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(766);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(784);
/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(772);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(690);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(734);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(728);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(755);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(749);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(591);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(756);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(732);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(752);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(748);
/* harmony import */ var _WordCount__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(788);
/* harmony import */ var _styles_input_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(731);














const inputProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { bordered: {
        type: Boolean,
        default: undefined
    }, type: {
        type: String,
        default: 'text'
    }, placeholder: [Array, String], defaultValue: {
        type: [String, Array],
        default: null
    }, value: [String, Array], disabled: {
        type: Boolean,
        default: undefined
    }, size: String, rows: {
        type: [Number, String],
        default: 3
    }, round: Boolean, minlength: [String, Number], maxlength: [String, Number], clearable: Boolean, autosize: {
        type: [Boolean, Object],
        default: false
    }, pair: Boolean, separator: String, readonly: {
        type: [String, Boolean],
        default: false
    }, passivelyActivated: Boolean, showPasswordOn: String, stateful: {
        type: Boolean,
        default: true
    }, autofocus: Boolean, inputProps: Object, resizable: {
        type: Boolean,
        default: true
    }, showCount: Boolean, loading: {
        type: Boolean,
        default: undefined
    }, onMousedown: Function, onKeydown: Function, onKeyup: Function, onInput: [Function, Array], onFocus: [Function, Array], onBlur: [Function, Array], onClick: [Function, Array], onChange: [Function, Array], onClear: [Function, Array], status: String, 'onUpdate:value': [Function, Array], onUpdateValue: [Function, Array], 
    /** private */
    textDecoration: [String, Array], attrSize: {
        type: Number,
        default: 20
    }, onInputBlur: [Function, Array], onInputFocus: [Function, Array], onDeactivate: [Function, Array], onActivate: [Function, Array], onWrapperFocus: [Function, Array], onWrapperBlur: [Function, Array], internalDeactivateOnEnter: Boolean, internalForceFocus: Boolean, internalLoadingBeforeSuffix: Boolean, 
    /** deprecated */
    showPasswordToggle: Boolean });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Input',
    props: inputProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
                if (props.showPasswordToggle) {
                    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.warnOnce)('input', '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
                }
            });
        }
        const { mergedClsPrefixRef, mergedBorderedRef, inlineThemeDisabled } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Input', '-input', _styles_input_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], _styles__WEBPACK_IMPORTED_MODULE_5__["default"], props, mergedClsPrefixRef);
        // dom refs
        const wrapperElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const textareaElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const textareaMirrorElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const inputMirrorElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const inputElRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const inputEl2Ref = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        const textareaScrollbarInstRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
        // local
        const { localeRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_6__["default"])('Input');
        // value
        const uncontrolledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.defaultValue);
        const controlledValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, 'value');
        const mergedValueRef = (0,vooks__WEBPACK_IMPORTED_MODULE_7__["default"])(controlledValueRef, uncontrolledValueRef);
        // form-item
        const formItem = (0,_mixins__WEBPACK_IMPORTED_MODULE_8__["default"])(props);
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
        // states
        const focusedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const hoverRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const isComposingRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        const activatedRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        let syncSource = null;
        // placeholder
        const mergedPlaceholderRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { placeholder, pair } = props;
            if (pair) {
                if (Array.isArray(placeholder)) {
                    return placeholder;
                }
                else if (placeholder === undefined) {
                    return ['', ''];
                }
                return [placeholder, placeholder];
            }
            else if (placeholder === undefined) {
                return [localeRef.value.placeholder];
            }
            else {
                return [placeholder];
            }
        });
        const showPlaceholder1Ref = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: isComposing } = isComposingRef;
            const { value: mergedValue } = mergedValueRef;
            const { value: mergedPlaceholder } = mergedPlaceholderRef;
            return (!isComposing &&
                ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isEmptyValue)(mergedValue) ||
                    (Array.isArray(mergedValue) && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isEmptyValue)(mergedValue[0]))) &&
                mergedPlaceholder[0]);
        });
        const showPlaceholder2Ref = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: isComposing } = isComposingRef;
            const { value: mergedValue } = mergedValueRef;
            const { value: mergedPlaceholder } = mergedPlaceholderRef;
            return (!isComposing &&
                mergedPlaceholder[1] &&
                ((0,_utils__WEBPACK_IMPORTED_MODULE_9__.isEmptyValue)(mergedValue) ||
                    (Array.isArray(mergedValue) && (0,_utils__WEBPACK_IMPORTED_MODULE_9__.isEmptyValue)(mergedValue[1]))));
        });
        // focus
        const mergedFocusRef = (0,vooks__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
            return props.internalForceFocus || focusedRef.value;
        });
        // clear
        const showClearButton = (0,vooks__WEBPACK_IMPORTED_MODULE_10__["default"])(() => {
            if (mergedDisabledRef.value ||
                props.readonly ||
                !props.clearable ||
                (!mergedFocusRef.value && !hoverRef.value)) {
                return false;
            }
            const { value: mergedValue } = mergedValueRef;
            const { value: mergedFocus } = mergedFocusRef;
            if (props.pair) {
                return (!!(Array.isArray(mergedValue) &&
                    (mergedValue[0] || mergedValue[1])) &&
                    (hoverRef.value || mergedFocus));
            }
            else {
                return !!mergedValue && (hoverRef.value || mergedFocus);
            }
        });
        // passwordVisible
        const mergedShowPasswordOnRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { showPasswordOn } = props;
            if (showPasswordOn) {
                return showPasswordOn;
            }
            if (props.showPasswordToggle)
                return 'click';
            return undefined;
        });
        const passwordVisibleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
        // text-decoration
        const textDecorationStyleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { textDecoration } = props;
            if (!textDecoration)
                return ['', ''];
            if (Array.isArray(textDecoration)) {
                return textDecoration.map((v) => ({
                    textDecoration: v
                }));
            }
            return [
                {
                    textDecoration
                }
            ];
        });
        // textarea autosize
        const updateTextAreaStyle = () => {
            if (props.type === 'textarea') {
                const { autosize } = props;
                if (typeof autosize === 'boolean')
                    return;
                if (!textareaElRef.value)
                    return;
                const { paddingTop: stylePaddingTop, paddingBottom: stylePaddingBottom, lineHeight: styleLineHeight } = window.getComputedStyle(textareaElRef.value);
                const paddingTop = Number(stylePaddingTop.slice(0, -2));
                const paddingBottom = Number(stylePaddingBottom.slice(0, -2));
                const lineHeight = Number(styleLineHeight.slice(0, -2));
                const { value: textareaMirrorEl } = textareaMirrorElRef;
                if (!textareaMirrorEl)
                    return;
                if (autosize.minRows) {
                    const minRows = Math.max(autosize.minRows, 1);
                    const styleMinHeight = `${paddingTop + paddingBottom + lineHeight * minRows}px`;
                    textareaMirrorEl.style.minHeight = styleMinHeight;
                }
                if (autosize.maxRows) {
                    const styleMaxHeight = `${paddingTop + paddingBottom + lineHeight * autosize.maxRows}px`;
                    textareaMirrorEl.style.maxHeight = styleMaxHeight;
                }
            }
        };
        // word count
        const maxlengthRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { maxlength } = props;
            return maxlength === undefined ? undefined : Number(maxlength);
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
            // sync mirror if is not pair
            const { value } = mergedValueRef;
            if (!Array.isArray(value)) {
                syncMirror(value);
            }
        });
        // other methods
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const vm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy;
        function doUpdateValue(value) {
            const { onUpdateValue, 'onUpdate:value': _onUpdateValue, onInput } = props;
            const { nTriggerFormInput } = formItem;
            if (onUpdateValue)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onUpdateValue, value);
            if (_onUpdateValue)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(_onUpdateValue, value);
            if (onInput)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onInput, value);
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
        }
        function doChange(value) {
            const { onChange } = props;
            const { nTriggerFormChange } = formItem;
            if (onChange)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onChange, value);
            uncontrolledValueRef.value = value;
            nTriggerFormChange();
        }
        function doBlur(e) {
            const { onBlur } = props;
            const { nTriggerFormBlur } = formItem;
            if (onBlur)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onBlur, e);
            nTriggerFormBlur();
        }
        function doFocus(e) {
            const { onFocus } = props;
            const { nTriggerFormFocus } = formItem;
            if (onFocus)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onFocus, e);
            nTriggerFormFocus();
        }
        function doClear(e) {
            const { onClear } = props;
            if (onClear)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onClear, e);
        }
        function doUpdateValueBlur(e) {
            const { onInputBlur } = props;
            if (onInputBlur)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onInputBlur, e);
        }
        function doUpdateValueFocus(e) {
            const { onInputFocus } = props;
            if (onInputFocus)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onInputFocus, e);
        }
        function doDeactivate() {
            const { onDeactivate } = props;
            if (onDeactivate)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onDeactivate);
        }
        function doActivate() {
            const { onActivate } = props;
            if (onActivate)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onActivate);
        }
        function doClick(e) {
            const { onClick } = props;
            if (onClick)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onClick, e);
        }
        function doWrapperFocus(e) {
            const { onWrapperFocus } = props;
            if (onWrapperFocus)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onWrapperFocus, e);
        }
        function doWrapperBlur(e) {
            const { onWrapperBlur } = props;
            if (onWrapperBlur)
                (0,_utils__WEBPACK_IMPORTED_MODULE_11__.call)(onWrapperBlur, e);
        }
        // methods
        function handleCompositionStart() {
            isComposingRef.value = true;
        }
        function handleCompositionEnd(e) {
            isComposingRef.value = false;
            if (e.target === inputEl2Ref.value) {
                handleInput(e, 1);
            }
            else {
                handleInput(e, 0);
            }
        }
        function handleInput(e, index = 0, event = 'input') {
            const targetValue = e.target.value;
            syncMirror(targetValue);
            if (props.type === 'textarea') {
                const { value: textareaScrollbarInst } = textareaScrollbarInstRef;
                if (textareaScrollbarInst) {
                    textareaScrollbarInst.syncUnifiedContainer();
                }
            }
            syncSource = targetValue;
            if (isComposingRef.value)
                return;
            const changedValue = targetValue;
            if (!props.pair) {
                event === 'input' ? doUpdateValue(changedValue) : doChange(changedValue);
            }
            else {
                let { value } = mergedValueRef;
                if (!Array.isArray(value)) {
                    value = ['', ''];
                }
                else {
                    value = [...value];
                }
                value[index] = changedValue;
                event === 'input' ? doUpdateValue(value) : doChange(value);
            }
            // force update to sync input's view with value
            // if not set, after input, input value won't sync with dom input value
            vm.$forceUpdate();
        }
        function handleInputBlur(e) {
            doUpdateValueBlur(e);
            if (e.relatedTarget === wrapperElRef.value) {
                doDeactivate();
            }
            if (!(e.relatedTarget !== null &&
                (e.relatedTarget === inputElRef.value ||
                    e.relatedTarget === inputEl2Ref.value ||
                    e.relatedTarget === textareaElRef.value))) {
                activatedRef.value = false;
            }
            dealWithEvent(e, 'blur');
        }
        function handleInputFocus(e) {
            doUpdateValueFocus(e);
            focusedRef.value = true;
            activatedRef.value = true;
            doActivate();
            dealWithEvent(e, 'focus');
        }
        function handleWrapperBlur(e) {
            if (props.passivelyActivated) {
                doWrapperBlur(e);
                dealWithEvent(e, 'blur');
            }
        }
        function handleWrapperFocus(e) {
            if (props.passivelyActivated) {
                focusedRef.value = true;
                doWrapperFocus(e);
                dealWithEvent(e, 'focus');
            }
        }
        function dealWithEvent(e, type) {
            if (e.relatedTarget !== null &&
                (e.relatedTarget === inputElRef.value ||
                    e.relatedTarget === inputEl2Ref.value ||
                    e.relatedTarget === textareaElRef.value ||
                    e.relatedTarget === wrapperElRef.value)) {
                /**
                 * activeElement transfer inside the input, do nothing
                 */
            }
            else {
                if (type === 'focus') {
                    doFocus(e);
                    focusedRef.value = true;
                }
                else if (type === 'blur') {
                    doBlur(e);
                    focusedRef.value = false;
                }
            }
        }
        function handleChange(e, index) {
            handleInput(e, index, 'change');
        }
        function handleClick(e) {
            doClick(e);
        }
        function handleClear(e) {
            doClear(e);
            if (props.pair) {
                doUpdateValue(['', '']);
                doChange(['', '']);
            }
            else {
                doUpdateValue('');
                doChange('');
            }
        }
        function handleMouseDown(e) {
            const { onMousedown } = props;
            if (onMousedown)
                onMousedown(e);
            const { tagName } = e.target;
            if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
                if (props.resizable) {
                    const { value: wrapperEl } = wrapperElRef;
                    if (wrapperEl) {
                        const { left, top, width, height } = wrapperEl.getBoundingClientRect();
                        const resizeHandleSize = 14;
                        if (left + width - resizeHandleSize < e.clientX &&
                            e.clientY < left + width &&
                            top + height - resizeHandleSize < e.clientY &&
                            e.clientY < top + height) {
                            // touching resize handle, just let it go.
                            // resize won't take focus, maybe there is a better way to do this.
                            // hope someone can figure out a better solution
                            return;
                        }
                    }
                }
                e.preventDefault();
                if (!focusedRef.value) {
                    focus();
                }
            }
        }
        function handleMouseEnter() {
            var _a;
            hoverRef.value = true;
            if (props.type === 'textarea') {
                (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseEnterWrapper();
            }
        }
        function handleMouseLeave() {
            var _a;
            hoverRef.value = false;
            if (props.type === 'textarea') {
                (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.handleMouseLeaveWrapper();
            }
        }
        function handlePasswordToggleClick() {
            if (mergedDisabledRef.value)
                return;
            if (mergedShowPasswordOnRef.value !== 'click')
                return;
            passwordVisibleRef.value = !passwordVisibleRef.value;
        }
        function handlePasswordToggleMousedown(e) {
            if (mergedDisabledRef.value)
                return;
            e.preventDefault();
            const preventDefaultOnce = (e) => {
                e.preventDefault();
                (0,evtd__WEBPACK_IMPORTED_MODULE_12__.off)('mouseup', document, preventDefaultOnce);
            };
            (0,evtd__WEBPACK_IMPORTED_MODULE_12__.on)('mouseup', document, preventDefaultOnce);
            if (mergedShowPasswordOnRef.value !== 'mousedown')
                return;
            passwordVisibleRef.value = true;
            const hidePassword = () => {
                passwordVisibleRef.value = false;
                (0,evtd__WEBPACK_IMPORTED_MODULE_12__.off)('mouseup', document, hidePassword);
            };
            (0,evtd__WEBPACK_IMPORTED_MODULE_12__.on)('mouseup', document, hidePassword);
        }
        function handleWrapperKeyDown(e) {
            var _a;
            (_a = props.onKeydown) === null || _a === void 0 ? void 0 : _a.call(props, e);
            switch (e.code) {
                case 'Escape':
                    handleWrapperKeyDownEsc();
                    break;
                case 'Enter':
                case 'NumpadEnter':
                    handleWrapperKeyDownEnter(e);
                    break;
            }
        }
        function handleWrapperKeyDownEnter(e) {
            var _a, _b;
            if (props.passivelyActivated) {
                const { value: focused } = activatedRef;
                if (focused) {
                    if (props.internalDeactivateOnEnter) {
                        handleWrapperKeyDownEsc();
                    }
                    return;
                }
                e.preventDefault();
                if (props.type === 'textarea') {
                    (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
                }
                else {
                    (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
                }
            }
        }
        function handleWrapperKeyDownEsc() {
            if (props.passivelyActivated) {
                activatedRef.value = false;
                void (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(() => {
                    var _a;
                    (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
                });
            }
        }
        function focus() {
            var _a, _b, _c;
            if (mergedDisabledRef.value)
                return;
            if (props.passivelyActivated) {
                (_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.focus();
            }
            else {
                (_b = textareaElRef.value) === null || _b === void 0 ? void 0 : _b.focus();
                (_c = inputElRef.value) === null || _c === void 0 ? void 0 : _c.focus();
            }
        }
        function blur() {
            var _a;
            if ((_a = wrapperElRef.value) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement)) {
                ;
                document.activeElement.blur();
            }
        }
        function select() {
            var _a, _b;
            (_a = textareaElRef.value) === null || _a === void 0 ? void 0 : _a.select();
            (_b = inputElRef.value) === null || _b === void 0 ? void 0 : _b.select();
        }
        function activate() {
            if (mergedDisabledRef.value)
                return;
            if (textareaElRef.value)
                textareaElRef.value.focus();
            else if (inputElRef.value)
                inputElRef.value.focus();
        }
        function deactivate() {
            const { value: wrapperEl } = wrapperElRef;
            if ((wrapperEl === null || wrapperEl === void 0 ? void 0 : wrapperEl.contains(document.activeElement)) &&
                wrapperEl !== document.activeElement) {
                handleWrapperKeyDownEsc();
            }
        }
        function syncMirror(value) {
            const { type, pair, autosize } = props;
            if (!pair && autosize) {
                if (type === 'textarea') {
                    const { value: textareaMirrorEl } = textareaMirrorElRef;
                    if (textareaMirrorEl) {
                        textareaMirrorEl.textContent = (value !== null && value !== void 0 ? value : '') + '\r\n';
                    }
                }
                else {
                    const { value: inputMirrorEl } = inputMirrorElRef;
                    if (inputMirrorEl) {
                        if (value) {
                            inputMirrorEl.textContent = value;
                        }
                        else {
                            inputMirrorEl.innerHTML = '&nbsp;';
                        }
                    }
                }
            }
        }
        function handleTextAreaMirrorResize() {
            updateTextAreaStyle();
        }
        const placeholderStyleRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
            top: '0'
        });
        function handleTextAreaScroll(e) {
            var _a;
            const { scrollTop } = e.target;
            placeholderStyleRef.value.top = `${-scrollTop}px`;
            (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
        }
        let stopWatchMergedValue1 = null;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            const { autosize, type } = props;
            if (autosize && type === 'textarea') {
                stopWatchMergedValue1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(mergedValueRef, (value) => {
                    if (!Array.isArray(value) && value !== syncSource) {
                        syncMirror(value);
                    }
                });
            }
            else {
                stopWatchMergedValue1 === null || stopWatchMergedValue1 === void 0 ? void 0 : stopWatchMergedValue1();
            }
        });
        let stopWatchMergedValue2 = null;
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watchEffect)(() => {
            if (props.type === 'textarea') {
                stopWatchMergedValue2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(mergedValueRef, (value) => {
                    var _a;
                    if (!Array.isArray(value) && value !== syncSource) {
                        (_a = textareaScrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.syncUnifiedContainer();
                    }
                });
            }
            else {
                stopWatchMergedValue2 === null || stopWatchMergedValue2 === void 0 ? void 0 : stopWatchMergedValue2();
            }
        });
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(_interface__WEBPACK_IMPORTED_MODULE_13__.inputInjectionKey, {
            mergedValueRef,
            maxlengthRef,
            mergedClsPrefixRef
        });
        const exposedProps = {
            wrapperElRef,
            inputElRef,
            textareaElRef,
            isCompositing: isComposingRef,
            focus,
            blur,
            select,
            deactivate,
            activate
        };
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: size } = mergedSizeRef;
            const { common: { cubicBezierEaseInOut }, self: { color, borderRadius, textColor, caretColor, caretColorError, caretColorWarning, textDecorationColor, border, borderDisabled, borderHover, borderFocus, placeholderColor, placeholderColorDisabled, lineHeightTextarea, colorDisabled, colorFocus, textColorDisabled, boxShadowFocus, iconSize, colorFocusWarning, boxShadowFocusWarning, borderWarning, borderFocusWarning, borderHoverWarning, colorFocusError, boxShadowFocusError, borderError, borderFocusError, borderHoverError, clearSize, clearColor, clearColorHover, clearColorPressed, iconColor, iconColorDisabled, suffixTextColor, countTextColor, iconColorHover, iconColorPressed, loadingColor, loadingColorError, loadingColorWarning, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('padding', size)]: padding, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('fontSize', size)]: fontSize, [(0,_utils__WEBPACK_IMPORTED_MODULE_14__.createKey)('height', size)]: height } } = themeRef.value;
            const { left: paddingLeft, right: paddingRight } = (0,seemly__WEBPACK_IMPORTED_MODULE_15__.getPadding)(padding);
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-count-text-color': countTextColor,
                '--n-color': color,
                '--n-font-size': fontSize,
                '--n-border-radius': borderRadius,
                '--n-height': height,
                '--n-padding-left': paddingLeft,
                '--n-padding-right': paddingRight,
                '--n-text-color': textColor,
                '--n-caret-color': caretColor,
                '--n-text-decoration-color': textDecorationColor,
                '--n-border': border,
                '--n-border-disabled': borderDisabled,
                '--n-border-hover': borderHover,
                '--n-border-focus': borderFocus,
                '--n-placeholder-color': placeholderColor,
                '--n-placeholder-color-disabled': placeholderColorDisabled,
                '--n-icon-size': iconSize,
                '--n-line-height-textarea': lineHeightTextarea,
                '--n-color-disabled': colorDisabled,
                '--n-color-focus': colorFocus,
                '--n-text-color-disabled': textColorDisabled,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-loading-color': loadingColor,
                // form warning
                '--n-caret-color-warning': caretColorWarning,
                '--n-color-focus-warning': colorFocusWarning,
                '--n-box-shadow-focus-warning': boxShadowFocusWarning,
                '--n-border-warning': borderWarning,
                '--n-border-focus-warning': borderFocusWarning,
                '--n-border-hover-warning': borderHoverWarning,
                '--n-loading-color-warning': loadingColorWarning,
                // form error
                '--n-caret-color-error': caretColorError,
                '--n-color-focus-error': colorFocusError,
                '--n-box-shadow-focus-error': boxShadowFocusError,
                '--n-border-error': borderError,
                '--n-border-focus-error': borderFocusError,
                '--n-border-hover-error': borderHoverError,
                '--n-loading-color-error': loadingColorError,
                // clear-button
                '--n-clear-color': clearColor,
                '--n-clear-size': clearSize,
                '--n-clear-color-hover': clearColorHover,
                '--n-clear-color-pressed': clearColorPressed,
                '--n-icon-color': iconColor,
                '--n-icon-color-hover': iconColorHover,
                '--n-icon-color-pressed': iconColorPressed,
                '--n-icon-color-disabled': iconColorDisabled,
                '--n-suffix-text-color': suffixTextColor
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_16__.useThemeClass)('input', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                const { value: size } = mergedSizeRef;
                return size[0];
            }), cssVarsRef, props)
            : undefined;
        return Object.assign(Object.assign({}, exposedProps), { 
            // DOM ref
            wrapperElRef,
            inputElRef,
            inputMirrorElRef,
            inputEl2Ref,
            textareaElRef,
            textareaMirrorElRef,
            textareaScrollbarInstRef, 
            // value
            uncontrolledValue: uncontrolledValueRef, mergedValue: mergedValueRef, passwordVisible: passwordVisibleRef, mergedPlaceholder: mergedPlaceholderRef, showPlaceholder1: showPlaceholder1Ref, showPlaceholder2: showPlaceholder2Ref, mergedFocus: mergedFocusRef, isComposing: isComposingRef, activated: activatedRef, showClearButton, mergedSize: mergedSizeRef, mergedDisabled: mergedDisabledRef, textDecorationStyle: textDecorationStyleRef, mergedClsPrefix: mergedClsPrefixRef, mergedBordered: mergedBorderedRef, mergedShowPasswordOn: mergedShowPasswordOnRef, placeholderStyle: placeholderStyleRef, mergedStatus: mergedStatusRef, 
            // methods
            handleTextAreaScroll,
            handleCompositionStart,
            handleCompositionEnd,
            handleInput,
            handleInputBlur,
            handleInputFocus,
            handleWrapperBlur,
            handleWrapperFocus,
            handleMouseEnter,
            handleMouseLeave,
            handleMouseDown,
            handleChange,
            handleClick,
            handleClear,
            handlePasswordToggleClick,
            handlePasswordToggleMousedown,
            handleWrapperKeyDown,
            handleTextAreaMirrorResize, getTextareaScrollContainer: () => {
                return textareaElRef.value;
            }, mergedTheme: themeRef, cssVars: inlineThemeDisabled ? undefined : cssVarsRef, themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass, onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender });
    },
    render() {
        const { mergedClsPrefix, mergedStatus, themeClass, onRender, $slots } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "wrapperElRef", class: [
                `${mergedClsPrefix}-input`,
                themeClass,
                mergedStatus && `${mergedClsPrefix}-input--${mergedStatus}-status`,
                {
                    [`${mergedClsPrefix}-input--disabled`]: this.mergedDisabled,
                    [`${mergedClsPrefix}-input--textarea`]: this.type === 'textarea',
                    [`${mergedClsPrefix}-input--resizable`]: this.resizable && !this.autosize,
                    [`${mergedClsPrefix}-input--autosize`]: this.autosize,
                    [`${mergedClsPrefix}-input--round`]: this.round && !(this.type === 'textarea'),
                    [`${mergedClsPrefix}-input--pair`]: this.pair,
                    [`${mergedClsPrefix}-input--focus`]: this.mergedFocus,
                    [`${mergedClsPrefix}-input--stateful`]: this.stateful
                }
            ], style: this.cssVars, tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated
                ? 0
                : undefined, onFocus: this.handleWrapperFocus, onBlur: this.handleWrapperBlur, onClick: this.handleClick, onMousedown: this.handleMouseDown, onMouseenter: this.handleMouseEnter, onMouseleave: this.handleMouseLeave, onCompositionstart: this.handleCompositionStart, onCompositionend: this.handleCompositionEnd, onKeyup: this.onKeyup, onKeydown: this.handleWrapperKeyDown },
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input-wrapper` },
                (0,_utils__WEBPACK_IMPORTED_MODULE_17__.resolveWrappedSlot)($slots.prefix, (children) => children && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__prefix` }, children))),
                this.type === 'textarea' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_18__["default"], { ref: "textareaScrollbarInstRef", class: `${mergedClsPrefix}-input__textarea`, container: this.getTextareaScrollContainer, triggerDisplayManually: true, useUnifiedContainer: true }, {
                    default: () => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("textarea", Object.assign({}, this.inputProps, { ref: "textareaElRef", class: `${mergedClsPrefix}-input__textarea-el`, autofocus: this.autofocus, rows: Number(this.rows), placeholder: this.placeholder, value: this.mergedValue, disabled: this.mergedDisabled, maxlength: this.maxlength, minlength: this.minlength, readonly: this.readonly, tabindex: this.passivelyActivated && !this.activated
                                    ? -1
                                    : undefined, style: this.textDecorationStyle[0], onBlur: this.handleInputBlur, onFocus: this.handleInputFocus, onInput: this.handleInput, onChange: this.handleChange, onScroll: this.handleTextAreaScroll })),
                            this.showPlaceholder1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__placeholder`, style: this.placeholderStyle, key: "placeholder" }, this.mergedPlaceholder[0])) : null,
                            this.autosize ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vueuc__WEBPACK_IMPORTED_MODULE_19__["default"], { onResize: this.handleTextAreaMirrorResize }, {
                                default: () => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { ref: "textareaMirrorElRef", class: `${mergedClsPrefix}-input__textarea-mirror`, key: "mirror" }))
                            })) : null));
                    }
                })) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__input` },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("input", Object.assign({ type: this.type === 'password' &&
                            this.mergedShowPasswordOn &&
                            this.passwordVisible
                            ? 'text'
                            : this.type }, this.inputProps, { ref: "inputElRef", class: `${mergedClsPrefix}-input__input-el`, style: this.textDecorationStyle[0], tabindex: this.passivelyActivated && !this.activated ? -1 : undefined, placeholder: this.mergedPlaceholder[0], disabled: this.mergedDisabled, maxlength: this.maxlength, minlength: this.minlength, value: Array.isArray(this.mergedValue)
                            ? this.mergedValue[0]
                            : this.mergedValue, readonly: this.readonly, autofocus: this.autofocus, size: this.attrSize, onBlur: this.handleInputBlur, onFocus: this.handleInputFocus, onInput: (e) => this.handleInput(e, 0), onChange: (e) => this.handleChange(e, 0) })),
                    this.showPlaceholder1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__placeholder` },
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.mergedPlaceholder[0]))) : null,
                    this.autosize ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__input-mirror`, key: "mirror", ref: "inputMirrorElRef" }, "\u00A0")) : null)),
                !this.pair &&
                    (0,_utils__WEBPACK_IMPORTED_MODULE_17__.resolveWrappedSlot)($slots.suffix, (children) => {
                        return children ||
                            this.clearable ||
                            this.showCount ||
                            this.mergedShowPasswordOn ||
                            this.loading !== undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__suffix` }, [
                            (0,_utils__WEBPACK_IMPORTED_MODULE_17__.resolveWrappedSlot)($slots.clear, (children) => {
                                return ((this.clearable || children) && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_20__["default"], { clsPrefix: mergedClsPrefix, show: this.showClearButton, onClear: this.handleClear }, { default: () => children })));
                            }),
                            !this.internalLoadingBeforeSuffix ? children : null,
                            this.loading !== undefined ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_21__["default"], { clsPrefix: mergedClsPrefix, loading: this.loading, showArrow: false, showClear: false, style: this.cssVars })) : null,
                            this.internalLoadingBeforeSuffix ? children : null,
                            this.showCount && this.type !== 'textarea' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_WordCount__WEBPACK_IMPORTED_MODULE_22__["default"], null, {
                                default: (props) => { var _a; return (_a = $slots.count) === null || _a === void 0 ? void 0 : _a.call($slots, props); }
                            })) : null,
                            this.mergedShowPasswordOn && this.type === 'password' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_23__["default"], { clsPrefix: mergedClsPrefix, class: `${mergedClsPrefix}-input__eye`, onMousedown: this.handlePasswordToggleMousedown, onClick: this.handlePasswordToggleClick }, {
                                default: () => this.passwordVisible ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_icons__WEBPACK_IMPORTED_MODULE_24__["default"], null) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal_icons__WEBPACK_IMPORTED_MODULE_25__["default"], null)
                            })) : null
                        ])) : null;
                    })),
            this.pair ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefix}-input__separator` }, (0,_utils__WEBPACK_IMPORTED_MODULE_17__.resolveSlot)($slots.separator, () => [this.separator]))) : null,
            this.pair ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input-wrapper` },
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__input` },
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("input", { ref: "inputEl2Ref", type: this.type, class: `${mergedClsPrefix}-input__input-el`, tabindex: this.passivelyActivated && !this.activated ? -1 : undefined, placeholder: this.mergedPlaceholder[1], disabled: this.mergedDisabled, maxlength: this.maxlength, minlength: this.minlength, value: Array.isArray(this.mergedValue)
                            ? this.mergedValue[1]
                            : undefined, readonly: this.readonly, style: this.textDecorationStyle[1], onBlur: this.handleInputBlur, onFocus: this.handleInputFocus, onInput: (e) => this.handleInput(e, 1), onChange: (e) => this.handleChange(e, 1) }),
                    this.showPlaceholder2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__placeholder` },
                        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, this.mergedPlaceholder[1]))) : null),
                (0,_utils__WEBPACK_IMPORTED_MODULE_17__.resolveWrappedSlot)($slots.suffix, (children) => {
                    return ((this.clearable || children) && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__suffix` }, [
                        this.clearable && ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_internal__WEBPACK_IMPORTED_MODULE_20__["default"], { clsPrefix: mergedClsPrefix, show: this.showClearButton, onClear: this.handleClear }, { default: () => { var _a; return (_a = $slots.clear) === null || _a === void 0 ? void 0 : _a.call($slots); } })),
                        children
                    ])));
                }))) : null,
            this.mergedBordered ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__border` })) : null,
            this.mergedBordered ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: `${mergedClsPrefix}-input__state-border` })) : null,
            this.showCount && this.type === 'textarea' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_WordCount__WEBPACK_IMPORTED_MODULE_22__["default"], null, { default: (props) => { var _a; return (_a = $slots.count) === null || _a === void 0 ? void 0 : _a.call($slots, props); } })) : null));
    }
}));


/***/ }),

/***/ 788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(756);
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(752);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(748);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'InputWordCount',
    setup(_, { slots }) {
        const { mergedValueRef, maxlengthRef, mergedClsPrefixRef } = 
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_interface__WEBPACK_IMPORTED_MODULE_1__.inputInjectionKey);
        const wordCountRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { value: mergedValue } = mergedValueRef;
            if (mergedValue === null || Array.isArray(mergedValue))
                return 0;
            return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.len)(mergedValue);
        });
        return () => {
            const { value: maxlength } = maxlengthRef;
            const { value: mergedValue } = mergedValueRef;
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: `${mergedClsPrefixRef.value}-input-word-count` }, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.resolveSlotWithProps)(slots.default, {
                value: mergedValue === null || Array.isArray(mergedValue)
                    ? ''
                    : mergedValue
            }, () => [
                maxlength === undefined
                    ? wordCountRef.value
                    : `${wordCountRef.value} / ${maxlength}`
            ])));
        };
    }
}));


/***/ }),

/***/ 752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputInjectionKey": () => (/* binding */ inputInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

const inputInjectionKey = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-input');


/***/ }),

/***/ 731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
 // vars:
// --n-bezier
// --n-color
// --n-font-size
// --n-border-radius
// --n-height
// --n-padding-left
// --n-padding-right
// --n-text-color
// --n-text-color-disabled
// --n-caret-color
// --n-text-decoration-color
// --n-border
// --n-border-disabled
// --n-border-hover
// --n-border-focus
// --n-placeholder-color
// --n-placeholder-color-disabled
// --n-line-height-textarea
// --n-color-disabled
// --n-color-focus
// --n-box-shadow-focus
// --n-clear-color
// --n-clear-size
// --n-clear-color-hover
// --n-clear-color-pressed
// --n-suffix-text-color
// --n-icon-color
// --n-icon-color-hover
// --n-icon-color-pressed
// --n-icon-color-disabled
// --n-count-text-color
// --n-loading-color
// ...form item vars

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('input', `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [// common
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input, textarea', `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder', `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input-el, textarea-el', `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb', `
 width: 0;
 height: 0;
 display: none;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&::placeholder', 'color: #0000;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:-webkit-autofill ~', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', 'display: none;')])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('round', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('textarea', 'border-radius: calc(var(--n-height) / 2);')]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('span', `
 width: 100%;
 display: inline-block;
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('textarea', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', 'overflow: visible;')]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('autosize', 'width: 100%;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('autosize', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('textarea-el, input-el', `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]), // input
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('input-wrapper', `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input-mirror', `
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input-el', `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('+', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', `
 display: flex;
 align-items: center; 
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('textarea', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', 'white-space: nowrap;')]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('eye', `
 transition: color .3s var(--n-bezier);
 `), // textarea
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('textarea', 'width: 100%;', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('input-word-count', `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('resizable', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('input-wrapper', `
 resize: vertical;
 min-height: var(--n-height);
 `)]), // override scrollbar relative position
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('textarea', `
 position: static;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('textarea-el, textarea-mirror, placeholder', `
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('textarea-mirror', `
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]), // pair
(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('pair', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input-el, placeholder', 'text-align: center;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('separator', `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', `
 color: var(--n-icon-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-icon', `
 color: var(--n-icon-color);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('disabled', `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border', 'border: var(--n-border-disabled);'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input-el, textarea-el', `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', 'color: var(--n-placeholder-color-disabled);'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('separator', 'color: var(--n-text-color-disabled);', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', `
 color: var(--n-icon-color-disabled);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-icon', `
 color: var(--n-icon-color-disabled);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('suffix, prefix', 'color: var(--n-text-color-disabled);', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', `
 color: var(--n-icon-color-disabled);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('internal-icon', `
 color: var(--n-icon-color-disabled);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('eye', `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', `
 color: var(--n-icon-color-hover);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:active', `
 color: var(--n-icon-color-pressed);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', 'border: var(--n-border-hover);')]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('focus', 'background-color: var(--n-color-focus);', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('border, state-border', `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 border-color: #0000;
 z-index: 1;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('prefix', 'margin-right: 4px;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('suffix', `
 margin-left: 4px;
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('suffix, prefix', `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-loading', `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-clear', `
 font-size: var(--n-icon-size);
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('placeholder', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-icon', `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('icon', `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-icon', `
 font-size: var(--n-icon-size);
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('input-word-count', `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `), ['warning', 'error'].map(status => (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)(`${status}-status`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cNotM)('disabled', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('base-loading', `
 color: var(--n-loading-color-${status})
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('input-el, textarea-el', `
 caret-color: var(--n-caret-color-${status});
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 border: var(--n-border-${status});
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:hover', [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 border: var(--n-border-hover-${status});
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:focus', `
 background-color: var(--n-color-focus-${status});
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)]), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cM)('focus', `
 background-color: var(--n-color-focus-${status});
 `, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cE)('state-border', `
 box-shadow: var(--n-box-shadow-focus-${status});
 border: var(--n-border-focus-${status});
 `)])])]))]));

/***/ }),

/***/ 748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "isEmptyValue": () => (/* binding */ isEmptyValue)
/* harmony export */ });
function len(s) {
    let count = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _ of s) {
        count++;
    }
    return count;
}
function isEmptyValue(value) {
    return ['', undefined, null].includes(value);
}


/***/ }),

/***/ 733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    paddingTiny: '0 8px',
    paddingSmall: '0 10px',
    paddingMedium: '0 12px',
    paddingLarge: '0 14px',
    clearSize: '16px'
});


/***/ }),

/***/ 732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(733);
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(695);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(694);



const self = (vars) => {
    const { textColor2, textColor3, textColorDisabled, primaryColor, primaryColorHover, inputColor, inputColorDisabled, borderColor, warningColor, warningColorHover, errorColor, errorColorHover, borderRadius, lineHeight, fontSizeTiny, fontSizeSmall, fontSizeMedium, fontSizeLarge, heightTiny, heightSmall, heightMedium, heightLarge, actionColor, clearColor, clearColorHover, clearColorPressed, placeholderColor, placeholderColorDisabled, iconColor, iconColorDisabled, iconColorHover, iconColorPressed } = vars;
    return Object.assign(Object.assign({}, _common__WEBPACK_IMPORTED_MODULE_0__["default"]), { countTextColor: textColor3, heightTiny,
        heightSmall,
        heightMedium,
        heightLarge,
        fontSizeTiny,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        lineHeight, lineHeightTextarea: lineHeight, borderRadius, iconSize: '16px', groupLabelColor: actionColor, groupLabelTextColor: textColor2, textColor: textColor2, textColorDisabled, textDecorationColor: textColor2, caretColor: primaryColor, placeholderColor,
        placeholderColorDisabled, color: inputColor, colorDisabled: inputColorDisabled, colorFocus: inputColor, groupLabelBorder: `1px solid ${borderColor}`, border: `1px solid ${borderColor}`, borderHover: `1px solid ${primaryColorHover}`, borderDisabled: `1px solid ${borderColor}`, borderFocus: `1px solid ${primaryColorHover}`, boxShadowFocus: `0 0 0 2px ${(0,seemly__WEBPACK_IMPORTED_MODULE_1__.changeColor)(primaryColor, { alpha: 0.2 })}`, loadingColor: primaryColor, 
        // warning
        loadingColorWarning: warningColor, borderWarning: `1px solid ${warningColor}`, borderHoverWarning: `1px solid ${warningColorHover}`, colorFocusWarning: inputColor, borderFocusWarning: `1px solid ${warningColorHover}`, boxShadowFocusWarning: `0 0 0 2px ${(0,seemly__WEBPACK_IMPORTED_MODULE_1__.changeColor)(warningColor, {
            alpha: 0.2
        })}`, caretColorWarning: warningColor, 
        // error
        loadingColorError: errorColor, borderError: `1px solid ${errorColor}`, borderHoverError: `1px solid ${errorColorHover}`, colorFocusError: inputColor, borderFocusError: `1px solid ${errorColorHover}`, boxShadowFocusError: `0 0 0 2px ${(0,seemly__WEBPACK_IMPORTED_MODULE_1__.changeColor)(errorColor, {
            alpha: 0.2
        })}`, caretColorError: errorColor, clearColor,
        clearColorHover,
        clearColorPressed,
        iconColor,
        iconColorDisabled,
        iconColorHover,
        iconColorPressed, suffixTextColor: textColor2 });
};
const inputLight = {
    name: 'Input',
    common: _styles_common__WEBPACK_IMPORTED_MODULE_2__["default"],
    self
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputLight);


/***/ }),

/***/ 735:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const enUS = {
    name: 'en-US',
    global: {
        undo: 'Undo',
        redo: 'Redo',
        confirm: 'Confirm'
    },
    Popconfirm: {
        positiveText: 'Confirm',
        negativeText: 'Cancel'
    },
    Cascader: {
        placeholder: 'Please Select',
        loading: 'Loading',
        loadingRequiredMessage: (label) => `Please load all ${label}'s descendants before checking it.`
    },
    Time: {
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss'
    },
    DatePicker: {
        yearFormat: 'yyyy',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        yearTypeFormat: 'yyyy',
        monthTypeFormat: 'yyyy-MM',
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
        quarterFormat: 'yyyy-qqq',
        clear: 'Clear',
        now: 'Now',
        confirm: 'Confirm',
        selectTime: 'Select Time',
        selectDate: 'Select Date',
        datePlaceholder: 'Select Date',
        datetimePlaceholder: 'Select Date and Time',
        monthPlaceholder: 'Select Month',
        yearPlaceholder: 'Select Year',
        quarterPlaceholder: 'Select Quarter',
        startDatePlaceholder: 'Start Date',
        endDatePlaceholder: 'End Date',
        startDatetimePlaceholder: 'Start Date and Time',
        endDatetimePlaceholder: 'End Date and Time',
        monthBeforeYear: true,
        firstDayOfWeek: 6,
        today: 'Today'
    },
    DataTable: {
        checkTableAll: 'Select all in the table',
        uncheckTableAll: 'Unselect all in the table',
        confirm: 'Confirm',
        clear: 'Clear'
    },
    Transfer: {
        sourceTitle: 'Source',
        targetTitle: 'Target'
    },
    Empty: {
        description: 'No Data'
    },
    Select: {
        placeholder: 'Please Select'
    },
    TimePicker: {
        placeholder: 'Select Time',
        positiveText: 'OK',
        negativeText: 'Cancel',
        now: 'Now'
    },
    Pagination: {
        goto: 'Goto',
        selectionSuffix: 'page'
    },
    DynamicTags: {
        add: 'Add'
    },
    Log: {
        loading: 'Loading'
    },
    Input: {
        placeholder: 'Please Input'
    },
    InputNumber: {
        placeholder: 'Please Input'
    },
    DynamicInput: {
        create: 'Create'
    },
    ThemeEditor: {
        title: 'Theme Editor',
        clearAllVars: 'Clear All Variables',
        clearSearch: 'Clear Search',
        filterCompName: 'Filter Component Name',
        filterVarName: 'Filter Variable Name',
        import: 'Import',
        export: 'Export',
        restore: 'Reset to Default'
    },
    // TODO: translation
    Image: {
        tipPrevious: 'Previous picture (←)',
        tipNext: 'Next picture (→)',
        tipCounterclockwise: 'Counterclockwise',
        tipClockwise: 'Clockwise',
        tipZoomOut: 'Zoom out',
        tipZoomIn: 'Zoom in',
        tipClose: 'Close (Esc)'
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(737);

const dateEnUs = {
    name: 'en-US',
    locale: date_fns_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateEnUs);


/***/ }),

/***/ 704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalBodyInjectionKey": () => (/* binding */ modalBodyInjectionKey),
/* harmony export */   "modalInjectionKey": () => (/* binding */ modalInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

const modalBodyInjectionKey = (0,_utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-modal-body');
const modalInjectionKey = (0,_utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-modal');


/***/ }),

/***/ 706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popoverBodyInjectionKey": () => (/* binding */ popoverBodyInjectionKey)
/* harmony export */ });
/* harmony import */ var _utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);

const popoverBodyInjectionKey = (0,_utils_vue_create_injection_key__WEBPACK_IMPORTED_MODULE_0__.createInjectionKey)('n-popover-body');


/***/ }),

/***/ 753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "depx": () => (/* binding */ depx),
/* harmony export */   "pxfy": () => (/* binding */ pxfy),
/* harmony export */   "getMargin": () => (/* binding */ getMargin),
/* harmony export */   "getPadding": () => (/* binding */ getMargin),
/* harmony export */   "getGap": () => (/* binding */ getGap),
/* harmony export */   "parseResponsiveProp": () => (/* reexport safe */ _responsive__WEBPACK_IMPORTED_MODULE_0__.parseResponsiveProp),
/* harmony export */   "parseResponsivePropValue": () => (/* reexport safe */ _responsive__WEBPACK_IMPORTED_MODULE_0__.parseResponsivePropValue)
/* harmony export */ });
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
function depx(value) {
    if (typeof value === 'string') {
        if (value.endsWith('px')) {
            return Number(value.slice(0, value.length - 2));
        }
        return Number(value);
    }
    return value;
}
function pxfy(value) {
    if (value === undefined || value === null)
        return undefined;
    if (typeof value === 'number')
        return `${value}px`;
    if (value.endsWith('px'))
        return value;
    return `${value}px`;
}

function getMargin(value, position) {
    const parts = value.trim().split(/\s+/g);
    const margin = {
        top: parts[0]
    };
    switch (parts.length) {
        case 1:
            margin.right = parts[0];
            margin.bottom = parts[0];
            margin.left = parts[0];
            break;
        case 2:
            margin.right = parts[1];
            margin.left = parts[1];
            margin.bottom = parts[0];
            break;
        case 3:
            margin.right = parts[1];
            margin.bottom = parts[2];
            margin.left = parts[1];
            break;
        case 4:
            margin.right = parts[1];
            margin.bottom = parts[2];
            margin.left = parts[3];
            break;
        default:
            throw new Error('[seemly/getMargin]:' + value + ' is not a valid value.');
    }
    if (position === undefined)
        return margin;
    return margin[position];
}
function getGap(value, orient) {
    const [rowGap, colGap] = value.split(' ');
    if (!orient)
        return {
            row: rowGap,
            col: colGap || rowGap
        };
    return orient === 'row' ? rowGap : colGap;
}




/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseResponsiveProp": () => (/* binding */ parseResponsiveProp),
/* harmony export */   "parseResponsivePropValue": () => (/* binding */ parseResponsivePropValue)
/* harmony export */ });
function parseResponsiveProp(reponsiveProp) {
    if (typeof reponsiveProp === "number") {
        return {
            '': reponsiveProp.toString()
        };
    }
    const params = {};
    reponsiveProp.split(/ +/).forEach((pairLiteral) => {
        if (pairLiteral === '')
            return;
        const [prefix, value] = pairLiteral.split(':');
        if (value === undefined) {
            params[''] = prefix;
        }
        else {
            params[prefix] = value;
        }
    });
    return params;
}
function parseResponsivePropValue(reponsiveProp, activeKeyOrSize) {
    var _a;
    if (reponsiveProp === undefined || reponsiveProp === null)
        return undefined;
    const classObj = parseResponsiveProp(reponsiveProp);
    if (activeKeyOrSize === undefined)
        return classObj[''];
    if (typeof activeKeyOrSize === 'string') {
        return (_a = classObj[activeKeyOrSize]) !== null && _a !== void 0 ? _a : classObj[''];
    }
    else if (Array.isArray(activeKeyOrSize)) {
        for (let i = activeKeyOrSize.length - 1; i >= 0; --i) {
            const key = activeKeyOrSize[i];
            if (key in classObj)
                return classObj[key];
        }
        return classObj[''];
    }
    else {
        // Here we suppose all the keys are number formatted
        let activeValue = undefined;
        let activeKey = -1;
        Object.keys(classObj).forEach((key) => {
            const keyAsNum = Number(key);
            if (!Number.isNaN(keyAsNum) &&
                activeKeyOrSize >= keyAsNum &&
                keyAsNum >= activeKey) {
                activeKey = keyAsNum;
                activeValue = classObj[key];
            }
        });
        return activeValue;
    }
}



/***/ }),

/***/ 724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createId": () => (/* binding */ createId),
/* harmony export */   "repeat": () => (/* binding */ repeat),
/* harmony export */   "indexMap": () => (/* binding */ indexMap),
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function createId(length = 8) {
    return Math.random()
        .toString(16)
        .slice(2, 2 + length);
}
function repeat(count, v) {
    const ret = [];
    for (let i = 0; i < count; ++i) {
        ret.push(v);
    }
    return ret;
}
function indexMap(count, createValue) {
    const ret = [];
    if (!createValue) {
        for (let i = 0; i < count; ++i) {
            ret.push(i);
        }
        return ret;
    }
    for (let i = 0; i < count; ++i) {
        ret.push(createValue(i));
    }
    return ret;
}

function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    });
}


/***/ }),

/***/ 771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isMounted)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function isMounted() {
    const isMounted = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => { isMounted.value = true; });
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.readonly)(isMounted);
}


/***/ }),

/***/ 758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIos": () => (/* binding */ isIos),
/* harmony export */   "default": () => (/* binding */ useIsIos)
/* harmony export */ });
const isIos = (typeof window === 'undefined'
    ? false
    : /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    !window.MSStream;
function useIsIos() {
    return isIos;
}


/***/ }),

/***/ 708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function useMemo(getterOrOptions) {
    const computedValueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(getterOrOptions);
    // Maybe it's not possible to lazy evaluate the value, since we can't make
    // render phase capture the deps behind useMemo
    const valueRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(computedValueRef.value);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(computedValueRef, (value) => {
        valueRef.value = value;
    });
    if (typeof getterOrOptions === 'function') {
        return valueRef;
    }
    else {
        return {
            __v_isRef: true,
            get value() {
                return valueRef.value;
            },
            set value(v) {
                getterOrOptions.set(v);
            }
        };
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useMemo);


/***/ })

}]);