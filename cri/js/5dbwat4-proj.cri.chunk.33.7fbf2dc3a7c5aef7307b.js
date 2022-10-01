"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[33],{

/***/ 1026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _excerptList_vue_vue_type_template_id_42e1bf76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1027);
/* harmony import */ var _excerptList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1029);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_excerptList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_excerptList_vue_vue_type_template_id_42e1bf76__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/archPage/excerptList.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 1030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(791);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(999);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();

const page=(0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1)
const list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([])

;(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async()=>{
    (await __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 854))).API("excerptList",{}).then(v=>{
        list.value=Object.entries(v).map(v=>{
            return {
                id:v[0],
                content:v[1].content,
                origin:v[1].origin,
                originName:v[1].originName
            }
        })
    })
})

const __returned__ = { page, list, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, NButton: naive_ui__WEBPACK_IMPORTED_MODULE_1__["default"], NPagination: naive_ui__WEBPACK_IMPORTED_MODULE_2__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 1029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_excerptList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_excerptList_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1030);
 

/***/ }),

/***/ 1027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_excerptList_vue_vue_type_template_id_42e1bf76__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_excerptList_vue_vue_type_template_id_42e1bf76__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1028);


/***/ }),

/***/ 1028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_var_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-card")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.list, (item) => {
      return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_var_card, {
        style: {"padding":"20px"},
        key: item,
        description: item.content
      }, {
        extra: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], {
            text: "",
            onClick: $event => (_ctx.$router.push('/view/'+item.origin))
          }, {
            default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("————《" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.originName.replaceAll("《","<").replaceAll("<","《").replaceAll("》",">").replaceAll(">","》")) + "》", 1 /* TEXT */)
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"])
        ]),
        _: 2 /* DYNAMIC */
      }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["description"]))
    }), 128 /* KEYED_FRAGMENT */)),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NPagination"], {
      page: $setup.page,
      "onUpdate:page": _cache[0] || (_cache[0] = $event => (($setup.page) = $event)),
      "item-count": $setup.list.length,
      "show-size-picker": "",
      "page-sizes": [10, 20, 30, 40]
    }, null, 8 /* PROPS */, ["page", "item-count"])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ })

}]);