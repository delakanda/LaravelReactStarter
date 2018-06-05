/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./webapp/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./webapp/actions/Redux.js":
/*!*********************************!*\
  !*** ./webapp/actions/Redux.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showNotification = showNotification;
exports.hideNotification = hideNotification;

var _Constants = __webpack_require__(/*! ./../utils/Constants */ "./webapp/utils/Constants.js");

function showNotification(payload) {
    return { type: _Constants.SHOW_NOTIFICATION, payload: payload };
};

function hideNotification() {
    return { type: _Constants.HIDE_NOTIFICATION };
};

/***/ }),

/***/ "./webapp/components/elements/NotificationBar.js":
/*!*******************************************************!*\
  !*** ./webapp/components/elements/NotificationBar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Redux = __webpack_require__(/*! ./../../actions/Redux */ "./webapp/actions/Redux.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationBar = function (_Component) {
    _inherits(NotificationBar, _Component);

    function NotificationBar(props) {
        _classCallCheck(this, NotificationBar);

        var _this = _possibleConstructorReturn(this, (NotificationBar.__proto__ || Object.getPrototypeOf(NotificationBar)).call(this, props));

        _this.timer = 0;
        return _this;
    }

    _createClass(NotificationBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.notification.display) clearTimeout(this.timer);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            var display = this.props.notification.display;


            if (display) this.timer = setTimeout(function () {
                return _this2.props.dispatch((0, _Redux.hideNotification)());
            }, 5000);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$notification = this.props.notification,
                type = _props$notification.type,
                content = _props$notification.content,
                context = _props$notification.context,
                display = _props$notification.display;

            var styles = {
                display: display ? 'block' : 'none', margin: "10px 0px", textAlign: "center"
            };
            var contextCss = context;
            return _react2.default.createElement(
                'div',
                { style: styles, className: "alert alert-" + contextCss, role: 'alert' },
                content
            );
        }
    }]);

    return NotificationBar;
}(_react.Component);

exports.default = NotificationBar;

/***/ }),

/***/ "./webapp/components/landing/LandingContainer.js":
/*!*******************************************************!*\
  !*** ./webapp/components/landing/LandingContainer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Main = __webpack_require__(/*! ./presentations/Main */ "./webapp/components/landing/presentations/Main.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LandingContainer = function (_Component) {
    _inherits(LandingContainer, _Component);

    function LandingContainer(props) {
        _classCallCheck(this, LandingContainer);

        var _this = _possibleConstructorReturn(this, (LandingContainer.__proto__ || Object.getPrototypeOf(LandingContainer)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(LandingContainer, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(_Main.LandingPresentation, null);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }]);

    return LandingContainer;
}(_react.Component);

exports.default = LandingContainer;

/***/ }),

/***/ "./webapp/components/landing/presentations/Main.js":
/*!*********************************************************!*\
  !*** ./webapp/components/landing/presentations/Main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LandingPresentation = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var LandingPresentation = exports.LandingPresentation = function LandingPresentation(_ref) {
    _objectDestructuringEmpty(_ref);

    return _react2.default.createElement(
        'div',
        null,
        'HERE'
    );
};

/***/ }),

/***/ "./webapp/containers/App.js":
/*!**********************************!*\
  !*** ./webapp/containers/App.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.App = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Index = __webpack_require__(/*! ./../routes/Index */ "./webapp/routes/Index.js");

var _Index2 = _interopRequireDefault(_Index);

var _NotificationBar = __webpack_require__(/*! ./../components/elements/NotificationBar */ "./webapp/components/elements/NotificationBar.js");

var _NotificationBar2 = _interopRequireDefault(_NotificationBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Header from './../components/partials/header';
// import Footer from './../components/partials/footer';
// import SideNav from './../components/partials/side_nav';

// import Spinner from './../components/partials/spinner';

var App = exports.App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                dispatch = _props.dispatch,
                notification = _props.notification,
                spinner = _props.spinner,
                globals = _props.globals;


            return _react2.default.createElement(
                _reactRouterDom.HashRouter,
                null,
                _react2.default.createElement(
                    'div',
                    { id: 'app-wrapper' },
                    _react2.default.createElement(_NotificationBar2.default, { notification: notification,
                        dispatch: dispatch }),
                    _react2.default.createElement(_Index2.default, { dispatch: dispatch })
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (store) {

    return {
        notification: store.notification,
        globals: store.globals
    };
})(App);

/***/ }),

