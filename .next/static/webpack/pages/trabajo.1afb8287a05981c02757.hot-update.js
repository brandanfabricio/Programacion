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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      num = _useState[0],
      actualizarNum = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      ver = _useState2[0],
      ActualizarVer = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      verF = _useState3[0],
      ActualizarVerF = _useState3[1];

  var Ver = function Ver() {
    if (!ver) {
      ActualizarVer(true);
    } else {
      ActualizarVer(false);
    }
  };

  var Form;

  var VerF = function VerF() {
    if (verF) {
      ActualizarVerF(false);
    } else {
      ActualizarVerF(true);
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
      lineNumber: 53,
      columnNumber: 17
    }, this);
  } else if (num == 2) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Pollo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this);
  } else if (num == 3) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Papa, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Materia de Prgramacion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: Ver,
      children: "Recetas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: VerF,
      children: "Formulario"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }, this), ver ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Anterior,
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Siguente,
        children: "Siguente"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this), recetas]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }, this) : null, verF ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_formulario_index__WEBPACK_IMPORTED_MODULE_2__.Formulario, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 22
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 9
  }, this);
}

_s(hola, "NpgmhUqZ5Aq/Lo+BQYRZ33or2CM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhYmFqby4xYWZiODI4N2EwNTk4MWMwMjc1Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUU3QixrQkFBMEJGLCtDQUFRLENBQUMsQ0FBRCxDQUFsQztBQUFBLE1BQU1HLEdBQU47QUFBQSxNQUFVQyxhQUFWOztBQUVBLG1CQUEyQkosK0NBQVEsQ0FBQyxLQUFELENBQW5DO0FBQUEsTUFBTUssR0FBTjtBQUFBLE1BQVVDLGFBQVY7O0FBQ0EsbUJBQTZCTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBckM7QUFBQSxNQUFNTyxJQUFOO0FBQUEsTUFBV0MsY0FBWDs7QUFHRCxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFJO0FBRWQsUUFBRyxDQUFDSixHQUFKLEVBQVM7QUFDVEMsTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLEtBRkEsTUFHSTtBQUNKQSxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBRUM7QUFFRixHQVZEOztBQVlBLE1BQUlJLElBQUo7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQixRQUFHSixJQUFILEVBQVM7QUFDUEMsTUFBQUEsY0FBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBLEtBRkYsTUFHTTtBQUNKQSxNQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBRUM7QUFFSCxHQVREOztBQWFBLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUk7QUFDbkIsUUFBSUMsUUFBUSxHQUFHVixHQUFHLEdBQUcsQ0FBckI7QUFDQUMsSUFBQUEsYUFBYSxDQUFDUyxRQUFELENBQWI7QUFDRCxHQUhEOztBQUtELE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBSUMsUUFBUSxHQUFHWixHQUFHLEdBQUUsQ0FBcEI7QUFDQUMsSUFBQUEsYUFBYSxDQUFDVyxRQUFELENBQWI7QUFDRCxHQUhEOztBQUtFLE1BQUlDLE9BQUo7O0FBQ0EsTUFBR2IsR0FBRyxJQUFJLENBQVYsRUFBWTtBQUNSYSxJQUFBQSxPQUFPLGdCQUFHLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNMLEdBRkMsTUFFSyxJQUFHYixHQUFHLElBQUksQ0FBVixFQUFZO0FBQ2pCYSxJQUFBQSxPQUFPLGdCQUFHLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNELEdBRk0sTUFFRCxJQUFHYixHQUFHLElBQUksQ0FBVixFQUFZO0FBQ2hCYSxJQUFBQSxPQUFPLGdCQUFHLDhEQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBVjtBQUNEOztBQUtELHNCQUNRO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQVEsYUFBTyxFQUFFUCxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBUSxhQUFPLEVBQUVFLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFTR04sR0FBRyxnQkFFSjtBQUFBLDhCQUVBO0FBQVEsZUFBTyxFQUFFUyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBLGVBR0E7QUFBUSxlQUFPLEVBQUVGLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEEsRUFJR0ksT0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSSxHQWVGLElBeEJKLEVBeUJPVCxJQUFJLGdCQUFFLDhEQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBRixHQUFnQixJQXpCM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFI7QUE2QkM7O0dBckZ1QkwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90cmFiYWpvcy9Qcm9ncmFtYWNpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdWV2byxQb2xsbyxQYXBhfSBmcm9tICcuL3JlY2V0YXMvaW5kZXgnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm11bGFyaW99IGZyb20gJy4vZm9ybXVsYXJpby9pbmRleCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbGEoKSB7XHJcblxyXG4gIGNvbnN0W251bSxhY3R1YWxpemFyTnVtXSA9dXNlU3RhdGUoMSlcclxuXHJcbiAgY29uc3RbdmVyLEFjdHVhbGl6YXJWZXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3RbdmVyRixBY3R1YWxpemFyVmVyRl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gY29uc3QgVmVyID0gKCk9PntcclxuXHJcbiAgIGlmKCF2ZXIgKXtcclxuICAgQWN0dWFsaXphclZlcih0cnVlKVxyXG4gIH1cclxuICAgZWxzZXtcclxuICAgQWN0dWFsaXphclZlcihmYWxzZSlcclxuXHJcbiAgIH1cclxuICAgIFxyXG4gfVxyXG5cclxuIGxldCBGb3JtO1xyXG4gY29uc3QgVmVyRiA9ICgpID0+IHtcclxuICBpZih2ZXJGICl7XHJcbiAgICBBY3R1YWxpemFyVmVyRihmYWxzZSlcclxuICAgfVxyXG4gICAgZWxzZXtcclxuICAgIEFjdHVhbGl6YXJWZXJGKHRydWUpXHJcbiBcclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbiBjb25zdCBTaWd1ZW50ZSA9ICgpPT57XHJcbiAgIGxldCBzaWdpZW50ZSA9IG51bSArIDE7XHJcbiAgIGFjdHVhbGl6YXJOdW0oc2lnaWVudGUpIFxyXG4gfVxyXG5cclxuY29uc3QgQW50ZXJpb3IgPSAoKSA9PiB7XHJcbiAgbGV0IGFudGVyaW9yID0gbnVtIC0xO1xyXG4gIGFjdHVhbGl6YXJOdW0oYW50ZXJpb3IpXHJcbn1cclxuXHJcbiAgbGV0IHJlY2V0YXM7XHJcbiAgaWYobnVtID09IDEpeyAgXHJcbiAgICAgIHJlY2V0YXMgPSA8SHVldm8vPiAgICBcclxufSBlbHNlIGlmKG51bSA9PSAyKXsgXHJcbiAgcmVjZXRhcyA9IDxQb2xsby8+XHJcbn1lbHNlIGlmKG51bSA9PSAzKXsgXHJcbiAgcmVjZXRhcyA9IDxQYXBhLz5cclxufVxyXG4gIFxyXG5cclxuXHJcblxyXG5yZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+TWF0ZXJpYSBkZSBQcmdyYW1hY2lvbjwvaDE+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e1Zlcn0+UmVjZXRhczwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtWZXJGfT5Gb3JtdWxhcmlvPC9idXR0b24+XHJcbiAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgIHt2ZXI/IFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0FudGVyaW9yfT5hbnRlcmlvcjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtTaWd1ZW50ZX0+U2lndWVudGU8L2J1dHRvbj5cclxuICAgICAgICAgICB7IHJlY2V0YXMgfSBcclxuICAgICAgICAgXHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgOiBudWxsICB9XHJcbiAgICAgICAgICAgICAge3ZlckY/IDxGb3JtdWxhcmlvLz46bnVsbH0gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkh1ZXZvIiwiUG9sbG8iLCJQYXBhIiwidXNlU3RhdGUiLCJGb3JtdWxhcmlvIiwiaG9sYSIsIm51bSIsImFjdHVhbGl6YXJOdW0iLCJ2ZXIiLCJBY3R1YWxpemFyVmVyIiwidmVyRiIsIkFjdHVhbGl6YXJWZXJGIiwiVmVyIiwiRm9ybSIsIlZlckYiLCJTaWd1ZW50ZSIsInNpZ2llbnRlIiwiQW50ZXJpb3IiLCJhbnRlcmlvciIsInJlY2V0YXMiXSwic291cmNlUm9vdCI6IiJ9