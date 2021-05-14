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
exports.id = "pages/api/[user]";
exports.ids = ["pages/api/[user]"];
exports.modules = {

/***/ "./pages/api/[user].js":
/*!*****************************!*\
  !*** ./pages/api/[user].js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst users = [{\n  id: 1,\n  name: \"ashok\"\n}, {\n  id: 2,\n  name: \"Max\"\n}, {\n  id: 3,\n  name: \"Jennifer\"\n}, {\n  id: 4,\n  name: \"Jennifer\"\n}, {\n  id: 5,\n  name: \"Jennifer\"\n}, {\n  id: 6,\n  name: \"Jennifer\"\n}, {\n  id: 7,\n  name: \"Jennifer\"\n}, {\n  id: 8,\n  name: \"Jennifer\"\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  const user = users.find(user => user.id === +req.query.user) || {};\n  console.log(user);\n  res.status(200).json({\n    user\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0dGVzdC8uL3BhZ2VzL2FwaS9bdXNlcl0uanM/YzIwZCJdLCJuYW1lcyI6WyJ1c2VycyIsImlkIiwibmFtZSIsInJlcSIsInJlcyIsInVzZXIiLCJmaW5kIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQ1o7QUFBRUMsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFO0FBQWYsQ0FEWSxFQUVaO0FBQUVELElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRTtBQUFmLENBRlksRUFHWjtBQUFFRCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUU7QUFBZixDQUhZLEVBSVo7QUFBRUQsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFO0FBQWYsQ0FKWSxFQUtaO0FBQUVELElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRTtBQUFmLENBTFksRUFNWjtBQUFFRCxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFJLEVBQUU7QUFBZixDQU5ZLEVBT1o7QUFBRUQsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFO0FBQWYsQ0FQWSxFQVFaO0FBQUVELElBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUksRUFBRTtBQUFmLENBUlksQ0FBZDtBQVdBLCtEQUFlLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCLFFBQU1DLElBQUksR0FBR0wsS0FBSyxDQUFDTSxJQUFOLENBQVlELElBQUQsSUFBVUEsSUFBSSxDQUFDSixFQUFMLEtBQVksQ0FBQ0UsR0FBRyxDQUFDSSxLQUFKLENBQVVGLElBQTVDLEtBQXFELEVBQWxFO0FBQ0FHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0FELEtBQUcsQ0FBQ00sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVOO0FBQUYsR0FBckI7QUFDRCxDQUpEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL1t1c2VyXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmNvbnN0IHVzZXJzID0gW1xuICB7IGlkOiAxLCBuYW1lOiBcImFzaG9rXCIgfSxcbiAgeyBpZDogMiwgbmFtZTogXCJNYXhcIiB9LFxuICB7IGlkOiAzLCBuYW1lOiBcIkplbm5pZmVyXCIgfSxcbiAgeyBpZDogNCwgbmFtZTogXCJKZW5uaWZlclwiIH0sXG4gIHsgaWQ6IDUsIG5hbWU6IFwiSmVubmlmZXJcIiB9LFxuICB7IGlkOiA2LCBuYW1lOiBcIkplbm5pZmVyXCIgfSxcbiAgeyBpZDogNywgbmFtZTogXCJKZW5uaWZlclwiIH0sXG4gIHsgaWQ6IDgsIG5hbWU6IFwiSmVubmlmZXJcIiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmlkID09PSArcmVxLnF1ZXJ5LnVzZXIpIHx8IHt9O1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyB1c2VyIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/[user].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/[user].js"));
module.exports = __webpack_exports__;

})();