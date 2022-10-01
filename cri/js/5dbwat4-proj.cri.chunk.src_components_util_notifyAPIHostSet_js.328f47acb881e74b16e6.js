"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_components_util_notifyAPIHostSet_js"],{

/***/ "./src/components/util/notifyAPIHostSet.js":
/*!*************************************************!*\
  !*** ./src/components/util/notifyAPIHostSet.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"check\": () => (/* binding */ check)\n/* harmony export */ });\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"../../node_modules/vue-router/dist/vue-router.esm-bundler.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './resolveConfig'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nasync function check(){\r\n    if(!Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './resolveConfig'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"apihost\")){\r\n        ;(await Promise.resolve().then(function webpackMissingModule() { var e = new Error(\"Cannot find module './libs/sweetalert.min.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; })).default({\r\n            title: \"Not specify an API host server.Go to set it!\",\r\n            icon: \"warning\",\r\n            buttons:{\r\n                1:{\r\n                  text:\"Set\",\r\n                  value:\"set\"\r\n                },2:{\r\n                  text:\"Ignore\",\r\n                  value:\"ignote\"\r\n                }\r\n              }\r\n        }).then(v=>{\r\n            if(v==set){\r\n                (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().push(\"/settings\")\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/util/notifyAPIHostSet.js?");

/***/ })

}]);