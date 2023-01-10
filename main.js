/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.container {\r\n    width: 650px;\r\n    margin: 50px auto;\r\n    color: black;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n    font-size: 1rem;\r\n}\r\n\r\n.project,\r\n.form,\r\n.add-project {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: white;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    transition: transform .1s ease-in;\r\n}\r\n\r\n.project:hover,\r\n.add-project:hover {\r\n    transform: translateY(-6px);\r\n}\r\n\r\n.add-project {\r\n    font-size: 2rem;\r\n}\r\n\r\n.project {\r\n    position: relative;\r\n}\r\n\r\n.count {\r\n    font-size: 1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 35px;\r\n    right: 35px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/*project containers page*/\r\n/*proj container header*/\r\n.container header {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, auto);\r\n    align-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n/*.add-todo {\r\n    background-color: #0066ff;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    justify-self: end;\r\n}*/\r\n.proj-nav {\r\n    justify-self: end;\r\n    align-self: end;\r\n    position: relative;\r\n}\r\n\r\n.proj-nav ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n\r\n    top: 0;\r\n    right: 0;\r\n\r\n    min-width: 110px;\r\n    font-size: 14px;\r\n\r\n\r\n    font-weight: lighter;\r\n    transform: scale(0);\r\n    transform-origin: top right;\r\n    transition: transform .1s ease-in;\r\n\r\n    background-color: #0066ff;\r\n    color: white;\r\n    list-style-type: none;\r\n}\r\n\r\n.proj-nav:hover ul {\r\n    transform: scale(1);\r\n}\r\n\r\n.proj-nav li {\r\n    margin: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.proj-nav li:hover {\r\n    color: #BEB7A4;\r\n}\r\n\r\n/*proj container main*/\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: auto;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\nul .to-do {\r\n    display: grid;\r\n    justify-content: space-between;\r\n    justify-items: end;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n    padding: 8px;\r\n\r\n}\r\n\r\nul .to-do:hover {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.to-do form {\r\n    justify-self: start;\r\n}\r\n\r\n.to-do .delete {\r\n    cursor: pointer;\r\n    background-color: red;\r\n    padding: 3px;\r\n    color: white;\r\n}\r\n\r\n/*form */\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    width: 200px;\r\n    height: auto;\r\n    padding: 10px 0;\r\n    cursor: default;\r\n    align-items: center;\r\n    transform: translateX(-250px);\r\n    transition: transform 0.1s ease-in;\r\n}\r\n\r\n.form.slide {\r\n    transform: translateX(0);\r\n}\r\n\r\n.form h3 {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row label {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    padding: 4px;\r\n}\r\n\r\n.form-row>* {\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    border: none;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,eAAe;IACf,eAAe;AACnB;;AAEA;;;IAGI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,0CAA0C;IAC1C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iCAAiC;AACrC;;AAEA;;IAEI,2BAA2B;AAC/B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,oCAAoC;AACxC;;AAEA,0BAA0B;AAC1B,wBAAwB;AACxB;IACI,aAAa;IACb,sCAAsC;IACtC,qBAAqB;IACrB,SAAS;IACT,mBAAmB;AACvB;;AAEA;;;;;;EAME;AACF;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;;IAElB,MAAM;IACN,QAAQ;;IAER,gBAAgB;IAChB,eAAe;;;IAGf,oBAAoB;IACpB,mBAAmB;IACnB,2BAA2B;IAC3B,iCAAiC;;IAEjC,yBAAyB;IACzB,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA,sBAAsB;;AAEtB;IACI,WAAW;IACX,kBAAkB;AACtB;;;;AAIA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,qCAAqC;IACrC,SAAS;IACT,mBAAmB;IACnB,YAAY;;AAEhB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,YAAY;IACZ,YAAY;AAChB;;AAEA,QAAQ;;AAER;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,kCAAkC;AACtC;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,uBAAuB;IACvB,YAAY;AAChB","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n    font-weight: bold;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.container {\r\n    width: 650px;\r\n    margin: 50px auto;\r\n    color: black;\r\n}\r\n\r\nh1 {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.projects {\r\n    display: flex;\r\n    gap: 20px;\r\n    flex-wrap: wrap;\r\n    font-size: 1rem;\r\n}\r\n\r\n.project,\r\n.form,\r\n.add-project {\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: white;\r\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    transition: transform .1s ease-in;\r\n}\r\n\r\n.project:hover,\r\n.add-project:hover {\r\n    transform: translateY(-6px);\r\n}\r\n\r\n.add-project {\r\n    font-size: 2rem;\r\n}\r\n\r\n.project {\r\n    position: relative;\r\n}\r\n\r\n.count {\r\n    font-size: 1rem;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: absolute;\r\n    top: 35px;\r\n    right: 35px;\r\n    width: 30px;\r\n    height: 30px;\r\n    border-radius: 50%;\r\n    background-color: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/*project containers page*/\r\n/*proj container header*/\r\n.container header {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, auto);\r\n    align-content: center;\r\n    gap: 20px;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n/*.add-todo {\r\n    background-color: #0066ff;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 5px;\r\n    justify-self: end;\r\n}*/\r\n.proj-nav {\r\n    justify-self: end;\r\n    align-self: end;\r\n    position: relative;\r\n}\r\n\r\n.proj-nav ul {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n\r\n    top: 0;\r\n    right: 0;\r\n\r\n    min-width: 110px;\r\n    font-size: 14px;\r\n\r\n\r\n    font-weight: lighter;\r\n    transform: scale(0);\r\n    transform-origin: top right;\r\n    transition: transform .1s ease-in;\r\n\r\n    background-color: #0066ff;\r\n    color: white;\r\n    list-style-type: none;\r\n}\r\n\r\n.proj-nav:hover ul {\r\n    transform: scale(1);\r\n}\r\n\r\n.proj-nav li {\r\n    margin: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.proj-nav li:hover {\r\n    color: #BEB7A4;\r\n}\r\n\r\n/*proj container main*/\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: auto;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n\r\nul .to-do {\r\n    display: grid;\r\n    justify-content: space-between;\r\n    justify-items: end;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n    padding: 8px;\r\n\r\n}\r\n\r\nul .to-do:hover {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.to-do form {\r\n    justify-self: start;\r\n}\r\n\r\n.to-do .delete {\r\n    cursor: pointer;\r\n    background-color: red;\r\n    padding: 3px;\r\n    color: white;\r\n}\r\n\r\n/*form */\r\n\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 5px;\r\n    left: 5px;\r\n    width: 200px;\r\n    height: auto;\r\n    padding: 10px 0;\r\n    cursor: default;\r\n    align-items: center;\r\n    transform: translateX(-250px);\r\n    transition: transform 0.1s ease-in;\r\n}\r\n\r\n.form.slide {\r\n    transform: translateX(0);\r\n}\r\n\r\n.form h3 {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-row label {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ninput {\r\n    width: 100%;\r\n    padding: 4px;\r\n}\r\n\r\n.form-row>* {\r\n    display: block;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 0 auto;\r\n    background-color: white;\r\n    border: none;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createForm),
/* harmony export */   "displayForm": () => (/* binding */ displayForm),
/* harmony export */   "getFormValues": () => (/* binding */ getFormValues)
/* harmony export */ });
/* harmony import */ var _images_check_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/check.png */ "./src/images/check.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



