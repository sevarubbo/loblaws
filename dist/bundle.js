/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = Em.Application.create();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ember__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ember___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ember__);


/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_ember___default.a.Router.map(function() {
  this.route("products");
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__application__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__application_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_common_page_header_page_header_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_common_page_header_page_header_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__blocks_common_page_header_page_header_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_routes_products_blocks_product_list_blocks_product_list_item_product_list_item_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_routes_products_blocks_product_list_product_list_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_routes_products_products_controller_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_routes_products_products_route_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_product_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_product_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__models_product_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__router_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blocks_common_page_header_page_header_hbs__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blocks_common_page_header_page_header_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__blocks_common_page_header_page_header_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blocks_routes_application_application_hbs__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blocks_routes_application_application_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__blocks_routes_application_application_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blocks_routes_index_index_hbs__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blocks_routes_index_index_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__blocks_routes_index_index_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blocks_routes_products_blocks_product_list_blocks_product_list_item_product_list_item_hbs__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__blocks_routes_products_blocks_product_list_blocks_product_list_item_product_list_item_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__blocks_routes_products_blocks_product_list_blocks_product_list_item_product_list_item_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blocks_routes_products_blocks_product_list_product_list_hbs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__blocks_routes_products_blocks_product_list_product_list_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__blocks_routes_products_blocks_product_list_product_list_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blocks_routes_products_products_hbs__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__blocks_routes_products_products_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__blocks_routes_products_products_hbs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blocks_routes_products_routes_product_product_hbs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__blocks_routes_products_routes_product_product_hbs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__blocks_routes_products_routes_product_product_hbs__);



window.App = __WEBPACK_IMPORTED_MODULE_0__application__["a" /* default */];



__WEBPACK_IMPORTED_MODULE_0__application__["a" /* default */].Router = __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */];



















/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = Em.Component.extend({

});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = Em.Component.extend({



});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = Em.Controller.extend({

});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = Em.Route.extend({

});

/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */
/***/ (function(module, exports) {

Ember.TEMPLATES["components/page-header"] = Ember.HTMLBars.template({"id":"+GTXmWX7","block":"{\"statements\":[[\"text\",\"Page header\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"components/page-header"}});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

Ember.TEMPLATES["application"] = Ember.HTMLBars.template({"id":"bCFYpSSz","block":"{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"application"}});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

Ember.TEMPLATES["index"] = Ember.HTMLBars.template({"id":"Lx1DRSYg","block":"{\"statements\":[[\"text\",\"Index\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"index"}});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

Ember.TEMPLATES["components/product-list-item"] = Ember.HTMLBars.template({"id":"IJQtg7IP","block":"{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"components/product-list-item"}});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

Ember.TEMPLATES["components/product-list"] = Ember.HTMLBars.template({"id":"bQNTeQjt","block":"{\"statements\":[[\"text\",\"124\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"components/product-list"}});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

Ember.TEMPLATES["products"] = Ember.HTMLBars.template({"id":"uHK8ipAj","block":"{\"statements\":[[\"text\",\"ABC \"],[\"append\",[\"unknown\",[\"a\"]],false],[\"text\",\"!\\n\\n\"],[\"append\",[\"unknown\",[\"product-list\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"products"}});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

Ember.TEMPLATES["products/product"] = Ember.HTMLBars.template({"id":"kklD/y34","block":"{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}","meta":{"moduleName":"products/product"}});

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = Ember;

/***/ })
/******/ ]);