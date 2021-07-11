/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkreviews"] = self["webpackChunkreviews"] || []).push([["src_store_actions_auth_js"],{

/***/ "./src/store/actions/actionsType.js":
/*!******************************************!*\
  !*** ./src/store/actions/actionsType.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AUTH_START\": function() { return /* binding */ AUTH_START; },\n/* harmony export */   \"AUTH_FAIL\": function() { return /* binding */ AUTH_FAIL; },\n/* harmony export */   \"AUTH_SUCCESS\": function() { return /* binding */ AUTH_SUCCESS; },\n/* harmony export */   \"AUTH_LOGOUT\": function() { return /* binding */ AUTH_LOGOUT; }\n/* harmony export */ });\n// export const REVIEW = \"REVIEW\";\nvar AUTH_START = \"AUTH_START\";\nvar AUTH_FAIL = \"AUTH_FAIL\";\nvar AUTH_SUCCESS = \"AUTH_SUCCESS\";\nvar AUTH_LOGOUT = \"AUTH_LOGOUT\";\n\n//# sourceURL=webpack://reviews/./src/store/actions/actionsType.js?");

/***/ }),

/***/ "./src/store/actions/auth.js":
/*!***********************************!*\
  !*** ./src/store/actions/auth.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authStart\": function() { return /* binding */ authStart; },\n/* harmony export */   \"authFail\": function() { return /* binding */ authFail; },\n/* harmony export */   \"authSuccess\": function() { return /* binding */ authSuccess; },\n/* harmony export */   \"logout\": function() { return /* binding */ logout; },\n/* harmony export */   \"auth\": function() { return /* binding */ auth; }\n/* harmony export */ });\n/* harmony import */ var _actionsType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionsType */ \"./src/store/actions/actionsType.js\");\n/* harmony import */ var _eaxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../eaxios */ \"./src/eaxios.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar authStart = function authStart() {\n  return {\n    type: _actionsType__WEBPACK_IMPORTED_MODULE_0__.AUTH_START,\n    loading: true,\n    error: null\n  };\n};\nvar authFail = function authFail(errorMessage) {\n  return {\n    type: _actionsType__WEBPACK_IMPORTED_MODULE_0__.AUTH_FAIL,\n    errorMessage: errorMessage\n  };\n};\nvar authSuccess = function authSuccess(authData) {\n  console.log(authData);\n  return {\n    type: _actionsType__WEBPACK_IMPORTED_MODULE_0__.AUTH_SUCCESS,\n    token: authData.token,\n    userId: authData.userDetails.userId,\n    userDetails: authData.userDetails\n  };\n};\nvar logout = function logout() {\n  localStorage.clear();\n  sessionStorage.clear();\n  return {\n    type: _actionsType__WEBPACK_IMPORTED_MODULE_0__.AUTH_LOGOUT\n  };\n};\nvar auth = function auth(data, type) {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n      var url, result, authData;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch(authStart());\n\n              if (type === \"login\") {\n                url = \"/api/v1/auth/login\";\n              } else {\n                url = \"/api/v1/auth/register\";\n              }\n\n              console.log(data);\n              _context.prev = 3;\n              _context.next = 6;\n              return _eaxios__WEBPACK_IMPORTED_MODULE_1__.default.post(url, data);\n\n            case 6:\n              result = _context.sent;\n              authData = {\n                userDetails: result.data.data,\n                token: result.data.token\n              };\n              localStorage.setItem(\"Reviews.token\", authData.token);\n              localStorage.setItem(\"Reviews.UserId\", authData.userDetails._id);\n              localStorage.setItem(\"Reviews.email\", authData.userDetails.email);\n              dispatch(authSuccess(authData));\n              _context.next = 17;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t0 = _context[\"catch\"](3);\n              dispatch(authFail(_context.t0.response.data.error));\n\n            case 17:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[3, 14]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://reviews/./src/store/actions/auth.js?");

/***/ })

}]);