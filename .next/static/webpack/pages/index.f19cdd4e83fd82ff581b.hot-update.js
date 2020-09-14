webpackHotUpdate_N_E("pages/index",{

/***/ "./components/card-detail-head.tsx":
/*!*****************************************!*\
  !*** ./components/card-detail-head.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/card-detail-head.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction CardDetailHead(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.currentCard.cardTitle),\n      cardDetailTitle = _useState[0],\n      setCardDetailTitle = _useState[1];\n\n  var handleKeyDown = function handleKeyDown(e) {\n    if (e.key === 'Enter') {\n      props.updateCardTitle(props.currentColumn.id, props.currentCard.id, cardDetailTitle);\n    }\n  };\n\n  return __jsx(\"div\", {\n    id: \"transition-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    id: props.currentCard.id,\n    disabled: props.currentCard.isArchived,\n    className: \"card-deatil-title border-none\",\n    type: \"text\",\n    onChange: function onChange(e) {\n      return setCardDetailTitle(e.target.value);\n    },\n    value: cardDetailTitle,\n    onKeyDown: function onKeyDown(e) {\n      return handleKeyDown(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(CardDetailHead, \"eZYQlU5Xfu/umu2vgpopBT3jYVo=\");\n\n_c = CardDetailHead;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardDetailHead);\n\nvar _c;\n\n$RefreshReg$(_c, \"CardDetailHead\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLWRldGFpbC1oZWFkLnRzeD81YjhhIl0sIm5hbWVzIjpbIkNhcmREZXRhaWxIZWFkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRDYXJkIiwiY2FyZFRpdGxlIiwiY2FyZERldGFpbFRpdGxlIiwic2V0Q2FyZERldGFpbFRpdGxlIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJ1cGRhdGVDYXJkVGl0bGUiLCJjdXJyZW50Q29sdW1uIiwiaWQiLCJpc0FyY2hpdmVkIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUFvQztBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUNwREQsS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxTQURrQyxDQURwQjtBQUFBLE1BQzNCQyxlQUQyQjtBQUFBLE1BQ1ZDLGtCQURVOztBQUtsQyxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBWTtBQUNoQyxRQUFJQSxDQUFDLENBQUNDLEdBQUYsS0FBVSxPQUFkLEVBQXVCO0FBQ3JCUixXQUFLLENBQUNTLGVBQU4sQ0FDRVQsS0FBSyxDQUFDVSxhQUFOLENBQW9CQyxFQUR0QixFQUVFWCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JTLEVBRnBCLEVBR0VQLGVBSEY7QUFLRDtBQUNGLEdBUkQ7O0FBU0EsU0FDRTtBQUFLLE1BQUUsRUFBQyx3QkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUVKLEtBQUssQ0FBQ0UsV0FBTixDQUFrQlMsRUFEeEI7QUFFRSxZQUFRLEVBQUVYLEtBQUssQ0FBQ0UsV0FBTixDQUFrQlUsVUFGOUI7QUFHRSxhQUFTLEVBQUMsK0JBSFo7QUFJRSxRQUFJLEVBQUMsTUFKUDtBQUtFLFlBQVEsRUFBRSxrQkFBQ0wsQ0FBRDtBQUFBLGFBQU9GLGtCQUFrQixDQUFDRSxDQUFDLENBQUNNLE1BQUYsQ0FBU0MsS0FBVixDQUF6QjtBQUFBLEtBTFo7QUFNRSxTQUFLLEVBQUVWLGVBTlQ7QUFPRSxhQUFTLEVBQUUsbUJBQUNHLENBQUQ7QUFBQSxhQUFPRCxhQUFhLENBQUNDLENBQUQsQ0FBcEI7QUFBQSxLQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBYUQ7O0dBM0JRUixjOztLQUFBQSxjO0FBNEJNQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2FyZC1kZXRhaWwtaGVhZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIENhcmREZXRhaWxIZWFkKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2NhcmREZXRhaWxUaXRsZSwgc2V0Q2FyZERldGFpbFRpdGxlXSA9IHVzZVN0YXRlKFxuICAgIHByb3BzLmN1cnJlbnRDYXJkLmNhcmRUaXRsZVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBwcm9wcy51cGRhdGVDYXJkVGl0bGUoXG4gICAgICAgIHByb3BzLmN1cnJlbnRDb2x1bW4uaWQsXG4gICAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmlkLFxuICAgICAgICBjYXJkRGV0YWlsVGl0bGVcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJ0cmFuc2l0aW9uLW1vZGFsLXRpdGxlXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgaWQ9e3Byb3BzLmN1cnJlbnRDYXJkLmlkfVxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuY3VycmVudENhcmQuaXNBcmNoaXZlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1kZWF0aWwtdGl0bGUgYm9yZGVyLW5vbmVcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2FyZERldGFpbFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgdmFsdWU9e2NhcmREZXRhaWxUaXRsZX1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlS2V5RG93bihlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkRGV0YWlsSGVhZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card-detail-head.tsx\n");

/***/ })

})