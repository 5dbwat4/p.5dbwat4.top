"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_API_js"],{

/***/ "./src/components/API.js":
/*!*******************************!*\
  !*** ./src/components/API.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API\": () => (/* binding */ API)\n/* harmony export */ });\n/* harmony import */ var _resolveConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolveConfig */ \"./src/components/resolveConfig.js\");\n\r\n\r\nasync function API(spec,body){\r\n    let url=new URL(\"http://localhost/API/cri/\"+spec)\r\n    url.host=(0,_resolveConfig__WEBPACK_IMPORTED_MODULE_0__.CONFIG)(\"apihost\")\r\n    const v = await fetch(url, {\r\n        method: \"POST\",\r\n        body: JSON.stringify(body)||\"\"\r\n    })\r\n    return await v.json()\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/API.js?");

/***/ }),

/***/ "./src/components/resolveConfig.js":
/*!*****************************************!*\
  !*** ./src/components/resolveConfig.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CONFIG\": () => (/* binding */ CONFIG)\n/* harmony export */ });\nfunction CONFIG(param){\r\n    return JSON.parse(localStorage.getItem(\"__cri_s__Settings\"))[param]\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/resolveConfig.js?");

/***/ })

}]);