webpackHotUpdate_N_E("pages/index",{

/***/ "./components/checklistitem.tsx":
/*!**************************************!*\
  !*** ./components/checklistitem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"./node_modules/@material-ui/core/esm/Zoom/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/checklistitem.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  paper: {\n    border: '1px solid rgb(239, 243, 244)'\n  }\n})(function (props) {\n  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }));\n});\n\nfunction ChecklistItem(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.checklist.checklist),\n      checklist = _useState[0],\n      setChecklist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showAngle = _useState2[0],\n      setShowAngle = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  var handleChecklistSubmit = function handleChecklistSubmit(e) {\n    if (e.key === 'Enter') {\n      props.updateChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, checklist);\n    }\n  };\n\n  var handleCompleteChecklist = function handleCompleteChecklist() {\n    props.completeChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, !props.checklist.isChecked);\n  };\n\n  var handleDeleteColClick = function handleDeleteColClick() {\n    props.deleteChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.currentCard.isArchived ? __jsx(\"div\", {\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, props.checklist.isChecked ? __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  })), props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    disabled: true,\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    id: props.checklist.id,\n    onMouseOver: function onMouseOver() {\n      return setShowAngle(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setShowAngle(false);\n    },\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    onClick: function onClick() {\n      return handleCompleteChecklist();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }, props.checklist.isChecked ? __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"in\": true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 15\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 17\n    }\n  })) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 15\n    }\n  })), props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleChecklistSubmit(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"card-head-angle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 11\n    }\n  }, checklist && showAngle && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"i\", {\n    onClick: handleClick,\n    className: \"fas fa-angle-down\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 17\n    }\n  })), __jsx(StyledMenu, {\n    id: \"delete-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onClick: function onClick() {\n      return handleDeleteColClick();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    primary: \"Delete\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 17\n    }\n  }))))));\n}\n\n_s(ChecklistItem, \"S8KI+qqxYc9JWytg3emjXMUrDSE=\");\n\n_c = ChecklistItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChecklistItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChecklistItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja2xpc3RpdGVtLnRzeD81YWY2Il0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJ3aXRoU3R5bGVzIiwicGFwZXIiLCJib3JkZXIiLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNoZWNrbGlzdEl0ZW0iLCJ1c2VTdGF0ZSIsImNoZWNrbGlzdCIsInNldENoZWNrbGlzdCIsInNob3dBbmdsZSIsInNldFNob3dBbmdsZSIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaGVja2xpc3RTdWJtaXQiLCJlIiwia2V5IiwidXBkYXRlQ2hlY2tsaXN0IiwiY3VycmVudENvbHVtbiIsImlkIiwiY3VycmVudENhcmQiLCJoYW5kbGVDb21wbGV0ZUNoZWNrbGlzdCIsImNvbXBsZXRlQ2hlY2tsaXN0IiwiaXNDaGVja2VkIiwiaGFuZGxlRGVsZXRlQ29sQ2xpY2siLCJkZWxldGVDaGVja2xpc3QiLCJpc0FyY2hpdmVkIiwidGFyZ2V0IiwidmFsdWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESDtBQURxQixDQUFELENBQVYsQ0FJaEIsVUFBQ0MsS0FBRDtBQUFBLFNBQ0QsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRSxDQURiO0FBRUUsc0JBQWtCLEVBQUUsSUFGdEI7QUFHRSxnQkFBWSxFQUFFO0FBQ1pDLGNBQVEsRUFBRSxRQURFO0FBRVpDLGdCQUFVLEVBQUU7QUFGQSxLQUhoQjtBQU9FLG1CQUFlLEVBQUU7QUFDZkQsY0FBUSxFQUFFLEtBREs7QUFFZkMsZ0JBQVUsRUFBRTtBQUZHO0FBUG5CLEtBV01GLEtBWE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURDO0FBQUEsQ0FKZ0IsQ0FBbkI7O0FBbUJBLFNBQVNHLGFBQVQsQ0FBdUJILEtBQXZCLEVBQW1DO0FBQUE7O0FBQUEsa0JBQ0NJLHNEQUFRLENBQUNKLEtBQUssQ0FBQ0ssU0FBTixDQUFnQkEsU0FBakIsQ0FEVDtBQUFBLE1BQzFCQSxTQUQwQjtBQUFBLE1BQ2ZDLFlBRGU7O0FBQUEsbUJBRUNGLHNEQUFRLENBQUMsS0FBRCxDQUZUO0FBQUEsTUFFMUJHLFNBRjBCO0FBQUEsTUFFZkMsWUFGZTs7QUFBQSx3QkFHREMsNENBQUssQ0FBQ0wsUUFBTixDQUFtQyxJQUFuQyxDQUhDO0FBQUE7QUFBQSxNQUcxQk0sUUFIMEI7QUFBQSxNQUdoQkMsV0FIZ0I7O0FBS2pDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBMEM7QUFDNURGLGVBQVcsQ0FBQ0UsS0FBSyxDQUFDQyxhQUFQLENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJKLGVBQVcsQ0FBQyxJQUFELENBQVg7QUFDRCxHQUZEOztBQUlBLE1BQU1LLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsQ0FBRCxFQUFZO0FBQ3hDLFFBQUlBLENBQUMsQ0FBQ0MsR0FBRixLQUFVLE9BQWQsRUFBdUI7QUFDckJsQixXQUFLLENBQUNtQixlQUFOLENBQ0VuQixLQUFLLENBQUNvQixhQUFOLENBQW9CQyxFQUR0QixFQUVFckIsS0FBSyxDQUFDc0IsV0FBTixDQUFrQkQsRUFGcEIsRUFHRXJCLEtBQUssQ0FBQ0ssU0FBTixDQUFnQmdCLEVBSGxCLEVBSUVoQixTQUpGO0FBTUQ7QUFDRixHQVREOztBQVVBLE1BQU1rQix1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDcEN2QixTQUFLLENBQUN3QixpQkFBTixDQUNFeEIsS0FBSyxDQUFDb0IsYUFBTixDQUFvQkMsRUFEdEIsRUFFRXJCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JELEVBRnBCLEVBR0VyQixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JnQixFQUhsQixFQUlFLENBQUNyQixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JvQixTQUpuQjtBQU1ELEdBUEQ7O0FBU0EsTUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0FBQ2pDMUIsU0FBSyxDQUFDMkIsZUFBTixDQUNFM0IsS0FBSyxDQUFDb0IsYUFBTixDQUFvQkMsRUFEdEIsRUFFRXJCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JELEVBRnBCLEVBR0VyQixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JnQixFQUhsQjtBQUtELEdBTkQ7O0FBUUEsU0FDRSxtRUFDR3JCLEtBQUssQ0FBQ3NCLFdBQU4sQ0FBa0JNLFVBQWxCLEdBQ0M7QUFBSyxhQUFTLEVBQUMsNEJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzVCLEtBQUssQ0FBQ0ssU0FBTixDQUFnQm9CLFNBQWhCLEdBQ0M7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEdBR0M7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FERixFQVFHekIsS0FBSyxDQUFDSyxTQUFOLENBQWdCb0IsU0FBaEIsR0FDQztBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJcEIsU0FBSixDQURGLENBREQsR0FLQztBQUNFLFNBQUssRUFBRUEsU0FEVDtBQUVFLFlBQVEsRUFBRSxJQUZaO0FBR0UsYUFBUyxFQUFDLCtCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixDQURELEdBc0JDO0FBQ0UsTUFBRSxFQUFFTCxLQUFLLENBQUNLLFNBQU4sQ0FBZ0JnQixFQUR0QjtBQUVFLGVBQVcsRUFBRTtBQUFBLGFBQU1iLFlBQVksQ0FBQyxJQUFELENBQWxCO0FBQUEsS0FGZjtBQUdFLGdCQUFZLEVBQUU7QUFBQSxhQUFNQSxZQUFZLENBQUMsS0FBRCxDQUFsQjtBQUFBLEtBSGhCO0FBSUUsYUFBUyxFQUFDLDRCQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUNFLGFBQVMsRUFBQyxpQ0FEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1lLHVCQUF1QixFQUE3QjtBQUFBLEtBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHdkIsS0FBSyxDQUFDSyxTQUFOLENBQWdCb0IsU0FBaEIsR0FDQyxNQUFDLDhEQUFEO0FBQU0sVUFBSSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERCxHQUtDO0FBQUcsYUFBUyxFQUFDLGVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLENBTkYsRUFrQkd6QixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JvQixTQUFoQixHQUNDO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlwQixTQUFKLENBREYsQ0FERCxHQUtDO0FBQ0UsU0FBSyxFQUFFQSxTQURUO0FBRUUsWUFBUSxFQUFFLGtCQUFDWSxDQUFEO0FBQUEsYUFBT1gsWUFBWSxDQUFDVyxDQUFDLENBQUNZLE1BQUYsQ0FBU0MsS0FBVixDQUFuQjtBQUFBLEtBRlo7QUFHRSxhQUFTLEVBQUUsbUJBQUNiLENBQUQ7QUFBQSxhQUFPRCxxQkFBcUIsQ0FBQ0MsQ0FBRCxDQUE1QjtBQUFBLEtBSGI7QUFJRSxhQUFTLEVBQUMsK0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCSixFQThCRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLFNBQVMsSUFBSUUsU0FBYixJQUNDLG1FQUNFO0FBQUcsV0FBTyxFQUFFSyxXQUFaO0FBQXlCLGFBQVMsRUFBQyxtQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosRUFNRSxNQUFDLFVBQUQ7QUFDRSxNQUFFLEVBQUMsYUFETDtBQUVFLFlBQVEsRUFBRUYsUUFGWjtBQUdFLGVBQVcsTUFIYjtBQUlFLFFBQUksRUFBRXFCLE9BQU8sQ0FBQ3JCLFFBQUQsQ0FKZjtBQUtFLFdBQU8sRUFBRUssV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxrRUFBRDtBQUFVLFdBQU8sRUFBRTtBQUFBLGFBQU1XLG9CQUFvQixFQUExQjtBQUFBLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQWMsV0FBTyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBTkYsQ0E5QkYsQ0F2QkosQ0FERjtBQTRFRDs7R0FwSFF2QixhOztLQUFBQSxhO0FBcUhNQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2hlY2tsaXN0aXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgWm9vbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9ab29tJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IE1lbnUsIHsgTWVudVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gd2l0aFN0eWxlcyh7XG4gIHBhcGVyOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigyMzksIDI0MywgMjQ0KScsXG4gIH0sXG59KSgocHJvcHM6IE1lbnVQcm9wcykgPT4gKFxuICA8TWVudVxuICAgIGVsZXZhdGlvbj17MH1cbiAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XG4gICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICB9fVxuICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcbmZ1bmN0aW9uIENoZWNrbGlzdEl0ZW0ocHJvcHM6IGFueSkge1xuICBjb25zdCBbY2hlY2tsaXN0LCBzZXRDaGVja2xpc3RdID0gdXNlU3RhdGUocHJvcHMuY2hlY2tsaXN0LmNoZWNrbGlzdCk7XG4gIGNvbnN0IFtzaG93QW5nbGUsIHNldFNob3dBbmdsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8bnVsbCB8IEhUTUxFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVja2xpc3RTdWJtaXQgPSAoZTogYW55KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBwcm9wcy51cGRhdGVDaGVja2xpc3QoXG4gICAgICAgIHByb3BzLmN1cnJlbnRDb2x1bW4uaWQsXG4gICAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmlkLFxuICAgICAgICBwcm9wcy5jaGVja2xpc3QuaWQsXG4gICAgICAgIGNoZWNrbGlzdFxuICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNvbXBsZXRlQ2hlY2tsaXN0ID0gKCkgPT4ge1xuICAgIHByb3BzLmNvbXBsZXRlQ2hlY2tsaXN0KFxuICAgICAgcHJvcHMuY3VycmVudENvbHVtbi5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmlkLFxuICAgICAgcHJvcHMuY2hlY2tsaXN0LmlkLFxuICAgICAgIXByb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWRcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNvbENsaWNrID0gKCkgPT4ge1xuICAgIHByb3BzLmRlbGV0ZUNoZWNrbGlzdChcbiAgICAgIHByb3BzLmN1cnJlbnRDb2x1bW4uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Q2FyZC5pZCxcbiAgICAgIHByb3BzLmNoZWNrbGlzdC5pZFxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb3BzLmN1cnJlbnRDYXJkLmlzQXJjaGl2ZWQgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS1mbGV4IGNoZWNrbGlzdC1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jaXJjbGUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkID8gKFxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Byb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxzPntjaGVja2xpc3R9PC9zPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tsaXN0fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNvbnRlbnQgYm9yZGVyLW5vbmVcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgaWQ9e3Byb3BzLmNoZWNrbGlzdC5pZH1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0U2hvd0FuZ2xlKHRydWUpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2hvd0FuZ2xlKGZhbHNlKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJkaXNwbGF5LWZsZXggY2hlY2tsaXN0LXJvd1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2xpc3QtY2lyY2xlIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbXBsZXRlQ2hlY2tsaXN0KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Byb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWQgPyAoXG4gICAgICAgICAgICAgIDxab29tIGluPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICA8L1pvb20+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHM+e2NoZWNrbGlzdH08L3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjaGVja2xpc3R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tsaXN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlQ2hlY2tsaXN0U3VibWl0KGUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2xpc3QtY29udGVudCBib3JkZXItbm9uZVwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkLWFuZ2xlIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICB7Y2hlY2tsaXN0ICYmIHNob3dBbmdsZSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8U3R5bGVkTWVudVxuICAgICAgICAgICAgICBpZD1cImRlbGV0ZS1tZW51XCJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb2xDbGljaygpfT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja2xpc3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/checklistitem.tsx\n");

/***/ })

})