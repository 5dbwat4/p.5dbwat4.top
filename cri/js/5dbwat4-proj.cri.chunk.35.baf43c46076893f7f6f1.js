"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[35],{

/***/ 1065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(575);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(690);
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(755);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1067);
/* harmony import */ var _styles_p_cssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1066);




const pProps = Object.assign(Object.assign({}, _mixins__WEBPACK_IMPORTED_MODULE_1__["default"].props), { depth: [String, Number] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'P',
    props: pProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = (0,_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(props);
        const themeRef = (0,_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])('Typography', '-p', _styles_p_cssr__WEBPACK_IMPORTED_MODULE_3__["default"], _styles__WEBPACK_IMPORTED_MODULE_4__["default"], props, mergedClsPrefixRef);
        const cssVarsRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            const { depth } = props;
            const typeSafeDepth = depth || '1';
            const { common: { cubicBezierEaseInOut }, self: { pFontSize, pLineHeight, pMargin, pTextColor, [`pTextColor${typeSafeDepth}Depth`]: depthTextColor } } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-font-size': pFontSize,
                '--n-line-height': pLineHeight,
                '--n-margin': pMargin,
                '--n-text-color': depth === undefined ? pTextColor : depthTextColor
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0,_mixins__WEBPACK_IMPORTED_MODULE_5__.useThemeClass)('p', (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => `${props.depth || ''}`), cssVarsRef, props)
            : undefined;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        var _a;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("p", { class: [`${this.mergedClsPrefix}-p`, this.themeClass], style: this.cssVars }, this.$slots));
    }
}));


/***/ }),

/***/ 1066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_cssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
 // vars:
// --n-bezier
// --n-font-size
// --n-line-height
// --n-margin
// --n-text-color

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.cB)('p', `
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`, [(0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:first-child', 'margin-top: 0;'), (0,_utils_cssr__WEBPACK_IMPORTED_MODULE_0__.c)('&:last-child', 'margin-bottom: 0;')]));

/***/ }),

/***/ 1068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    headerFontSize1: '30px',
    headerFontSize2: '22px',
    headerFontSize3: '18px',
    headerFontSize4: '16px',
    headerFontSize5: '16px',
    headerFontSize6: '16px',
    headerMargin1: '28px 0 20px 0',
    headerMargin2: '28px 0 20px 0',
    headerMargin3: '28px 0 20px 0',
    headerMargin4: '28px 0 18px 0',
    headerMargin5: '28px 0 18px 0',
    headerMargin6: '28px 0 18px 0',
    headerPrefixWidth1: '16px',
    headerPrefixWidth2: '16px',
    headerPrefixWidth3: '12px',
    headerPrefixWidth4: '12px',
    headerPrefixWidth5: '12px',
    headerPrefixWidth6: '12px',
    headerBarWidth1: '4px',
    headerBarWidth2: '4px',
    headerBarWidth3: '3px',
    headerBarWidth4: '3px',
    headerBarWidth5: '3px',
    headerBarWidth6: '3px',
    pMargin: '16px 0 16px 0',
    liMargin: '.25em 0 0 0',
    olPadding: '0 0 0 2em',
    ulPadding: '0 0 0 2em'
});


/***/ }),

/***/ 1067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "self": () => (/* binding */ self),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1068);
/* harmony import */ var _styles_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(694);


const self = (vars) => {
    const { primaryColor, textColor2, borderColor, lineHeight, fontSize, borderRadiusSmall, dividerColor, fontWeightStrong, textColor1, textColor3, infoColor, warningColor, errorColor, successColor, codeColor } = vars;
    return Object.assign(Object.assign({}, _common__WEBPACK_IMPORTED_MODULE_0__["default"]), { aTextColor: primaryColor, blockquoteTextColor: textColor2, blockquotePrefixColor: borderColor, blockquoteLineHeight: lineHeight, blockquoteFontSize: fontSize, codeBorderRadius: borderRadiusSmall, liTextColor: textColor2, liLineHeight: lineHeight, liFontSize: fontSize, hrColor: dividerColor, headerFontWeight: fontWeightStrong, headerTextColor: textColor1, pTextColor: textColor2, pTextColor1Depth: textColor1, pTextColor2Depth: textColor2, pTextColor3Depth: textColor3, pLineHeight: lineHeight, pFontSize: fontSize, headerBarColor: primaryColor, headerBarColorPrimary: primaryColor, headerBarColorInfo: infoColor, headerBarColorError: errorColor, headerBarColorWarning: warningColor, headerBarColorSuccess: successColor, textColor: textColor2, textColor1Depth: textColor1, textColor2Depth: textColor2, textColor3Depth: textColor3, textColorPrimary: primaryColor, textColorInfo: infoColor, textColorSuccess: successColor, textColorWarning: warningColor, textColorError: errorColor, codeTextColor: textColor2, codeColor: codeColor, codeBorder: '1px solid #0000' });
};
const typographyLight = {
    name: 'Typography',
    common: _styles_common__WEBPACK_IMPORTED_MODULE_1__["default"],
    self
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyLight);


/***/ }),

/***/ 1060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _author_tooltip_vue_vue_type_template_id_4d57a38e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1061);
/* harmony import */ var _author_tooltip_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1063);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_author_tooltip_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_author_tooltip_vue_vue_type_template_id_4d57a38e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/archPage/author_tooltip.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 1064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(976);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1065);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();


const __returned__ = { NTooltip: naive_ui__WEBPACK_IMPORTED_MODULE_0__["default"], NP: naive_ui__WEBPACK_IMPORTED_MODULE_1__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 1063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_author_tooltip_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_author_tooltip_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1064);
 

/***/ }),

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_author_tooltip_vue_vue_type_template_id_4d57a38e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_author_tooltip_vue_vue_type_template_id_4d57a38e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1062);


/***/ }),

/***/ 1062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["NTooltip"], { trigger: "hover" }, {
    trigger: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NP"], null, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$attrs.content), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      })
    ]),
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.$attrs.tip), 1 /* TEXT */)
    ]),
    _: 1 /* STABLE */
  }))
}

/***/ })

}]);