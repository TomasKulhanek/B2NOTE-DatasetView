(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~d0ae3f07"],{

/***/ 0:
/*!*****************************************************************************************************************************!*\
  !*** multi aurelia-webpack-plugin/runtime/empty-entry aurelia-webpack-plugin/runtime/pal-loader-entry aurelia-bootstrapper ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! aurelia-webpack-plugin/runtime/empty-entry */"GAND");
__webpack_require__(/*! aurelia-webpack-plugin/runtime/pal-loader-entry */"GmYv");
module.exports = __webpack_require__(/*! aurelia-bootstrapper */"b9nV");


/***/ }),

/***/ "OFPu":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  debug: true,\n  testing: true\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0ZQdS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9lbnZpcm9ubWVudC5qcz8zODUzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVidWc6IHRydWUsXG4gIHRlc3Rpbmc6IHRydWVcbn07XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///OFPu\n");

/***/ }),

/***/ "app":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {}\n\n  var _proto = App.prototype;\n\n  _proto.configureRouter = function configureRouter(config, router) {\n    config.title = 'Aurelia';\n    config.map([{\n      route: ['', 'welcome'],\n      name: 'welcome',\n      moduleId: './welcome',\n      nav: true,\n      title: 'Welcome'\n    }]);\n    this.router = router;\n  };\n\n  return App;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UExBVEZPUk19IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHtcbiAgICAgICAgcm91dGU6IFsnJywgJ3dlbGNvbWUnXSxcbiAgICAgICAgbmFtZTogJ3dlbGNvbWUnLFxuICAgICAgICBtb2R1bGVJZDogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi93ZWxjb21lJyksXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdXZWxjb21lJ1xuICAgICAgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVNBO0FBQ0E7QUFDQTtBQWZBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///app\n");

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<template>\\n  <require from=\\\"bootstrap/dist/css/bootstrap.min.css\\\"></require>\\n  <require from=\\\"font-awesome/css/font-awesome.min.css\\\"></require>\\n  <require from=\\\"./styles.css\\\"></require>\\n\\n  <require from=\\\"./nav-bar.html\\\"></require>\\n\\n  <nav-bar router.bind=\\\"router\\\"></nav-bar>\\n\\n  <div class=\\\"page-host\\\">\\n    <router-view></router-view>\\n  </div>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmh0bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmh0bWw/NDVhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgPHJlcXVpcmUgZnJvbT1cXFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXFxcIj48L3JlcXVpcmU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCJmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXFxcIj48L3JlcXVpcmU+XFxuICA8cmVxdWlyZSBmcm9tPVxcXCIuL3N0eWxlcy5jc3NcXFwiPjwvcmVxdWlyZT5cXG5cXG4gIDxyZXF1aXJlIGZyb209XFxcIi4vbmF2LWJhci5odG1sXFxcIj48L3JlcXVpcmU+XFxuXFxuICA8bmF2LWJhciByb3V0ZXIuYmluZD1cXFwicm91dGVyXFxcIj48L25hdi1iYXI+XFxuXFxuICA8ZGl2IGNsYXNzPVxcXCJwYWdlLWhvc3RcXFwiPlxcbiAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXCI7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///app.html\n");

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"55Il\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ \"G1gL\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environment */ \"OFPu\");\n/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-pal */ \"70NS\");\n\n\n\n\nfunction configure(aurelia) {\n  aurelia.use.standardConfiguration().feature('resources/index');\n  aurelia.use.developmentLogging(_environment__WEBPACK_IMPORTED_MODULE_2__[\"default\"].debug ? 'debug' : 'warn');\n\n  if (_environment__WEBPACK_IMPORTED_MODULE_2__[\"default\"].testing) {\n    aurelia.use.plugin('aurelia-testing');\n  } //Uncomment the line below to enable animation.\n  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));\n  //if the css animator is enabled, add swap-order=\"after\" to all router-view elements\n  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.\n  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));\n\n\n  aurelia.start().then(function () {\n    return aurelia.setRoot('app');\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tYWluLmpzPzU2ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdAYmFiZWwvcG9seWZpbGwnO1xuaW1wb3J0ICdib290c3RyYXAnO1xuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4vZW52aXJvbm1lbnQnO1xuaW1wb3J0IHtQTEFURk9STX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZmVhdHVyZShQTEFURk9STS5tb2R1bGVOYW1lKCdyZXNvdXJjZXMvaW5kZXgnKSk7XG5cbiAgYXVyZWxpYS51c2UuZGV2ZWxvcG1lbnRMb2dnaW5nKGVudmlyb25tZW50LmRlYnVnID8gJ2RlYnVnJyA6ICd3YXJuJyk7XG5cbiAgaWYgKGVudmlyb25tZW50LnRlc3RpbmcpIHtcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS10ZXN0aW5nJykpO1xuICB9XG5cbiAgLy9VbmNvbW1lbnQgdGhlIGxpbmUgYmVsb3cgdG8gZW5hYmxlIGFuaW1hdGlvbi5cbiAgLy8gYXVyZWxpYS51c2UucGx1Z2luKFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJykpO1xuICAvL2lmIHRoZSBjc3MgYW5pbWF0b3IgaXMgZW5hYmxlZCwgYWRkIHN3YXAtb3JkZXI9XCJhZnRlclwiIHRvIGFsbCByb3V0ZXItdmlldyBlbGVtZW50c1xuXG4gIC8vQW55b25lIHdhbnRpbmcgdG8gdXNlIEhUTUxJbXBvcnRzIHRvIGxvYWQgdmlld3MsIHdpbGwgbmVlZCB0byBpbnN0YWxsIHRoZSBmb2xsb3dpbmcgcGx1Z2luLlxuICAvLyBhdXJlbGlhLnVzZS5wbHVnaW4oUExBVEZPUk0ubW9kdWxlTmFtZSgnYXVyZWxpYS1odG1sLWltcG9ydC10ZW1wbGF0ZS1sb2FkZXInKSk7XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KFBMQVRGT1JNLm1vZHVsZU5hbWUoJ2FwcCcpKSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///main\n");

