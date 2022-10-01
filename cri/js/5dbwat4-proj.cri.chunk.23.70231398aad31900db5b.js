"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[23],{

/***/ 854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": () => (/* binding */ API)
/* harmony export */ });
/* harmony import */ var _resolveConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(835);


async function API(spec,body){
    let url=new URL("http://localhost/API/cri/"+spec)
    url.host=(0,_resolveConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG)("apihost")
    const v = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body)||""
    })
    return await v.json()
}



/***/ }),

/***/ 835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG": () => (/* binding */ CONFIG)
/* harmony export */ });
function CONFIG(param){
    return JSON.parse(localStorage.getItem("__cri_s__Settings"))[param]
}




/***/ })

}]);