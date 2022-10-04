webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");



var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\\uAE40\uACBD\uB355\\Desktop\\Prepare\\front\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["color: red"])));
_c = ErrorMessage;

var Signup = function Signup() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      id = _useInput2[0],
      onChangeId = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  }, [password]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = useCallBack(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSubmit = useCallBack(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "\uD68C\uC6D0\uAC00\uC785 | NodeBird")), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onFinish: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-id",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, "\uC544\uC774\uB514"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-id",
    value: id,
    required: true,
    onChange: onChangeId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-nick",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "\uB2C9\uB124\uC784"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-nick",
    value: nickname,
    required: true,
    onChange: onChangeNickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-Password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-Password",
    value: password,
    required: true,
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("label", {
    htmlFor: "user-PasswordCheck",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    name: "user-PasswordCheck",
    value: passwordCheck,
    required: true,
    onChange: onChangePasswordCheck,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 35
    }
  }, " \uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. ")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
    name: "user-term",
    checked: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "\uC774\uC6A9\uC744 \uB3D9\uC758\uD569\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 27
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4.")), __jsx("div", {
    style: {
      marginTop: 10
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "\uAC00\uC785\uD558\uAE30"))));
};

_s(Signup, "5m3uBTLmHNO+FjxnYmJCeMuLlH4=", true, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsInVzZUlucHV0IiwiaWQiLCJvbkNoYW5nZUlkIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VQYXNzd29yZENoZWNrIiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXJtIiwic2V0VGVybSIsInRlcm1FcnJvciIsInNldFRlcm1FcnJvciIsIm9uQ2hhbmdlVGVybSIsInVzZUNhbGxCYWNrIiwiY2hlY2tlZCIsIm9uU3VibWl0IiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLHlKQUFsQjtLQUFNRixZOztBQUVOLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07RUFBQTs7RUFDakIsZ0JBQXlCQywrREFBUSxDQUFDLEVBQUQsQ0FBakM7RUFBQTtFQUFBLElBQU9DLEVBQVA7RUFBQSxJQUFXQyxVQUFYOztFQUNBLGlCQUFxQ0YsK0RBQVEsQ0FBQyxFQUFELENBQTdDO0VBQUE7RUFBQSxJQUFPRyxRQUFQO0VBQUEsSUFBaUJDLGdCQUFqQjs7RUFDQSxpQkFBcUNKLCtEQUFRLENBQUMsRUFBRCxDQUE3QztFQUFBO0VBQUEsSUFBT0ssUUFBUDtFQUFBLElBQWlCQyxnQkFBakI7O0VBRUEsZ0JBQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7RUFBQSxJQUFP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QTtFQUFBLEdBQ0ksTUFBQywyQ0FBRDtJQUFRLElBQUksRUFBQyxTQUFiO0lBQXVCLFFBQVEsRUFBQyxRQUFoQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQURKLENBMUJKLENBSkEsQ0FESjtBQXFDSCxDQW5FRDs7R0FBTTVCLE07VUFDdUJDLHVELEVBQ1lBLHVELEVBQ0FBLHVEOzs7TUFIbkNELE07QUFxRVNBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5hNjBlODA2ODY1ZmM3MzliMzhhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBDaGVja2JveCwgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLmRpdiBgY29sb3I6IHJlZGA7XHJcblxyXG5jb25zdCBTaWdudXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaWQsIG9uQ2hhbmdlSWRdID0gdXNlSW5wdXQoJycpO1xyXG4gICAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KCcnKTtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gICAgY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIHNldFBhc3N3b3JkQ2hlY2tdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICAgICAgc2V0UGFzc3dvcmRFcnJvcihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpO1xyXG4gICAgICAgIHNldFBhc3N3b3JkQ2hlY2soZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSwgW3Bhc3N3b3JkXSk7XHJcblxyXG4gICAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2hhbmdlVGVybSA9IHVzZUNhbGxCYWNrKChlKT0+IHtcclxuICAgICAgICBzZXRUZXJtKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsQmFjaygoKSA9PiB7XHJcbiAgICAgICAgaWYocGFzc3dvcmQgIT09IHBhc3N3b3JkQ2hlY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGVybSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhpZCwgbmlja25hbWUsIHBhc3N3b3JkKTtcclxuICAgIH0sIFtwYXNzd29yZCwgcGFzc3dvcmRDaGVjaywgdGVybV0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPu2ajOybkOqwgOyehSB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLWlkJz7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT0ndXNlci1pZCcgdmFsdWU9e2lkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VJZH0+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1uaWNrJz7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT0ndXNlci1uaWNrJyB2YWx1ZT17bmlja25hbWV9IHJlcXVpcmVkIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfT48L0lucHV0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd1c2VyLVBhc3N3b3JkJz7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT0ndXNlci1QYXNzd29yZCcgdmFsdWU9e3Bhc3N3b3JkfSByZXF1aXJlZCBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH0+PC9JbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndXNlci1QYXNzd29yZENoZWNrJz7ruYTrsIDrsojtmLjssrTtgaw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgbmFtZT0ndXNlci1QYXNzd29yZENoZWNrJyB2YWx1ZT17cGFzc3dvcmRDaGVja30gcmVxdWlyZWQgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja30+PC9JbnB1dD5cclxuICAgICAgICAgICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxFcnJvck1lc3NhZ2U+IOu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukLiA8L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2hlY2tib3ggbmFtZT0ndXNlci10ZXJtJyBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT7snbTsmqnsnYQg64+Z7J2Y7ZWp64uI64ukLjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIHt0ZXJtRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOjEwfX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIGh0bWxUeXBlPSdzdWJtaXQnPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuICAiXSwic291cmNlUm9vdCI6IiJ9