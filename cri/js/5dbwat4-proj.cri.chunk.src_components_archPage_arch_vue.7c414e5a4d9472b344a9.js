"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_archPage_arch_vue"],{

/***/ "./src/components/archPage/arch.vue":
/*!******************************************!*\
  !*** ./src/components/archPage/arch.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arch.vue?vue&type=template&id=6d75f780 */ \"./src/components/archPage/arch.vue?vue&type=template&id=6d75f780\");\n/* harmony import */ var _arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arch.vue?vue&type=script&setup=true&lang=js */ \"./src/components/archPage/arch.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"../../node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/components/archPage/arch.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/components/archPage/arch.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/archPage/arch.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/archPage/arch.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/reactivity */ \"../../node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js\");\n/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/runtime-core */ \"../../node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"../../node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/button/src/Button.js\");\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/data-table/src/DataTable.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setup(__props, { expose }) {\n  expose();\n\r\nconst router=(0,vue_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)()\r\n\r\n\r\nconst columns =  [\r\n    {\r\n      title: \"Title\",\r\n      key: \"title\",\r\n    }\r\n    ,\r\n    {\r\n      title: \"View\",\r\n      render(row) {\r\n        return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.h)(naive_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\r\n          strong: true,\r\n          tertiary: true,\r\n          size: \"small\",\r\n          onClick: () => {\r\n            router.push(\"/view/\"+row.id)\r\n          }\r\n        }, { default: () => \"View\" });\r\n      }\r\n    }\r\n  ],pagination={\r\n          pageSize: 15,\r\n      showSizePicker: true,\r\n  };\r\n\r\n  const dataRef=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref)([])\r\n  const windowHeight=window.innerHeight*70%+\"px\"\r\n\r\n  ;(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted)(async()=>{\r\n      (await __webpack_require__.e(/*! import() */ \"src_components_API_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../API */ \"./src/components/API.js\"))).API(\"list\").then(v=>{\r\n        dataRef.value=Object.entries(v).map(v=>{return {\r\n            title:v[1].title,\r\n            id:v[0]\r\n        }})\r\n      })\r\n  })\r\n\nconst __returned__ = { router, columns, pagination, dataRef, windowHeight, ref: _vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref, h: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.h, onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted, useRouter: vue_router__WEBPACK_IMPORTED_MODULE_0__.useRouter, NDataTable: naive_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"], NButton: naive_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"] }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack:///./src/components/archPage/arch.vue?../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/components/archPage/arch.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************!*\
  !*** ./src/components/archPage/arch.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./arch.vue?vue&type=script&setup=true&lang=js */ \"../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/archPage/arch.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack:///./src/components/archPage/arch.vue?");

/***/ }),

/***/ "./src/components/archPage/arch.vue?vue&type=template&id=6d75f780":
/*!************************************************************************!*\
  !*** ./src/components/archPage/arch.vue?vue&type=template&id=6d75f780 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./arch.vue?vue&type=template&id=6d75f780 */ \"../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/archPage/arch.vue?vue&type=template&id=6d75f780\");\n\n\n//# sourceURL=webpack:///./src/components/archPage/arch.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/archPage/arch.vue?vue&type=template&id=6d75f780":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/components/archPage/arch.vue?vue&type=template&id=6d75f780 ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup[\"NDataTable\"], {\n    remote: \"\",\n    ref: \"table\",\n    columns: $setup.columns,\n    data: $setup.dataRef,\n    pagination: $setup.pagination,\n    bordered: false,\n    loading: _ctx.loading,\n    \"onUpdate:page\": _ctx.handlePageChange,\n    \"max-height\": $setup.windowHeight,\n    \"scroll-x\": 900,\n    \"virtual-scroll\": \"\",\n    \"onUpdate:sorter\": _ctx.handleSorterChange\n  }, null, 8 /* PROPS */, [\"data\", \"loading\", \"onUpdate:page\", \"onUpdate:sorter\"]))\n}\n\n//# sourceURL=webpack:///./src/components/archPage/arch.vue?../../node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ })

}]);