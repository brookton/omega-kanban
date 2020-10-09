webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./components/card-detail-head.tsx":
/*!*****************************************!*\
  !*** ./components/card-detail-head.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/card-detail-head.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction CardDetailHead(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(props.currentCard.cardTitle),\n      cardDetailTitle = _useState[0],\n      setCardDetailTitle = _useState[1];\n\n  var handleKeyDown = function handleKeyDown(e) {\n    if (e.key === 'Enter') {\n      var newCard = {\n        _id: props.currentCard._id,\n        cardTitle: cardDetailTitle,\n        note: undefined,\n        isCardCompleted: undefined,\n        isArchived: undefined,\n        dueDate: undefined\n      };\n      props.updateCard(props.currentColumn._id, newCard); // props.updateCardTitle(\n      //   props.currentColumn._id,\n      //   props.currentCard._id,\n      //   cardDetailTitle\n      // );\n    }\n  };\n\n  return __jsx(\"div\", {\n    id: \"transition-modal-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    id: props.currentCard._id,\n    disabled: props.currentCard.isArchived,\n    className: \"card-deatil-title border-none\",\n    type: \"text\",\n    onChange: function onChange(e) {\n      return setCardDetailTitle(e.target.value);\n    },\n    value: cardDetailTitle,\n    onKeyDown: function onKeyDown(e) {\n      return handleKeyDown(e);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }));\n}\n\n_s(CardDetailHead, \"eZYQlU5Xfu/umu2vgpopBT3jYVo=\");\n\n_c = CardDetailHead;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardDetailHead);\n\nvar _c;\n\n$RefreshReg$(_c, \"CardDetailHead\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJkLWRldGFpbC1oZWFkLnRzeD81YjhhIl0sIm5hbWVzIjpbIkNhcmREZXRhaWxIZWFkIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbnRDYXJkIiwiY2FyZFRpdGxlIiwiY2FyZERldGFpbFRpdGxlIiwic2V0Q2FyZERldGFpbFRpdGxlIiwiaGFuZGxlS2V5RG93biIsImUiLCJrZXkiLCJuZXdDYXJkIiwiX2lkIiwibm90ZSIsInVuZGVmaW5lZCIsImlzQ2FyZENvbXBsZXRlZCIsImlzQXJjaGl2ZWQiLCJkdWVEYXRlIiwidXBkYXRlQ2FyZCIsImN1cnJlbnRDb2x1bW4iLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQVFBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQXFEO0FBQUE7O0FBQUEsa0JBQ0xDLHNEQUFRLENBQ3BERCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLFNBRGtDLENBREg7QUFBQSxNQUM1Q0MsZUFENEM7QUFBQSxNQUMzQkMsa0JBRDJCOztBQUtuRCxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLENBQUQsRUFBc0I7QUFDMUMsUUFBSUEsQ0FBQyxDQUFDQyxHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQixVQUFNQyxPQUFPLEdBQUc7QUFDZEMsV0FBRyxFQUFFVixLQUFLLENBQUNFLFdBQU4sQ0FBa0JRLEdBRFQ7QUFFZFAsaUJBQVMsRUFBRUMsZUFGRztBQUdkTyxZQUFJLEVBQUVDLFNBSFE7QUFJZEMsdUJBQWUsRUFBRUQsU0FKSDtBQUtkRSxrQkFBVSxFQUFFRixTQUxFO0FBTWRHLGVBQU8sRUFBRUg7QUFOSyxPQUFoQjtBQVFBWixXQUFLLENBQUNnQixVQUFOLENBQWlCaEIsS0FBSyxDQUFDaUIsYUFBTixDQUFvQlAsR0FBckMsRUFBMENELE9BQTFDLEVBVHFCLENBVXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNGLEdBakJEOztBQWtCQSxTQUNFO0FBQUssTUFBRSxFQUFDLHdCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE1BQUUsRUFBRVQsS0FBSyxDQUFDRSxXQUFOLENBQWtCUSxHQUR4QjtBQUVFLFlBQVEsRUFBRVYsS0FBSyxDQUFDRSxXQUFOLENBQWtCWSxVQUY5QjtBQUdFLGFBQVMsRUFBQywrQkFIWjtBQUlFLFFBQUksRUFBQyxNQUpQO0FBS0UsWUFBUSxFQUFFLGtCQUFDUCxDQUFEO0FBQUEsYUFBT0Ysa0JBQWtCLENBQUNFLENBQUMsQ0FBQ1csTUFBRixDQUFTQyxLQUFWLENBQXpCO0FBQUEsS0FMWjtBQU1FLFNBQUssRUFBRWYsZUFOVDtBQU9FLGFBQVMsRUFBRSxtQkFBQ0csQ0FBRDtBQUFBLGFBQXNCRCxhQUFhLENBQUNDLENBQUQsQ0FBbkM7QUFBQSxLQVBiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGO0FBYUQ7O0dBcENRUixjOztLQUFBQSxjO0FBcUNNQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2FyZC1kZXRhaWwtaGVhZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIEtleWJvYXJkRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSU5ld0NhcmQgZnJvbSAnLi9pbnRlcmZhY2VzL2luZXdjYXJkJztcbmltcG9ydCBJQ29tbW9uUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ljb21tb25wcm9wcyc7XG5cbmludGVyZmFjZSBJQ2FyZERldGFpbEhlYWRQcm9wcyBleHRlbmRzIElDb21tb25Qcm9wcyB7XG4gIHVwZGF0ZUNhcmQ6IChjb2x1bW5JZDogc3RyaW5nLCBjYXJkOiBJTmV3Q2FyZCkgPT4gdm9pZDtcbn1cblxuZnVuY3Rpb24gQ2FyZERldGFpbEhlYWQocHJvcHM6IElDYXJkRGV0YWlsSGVhZFByb3BzKSB7XG4gIGNvbnN0IFtjYXJkRGV0YWlsVGl0bGUsIHNldENhcmREZXRhaWxUaXRsZV0gPSB1c2VTdGF0ZShcbiAgICBwcm9wcy5jdXJyZW50Q2FyZC5jYXJkVGl0bGVcbiAgKTtcblxuICBjb25zdCBoYW5kbGVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnN0IG5ld0NhcmQgPSB7XG4gICAgICAgIF9pZDogcHJvcHMuY3VycmVudENhcmQuX2lkLFxuICAgICAgICBjYXJkVGl0bGU6IGNhcmREZXRhaWxUaXRsZSxcbiAgICAgICAgbm90ZTogdW5kZWZpbmVkLFxuICAgICAgICBpc0NhcmRDb21wbGV0ZWQ6IHVuZGVmaW5lZCxcbiAgICAgICAgaXNBcmNoaXZlZDogdW5kZWZpbmVkLFxuICAgICAgICBkdWVEYXRlOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgICAgcHJvcHMudXBkYXRlQ2FyZChwcm9wcy5jdXJyZW50Q29sdW1uLl9pZCwgbmV3Q2FyZCk7XG4gICAgICAvLyBwcm9wcy51cGRhdGVDYXJkVGl0bGUoXG4gICAgICAvLyAgIHByb3BzLmN1cnJlbnRDb2x1bW4uX2lkLFxuICAgICAgLy8gICBwcm9wcy5jdXJyZW50Q2FyZC5faWQsXG4gICAgICAvLyAgIGNhcmREZXRhaWxUaXRsZVxuICAgICAgLy8gKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cInRyYW5zaXRpb24tbW9kYWwtdGl0bGVcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD17cHJvcHMuY3VycmVudENhcmQuX2lkfVxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuY3VycmVudENhcmQuaXNBcmNoaXZlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwiY2FyZC1kZWF0aWwtdGl0bGUgYm9yZGVyLW5vbmVcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2FyZERldGFpbFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgdmFsdWU9e2NhcmREZXRhaWxUaXRsZX1cbiAgICAgICAgb25LZXlEb3duPXsoZTogS2V5Ym9hcmRFdmVudCkgPT4gaGFuZGxlS2V5RG93bihlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkRGV0YWlsSGVhZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/card-detail-head.tsx\n");

/***/ })

})