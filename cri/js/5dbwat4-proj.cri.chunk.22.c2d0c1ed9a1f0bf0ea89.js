"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[22],{

/***/ 835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG": () => (/* binding */ CONFIG)
/* harmony export */ });
function CONFIG(param){
    return JSON.parse(localStorage.getItem("__cri_s__Settings"))[param]
}




/***/ }),

/***/ 834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "check": () => (/* binding */ check)
/* harmony export */ });
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _resolveConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(835);



async function check(){
    if(!(0,_resolveConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG)("apihost")){
        ;(await __webpack_require__.e(/* import() */ 27).then(__webpack_require__.t.bind(__webpack_require__, 855, 23))).default({
            title: "Not specify an API host server.Go to set it!",
            icon: "warning",
            buttons:{
                1:{
                  text:"Set",
                  value:"set"
                },2:{
                  text:"Ignore",
                  value:"ignote"
                }
              }
        }).then(v=>{
            if(v==set){
                (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().push("/settings")
            }
        })
    }
}



/***/ })

}]);