/***/ "./webapp/containers/Root.js":
/*!***********************************!*\
  !*** ./webapp/containers/Root.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _App = __webpack_require__(/*! ./../containers/App */ "./webapp/containers/App.js");

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Root = function (_Component) {
    _inherits(Root, _Component);

    function Root() {
        _classCallCheck(this, Root);

        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
    }

    _createClass(Root, [{
        key: 'render',
        value: function render() {
            var store = this.props.store;


            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: store },
                _react2.default.createElement(_App2.default, null)
            );
        }
    }]);

    return Root;
}(_react.Component);

exports.default = Root;

/***/ }),

/***/ "./webapp/index.js":
/*!*************************!*\
  !*** ./webapp/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Root = __webpack_require__(/*! ./containers/Root */ "./webapp/containers/Root.js");

var _Root2 = _interopRequireDefault(_Root);

var _Index = __webpack_require__(/*! ./store/Index */ "./webapp/store/Index.js");

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// PACKAGE DEPENDENCIES
var store = (0, _Index2.default)();

_reactDom2.default.render(_react2.default.createElement(_Root2.default, { store: store }), document.getElementById('app'));

/***/ }),

/***/ "./webapp/reducers/Global.js":
/*!***********************************!*\
  !*** ./webapp/reducers/Global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = notification;

__webpack_require__(/*! ./../utils/Constants */ "./webapp/utils/Constants.js");

var initialState = {};

function notification() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        // case SHOW_NOTIFICATION:
        //     return { type: action.payload.type, context: action.payload.context, content: action.payload.content, display: true } 
        // case HIDE_NOTIFICATION:
        //     return initialState;
        // case LOCATION_CHANGE:
        //     return initialState;
        default:
            return state;
    }
}

/***/ }),

/***/ "./webapp/reducers/Index.js":
/*!**********************************!*\
  !*** ./webapp/reducers/Index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _Notification = __webpack_require__(/*! ./Notification */ "./webapp/reducers/Notification.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _Global = __webpack_require__(/*! ./Global */ "./webapp/reducers/Global.js");

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    notification: _Notification2.default,
    globals: _Global2.default
});

/***/ }),

/***/ "./webapp/reducers/Notification.js":
/*!*****************************************!*\
  !*** ./webapp/reducers/Notification.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = notification;

var _Constants = __webpack_require__(/*! ./../utils/Constants */ "./webapp/utils/Constants.js");

var initialState = {
    type: '',
    content: '',
    context: _Constants.NOTIFICATION_TYPE_SUCCESS,
    display: false
};

function notification() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _Constants.SHOW_NOTIFICATION:
            return { type: action.payload.type, context: action.payload.context, content: action.payload.content, display: true };
        case _Constants.HIDE_NOTIFICATION:
            return initialState;
        default:
            return state;
    }
}

/***/ }),

/***/ "./webapp/routes/Index.js":
/*!********************************!*\
  !*** ./webapp/routes/Index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _LandingContainer = __webpack_require__(/*! ./../components/landing/LandingContainer */ "./webapp/components/landing/LandingContainer.js");

var _LandingContainer2 = _interopRequireDefault(_LandingContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Views

// Dashboard


var Routes = function (_Component) {
    _inherits(Routes, _Component);

    function Routes() {
        _classCallCheck(this, Routes);

        return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
    }

    _createClass(Routes, [{
        key: 'render',
        value: function render() {
            var dispatch = this.props.dispatch;


            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', render: function render(props) {
                        return _react2.default.createElement(_LandingContainer2.default, _extends({}, props, { dispatch: dispatch }));
                    } })
            );
        }
    }]);

    return Routes;
}(_react.Component);

exports.default = Routes;

