"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_views_list_index_vue"],{

/***/ "./src/views/list/extention-preview.vue":
/*!**********************************************!*\
  !*** ./src/views/list/extention-preview.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _extention_preview_vue_vue_type_template_id_a1783dfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extention-preview.vue?vue&type=template&id=a1783dfc */ \"./src/views/list/extention-preview.vue?vue&type=template&id=a1783dfc\");\n/* harmony import */ var _extention_preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extention-preview.vue?vue&type=script&setup=true&lang=js */ \"./src/views/list/extention-preview.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"../../node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_extention_preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_extention_preview_vue_vue_type_template_id_a1783dfc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/list/extention-preview.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/views/list/extention-preview.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/extention-preview.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/extention-preview.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _shared_APIHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/APIHelper */ \"./src/shared/APIHelper.js\");\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setup(__props, { expose }) {\n  expose();\n\r\nconst attrs=(0,vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs)()\r\nconst content=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(\"\")\r\n\r\n_shared_APIHelper__WEBPACK_IMPORTED_MODULE_1__.API.get(\"/api/qapi/get/\"+attrs.id).then(o=>{\r\ncontent.value=o.q\r\n})\r\n\nconst __returned__ = { attrs, content, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, useAttrs: vue__WEBPACK_IMPORTED_MODULE_0__.useAttrs, API: _shared_APIHelper__WEBPACK_IMPORTED_MODULE_1__.API }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack:///./src/views/list/extention-preview.vue?../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/list/index.vue":
/*!**********************************!*\
  !*** ./src/views/list/index.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_vue_vue_type_template_id_31499d3b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=31499d3b */ \"./src/views/list/index.vue?vue&type=template&id=31499d3b\");\n/* harmony import */ var _index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&setup=true&lang=js */ \"./src/views/list/index.vue?vue&type=script&setup=true&lang=js\");\n/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/dist/exportHelper.js */ \"../../node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_index_vue_vue_type_template_id_31499d3b__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"src/views/list/index.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack:///./src/views/list/index.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/index.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/index.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/button/src/Button.js\");\n/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! naive-ui */ \"../../node_modules/naive-ui/es/data-table/src/DataTable.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"../../node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _extention_preview_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extention-preview.vue */ \"./src/views/list/extention-preview.vue\");\n\r\n\r\n\r\n\r\n\r\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  setup(__props, { expose }) {\n  expose();\n\r\nconst route=(0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute)(),router=(0,vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)()\r\n\r\n\r\n\r\nconst data=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([])\r\n\r\nconst columns=[{\r\n    type:\"selection\"\r\n},{\r\n    type:\"expand\",\r\n    renderExpand(row){\r\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(_extention_preview_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{\r\n            id:row.id\r\n        })\r\n    }\r\n},{\r\n    title:\"uuid\",\r\n    key:\"id\"\r\n},{\r\n    title:\"submit time\",\r\n    render(row){\r\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(\"p\",{},(new Date(row.timestamp)).toISOString())\r\n    }\r\n},{\r\n    title:\"extra\",\r\n    key:\"extra\"\r\n},{\r\n    title:\"view\",\r\n    render(row){\r\n        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(naive_ui__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{\r\n            text:true,\r\n            onClick:()=>{\r\n                router.push(\"/view/\"+row.id)\r\n            }\r\n        },{default:()=>\"View\"})\r\n    }\r\n}]\r\n\r\nconst checkedRowKeysRef=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([])\r\nconst handleCheck=(rowKeys) =>{\r\n        checkedRowKeysRef.value = rowKeys;\r\n        console.log(rowKeys);\r\n      }\r\n\r\n      ,gotobatch=()=>{\r\n        router.push(\"/batch/\"+checkedRowKeysRef.value.join(\",\"))\r\n      }\r\n\r\n\r\n\r\n// if(route.query.subject){\r\n\r\n// }\r\n// fetch(\"/api/list/v2\",{method:\"POST\",\"headers\":{\"Content-Type\":\"application/json\"},body:\r\n// JSON.stringify(route.query||{})}).then(v=>v.json()).then(v=>{data.value=v})\r\n\r\n// switch(route.props.type){\r\n//     case \"pure\":{\r\n//         fetch(\"/api/list/v2\",{method:\"POST\"}).then(v=>v.json()).then(v=>{data.value=v})\r\n//     }\r\n// }\r\n// fetch(\"/api/list/v1\",{method:\"POST\"}).then(v=>v.json()).then(v=>{data.value=v})\r\nconsole.log(route.query);\r\nif(!route.query.filter){\r\n    fetch(\"/api/list/v2/directget/\"+\r\n    route.query.offset||0||0).then(v=>v.json()).then(v=>{data.value=v})\r\n}\r\nif(route.query.filter==\"subject\"){\r\n    // console.log(\"djtfuf\");\r\n    \r\n    fetch(\"/api/list/v2/filter/subject/\"+route.query.subject+\"/\"+\r\n    route.query.offset||0||0).then(v=>v.json()).then(v=>{data.value=v})\r\n}\r\n\r\n\nconst __returned__ = { route, router, data, columns, checkedRowKeysRef, handleCheck, gotobatch, NButton: naive_ui__WEBPACK_IMPORTED_MODULE_3__[\"default\"], NDataTable: naive_ui__WEBPACK_IMPORTED_MODULE_4__[\"default\"], h: vue__WEBPACK_IMPORTED_MODULE_0__.h, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, useRoute: vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute, useRouter: vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, ExtrntionPreview: _extention_preview_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"] }\nObject.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })\nreturn __returned__\n}\n\n});\n\n//# sourceURL=webpack:///./src/views/list/index.vue?../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/views/list/extention-preview.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./src/views/list/extention-preview.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_extention_preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_extention_preview_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./extention-preview.vue?vue&type=script&setup=true&lang=js */ \"../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/extention-preview.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack:///./src/views/list/extention-preview.vue?");

/***/ }),