let createFormContent = () => {
    let form = `
    <h3>New Task</h3>
    <form action="">
        <div class="form-row">
            <label for="task">What is to be done?</label>
            <input type="text" name="" id="task">
        </div>
        <div class="form-row">
            <label for="date">Date?</label>
            <input type="date" name="" id="date">
        </div>

        <div class="form-row">
            <label for="time">Time</label>
            <input type="time" name="" id="time">
        </div>
        <div class="form-row">
            <label for="priority">Priority</label>
            <input type="number" name="" id="priority">
        </div>
        <button type="submit"><img src=${_images_check_png__WEBPACK_IMPORTED_MODULE_0__} alt=""></button>
    </form>
` ;
    return form
}

function createForm() {
    let formDiv = document.createElement("div")
    formDiv.classList.add("form");
    formDiv.innerHTML = createFormContent();

    return formDiv;
}

let displayForm = () => {
    let formDiv = document.querySelector(".form");
    formDiv.classList.add("slide")
}

let getFormValues = () => {
    let task = document.querySelector("input[id='task']").value;
    let date = document.querySelector("input[id='date']").value;
    let time = document.querySelector("input[id='time']").value;
    let priority = document.querySelector("input[id='priority']").value;
    let dueDate = new Date(date);
    return { task, dueDate, priority }
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToProjContainer": () => (/* binding */ addToProjContainer),
/* harmony export */   "default": () => (/* binding */ displayHomePage)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




let createCountDiv = (numTodo) => {//project name: arg
    let countDiv = document.createElement("div");
    countDiv.classList.add("count");
    countDiv.textContent = numTodo;
    return countDiv;
}

let createProjectDiv = (project, numTodo) => {//project name: arg
    let projectDiv = document.createElement("div");

    let countDiv = createCountDiv(numTodo);
    projectDiv.appendChild(countDiv);

    let projDivText = document.createElement("div");
    projDivText.textContent = project.toUpperCase();//projectname
    projectDiv.appendChild(projDivText)

    projectDiv.classList.add("project");
    projectDiv.id = project;

    return projectDiv;
}

let addToProjContainer = (project) => {//project name: arg
    let projectContainer = document.querySelector(".projects");
    let projDiv = createProjectDiv(project, 0);
    let addProjectDiv = document.querySelector(".add-project");
    projectContainer.insertBefore(projDiv, addProjectDiv);
}


function displayHomePage(projects) {
    let heading = document.createElement("h1");
    heading.textContent = "TO DO LIST"

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("projects");

    let addProjectDiv = document.createElement("div");
    addProjectDiv.classList.add("add-project");
    addProjectDiv.textContent = "+";
    projectContainer.appendChild(addProjectDiv);

    for (const project in projects) {
        projectContainer.insertBefore(createProjectDiv(project, projects[project].length
        ), addProjectDiv)
    }


    let container = document.querySelector(".container");
    container.innerHTML = "";

    container.appendChild(heading);
    container.appendChild(projectContainer);
    console.log(projectContainer.children);

}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
    constructor(task, dueDate, priority) {
        this.task = task
        this.dueDate = dueDate
        this.isChecked = false;
        this.priority = priority
    }
    check() {
        this.isChecked = true;
    }
    uncheck() {
        this.isChecked = false;
    }
}

