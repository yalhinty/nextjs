module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}`).then(function (resp) {});
  return resp.json(); //	})
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  getInfo: function (user) {
    return getProfile(user).catch(handleError);
  }
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_utils_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\yhint\\Downloads\\350\\next-template\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Home extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "notwaldorf"
    };
  }

  handleUpdate(evt) {
    this.setState({
      search: evt.target.value
    });
  }

  async handleSearch(evt) {
    const user = await Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(this.state.search);
    this.setState({
      user
    });
  }

  render() {
    return __jsx("div", {
      style: {
        margin: "auto auto",
        width: "600px",
        textAlign: "center"
      },
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx("img", {
      src: "/static/github1.png",
      className: "jsx-2387977386" + " " + "App-logo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("h2", {
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Github User Search"), __jsx("p", {
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("input", {
      type: "text",
      value: this.state.search,
      onChange: this.handleUpdate.bind(this),
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    })), __jsx("div", {
      onClick: this.handleSearch.bind(this),
      className: "jsx-2387977386" + " " + "button-style",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Search"), this.state.user ? __jsx("div", {
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("br", {
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("h3", {
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, this.state.user.name, " "), __jsx("img", {
      style: {
        maxWidth: '100px',
        maxHeight: "100px"
      },
      src: this.state.user.avatar_url,
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), " ", __jsx("br", {
      className: "jsx-2387977386",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2387977386",
      __self: this
    }, "h1.jsx-2387977386,h2.jsx-2387977386,a.jsx-2387977386,p.jsx-2387977386{font-family:\"Arial\";}.button-style.jsx-2387977386{margin:auto auto;cursor:pointer;background-color:#4633FF;color:#ffffff;width:100px;font-family:\"Arial\";}.description.jsx-2387977386{font-family:\"Arial\";font-size:\"10px\";}ul.jsx-2387977386{padding:0;}li.jsx-2387977386{list-style:none;margin:5px 0;}.App-logo.jsx-2387977386{height:80px;}a.jsx-2387977386{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2387977386:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceWhpbnRcXERvd25sb2Fkc1xcMzUwXFxuZXh0LXRlbXBsYXRlXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNhLEFBTWlDLEFBSVgsQUFTVyxBQUtWLEFBSU0sQUFJSixBQUlTLEFBS1QsVUFoQmQsRUFRQSxBQVNBLElBYmUsQ0FsQlIsR0FKUCxBQWFtQixTQVVuQixHQWxCaUIsS0FTakIsYUFnQmEsT0F4QlAsSUF5Qk4sVUF4QkksWUFDUSxvQkFDYiIsImZpbGUiOiJDOlxcVXNlcnNcXHloaW50XFxEb3dubG9hZHNcXDM1MFxcbmV4dC10ZW1wbGF0ZVxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtnZXRJbmZvfSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGU9e3NlYXJjaDogXCJub3R3YWxkb3JmXCJ9O1x0ICBcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwZGF0ZShldnQpe1xyXG5cdHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZXZ0LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgaGFuZGxlU2VhcmNoKGV2dCl7XHJcblx0ICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0SW5mbyh0aGlzLnN0YXRlLnNlYXJjaCk7XHJcblx0ICB0aGlzLnNldFN0YXRlKHt1c2VyfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiYXV0byBhdXRvXCIsIHdpZHRoOiBcIjYwMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZ2l0aHViMS5wbmdcIiBjbGFzc05hbWU9XCJBcHAtbG9nb1wiIC8+XHJcbiAgICAgICAgPGgyPkdpdGh1YiBVc2VyIFNlYXJjaDwvaDI+XHJcblx0PHA+PGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXBkYXRlLmJpbmQodGhpcyl9Lz48L3A+XHJcblx0PGRpdiBjbGFzc05hbWU9XCJidXR0b24tc3R5bGVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpfT5TZWFyY2g8L2Rpdj5cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUudXNlciA/IDxkaXY+IFxyXG5cdCAgICA8YnIgLz4gXHJcblx0XHQ8aDM+e3RoaXMuc3RhdGUudXNlci5uYW1lfSA8L2gzPlxyXG5cclxuXHRcdDxpbWcgc3R5bGU9e3ttYXhXaWR0aDogJzEwMHB4JywgbWF4SGVpZ2h0OiBcIjEwMHB4XCIgfX1cclxuXHQgICAgIFx0ICBzcmM9IHt0aGlzLnN0YXRlLnVzZXIuYXZhdGFyX3VybH0gLz4gPGJyIC8+XHJcblxyXG5cdFx0XHJcblx0XHQ8L2Rpdj4gOiBudWxsfVxyXG5cclxuXHJcblx0PHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgaDEsXHJcbiAgICAgICAgICBoMixcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgIH1cclxuXHJcblx0ICAuYnV0dG9uLXN0eWxlIHtcclxuXHQgIFx0bWFyZ2luOiBhdXRvIGF1dG87XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDYzM0ZGO1xyXG5cdFx0Y29sb3I6ICNmZmZmZmY7XHJcblx0XHR3aWR0aDogMTAwcHg7XHJcblx0XHRmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBcIjEwcHhcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLkFwcC1sb2dvIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\yhint\\Downloads\\350\\next-template\\pages\\index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yhint\Downloads\350\next-template\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map