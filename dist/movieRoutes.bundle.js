/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreviews"] = self["webpackChunkreviews"] || []).push([["movieRoutes"],{

/***/ "./src/Routes/MovieRoutes.js":
/*!***********************************!*\
  !*** ./src/Routes/MovieRoutes.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieRoutes\": function() { return /* binding */ MovieRoutes; }\n/* harmony export */ });\n/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ \"./node_modules/@loadable/component/dist/loadable.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\n\n\n // import NotFound from \"../NotFound\";\n\nvar fallbackComponent = function fallbackComponent() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"span\", {\n    style: {\n      position: \"absolute\",\n      left: \"48%\",\n      top: \"45%\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_utils__WEBPACK_IMPORTED_MODULE_2__.LoadingSpinner, null));\n};\n\nvar MovieMaster = (0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_fortawesome_free-solid-svg-icons_index_es_js-node_modules_fortawesome_re-c55913\"), __webpack_require__.e(\"vendors-node_modules_react-redux_es_index_js\"), __webpack_require__.e(\"vendors-node_modules_react-elastic-carousel_dist_index_es_js-node_modules_react-player_lib_in-f31af9\"), __webpack_require__.e(\"src_Auth_Error_jsx-src_eaxios_js-src_Auth_Login_Login_css-src_Auth_Register_Register_css-src_-a2f84c\"), __webpack_require__.e(\"src_Movie_MovieMaster_jsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Movie/MovieMaster */ \"./src/Movie/MovieMaster.jsx\"));\n}, {\n  fallback: fallbackComponent\n});\nvar MovieRoutes = function MovieRoutes() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    path: \"/home/movie\",\n    exact: true,\n    component: MovieMaster\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {\n    from: \"/home/movie\",\n    to: \"/home/movie\"\n  }));\n};\n\n//# sourceURL=webpack://reviews/./src/Routes/MovieRoutes.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadingSpinner\": function() { return /* binding */ LoadingSpinner; },\n/* harmony export */   \"baseURL\": function() { return /* binding */ baseURL; },\n/* harmony export */   \"convertDate\": function() { return /* binding */ convertDate; },\n/* harmony export */   \"year\": function() { return /* binding */ year; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar LoadingSpinner = function LoadingSpinner() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default()), {\n    type: \"ThreeDots\",\n    color: \"#00BFFF\",\n    height: 100,\n    width: 100\n  });\n};\nvar baseURL = \"https://imdb-demo-backend.herokuapp.com/\"; //convert date\n\nvar convertDate = function convertDate(inputFormat) {\n  function pad(s) {\n    return s < 10 ? \"0\" + s : s;\n  }\n\n  var d = new Date(inputFormat);\n  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(\"/\");\n};\nvar year = function year(date) {\n  var dt = new Date(date);\n  var year = dt.getFullYear();\n  return year;\n};\n\n//# sourceURL=webpack://reviews/./src/utils.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-loader-spinner_index_js-node_modules_react-router_esm_react-router_js","vendors-node_modules_loadable_component_dist_loadable_esm_js"], function() { return __webpack_exec__("./src/Routes/MovieRoutes.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);