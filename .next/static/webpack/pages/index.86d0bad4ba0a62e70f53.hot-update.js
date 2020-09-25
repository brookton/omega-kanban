webpackHotUpdate_N_E("pages/index",{

/***/ "./components/checklistitem.tsx":
/*!**************************************!*\
  !*** ./components/checklistitem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"./node_modules/@material-ui/core/esm/Zoom/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/checklistitem.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  paper: {\n    border: '1px solid rgb(239, 243, 244)'\n  }\n})(function (props) {\n  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }));\n});\n\nfunction ChecklistItem(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      checklist = _useState[0],\n      setChecklist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showAngle = _useState2[0],\n      setShowAngle = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setChecklist(props.checklist);\n  }, [props.checklist]);\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  var handleChecklistSubmit = function handleChecklistSubmit(e) {\n    if (e.key === 'Enter') {\n      props.updateChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, checklist);\n    }\n  };\n\n  var handleCompleteChecklist = function handleCompleteChecklist() {\n    props.completeChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, !props.checklist.isChecked);\n  };\n\n  var handleDeleteColClick = function handleDeleteColClick() {\n    props.deleteChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.currentCard.isArchived ? __jsx(\"div\", {\n    className: \"display-flex checklist-row-no-hover\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, props.checklist.isChecked ? __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  })), props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    disabled: true,\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    id: props.checklist.id,\n    onMouseOver: function onMouseOver() {\n      return setShowAngle(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setShowAngle(false);\n    },\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    onClick: function onClick() {\n      return handleCompleteChecklist();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 11\n    }\n  }, props.checklist && props.checklist.isChecked ? __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"in\": true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 15\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 17\n    }\n  })) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 15\n    }\n  })), props.checklist && props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleChecklistSubmit(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"card-head-angle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }, checklist && showAngle && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"i\", {\n    onClick: handleClick,\n    className: \"fas fa-angle-down\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 17\n    }\n  })), __jsx(StyledMenu, {\n    id: \"delete-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 142,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onClick: function onClick() {\n      return handleDeleteColClick();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    primary: \"Delete\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 17\n    }\n  }))))));\n}\n\n_s(ChecklistItem, \"b29qkeEoi2mBBdPPQ63cAQs9yyE=\");\n\n_c = ChecklistItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChecklistItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChecklistItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja2xpc3RpdGVtLnRzeD81YWY2Il0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJ3aXRoU3R5bGVzIiwicGFwZXIiLCJib3JkZXIiLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNoZWNrbGlzdEl0ZW0iLCJ1c2VTdGF0ZSIsImNoZWNrbGlzdCIsInNldENoZWNrbGlzdCIsInNob3dBbmdsZSIsInNldFNob3dBbmdsZSIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZUVmZmVjdCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaGVja2xpc3RTdWJtaXQiLCJlIiwia2V5IiwidXBkYXRlQ2hlY2tsaXN0IiwiY3VycmVudENvbHVtbiIsImlkIiwiY3VycmVudENhcmQiLCJoYW5kbGVDb21wbGV0ZUNoZWNrbGlzdCIsImNvbXBsZXRlQ2hlY2tsaXN0IiwiaXNDaGVja2VkIiwiaGFuZGxlRGVsZXRlQ29sQ2xpY2siLCJkZWxldGVDaGVja2xpc3QiLCJpc0FyY2hpdmVkIiwidGFyZ2V0IiwidmFsdWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxVQUFVLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESDtBQURxQixDQUFELENBQVYsQ0FJaEIsVUFBQ0MsS0FBRDtBQUFBLFNBQ0QsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRSxDQURiO0FBRUUsc0JBQWtCLEVBQUUsSUFGdEI7QUFHRSxnQkFBWSxFQUFFO0FBQ1pDLGNBQVEsRUFBRSxRQURFO0FBRVpDLGdCQUFVLEVBQUU7QUFGQSxLQUhoQjtBQU9FLG1CQUFlLEVBQUU7QUFDZkQsY0FBUSxFQUFFLEtBREs7QUFF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c3RpdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBLZXlib2FyZEV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFpvb20gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvWm9vbSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBNZW51LCB7IE1lbnVQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBJQ2hlY2tsaXN0UHJvcHMgZnJvbSAnLi9pbnRlcmZhY2VzL2ljaGVja2xpc3Rwcm9wcyc7XG5pbXBvcnQgSUNoZWNrbGlzdCBmcm9tICcuL2ludGVyZmFjZXMvaWNoZWNrbGlzdCc7XG5pbXBvcnQgSUNhcmQgZnJvbSAnLi9pbnRlcmZhY2VzL2ljYXJkJztcbmltcG9ydCBJU2VjdGlvbiBmcm9tICcuL2ludGVyZmFjZXMvaXNlY3Rpb24nO1xuXG5jb25zdCBTdHlsZWRNZW51ID0gd2l0aFN0eWxlcyh7XG4gIHBhcGVyOiB7XG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigyMzksIDI0MywgMjQ0KScsXG4gIH0sXG59KSgocHJvcHM6IE1lbnVQcm9wcykgPT4gKFxuICA8TWVudVxuICAgIGVsZXZhdGlvbj17MH1cbiAgICBnZXRDb250ZW50QW5jaG9yRWw9e251bGx9XG4gICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICB9fVxuICAgIHRyYW5zZm9ybU9yaWdpbj17e1xuICAgICAgdmVydGljYWw6ICd0b3AnLFxuICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pKTtcblxuaW50ZXJmYWNlIElDaGVja2xpc3RJdGVtUHJvcHMgZXh0ZW5kcyBJQ2hlY2tsaXN0UHJvcHMge1xuICBjaGVja2xpc3Q6IElDaGVja2xpc3Q7XG4gIGN1cnJlbnRDb2x1bW46IElTZWN0aW9uO1xuICBjdXJyZW50Q2FyZDogSUNhcmQ7XG59XG5cbmZ1bmN0aW9uIENoZWNrbGlzdEl0ZW0ocHJvcHM6IElDaGVja2xpc3RJdGVtUHJvcHMpIHtcbiAgY29uc3QgW2NoZWNrbGlzdCwgc2V0Q2hlY2tsaXN0XSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW3Nob3dBbmdsZSwgc2V0U2hvd0FuZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q2hlY2tsaXN0KHByb3BzLmNoZWNrbGlzdCk7XG4gIH0sIFtwcm9wcy5jaGVja2xpc3RdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVja2xpc3RTdWJtaXQgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgcHJvcHMudXBkYXRlQ2hlY2tsaXN0KFxuICAgICAgICBwcm9wcy5jdXJyZW50Q29sdW1uLmlkLFxuICAgICAgICBwcm9wcy5jdXJyZW50Q2FyZC5pZCxcbiAgICAgICAgcHJvcHMuY2hlY2tsaXN0LmlkLFxuICAgICAgICBjaGVja2xpc3RcbiAgICAgICk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVDb21wbGV0ZUNoZWNrbGlzdCA9ICgpID0+IHtcbiAgICBwcm9wcy5jb21wbGV0ZUNoZWNrbGlzdChcbiAgICAgIHByb3BzLmN1cnJlbnRDb2x1bW4uaWQsXG4gICAgICBwcm9wcy5jdXJyZW50Q2FyZC5pZCxcbiAgICAgIHByb3BzLmNoZWNrbGlzdC5pZCxcbiAgICAgICFwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVDb2xDbGljayA9ICgpID0+IHtcbiAgICBwcm9wcy5kZWxldGVDaGVja2xpc3QoXG4gICAgICBwcm9wcy5jdXJyZW50Q29sdW1uLmlkLFxuICAgICAgcHJvcHMuY3VycmVudENhcmQuaWQsXG4gICAgICBwcm9wcy5jaGVja2xpc3QuaWRcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9wcy5jdXJyZW50Q2FyZC5pc0FyY2hpdmVkID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktZmxleCBjaGVja2xpc3Qtcm93LW5vLWhvdmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2xpc3QtY2lyY2xlXCI+XG4gICAgICAgICAgICB7cHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZCA/IChcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2xpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cz57Y2hlY2tsaXN0fTwvcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrbGlzdH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50IGJvcmRlci1ub25lXCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPXtwcm9wcy5jaGVja2xpc3QuaWR9XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFNob3dBbmdsZSh0cnVlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dBbmdsZShmYWxzZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGlzcGxheS1mbGV4IGNoZWNrbGlzdC1yb3dcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNpcmNsZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wbGV0ZUNoZWNrbGlzdCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGVja2xpc3QgJiYgcHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZCA/IChcbiAgICAgICAgICAgICAgPFpvb20gaW49e3RydWV9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgIDwvWm9vbT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtwcm9wcy5jaGVja2xpc3QgJiYgcHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPHM+e2NoZWNrbGlzdH08L3M+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHZhbHVlPXtjaGVja2xpc3R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tsaXN0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gaGFuZGxlQ2hlY2tsaXN0U3VibWl0KGUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2xpc3QtY29udGVudCBib3JkZXItbm9uZVwiXG4gICAgICAgICAgICA+PC9pbnB1dD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkLWFuZ2xlIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICB7Y2hlY2tsaXN0ICYmIHNob3dBbmdsZSAmJiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGkgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImZhcyBmYS1hbmdsZS1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8U3R5bGVkTWVudVxuICAgICAgICAgICAgICBpZD1cImRlbGV0ZS1tZW51XCJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICBvcGVuPXtCb29sZWFuKGFuY2hvckVsKX1cbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVDb2xDbGljaygpfT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgPC9TdHlsZWRNZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBDaGVja2xpc3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/checklistitem.tsx\n");

/***/ })

})