webpackHotUpdate_N_E("pages/index",{

/***/ "./components/archive.tsx":
/*!********************************!*\
  !*** ./components/archive.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-body */ \"./components/card-body.tsx\");\n/* harmony import */ var _card_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-head */ \"./components/card-head.tsx\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/archive.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction Archive() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"card-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"display-flex archive h-top bg-grey-2 cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"icon-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 11\n    }\n  }, __jsx(\"i\", {\n    className: \"fas fa-archive\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 11\n    }\n  }, \"Archive\")), __jsx(\"div\", {\n    className: \"bg-grey-3 card-body flex-center flex-column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"column\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"card-box bg-grey-\".concat(props.index % 2),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }\n  }, __jsx(_card_head__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    column: props.column,\n    index: props.index,\n    updateSectionTitle: props.updateSectionTitle,\n    deleteColumn: props.deleteColumn,\n    dragHandleProps: provided.dragHandleProps,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 15\n    }\n  }), __jsx(_card_body__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    reorder: props.reorder,\n    column: props.column,\n    index: props.index,\n    setOpen: props.setOpen,\n    setCardForOpen: props.setCardForOpen,\n    onDragEnd: props.onDragEnd,\n    addCard: props.addCard,\n    convertDate: props.convertDate,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }))))));\n}\n\n_c = Archive;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Archive);\n\nvar _c;\n\n$RefreshReg$(_c, \"Archive\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hcmNoaXZlLnRzeD9mYWU4Il0sIm5hbWVzIjpbIkFyY2hpdmUiLCJwcm9wcyIsImluZGV4IiwiY29sdW1uIiwidXBkYXRlU2VjdGlvblRpdGxlIiwiZGVsZXRlQ29sdW1uIiwicHJvdmlkZWQiLCJkcmFnSGFuZGxlUHJvcHMiLCJyZW9yZGVyIiwic2V0T3BlbiIsInNldENhcmRGb3JPcGVuIiwib25EcmFnRW5kIiwiYWRkQ2FyZCIsImNvbnZlcnREYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE9BQVQsR0FBbUI7QUFDakIsU0FDRSxtRUFDRTtBQUFLLGFBQVMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLHVEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixDQURGLEVBT0U7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyw2QkFBc0JDLEtBQUssQ0FBQ0MsS0FBTixHQUFjLENBQXBDLENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFDRSxVQUFNLEVBQUVELEtBQUssQ0FBQ0UsTUFEaEI7QUFFRSxTQUFLLEVBQUVGLEtBQUssQ0FBQ0MsS0FGZjtBQUdFLHNCQUFrQixFQUFFRCxLQUFLLENBQUNHLGtCQUg1QjtBQUlFLGdCQUFZLEVBQUVILEtBQUssQ0FBQ0ksWUFKdEI7QUFLRSxtQkFBZSxFQUFFQyxRQUFRLENBQUNDLGVBTDVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsa0RBQUQ7QUFDRSxXQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FEakI7QUFFRSxVQUFNLEVBQUVQLEtBQUssQ0FBQ0UsTUFGaEI7QUFHRSxTQUFLLEVBQUVGLEtBQUssQ0FBQ0MsS0FIZjtBQUlFLFdBQU8sRUFBRUQsS0FBSyxDQUFDUSxPQUpqQjtBQUtFLGtCQUFjLEVBQUVSLEtBQUssQ0FBQ1MsY0FMeEI7QUFNRSxhQUFTLEVBQUVULEtBQUssQ0FBQ1UsU0FObkI7QUFPRSxXQUFPLEVBQUVWLEtBQUssQ0FBQ1csT0FQakI7QUFRRSxlQUFXLEVBQUVYLEtBQUssQ0FBQ1ksV0FSckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLENBREYsQ0FERixDQVBGLENBREYsQ0FERjtBQW1DRDs7S0FwQ1FiLE87QUFxQ01BLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hcmNoaXZlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSAnLi9jYXJkLWJvZHknO1xuaW1wb3J0IENhcmRIZWFkIGZyb20gJy4vY2FyZC1oZWFkJztcblxuZnVuY3Rpb24gQXJjaGl2ZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkLWJveGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGRpc3BsYXktZmxleCBhcmNoaXZlIGgtdG9wIGJnLWdyZXktMiBjdXJzb3ItcG9pbnRlcmB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1ib3hcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1hcmNoaXZlXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+QXJjaGl2ZTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmV5LTMgY2FyZC1ib2R5IGZsZXgtY2VudGVyIGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZC1ib3ggYmctZ3JleS0ke3Byb3BzLmluZGV4ICUgMn1gfT5cbiAgICAgICAgICAgICAgPENhcmRIZWFkXG4gICAgICAgICAgICAgICAgY29sdW1uPXtwcm9wcy5jb2x1bW59XG4gICAgICAgICAgICAgICAgaW5kZXg9e3Byb3BzLmluZGV4fVxuICAgICAgICAgICAgICAgIHVwZGF0ZVNlY3Rpb25UaXRsZT17cHJvcHMudXBkYXRlU2VjdGlvblRpdGxlfVxuICAgICAgICAgICAgICAgIGRlbGV0ZUNvbHVtbj17cHJvcHMuZGVsZXRlQ29sdW1ufVxuICAgICAgICAgICAgICAgIGRyYWdIYW5kbGVQcm9wcz17cHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q2FyZEJvZHlcbiAgICAgICAgICAgICAgICByZW9yZGVyPXtwcm9wcy5yZW9yZGVyfVxuICAgICAgICAgICAgICAgIGNvbHVtbj17cHJvcHMuY29sdW1ufVxuICAgICAgICAgICAgICAgIGluZGV4PXtwcm9wcy5pbmRleH1cbiAgICAgICAgICAgICAgICBzZXRPcGVuPXtwcm9wcy5zZXRPcGVufVxuICAgICAgICAgICAgICAgIHNldENhcmRGb3JPcGVuPXtwcm9wcy5zZXRDYXJkRm9yT3Blbn1cbiAgICAgICAgICAgICAgICBvbkRyYWdFbmQ9e3Byb3BzLm9uRHJhZ0VuZH1cbiAgICAgICAgICAgICAgICBhZGRDYXJkPXtwcm9wcy5hZGRDYXJkfVxuICAgICAgICAgICAgICAgIGNvbnZlcnREYXRlPXtwcm9wcy5jb252ZXJ0RGF0ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQXJjaGl2ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/archive.tsx\n");

/***/ })

})