/***/ }),

/***/ "./webapp/store/Index.js":
/*!*******************************!*\
  !*** ./webapp/store/Index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configure;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _Index = __webpack_require__(/*! ./../reducers/Index */ "./webapp/reducers/Index.js");

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configure() {
    var store = (0, _redux.createStore)(_Index2.default);

    return store;
}

/***/ }),

/***/ "./webapp/utils/Constants.js":
/*!***********************************!*\
  !*** ./webapp/utils/Constants.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SHOW_NOTIFICATION = exports.SHOW_NOTIFICATION = 'show_notification';
var HIDE_NOTIFICATION = exports.HIDE_NOTIFICATION = 'hide_notification';
var NOTIFICATION_TYPE_SUCCESS = exports.NOTIFICATION_TYPE_SUCCESS = 'success';
var NOTIFICATION_TYPE_WARNING = exports.NOTIFICATION_TYPE_WARNING = 'warning';
var NOTIFICATION_TYPE_INFO = exports.NOTIFICATION_TYPE_INFO = 'info';
var NOTIFICATION_TYPE_ERROR = exports.NOTIFICATION_TYPE_ERROR = 'danger';

var FETCH_STATE_FETCHING = exports.FETCH_STATE_FETCHING = "fetching";
var FETCH_STATE_FETCHED = exports.FETCH_STATE_FETCHED = "fetched";
var FETCH_STATE_ERROR = exports.FETCH_STATE_ERROR = "error_fetching";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd2ViYXBwL2FjdGlvbnMvUmVkdXguanMiLCJ3ZWJwYWNrOi8vLy4vd2ViYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvTm90aWZpY2F0aW9uQmFyLmpzIiwid2VicGFjazovLy8uL3dlYmFwcC9jb21wb25lbnRzL2xhbmRpbmcvTGFuZGluZ0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi93ZWJhcHAvY29tcG9uZW50cy9sYW5kaW5nL3ByZXNlbnRhdGlvbnMvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWJhcHAvY29udGFpbmVycy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vd2ViYXBwL2NvbnRhaW5lcnMvUm9vdC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJhcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2ViYXBwL3JlZHVjZXJzL0dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJhcHAvcmVkdWNlcnMvSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2ViYXBwL3JlZHVjZXJzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi93ZWJhcHAvcm91dGVzL0luZGV4LmpzIiwid2VicGFjazovLy8uL3dlYmFwcC9zdG9yZS9JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJhcHAvdXRpbHMvQ29uc3RhbnRzLmpzIl0sIm5hbWVzIjpbInNob3dOb3RpZmljYXRpb24iLCJoaWRlTm90aWZpY2F0aW9uIiwicGF5bG9hZCIsInR5cGUiLCJTSE9XX05PVElGSUNBVElPTiIsIkhJREVfTk9USUZJQ0FUSU9OIiwiTm90aWZpY2F0aW9uQmFyIiwicHJvcHMiLCJ0aW1lciIsIm5leHRQcm9wcyIsIm5vdGlmaWNhdGlvbiIsImRpc3BsYXkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZGlzcGF0Y2giLCJjb250ZW50IiwiY29udGV4dCIsInN0eWxlcyIsIm1hcmdpbiIsInRleHRBbGlnbiIsImNvbnRleHRDc3MiLCJDb21wb25lbnQiLCJMYW5kaW5nQ29udGFpbmVyIiwic3RhdGUiLCJMYW5kaW5nUHJlc2VudGF0aW9uIiwiQXBwIiwic3Bpbm5lciIsImdsb2JhbHMiLCJzdG9yZSIsIlJvb3QiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJOT1RJRklDQVRJT05fVFlQRV9TVUNDRVNTIiwiUm91dGVzIiwiY29uZmlndXJlIiwicmVkdWNlcnMiLCJOT1RJRklDQVRJT05fVFlQRV9XQVJOSU5HIiwiTk9USUZJQ0FUSU9OX1RZUEVfSU5GTyIsIk5PVElGSUNBVElPTl9UWVBFX0VSUk9SIiwiRkVUQ0hfU1RBVEVfRkVUQ0hJTkciLCJGRVRDSF9TVEFURV9GRVRDSEVEIiwiRkVUQ0hfU1RBVEVfRVJST1IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVB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QUhFOzs7QUFNTixtQkFDSTtBQUFDLHNDQUFEO0FBQUE7QUFDSSw4Q0FBQyxxQkFBRCxJQUFPLE9BQU8sSUFBZCxFQUFvQixNQUFLLEdBQXpCLEVBQTZCLFFBQVEsZ0JBQUNQLEtBQUQ7QUFBQSwrQkFBVyw4QkFBQywwQkFBRCxlQUFlQSxLQUFmLElBQXNCLFVBQVVPLFFBQWhDLElBQVg7QUFBQSxxQkFBckM7QUFESixhQURKO0FBVUg7Ozs7RUFsQitCTyxnQjs7a0JBQWZnQixNOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNKR0MsUzs7QUFKeEI7O0FBRUE7Ozs7OztBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFDaEMsUUFBTVYsUUFBUSx3QkFDVlcsZUFEVSxDQUFkOztBQUlBLFdBQU9YLEtBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZNLElBQU14QixnREFBb0IsbUJBQTFCO0FBQ0EsSUFBTUMsZ0RBQXFCLG1CQUEzQjtBQUNBLElBQU0rQixnRUFBNEIsU0FBbEM7QUFDQSxJQUFNSSxnRUFBNEIsU0FBbEM7QUFDQSxJQUFNQywwREFBeUIsTUFBL0I7QUFDQSxJQUFNQyw0REFBMEIsUUFBaEM7O0FBRUEsSUFBTUMsc0RBQXVCLFVBQTdCO0FBQ0EsSUFBTUMsb0RBQXNCLFNBQTVCO0FBQ0EsSUFBTUMsZ0RBQW9CLGdCQUExQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vd2ViYXBwL2luZGV4LmpzXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQge1xuICAgIEhJREVfTk9USUZJQ0FUSU9OLFxuICAgIFNIT1dfTk9USUZJQ0FUSU9OXG59IGZyb20gJy4vLi4vdXRpbHMvQ29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24ocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IFNIT1dfTk9USUZJQ0FUSU9OLCBwYXlsb2FkIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGlkZU5vdGlmaWNhdGlvbigpIHtcbiAgICByZXR1cm4geyB0eXBlOiBISURFX05PVElGSUNBVElPTiB9O1xufTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge2hpZGVOb3RpZmljYXRpb259IGZyb20gJy4vLi4vLi4vYWN0aW9ucy9SZWR1eCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbkJhciBleHRlbmRzIENvbXBvbmVudCAge1xuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV4dFByb3BzKSB7XG4gICAgICAgIGlmIChuZXh0UHJvcHMubm90aWZpY2F0aW9uLmRpc3BsYXkpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUgKCkge1xuICAgICAgICBjb25zdCB7IGRpc3BsYXkgfSA9IHRoaXMucHJvcHMubm90aWZpY2F0aW9uO1xuXG4gICAgICAgIGlmIChkaXNwbGF5KSB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLnByb3BzLmRpc3BhdGNoKGhpZGVOb3RpZmljYXRpb24oKSksIDUwMDApO1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHsgdHlwZSwgY29udGVudCxjb250ZXh0LCBkaXNwbGF5IH0gPSB0aGlzLnByb3BzLm5vdGlmaWNhdGlvbjtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAgICAgZGlzcGxheTogZGlzcGxheSA/ICdibG9jaycgOiAnbm9uZScsIG1hcmdpbjogXCIxMHB4IDBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZXh0Q3NzID0gY29udGV4dDtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzfSBjbGFzc05hbWU9e1wiYWxlcnQgYWxlcnQtXCIrY29udGV4dENzc30gcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICApO1xuICAgIH1cbn0iLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0xhbmRpbmdQcmVzZW50YXRpb259IGZyb20gJy4vcHJlc2VudGF0aW9ucy9NYWluJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZGluZ0NvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGFuZGluZ1ByZXNlbnRhdGlvbiAvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBMYW5kaW5nUHJlc2VudGF0aW9uID0gKHt9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgSEVSRVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyAgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gIGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgSGFzaFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgUm91dGVzIGZyb20gJy4vLi4vcm91dGVzL0luZGV4JztcblxuLy8gaW1wb3J0IEhlYWRlciBmcm9tICcuLy4uL2NvbXBvbmVudHMvcGFydGlhbHMvaGVhZGVyJztcbi8vIGltcG9ydCBGb290ZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL3BhcnRpYWxzL2Zvb3Rlcic7XG4vLyBpbXBvcnQgU2lkZU5hdiBmcm9tICcuLy4uL2NvbXBvbmVudHMvcGFydGlhbHMvc2lkZV9uYXYnO1xuXG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vLi4vY29tcG9uZW50cy9lbGVtZW50cy9Ob3RpZmljYXRpb25CYXInO1xuLy8gaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi8uLi9jb21wb25lbnRzL3BhcnRpYWxzL3NwaW5uZXInO1xuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGRpc3BhdGNoLFxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLFxuICAgICAgICAgICAgc3Bpbm5lcixcbiAgICAgICAgICAgIGdsb2JhbHNcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhhc2hSb3V0ZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZCA9IFwiYXBwLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb24gbm90aWZpY2F0aW9uPXtub3RpZmljYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlcyBkaXNwYXRjaD17ZGlzcGF0Y2h9IC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvSGFzaFJvdXRlcj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgoc3RvcmUpID0+IHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbjogc3RvcmUubm90aWZpY2F0aW9uLFxuICAgICAgICBnbG9iYWxzOiBzdG9yZS5nbG9iYWxzXG4gICAgfTtcblxufSkoQXBwKSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQXBwIGZyb20gJy4vLi4vY29udGFpbmVycy9BcHAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb290IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIgKCkge1xuICAgICAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn0iLCIvLyBQQUNLQUdFIERFUEVOREVOQ0lFU1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9jb250YWluZXJzL1Jvb3QnO1xuaW1wb3J0IGNvbmZpZ3VyZSBmcm9tICcuL3N0b3JlL0luZGV4JztcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmUoKTtcblxuUmVhY3RET00ucmVuZGVyKFxuICAgIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTsiLCJpbXBvcnQge1xuICAgIFxufSBmcm9tICcuLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vdGlmaWNhdGlvbihzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKSB7XG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIC8vIGNhc2UgU0hPV19OT1RJRklDQVRJT046XG4gICAgICAgIC8vICAgICByZXR1cm4geyB0eXBlOiBhY3Rpb24ucGF5bG9hZC50eXBlLCBjb250ZXh0OiBhY3Rpb24ucGF5bG9hZC5jb250ZXh0LCBjb250ZW50OiBhY3Rpb24ucGF5bG9hZC5jb250ZW50LCBkaXNwbGF5OiB0cnVlIH0gXG4gICAgICAgIC8vIGNhc2UgSElERV9OT1RJRklDQVRJT046XG4gICAgICAgIC8vICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgICAgICAvLyBjYXNlIExPQ0FUSU9OX0NIQU5HRTpcbiAgICAgICAgLy8gICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufSIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5pbXBvcnQgZ2xvYmFscyBmcm9tICcuL0dsb2JhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgbm90aWZpY2F0aW9uLFxuICAgIGdsb2JhbHNcbn0pOyIsImltcG9ydCB7XG4gICAgU0hPV19OT1RJRklDQVRJT04sXG4gICAgTk9USUZJQ0FUSU9OX1RZUEVfU1VDQ0VTUyxcbiAgICBISURFX05PVElGSUNBVElPTlxufSBmcm9tICcuLy4uL3V0aWxzL0NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICB0eXBlOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBjb250ZXh0OiBOT1RJRklDQVRJT05fVFlQRV9TVUNDRVNTLFxuICAgIGRpc3BsYXk6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3RpZmljYXRpb24oc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbikge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIFNIT1dfTk9USUZJQ0FUSU9OOlxuICAgICAgICAgICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uLnBheWxvYWQudHlwZSwgY29udGV4dDogYWN0aW9uLnBheWxvYWQuY29udGV4dCwgY29udGVudDogYWN0aW9uLnBheWxvYWQuY29udGVudCwgZGlzcGxheTogdHJ1ZSB9IFxuICAgICAgICBjYXNlIEhJREVfTk9USUZJQ0FUSU9OOlxuICAgICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59IiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vVmlld3NcblxuLy8gRGFzaGJvYXJkXG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vLi4vY29tcG9uZW50cy9sYW5kaW5nL0xhbmRpbmdDb250YWluZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgcmVuZGVyICgpIHtcblxuICAgICAgICBjb25zdCB7IFxuICAgICAgICAgICAgZGlzcGF0Y2hcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL1wiIHJlbmRlcj17KHByb3BzKSA9PiA8RGFzaGJvYXJkIHsuLi5wcm9wc30gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPiB9IC8+XG5cbiAgICAgICAgICAgICAgICB7LyogPFJvdXRlIGV4YWN0PXt0cnVlfSBwYXRoPVwiL3ZpZGVvc1wiIHJlbmRlcj17KHByb3BzKSA9PiA8VmlkZW9MaXN0IHsuLi5wcm9wc30gZGlzcGF0Y2g9e2Rpc3BhdGNofSAvPiB9IC8+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvdmlkZW9zL2NyZWF0ZVwiIHJlbmRlcj17KHByb3BzKSA9PiA8VmlkZW9DcmVhdGUgey4uLnByb3BzfSBkaXNwYXRjaD17ZGlzcGF0Y2h9IC8+IH0gLz5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi92aWRlb3Mvdmlldy86aWRcIiByZW5kZXI9eyhwcm9wcykgPT4gPFZpZGVvVmlldyB7Li4ucHJvcHN9IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz4gfSAvPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ZpZGVvcy91cGRhdGUvOmlkXCIgcmVuZGVyPXsocHJvcHMpID0+IDxWaWRlb1VwZGF0ZSB7Li4ucHJvcHN9IGRpc3BhdGNoPXtkaXNwYXRjaH0gLz4gfSAvPiAqL31cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICApXG4gICAgfVxufSIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCByZWR1Y2VycyBmcm9tICcuLy4uL3JlZHVjZXJzL0luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlKCkge1xuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgICAgIHJlZHVjZXJzXG4gICAgKTtcblxuICAgIHJldHVybiBzdG9yZTtcbn0iLCJleHBvcnQgY29uc3QgU0hPV19OT1RJRklDQVRJT04gPSAnc2hvd19ub3RpZmljYXRpb24nO1xuZXhwb3J0IGNvbnN0IEhJREVfTk9USUZJQ0FUSU9OICA9ICdoaWRlX25vdGlmaWNhdGlvbic7XG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1RZUEVfU1VDQ0VTUyA9ICdzdWNjZXNzJztcbmV4cG9ydCBjb25zdCBOT1RJRklDQVRJT05fVFlQRV9XQVJOSU5HID0gJ3dhcm5pbmcnO1xuZXhwb3J0IGNvbnN0IE5PVElGSUNBVElPTl9UWVBFX0lORk8gPSAnaW5mbyc7XG5leHBvcnQgY29uc3QgTk9USUZJQ0FUSU9OX1RZUEVfRVJST1IgPSAnZGFuZ2VyJztcblxuZXhwb3J0IGNvbnN0IEZFVENIX1NUQVRFX0ZFVENISU5HID0gXCJmZXRjaGluZ1wiO1xuZXhwb3J0IGNvbnN0IEZFVENIX1NUQVRFX0ZFVENIRUQgPSBcImZldGNoZWRcIjtcbmV4cG9ydCBjb25zdCBGRVRDSF9TVEFURV9FUlJPUiA9IFwiZXJyb3JfZmV0Y2hpbmdcIiJdLCJzb3VyY2VSb290IjoiIn0=