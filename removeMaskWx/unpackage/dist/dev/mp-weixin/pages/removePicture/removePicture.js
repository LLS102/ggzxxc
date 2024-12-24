(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/removePicture/removePicture"],{

/***/ 225:
/*!******************************************************************************************************************!*\
  !*** D:/codeProject/llgululu-de-watermark/removeMaskWx/main.js?{"page":"pages%2FremovePicture%2FremovePicture"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _removePicture = _interopRequireDefault(__webpack_require__(/*! ./pages/removePicture/removePicture.vue */ 226));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_removePicture.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 226:
/*!***********************************************************************************************!*\
  !*** D:/codeProject/llgululu-de-watermark/removeMaskWx/pages/removePicture/removePicture.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removePicture.vue?vue&type=template&id=1e33e5fc&scoped=true& */ 227);
/* harmony import */ var _removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removePicture.vue?vue&type=script&lang=js& */ 229);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _removePicture_vue_vue_type_style_index_0_id_1e33e5fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removePicture.vue?vue&type=style&index=0&id=1e33e5fc&scoped=true&lang=css& */ 231);
/* harmony import */ var _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e33e5fc",
  null,
  false,
  _removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/removePicture/removePicture.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 227:
/*!******************************************************************************************************************************************!*\
  !*** D:/codeProject/llgululu-de-watermark/removeMaskWx/pages/removePicture/removePicture.vue?vue&type=template&id=1e33e5fc&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./removePicture.vue?vue&type=template&id=1e33e5fc&scoped=true& */ 228);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_template_id_1e33e5fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 228:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/codeProject/llgululu-de-watermark/removeMaskWx/pages/removePicture/removePicture.vue?vue&type=template&id=1e33e5fc&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uButton: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-button/u-button */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-button/u-button")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-button/u-button.vue */ 278))
    },
    uModal: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-modal/u-modal */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-modal/u-modal")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-modal/u-modal.vue */ 316))
    },
    uImage: function () {
      return Promise.all(/*! import() | uni_modules/uview-ui/components/u-image/u-image */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uview-ui/components/u-image/u-image")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uview-ui/components/u-image/u-image.vue */ 324))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 229:
/*!************************************************************************************************************************!*\
  !*** D:/codeProject/llgululu-de-watermark/removeMaskWx/pages/removePicture/removePicture.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./removePicture.vue?vue&type=script&lang=js& */ 230);
/* harmony import */ var _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 230:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/codeProject/llgululu-de-watermark/removeMaskWx/pages/removePicture/removePicture.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  data: function data() {
    return {
      imageUrl: '',
      // 存储已上传的图片URL
      imageWidth: 0,
      // 图片的原始宽度
      imageHeight: 0,
      // 图片的原始高度
      boxCoords: {
        x: 50,
        y: 50,
        width: 10,
        height: 10
      },
      // 存储裁剪框的坐标和尺寸
      canvasWidth: 0,
      // 存储canvas的宽度
      canvasHeight: 0,
      // 存储canvas的高度
      scale: 1,
      // 图片缩放比例
      scaledWidth: 0,
      // 缩放后的图片宽度
      scaledHeight: 0,
      // 缩放后的图片高度
      isDragging: false,
      // 是否正在拖动裁剪框
      isResizing: false,
      // 是否正在调整裁剪框的大小
      resizeCorner: '',
      // 记录当前是否在拖动某个角落（'top-left', 'top-right', 'bottom-left', 'bottom-right'）
      dragStart: {
        x: 0,
        y: 0
      },
      // 拖动开始的位置
      widthNum: 0,
      higthNum: 0,
      popupVisible: false,
      // 控制弹窗显示
      uploadedImageUrl: '',
      // 上传成功的图片地址
      showCanvas: false
    };
  },
  methods: {
    imgPreview: function imgPreview() {
      var imgsArray = [];
      imgsArray[0] = this.uploadedImageUrl;
      console.log('imgsArray[0]', imgsArray[0]);
      uni.previewImage({
        current: 0,
        urls: imgsArray
      });
    },
    showPopup: function showPopup(url) {
      this.showCanvas = false;
      // 模拟上传成功逻辑
      this.uploadedImageUrl = 'https://lilisen.top/api/display/image/' + url;
      // 替换为实际图片URL
      this.popupVisible = true;
    },
    onSave: function onSave() {
      this.downloadImage(this.uploadedImageUrl);
      this.popupVisible = false; // 关闭弹窗
    },
    onClose: function onClose() {
      this.showCanvas = true;
      this.popupVisible = false; // 关闭弹窗
    },
    //  https://lilisen.top/api/download/video/20241223155150849_yBEHscbGahiu48383c08bcbd83c74beb43f8b68a6fc4.png
    downloadImage: function downloadImage(url) {
      var _this = this;
      uni.showLoading({
        title: '保存中'
      });
      //下载图片
      uni.downloadFile({
        url: url,
        success: function success(res) {
          console.log(res);
          if (res.statusCode === 200) {
            //鉴权
            uni.authorize({
              scope: 'scope.writePhotosAlbum',
              success: function success() {
                //保存图片到相册
                uni.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: function success() {
                    uni.showToast({
                      title: '保存成功'
                    });
                  },
                  fail: function fail(err) {
                    //取消不为错，h5端可能有这个问题
                    if (err.errMsg.includes('fail cancel')) {
                      uni.hideLoading();
                      return;
                    }
                    uni.showToast({
                      title: '保存失败',
                      icon: "error"
                    });
                  }
                });
              },
              fail: function fail() {
                // 鉴权失败手动打开
                uni.hideLoading();
                uni.showModal({
                  title: '提示',
                  content: '需要保存图片权限，请在设置中打开',
                  showCancel: false,
                  success: uni.openSetting
                });
              }
            });
          }
        },
        fail: function fail(err) {
          // 地址有误处理
          uni.showToast({
            title: '图片解析失败',
            icon: 'error'
          });
        },
        complete: function complete() {
          _this.showCanvas = true;
        }
      });
    },
    checkResizeCorner: function checkResizeCorner(x, y) {
      var cornerRadius = 10; // 调整角点的范围
      var corners = [{
        name: 'top-left',
        x: this.boxCoords.x,
        y: this.boxCoords.y
      }, {
        name: 'top-right',
        x: this.boxCoords.x + this.boxCoords.width,
        y: this.boxCoords.y
      }, {
        name: 'bottom-left',
        x: this.boxCoords.x,
        y: this.boxCoords.y + this.boxCoords.height
      }, {
        name: 'bottom-right',
        x: this.boxCoords.x + this.boxCoords.width,
        y: this.boxCoords.y + this.boxCoords.height
      }];
      for (var _i = 0, _corners = corners; _i < _corners.length; _i++) {
        var corner = _corners[_i];
        var dx = x - corner.x;
        var dy = y - corner.y;
        if (Math.sqrt(dx * dx + dy * dy) <= cornerRadius) {
          return corner.name; // 返回被点击的角落
        }
      }

      return ''; // 如果没有点击到任何角落，返回空字符串
    },
    // 图片加载后，初始化裁剪框位置
    chooseImage: function chooseImage() {
      var _this2 = this;
      uni.chooseImage({
        count: 1,
        // Pick one image
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          _this2.imageUrl = tempFilePaths[0];
          _this2.showCanvas = true;
        },
        fail: function fail(err) {
          console.error('Image choose failed:', err);
        }
      });
    },
    onImageLoad: function onImageLoad() {
      var _this3 = this;
      // 获取设备的屏幕尺寸
      uni.getSystemInfo({
        success: function success(res) {
          var screenWidth = res.screenWidth; // 获取设备的屏幕宽度
          var screenHeight = res.screenHeight; // 获取设备的屏幕高度

          // 计算 canvas 的宽度（750rpx 对应的 px 值）
          var canvasWidth = screenWidth * (710 / 750); // 转换为 px，750rpx 对应 设备屏幕宽度的 1/2

          // 设置 canvas 高度为屏幕的 80%
          var canvasHeight = screenHeight * 0.8; // canvas 高度为屏幕的80%

          // 使用 uni.getImageInfo 获取图片的宽高
          uni.getImageInfo({
            src: _this3.imageUrl,
            success: function success(res) {
              _this3.imageWidth = res.width; // 保存图片的原始宽度
              _this3.imageHeight = res.height; // 保存图片的原始高度
              console.log('原图宽高', res.width, res.height);
              // 计算缩放比例，保持图片宽高比例
              var scale = canvasWidth / _this3.imageWidth; // 以canvas的宽度为基准，计算缩放比例
              var scaledHeight = _this3.imageHeight * scale; // 根据比例计算图片缩放后的高度

              // 确保canvas的高度和图片的缩放高度适配
              if (scaledHeight > canvasHeight) {
                // 如果缩放后的图片高度大于canvas高度，按照高度来缩放
                var heightScale = canvasHeight / _this3.imageHeight;
                var scaledWidth = _this3.imageWidth * heightScale; // 根据新的高度比例计算图片的宽度

                // 设置canvas的高度为缩放后的图片高度，宽度为按比例缩放后的宽度
                _this3.canvasWidth = scaledWidth;
                _this3.canvasHeight = canvasHeight;

                // 设置缩放后的图片宽高
                _this3.scaledWidth = scaledWidth;
                _this3.scaledHeight = canvasHeight;
                _this3.widthNum = _this3.canvasWidth / _this3.imageWidth;
                _this3.higthNum = _this3.canvasHeight / _this3.imageHeight;
                console.log('宽高现原比为', _this3.widthNum, _this3.higthNum);
                console.log('裁剪框宽高', _this3.boxCoords.width, _this3.boxCoords.height);
              } else {
                // 如果缩放后的图片高度小于canvas高度，则保持图片高度，并适配宽度
                _this3.canvasWidth = canvasWidth;
                _this3.canvasHeight = scaledHeight;

                // 设置缩放后的图片宽高
                _this3.scaledWidth = canvasWidth;
                _this3.scaledHeight = scaledHeight;
                _this3.widthNum = _this3.canvasWidth / _this3.imageWidth;
                _this3.higthNum = _this3.canvasHeight / _this3.imageHeight;
              }

              // 确保裁剪框在缩放后的图片上显示
              _this3.boxCoords.x = Math.max((_this3.canvasWidth - _this3.scaledWidth) / 2, 0);
              _this3.boxCoords.y = Math.max((_this3.canvasHeight - _this3.scaledHeight) / 2, 0);
              _this3.boxCoords.width = Math.min(_this3.scaledWidth, 300); // 限制裁剪框的最大宽度
              _this3.boxCoords.height = Math.min(_this3.scaledHeight, 200); // 限制裁剪框的最大高度

              // 确保裁剪框的大小不超过画布
              _this3.boxCoords.width = Math.min(_this3.boxCoords.width, _this3.canvasWidth);
              _this3.boxCoords.height = Math.min(_this3.boxCoords.height, _this3.canvasHeight);

              // 绘制图片和裁剪框
              _this3.drawCanvas();
            },
            fail: function fail(err) {
              console.error("Error getting image info:", err);
            }
          });
        }
      });
    },
    cropImage: function cropImage() {
      var _this4 = this;
      if (this.imageUrl == '') {
        uni.showToast({
          title: '请上传图片',
          icon: 'error'
        });
        return;
      }
      var scaledX = this.boxCoords.x;
      var scaledY = this.boxCoords.y;
      var scaledWidth = this.boxCoords.width;
      var scaledHeight = this.boxCoords.height;
      // this.widthNum = this.scaledHeight / this.imageWidth
      // 	  this.higthNum = this.scaledWidth / this.imageHeight

      // 将裁剪框坐标和大小还原为原始图片的坐标和大小
      var realX = scaledX / this.widthNum; // 将裁剪框的 x 坐标还原为原始图片坐标
      var realY = scaledY / this.higthNum; // 将裁剪框的 y 坐标还原为原始图片坐标
      var realWidth = scaledWidth / this.widthNum; // 将裁剪框的宽度还原为原始图片宽度
      var realHeight = scaledHeight / this.higthNum; // 将裁剪框的高度还原为原始图片高度

      console.log('Real Crop Box Coordinates (Original Image):');
      console.log("X: ".concat(realX, ", Y: ").concat(realY));
      console.log("Width: ".concat(realWidth, ", Height: ").concat(realHeight));
      console.log(this.imageUrl);
      var token = uni.getStorageSync('token');
      uni.uploadFile({
        url: 'https://lilisen.top/api/upload/image',
        // 替换为你的后端上传接口
        filePath: this.imageUrl,
        name: 'file',
        // 后端接收文件的字段名
        header: {
          'Accept': 'application/json;charset=UTF-8',
          'token': token // 保留其他需要的请求头
        },

        formData: {
          'realX': Math.ceil(realX),
          'realY': Math.ceil(realY),
          'realWidth': Math.ceil(realWidth),
          'realHeight': Math.ceil(realHeight)
        },
        success: function success(uploadRes) {
          var responseText = uploadRes.data;
          var response = JSON.parse(responseText);
          console.log(response); // 打印解码后的 response

          if (response.code === 200) {
            uni.showToast({
              title: '清除成功',
              icon: 'success'
            });
            _this4.showCanvas = false;
            _this4.showPopup(response.obj.message);
          } else {
            uni.showToast({
              title: '清除失败',
              icon: 'error'
            });
          }
        },
        fail: function fail(err) {
          console.error('Upload Error:', err);
          uni.showToast({
            title: '清除失败',
            icon: 'error'
          });
        }
      });
    },
    // 绘制图片和裁剪框
    drawCanvas: function drawCanvas() {
      var ctx = uni.createCanvasContext('cropperCanvas'); // 获取canvas上下文

      // 清空canvas
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      // 绘制图片，确保按比例缩放
      ctx.drawImage(this.imageUrl, 0, 0, this.scaledWidth, this.scaledHeight);

      // 设置裁剪框样式
      ctx.setFillStyle('rgba(0, 0, 0, 0.5)'); // 半透明遮罩
      ctx.fillRect(this.boxCoords.x, this.boxCoords.y, this.boxCoords.width, this.boxCoords.height); // 绘制裁剪框

      // 绘制裁剪框边框
      ctx.setStrokeStyle('#FF0000'); // 设置裁剪框边框颜色
      ctx.strokeRect(this.boxCoords.x, this.boxCoords.y, this.boxCoords.width, this.boxCoords.height); // 绘制边框

      // 绘制裁剪框四个角的圆点
      var cornerRadius = 2; // 圆点的半径
      ctx.setFillStyle('#00FF00'); // 设置圆点颜色
      ctx.beginPath();
      ctx.arc(this.boxCoords.x, this.boxCoords.y, cornerRadius, 0, 2 * Math.PI); // 左上角
      ctx.arc(this.boxCoords.x + this.boxCoords.width, this.boxCoords.y, cornerRadius, 0, 2 * Math.PI); // 右上角
      ctx.arc(this.boxCoords.x, this.boxCoords.y + this.boxCoords.height, cornerRadius, 0, 2 * Math.PI); // 左下角
      ctx.arc(this.boxCoords.x + this.boxCoords.width, this.boxCoords.y + this.boxCoords.height, cornerRadius, 0, 2 * Math.PI); // 右下角
      ctx.fill();

      // 刷新canvas
      ctx.draw();
    },
    // 开始拖动裁剪框或调整裁剪框
    onTouchStart: function onTouchStart(e) {
      var touch = e.touches[0];
      // 检测是否点击在裁剪框的角点区域
      var resizeCorner = this.checkResizeCorner(touch.x, touch.y);
      if (resizeCorner) {
        this.isResizing = true;
        this.resizeCorner = resizeCorner;
        this.dragStart = {
          x: touch.x,
          y: touch.y
        };
      } else if (touch.x >= this.boxCoords.x && touch.x <= this.boxCoords.x + this.boxCoords.width && touch.y >= this.boxCoords.y && touch.y <= this.boxCoords.y + this.boxCoords.height) {
        this.isDragging = true;
        this.dragStart = {
          x: touch.x,
          y: touch.y
        };
      }
    },
    // 拖动裁剪框或调整裁剪框
    onTouchMove: function onTouchMove(e) {
      if (this.isDragging) {
        var touch = e.touches[0];
        var dx = touch.x - this.dragStart.x;
        var dy = touch.y - this.dragStart.y;

        // 移动裁剪框时，确保裁剪框不会超出画布
        var newX = this.boxCoords.x + dx;
        var newY = this.boxCoords.y + dy;
        this.boxCoords.x = Math.min(Math.max(newX, 0), this.canvasWidth - this.boxCoords.width);
        this.boxCoords.y = Math.min(Math.max(newY, 0), this.canvasHeight - this.boxCoords.height);
        this.dragStart = {
          x: touch.x,
          y: touch.y
        };
        this.drawCanvas();
      } else if (this.isResizing) {
        var _touch = e.touches[0];
        var _dx = _touch.x - this.dragStart.x;
        var _dy = _touch.y - this.dragStart.y;
        switch (this.resizeCorner) {
          case 'top-left':
            this.boxCoords.x += _dx;
            this.boxCoords.y += _dy;
            this.boxCoords.width -= _dx;
            this.boxCoords.height -= _dy;
            break;
          case 'top-right':
            this.boxCoords.y += _dy;
            this.boxCoords.width += _dx;
            this.boxCoords.height -= _dy;
            break;
          case 'bottom-left':
            this.boxCoords.x += _dx;
            this.boxCoords.width -= _dx;
            this.boxCoords.height += _dy;
            break;
          case 'bottom-right':
            this.boxCoords.width += _dx;
            this.boxCoords.height += _dy;
            break;
        }

        // 限制裁剪框的最大宽度和高度
        this.boxCoords.width = Math.min(this.boxCoords.width, this.canvasWidth - this.boxCoords.x);
        this.boxCoords.height = Math.min(this.boxCoords.height, this.canvasHeight - this.boxCoords.y);

        // 限制裁剪框最小宽度和高度
        this.boxCoords.width = Math.max(this.boxCoords.width, 10);
        this.boxCoords.height = Math.max(this.boxCoords.height, 10);
        this.dragStart = {
          x: _touch.x,
          y: _touch.y
        };
        this.drawCanvas();
      }
    },
    // 结束裁剪框的拖动或调整
    onTouchEnd: function onTouchEnd() {
      this.isDragging = false;
      this.isResizing = false;
      this.resizeCorner = '';
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 231:
/*!********************************************************************************************************************************************************!*\
  !*** D:/codeProject/llgululu-de-watermark/removeMaskWx/pages/removePicture/removePicture.vue?vue&type=style&index=0&id=1e33e5fc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_style_index_0_id_1e33e5fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX.3.7.9.20230324/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./removePicture.vue?vue&type=style&index=0&id=1e33e5fc&scoped=true&lang=css& */ 232);
/* harmony import */ var _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_style_index_0_id_1e33e5fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_style_index_0_id_1e33e5fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_style_index_0_id_1e33e5fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_style_index_0_id_1e33e5fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_3_7_9_20230324_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_removePicture_vue_vue_type_style_index_0_id_1e33e5fc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 232:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/codeProject/llgululu-de-watermark/removeMaskWx/pages/removePicture/removePicture.vue?vue&type=style&index=0&id=1e33e5fc&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[225,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/removePicture/removePicture.js.map