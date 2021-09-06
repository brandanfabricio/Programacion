"use strict";
self["webpackHotUpdate_N_E"]("pages/trabajo",{

/***/ "./components/trabajos/Programacion.js":
/*!*********************************************!*\
  !*** ./components/trabajos/Programacion.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hola; }
/* harmony export */ });
/* harmony import */ var _recetas_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recetas/index */ "./components/trabajos/recetas/index.js");
/* harmony import */ var _recetas_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_recetas_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _formulario_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formulario/index */ "./components/trabajos/formulario/index.js");
/* harmony import */ var _formulario_index__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formulario_index__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\fabri\\Desktop\\Programacion\\Programacion\\components\\trabajos\\Programacion.js",
    _s = $RefreshSig$();





function hola() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      num = _useState[0],
      actualizarNum = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      ver = _useState2[0],
      ActualizarVer = _useState2[1];

  var Ver = function Ver() {
    if (!ver) {
      ActualizarVer(true);
    } else {
      ActualizarVer(false);
    }
  };

  var formulario;

  var VerF = function VerF() {
    if (!ver) {
      ActualizarVer(true);
      formulario = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_formulario_index__WEBPACK_IMPORTED_MODULE_2__.Formulario, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 20
      }, _this);
    } else {
      ActualizarVer(false);
    }
  };

  var Siguente = function Siguente() {
    var sigiente = num + 1;
    actualizarNum(sigiente);
  };

  var Anterior = function Anterior() {
    var anterior = num - 1;
    actualizarNum(anterior);
  };

  var recetas;

  if (num == 1) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Huevo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }, this);
  } else if (num == 2) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Pollo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this);
  } else if (num == 3) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Papa, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Materia de Prgramacion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }, this), ver ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Anterior,
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Siguente,
        children: "Siguente"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this), recetas]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }, this) : null, formulario]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 9
  }, this);
}

