"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[20],{

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useHoudini": () => (/* binding */ useHoudini)
/* harmony export */ });
let houdiniRegistered = false;
function useHoudini() {
    if (typeof window === 'undefined')
        return;
    if (!window.CSS)
        return;
    if (!houdiniRegistered) {
        houdiniRegistered = true;
        if ('registerProperty' in (window === null || window === void 0 ? void 0 : window.CSS)) {
            try {
                ;
                CSS.registerProperty({
                    name: '--n-color-start',
                    syntax: '<color>',
                    inherits: false,
                    initialValue: '#0000'
                });
                CSS.registerProperty({
                    name: '--n-color-end',
                    syntax: '<color>',
                    inherits: false,
                    initialValue: '#0000'
                });
            }
            catch (e) { }
        }
    }
}


/***/ }),

/***/ 877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var seemly__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(753);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(690);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(591);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(879);
/* harmony import */ var _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(878);






const skeletonProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { text: Boolean, round: Boolean, circle: Boolean, height: [String, Number], width: [String, Number], size: String, repeat: {
        type: Number,
        default: 1
    }, animated: {
        type: Boolean,
        default: true
    }, sharp: {
        type: Boolean,
        default: true
    } });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'Skeleton',
    inheritAttrs: false,
    props: skeletonProps,
    setup(props) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_2__.useHoudini)();
        const { mergedClsPrefixRef } = (0,_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Skeleton', '-skeleton', _styles_index_cssr__WEBPACK_IMPORTED_MODULE_4__["default"], _styles__WEBPACK_IMPORTED_MODULE_5__.skeletonLight, props, mergedClsPrefixRef);
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
                var _a, _b;
                const theme = themeRef.value;
                const { common: { cubicBezierEaseInOut } } = theme;
                const selfThemeVars = theme.self;
                const { color, colorEnd, borderRadius } = selfThemeVars;
                let sizeHeight;
                const { circle, sharp, round, width, height, size, text, animated } = props;
                if (size !== undefined) {
                    sizeHeight = selfThemeVars[(0,_utils__WEBPACK_IMPORTED_MODULE_6__.createKey)('height', size)];
                }
                const mergedWidth = circle ? (_a = width !== null && width !== void 0 ? width : height) !== null && _a !== void 0 ? _a : sizeHeight : width;
                const mergedHeight = (_b = (circle ? width !== null && width !== void 0 ? width : height : height)) !== null && _b !== void 0 ? _b : sizeHeight;
                return {
                    display: text ? 'inline-block' : '',
                    verticalAlign: text ? '-0.125em' : '',
                    borderRadius: circle
                        ? '50%'
                        : round
                            ? '4096px'
                            : sharp
                                ? ''
                                : borderRadius,
                    width: typeof mergedWidth === 'number' ? (0,seemly__WEBPACK_IMPORTED_MODULE_7__.pxfy)(mergedWidth) : mergedWidth,
                    height: typeof mergedHeight === 'number'
                        ? (0,seemly__WEBPACK_IMPORTED_MODULE_7__.pxfy)(mergedHeight)
                        : mergedHeight,
                    animation: !animated ? 'none' : '',
                    '--n-bezier': cubicBezierEaseInOut,
                    '--n-color-start': color,
                    '--n-color-end': colorEnd
                };
            })
        };
    },
    render() {
        const { repeat, style, mergedClsPrefix, $attrs } = this;
        // BUG:
        // Chrome devtools can't read the element
        // Maybe it's a bug of chrome
        const child = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('div', (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
            class: `${mergedClsPrefix}-skeleton`,
            style: style
        }, $attrs));
        if (repeat > 1) {
            return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.apply(null, { length: repeat }).map((_) => [
                child,
                '\n'
            ])));
        }
        return child;
    }
}));


/***/ }),

/***/ 878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
 // vars:
// --n-color-start
// --n-color-end
// --n-bezier

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)([(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('skeleton', `
 height: 1em;
 width: 100%;
 transition: background-color .3s var(--n-bezier);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('@keyframes skeleton-loading', `
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]));

/***/ }),

/***/ 879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skeletonLight": () => (/* binding */ skeletonLight)
/* harmony export */ });
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(694);

const self = (vars) => {
    const { heightSmall, heightMedium, heightLarge, borderRadius } = vars;
    return {
        color: '#eee',
        colorEnd: '#ddd',
        borderRadius,
        heightSmall,
        heightMedium,
        heightLarge
    };
};
const skeletonLight = {
    name: 'Skeleton',
    common: _styles_common__WEBPACK_IMPORTED_MODULE_0__["default"],
    self
};


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

/***/ 872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _articleLoading_vue_vue_type_template_id_68140b14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(873);
/* harmony import */ var _articleLoading_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(875);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_articleLoading_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_articleLoading_vue_vue_type_template_id_68140b14__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/articleLoading.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(877);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();


const __returned__ = { NSkeleton: naive_ui__WEBPACK_IMPORTED_MODULE_0__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_articleLoading_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_articleLoading_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(876);
 

/***/ }),

/***/ 873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_articleLoading_vue_vue_type_template_id_68140b14__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_articleLoading_vue_vue_type_template_id_68140b14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(874);


/***/ }),

/***/ 874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["NSkeleton"], { row: 15 }))
}

/***/ })

}]);