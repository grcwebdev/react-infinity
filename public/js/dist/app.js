(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        app: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/app.js", "vendors~app" ]);
    return checkDeferredModules();
})({
    "./assets/js/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Counter_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Counter/Counter */ \"./assets/js/components/Counter/Counter.js\");\n\n\n\nconst users = ['Joe', 'Justin', 'Billy', 'Cindy']; // Class based component\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: 'container'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Counter_Counter__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], {\n      auto: false\n    }));\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack:///./assets/js/app.js?");
    },
    "./assets/js/components/Counter/Button.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Button extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.toggleHover = () => {\n      this.setState({\n        hover: !this.state.hover\n      });\n    };\n\n    this.state = {\n      hover: false\n    };\n  }\n\n  render() {\n    const styleButton = {\n      color: this.props.fontColor,\n      width: '50%',\n      border: '3px solid black',\n      padding: '20px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center',\n      cursor: 'pointer',\n      transition: 'all .4s ease-in-out',\n      background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button \".concat(this.props.action),\n      style: styleButton,\n      onMouseEnter: this.toggleHover,\n      onMouseLeave: this.toggleHover,\n      onClick: this.props.trigger\n    }, this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Button.js?");
    },
    "./assets/js/components/Counter/Counter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Counter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./assets/js/components/Counter/Button.js\");\n\n\nclass Counter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.addFunction = () => {\n      this.setState({\n        currentCount: this.state.currentCount + 1\n      }, () => {\n        console.log(this.state.currentCount);\n      });\n    };\n\n    this.minusFunction = () => {\n      this.setState({\n        currentCount: this.state.currentCount - 1\n      }, () => {\n        console.log(this.state.currentCount);\n      });\n    };\n\n    this.autoCount = () => {\n      setInterval(() => {\n        this.setState({\n          currentCount: this.state.currentCount + 1\n        });\n      }, 1000);\n    };\n\n    this.state = {\n      currentCount: 0\n    };\n  }\n\n  componentWillMount() {\n    console.log('componentWillMount started');\n  }\n\n  componentDidMount() {\n    if (this.props.auto) {\n      this.setState({\n        status: !status\n      }, () => {\n        this.autoCount();\n      });\n    }\n  }\n\n  render() {\n    const styleCounterComp = {\n      width: '100%',\n      maxWidth: '400px',\n      margin: '0 auto'\n    };\n    const styleNumber = {\n      border: '3px solid black',\n      padding: '20px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center'\n    };\n    const styleButtons = {\n      display: this.props.auto ? 'none' : 'flex'\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: 'counter-comp',\n      style: styleCounterComp\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: 'number',\n      style: styleNumber\n    }, this.state.currentCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: 'buttons',\n      style: styleButtons\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      action: \"minus\",\n      hoverColor: 'red',\n      backgroundColor: 'black',\n      fontColor: 'white',\n      trigger: this.minusFunction\n    }, \"-\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      action: \"plus\",\n      hoverColor: 'green',\n      backgroundColor: 'white',\n      fontColor: 'black',\n      trigger: this.addFunction\n    }, \"+\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/components/Counter/Counter.js?");
    }
});