/***/ "./src/views/list/index.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************!*\
  !*** ./src/views/list/index.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./index.vue?vue&type=script&setup=true&lang=js */ \"../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/index.vue?vue&type=script&setup=true&lang=js\");\n \n\n//# sourceURL=webpack:///./src/views/list/index.vue?");

/***/ }),

/***/ "./src/views/list/extention-preview.vue?vue&type=template&id=a1783dfc":
/*!****************************************************************************!*\
  !*** ./src/views/list/extention-preview.vue?vue&type=template&id=a1783dfc ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_extention_preview_vue_vue_type_template_id_a1783dfc__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_extention_preview_vue_vue_type_template_id_a1783dfc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./extention-preview.vue?vue&type=template&id=a1783dfc */ \"../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/extention-preview.vue?vue&type=template&id=a1783dfc\");\n\n\n//# sourceURL=webpack:///./src/views/list/extention-preview.vue?");

/***/ }),

/***/ "./src/views/list/index.vue?vue&type=template&id=31499d3b":
/*!****************************************************************!*\
  !*** ./src/views/list/index.vue?vue&type=template&id=31499d3b ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_index_vue_vue_type_template_id_31499d3b__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_index_vue_vue_type_template_id_31499d3b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./index.vue?vue&type=template&id=31499d3b */ \"../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/index.vue?vue&type=template&id=31499d3b\");\n\n\n//# sourceURL=webpack:///./src/views/list/index.vue?");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/extention-preview.vue?vue&type=template&id=a1783dfc":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/extention-preview.vue?vue&type=template&id=a1783dfc ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = [\"innerHTML\"]\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", { innerHTML: $setup.content }, null, 8 /* PROPS */, _hoisted_1))\n}\n\n//# sourceURL=webpack:///./src/views/list/extention-preview.vue?../../node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/index.vue?vue&type=template&id=31499d3b":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/list/index.vue?vue&type=template&id=31499d3b ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"../../node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"ALL UUIDS\")\nconst _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"BATCH\")\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NButton\"], {\n      onClick: _cache[0] || (_cache[0] = $event => (_ctx.$router.push('/list/uuids_all')))\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n        _hoisted_1\n      ]),\n      _: 1 /* STABLE */\n    }),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NDataTable\"], {\n      remote: \"\",\n      data: $setup.data,\n      columns: $setup.columns,\n      \"onUpdate:checkedRowKeys\": $setup.handleCheck,\n      \"row-key\": (row)=>row.id,\n      \"visual-scroll\": \"\"\n    }, null, 8 /* PROPS */, [\"data\", \"row-key\"]),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"NButton\"], { onClick: $setup.gotobatch }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [\n        _hoisted_2\n      ]),\n      _: 1 /* STABLE */\n    }),\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.data.map(v=>v.id).join(\",\")), 1 /* TEXT */)\n  ], 64 /* STABLE_FRAGMENT */))\n}\n\n//# sourceURL=webpack:///./src/views/list/index.vue?../../node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!../../node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B3%5D.use%5B0%5D");

/***/ }),

/***/ "./src/shared/APIHelper.js":
/*!*********************************!*\
  !*** ./src/shared/APIHelper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API\": () => (/* binding */ API)\n/* harmony export */ });\nconst API={\r\n    get:async(url)=>{\r\n        // console.log(await fetch(localStorage.getItem(\"__5dbwat_proj__thost_apihost\")+url).then(v.json()));\r\n        return await fetch(localStorage.getItem(\"__5dbwat_proj__thost_apihost\")+url).then(v=>v.json())\r\n    },\r\n    post:async(url,body)=>{\r\n        return await fetch(localStorage.getItem(\"__5dbwat_proj__thost_apihost\")+url,{\"method\":\"POST\",\"body\":JSON.stringify(body),\"headers\":{\"Content-Type\":\"application/json\"}}).then(v=>v.json())\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/shared/APIHelper.js?");

/***/ })

}]);