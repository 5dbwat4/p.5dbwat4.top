"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_main_vue"],{

/***/ "../../node_modules/vue-loader/dist/exportHelper.js":
/*!**********************************************************!*\
  !*** ../../node_modules/vue-loader/dist/exportHelper.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// runtime helper for setting properties on components\n// in a tree-shakable way\nexports[\"default\"] = (sfc, props) => {\n    const target = sfc.__vccOpts || sfc;\n    for (const [key, val] of props) {\n        target[key] = val;\n    }\n    return target;\n};\n\n\n//# sourceURL=webpack:///../../node_modules/vue-loader/dist/exportHelper.js?");

/***/ }),

/***/ "./src/main.vue":
/*!**********************!*\
  !*** ./src/main.vue ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main_vue_vue_type_template_id_3c208292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=3c208292 */ \"./src/main.vue?vue&type=template&id=3c208292\");\n/* harmony import */ var _main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&setup=true&lang=js */ \"./src/main.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"../../node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_main_vue_vue_type_template_id_3c208292__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/main.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/main.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/main.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/main.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/runtime-core */ \"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js\");\n/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/runtime-core */ \"../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\");\n/* harmony import */ var _views_index_APIReminder_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/index/APIReminder.vue */ \"./src/views/index/APIReminder.vue\");\n/* harmony import */ var _shared_globalEventMessageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/globalEventMessageHelper */ \"./src/shared/globalEventMessageHelper.js\");\n/* harmony import */ var _shared_APIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/APIHelper */ \"./src/shared/APIHelper.js\");\n\r\n\r\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setup(__props, { expose }) {\n  expose();\n\r\n\r\nwindow.AllowedEntry=(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.ref)(false)\r\n\r\n;(0,_shared_globalEventMessageHelper__WEBPACK_IMPORTED_MODULE_1__.createEvent)(\"entryAllowStateUpdate\",(params)=>{\r\n    AllowedEntry.value=params.value\r\n    ;(0,_shared_globalEventMessageHelper__WEBPACK_IMPORTED_MODULE_1__.emitEvent)(\"apiStatusUpdateNote\",params.message)\r\n})\r\n;(0,_shared_APIHelper__WEBPACK_IMPORTED_MODULE_2__.CheckAPIStatus)()\r\n\r\n\nconst __returned__ = { defineAsyncComponent: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__.defineAsyncComponent, onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_4__.onMounted, ref: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_3__.ref, ApiReminder: _views_index_APIReminder_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"], emitEvent: _shared_globalEventMessageHelper__WEBPACK_IMPORTED_MODULE_1__.emitEvent, createEvent: _shared_globalEventMessageHelper__WEBPACK_IMPORTED_MODULE_1__.createEvent, CheckAPIStatus: _shared_APIHelper__WEBPACK_IMPORTED_MODULE_2__.CheckAPIStatus }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack:///./src/main.vue?../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/index/APIReminder.vue":
/*!*****************************************!*\
  !*** ./src/views/index/APIReminder.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _APIReminder_vue_vue_type_template_id_038b5ca5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIReminder.vue?vue&type=template&id=038b5ca5 */ \"./src/views/index/APIReminder.vue?vue&type=template&id=038b5ca5\");\n/* harmony import */ var _APIReminder_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./APIReminder.vue?vue&type=script&setup=true&lang=js */ \"./src/views/index/APIReminder.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"../../node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_APIReminder_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_APIReminder_vue_vue_type_template_id_038b5ca5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/index/APIReminder.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/views/index/APIReminder.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/index/APIReminder.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/index/APIReminder.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setup(__props, { expose }) {\n  expose();\n\r\nif(!localStorage.getItem(\"__5dbwat_proj__thost\")){\r\n\r\n}\r\n\nconst __returned__ = {  }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack:///./src/views/index/APIReminder.vue?../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/main.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************!*\
  !*** ./src/main.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_main_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./main.vue?vue&type=script&setup=true&lang=js */ \"../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/main.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack:///./src/main.vue?");

/***/ }),

/***/ "./src/views/index/APIReminder.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************!*\
  !*** ./src/views/index/APIReminder.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_APIReminder_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_APIReminder_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./APIReminder.vue?vue&type=script&setup=true&lang=js */ \"../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/index/APIReminder.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack:///./src/views/index/APIReminder.vue?");

