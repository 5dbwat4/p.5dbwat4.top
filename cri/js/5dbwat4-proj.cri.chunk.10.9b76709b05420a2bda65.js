"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[10],{

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


/***/ }),

/***/ 564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_vue_vue_type_template_id_f82f3d04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565);
/* harmony import */ var _view_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(567);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_view_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_view_vue_vue_type_template_id_f82f3d04__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/view.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();

const title=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)("Loading..."),content=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref)("Loading...")
const route=(0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRoute)(),router=(0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)()
const articleC=(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.defineAsyncComponent)(()=>__webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(__webpack_require__, 856)))
const artLoading=(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.defineAsyncComponent)(()=>Promise.all(/* import() */[__webpack_require__.e(14), __webpack_require__.e(20)]).then(__webpack_require__.bind(__webpack_require__, 872)))
const ArticleComponent=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef)(artLoading)
;(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onMounted)(async()=>{
    (await __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 854))).API("getArch",{
            id:route.params.id
        }).then(async(v)=>{
        title.value=v.title
        content.value=v.content
        ArticleComponent.value=(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.h)(articleC,{
            title:v.title,
            body:(await __webpack_require__.e(/* import() */ 28).then(__webpack_require__.bind(__webpack_require__, 880))).marked( v.content.replaceAll("\n","\n\n")),
            author:v.author
        });
        (await __webpack_require__.e(/* import() */ 29).then(__webpack_require__.bind(__webpack_require__, 881))).default({
            targets:".content",
            duration: 500,
            color:["#ffffff","#000000"]
        })
    })
})

const __returned__ = { title, content, route, router, articleC, artLoading, ArticleComponent, ref: _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.ref, shallowRef: _vue_reactivity__WEBPACK_IMPORTED_MODULE_0__.shallowRef, defineAsyncComponent: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.defineAsyncComponent, h: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.h, onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.onMounted, useRoute: vue_router__WEBPACK_IMPORTED_MODULE_1__.useRoute, useRouter: vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_view_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_view_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(568);
 

/***/ }),

/***/ 565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_view_vue_vue_type_template_id_f82f3d04__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_view_vue_vue_type_template_id_f82f3d04__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(566);


/***/ }),

/***/ 566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)($setup.ArticleComponent)))
}

/***/ })

}]);