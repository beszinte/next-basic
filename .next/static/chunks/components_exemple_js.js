"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_exemple_js"],{

/***/ "./components/exemple.js":
/*!*******************************!*\
  !*** ./components/exemple.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Exemple: function() { return /* binding */ Exemple; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Exemple = ()=>{\n    /* ici je vais récupérer notre clé jwt-token*/ const token = localStorage.getItem(\"jwt-token\");\n    console.log(\"token\", token);\n    // return <div>{JSON.stringify(token)}</div>\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: token\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Berth\\\\Documents\\\\Bertheudemy\\\\react_next\\\\partie5_section6_deploiement_chap46\\\\components\\\\exemple.js\",\n        lineNumber: 7,\n        columnNumber: 12\n    }, undefined);\n};\n_c = Exemple;\nvar _c;\n$RefreshReg$(_c, \"Exemple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2V4ZW1wbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLFVBQVU7SUFDbkIsNENBQTRDLEdBQzVDLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQ0MsUUFBUUMsR0FBRyxDQUFDLFNBQVNKO0lBRXJCLDRDQUE0QztJQUM1QyxxQkFBTyw4REFBQ0s7a0JBQUtMOzs7Ozs7QUFDakIsRUFBQztLQVBZRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V4ZW1wbGUuanM/Y2ZmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgRXhlbXBsZSA9ICgpID0+IHtcclxuICAgIC8qIGljaSBqZSB2YWlzIHLDqWN1cMOpcmVyIG5vdHJlIGNsw6kgand0LXRva2VuKi9cclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3QtdG9rZW5cIik7XHJcbiAgICBjb25zb2xlLmxvZygndG9rZW4nLCB0b2tlbilcclxuXHJcbiAgICAvLyByZXR1cm4gPGRpdj57SlNPTi5zdHJpbmdpZnkodG9rZW4pfTwvZGl2PlxyXG4gICAgcmV0dXJuIDxkaXY+e3Rva2VufTwvZGl2PlxyXG59XHJcbiJdLCJuYW1lcyI6WyJFeGVtcGxlIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/exemple.js\n"));

/***/ })

}]);