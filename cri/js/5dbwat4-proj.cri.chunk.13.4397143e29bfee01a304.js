"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[13],{

/***/ 569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(570);
/* harmony import */ var _settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/settings.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(574);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(700);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(730);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(791);








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();

const settings=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)(JSON.parse(localStorage.getItem("__cri_s__Settings")||"{}"))



const Save=(v)=>{
    localStorage.setItem("__cri_s__Settings",JSON.stringify(settings.value))
}

const __returned__ = { settings, Save, ref: _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref, defineAsyncComponent: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent, h: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.h, onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted, useRoute: vue_router__WEBPACK_IMPORTED_MODULE_2__.useRoute, useRouter: vue_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, NForm: naive_ui__WEBPACK_IMPORTED_MODULE_3__["default"], NFormItem: naive_ui__WEBPACK_IMPORTED_MODULE_4__["default"], NInput: naive_ui__WEBPACK_IMPORTED_MODULE_5__["default"], NButton: naive_ui__WEBPACK_IMPORTED_MODULE_6__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(573);
 

/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_settings_vue_vue_type_template_id_0943ab7c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(571);


/***/ }),

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Check")
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["NForm"], null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NFormItem"], { label: "API Host" }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NInput"], {
            value: $setup.settings.apihost,
            "onUpdate:value": [
              _cache[0] || (_cache[0] = $event => (($setup.settings.apihost) = $event)),
              $setup.Save
            ]
          }, null, 8 /* PROPS */, ["value"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], null, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              _hoisted_1
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], {
        block: "",
        onClick: $setup.Save,
        type: "primary"
      }, {
        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          _hoisted_2
        ]),
        _: 1 /* STABLE */
      })
    ]),
    _: 1 /* STABLE */
  }))
}

/***/ })

}]);