/***/ }),

/***/ "nav-bar.html":
/*!**************************!*\
  !*** ./src/nav-bar.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template bindable=\\\"router\\\">\\n    <nav class=\\\"navbar navbar-default navbar-fixed-top\\\" role=\\\"navigation\\\">\\n      <div class=\\\"navbar-header\\\">\\n        <button type=\\\"button\\\" class=\\\"navbar-toggle\\\" data-toggle=\\\"collapse\\\" data-target=\\\"#navigation-navbar-collapse-1\\\">\\n          <span class=\\\"sr-only\\\">Toggle Navigation</span>\\n          <span class=\\\"icon-bar\\\"></span>\\n          <span class=\\\"icon-bar\\\"></span>\\n          <span class=\\\"icon-bar\\\"></span>\\n        </button>\\n        <a class=\\\"navbar-brand\\\" href=\\\"#\\\">\\n          <i class=\\\"fa fa-home\\\"></i>\\n          <span>${router.title}</span>\\n        </a>\\n      </div>\\n  \\n      <div class=\\\"collapse navbar-collapse\\\" id=\\\"navigation-navbar-collapse-1\\\">\\n        <ul class=\\\"nav navbar-nav\\\">\\n          <li repeat.for=\\\"row of router.navigation\\\" class=\\\"${row.isActive ? 'active' : ''}\\\">\\n            <a data-toggle=\\\"collapse\\\" data-target=\\\"#navigation-navbar-collapse-1.in\\\" href.bind=\\\"row.href\\\">${row.title}</a>\\n          </li>\\n        </ul>\\n  \\n        <ul class=\\\"nav navbar-nav navbar-right\\\">\\n          <li class=\\\"loader\\\" if.bind=\\\"router.isNavigating\\\">\\n            <i class=\\\"fa fa-spinner fa-spin fa-2x\\\"></i>\\n          </li>\\n        </ul>\\n      </div>\\n    </nav>\\n  </template>\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL25hdi1iYXIuaHRtbD9kOTVlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGUgYmluZGFibGU9XFxcInJvdXRlclxcXCI+XFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItZml4ZWQtdG9wXFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJuYXZiYXItaGVhZGVyXFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI25hdmlnYXRpb24tbmF2YmFyLWNvbGxhcHNlLTFcXFwiPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3Itb25seVxcXCI+VG9nZ2xlIE5hdmlnYXRpb248L3NwYW4+XFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uLWJhclxcXCI+PC9zcGFuPlxcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbi1iYXJcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24tYmFyXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIGhyZWY9XFxcIiNcXFwiPlxcbiAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtaG9tZVxcXCI+PC9pPlxcbiAgICAgICAgICA8c3Bhbj4ke3JvdXRlci50aXRsZX08L3NwYW4+XFxuICAgICAgICA8L2E+XFxuICAgICAgPC9kaXY+XFxuICBcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcXFwiIGlkPVxcXCJuYXZpZ2F0aW9uLW5hdmJhci1jb2xsYXBzZS0xXFxcIj5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXZcXFwiPlxcbiAgICAgICAgICA8bGkgcmVwZWF0LmZvcj1cXFwicm93IG9mIHJvdXRlci5uYXZpZ2F0aW9uXFxcIiBjbGFzcz1cXFwiJHtyb3cuaXNBY3RpdmUgPyAnYWN0aXZlJyA6ICcnfVxcXCI+XFxuICAgICAgICAgICAgPGEgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBkYXRhLXRhcmdldD1cXFwiI25hdmlnYXRpb24tbmF2YmFyLWNvbGxhcHNlLTEuaW5cXFwiIGhyZWYuYmluZD1cXFwicm93LmhyZWZcXFwiPiR7cm93LnRpdGxlfTwvYT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICBcXG4gICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgPGxpIGNsYXNzPVxcXCJsb2FkZXJcXFwiIGlmLmJpbmQ9XFxcInJvdXRlci5pc05hdmlnYXRpbmdcXFwiPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1zcGlubmVyIGZhLXNwaW4gZmEtMnhcXFwiPjwvaT5cXG4gICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgICAgPC9kaXY+XFxuICAgIDwvbmF2PlxcbiAgPC90ZW1wbGF0ZT5cIjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///nav-bar.html\n");

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.js ***!
  \********************************/
