webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _disclaimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disclaimer */ \"./components/disclaimer.tsx\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ \"./components/board.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\nfunction Main() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('board'),\n      view = _useState[0],\n      setView = _useState[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      projectName = _React$useState2[0],\n      setProjectName = _React$useState2[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isAcceptDisclaimer = _useState2[0],\n      setIsAcceptDisclaimer = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var _router$query = router.query,\n      _id = _router$query._id,\n      project = _router$query.project;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (localStorage.getItem('omegakanbanaccept')) {\n      setIsAcceptDisclaimer(true);\n    }\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"] // setView={setView}\n  , {\n    setProjectName: setProjectName,\n    projectName: projectName,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), !isAcceptDisclaimer && __jsx(_disclaimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setIsAcceptDisclaimer: setIsAcceptDisclaimer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Main, \"IPU9EKdtSNzDeF2j4fJLDNqME+w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VTdGF0ZSIsInZpZXciLCJzZXRWaWV3IiwiUmVhY3QiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiaXNBY2NlcHREaXNjbGFpbWVyIiwic2V0SXNBY2NlcHREaXNjbGFpbWVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJfaWQiLCJwcm9qZWN0IiwidXNlRWZmZWN0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQUMsT0FBRCxDQURIO0FBQUEsTUFDdEJDLElBRHNCO0FBQUEsTUFDaEJDLE9BRGdCOztBQUFBLHdCQUVTQyw0Q0FBSyxDQUFDSCxRQUFOLENBQWUsRUFBZixDQUZUO0FBQUE7QUFBQSxNQUV0QkksV0FGc0I7QUFBQSxNQUVUQyxjQUZTOztBQUFBLG1CQUd1Qkwsc0RBQVEsQ0FBQyxLQUFELENBSC9CO0FBQUEsTUFHdEJNLGtCQUhzQjtBQUFBLE1BR0ZDLHFCQUhFOztBQUk3QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBSjZCLHNCQUtKRCxNQUFNLENBQUNFLEtBTEg7QUFBQSxNQUtyQkMsR0FMcUIsaUJBS3JCQSxHQUxxQjtBQUFBLE1BS2hCQyxPQUxnQixpQkFLaEJBLE9BTGdCO0FBTzdCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDN0NSLDJCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDRDtBQUNGLEdBSlEsQ0FBVDtBQU1BLFNBQ0UsbUVBQ0UsTUFBQyw4Q0FBRCxDQUNFO0FBREY7QUFFRSxrQkFBYyxFQUFFRixjQUZsQjtBQUdFLGVBQVcsRUFBRUQsV0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRyxDQUFDRSxrQkFBRCxJQUNDLE1BQUMsbURBQUQ7QUFBWSx5QkFBcUIsRUFBRUMscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURGO0FBWUQ7O0dBekJ1QlIsSTtVQUlQVSxxRDs7O0tBSk9WLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvamVjdE5hbWUgZnJvbSAnLi9wcm9qZWN0LW5hbWUnO1xuaW1wb3J0IERpc2NsYWltZXIgZnJvbSAnLi9kaXNjbGFpbWVyJztcbmltcG9ydCBCb2FyZCBmcm9tICcuL2JvYXJkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgW3ZpZXcsIHNldFZpZXddID0gdXNlU3RhdGUoJ2JvYXJkJyBhcyBzdHJpbmcpO1xuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCcnIGFzIGFueSk7XG4gIGNvbnN0IFtpc0FjY2VwdERpc2NsYWltZXIsIHNldElzQWNjZXB0RGlzY2xhaW1lcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IF9pZCwgcHJvamVjdCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbWVnYWthbmJhbmFjY2VwdCcpKSB7XG4gICAgICBzZXRJc0FjY2VwdERpc2NsYWltZXIodHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Qm9hcmRcbiAgICAgICAgLy8gc2V0Vmlldz17c2V0Vmlld31cbiAgICAgICAgc2V0UHJvamVjdE5hbWU9e3NldFByb2plY3ROYW1lfVxuICAgICAgICBwcm9qZWN0TmFtZT17cHJvamVjdE5hbWV9XG4gICAgICAvPlxuICAgICAgeyFpc0FjY2VwdERpc2NsYWltZXIgJiYgKFxuICAgICAgICA8RGlzY2xhaW1lciBzZXRJc0FjY2VwdERpc2NsYWltZXI9e3NldElzQWNjZXB0RGlzY2xhaW1lcn0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ }),

/***/ "./components/project-name.tsx":
false,

/***/ "./node_modules/random-words/index.js":
false

})