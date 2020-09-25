webpackHotUpdate_N_E("pages/index",{

/***/ "./components/checklistitem.tsx":
/*!**************************************!*\
  !*** ./components/checklistitem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"./node_modules/@material-ui/core/esm/Zoom/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/checklistitem.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  paper: {\n    border: '1px solid rgb(239, 243, 244)'\n  }\n})(function (props) {\n  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }));\n});\n\nfunction ChecklistItem(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.checklist.checklist),\n      checklist = _useState[0],\n      setChecklist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showAngle = _useState2[0],\n      setShowAngle = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  var handleChecklistSubmit = function handleChecklistSubmit(e) {\n    if (e.key === 'Enter') {\n      props.updateChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, checklist);\n    }\n  };\n\n  var handleCompleteChecklist = function handleCompleteChecklist() {\n    props.completeChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, !props.checklist.isChecked);\n  };\n\n  var handleDeleteColClick = function handleDeleteColClick() {\n    props.deleteChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.currentCard.isArchived ? __jsx(\"div\", {\n    className: \"display-flex checklist-row-no-hover\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, props.checklist.isChecked ? __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 15\n    }\n  }) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 15\n    }\n  })), props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    disabled: true,\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    // id={props.checklist.id}\n    onMouseOver: function onMouseOver() {\n      return setShowAngle(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setShowAngle(false);\n    },\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    onClick: function onClick() {\n      return handleCompleteChecklist();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, props.checklist && props.checklist.isChecked ? __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"in\": true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 15\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 17\n    }\n  })) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 15\n    }\n  })), props.checklist && props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleChecklistSubmit(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"card-head-angle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 11\n    }\n  }, checklist && showAngle && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"i\", {\n    onClick: handleClick,\n    className: \"fas fa-angle-down\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 135,\n      columnNumber: 17\n    }\n  })), __jsx(StyledMenu, {\n    id: \"delete-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onClick: function onClick() {\n      return handleDeleteColClick();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    primary: \"Delete\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 17\n    }\n  }))))));\n}\n\n_s(ChecklistItem, \"S8KI+qqxYc9JWytg3emjXMUrDSE=\");\n\n_c = ChecklistItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChecklistItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChecklistItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja2xpc3RpdGVtLnRzeD81YWY2Il0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJ3aXRoU3R5bGVzIiwicGFwZXIiLCJib3JkZXIiLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNoZWNrbGlzdEl0ZW0iLCJ1c2VTdGF0ZSIsImNoZWNrbGlzdCIsInNldENoZWNrbGlzdCIsInNob3dBbmdsZSIsInNldFNob3dBbmdsZSIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaGVja2xpc3RTdWJtaXQiLCJlIiwia2V5IiwidXBkYXRlQ2hlY2tsaXN0IiwiY3VycmVudENvbHVtbiIsImlkIiwiY3VycmVudENhcmQiLCJoYW5kbGVDb21wbGV0ZUNoZWNrbGlzdCIsImNvbXBsZXRlQ2hlY2tsaXN0IiwiaXNDaGVja2VkIiwiaGFuZGxlRGVsZXRlQ29sQ2xpY2siLCJkZWxldGVDaGVja2xpc3QiLCJpc0FyY2hpdmVkIiwidGFyZ2V0IiwidmFsdWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxVQUFVLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESDtBQURxQixDQUFELENBQVYsQ0FJaEIsVUFBQ0MsS0FBRDtBQUFBLFNBQ0QsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRSxDQURiO0FBRUUsc0JBQWtCLEVBQUUsSUFGdEI7QUFHRSxnQkFBWSxFQUFFO0FBQ1pDLGNBQVEsRUFBRSxRQURFO0FBRVpDLGdCQUFVLEVBQUU7QUFGQSxLQUhoQjtBQU9FLG1CQUFlLEVBQUU7QUFDZkQsY0FBUSxFQUFFLEtBREs7QUFFZkMsZ0JBQVUsRUFB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QUFuQjtBQUFBLEtBRlo7QUFHRSxhQUFTLEVBQUUsbUJBQUNiLENBQUQ7QUFBQSxhQUFPRCxxQkFBcUIsQ0FBQ0MsQ0FBRCxDQUE1QjtBQUFBLEtBSGI7QUFJRSxhQUFTLEVBQUMsK0JBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXZCSixFQThCRTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0daLFNBQVMsSUFBSUUsU0FBYixJQUNDLG1FQUNFO0FBQUcsV0FBTyxFQUFFSyxXQUFaO0FBQXlCLGFBQVMsRUFBQyxtQkFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkosRUFNRSxNQUFDLFVBQUQ7QUFDRSxNQUFFLEVBQUMsYUFETDtBQUVFLFlBQVEsRUFBRUYsUUFGWjtBQUdFLGVBQVcsTUFIYjtBQUlFLFFBQUksRUFBRXFCLE9BQU8sQ0FBQ3JCLFFBQUQsQ0FKZjtBQUtFLFdBQU8sRUFBRUssV0FMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxrRUFBRDtBQUFVLFdBQU8sRUFBRTtBQUFBLGFBQU1XLG9CQUFvQixFQUExQjtBQUFBLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNFQUFEO0FBQWMsV0FBTyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLENBTkYsQ0E5QkYsQ0F2QkosQ0FERjtBQTRFRDs7R0FwSFF2QixhOztLQUFBQSxhO0FBcUhNQSw0RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY2hlY2tsaXN0aXRlbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgS2V5Ym9hcmRFdmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBab29tIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1pvb20nO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTWVudSwgeyBNZW51UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgSUNoZWNrbGlzdFByb3BzIGZyb20gJy4vaW50ZXJmYWNlcy9pY2hlY2tsaXN0cHJvcHMnO1xuaW1wb3J0IElDaGVja2xpc3QgZnJvbSAnLi9pbnRlcmZhY2VzL2ljaGVja2xpc3QnO1xuaW1wb3J0IElDYXJkIGZyb20gJy4vaW50ZXJmYWNlcy9pY2FyZCc7XG5pbXBvcnQgSVNlY3Rpb24gZnJvbSAnLi9pbnRlcmZhY2VzL2lzZWN0aW9uJztcblxuY29uc3QgU3R5bGVkTWVudSA9IHdpdGhTdHlsZXMoe1xuICBwYXBlcjoge1xuICAgIGJvcmRlcjogJzFweCBzb2xpZCByZ2IoMjM5LCAyNDMsIDI0NCknLFxuICB9LFxufSkoKHByb3BzOiBNZW51UHJvcHMpID0+IChcbiAgPE1lbnVcbiAgICBlbGV2YXRpb249ezB9XG4gICAgZ2V0Q29udGVudEFuY2hvckVsPXtudWxsfVxuICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAndG9wJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKSk7XG5cbmludGVyZmFjZSBJQ2hlY2tsaXN0SXRlbVByb3BzIGV4dGVuZHMgSUNoZWNrbGlzdFByb3BzIHtcbiAgY2hlY2tsaXN0OiBJQ2hlY2tsaXN0O1xuICBjdXJyZW50Q29sdW1uOiBJU2VjdGlvbjtcbiAgY3VycmVudENhcmQ6IElDYXJkO1xufVxuXG5mdW5jdGlvbiBDaGVja2xpc3RJdGVtKHByb3BzOiBJQ2hlY2tsaXN0SXRlbVByb3BzKSB7XG4gIGNvbnN0IFtjaGVja2xpc3QsIHNldENoZWNrbGlzdF0gPSB1c2VTdGF0ZTxzdHJpbmc+KHByb3BzLmNoZWNrbGlzdC5jaGVja2xpc3QpO1xuICBjb25zdCBbc2hvd0FuZ2xlLCBzZXRTaG93QW5nbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tsaXN0U3VibWl0ID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHByb3BzLnVwZGF0ZUNoZWNrbGlzdChcbiAgICAgICAgcHJvcHMuY3VycmVudENvbHVtbi5pZCxcbiAgICAgICAgcHJvcHMuY3VycmVudENhcmQuaWQsXG4gICAgICAgIHByb3BzLmNoZWNrbGlzdC5pZCxcbiAgICAgICAgY2hlY2tsaXN0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29tcGxldGVDaGVja2xpc3QgPSAoKSA9PiB7XG4gICAgcHJvcHMuY29tcGxldGVDaGVja2xpc3QoXG4gICAgICBwcm9wcy5jdXJyZW50Q29sdW1uLmlkLFxuICAgICAgcHJvcHMuY3VycmVudENhcmQuaWQsXG4gICAgICBwcm9wcy5jaGVja2xpc3QuaWQsXG4gICAgICAhcHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ29sQ2xpY2sgPSAoKSA9PiB7XG4gICAgcHJvcHMuZGVsZXRlQ2hlY2tsaXN0KFxuICAgICAgcHJvcHMuY3VycmVudENvbHVtbi5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmlkLFxuICAgICAgcHJvcHMuY2hlY2tsaXN0LmlkXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcHMuY3VycmVudENhcmQuaXNBcmNoaXZlZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LWZsZXggY2hlY2tsaXN0LXJvdy1uby1ob3ZlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNpcmNsZVwiPlxuICAgICAgICAgICAge3Byb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWQgPyAoXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHM+e2NoZWNrbGlzdH08L3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjaGVja2xpc3R9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2xpc3QtY29udGVudCBib3JkZXItbm9uZVwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAvLyBpZD17cHJvcHMuY2hlY2tsaXN0LmlkfVxuICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRTaG93QW5nbGUodHJ1ZSl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaG93QW5nbGUoZmFsc2UpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImRpc3BsYXktZmxleCBjaGVja2xpc3Qtcm93XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jaXJjbGUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcGxldGVDaGVja2xpc3QoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hlY2tsaXN0ICYmIHByb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWQgPyAoXG4gICAgICAgICAgICAgIDxab29tIGluPXt0cnVlfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICA8L1pvb20+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cHJvcHMuY2hlY2tsaXN0ICYmIHByb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxzPntjaGVja2xpc3R9PC9zPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tsaXN0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrbGlzdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGhhbmRsZUNoZWNrbGlzdFN1Ym1pdChlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNvbnRlbnQgYm9yZGVyLW5vbmVcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZC1hbmdsZSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAge2NoZWNrbGlzdCAmJiBzaG93QW5nbGUgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgICAgICAgaWQ9XCJkZWxldGUtbWVudVwiXG4gICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ29sQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tsaXN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/checklistitem.tsx\n");

/***/ })

})