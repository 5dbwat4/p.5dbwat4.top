"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[30],{

/***/ 882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(883);
/* harmony import */ var _arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(885);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/archPage/arch.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(791);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(887);







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();

const authorTooltip=(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(()=>__webpack_require__.e(/* import() */ 35).then(__webpack_require__.bind(__webpack_require__, 1060)))

const router=(0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)()


const columns =  [
    {
      title: "Title",
      key: "title",
    }
    ,
    {
      title:"Author",
      key:"author",
      render(row){
        if(row.author.includes("#$#")){

          return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(authorTooltip,{
            tip:row.author.split("#$#")[1],
            content:row.author.split("#$#")[0]
          })
        }else{
          return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)("P",{},row.author)
        }
      }
    },
    {
      title: "View",
      render(row) {
        return (0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h)(naive_ui__WEBPACK_IMPORTED_MODULE_2__["default"], {
          strong: true,
          tertiary: true,
          size: "small",
          onClick: () => {
            router.push("/view/"+row.id)
          }
        }, { default: () => "View" });
      }
    }
  ],pagination={
          pageSize: 15
  }; 

  const dataRef=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref)([])
  const windowHeight=window.innerHeight*70%+"px"

  ;(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted)(async()=>{
      (await __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 854))).API("listArch").then(v=>{
        dataRef.value=Object.entries(v).map(v=>{return {
            title:v[1].title,
            id:v[0],
            author:v[1].author
        }})
      })
  })

const __returned__ = { authorTooltip, router, columns, pagination, dataRef, windowHeight, ref: _vue_reactivity__WEBPACK_IMPORTED_MODULE_3__.ref, h: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.h, onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.onMounted, defineAsyncComponent: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent, useRouter: vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, NDataTable: naive_ui__WEBPACK_IMPORTED_MODULE_4__["default"], NButton: naive_ui__WEBPACK_IMPORTED_MODULE_2__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(886);
 

/***/ }),

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_arch_vue_vue_type_template_id_6d75f780__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(884);


/***/ }),

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["NDataTable"], {
    remote: "",
    ref: "table",
    columns: $setup.columns,
    data: $setup.dataRef,
    pagination: $setup.pagination,
    bordered: false,
    loading: _ctx.loading,
    "max-height": $setup.windowHeight,
    "scroll-x": 900,
    "virtual-scroll": ""
  }, null, 8 /* PROPS */, ["data", "loading"]))
}

/***/ })

}]);