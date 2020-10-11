webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./components/main.tsx":
/*!*****************************!*\
  !*** ./components/main.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Main; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _disclaimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disclaimer */ \"./components/disclaimer.tsx\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board */ \"./components/board.tsx\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/main.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nfunction Main(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.projectName),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      projectName = _React$useState2[0],\n      setProjectName = _React$useState2[1];\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isAcceptDisclaimer = _useState[0],\n      setIsAcceptDisclaimer = _useState[1];\n\n  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_4__[\"useSnackbar\"])(),\n      enqueueSnackbar = _useSnackbar.enqueueSnackbar;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (localStorage.getItem('omegakanbanaccept')) {\n      setIsAcceptDisclaimer(true);\n    }\n  });\n\n  var handleSnackbar = function handleSnackbar(message, variant) {\n    enqueueSnackbar(message, {\n      variant: variant\n    });\n  };\n\n  var changeProjectName = function changeProjectName(project) {\n    fetch(\"/api/update-project-name\", {\n      method: 'PATCH',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        _id: props._id,\n        project: project\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {} else {\n        handleSnackbar(\"Failed to update a project name\", 'error');\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while updating a project name:\".concat(err.message));\n      handleSnackbar(\"Failed to update a project name\", 'error');\n    });\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_board__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    _id: props._id,\n    changeProjectName: changeProjectName,\n    projectName: projectName,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }), !isAcceptDisclaimer && __jsx(_disclaimer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    setIsAcceptDisclaimer: setIsAcceptDisclaimer,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(Main, \"Uk7zAIueEl/zPJ88Pq3pQgUGAl0=\", false, function () {\n  return [notistack__WEBPACK_IMPORTED_MODULE_4__[\"useSnackbar\"], next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Main;\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLnRzeD84NzVjIl0sIm5hbWVzIjpbIk1haW4iLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiaXNBY2NlcHREaXNjbGFpbWVyIiwic2V0SXNBY2NlcHREaXNjbGFpbWVyIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaGFuZGxlU25hY2tiYXIiLCJtZXNzYWdlIiwidmFyaWFudCIsImNoYW5nZVByb2plY3ROYW1lIiwicHJvamVjdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiX2lkIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic3VjY2VzcyIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBb0M7QUFBQTs7QUFBQSx3QkFDWEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlRixLQUFLLENBQUNHLFdBQXJCLENBRFc7QUFBQTtBQUFBLE1BQzFDQSxXQUQwQztBQUFBLE1BQzdCQyxjQUQ2Qjs7QUFBQSxrQkFFR0Ysc0RBQVEsQ0FBQyxLQUFELENBRlg7QUFBQSxNQUUxQ0csa0JBRjBDO0FBQUEsTUFFdEJDLHFCQUZzQjs7QUFBQSxxQkFHckJDLDZEQUFXLEVBSFU7QUFBQSxNQUd6Q0MsZUFIeUMsZ0JBR3pDQSxlQUh5Qzs7QUFJakQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsbUJBQXJCLENBQUosRUFBK0M7QUFDN0NQLDJCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDRDtBQUNGLEdBSlEsQ0FBVDs7QUFNQSxNQUFNUSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE9BQUQsRUFBa0JDLE9BQWxCLEVBQTJDO0FBQ2hFUixtQkFBZSxDQUFDTyxPQUFELEVBQVU7QUFBRUMsYUFBTyxFQUFQQTtBQUFGLEtBQVYsQ0FBZjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxPQUFELEVBQXFCO0FBQzdDQyxTQUFLLDZCQUE2QjtBQUNoQ0MsWUFBTSxFQUFFLE9BRHdCO0FBRWhDQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVCxPQUZ1QjtBQUtoQ0MsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsV0FBRyxFQUFFekIsS0FBSyxDQUFDeUIsR0FEUTtBQUVuQlAsZUFBTyxFQUFQQTtBQUZtQixPQUFmO0FBTDBCLEtBQTdCLENBQUwsQ0FVR1EsSUFWSCxDQVVRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBVlIsRUFXR0YsSUFYSCxDQVdRLFVBQUNHLElBQUQsRUFBZ0M7QUFDcEMsVUFBSUEsSUFBSSxDQUFDQyxPQUFULEVBQWtCLENBQ2pCLENBREQsTUFDTztBQUNMaEIsc0JBQWMsb0NBQW9DLE9BQXBDLENBQWQ7QUFDRDtBQUNGLEtBaEJILFdBaUJTLFVBQUNpQixHQUFELEVBQVM7QUFDZEMsYUFBTyxDQUFDQyxLQUFSLGtFQUM0REYsR0FBRyxDQUFDaEIsT0FEaEU7QUFHQUQsb0JBQWMsb0NBQW9DLE9BQXBDLENBQWQ7QUFDRCxLQXRCSDtBQXVCRCxHQXhCRDs7QUEwQkEsU0FDRSxtRUFDRSxNQUFDLDhDQUFEO0FBQ0UsT0FBRyxFQUFFZCxLQUFLLENBQUN5QixHQURiO0FBRUUscUJBQWlCLEVBQUVSLGlCQUZyQjtBQUdFLGVBQVcsRUFBRWQsV0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFNRyxDQUFDRSxrQkFBRCxJQUNDLE1BQUMsbURBQUQ7QUFBWSx5QkFBcUIsRUFBRUMscUJBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixDQURGO0FBWUQ7O0dBdER1QlAsSTtVQUdNUSxxRCxFQUNiRyxxRDs7O0tBSk9YLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuL2Rpc2NsYWltZXInO1xuaW1wb3J0IEJvYXJkIGZyb20gJy4vYm9hcmQnO1xuaW1wb3J0IHsgVmFyaWFudFR5cGUsIHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW50ZXJmYWNlIGlQcm9qZWN0UHJvcHMge1xuICBfaWQ6IHN0cmluZztcbiAgcHJvamVjdE5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbihwcm9wczogaVByb2plY3RQcm9wcykge1xuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLnByb2plY3ROYW1lKTtcbiAgY29uc3QgW2lzQWNjZXB0RGlzY2xhaW1lciwgc2V0SXNBY2NlcHREaXNjbGFpbWVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvbWVnYWthbmJhbmFjY2VwdCcpKSB7XG4gICAgICBzZXRJc0FjY2VwdERpc2NsYWltZXIodHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTbmFja2JhciA9IChtZXNzYWdlOiBzdHJpbmcsIHZhcmlhbnQ6IFZhcmlhbnRUeXBlKSA9PiB7XG4gICAgZW5xdWV1ZVNuYWNrYmFyKG1lc3NhZ2UsIHsgdmFyaWFudCB9KTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VQcm9qZWN0TmFtZSA9IChwcm9qZWN0OiBzdHJpbmcpID0+IHtcbiAgICBmZXRjaChgL2FwaS91cGRhdGUtcHJvamVjdC1uYW1lYCwge1xuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgX2lkOiBwcm9wcy5faWQsXG4gICAgICAgIHByb2plY3QsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiB7IHN1Y2Nlc3M6IGJvb2xlYW4gfSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlU25hY2tiYXIoYEZhaWxlZCB0byB1cGRhdGUgYSBwcm9qZWN0IG5hbWVgLCAnZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgYFNvbWV0aGluZyB3cm9uZyBoYXBwZW5lZCB3aGlsZSB1cGRhdGluZyBhIHByb2plY3QgbmFtZToke2Vyci5tZXNzYWdlfWBcbiAgICAgICAgKTtcbiAgICAgICAgaGFuZGxlU25hY2tiYXIoYEZhaWxlZCB0byB1cGRhdGUgYSBwcm9qZWN0IG5hbWVgLCAnZXJyb3InKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCb2FyZFxuICAgICAgICBfaWQ9e3Byb3BzLl9pZH1cbiAgICAgICAgY2hhbmdlUHJvamVjdE5hbWU9e2NoYW5nZVByb2plY3ROYW1lfVxuICAgICAgICBwcm9qZWN0TmFtZT17cHJvamVjdE5hbWV9XG4gICAgICAvPlxuICAgICAgeyFpc0FjY2VwdERpc2NsYWltZXIgJiYgKFxuICAgICAgICA8RGlzY2xhaW1lciBzZXRJc0FjY2VwdERpc2NsYWltZXI9e3NldElzQWNjZXB0RGlzY2xhaW1lcn0gLz5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/main.tsx\n");

/***/ })

})