webpackHotUpdate_N_E("pages/index",{

/***/ "./components/checklistitem.tsx":
/*!**************************************!*\
  !*** ./components/checklistitem.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Zoom */ \"./node_modules/@material-ui/core/esm/Zoom/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Menu */ \"./node_modules/@material-ui/core/esm/Menu/index.js\");\n/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ \"./node_modules/@material-ui/core/esm/MenuItem/index.js\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"./node_modules/@material-ui/core/esm/ListItemText/index.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/heegupark/Desktop/Workspace/MyProject/omega-kanban/components/checklistitem.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar StyledMenu = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"withStyles\"])({\n  paper: {\n    border: '1px solid rgb(239, 243, 244)'\n  }\n})(function (props) {\n  return __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    elevation: 0,\n    getContentAnchorEl: null,\n    anchorOrigin: {\n      vertical: 'bottom',\n      horizontal: 'center'\n    },\n    transformOrigin: {\n      vertical: 'top',\n      horizontal: 'center'\n    }\n  }, props, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 3\n    }\n  }));\n});\n\nfunction ChecklistItem(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.checklist.checklist),\n      checklist = _useState[0],\n      setChecklist = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      showAngle = _useState2[0],\n      setShowAngle = _useState2[1];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  var handleChecklistSubmit = function handleChecklistSubmit(e) {\n    if (e.key === 'Enter') {\n      props.updateChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, checklist);\n    }\n  };\n\n  var handleCompleteChecklist = function handleCompleteChecklist() {\n    props.completeChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id, !props.checklist.isChecked);\n  };\n\n  var handleDeleteColClick = function handleDeleteColClick() {\n    props.deleteChecklist(props.currentColumn.id, props.currentCard.id, props.checklist.id);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, props.currentCard.isArchived ? __jsx(\"div\", {\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    onClick: function onClick() {\n      return handleCompleteChecklist();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, props.checklist.isChecked ? __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"in\": true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 17\n    }\n  })) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 15\n    }\n  })), props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleChecklistSubmit(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  })) : __jsx(\"div\", {\n    id: props.checklist.id,\n    onMouseOver: function onMouseOver() {\n      return setShowAngle(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setShowAngle(false);\n    },\n    className: \"display-flex checklist-row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"checklist-circle cursor-pointer\",\n    onClick: function onClick() {\n      return handleCompleteChecklist();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 11\n    }\n  }, props.checklist.isChecked ? __jsx(_material_ui_core_Zoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    \"in\": true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 15\n    }\n  }, __jsx(\"i\", {\n    className: \"far fa-check-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 17\n    }\n  })) : __jsx(\"i\", {\n    className: \"far fa-circle\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 15\n    }\n  })), props.checklist.isChecked ? __jsx(\"div\", {\n    className: \"checklist-content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, __jsx(\"s\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 15\n    }\n  }, checklist)) : __jsx(\"input\", {\n    value: checklist,\n    onChange: function onChange(e) {\n      return setChecklist(e.target.value);\n    },\n    onKeyDown: function onKeyDown(e) {\n      return handleChecklistSubmit(e);\n    },\n    className: \"checklist-content border-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    className: \"card-head-angle cursor-pointer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 11\n    }\n  }, checklist && showAngle && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(\"i\", {\n    onClick: handleClick,\n    className: \"fas fa-angle-down\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 17\n    }\n  })), __jsx(StyledMenu, {\n    id: \"delete-menu\",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 133,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onClick: function onClick() {\n      return handleDeleteColClick();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 15\n    }\n  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    primary: \"Delete\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 141,\n      columnNumber: 17\n    }\n  }))))));\n}\n\n_s(ChecklistItem, \"S8KI+qqxYc9JWytg3emjXMUrDSE=\");\n\n_c = ChecklistItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChecklistItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"ChecklistItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGVja2xpc3RpdGVtLnRzeD81YWY2Il0sIm5hbWVzIjpbIlN0eWxlZE1lbnUiLCJ3aXRoU3R5bGVzIiwicGFwZXIiLCJib3JkZXIiLCJwcm9wcyIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNoZWNrbGlzdEl0ZW0iLCJ1c2VTdGF0ZSIsImNoZWNrbGlzdCIsInNldENoZWNrbGlzdCIsInNob3dBbmdsZSIsInNldFNob3dBbmdsZSIsIlJlYWN0IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDaGVja2xpc3RTdWJtaXQiLCJlIiwia2V5IiwidXBkYXRlQ2hlY2tsaXN0IiwiY3VycmVudENvbHVtbiIsImlkIiwiY3VycmVudENhcmQiLCJoYW5kbGVDb21wbGV0ZUNoZWNrbGlzdCIsImNvbXBsZXRlQ2hlY2tsaXN0IiwiaXNDaGVja2VkIiwiaGFuZGxlRGVsZXRlQ29sQ2xpY2siLCJkZWxldGVDaGVja2xpc3QiLCJpc0FyY2hpdmVkIiwidGFyZ2V0IiwidmFsdWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFESDtBQURxQixDQUFELENBQVYsQ0FJaEIsVUFBQ0MsS0FBRDtBQUFBLFNBQ0QsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRSxDQURiO0FBRUUsc0JBQWtCLEVBQUUsSUFGdEI7QUFHRSxnQkFBWSxFQUFFO0FBQ1pDLGNBQVEsRUFBRSxRQURFO0FBRVpDLGdCQUFVLEVBQUU7QUFGQSxLQUhoQjtBQU9FLG1CQUFlLEVBQUU7QUFDZkQsY0FBUSxFQUFFLEtBREs7QUFFZkMsZ0JBQVUsRUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBUEYsQ0FORixDQTlCRixDQTdCSixDQURGO0FBa0ZEOztHQTFIUXZCLGE7O0tBQUFBLGE7QUEySE1BLDRFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jaGVja2xpc3RpdGVtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBab29tIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1pvb20nO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgTWVudSwgeyBNZW51UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5cbmNvbnN0IFN0eWxlZE1lbnUgPSB3aXRoU3R5bGVzKHtcbiAgcGFwZXI6IHtcbiAgICBib3JkZXI6ICcxcHggc29saWQgcmdiKDIzOSwgMjQzLCAyNDQpJyxcbiAgfSxcbn0pKChwcm9wczogTWVudVByb3BzKSA9PiAoXG4gIDxNZW51XG4gICAgZWxldmF0aW9uPXswfVxuICAgIGdldENvbnRlbnRBbmNob3JFbD17bnVsbH1cbiAgICBhbmNob3JPcmlnaW49e3tcbiAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcbiAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxuICAgIH19XG4gICAgdHJhbnNmb3JtT3JpZ2luPXt7XG4gICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbikpO1xuZnVuY3Rpb24gQ2hlY2tsaXN0SXRlbShwcm9wczogYW55KSB7XG4gIGNvbnN0IFtjaGVja2xpc3QsIHNldENoZWNrbGlzdF0gPSB1c2VTdGF0ZShwcm9wcy5jaGVja2xpc3QuY2hlY2tsaXN0KTtcbiAgY29uc3QgW3Nob3dBbmdsZSwgc2V0U2hvd0FuZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoZWNrbGlzdFN1Ym1pdCA9IChlOiBhbnkpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHByb3BzLnVwZGF0ZUNoZWNrbGlzdChcbiAgICAgICAgcHJvcHMuY3VycmVudENvbHVtbi5pZCxcbiAgICAgICAgcHJvcHMuY3VycmVudENhcmQuaWQsXG4gICAgICAgIHByb3BzLmNoZWNrbGlzdC5pZCxcbiAgICAgICAgY2hlY2tsaXN0XG4gICAgICApO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlQ29tcGxldGVDaGVja2xpc3QgPSAoKSA9PiB7XG4gICAgcHJvcHMuY29tcGxldGVDaGVja2xpc3QoXG4gICAgICBwcm9wcy5jdXJyZW50Q29sdW1uLmlkLFxuICAgICAgcHJvcHMuY3VycmVudENhcmQuaWQsXG4gICAgICBwcm9wcy5jaGVja2xpc3QuaWQsXG4gICAgICAhcHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlQ29sQ2xpY2sgPSAoKSA9PiB7XG4gICAgcHJvcHMuZGVsZXRlQ2hlY2tsaXN0KFxuICAgICAgcHJvcHMuY3VycmVudENvbHVtbi5pZCxcbiAgICAgIHByb3BzLmN1cnJlbnRDYXJkLmlkLFxuICAgICAgcHJvcHMuY2hlY2tsaXN0LmlkXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvcHMuY3VycmVudENhcmQuaXNBcmNoaXZlZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5LWZsZXggY2hlY2tsaXN0LXJvd1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jaXJjbGUgY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ29tcGxldGVDaGVja2xpc3QoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMuY2hlY2tsaXN0LmlzQ2hlY2tlZCA/IChcbiAgICAgICAgICAgICAgPFpvb20gaW49e3RydWV9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaGVjay1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgIDwvWm9vbT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhciBmYS1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja2xpc3QtY29udGVudFwiPlxuICAgICAgICAgICAgICA8cz57Y2hlY2tsaXN0fTwvcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e2NoZWNrbGlzdH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja2xpc3QoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbktleURvd249eyhlKSA9PiBoYW5kbGVDaGVja2xpc3RTdWJtaXQoZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50IGJvcmRlci1ub25lXCJcbiAgICAgICAgICAgID48L2lucHV0PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPXtwcm9wcy5jaGVja2xpc3QuaWR9XG4gICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldFNob3dBbmdsZSh0cnVlKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNob3dBbmdsZShmYWxzZSl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGlzcGxheS1mbGV4IGNoZWNrbGlzdC1yb3dcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNpcmNsZSBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDb21wbGV0ZUNoZWNrbGlzdCgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtwcm9wcy5jaGVja2xpc3QuaXNDaGVja2VkID8gKFxuICAgICAgICAgICAgICA8Wm9vbSBpbj17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9ab29tPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Byb3BzLmNoZWNrbGlzdC5pc0NoZWNrZWQgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrbGlzdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxzPntjaGVja2xpc3R9PC9zPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2YWx1ZT17Y2hlY2tsaXN0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENoZWNrbGlzdChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17KGUpID0+IGhhbmRsZUNoZWNrbGlzdFN1Ym1pdChlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tsaXN0LWNvbnRlbnQgYm9yZGVyLW5vbmVcIlxuICAgICAgICAgICAgPjwvaW5wdXQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZC1hbmdsZSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAge2NoZWNrbGlzdCAmJiBzaG93QW5nbGUgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFN0eWxlZE1lbnVcbiAgICAgICAgICAgICAgaWQ9XCJkZWxldGUtbWVudVwiXG4gICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ29sQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGVsZXRlXCIgLz5cbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgIDwvU3R5bGVkTWVudT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tsaXN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/checklistitem.tsx\n");

/***/ })

})