_s(hola, "9sU0JrrJFx4rYuNZ7Qg4JVNlED8=");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhYmFqby45NjA5NzlkNmFhZjljNzdkZGUxMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUU3QixrQkFBMEJGLCtDQUFRLENBQUMsQ0FBRCxDQUFsQztBQUFBLE1BQU1HLEdBQU47QUFBQSxNQUFVQyxhQUFWOztBQUVBLG1CQUEyQkosK0NBQVEsQ0FBQyxLQUFELENBQW5DO0FBQUEsTUFBTUssR0FBTjtBQUFBLE1BQVVDLGFBQVY7O0FBRUQsTUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBSTtBQUVkLFFBQUcsQ0FBQ0YsR0FBSixFQUFTO0FBQ1RDLE1BQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDQSxLQUZBLE1BR0k7QUFDSkEsTUFBQUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUVDO0FBRUYsR0FWRDs7QUFXQSxNQUFJRSxVQUFKOztBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDbEIsUUFBRyxDQUFDSixHQUFKLEVBQVM7QUFDUEMsTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNFRSxNQUFBQSxVQUFVLGdCQUFHLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBYjtBQUNGLEtBSEYsTUFJTTtBQUNKRixNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBRUM7QUFFSCxHQVZEOztBQWNBLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUk7QUFDbkIsUUFBSUMsUUFBUSxHQUFHUixHQUFHLEdBQUcsQ0FBckI7QUFDQUMsSUFBQUEsYUFBYSxDQUFDTyxRQUFELENBQWI7QUFDRCxHQUhEOztBQUtELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSUMsUUFBUSxHQUFHVixHQUFHLEdBQUUsQ0FBcEI7QUFDQUMsSUFBQUEsYUFBYSxDQUFDUyxRQUFELENBQWI7QUFDRCxHQUhEOztBQUtFLE1BQUlDLE9BQUo7O0FBQ0EsTUFBR1gsR0FBRyxJQUFJLENBQVYsRUFBWTtBQUNSVyxJQUFBQSxPQUFPLGdCQUFHLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNMLEdBRkMsTUFFSyxJQUFHWCxHQUFHLElBQUksQ0FBVixFQUFZO0FBQ2pCVyxJQUFBQSxPQUFPLGdCQUFHLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNELEdBRk0sTUFFRCxJQUFHWCxHQUFHLElBQUksQ0FBVixFQUFZO0FBQ2hCVyxJQUFBQSxPQUFPLGdCQUFHLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNEOztBQUtELHNCQUNRO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQU9HVCxHQUFHLGdCQUVKO0FBQUEsOEJBRUE7QUFBUSxlQUFPLEVBQUVPLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFHQTtBQUFRLGVBQU8sRUFBRUYsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxFQUlHSSxPQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZJLEdBZUYsSUF0QkosRUF3QktOLFVBeEJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURSO0FBNEJDOztHQWxGdUJOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHJhYmFqb3MvUHJvZ3JhbWFjaW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHVldm8sUG9sbG8sUGFwYX0gZnJvbSAnLi9yZWNldGFzL2luZGV4JztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtdWxhcmlvfSBmcm9tICcuL2Zvcm11bGFyaW8vaW5kZXgnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob2xhKCkge1xyXG5cclxuICBjb25zdFtudW0sYWN0dWFsaXphck51bV0gPXVzZVN0YXRlKDEpXHJcblxyXG4gIGNvbnN0W3ZlcixBY3R1YWxpemFyVmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuIGNvbnN0IFZlciA9ICgpPT57XHJcblxyXG4gICBpZighdmVyICl7XHJcbiAgIEFjdHVhbGl6YXJWZXIodHJ1ZSlcclxuICB9XHJcbiAgIGVsc2V7XHJcbiAgIEFjdHVhbGl6YXJWZXIoZmFsc2UpXHJcblxyXG4gICB9XHJcbiAgICBcclxuIH1cclxuIGxldCBmb3JtdWxhcmlvO1xyXG4gY29uc3QgVmVyRiA9ICgpID0+IHtcclxuICBpZighdmVyICl7XHJcbiAgICBBY3R1YWxpemFyVmVyKHRydWUpXHJcbiAgICAgIGZvcm11bGFyaW8gPSA8Rm9ybXVsYXJpby8+XHJcbiAgIH1cclxuICAgIGVsc2V7XHJcbiAgICBBY3R1YWxpemFyVmVyKGZhbHNlKVxyXG4gXHJcbiAgICB9XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG4gY29uc3QgU2lndWVudGUgPSAoKT0+e1xyXG4gICBsZXQgc2lnaWVudGUgPSBudW0gKyAxO1xyXG4gICBhY3R1YWxpemFyTnVtKHNpZ2llbnRlKSBcclxuIH1cclxuXHJcbmNvbnN0IEFudGVyaW9yID0gKCkgPT4ge1xyXG4gIGxldCBhbnRlcmlvciA9IG51bSAtMTtcclxuICBhY3R1YWxpemFyTnVtKGFudGVyaW9yKVxyXG59XHJcblxyXG4gIGxldCByZWNldGFzO1xyXG4gIGlmKG51bSA9PSAxKXsgIFxyXG4gICAgICByZWNldGFzID0gPEh1ZXZvLz4gICAgXHJcbn0gZWxzZSBpZihudW0gPT0gMil7IFxyXG4gIHJlY2V0YXMgPSA8UG9sbG8vPlxyXG59ZWxzZSBpZihudW0gPT0gMyl7IFxyXG4gIHJlY2V0YXMgPSA8UGFwYS8+XHJcbn1cclxuICBcclxuXHJcblxyXG5cclxucmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPk1hdGVyaWEgZGUgUHJncmFtYWNpb248L2gxPlxyXG5cclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICB7dmVyPyBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtBbnRlcmlvcn0+YW50ZXJpb3I8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17U2lndWVudGV9PlNpZ3VlbnRlPC9idXR0b24+XHJcbiAgICAgICAgICAgeyByZWNldGFzIH0gXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDogbnVsbCAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB7IGZvcm11bGFyaW99IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIdWV2byIsIlBvbGxvIiwiUGFwYSIsInVzZVN0YXRlIiwiRm9ybXVsYXJpbyIsImhvbGEiLCJudW0iLCJhY3R1YWxpemFyTnVtIiwidmVyIiwiQWN0dWFsaXphclZlciIsIlZlciIsImZvcm11bGFyaW8iLCJWZXJGIiwiU2lndWVudGUiLCJzaWdpZW50ZSIsIkFudGVyaW9yIiwiYW50ZXJpb3IiLCJyZWNldGFzIl0sInNvdXJjZVJvb3QiOiIifQ==