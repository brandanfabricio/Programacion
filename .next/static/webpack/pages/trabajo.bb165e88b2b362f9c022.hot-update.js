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

  var formulario;

  var VerF = function VerF() {
    if (!verF) {
      ActualizarVerF(true);
      formulario = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_formulario_index__WEBPACK_IMPORTED_MODULE_2__.Formulario, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 20
      }, _this);
    } else {
      ActualizarVerF(false);
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
      lineNumber: 54,
      columnNumber: 17
    }, this);
  } else if (num == 2) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Pollo, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this);
  } else if (num == 3) {
    recetas = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_recetas_index__WEBPACK_IMPORTED_MODULE_0__.Papa, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h1", {
      children: "Materia de Prgramacion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: Ver,
      children: "Recetas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
      onClick: VerF,
      children: "Formulario"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }, this), formulario, ver ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("section", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Anterior,
        children: "anterior"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: Siguente,
        children: "Siguente"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, this), recetas]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdHJhYmFqby5iYjE2NWU4OGIyYjM2MmY5YzAyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBSWUsU0FBU0ssSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUU3QixrQkFBMEJGLCtDQUFRLENBQUMsQ0FBRCxDQUFsQztBQUFBLE1BQU1HLEdBQU47QUFBQSxNQUFVQyxhQUFWOztBQUVBLG1CQUEyQkosK0NBQVEsQ0FBQyxLQUFELENBQW5DO0FBQUEsTUFBTUssR0FBTjtBQUFBLE1BQVVDLGFBQVY7O0FBQ0EsbUJBQTZCTiwrQ0FBUSxDQUFDLEtBQUQsQ0FBckM7QUFBQSxNQUFNTyxJQUFOO0FBQUEsTUFBV0MsY0FBWDs7QUFHRCxNQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFJO0FBRWQsUUFBRyxDQUFDSixHQUFKLEVBQVM7QUFDVEMsTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBLEtBRkEsTUFHSTtBQUNKQSxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBRUM7QUFFRixHQVZEOztBQVlBLE1BQUlJLFVBQUo7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNsQixRQUFHLENBQUNKLElBQUosRUFBVTtBQUNSQyxNQUFBQSxjQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0VFLE1BQUFBLFVBQVUsZ0JBQUcsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFiO0FBQ0YsS0FIRixNQUlNO0FBQ0pGLE1BQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFFQztBQUVILEdBVkQ7O0FBY0EsTUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSTtBQUNuQixRQUFJQyxRQUFRLEdBQUdWLEdBQUcsR0FBRyxDQUFyQjtBQUNBQyxJQUFBQSxhQUFhLENBQUNTLFFBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0QsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNyQixRQUFJQyxRQUFRLEdBQUdaLEdBQUcsR0FBRSxDQUFwQjtBQUNBQyxJQUFBQSxhQUFhLENBQUNXLFFBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0UsTUFBSUMsT0FBSjs7QUFDQSxNQUFHYixHQUFHLElBQUksQ0FBVixFQUFZO0FBQ1JhLElBQUFBLE9BQU8sZ0JBQUcsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0wsR0FGQyxNQUVLLElBQUdiLEdBQUcsSUFBSSxDQUFWLEVBQVk7QUFDakJhLElBQUFBLE9BQU8sZ0JBQUcsOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0QsR0FGTSxNQUVELElBQUdiLEdBQUcsSUFBSSxDQUFWLEVBQVk7QUFDaEJhLElBQUFBLE9BQU8sZ0JBQUcsOERBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFWO0FBQ0Q7O0FBS0Qsc0JBQ1E7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBUSxhQUFPLEVBQUVQLEdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFRLGFBQU8sRUFBRUUsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixFQUlJRCxVQUpKLEVBU0dMLEdBQUcsZ0JBRUo7QUFBQSw4QkFFQTtBQUFRLGVBQU8sRUFBRVMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQSxlQUdBO0FBQVEsZUFBTyxFQUFFRixRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhBLEVBSUdJLE9BSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkksR0FlRixJQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQTZCQzs7R0F0RnVCZCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RyYWJham9zL1Byb2dyYW1hY2lvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h1ZXZvLFBvbGxvLFBhcGF9IGZyb20gJy4vcmVjZXRhcy9pbmRleCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybXVsYXJpb30gZnJvbSAnLi9mb3JtdWxhcmlvL2luZGV4JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9sYSgpIHtcclxuXHJcbiAgY29uc3RbbnVtLGFjdHVhbGl6YXJOdW1dID11c2VTdGF0ZSgxKVxyXG5cclxuICBjb25zdFt2ZXIsQWN0dWFsaXphclZlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdFt2ZXJGLEFjdHVhbGl6YXJWZXJGXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuXHJcbiBjb25zdCBWZXIgPSAoKT0+e1xyXG5cclxuICAgaWYoIXZlciApe1xyXG4gICBBY3R1YWxpemFyVmVyKHRydWUpXHJcbiAgfVxyXG4gICBlbHNle1xyXG4gICBBY3R1YWxpemFyVmVyKGZhbHNlKVxyXG5cclxuICAgfVxyXG4gICAgXHJcbiB9XHJcblxyXG4gbGV0IGZvcm11bGFyaW87XHJcbiBjb25zdCBWZXJGID0gKCkgPT4ge1xyXG4gIGlmKCF2ZXJGICl7XHJcbiAgICBBY3R1YWxpemFyVmVyRih0cnVlKVxyXG4gICAgICBmb3JtdWxhcmlvID0gPEZvcm11bGFyaW8vPlxyXG4gICB9XHJcbiAgICBlbHNle1xyXG4gICAgQWN0dWFsaXphclZlckYoZmFsc2UpXHJcbiBcclxuICAgIH1cclxuXHJcbiB9XHJcblxyXG5cclxuXHJcbiBjb25zdCBTaWd1ZW50ZSA9ICgpPT57XHJcbiAgIGxldCBzaWdpZW50ZSA9IG51bSArIDE7XHJcbiAgIGFjdHVhbGl6YXJOdW0oc2lnaWVudGUpIFxyXG4gfVxyXG5cclxuY29uc3QgQW50ZXJpb3IgPSAoKSA9PiB7XHJcbiAgbGV0IGFudGVyaW9yID0gbnVtIC0xO1xyXG4gIGFjdHVhbGl6YXJOdW0oYW50ZXJpb3IpXHJcbn1cclxuXHJcbiAgbGV0IHJlY2V0YXM7XHJcbiAgaWYobnVtID09IDEpeyAgXHJcbiAgICAgIHJlY2V0YXMgPSA8SHVldm8vPiAgICBcclxufSBlbHNlIGlmKG51bSA9PSAyKXsgXHJcbiAgcmVjZXRhcyA9IDxQb2xsby8+XHJcbn1lbHNlIGlmKG51bSA9PSAzKXsgXHJcbiAgcmVjZXRhcyA9IDxQYXBhLz5cclxufVxyXG4gIFxyXG5cclxuXHJcblxyXG5yZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDE+TWF0ZXJpYSBkZSBQcmdyYW1hY2lvbjwvaDE+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e1Zlcn0+UmVjZXRhczwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtWZXJGfT5Gb3JtdWxhcmlvPC9idXR0b24+XHJcbiAgICAgICAgICB7IGZvcm11bGFyaW99IFxyXG5cclxuXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAge3Zlcj8gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17QW50ZXJpb3J9PmFudGVyaW9yPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e1NpZ3VlbnRlfT5TaWd1ZW50ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgIHsgcmVjZXRhcyB9IFxyXG4gICAgICAgICBcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA6IG51bGwgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkh1ZXZvIiwiUG9sbG8iLCJQYXBhIiwidXNlU3RhdGUiLCJGb3JtdWxhcmlvIiwiaG9sYSIsIm51bSIsImFjdHVhbGl6YXJOdW0iLCJ2ZXIiLCJBY3R1YWxpemFyVmVyIiwidmVyRiIsIkFjdHVhbGl6YXJWZXJGIiwiVmVyIiwiZm9ybXVsYXJpbyIsIlZlckYiLCJTaWd1ZW50ZSIsInNpZ2llbnRlIiwiQW50ZXJpb3IiLCJhbnRlcmlvciIsInJlY2V0YXMiXSwic291cmNlUm9vdCI6IiJ9