/*! exports provided: configure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"configure\", function() { return configure; });\nfunction configure(config) {//config.globalResources([]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9pbmRleC5qcz85NzVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG4gIC8vY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXSk7XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///resources/index\n");

/***/ }),

/***/ "styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"I1BE\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n  margin: 0;\\n}\\n\\n.splash {\\n  text-align: center;\\n  margin: 10% 0 0 0;\\n  box-sizing: border-box;\\n}\\n\\n.splash .message {\\n  font-size: 72px;\\n  line-height: 72px;\\n  text-shadow: rgba(0, 0, 0, 0.5) 0 0 15px;\\n  text-transform: uppercase;\\n  font-family: \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n}\\n\\n.splash .fa-spinner {\\n  text-align: center;\\n  display: inline-block;\\n  font-size: 72px;\\n  margin-top: 50px;\\n}\\n\\n.page-host {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 50px;\\n  bottom: 0;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n}\\n\\n@media print {\\n  .page-host {\\n    position: absolute;\\n    left: 10px;\\n    right: 0;\\n    top: 50px;\\n    bottom: 0;\\n    overflow-y: inherit;\\n    overflow-x: inherit;\\n  }\\n}\\n\\nsection {\\n  margin: 0 20px;\\n}\\n\\n.navbar-nav li.loader {\\n  margin: 12px 24px 0 6px;\\n}\\n\\n.pictureDetail {\\n  max-width: 425px;\\n}\\n\\n/* animate page transitions */\\nsection.au-enter-active {\\n  -webkit-animation: fadeInRight 1s;\\n  animation: fadeInRight 1s;\\n}\\n\\ndiv.au-stagger {\\n  /* 50ms will be applied between each successive enter operation */\\n  -webkit-animation-delay: 50ms;\\n  animation-delay: 50ms;\\n}\\n\\n.card-container.au-enter {\\n  opacity: 0;\\n}\\n\\n.card-container.au-enter-active {\\n  -webkit-animation: fadeIn 2s;\\n  animation: fadeIn 2s;\\n}\\n\\n.card {\\n  overflow: hidden;\\n  position: relative;\\n  border: 1px solid #CCC;\\n  border-radius: 8px;\\n  text-align: center;\\n  padding: 0;\\n  background-color: #337ab7;\\n  color: rgb(136, 172, 217);\\n  margin-bottom: 32px;\\n  box-shadow: 0 0 5px rgba(0, 0, 0, .5);\\n}\\n\\n.card .content {\\n  margin-top: 10px;\\n}\\n\\n.card .content .name {\\n  color: white;\\n  text-shadow: 0 0 6px rgba(0, 0, 0, .5);\\n  font-size: 18px;\\n}\\n\\n.card .header-bg {\\n  /* This stretches the canvas across the entire hero unit */\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 70px;\\n  border-bottom: 1px #FFF solid;\\n  border-radius: 6px 6px 0 0;\\n}\\n\\n.card .avatar {\\n  position: relative;\\n  margin-top: 15px;\\n  z-index: 100;\\n}\\n\\n.card .avatar img {\\n  width: 100px;\\n  height: 100px;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  border-radius: 50%;\\n  border: 2px #FFF solid;\\n}\\n\\n/* animation definitions */\\n@-webkit-keyframes fadeInRight {\\n  0% {\\n    opacity: 0;\\n    -webkit-transform: translate3d(100%, 0, 0);\\n    transform: translate3d(100%, 0, 0)\\n  }\\n  100% {\\n    opacity: 1;\\n    -webkit-transform: none;\\n    transform: none\\n  }\\n}\\n\\n@keyframes fadeInRight {\\n  0% {\\n    opacity: 0;\\n    -webkit-transform: translate3d(100%, 0, 0);\\n    -ms-transform: translate3d(100%, 0, 0);\\n    transform: translate3d(100%, 0, 0)\\n  }\\n  100% {\\n    opacity: 1;\\n    -webkit-transform: none;\\n    -ms-transform: none;\\n    transform: none\\n  }\\n}\\n\\n@-webkit-keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes fadeIn {\\n  0% {\\n    opacity: 0;\\n  }\\n  100% {\\n    opacity: 1;\\n  }\\n}\\n\", \"\"]);\n\n// exports\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVzLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ1MDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnNwbGFzaCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwJSAwIDAgMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5zcGxhc2ggLm1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiA3MnB4O1xcbiAgbGluZS1oZWlnaHQ6IDcycHg7XFxuICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDAgMCAxNXB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc3BsYXNoIC5mYS1zcGlubmVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5wYWdlLWhvc3Qge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuQG1lZGlhIHByaW50IHtcXG4gIC5wYWdlLWhvc3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgb3ZlcmZsb3cteTogaW5oZXJpdDtcXG4gICAgb3ZlcmZsb3cteDogaW5oZXJpdDtcXG4gIH1cXG59XFxuXFxuc2VjdGlvbiB7XFxuICBtYXJnaW46IDAgMjBweDtcXG59XFxuXFxuLm5hdmJhci1uYXYgbGkubG9hZGVyIHtcXG4gIG1hcmdpbjogMTJweCAyNHB4IDAgNnB4O1xcbn1cXG5cXG4ucGljdHVyZURldGFpbCB7XFxuICBtYXgtd2lkdGg6IDQyNXB4O1xcbn1cXG5cXG4vKiBhbmltYXRlIHBhZ2UgdHJhbnNpdGlvbnMgKi9cXG5zZWN0aW9uLmF1LWVudGVyLWFjdGl2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluUmlnaHQgMXM7XFxuICBhbmltYXRpb246IGZhZGVJblJpZ2h0IDFzO1xcbn1cXG5cXG5kaXYuYXUtc3RhZ2dlciB7XFxuICAvKiA1MG1zIHdpbGwgYmUgYXBwbGllZCBiZXR3ZWVuIGVhY2ggc3VjY2Vzc2l2ZSBlbnRlciBvcGVyYXRpb24gKi9cXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1MG1zO1xcbiAgYW5pbWF0aW9uLWRlbGF5OiA1MG1zO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIuYXUtZW50ZXIge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyLmF1LWVudGVyLWFjdGl2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIDJzO1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMnM7XFxufVxcblxcbi5jYXJkIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XFxuICBjb2xvcjogcmdiKDEzNiwgMTcyLCAyMTcpO1xcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuNSk7XFxufVxcblxcbi5jYXJkIC5jb250ZW50IHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jYXJkIC5jb250ZW50IC5uYW1lIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtc2hhZG93OiAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2FyZCAuaGVhZGVyLWJnIHtcXG4gIC8qIFRoaXMgc3RyZXRjaGVzIHRoZSBjYW52YXMgYWNyb3NzIHRoZSBlbnRpcmUgaGVybyB1bml0ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggI0ZGRiBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xcbn1cXG5cXG4uY2FyZCAuYXZhdGFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5jYXJkIC5hdmF0YXIgaW1nIHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggI0ZGRiBzb2xpZDtcXG59XFxuXFxuLyogYW5pbWF0aW9uIGRlZmluaXRpb25zICovXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApXFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogbm9uZVxcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKVxcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAtbXMtdHJhbnNmb3JtOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IG5vbmVcXG4gIH1cXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///styles.css\n");

/***/ }),

