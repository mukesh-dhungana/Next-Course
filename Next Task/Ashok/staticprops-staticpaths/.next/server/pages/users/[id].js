/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": function() { return /* binding */ getStaticPaths; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_User_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/User.module.css */ \"./styles/User.module.css\");\n/* harmony import */ var _styles_User_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_User_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/ashok/Desktop/wen/Next-Learning/Next Task/Ashok/staticprops-staticpaths/pages/users/[id].js\";\n\n\n\nfunction id({\n  user = {}\n}) {\n  const {\n    name\n  } = user;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_User_module_css__WEBPACK_IMPORTED_MODULE_2___default().Container),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Name: \", name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\nconst getStaticPaths = async () => {\n  const response = await fetch(\"http://localhost:3000/api/hello\");\n  const {\n    users\n  } = await response.json();\n  const paths = users.map(user => ({\n    params: {\n      id: \"\" + user.id\n    }\n  }));\n  return {\n    paths,\n    fallback: \"blocking\"\n  };\n};\nconst getStaticProps = async ctx => {\n  const {\n    id\n  } = ctx.params;\n  const response = await fetch(`http://localhost:3000/api/${id}`);\n  const {\n    user\n  } = await response.json();\n  if (!user || JSON.stringify(user) === \"{}\") return {\n    notFound: true\n  };\n  return {\n    props: {\n      user\n    },\n    revalidate: 5\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (id);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdC8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MmNlYiJdLCJuYW1lcyI6WyJpZCIsInVzZXIiLCJuYW1lIiwiVXNlciIsImdldFN0YXRpY1BhdGhzIiwicmVzcG9uc2UiLCJmZXRjaCIsInVzZXJzIiwianNvbiIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImN0eCIsIkpTT04iLCJzdHJpbmdpZnkiLCJub3RGb3VuZCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsRUFBVCxDQUFZO0FBQUVDLE1BQUksR0FBRztBQUFULENBQVosRUFBMkI7QUFDekIsUUFBTTtBQUFFQztBQUFGLE1BQVdELElBQWpCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVFLDBFQUFoQjtBQUFBLDJCQUNFO0FBQUEsMkJBQVdELElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRU0sTUFBTUUsY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxpQ0FBRCxDQUE1QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFZLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUF4QjtBQUNBLFFBQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdULElBQUQsS0FBVztBQUFFVSxVQUFNLEVBQUU7QUFBRVgsUUFBRSxFQUFFLEtBQUtDLElBQUksQ0FBQ0Q7QUFBaEI7QUFBVixHQUFYLENBQVYsQ0FBZDtBQUVBLFNBQU87QUFDTFMsU0FESztBQUVMRyxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FUTTtBQVdBLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDM0MsUUFBTTtBQUFFZDtBQUFGLE1BQVNjLEdBQUcsQ0FBQ0gsTUFBbkI7QUFDQSxRQUFNTixRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLDZCQUE0Qk4sRUFBRyxFQUFqQyxDQUE1QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXLE1BQU1JLFFBQVEsQ0FBQ0csSUFBVCxFQUF2QjtBQUNBLE1BQUksQ0FBQ1AsSUFBRCxJQUFTYyxJQUFJLENBQUNDLFNBQUwsQ0FBZWYsSUFBZixNQUF5QixJQUF0QyxFQUE0QyxPQUFPO0FBQUVnQixZQUFRLEVBQUU7QUFBWixHQUFQO0FBQzVDLFNBQU87QUFBRUMsU0FBSyxFQUFFO0FBQUVqQjtBQUFGLEtBQVQ7QUFBbUJrQixjQUFVLEVBQUU7QUFBL0IsR0FBUDtBQUNELENBTk07QUFRUCwrREFBZW5CLEVBQWYiLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL3N0eWxlcy9Vc2VyLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gaWQoeyB1c2VyID0ge30gfSkge1xuICBjb25zdCB7IG5hbWUgfSA9IHVzZXI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1VzZXIuQ29udGFpbmVyfT5cbiAgICAgIDxoMj5OYW1lOiB7bmFtZX08L2gyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2hlbGxvXCIpO1xuICBjb25zdCB7IHVzZXJzIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHBhdGhzID0gdXNlcnMubWFwKCh1c2VyKSA9PiAoeyBwYXJhbXM6IHsgaWQ6IFwiXCIgKyB1c2VyLmlkIH0gfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gY3R4LnBhcmFtcztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS8ke2lkfWApO1xuICBjb25zdCB7IHVzZXIgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgaWYgKCF1c2VyIHx8IEpTT04uc3RyaW5naWZ5KHVzZXIpID09PSBcInt9XCIpIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07XG4gIHJldHVybiB7IHByb3BzOiB7IHVzZXIgfSwgcmV2YWxpZGF0ZTogNSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "./styles/User.module.css":
/*!********************************!*\
  !*** ./styles/User.module.css ***!
  \********************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"Container\": \"User_Container__3J1tW\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdC8uL3N0eWxlcy9Vc2VyLm1vZHVsZS5jc3M/Yzg1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9Vc2VyLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250YWluZXJcIjogXCJVc2VyX0NvbnRhaW5lcl9fM0oxdFdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/User.module.css\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();