"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_settings_vue"],{

/***/ "./src/settings.vue":
/*!**************************!*\
  !*** ./src/settings.vue ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.vue?vue&type=template&id=0943ab7c */ \"./src/settings.vue?vue&type=template&id=0943ab7c\");\n/* harmony import */ var _settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.vue?vue&type=script&setup=true&lang=js */ \"./src/settings.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"../../node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/settings.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/settings.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/settings.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/settings.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/reactivity */ \"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js\");\n/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ \"../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"../../node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/form/src/Form.js\");\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/form/src/FormItem.js\");\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/input/src/Input.js\");\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/button/src/Button.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setup(__props, { expose }) {\n  expose();\n\r\nconst settings=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(JSON.parse(localStorage.getItem(\"__cri_s__Settings\")||\"{}\"))\r\n\r\n\r\n\r\nconst Save=(v)=>{\r\n    localStorage.setItem(\"__cri_s__Settings\",JSON.stringify(settings.value))\r\n}\r\n\nconst __returned__ = { settings, Save, ref: _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref, defineAsyncComponent: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent, h: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.h, onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted, useRoute: vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute, useRouter: vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, NForm: naive_ui__WEBPACK_IMPORTED_MODULE_3__[\"default\"], NFormItem: naive_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"], NInput: naive_ui__WEBPACK_IMPORTED_MODULE_5__[\"default\"], NButton: naive_ui__WEBPACK_IMPORTED_MODULE_6__[\"default\"] }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack:///./src/settings.vue?../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/settings.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************!*\
  !*** ./src/settings.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./settings.vue?vue&type=script&setup=true&lang=js */ \"../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/settings.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack:///./src/settings.vue?");

/***/ }),

/***/ "./src/settings.vue?vue&type=template&id=0943ab7c":
/*!********************************************************!*\
  !*** ./src/settings.vue?vue&type=template&id=0943ab7c ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./settings.vue?vue&type=template&id=0943ab7c */ \"../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/settings.vue?vue&type=template&id=0943ab7c\");\n\n\n//# sourceURL=webpack:///./src/settings.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/settings.vue?vue&type=template&id=0943ab7c":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/settings.vue?vue&type=template&id=0943ab7c ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Check\")\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Save\")\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup[\"NForm\"], null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NFormItem\"], { label: \"API Host\" }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NInput\"], {\n            value: $setup.settings.apihost,\n            \"onUpdate:value\": [\n              _cache[0] || (_cache[0] = $event => (($setup.settings.apihost) = $event)),\n              $setup.Save\n            ]\n          }, null, 8 /* PROPS */, [\"value\"]),\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NButton\"], null, {\n            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n              _hoisted_1\n            ]),\n            _: 1 /* STABLE */\n          })\n        ]),\n        _: 1 /* STABLE */\n      }),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NButton\"], {\n        block: \"\",\n        onClick: $setup.Save,\n        type: \"primary\"\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          _hoisted_2\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _: 1 /* STABLE */\n  }))\n}\n\n//# sourceURL=webpack:///./src/settings.vue?../../node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ })

}]);