let projects = {
    personal: [],
    work: [],
    grocery: [],
}

let addProject = (projects, projName) => {
    projects[projName] = [];
}

let addTodo = (projects, project, toDoObj) => {
    projects[project].push(toDoObj);
    console.log(projects[project]);
}

let createTodo = (task, dueDate, priority) => new Todo(task, dueDate, priority);

let markAsDone = (projects, project, toDoIndex) => {
    projects[project][toDoIndex].check();
}

let deleteToDo = (projects, toDoIndex, project) => {
    projects[project].splice(toDoIndex, 1)
}

let replaceTodo = (newToDo, project, toDoIndex) => {
    projects[project][toDoIndex] = newToDo;
}

let editTodo = (newToDo, project, toDoIndex) => {
    replaceTodo(newToDo, project, toDoIndex);
}

let deleteProj = (projects, projName) => {
    delete projects[projName];
}

let getDefaultProjects = () => projects;

//addProject("school");
//addProject("relationship");
let read = createTodo("read", new Date("2023-02-11"), 5);
let stayHalal = createTodo("stayHalal", new Date(), 10)
let keepItReal = createTodo("Never cheate", new Date(), 5)

//addTodo("school", read);
//addTodo("relationship", stayHalal);
//addTodo("relationship", keepItReal);

//markAsDone("school", 0)
//deleteToDo(0, "relationship")
//editTodo(createTodo("study", new Date("2023-02-11"), 5), "school", 0)

//console.log(projects.school);
//console.log(projects.relationship);
let todoApp = {
    getDefaultProjects, addProject, addTodo, createTodo, markAsDone
    , deleteToDo, editTodo, deleteProj
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoApp);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoListItem": () => (/* binding */ createTodoListItem),
/* harmony export */   "default": () => (/* binding */ displayProject),
/* harmony export */   "removeTodo": () => (/* binding */ removeTodo)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _images_left_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/left-arrow.png */ "./src/images/left-arrow.png");
/* harmony import */ var _images_dots_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dots.png */ "./src/images/dots.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





//let projects = todoApp.projects;

let createHeader = (projName) => {
    let header = document.createElement("header");
    let headerContent = `<div ><img class="arrow" src=${_images_left_arrow_png__WEBPACK_IMPORTED_MODULE_1__} alt=""></div>
                <h2 class="project-name">${projName}</h2>
                <div class="proj-nav"><img class="arrow" src=${_images_dots_png__WEBPACK_IMPORTED_MODULE_2__} alt="">
                    <ul>
                        <li class="add-todo">Add To Project</li>
                        <li class="delete-proj">Delete Project</li>
                    <ul>
                </div>`;

    header.innerHTML = headerContent;
    return header;
}
let createTodoListItem = (todoObj, index) => {
    let dueDate = ((typeof todoObj.dueDate === "string") ?
        new Date(todoObj.dueDate) : todoObj.dueDate
    )//everythings turns in string with local storage

    let todoListItem = `

        <li class="to-do" data-index=${index}>
            <form>
                <input type="checkbox" name="" id="checkbox">
                <label for="">${todoObj.task}</label>
            </form>
            <div class="date">${dueDate.getFullYear()} ${dueDate.getMonth()} ${dueDate.getDate()}</div>
            <div class="delete">X</div>
        </li>

    `
    return todoListItem;
}


let removeTodo = (projects, project, todoListItem) => {
    let index = todoListItem.dataset.index;
    _index__WEBPACK_IMPORTED_MODULE_0__["default"].deleteToDo(projects, index, project.id);
    project.removeChild(todoListItem)

}

function displayProject(project, projName) {
    let container = document.querySelector(".container")
    container.innerHTML = "";


    let header = createHeader(projName);
    let todoList = document.createElement("ul");
    todoList.id = projName;

    for (let index = 0; index < project.length; index++) {
        todoList.innerHTML += createTodoListItem(project[index], index);
    }


    container.appendChild(header);
    container.appendChild(todoList)
}



/***/ }),

/***/ "./src/images/check.png":
/*!******************************!*\
  !*** ./src/images/check.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e8af876c5b6bd473a07f.png";

/***/ }),

/***/ "./src/images/dots.png":
/*!*****************************!*\
  !*** ./src/images/dots.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75853ebc5e1b28e32105.png";

/***/ }),

