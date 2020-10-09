webpackHotUpdate_N_E("pages/[_id]/[project]",{

/***/ "./components/activity.tsx":
/*!*********************************!*\
  !*** ./components/activity.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/activity.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Activity(props) {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      activity = _useState[0],\n      setActivity = _useState[1];\n\n  var handleActivitySubmit = function handleActivitySubmit() {\n    if (activity.trim().length > 0) {\n      props.addActivity(props.currentColumn._id, props.currentCard._id, activity);\n      props.updateDate(props.currentColumn._id, props.currentCard._id);\n      setActivity('');\n    }\n  };\n\n  var getTimeMsg = function getTimeMsg(updatedAt) {\n    var createdTime = new Date(updatedAt).valueOf();\n    var currentTime = new Date().valueOf();\n    var second = 60;\n    var minute = 60;\n    var hour = 24;\n    var day = 30;\n    var month = 12;\n    var divider = 1;\n    var timeMsg = '';\n    var diff = (currentTime - createdTime) / 1000;\n\n    if (diff <= second) {\n      timeMsg = 'second';\n    } else if (diff <= second * minute) {\n      divider = second;\n      timeMsg = 'minute';\n    } else if (diff <= second * minute * hour) {\n      divider = second * minute;\n      timeMsg = 'hour';\n    } else if (diff <= second * minute * hour * day) {\n      divider = second * minute * hour;\n      timeMsg = 'day';\n    } else if (diff <= second * minute * hour * day * month) {\n      divider = second * minute * hour * day;\n      timeMsg = 'month';\n    } else {\n      divider = second * minute * hour * day * month;\n      timeMsg = 'year';\n    }\n\n    diff /= divider;\n    var displayTime = Math.abs(Math.round(diff));\n    var plural = displayTime > 1 ? 's' : '';\n    var timeMessage = \"\".concat(displayTime, \" \").concat(timeMsg).concat(plural, \" ago\");\n    return timeMessage;\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"card-deatil-title\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, \"Activity\"), __jsx(\"textarea\", {\n    className: \"card-detail-activity\",\n    placeholder: \"Add Comment\",\n    disabled: props.currentCard.isArchived,\n    onChange: function onChange(e) {\n      return setActivity(e.target.value);\n    },\n    value: activity,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, activity), __jsx(\"div\", {\n    className: \"text-right\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }\n  }, __jsx(\"button\", {\n    onClick: function onClick() {\n      return handleActivitySubmit();\n    },\n    className: \"\".concat(activity.length < 1 ? 'complete-btn-disabled' : 'complete-btn cursor-pointer', \" border-none\"),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"Say it\")), __jsx(\"div\", {\n    className: \"activity-log\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 7\n    }\n  }, props.currentCard.activities.reverse().map(function (activity) {\n    var iconElement = null;\n    var activityString = activity.activity.toString();\n\n    switch (true) {\n      case activityString.includes('checklist'):\n        iconElement = __jsx(\"i\", {\n          className: \"text-orange far fa-list-alt\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 29\n          }\n        });\n        break;\n\n      case activityString.includes('title'):\n        iconElement = __jsx(\"i\", {\n          className: \"text-purple fas fa-file-signature\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 17\n          }\n        });\n        break;\n\n      case activityString.includes('complete'):\n        iconElement = __jsx(\"i\", {\n          className: \"text-green far fa-check-circle\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 29\n          }\n        });\n        break;\n\n      case activityString.includes('delete'):\n        iconElement = __jsx(\"i\", {\n          className: \"text-red fas fa-file-signature\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 29\n          }\n        });\n        break;\n\n      default:\n        iconElement = __jsx(\"i\", {\n          className: \"text-yellow far fa-comment\",\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 29\n          }\n        });\n        break;\n    }\n\n    return __jsx(\"div\", {\n      key: activity._id,\n      className: \"activity-row display-flex\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"activity-icon\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 15\n      }\n    }, iconElement), __jsx(\"div\", {\n      className: \"text-grey activity-content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      className: \"my-5px text-bolder\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }\n    }, getTimeMsg(activity.createdAt)), __jsx(\"div\", {\n      className: \"my-5px activity-log-content\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }\n    }, activity.activity.split('||')[0], __jsx(\"b\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 19\n      }\n    }, activity.activity.split('||')[1]))));\n  })));\n}\n\n_s(Activity, \"AekdGBnIconadb4qeeDvZJ0BCd8=\");\n\n_c = Activity;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Activity);\n\nvar _c;\n\n$RefreshReg$(_c, \"Activity\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hY3Rpdml0eS50c3g/ZTM1ZCJdLCJuYW1lcyI6WyJBY3Rpdml0eSIsInByb3BzIiwidXNlU3RhdGUiLCJhY3Rpdml0eSIsInNldEFjdGl2aXR5IiwiaGFuZGxlQWN0aXZpdHlTdWJtaXQiLCJ0cmltIiwibGVuZ3RoIiwiYWRkQWN0aXZpdHkiLCJjdXJyZW50Q29sdW1uIiwiX2lkIiwiY3VycmVudENhcmQiLCJ1cGRhdGVEYXRlIiwiZ2V0VGltZU1zZyIsInVwZGF0ZWRBdCIsImNyZWF0ZWRUaW1lIiwiRGF0ZSIsInZhbHVlT2YiLCJjdXJyZW50VGltZSIsInNlY29uZCIsIm1pbnV0ZSIsImhvdXIiLCJkYXkiLCJtb250aCIsImRpdmlkZXIiLCJ0aW1lTXNnIiwiZGlmZiIsImRpc3BsYXlUaW1lIiwiTWF0aCIsImFicyIsInJvdW5kIiwicGx1cmFsIiwidGltZU1lc3NhZ2UiLCJpc0FyY2hpdmVkIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYWN0aXZpdGllcyIsInJldmVyc2UiLCJtYXAiLCJpY29uRWxlbWVudCIsImFjdGl2aXR5U3RyaW5nIiwidG9TdHJpbmciLCJpbmNsdWRlcyIsImNyZWF0ZWRBdCIsInNwbGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBSUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBMEM7QUFBQTs7QUFBQTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxFQUFELENBREE7QUFBQSxNQUNqQ0MsUUFEaUM7QUFBQSxNQUN2QkMsV0FEdUI7O0FBRXhDLE1BQU1DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtBQUNqQyxRQUFJRixRQUFRLENBQUNHLElBQVQsR0FBZ0JDLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCTixXQUFLLENBQUNPLFdBQU4sQ0FDRVAsS0FBSyxDQUFDUSxhQUFOLENBQW9CQyxHQUR0QixFQUVFVCxLQUFLLENBQUNVLFdBQU4sQ0FBa0JE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QUFBQSxRO0FBbUhNQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYWN0aXZpdHkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IElBY3Rpdml0eSBmcm9tICcuL2ludGVyZmFjZXMvaWFjdGl2aXR5JztcbmltcG9ydCBJQ2FyZE1vZGFsUHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ljYXJkbW9kYWxwcm9wcyc7XG5cbmZ1bmN0aW9uIEFjdGl2aXR5KHByb3BzOiBJQ2FyZE1vZGFsUHJvcHMpIHtcbiAgY29uc3QgW2FjdGl2aXR5LCBzZXRBY3Rpdml0eV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGhhbmRsZUFjdGl2aXR5U3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChhY3Rpdml0eS50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgcHJvcHMuYWRkQWN0aXZpdHkoXG4gICAgICAgIHByb3BzLmN1cnJlbnRDb2x1bW4uX2lkLFxuICAgICAgICBwcm9wcy5jdXJyZW50Q2FyZC5faWQsXG4gICAgICAgIGFjdGl2aXR5XG4gICAgICApO1xuICAgICAgcHJvcHMudXBkYXRlRGF0ZShwcm9wcy5jdXJyZW50Q29sdW1uLl9pZCwgcHJvcHMuY3VycmVudENhcmQuX2lkKTtcbiAgICAgIHNldEFjdGl2aXR5KCcnKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFRpbWVNc2cgPSAodXBkYXRlZEF0OiBEYXRlKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlZFRpbWUgPSBuZXcgRGF0ZSh1cGRhdGVkQXQpLnZhbHVlT2YoKTtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xuICAgIGNvbnN0IHNlY29uZCA9IDYwO1xuICAgIGNvbnN0IG1pbnV0ZSA9IDYwO1xuICAgIGNvbnN0IGhvdXIgPSAyNDtcbiAgICBjb25zdCBkYXkgPSAzMDtcbiAgICBjb25zdCBtb250aCA9IDEyO1xuICAgIGxldCBkaXZpZGVyID0gMTtcbiAgICBsZXQgdGltZU1zZyA9ICcnO1xuICAgIGxldCBkaWZmOiBudW1iZXIgPSAoY3VycmVudFRpbWUgLSBjcmVhdGVkVGltZSkgLyAxMDAwO1xuICAgIGlmIChkaWZmIDw9IHNlY29uZCkge1xuICAgICAgdGltZU1zZyA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQ7XG4gICAgICB0aW1lTXNnID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChkaWZmIDw9IHNlY29uZCAqIG1pbnV0ZSAqIGhvdXIpIHtcbiAgICAgIGRpdmlkZXIgPSBzZWNvbmQgKiBtaW51dGU7XG4gICAgICB0aW1lTXNnID0gJ2hvdXInO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA8PSBzZWNvbmQgKiBtaW51dGUgKiBob3VyICogZGF5KSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlICogaG91cjtcbiAgICAgIHRpbWVNc2cgPSAnZGF5JztcbiAgICB9IGVsc2UgaWYgKGRpZmYgPD0gc2Vjb25kICogbWludXRlICogaG91ciAqIGRheSAqIG1vbnRoKSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlICogaG91ciAqIGRheTtcbiAgICAgIHRpbWVNc2cgPSAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXZpZGVyID0gc2Vjb25kICogbWludXRlICogaG91ciAqIGRheSAqIG1vbnRoO1xuICAgICAgdGltZU1zZyA9ICd5ZWFyJztcbiAgICB9XG4gICAgZGlmZiAvPSBkaXZpZGVyO1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lID0gTWF0aC5hYnMoTWF0aC5yb3VuZChkaWZmKSk7XG4gICAgY29uc3QgcGx1cmFsID0gZGlzcGxheVRpbWUgPiAxID8gJ3MnIDogJyc7XG4gICAgY29uc3QgdGltZU1lc3NhZ2UgPSBgJHtkaXNwbGF5VGltZX0gJHt0aW1lTXNnfSR7cGx1cmFsfSBhZ29gO1xuICAgIHJldHVybiB0aW1lTWVzc2FnZTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGVhdGlsLXRpdGxlXCI+QWN0aXZpdHk8L2Rpdj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBjbGFzc05hbWU9XCJjYXJkLWRldGFpbC1hY3Rpdml0eVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIENvbW1lbnRcIlxuICAgICAgICBkaXNhYmxlZD17cHJvcHMuY3VycmVudENhcmQuaXNBcmNoaXZlZH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3Rpdml0eShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHZhbHVlPXthY3Rpdml0eX1cbiAgICAgID5cbiAgICAgICAge2FjdGl2aXR5fVxuICAgICAgPC90ZXh0YXJlYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQWN0aXZpdHlTdWJtaXQoKX1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgYWN0aXZpdHkubGVuZ3RoIDwgMVxuICAgICAgICAgICAgICA/ICdjb21wbGV0ZS1idG4tZGlzYWJsZWQnXG4gICAgICAgICAgICAgIDogJ2NvbXBsZXRlLWJ0biBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICB9IGJvcmRlci1ub25lYH1cbiAgICAgICAgPlxuICAgICAgICAgIFNheSBpdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpdml0eS1sb2dcIj5cbiAgICAgICAge3Byb3BzLmN1cnJlbnRDYXJkLmFjdGl2aXRpZXMucmV2ZXJzZSgpLm1hcCgoYWN0aXZpdHk6IElBY3Rpdml0eSkgPT4ge1xuICAgICAgICAgIGxldCBpY29uRWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgY29uc3QgYWN0aXZpdHlTdHJpbmcgPSBhY3Rpdml0eS5hY3Rpdml0eS50b1N0cmluZygpO1xuICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgY2FzZSBhY3Rpdml0eVN0cmluZy5pbmNsdWRlcygnY2hlY2tsaXN0Jyk6XG4gICAgICAgICAgICAgIGljb25FbGVtZW50ID0gPGkgY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UgZmFyIGZhLWxpc3QtYWx0XCI+PC9pPjtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGFjdGl2aXR5U3RyaW5nLmluY2x1ZGVzKCd0aXRsZScpOlxuICAgICAgICAgICAgICBpY29uRWxlbWVudCA9IChcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZSBmYXMgZmEtZmlsZS1zaWduYXR1cmVcIj48L2k+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBhY3Rpdml0eVN0cmluZy5pbmNsdWRlcygnY29tcGxldGUnKTpcbiAgICAgICAgICAgICAgaWNvbkVsZW1lbnQgPSA8aSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuIGZhciBmYS1jaGVjay1jaXJjbGVcIj48L2k+O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgYWN0aXZpdHlTdHJpbmcuaW5jbHVkZXMoJ2RlbGV0ZScpOlxuICAgICAgICAgICAgICBpY29uRWxlbWVudCA9IDxpIGNsYXNzTmFtZT1cInRleHQtcmVkIGZhcyBmYS1maWxlLXNpZ25hdHVyZVwiPjwvaT47XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgaWNvbkVsZW1lbnQgPSA8aSBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdyBmYXIgZmEtY29tbWVudFwiPjwvaT47XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2FjdGl2aXR5Ll9pZH0gY2xhc3NOYW1lPVwiYWN0aXZpdHktcm93IGRpc3BsYXktZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWljb25cIj57aWNvbkVsZW1lbnR9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmV5IGFjdGl2aXR5LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVweCB0ZXh0LWJvbGRlclwiPlxuICAgICAgICAgICAgICAgICAge2dldFRpbWVNc2coYWN0aXZpdHkuY3JlYXRlZEF0KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVweCBhY3Rpdml0eS1sb2ctY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAge2FjdGl2aXR5LmFjdGl2aXR5LnNwbGl0KCd8fCcpWzBdfVxuICAgICAgICAgICAgICAgICAgPGI+e2FjdGl2aXR5LmFjdGl2aXR5LnNwbGl0KCd8fCcpWzFdfTwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/activity.tsx\n");

/***/ })

})