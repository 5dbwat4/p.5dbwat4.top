"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[34],{

/***/ 1031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addExcerpt_vue_vue_type_template_id_08a0770a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1032);
/* harmony import */ var _addExcerpt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1034);
/* harmony import */ var G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);




;
const __exports__ = /*#__PURE__*/(0,G_SelfHost_Developing_Environment_Againstar_County_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_addExcerpt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_addExcerpt_vue_vue_type_template_id_08a0770a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/components/archPage/addExcerpt.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ 1035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _vicons_ionicons5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1036);
/* harmony import */ var _vicons_ionicons5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1037);
/* harmony import */ var _vicons_ionicons5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1038);
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(970);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(791);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1039);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1041);
/* harmony import */ var naive_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(730);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  setup(__props, { expose }) {
  expose();

const route=(0,vue_router__WEBPACK_IMPORTED_MODULE_0__.useRoute)()

const loading=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(false),
range=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(""),
showModal=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(false),
LoadingA=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)([false,false,false]),
attrs=(0,_vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.useAttrs)(),
useInput=(0,_vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref)(false)

const addExcerpt=()=>{
    loading.value=true
    range.value=window.getSelection().toString() 
    showModal.value=true
},
closeModal=()=>{
    showModal.value=false
    loading.value=false
},
submitAs=async(type)=>{
    LoadingA.value[type]=true;
    (await __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(__webpack_require__, 854))).API("saveExcerpt",{
        content:range.value,
        tags:[],
        origin:route.params.id,
        originName:attrs.originName,
        rate:0.5,
        type
    }).then(v=>{
        LoadingA.value[type]=false
    });
}

const __returned__ = { route, loading, range, showModal, LoadingA, attrs, useInput, addExcerpt, closeModal, submitAs, AddIcon: _vicons_ionicons5__WEBPACK_IMPORTED_MODULE_3__["default"], YesIcon: _vicons_ionicons5__WEBPACK_IMPORTED_MODULE_4__["default"], NoIcon: _vicons_ionicons5__WEBPACK_IMPORTED_MODULE_5__["default"], ref: _vue_reactivity__WEBPACK_IMPORTED_MODULE_1__.ref, useAttrs: _vue_runtime_core__WEBPACK_IMPORTED_MODULE_2__.useAttrs, NIcon: naive_ui__WEBPACK_IMPORTED_MODULE_6__.NIcon, NButton: naive_ui__WEBPACK_IMPORTED_MODULE_7__["default"], NModal: naive_ui__WEBPACK_IMPORTED_MODULE_8__["default"], NCard: naive_ui__WEBPACK_IMPORTED_MODULE_9__["default"], NInput: naive_ui__WEBPACK_IMPORTED_MODULE_10__["default"], useRoute: vue_router__WEBPACK_IMPORTED_MODULE_0__.useRoute }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ 1034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_addExcerpt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_addExcerpt_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1035);
 

/***/ }),

/***/ 1032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_addExcerpt_vue_vue_type_template_id_08a0770a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_3_use_0_addExcerpt_vue_vue_type_template_id_08a0770a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1033);


/***/ }),

/***/ 1033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("无法定位？使用输入")
const _hoisted_2 = { key: 0 }
const _hoisted_3 = { key: 1 }
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("不收录")
const _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("犀利的观点")
const _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("优美的语句")
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("新颖的事例")

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], {
      quaternary: "",
      circle: "",
      style: {"right":"10px","bottom":"10px","position":"fixed"},
      onClick: $setup.addExcerpt,
      loading: $setup.loading
    }, {
      icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NIcon"], null, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["AddIcon"])
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["loading"]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NModal"], {
      show: $setup.showModal,
      "onUpdate:show": _cache[5] || (_cache[5] = $event => (($setup.showModal) = $event)),
      "on-after-leave": $setup.loading=false
    }, {
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NCard"], {
          style: {"width":"600px"},
          title: "保存片段",
          bordered: false,
          size: "huge",
          role: "dialog",
          "aria-modal": "true"
        }, {
          "header-extra": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], {
              onClick: _cache[0] || (_cache[0] = $event => ($setup.useInput=true)),
              text: ""
            }, {
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                _hoisted_1
              ]),
              _: 1 /* STABLE */
            })
          ]),
          footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], { onClick: $setup.closeModal }, {
              icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NIcon"], null, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NoIcon"])
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                _hoisted_4
              ]),
              _: 1 /* STABLE */
            }),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], {
              onClick: _cache[2] || (_cache[2] = $event => ($setup.submitAs(0))),
              loading: $setup.LoadingA[0]
            }, {
              icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NIcon"], null, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["YesIcon"])
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                _hoisted_5
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["loading"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], {
              onClick: _cache[3] || (_cache[3] = $event => ($setup.submitAs(1))),
              loading: $setup.LoadingA[1]
            }, {
              icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NIcon"], null, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["YesIcon"])
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                _hoisted_6
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["loading"]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NButton"], {
              onClick: _cache[4] || (_cache[4] = $event => ($setup.submitAs(2))),
              loading: $setup.LoadingA[2]
            }, {
              icon: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NIcon"], null, {
                  default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["YesIcon"])
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                _hoisted_7
              ]),
              _: 1 /* STABLE */
            }, 8 /* PROPS */, ["loading"])
          ]),
          default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
            ($setup.useInput)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["NInput"], {
                    type: "textarea",
                    value: $setup.range,
                    "onUpdate:value": _cache[1] || (_cache[1] = $event => (($setup.range) = $event))
                  }, null, 8 /* PROPS */, ["value"])
                ]))
              : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.range), 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Length:" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.range.length), 1 /* TEXT */)
                ]))
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["show", "on-after-leave"])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ })

}]);