/***/ "./src/images/left-arrow.png":
/*!***********************************!*\
  !*** ./src/images/left-arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7563c3c4359b94bb934.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");








let localStorage = window.localStorage;
let projects = localStorage.getItem("projects");

if (projects) {
    projects = JSON.parse(projects)
} else {
    projects = _index__WEBPACK_IMPORTED_MODULE_0__["default"].getDefaultProjects()
    localStorage.setItem("projects", JSON.stringify(projects))
}

console.log(projects);

let container = document.querySelector(".container")

let form = (0,_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
document.body.appendChild(form)

;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(projects);

//local storage update
function updateLocalStorage() {
    localStorage.projects = JSON.stringify(projects);
}

//click event handler
container.addEventListener("click", (e) => {
    let classList = e.target.classList;

    if (classList.contains("project")) {
        let projName = e.target.id;
        (0,_project__WEBPACK_IMPORTED_MODULE_2__["default"])(projects[projName], projName);
    } else if (classList.contains("add-project")) {
        let newProj = prompt("Type In project Name");
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].addProject(projects, newProj);
        updateLocalStorage();
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.addToProjContainer)(newProj);
        console.log(projects)
    } else if (classList.contains("arrow")) {
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(projects);
    } else if (classList.contains("add-todo")) {
        (0,_form__WEBPACK_IMPORTED_MODULE_3__.displayForm)();
        updateLocalStorage();
        console.log(projects)
    } else if (classList.contains("delete")) {
        let project = document.querySelector(".container>ul");
        let li = e.target.parentElement;
        (0,_project__WEBPACK_IMPORTED_MODULE_2__.removeTodo)(projects, project, li);
        updateLocalStorage();
    } else if (classList.contains("delete-proj")) {
        let projName = document.querySelector(".container>ul").id;
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProj(projects, projName);
        (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])(projects);
        updateLocalStorage();
    } else if (e.target.id = "checkbox") {
        let project = document.querySelector(".container>ul");
        let li = e.target.parentElement.parentElement;
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].markAsDone(projects, project.id, li.dataset.index);
        updateLocalStorage();
    }
});


//form handler
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector(".form form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let { task, dueDate, priority } = (0,_form__WEBPACK_IMPORTED_MODULE_3__.getFormValues)();
        let todo = _index__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(task, dueDate, priority);
        let todoList = document.querySelector(".container>ul");
        let project = todoList.id;
        console.log("proj", project);
        let todoListItem = (0,_project__WEBPACK_IMPORTED_MODULE_2__.createTodoListItem)(
            todo, projects[project].length);
        //console.log(todoListItem);
        todoList.innerHTML += todoListItem;
        _index__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(projects, project, todo);
        console.log("Index", projects[project]);
        updateLocalStorage();
        setTimeout(() => {
            form.parentElement.classList.remove("slide");
        }, 1000)
    })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxvREFBYTtBQUN2RCxtQkFBbUIseURBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0REFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA2NTBweDtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCxcXHJcXG4uZm9ybSxcXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIsXFxyXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnQge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzVweDtcXHJcXG4gICAgcmlnaHQ6IDM1cHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKnByb2plY3QgY29udGFpbmVycyBwYWdlKi9cXHJcXG4vKnByb2ogY29udGFpbmVyIGhlYWRlciovXFxyXFxuLmNvbnRhaW5lciBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qLmFkZC10b2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufSovXFxyXFxuLnByb2otbmF2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvai1uYXYgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIG1pbi13aWR0aDogMTEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLWluO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmZmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbmF2OmhvdmVyIHVsIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbmF2IGxpIHtcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbmF2IGxpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNCRUI3QTQ7XFxyXFxufVxcclxcblxcclxcbi8qcHJvaiBjb250YWluZXIgbWFpbiovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbnVsIC50by1kbyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxudWwgLnRvLWRvOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8gZm9ybSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50by1kbyAuZGVsZXRlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKmZvcm0gKi9cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0uc2xpZGUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cgbGFiZWwge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdz4qIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBOzs7SUFHSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlDQUFpQztBQUNyQzs7QUFFQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9DQUFvQztBQUN4Qzs7QUFFQSwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTs7Ozs7O0VBTUU7QUFDRjtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7O0lBRWxCLE1BQU07SUFDTixRQUFROztJQUVSLGdCQUFnQjtJQUNoQixlQUFlOzs7SUFHZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixpQ0FBaUM7O0lBRWpDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsUUFBUTs7QUFFUjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA2NTBweDtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCxcXHJcXG4uZm9ybSxcXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIsXFxyXFxuLmFkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3Qge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnQge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMzVweDtcXHJcXG4gICAgcmlnaHQ6IDM1cHg7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKnByb2plY3QgY29udGFpbmVycyBwYWdlKi9cXHJcXG4vKnByb2ogY29udGFpbmVyIGhlYWRlciovXFxyXFxuLmNvbnRhaW5lciBoZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qLmFkZC10b2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxufSovXFxyXFxuLnByb2otbmF2IHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvai1uYXYgdWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIG1pbi13aWR0aDogMTEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4xcyBlYXNlLWluO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NmZmO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbmF2OmhvdmVyIHVsIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbmF2IGxpIHtcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2otbmF2IGxpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6ICNCRUI3QTQ7XFxyXFxufVxcclxcblxcclxcbi8qcHJvaiBjb250YWluZXIgbWFpbiovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbnVsIC50by1kbyB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogZW5kO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxudWwgLnRvLWRvOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4udG8tZG8gZm9ybSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50by1kbyAuZGVsZXRlIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKmZvcm0gKi9cXHJcXG5cXHJcXG4uZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1cHg7XFxyXFxuICAgIGxlZnQ6IDVweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1MHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0uc2xpZGUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JtIGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cgbGFiZWwge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdz4qIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENoZWNrIGZyb20gXCIuL2ltYWdlcy9jaGVjay5wbmdcIjtcclxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmxldCBjcmVhdGVGb3JtQ29udGVudCA9ICgpID0+IHtcclxuICAgIGxldCBmb3JtID0gYFxyXG4gICAgPGgzPk5ldyBUYXNrPC9oMz5cclxuICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFza1wiPldoYXQgaXMgdG8gYmUgZG9uZT88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiXCIgaWQ9XCJ0YXNrXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RGF0ZT88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiXCIgaWQ9XCJkYXRlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGltZVwiPlRpbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiBuYW1lPVwiXCIgaWQ9XCJ0aW1lXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiXCIgaWQ9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPjxpbWcgc3JjPSR7Q2hlY2t9IGFsdD1cIlwiPjwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG5gIDtcclxuICAgIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGZvcm1EaXYuY2xhc3NMaXN0LmFkZChcImZvcm1cIik7XHJcbiAgICBmb3JtRGl2LmlubmVySFRNTCA9IGNyZWF0ZUZvcm1Db250ZW50KCk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1EaXY7XHJcbn1cclxuXHJcbmxldCBkaXNwbGF5Rm9ybSA9ICgpID0+IHtcclxuICAgIGxldCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xyXG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKFwic2xpZGVcIilcclxufVxyXG5cclxubGV0IGdldEZvcm1WYWx1ZXMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtpZD0ndGFzayddXCIpLnZhbHVlO1xyXG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbaWQ9J2RhdGUnXVwiKS52YWx1ZTtcclxuICAgIGxldCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W2lkPSd0aW1lJ11cIikudmFsdWU7XHJcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbaWQ9J3ByaW9yaXR5J11cIikudmFsdWU7XHJcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIHsgdGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkgfVxyXG59XHJcblxyXG5leHBvcnQgeyBkaXNwbGF5Rm9ybSwgZ2V0Rm9ybVZhbHVlcyB9OyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcbmxldCBjcmVhdGVDb3VudERpdiA9IChudW1Ub2RvKSA9PiB7Ly9wcm9qZWN0IG5hbWU6IGFyZ1xyXG4gICAgbGV0IGNvdW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvdW50RGl2LmNsYXNzTGlzdC5hZGQoXCJjb3VudFwiKTtcclxuICAgIGNvdW50RGl2LnRleHRDb250ZW50ID0gbnVtVG9kbztcclxuICAgIHJldHVybiBjb3VudERpdjtcclxufVxyXG5cclxubGV0IGNyZWF0ZVByb2plY3REaXYgPSAocHJvamVjdCwgbnVtVG9kbykgPT4gey8vcHJvamVjdCBuYW1lOiBhcmdcclxuICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICBsZXQgY291bnREaXYgPSBjcmVhdGVDb3VudERpdihudW1Ub2RvKTtcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoY291bnREaXYpO1xyXG5cclxuICAgIGxldCBwcm9qRGl2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwcm9qRGl2VGV4dC50ZXh0Q29udGVudCA9IHByb2plY3QudG9VcHBlckNhc2UoKTsvL3Byb2plY3RuYW1lXHJcbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2pEaXZUZXh0KVxyXG5cclxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XHJcbiAgICBwcm9qZWN0RGl2LmlkID0gcHJvamVjdDtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdERpdjtcclxufVxyXG5cclxubGV0IGFkZFRvUHJvakNvbnRhaW5lciA9IChwcm9qZWN0KSA9PiB7Ly9wcm9qZWN0IG5hbWU6IGFyZ1xyXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xyXG4gICAgbGV0IHByb2pEaXYgPSBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QsIDApO1xyXG4gICAgbGV0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5pbnNlcnRCZWZvcmUocHJvakRpdiwgYWRkUHJvamVjdERpdik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZVBhZ2UocHJvamVjdHMpIHtcclxuICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVE8gRE8gTElTVFwiXHJcblxyXG4gICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XHJcblxyXG4gICAgbGV0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYWRkUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3RcIik7XHJcbiAgICBhZGRQcm9qZWN0RGl2LnRleHRDb250ZW50ID0gXCIrXCI7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3REaXYpO1xyXG5cclxuICAgIGZvciAoY29uc3QgcHJvamVjdCBpbiBwcm9qZWN0cykge1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVByb2plY3REaXYocHJvamVjdCwgcHJvamVjdHNbcHJvamVjdF0ubGVuZ3RoXHJcbiAgICAgICAgKSwgYWRkUHJvamVjdERpdilcclxuICAgIH1cclxuXHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdENvbnRhaW5lci5jaGlsZHJlbik7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhZGRUb1Byb2pDb250YWluZXIgfSIsImNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrXHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxyXG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XHJcbiAgICB9XHJcbiAgICBjaGVjaygpIHtcclxuICAgICAgICB0aGlzLmlzQ2hlY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB1bmNoZWNrKCkge1xyXG4gICAgICAgIHRoaXMuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcm9qZWN0cyA9IHtcclxuICAgIHBlcnNvbmFsOiBbXSxcclxuICAgIHdvcms6IFtdLFxyXG4gICAgZ3JvY2VyeTogW10sXHJcbn1cclxuXHJcbmxldCBhZGRQcm9qZWN0ID0gKHByb2plY3RzLCBwcm9qTmFtZSkgPT4ge1xyXG4gICAgcHJvamVjdHNbcHJvak5hbWVdID0gW107XHJcbn1cclxuXHJcbmxldCBhZGRUb2RvID0gKHByb2plY3RzLCBwcm9qZWN0LCB0b0RvT2JqKSA9PiB7XHJcbiAgICBwcm9qZWN0c1twcm9qZWN0XS5wdXNoKHRvRG9PYmopO1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdHNbcHJvamVjdF0pO1xyXG59XHJcblxyXG5sZXQgY3JlYXRlVG9kbyA9ICh0YXNrLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4gbmV3IFRvZG8odGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG5cclxubGV0IG1hcmtBc0RvbmUgPSAocHJvamVjdHMsIHByb2plY3QsIHRvRG9JbmRleCkgPT4ge1xyXG4gICAgcHJvamVjdHNbcHJvamVjdF1bdG9Eb0luZGV4XS5jaGVjaygpO1xyXG59XHJcblxyXG5sZXQgZGVsZXRlVG9EbyA9IChwcm9qZWN0cywgdG9Eb0luZGV4LCBwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0c1twcm9qZWN0XS5zcGxpY2UodG9Eb0luZGV4LCAxKVxyXG59XHJcblxyXG5sZXQgcmVwbGFjZVRvZG8gPSAobmV3VG9EbywgcHJvamVjdCwgdG9Eb0luZGV4KSA9PiB7XHJcbiAgICBwcm9qZWN0c1twcm9qZWN0XVt0b0RvSW5kZXhdID0gbmV3VG9EbztcclxufVxyXG5cclxubGV0IGVkaXRUb2RvID0gKG5ld1RvRG8sIHByb2plY3QsIHRvRG9JbmRleCkgPT4ge1xyXG4gICAgcmVwbGFjZVRvZG8obmV3VG9EbywgcHJvamVjdCwgdG9Eb0luZGV4KTtcclxufVxyXG5cclxubGV0IGRlbGV0ZVByb2ogPSAocHJvamVjdHMsIHByb2pOYW1lKSA9PiB7XHJcbiAgICBkZWxldGUgcHJvamVjdHNbcHJvak5hbWVdO1xyXG59XHJcblxyXG5sZXQgZ2V0RGVmYXVsdFByb2plY3RzID0gKCkgPT4gcHJvamVjdHM7XHJcblxyXG4vL2FkZFByb2plY3QoXCJzY2hvb2xcIik7XHJcbi8vYWRkUHJvamVjdChcInJlbGF0aW9uc2hpcFwiKTtcclxubGV0IHJlYWQgPSBjcmVhdGVUb2RvKFwicmVhZFwiLCBuZXcgRGF0ZShcIjIwMjMtMDItMTFcIiksIDUpO1xyXG5sZXQgc3RheUhhbGFsID0gY3JlYXRlVG9kbyhcInN0YXlIYWxhbFwiLCBuZXcgRGF0ZSgpLCAxMClcclxubGV0IGtlZXBJdFJlYWwgPSBjcmVhdGVUb2RvKFwiTmV2ZXIgY2hlYXRlXCIsIG5ldyBEYXRlKCksIDUpXHJcblxyXG4vL2FkZFRvZG8oXCJzY2hvb2xcIiwgcmVhZCk7XHJcbi8vYWRkVG9kbyhcInJlbGF0aW9uc2hpcFwiLCBzdGF5SGFsYWwpO1xyXG4vL2FkZFRvZG8oXCJyZWxhdGlvbnNoaXBcIiwga2VlcEl0UmVhbCk7XHJcblxyXG4vL21hcmtBc0RvbmUoXCJzY2hvb2xcIiwgMClcclxuLy9kZWxldGVUb0RvKDAsIFwicmVsYXRpb25zaGlwXCIpXHJcbi8vZWRpdFRvZG8oY3JlYXRlVG9kbyhcInN0dWR5XCIsIG5ldyBEYXRlKFwiMjAyMy0wMi0xMVwiKSwgNSksIFwic2Nob29sXCIsIDApXHJcblxyXG4vL2NvbnNvbGUubG9nKHByb2plY3RzLnNjaG9vbCk7XHJcbi8vY29uc29sZS5sb2cocHJvamVjdHMucmVsYXRpb25zaGlwKTtcclxubGV0IHRvZG9BcHAgPSB7XHJcbiAgICBnZXREZWZhdWx0UHJvamVjdHMsIGFkZFByb2plY3QsIGFkZFRvZG8sIGNyZWF0ZVRvZG8sIG1hcmtBc0RvbmVcclxuICAgICwgZGVsZXRlVG9EbywgZWRpdFRvZG8sIGRlbGV0ZVByb2pcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0FwcDsiLCJpbXBvcnQgdG9kb0FwcCBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vaW1hZ2VzL2xlZnQtYXJyb3cucG5nXCI7XHJcbmltcG9ydCBEb3RJY29uIGZyb20gXCIuL2ltYWdlcy9kb3RzLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuLy9sZXQgcHJvamVjdHMgPSB0b2RvQXBwLnByb2plY3RzO1xyXG5cclxubGV0IGNyZWF0ZUhlYWRlciA9IChwcm9qTmFtZSkgPT4ge1xyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgICBsZXQgaGVhZGVyQ29udGVudCA9IGA8ZGl2ID48aW1nIGNsYXNzPVwiYXJyb3dcIiBzcmM9JHtBcnJvd30gYWx0PVwiXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2pOYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvai1uYXZcIj48aW1nIGNsYXNzPVwiYXJyb3dcIiBzcmM9JHtEb3RJY29ufSBhbHQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImFkZC10b2RvXCI+QWRkIFRvIFByb2plY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJkZWxldGUtcHJvalwiPkRlbGV0ZSBQcm9qZWN0PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG5cclxuICAgIGhlYWRlci5pbm5lckhUTUwgPSBoZWFkZXJDb250ZW50O1xyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5sZXQgY3JlYXRlVG9kb0xpc3RJdGVtID0gKHRvZG9PYmosIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgZHVlRGF0ZSA9ICgodHlwZW9mIHRvZG9PYmouZHVlRGF0ZSA9PT0gXCJzdHJpbmdcIikgP1xyXG4gICAgICAgIG5ldyBEYXRlKHRvZG9PYmouZHVlRGF0ZSkgOiB0b2RvT2JqLmR1ZURhdGVcclxuICAgICkvL2V2ZXJ5dGhpbmdzIHR1cm5zIGluIHN0cmluZyB3aXRoIGxvY2FsIHN0b3JhZ2VcclxuXHJcbiAgICBsZXQgdG9kb0xpc3RJdGVtID0gYFxyXG5cclxuICAgICAgICA8bGkgY2xhc3M9XCJ0by1kb1wiIGRhdGEtaW5kZXg9JHtpbmRleH0+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJcIiBpZD1cImNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCI+JHt0b2RvT2JqLnRhc2t9PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPiR7ZHVlRGF0ZS5nZXRGdWxsWWVhcigpfSAke2R1ZURhdGUuZ2V0TW9udGgoKX0gJHtkdWVEYXRlLmdldERhdGUoKX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiPlg8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG5cclxuICAgIGBcclxuICAgIHJldHVybiB0b2RvTGlzdEl0ZW07XHJcbn1cclxuXHJcblxyXG5sZXQgcmVtb3ZlVG9kbyA9IChwcm9qZWN0cywgcHJvamVjdCwgdG9kb0xpc3RJdGVtKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSB0b2RvTGlzdEl0ZW0uZGF0YXNldC5pbmRleDtcclxuICAgIHRvZG9BcHAuZGVsZXRlVG9Ebyhwcm9qZWN0cywgaW5kZXgsIHByb2plY3QuaWQpO1xyXG4gICAgcHJvamVjdC5yZW1vdmVDaGlsZCh0b2RvTGlzdEl0ZW0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0LCBwcm9qTmFtZSkge1xyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpXHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcblxyXG4gICAgbGV0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcihwcm9qTmFtZSk7XHJcbiAgICBsZXQgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgICB0b2RvTGlzdC5pZCA9IHByb2pOYW1lO1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIHRvZG9MaXN0LmlubmVySFRNTCArPSBjcmVhdGVUb2RvTGlzdEl0ZW0ocHJvamVjdFtpbmRleF0sIGluZGV4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0xpc3QpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRvZG9MaXN0SXRlbSwgcmVtb3ZlVG9kbyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB0b2RvQXBwIGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCBkaXNwbGF5SG9tZVBhZ2UgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgZGlzcGxheVByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgY3JlYXRlRm9ybSBmcm9tIFwiLi9mb3JtXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlGb3JtLCBnZXRGb3JtVmFsdWVzIH0gZnJvbSBcIi4vZm9ybVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVUb2RvTGlzdEl0ZW0sIHJlbW92ZVRvZG8gfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCB7IGFkZFRvUHJvakNvbnRhaW5lciB9IGZyb20gXCIuL2hvbWVcIjtcclxuXHJcbmxldCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xyXG5sZXQgcHJvamVjdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpO1xyXG5cclxuaWYgKHByb2plY3RzKSB7XHJcbiAgICBwcm9qZWN0cyA9IEpTT04ucGFyc2UocHJvamVjdHMpXHJcbn0gZWxzZSB7XHJcbiAgICBwcm9qZWN0cyA9IHRvZG9BcHAuZ2V0RGVmYXVsdFByb2plY3RzKClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKVxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhwcm9qZWN0cyk7XHJcblxyXG5sZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIilcclxuXHJcbmxldCBmb3JtID0gY3JlYXRlRm9ybSgpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pXHJcblxyXG5kaXNwbGF5SG9tZVBhZ2UocHJvamVjdHMpO1xyXG5cclxuLy9sb2NhbCBzdG9yYWdlIHVwZGF0ZVxyXG5mdW5jdGlvbiB1cGRhdGVMb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeShwcm9qZWN0cyk7XHJcbn1cclxuXHJcbi8vY2xpY2sgZXZlbnQgaGFuZGxlclxyXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBsZXQgY2xhc3NMaXN0ID0gZS50YXJnZXQuY2xhc3NMaXN0O1xyXG5cclxuICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XHJcbiAgICAgICAgbGV0IHByb2pOYW1lID0gZS50YXJnZXQuaWQ7XHJcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdHNbcHJvak5hbWVdLCBwcm9qTmFtZSk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0XCIpKSB7XHJcbiAgICAgICAgbGV0IG5ld1Byb2ogPSBwcm9tcHQoXCJUeXBlIEluIHByb2plY3QgTmFtZVwiKTtcclxuICAgICAgICB0b2RvQXBwLmFkZFByb2plY3QocHJvamVjdHMsIG5ld1Byb2opO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgICAgIGFkZFRvUHJvakNvbnRhaW5lcihuZXdQcm9qKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcclxuICAgIH0gZWxzZSBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKFwiYXJyb3dcIikpIHtcclxuICAgICAgICBkaXNwbGF5SG9tZVBhZ2UocHJvamVjdHMpO1xyXG4gICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtdG9kb1wiKSkge1xyXG4gICAgICAgIGRpc3BsYXlGb3JtKCk7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZVwiKSkge1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXI+dWxcIik7XHJcbiAgICAgICAgbGV0IGxpID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICByZW1vdmVUb2RvKHByb2plY3RzLCBwcm9qZWN0LCBsaSk7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XHJcbiAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1wcm9qXCIpKSB7XHJcbiAgICAgICAgbGV0IHByb2pOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXI+dWxcIikuaWQ7XHJcbiAgICAgICAgdG9kb0FwcC5kZWxldGVQcm9qKHByb2plY3RzLCBwcm9qTmFtZSk7XHJcbiAgICAgICAgZGlzcGxheUhvbWVQYWdlKHByb2plY3RzKTtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyPnVsXCIpO1xyXG4gICAgICAgIGxldCBsaSA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICB0b2RvQXBwLm1hcmtBc0RvbmUocHJvamVjdHMsIHByb2plY3QuaWQsIGxpLmRhdGFzZXQuaW5kZXgpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG4vL2Zvcm0gaGFuZGxlclxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybSBmb3JtXCIpO1xyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7IHRhc2ssIGR1ZURhdGUsIHByaW9yaXR5IH0gPSBnZXRGb3JtVmFsdWVzKCk7XHJcbiAgICAgICAgbGV0IHRvZG8gPSB0b2RvQXBwLmNyZWF0ZVRvZG8odGFzaywgZHVlRGF0ZSwgcHJpb3JpdHkpO1xyXG4gICAgICAgIGxldCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyPnVsXCIpO1xyXG4gICAgICAgIGxldCBwcm9qZWN0ID0gdG9kb0xpc3QuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qXCIsIHByb2plY3QpO1xyXG4gICAgICAgIGxldCB0b2RvTGlzdEl0ZW0gPSBjcmVhdGVUb2RvTGlzdEl0ZW0oXHJcbiAgICAgICAgICAgIHRvZG8sIHByb2plY3RzW3Byb2plY3RdLmxlbmd0aCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0b2RvTGlzdEl0ZW0pO1xyXG4gICAgICAgIHRvZG9MaXN0LmlubmVySFRNTCArPSB0b2RvTGlzdEl0ZW07XHJcbiAgICAgICAgdG9kb0FwcC5hZGRUb2RvKHByb2plY3RzLCBwcm9qZWN0LCB0b2RvKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkluZGV4XCIsIHByb2plY3RzW3Byb2plY3RdKTtcclxuICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZm9ybS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVwiKTtcclxuICAgICAgICB9LCAxMDAwKVxyXG4gICAgfSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=