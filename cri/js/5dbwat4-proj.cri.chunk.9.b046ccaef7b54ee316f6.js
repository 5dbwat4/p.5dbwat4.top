"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[9],{

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

/***/ 559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _new_vue_vue_type_template_id_077a3d52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(560);
/* harmony import */ var _new_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(562);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_new_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_new_vue_vue_type_template_id_077a3d52__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/new.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);




// import {Input as varInput,Button as varButton} from "@varlet/ui"



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();

const route=(0,vue_router__WEBPACK_IMPORTED_MODULE_0__.useRoute)(),router=(0,vue_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)()

const attrs=(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.useAttrs)()


const pretifyContent={
  deleteendl:()=>{
    data.value.content=data.value.content.replaceAll(/　+/g,"").replaceAll(/\n+/g,"\n")
  }
}

const data=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref)({
  title:"",author:"",content:"",timestamp:(new Date()).getTime(),origin:"",rate:0.5
})

      ;(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted)(async()=>{
        // const vditor = new (await import("vditor")).default("vditor",{
        //   counter:{enable:true},
        //   upload:{url:location.origin+"/API/~ResourceCreate/"}
        // })
        
      })

;(async()=>{
  if(attrs._type=="edit"){
    let id=route.params.id
    ;(await __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 854))).API("getArch",{id}) .then(async(r)=>{
      data.value=r
    });
  }
})();


const submit=async()=>{
  if(attrs._type=="edit"){
  await   submitEdit()
  }else{
    await submitNew()
  }
}





const submitNew=async()=>{
  
  (await __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 854))).API("saveArch",data.value) .then(async(response) => {
          ;(await __webpack_require__.e(/* import() */ 27).then(__webpack_require__.t.bind(__webpack_require__, 855, 23))).default({
            title: "Record Successfully",
            text: "已上传.ID="+response.id,
            icon: "success",
            buttons:{
              1:{
                text:"Reset Form",
                value:"reset"
              },2:{
                text:"View it",
                value:"view"
              },3:{
                text:"return",
                value:"return"
              }
            }
          }).then(v=>{
            switch (v) {
              case "reset":
                data.value={
                  title:"",author:"",content:"",timestamp:(new Date()).getTime(),origin:"",rate:0.5
                }
                break;
              case "return":
                router.push("/")
                break;
              case "view":
                router.push("/view/"+response.id)
              default:
                break;
            }
          })
        })
}

,submitEdit=async()=>{

  (await __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 854))).API("editArch",{id:route.params.id,data:data.value}) .then(async(response) => {
          ;(await __webpack_require__.e(/* import() */ 27).then(__webpack_require__.t.bind(__webpack_require__, 855, 23))).default({
            title: "Record Successfully",
            text: "已更新.ID="+response.id,
            icon: "success",
            buttons:{
              1:{
                text:"Reset Form",
                value:"reset"
              },2:{
                text:"View it",
                value:"view"
              },3:{
                text:"return",
                value:"return"
              }
            }
          }).then(v=>{
            switch (v) {
              case "reset":
                data.value={
                  title:"",author:"",content:"",timestamp:(new Date()).getTime(),origin:"",rate:0.5
                }
                break;
              case "return":
                router.push("/")
                break;
              case "view":
                router.push("/view/"+response.id)
              default:
                break;
            }
          })
        })
}

const __returned__ = { route, router, attrs, pretifyContent, data, submit, submitNew, submitEdit, ref: _vue_reactivity__WEBPACK_IMPORTED_MODULE_2__.ref, onMounted: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.onMounted, useAttrs: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_1__.useAttrs, useRoute: vue_router__WEBPACK_IMPORTED_MODULE_0__.useRoute, useRouter: vue_router__WEBPACK_IMPORTED_MODULE_0__.useRouter }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_new_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_new_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(563);
 

/***/ }),

/***/ 560:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_new_vue_vue_type_template_id_077a3d52__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_new_vue_vue_type_template_id_077a3d52__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(561);


/***/ }),

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Delete all unnecessary newline")
const _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Save")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_var_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-input")
  const _component_var_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("var-button")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_input, {
      placeholder: "标题",
      modelValue: $setup.data.title,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.data.title) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_input, {
      placeholder: "Author",
      modelValue: $setup.data.author,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.data.author) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_input, {
      placeholder: "Origin",
      modelValue: $setup.data.origin,
      "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.data.origin) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_input, {
      textarea: "",
      placeholder: "Content",
      modelValue: $setup.data.content,
      "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.data.content) = $event))
    }, null, 8 /* PROPS */, ["modelValue"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div id=\"vditor\"></div> "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <var-date-picker show-current v-model=\"timestamp\"/> "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
      type: "primary",
      onClick: $setup.pretifyContent.deleteendl
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["onClick"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_var_button, {
      block: "",
      type: "primary",
      onClick: $setup.submit
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ })

}]);