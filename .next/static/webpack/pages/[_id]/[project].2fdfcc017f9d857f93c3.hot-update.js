webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./pages/[_id]/[project].tsx":
/*!***********************************!*\
  !*** ./pages/[_id]/[project].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Index; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/main */ \"./components/main.tsx\");\n/* harmony import */ var _components_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/index-page */ \"./components/index-page.tsx\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/dist/notistack.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ \"./node_modules/@material-ui/core/esm/CircularProgress/index.js\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/pages/[_id]/[project].tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      isValid = _useState[0],\n      setIsValid = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      message = _useState2[0],\n      setMessage = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var _router$query = router.query,\n      _id = _router$query._id,\n      project = _router$query.project;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (_id) getRouter(_id);\n  }, [_id]);\n\n  var getRouter = function getRouter(_id, project) {\n    fetch(\"/api/get-router\", {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        _id: _id,\n        project: project\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      if (data.success) {\n        setIsValid(true);\n      } else {\n        setTimeout(function () {\n          router.replace('/');\n        }, 500);\n        setMessage('URL is not valid.');\n      }\n    })[\"catch\"](function (err) {\n      console.error(\"Something wrong happened while getting a route:\".concat(err.message));\n    });\n  };\n\n  return __jsx(notistack__WEBPACK_IMPORTED_MODULE_3__[\"SnackbarProvider\"], {\n    maxSnack: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, __jsx(_components_index_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }), isValid ? _id && project ? __jsx(_components_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    _id: _id,\n    projectName: project,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }) : __jsx(\"div\", {\n    style: {\n      backgroundColor: 'rgb(95, 188, 190)',\n      width: '100%',\n      height: '100vh',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    style: {\n      backgroundColor: 'rgb(95, 188, 190)',\n      width: '100%',\n      height: '100vh',\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, message)));\n}\n\n_s(Index, \"/jXO/7n7r8Ocml9F6+St7+sFvi4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW19pZF0vW3Byb2plY3RdLnRzeD9jMWE1Il0sIm5hbWVzIjpbIkluZGV4IiwidXNlU3RhdGUiLCJpc1ZhbGlkIiwic2V0SXNWYWxpZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJfaWQiLCJwcm9qZWN0IiwidXNlRWZmZWN0IiwiZ2V0Um91dGVyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsInJlcGxhY2UiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDQUMsc0RBQVEsQ0FBQyxLQUFELENBRFI7QUFBQSxNQUN2QkMsT0FEdUI7QUFBQSxNQUNkQyxVQURjOztBQUFBLG1CQUVBRixzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRXZCRyxPQUZ1QjtBQUFBLE1BRWRDLFVBRmM7O0FBRzlCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFIOEIsc0JBSUxELE1BQU0sQ0FBQ0UsS0FKRjtBQUFBLE1BSXRCQyxHQUpzQixpQkFJdEJBLEdBSnNCO0FBQUEsTUFJakJDLE9BSmlCLGlCQUlqQkEsT0FKaUI7QUFNOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlGLEdBQUosRUFBU0csU0FBUyxDQUFDSCxHQUFELENBQVQ7QUFDVixHQUZRLEVBRU4sQ0FBQ0EsR0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsR0FBRCxFQUFjQyxPQUFkLEVBQWtDO0FBQ2xERyxTQUFLLG9CQUFvQjtBQUN2QkMsWUFBTSxFQUFFLE1BRGU7QUFFdkJDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmM7QUFLdkJDLFVBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJULFdBQUcsRUFBSEEsR0FEbUI7QUFFbkJDLGVBQU8sRUFBUEE7QUFGbUIsT0FBZjtBQUxpQixLQUFwQixDQUFMLENBVUdTLElBVkgsQ0FVUSxVQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxLQVZSLEVBV0dGLElBWEgsQ0FXUSxVQUFDRyxJQUFELEVBQXVCO0FBQzNCLFVBQUlBLElBQUksQ0FBQ0MsT0FBVCxFQUFrQjtBQUNoQnBCLGtCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsT0FGRCxNQUVPO0FBQ0xxQixrQkFBVSxDQUFDLFlBQU07QUFDZmxCLGdCQUFNLENBQUNtQixPQUFQLENBQWUsR0FBZjtBQUNELFNBRlMsRUFFUCxHQUZPLENBQVY7QUFHQXBCLGtCQUFVLENBQUMsbUJBQUQsQ0FBVjtBQUNEO0FBQ0YsS0FwQkgsV0FxQlMsVUFBQ3FCLEdBQUQsRUFBUztBQUNkQyxhQUFPLENBQUNDLEtBQVIsMERBQ29ERixHQUFHLENBQUN0QixPQUR4RDtBQUdELEtBekJIO0FBMEJELEdBM0JEOztBQTZCQSxTQUNFLE1BQUMsMERBQUQ7QUFBa0IsWUFBUSxFQUFFLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRixPQUFPLEdBQ05PLEdBQUcsSUFBSUMsT0FBUCxHQUNFLE1BQUMsd0RBQUQ7QUFBTSxPQUFHLEVBQUVELEdBQVg7QUFBMEIsZUFBVyxFQUFFQyxPQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsR0FHRTtBQUNFLFNBQUssRUFBRTtBQUNMbUIscUJBQWUsRUFBRSxtQkFEWjtBQUVMQyxXQUFLLEVBQUUsTUFGRjtBQUdMQyxZQUFNLEVBQUUsT0FISDtBQUlMQyxhQUFPLEVBQUUsTUFKSjtBQUtMQyxtQkFBYSxFQUFFLFFBTFY7QUFNTEMsZ0JBQVUsRUFBRSxRQU5QO0FBT0xDLG9CQUFjLEVBQUU7QUFQWCxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FXRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQUpJLEdBbUJOO0FBQ0UsU0FBSyxFQUFFO0FBQ0xOLHFCQUFlLEVBQUUsbUJBRFo7QUFFTEMsV0FBSyxFQUFFLE1BRkY7QUFHTEMsWUFBTSxFQUFFLE9BSEg7QUFJTEMsYUFBTyxFQUFFLE1BSko7QUFLTEMsbUJBQWEsRUFBRSxRQUxWO0FBTUxDLGdCQUFVLEVBQUUsUUFOUDtBQU9MQyxvQkFBYyxFQUFFO0FBUFgsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNL0IsT0FBTixDQVhGLENBckJKLENBREY7QUFzQ0Q7O0dBN0V1QkosSztVQUdQTyxxRDs7O0tBSE9QLEsiLCJmaWxlIjoiLi9wYWdlcy9bX2lkXS9bcHJvamVjdF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFpbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL21haW4nO1xuaW1wb3J0IEluZGV4UGFnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luZGV4LXBhZ2UnO1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCBJUm91dGVyRGF0YSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ludGVyZmFjZXMvaXJvdXRlcmRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgW2lzVmFsaWQsIHNldElzVmFsaWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IF9pZCwgcHJvamVjdCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKF9pZCkgZ2V0Um91dGVyKF9pZCBhcyBzdHJpbmcpO1xuICB9LCBbX2lkXSk7XG5cbiAgY29uc3QgZ2V0Um91dGVyID0gKF9pZDogc3RyaW5nLCBwcm9qZWN0OiBzdHJpbmcpID0+IHtcbiAgICBmZXRjaChgL2FwaS9nZXQtcm91dGVyYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBfaWQsXG4gICAgICAgIHByb2plY3QsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhOiBJUm91dGVyRGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5zdWNjZXNzKSB7XG4gICAgICAgICAgc2V0SXNWYWxpZCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XG4gICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICBzZXRNZXNzYWdlKCdVUkwgaXMgbm90IHZhbGlkLicpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgU29tZXRoaW5nIHdyb25nIGhhcHBlbmVkIHdoaWxlIGdldHRpbmcgYSByb3V0ZToke2Vyci5tZXNzYWdlfWBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFNuYWNrYmFyUHJvdmlkZXIgbWF4U25hY2s9ezN9PlxuICAgICAgPEluZGV4UGFnZSAvPlxuICAgICAge2lzVmFsaWQgPyAoXG4gICAgICAgIF9pZCAmJiBwcm9qZWN0ID8gKFxuICAgICAgICAgIDxNYWluIF9pZD17X2lkIGFzIHN0cmluZ30gcHJvamVjdE5hbWU9e3Byb2plY3QgYXMgc3RyaW5nfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig5NSwgMTg4LCAxOTApJyxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYig5NSwgMTg4LCAxOTApJyxcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2PnttZXNzYWdlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[_id]/[project].tsx\n");

/***/ })

})