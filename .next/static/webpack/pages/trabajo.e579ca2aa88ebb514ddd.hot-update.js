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

  var verF = function verF() {
    /*#__PURE__*/
    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_formulario_index__WEBPACK_IMPORTED_MODULE_2__.Formulario, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }, _this);
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
      lineNumber: 43,
      columnNumber: 17
    }, this);
  } else if (num == 2) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Pollo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this);
  } else if (num == 3) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Papa, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Materia de Prgramacion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: Ver,
      children: "Recetas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: VerF,
      children: "Formulario"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }, this), ver ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Anterior,
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Siguente,
        children: "Siguente"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }, this), recetas]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhYmFqby5lNTc5Y2EyYWE4OGViYjUxNGRkZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUU3QixrQkFBMEJGLCtDQUFRLENBQUMsQ0FBRCxDQUFsQztBQUFBLE1BQU1HLEdBQU47QUFBQSxNQUFVQyxhQUFWOztBQUVBLG1CQUEyQkosK0NBQVEsQ0FBQyxLQUFELENBQW5DO0FBQUEsTUFBTUssR0FBTjtBQUFBLE1BQVVDLGFBQVY7O0FBRUQsTUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBSTtBQUVkLFFBQUcsQ0FBQ0YsR0FBSixFQUFTO0FBQ1RDLE1BQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDQSxLQUZBLE1BR0k7QUFDSkEsTUFBQUEsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUVDO0FBRUYsR0FWRDs7QUFXQSxNQUFNRSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2xCO0FBQUEsa0VBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLEdBSEQ7O0FBT0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSTtBQUNuQixRQUFJQyxRQUFRLEdBQUdQLEdBQUcsR0FBRyxDQUFyQjtBQUNBQyxJQUFBQSxhQUFhLENBQUNNLFFBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0QsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFJQyxRQUFRLEdBQUdULEdBQUcsR0FBRSxDQUFwQjtBQUNBQyxJQUFBQSxhQUFhLENBQUNRLFFBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0UsTUFBSUMsT0FBSjs7QUFDQSxNQUFHVixHQUFHLElBQUksQ0FBVixFQUFZO0FBQ1JVLElBQUFBLE9BQU8sZ0JBQUcsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0wsR0FGQyxNQUVLLElBQUdWLEdBQUcsSUFBSSxDQUFWLEVBQVk7QUFDakJVLElBQUFBLE9BQU8sZ0JBQUcsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0QsR0FGTSxNQUVELElBQUdWLEdBQUcsSUFBSSxDQUFWLEVBQVk7QUFDaEJVLElBQUFBLE9BQU8sZ0JBQUcsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0Q7O0FBS0Qsc0JBQ1E7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVOLEdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFRLGFBQU8sRUFBRU8sSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQVFHVCxHQUFHLGdCQUVKO0FBQUEsOEJBRUE7QUFBUSxlQUFPLEVBQUVNLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkEsZUFHQTtBQUFRLGVBQU8sRUFBRUYsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIQSxFQUlDSSxPQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZJLEdBYUYsSUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUEyQkM7O0dBekV1QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmFiYWpvcy9Qcm9ncmFtYWNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdWV2byxQb2xsbyxQYXBhfSBmcm9tICcuL3JlY2V0YXMvaW5kZXgnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm11bGFyaW99IGZyb20gJy4vZm9ybXVsYXJpby9pbmRleCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbGEoKSB7XHJcblxyXG4gIGNvbnN0W251bSxhY3R1YWxpemFyTnVtXSA9dXNlU3RhdGUoMSlcclxuXHJcbiAgY29uc3RbdmVyLEFjdHVhbGl6YXJWZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gY29uc3QgVmVyID0gKCk9PntcclxuXHJcbiAgIGlmKCF2ZXIgKXtcclxuICAgQWN0dWFsaXphclZlcih0cnVlKVxyXG4gIH1cclxuICAgZWxzZXtcclxuICAgQWN0dWFsaXphclZlcihmYWxzZSlcclxuXHJcbiAgIH1cclxuICAgIFxyXG4gfVxyXG4gY29uc3QgdmVyRiA9ICgpID0+IHtcclxuICA8Rm9ybXVsYXJpby8+XHJcblxyXG4gfVxyXG5cclxuXHJcblxyXG4gY29uc3QgU2lndWVudGUgPSAoKT0+e1xyXG4gICBsZXQgc2lnaWVudGUgPSBudW0gKyAxO1xyXG4gICBhY3R1YWxpemFyTnVtKHNpZ2llbnRlKSBcclxuIH1cclxuXHJcbmNvbnN0IEFudGVyaW9yID0gKCkgPT4ge1xyXG4gIGxldCBhbnRlcmlvciA9IG51bSAtMTtcclxuICBhY3R1YWxpemFyTnVtKGFudGVyaW9yKVxyXG59XHJcblxyXG4gIGxldCByZWNldGFzO1xyXG4gIGlmKG51bSA9PSAxKXsgIFxyXG4gICAgICByZWNldGFzID0gPEh1ZXZvLz4gICAgXHJcbn0gZWxzZSBpZihudW0gPT0gMil7IFxyXG4gIHJlY2V0YXMgPSA8UG9sbG8vPlxyXG59ZWxzZSBpZihudW0gPT0gMyl7IFxyXG4gIHJlY2V0YXMgPSA8UGFwYS8+XHJcbn1cclxuICBcclxuXHJcblxyXG5cclxucmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPk1hdGVyaWEgZGUgUHJncmFtYWNpb248L2gxPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtWZXJ9PlJlY2V0YXM8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17VmVyRn0+Rm9ybXVsYXJpbzwvYnV0dG9uPlxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgIHt2ZXI/IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0FudGVyaW9yfT5hbnRlcmlvcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtTaWd1ZW50ZX0+U2lndWVudGU8L2J1dHRvbj5cclxuICAgICAgICAgeyByZWNldGFzIH1cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOiBudWxsICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiSHVldm8iLCJQb2xsbyIsIlBhcGEiLCJ1c2VTdGF0ZSIsIkZvcm11bGFyaW8iLCJob2xhIiwibnVtIiwiYWN0dWFsaXphck51bSIsInZlciIsIkFjdHVhbGl6YXJWZXIiLCJWZXIiLCJ2ZXJGIiwiU2lndWVudGUiLCJzaWdpZW50ZSIsIkFudGVyaW9yIiwiYW50ZXJpb3IiLCJyZWNldGFzIiwiVmVyRiJdLCJzb3VyY2VSb290IjoiIn0=