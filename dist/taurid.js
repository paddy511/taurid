/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var taurid = __webpack_require__(2);
	
	if (module && module.exports) {
	  module.exports = taurid;
	}
	if (__webpack_require__(5)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return taurid;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	if (window) {
	  window.taurid = taurid;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var actionsContainer = __webpack_require__(3);
	var $Action = __webpack_require__(4);
	
	var taurid = new Object();
	
	//lib API
	taurid.$Action = $Action;
	
	taurid.registerAction = function (actionName, callback) {
	  var _action = new $Action(actionName, callback);
	  actionsContainer.addAction(_action);
	};
	
	taurid.execAction = function (actionName) {
	  var _action = actionsContainer.getAction(actionName);
	
	  for (var _len = arguments.length, agruments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    agruments[_key - 1] = arguments[_key];
	  }
	
	  return _action.callback.apply(_action, agruments);
	};
	
	taurid.getActFn = function (actionName) {
	  return actionsContainer.getAction(actionName).callback;
	};
	
	module.exports = taurid;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var $Action = __webpack_require__(4);
	
	module.exports = function () {
	
	  var actions = [];
	
	  function getActionByName(actionName) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = actions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var act = _step.value;
	
	        if (act.name === actionName) {
	          return act;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    return false;
	  }
	
	  //the function below is to expose to other module
	  function addAction(action) {
	    if (!(action instanceof $Action)) {
	      throw "the action you add is not the instanceof $Action";
	    }
	    if (getActionByName(action.name)) {
	      throw "the name of the action has existed in actions";
	    }
	    actions.push(action);
	  }
	
	  function getAction(actionName) {
	    var act = getActionByName(actionName);
	    if (act) {
	      return act;
	    } else {
	      throw "the action " + actionName + " did not register!";
	    }
	  }
	
	  return {
	    "addAction": addAction,
	    "getAction": getAction
	  };
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	module.exports = function $Action(name, cb) {
	    _classCallCheck(this, $Action);
	
	    this.name = name;
	    this.callback = cb;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }
/******/ ]);
//# sourceMappingURL=taurid.js.map