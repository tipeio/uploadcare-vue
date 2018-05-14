(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("uploadcare"));
	else if(typeof define === 'function' && define.amd)
		define("uploadcare-vue", ["uploadcare"], factory);
	else if(typeof exports === 'object')
		exports["uploadcare-vue"] = factory(require("uploadcare"));
	else
		root["uploadcare-vue"] = factory(root["uploadcare"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_script_lang_js___default.a); 

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//
//
//
//
//
//
var uploadcare = __webpack_require__(5);

var _default = {
  props: {
    publicKey: {
      type: String,
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    multipleMax: {
      type: Number
    },
    multipleMin: {
      type: Number
    },
    imagesOnly: {
      type: Boolean,
      default: false
    },
    // Default value does not match the UploadCare API default.
    previewStep: {
      type: Boolean,
      default: true
    },
    crop: {
      type: String,
      default: ''
    },
    imageShrink: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: String,
      default: 'file url camera dropbox gdrive box skydrive'
    },
    inputAcceptTypes: {
      type: String
    },
    preferredTypes: {
      type: String
    },
    // Default value does not match the UploadCare API default.
    systemDialog: {
      type: Boolean,
      default: true
    },
    multipartMinSize: {
      type: Number,
      default: 26214400
    },
    secureSignature: {
      type: String
    },
    secureExpire: {
      type: Number
    },
    previewProxy: {
      type: String
    },
    previewUrlCallback: {
      type: Function
    },
    cdnBase: {
      type: String
    },
    doNotStore: {
      type: Boolean,
      default: false
    },
    validators: {
      type: Array
    }
  },
  methods: {
    onClick: function onClick() {
      var _this = this;

      var publicKey = this.publicKey,
          multiple = this.multiple,
          multipleMax = this.multipleMax,
          multipleMin = this.multipleMin,
          imagesOnly = this.imagesOnly,
          previewStep = this.previewStep,
          crop = this.crop,
          imageShrink = this.imageShrink,
          clearable = this.clearable,
          tabs = this.tabs,
          inputAcceptTypes = this.inputAcceptTypes,
          preferredTypes = this.preferredTypes,
          systemDialog = this.systemDialog,
          multipartMinSize = this.multipartMinSize,
          secureSignature = this.secureSignature,
          secureExpire = this.secureExpire,
          previewProxy = this.previewProxy,
          previewUrlCallback = this.previewUrlCallback,
          cdnBase = this.cdnBase,
          doNotStore = this.doNotStore,
          validators = this.validators;
      var options = {
        publicKey: publicKey,
        multiple: multiple,
        multipleMax: multipleMax,
        multipleMin: multipleMin,
        imagesOnly: imagesOnly,
        previewStep: previewStep,
        crop: crop,
        imageShrink: imageShrink,
        clearable: clearable,
        tabs: tabs,
        inputAcceptTypes: inputAcceptTypes,
        preferredTypes: preferredTypes,
        systemDialog: systemDialog,
        multipartMinSize: multipartMinSize,
        secureSignature: secureSignature,
        secureExpire: secureExpire,
        previewProxy: previewProxy,
        previewUrlCallback: previewUrlCallback,
        cdnBase: cdnBase,
        doNotStore: doNotStore
      };

      if (validators && validators.length) {
        Object.assign(options, {
          validators: validators
        });
      }

      this.fileGroup = uploadcare.openDialog([], options);
      this.fileGroup.done(function (filePromise) {
        if (_this.multiple) {
          var promise = filePromise.promise();
          promise.done(function () {
            var files = filePromise.files();
            files.forEach(function (fileProm) {
              fileProm.done(function (file) {
                _this.$emit('success', file);
              });
              fileProm.fail(function (err) {
                _this.$emit('error', err);
              });
            });
          });
          promise.fail(function (err) {
            _this.$emit('error', err);
          });
        } else {
          filePromise.done(function (file) {
            _this.$emit('success', file);
          });
          filePromise.fail(function (err) {
            _this.$emit('error', err);
          });
        }
      });
      this.fileGroup.fail(function (err) {
        _this.$emit('error', err);
      });
    }
  }
};
exports.default = _default;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Uploadcare_vue_vue_type_template_id_16f3004b__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__ = __webpack_require__(0);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(6);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__Uploadcare_vue_vue_type_script_lang_js__["default"],
  __WEBPACK_IMPORTED_MODULE_0__Uploadcare_vue_vue_type_template_id_16f3004b__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__Uploadcare_vue_vue_type_template_id_16f3004b__["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/marshall/Sites/uploadcare-vue/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('16f3004b', component.options)
    } else {
      api.reload('16f3004b', component.options)
    }
    module.hot.accept("./Uploadcare.vue?vue&type=template&id=16f3004b", function () {
      api.rerender('16f3004b', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/Uploadcare.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_template_id_16f3004b__ = __webpack_require__(4);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_template_id_16f3004b__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uploadcare_vue_vue_type_template_id_16f3004b__["b"]; });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.onClick($event)
        }
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});