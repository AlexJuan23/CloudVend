/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/components/VendingMachine.js":
/*!***************************************************!*\
  !*** ./resources/js/components/VendingMachine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /var/www/cloud-vend/resources/js/components/VendingMachine.js: Support for the experimental syntax 'classProperties' isn't currently enabled (21:16):\n\n\u001b[0m \u001b[90m 19 | \u001b[39m  }\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m  handleChange \u001b[33m=\u001b[39m event \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m    \u001b[36mconst\u001b[39m {name\u001b[33m,\u001b[39m value} \u001b[33m=\u001b[39m event\u001b[33m.\u001b[39mtarget\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m    \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({\u001b[0m\n\u001b[0m \u001b[90m 24 | \u001b[39m      [name]\u001b[33m:\u001b[39m value\u001b[0m\n\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\n    at Object.raise (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:3831:17)\n    at Object.expectPlugin (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:5148:18)\n    at Object.parseClassProperty (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:8227:12)\n    at Object.pushClassProperty (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:8191:30)\n    at Object.parseClassMemberWithIsStatic (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:8130:14)\n    at Object.parseClassMember (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:8067:10)\n    at withTopicForbiddingContext (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:8022:14)\n    at Object.withTopicForbiddingContext (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7150:14)\n    at Object.parseClassBody (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7999:10)\n    at Object.parseClass (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7973:10)\n    at Object.parseStatementContent (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7289:21)\n    at Object.parseStatement (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7243:17)\n    at Object.parseBlockOrModuleBlockBody (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7810:25)\n    at Object.parseBlockBody (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7797:10)\n    at Object.parseTopLevel (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:7181:10)\n    at Object.parse (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:8660:17)\n    at parse (/var/www/cloud-vend/node_modules/@babel/parser/lib/index.js:10660:38)\n    at parser (/var/www/cloud-vend/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/var/www/cloud-vend/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/var/www/cloud-vend/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/var/www/cloud-vend/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/var/www/cloud-vend/node_modules/@babel/core/lib/transform.js:34:34)\n    at _combinedTickCallback (internal/process/next_tick.js:73:7)\n    at process._tickCallback (internal/process/next_tick.js:104:9)");

/***/ }),

/***/ 1:
/*!*********************************************************!*\
  !*** multi ./resources/js/components/VendingMachine.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/cloud-vend/resources/js/components/VendingMachine.js */"./resources/js/components/VendingMachine.js");


/***/ })

/******/ });