webpackHotUpdate_N_E("pages/index",{

/***/ "./components/checklist.tsx":
/*!**********************************!*\
  !*** ./components/checklist.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _checklistitem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklistitem */ \"./components/checklistitem.tsx\");\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/checklist.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Checklist(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      checklist = _useState[0],\n      setChecklist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      addChecklist = _useState2[0],\n      setAddChecklist = _useState2[1];\n\n  var handleSubmitChecklist = function handleSubmitChecklist(e) {\n    if (e.key === 'Enter') {\n      if (checklist.trim().length > 0) {\n        props.addChecklist(props.currentColumn.id, props.currentCard.id, checklist);\n      }\n\n      setChecklist('');\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: \"checklist-box\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card-deatil-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Checklist\"), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, props.currentCard && props.currentCard.checklists.map(function (checklist) {\n    return __jsx(\"div\", {\n      key: checklist.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }\n    }, __jsx(_checklistitem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      currentCard: props.currentCard,\n      currentColumn: props.currentColumn,\n      checklist: checklist,\n      updateChecklist: props.updateChecklist,\n      addActivity: props.addActivity,\n      columns: props.columns,\n      completeChecklist: props.completeChecklist,\n      deleteChecklist: props.deleteChecklist,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }));\n  })), addChecklist && __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  })), __jsx(\"input\", {\n    autoFocus: true,\n    value: checklist,\n    onBlur: function onBlur(e) {\n      if (e.target.value.trim().length === 0) setAddChecklist(false);\n    },\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleSubmitChecklist(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }))), !props.currentCard.isArchived && __jsx(\"div\", {\n    onClick: function onClick() {\n      return setAddChecklist(true);\n    },\n    className: \"card-deatil-checklist text-skyblue cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, \"+ Add Checklist Item\"));\n}\n\n_s(Checklist, \"IShQ1bDS8E7De+KmDEkS3PLr1dg=\");\n\n_c = Checklist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checklist);\n\nvar _c;\n\n$RefreshReg$(_c, \"Checklist\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja2xpc3QudHN4PzFkMjEiXSwibmFtZXMiOlsiQ2hlY2tsaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNoZWNrbGlzdCIsInNldENoZWNrbGlzdCIsImFkZENoZWNrbGlzdCIsInNldEFkZENoZWNrbGlzdCIsImhhbmRsZVN1Ym1pdENoZWNrbGlzdCIsImUiLCJrZXkiLCJ0cmltIiwibGVuZ3RoIiwiY3VycmVudENvbHVtbiIsImlkIiwiY3VycmVudENhcmQiLCJjaGVja2xpc3RzIiwibWFwIiwidXBkYXRlQ2hlY2tsaXN0IiwiYWRkQWN0aXZpdHkiLCJjb2x1bW5zIiwiY29tcGxldGVDaGVja2xpc3QiLCJkZWxldGVDaGVja2xpc3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImlzQXJjaGl2ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUErQjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ3RCQyxTQURzQjtBQUFBLE1BQ1hDLFlBRFc7O0FBQUEsbUJBRVdGLHNEQUFRLENBQUMsS0FBRCxDQUZuQjtBQUFBLE1BRXRCRyxZQUZzQjtBQUFBLE1BRVJDLGVBRlE7O0FBSTdCLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsQ0FBRCxFQUFZO0FBQ3hDLFFBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckIsVUFBSU4sU0FBUyxDQUFDTyxJQUFWLEdBQWlCQyxNQUFqQixHQUEwQixDQUE5QixFQUFpQztBQUMvQlYsYUFBSyxDQUFDSSxZQUFOLENBQ0VKLEtBQUssQ0FBQ1csYUFBTixDQUFvQkMsRUFEdEIsRUFFRVosS0FBSyxDQUFDYSxXQUFOLENBQWtCRCxFQUZwQixFQUdFVixTQUhGO0FBS0Q7O0FBQ0RDLGtCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0Q7QUFDRixHQVhEOztBQWFBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0gsS0FBSyxDQUFDYSxXQUFOLElBQ0NiLEtBQUssQ0FBQ2EsV0FBTixDQUFrQkMsVUFBbEIsQ0FBNkJDLEdBQTdCLENBQWlDLFVBQUNiLFNBQUQsRUFBb0I7QUFDbkQsV0FDRTtBQUFLLFNBQUcsRUFBRUEsU0FBUyxDQUFDVSxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRDtBQUNFLGlCQUFXLEVBQUVaLEtBQUssQ0FBQ2EsV0FEckI7QUFFRSxtQkFBYSxFQUFFYixLQUFLLENBQUNXLGFBRnZCO0FBR0UsZUFBUyxFQUFFVCxTQUhiO0FBSUUscUJBQWUsRUFBRUYsS0FBSyxDQUFDZ0IsZUFKekI7QUFLRSxpQkFBVyxFQUFFaEIsS0FBSyxDQUFDaUIsV0FMckI7QUFNRSxhQUFPLEVBQUVqQixLQUFLLENBQUNrQixPQU5qQjtBQU9FLHVCQUFpQixFQUFFbEIsS0FBSyxDQUFDbUIsaUJBUDNCO0FBUUUscUJBQWUsRUFBRW5CLEtBQUssQ0FBQ29CLGVBUnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGO0FBY0QsR0FmRCxDQUZKLENBRkYsRUFxQkdoQixZQUFZLElBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQ0UsYUFBUyxNQURYO0FBRUUsU0FBSyxFQUFFRixTQUZUO0FBR0UsVUFBTSxFQUFFLGdCQUFDSyxDQUFELEVBQVk7QUFDbEIsVUFBSUEsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQVQsQ0FBZWIsSUFBZixHQUFzQkMsTUFBdEIsS0FBaUMsQ0FBckMsRUFBd0NMLGVBQWUsQ0FBQyxLQUFELENBQWY7QUFDekMsS0FMSDtBQU1FLFlBQVEsRUFBRSxrQkFBQ0UsQ0FBRDtBQUFBLGFBQU9KLFlBQVksQ0FBQ0ksQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQSxLQU5aO0FBT0UsYUFBUyxFQUFFLG1CQUFDZixDQUFEO0FBQUEsYUFBT0QscUJBQXFCLENBQUNDLENBQUQsQ0FBNUI7QUFBQSxLQVBiO0FBUUUsYUFBUyxFQUFDLCtCQVJaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLENBdEJKLEVBd0NHLENBQUNQLEtBQUssQ0FBQ2EsV0FBTixDQUFrQlUsVUFBbkIsSUFDQztBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1sQixlQUFlLENBQUMsSUFBRCxDQUFyQjtBQUFBLEtBRFg7QUFFRSxhQUFTLEVBQUMsbURBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkF6Q0osQ0FERjtBQW1ERDs7R0FwRVFOLFM7O0tBQUFBLFM7QUFxRU1BLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jaGVja2xpc3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZWNrbGlzdEl0ZW0gZnJvbSAnLi9jaGVja2xpc3RpdGVtJztcblxuZnVuY3Rpb24gQ2hlY2tsaXN0KHByb3BzOiBhbnkpIHtcbiAgY29uc3QgW2NoZWNrbGlzdCwgc2V0Q2hlY2tsaXN0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2FkZENoZWNrbGlzdCwgc2V0QWRkQ2hlY2tsaXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXRDaGVja2xpc3QgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoY2hlY2tsaXN0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHByb3BzLmFkZENoZWNrbGlzdChcbiAgICAgICAgICBwcm9wcy5jdXJyZW50Q29sdW1uLmlkLFxuICAgICAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmlkLFxuICAgICAgICAgIGNoZWNrbGlzdFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc2V0Q2hlY2tsaXN0KCcnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1ib3hcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1kZWF0aWwtdGl0bGVcIj5DaGVja2xpc3Q8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtwcm9wcy5jdXJyZW50Q2FyZCAmJlxuICAgICAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmNoZWNrbGlzdHMubWFwKChjaGVja2xpc3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NoZWNrbGlzdC5pZH0+XG4gICAgICAgICAgICAgICAgPENoZWNrbGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJkPXtwcm9wcy5jdXJyZW50Q2FyZH1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2x1bW49e3Byb3BzLmN1cnJlbnRDb2x1bW59XG4gICAgICAgICAgICAgICAgICBjaGVja2xpc3Q9e2NoZWNrbGlzdH1cbiAgICAgICAgICAgICAgICAgIHVwZGF0ZUNoZWNrbGlzdD17cHJvcHMudXBkYXRlQ2hlY2tsaXN0fVxuICAgICAgICAgICAgICAgICAgYWRkQWN0aXZpdHk9e3Byb3BzLmFkZEFjdGl2aXR5fVxuICAgICAgICAgICAgICAgICAgY29sdW1ucz17cHJvcHMuY29sdW1uc31cbiAgICAgICAgICAgICAgICAgIGNvbXBsZXRlQ2hlY2tsaXN0PXtwcm9wcy5jb21wbGV0ZUNoZWNrbGlzdH1cbiAgICAgICAgICAgICAgICAgIGRlbGV0ZUNoZWNrbGlzdD17cHJvcHMuZGVsZXRlQ2hlY2tsaXN0fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAge2FkZENoZWNrbGlzdCAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LWZsZXggY2hlY2tsaXN0LXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2xpc3QtY2lyY2xlIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrbGlzdH1cbiAgICAgICAgICAgICAgb25CbHVyPXsoZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHNldEFkZENoZWNrbGlzdChmYWxzZSk7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tsaXN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlU3VibWl0Q2hlY2tsaXN0KGUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2xpc3QtY29udGVudCBib3JkZXItbm9uZVwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgeyFwcm9wcy5jdXJyZW50Q2FyZC5pc0FyY2hpdmVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFkZENoZWNrbGlzdCh0cnVlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWRlYXRpbC1jaGVja2xpc3QgdGV4dC1za3libHVlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgICsgQWRkIENoZWNrbGlzdCBJdGVtXG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENoZWNrbGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/checklist.tsx\n");

/***/ })

})