/***/ "welcome":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/*! exports provided: Welcome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Welcome\", function() { return Welcome; });\n/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ \"aurelia-framework\");\n/* harmony import */ var aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-fetch-client */ \"qQke\");\nvar _dec, _class, _temp;\n\n\n\nvar Welcome = (_dec = Object(aurelia_framework__WEBPACK_IMPORTED_MODULE_0__[\"inject\"])(aurelia_fetch_client__WEBPACK_IMPORTED_MODULE_1__[\"HttpClient\"]), _dec(_class = (_temp =\n/*#__PURE__*/\nfunction () {\n  function Welcome(http) {\n    this.heading = 'B2Note Dataset View';\n    http.configure(function (config) {\n      config.useStandardConfiguration().withBaseUrl('/api/');\n    });\n    this.annotations = {};\n    this.annotations.total = \"N/A\";\n    this.http = http;\n  }\n\n  var _proto = Welcome.prototype;\n\n  _proto.activate = function activate() {\n    var _this = this;\n\n    return this.http.fetch('annotations').then(function (response) {\n      return response.json();\n    }).then(function (annotations) {\n      return _this.annotations = annotations;\n    });\n  };\n\n  return Welcome;\n}(), _temp)) || _class);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy93ZWxjb21lLmpzPzk3NDMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5cbkBpbmplY3QoSHR0cENsaWVudClcbmV4cG9ydCBjbGFzcyBXZWxjb21lIHtcbiAgaGVhZGluZyA9ICdCMk5vdGUgRGF0YXNldCBWaWV3JztcbiAgY29uc3RydWN0b3IoaHR0cCkge1xuICAgIGh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XG4gICAgICBjb25maWdcbiAgICAgICAgLnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgICAgIC53aXRoQmFzZVVybCgnL2FwaS8nKTtcbiAgICB9KTtcbiAgICB0aGlzLmFubm90YXRpb25zID0ge307XG4gICAgdGhpcy5hbm5vdGF0aW9ucy50b3RhbD1cIk4vQVwiO1xuICAgIHRoaXMuaHR0cCA9IGh0dHA7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCdhbm5vdGF0aW9ucycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihhbm5vdGF0aW9ucyA9PiB0aGlzLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnMpO1xuICB9XG5cbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUNBO0FBREE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFsQkE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///welcome\n");

