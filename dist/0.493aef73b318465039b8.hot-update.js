webpackHotUpdate(0,{

/***/ 12:
/***/ (function(module, exports) {

throw new Error("Module parse failed: /Users/topiniu/Github/webpack-demo/src/md.md Unexpected character '#' (1:0)\nYou may need an appropriate loader to handle this file type.\n| # this is a title!");

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md_md__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__md_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__md_md__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_png__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__icon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__print_js__ = __webpack_require__(1);






function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], '');
  element.innerHTML = __WEBPACK_IMPORTED_MODULE_2__md_md__["default"];
  // element.classList.add('hello');

  // var myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = __WEBPACK_IMPORTED_MODULE_4__print_js__["default"];
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

/***/ })

})
//# sourceMappingURL=0.493aef73b318465039b8.hot-update.js.map