/***/ }),

/***/ "./src/main.vue?vue&type=template&id=3c208292":
/*!****************************************************!*\
  !*** ./src/main.vue?vue&type=template&id=3c208292 ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_main_vue_vue_type_template_id_3c208292__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_main_vue_vue_type_template_id_3c208292__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./main.vue?vue&type=template&id=3c208292 */ \"../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/main.vue?vue&type=template&id=3c208292\");\n\n\n//# sourceURL=webpack:///./src/main.vue?");

/***/ }),

/***/ "./src/views/index/APIReminder.vue?vue&type=template&id=038b5ca5":
/*!***********************************************************************!*\
  !*** ./src/views/index/APIReminder.vue?vue&type=template&id=038b5ca5 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_APIReminder_vue_vue_type_template_id_038b5ca5__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_APIReminder_vue_vue_type_template_id_038b5ca5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./APIReminder.vue?vue&type=template&id=038b5ca5 */ \"../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/index/APIReminder.vue?vue&type=template&id=038b5ca5\");\n\n\n//# sourceURL=webpack:///./src/views/index/APIReminder.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/main.vue?vue&type=template&id=3c208292":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/main.vue?vue&type=template&id=3c208292 ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = { key: 0 }\nconst _hoisted_2 = { key: 1 }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\")\n\n  return (_ctx.AllowedE)\n    ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)\n      ]))\n    : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_2, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"ApiReminder\"])\n      ]))\n}\n\n//# sourceURL=webpack:///./src/main.vue?../../node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/index/APIReminder.vue?vue&type=template&id=038b5ca5":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/index/APIReminder.vue?vue&type=template&id=038b5ca5 ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" 噢！ \")\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" 内容 \")\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" 尾部 \")\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_n_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"n-card\")\n  const _component_n_modal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"n-modal\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_n_modal, {\n    show: _ctx.showModal,\n    \"onUpdate:show\": _cache[0] || (_cache[0] = $event => ((_ctx.showModal) = $event))\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_n_card, {\n        style: {\"width\":\"600px\"},\n        title: \"You may specify an API address\",\n        bordered: false,\n        size: \"huge\",\n        role: \"dialog\",\n        \"aria-modal\": \"true\"\n      }, {\n        \"header-extra\": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          _hoisted_1\n        ]),\n        footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          _hoisted_3\n        ]),\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n          _hoisted_2\n        ]),\n        _: 1 /* STABLE */\n      })\n    ]),\n    _: 1 /* STABLE */\n  }, 8 /* PROPS */, [\"show\"]))\n}\n\n//# sourceURL=webpack:///./src/views/index/APIReminder.vue?../../node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/shared/APIHelper.js":
/*!*********************************!*\
  !*** ./src/shared/APIHelper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CheckAPIStatus\": () => (/* binding */ CheckAPIStatus)\n/* harmony export */ });\nconst CheckAPIStatus=()=>{\r\n\r\n    if(!localStorage.getItem(\"__5dbwat4_proj__thost__APIhost\")){\r\n        return false\r\n    }\r\n    fetch()\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/shared/APIHelper.js?");

/***/ }),

/***/ "./src/shared/globalEventMessageHelper.js":
/*!************************************************!*\
  !*** ./src/shared/globalEventMessageHelper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"emitEvent\": () => (/* binding */ emitEvent),\n/* harmony export */   \"createEvent\": () => (/* binding */ createEvent)\n/* harmony export */ });\n// ???5dbwat4\r\n\r\n/**\r\n * \r\n * @param {String} ename Event name\r\n * @param {Function} callback Callback Function\r\n */\r\n var createEvent=(ename,callback)=>{\r\n    window.EventList=window.EventList||{}\r\n    window.EventList[ename]=callback\r\n}\r\n\r\n/**\r\n * \r\n * @param {String} ename Event Name\r\n * @param {Array} params Params for the function\r\n */\r\nvar emitEvent=(ename,params=[])=>{\r\n    window.EventList=window.EventList||{}\r\n    return window.EventList[ename](...params)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/shared/globalEventMessageHelper.js?");

/***/ })

}]);