/***/ }),

/***/ "welcome.html":
/*!**************************!*\
  !*** ./src/welcome.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<template>\\n  <section class=\\\"au-animate\\\">\\n    <h2>${heading}</h2>\\n    Total number of annotations:\\n    <b>${annotations.total}</b>\\n  </section>\\n</template>\\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5odG1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlbGNvbWUuaHRtbD83Njc0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICA8c2VjdGlvbiBjbGFzcz1cXFwiYXUtYW5pbWF0ZVxcXCI+XFxuICAgIDxoMj4ke2hlYWRpbmd9PC9oMj5cXG4gICAgVG90YWwgbnVtYmVyIG9mIGFubm90YXRpb25zOlxcbiAgICA8Yj4ke2Fubm90YXRpb25zLnRvdGFsfTwvYj5cXG4gIDwvc2VjdGlvbj5cXG48L3RlbXBsYXRlPlxcblwiOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///welcome.html\n");

/***/ })

},[[0,"runtime~app","vendors~253ae210","vendors~556c66f2","vendors~bdd45853","vendors~72fdf3f2","vendors~50e8d500","vendors~5ea1390f","vendors~ecff2e3d","vendors~02227409","vendors~b819d857","vendors~d939e436","vendors~41983590","vendors~11bb84b7","vendors~00cb062a","vendors~678f84af"]]]);