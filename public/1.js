(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_category_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service.js */ "./resources/js/services/category_service.js");
/* harmony import */ var _services_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/basket_service */ "./resources/js/services/basket_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'category',
  data: function data() {
    return {
      category: {},
      products: [],
      categories: []
    };
  },
  mounted: function mounted() {
    this.loadCategories(); // location.reload()

    this.loadProductsByCategory();
  },
  methods: {
    loadProductsByCategory: function () {
      var _loadProductsByCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var code, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                code = this.$route.params.category;
                _context.next = 4;
                return _services_category_service_js__WEBPACK_IMPORTED_MODULE_1__["getProducts"](code);

              case 4:
                response = _context.sent;
                this.products = response.data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadProductsByCategory() {
        return _loadProductsByCategory.apply(this, arguments);
      }

      return loadProductsByCategory;
    }(),
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_category_service_js__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context2.sent;
                console.log(response);
                this.categories = response.data.data;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Не вдалось завантажити. обновіть сторінку'
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    goToProduct: function () {
      var _goToProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _services_category_service_js__WEBPACK_IMPORTED_MODULE_1__["goToProduct"](this.$route.category, this.$route.product);

              case 2:
                response = _context3.sent;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function goToProduct() {
        return _goToProduct.apply(this, arguments);
      }

      return goToProduct;
    }(),
    addToBasket: function () {
      var _addToBasket = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(product_id) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_basket_service__WEBPACK_IMPORTED_MODULE_2__["addToBasket"](product_id);

              case 3:
                response = _context4.sent;
                this.order = response.data;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'Не вдалось додати товар. Спробуте ще раз'
                });

              case 10:
                this.showBasket();

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function addToBasket(_x) {
        return _addToBasket.apply(this, arguments);
      }

      return addToBasket;
    }(),
    addToViewedProducts: function addToViewedProducts(product) {
      localStorage.setItem(product.code, JSON.stringify(product));
      console.log(localStorage);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=template&id=6480121d&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Category.vue?vue&type=template&id=6480121d& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "welcome__container" }, [
    _c(
      "div",
      {
        staticClass: "welcome__sidebar",
        staticStyle: { "padding-top": "10px" }
      },
      [
        _c(
          "div",
          {
            staticStyle: {
              "font-size": "13px",
              "margin-left": "15px",
              padding: "10px",
              cursor: "pointer"
            }
          },
          [
            _c("router-link", { attrs: { to: "/" } }, [_vm._v("Усі категорії")])
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.categories, function(category, index) {
          return _c(
            "ul",
            {
              key: index,
              staticStyle: {
                "list-style": "none",
                "font-size": "13px",
                margin: "0",
                "margin-left": "15px",
                padding: "10px",
                cursor: "pointer"
              }
            },
            [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/" + category.code } }, [
                    _vm._v(" " + _vm._s(category.name))
                  ])
                ],
                1
              )
            ]
          )
        })
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { staticClass: "welcome__main" }, [
      _c(
        "div",
        { staticClass: "row" },
        _vm._l(_vm.products, function(product, index) {
          return _c(
            "div",
            {
              key: index,
              staticClass: "col-sm-4 col-md-2 card",
              on: { click: _vm.goToProduct }
            },
            [
              _c("div", { staticClass: "thumbnail" }, [
                _c("img", {
                  attrs: {
                    src:
                      _vm.$store.state.serverPath + "/storage/" + product.image,
                    width: "130px",
                    alt: "iPhone X 64GB"
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "caption" }, [
                  _c("p", [_c("b", [_vm._v(_vm._s(product.name))])]),
                  _vm._v(" "),
                  _c("p", [_vm._v(_vm._s(product.price) + " грн.")])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticStyle: { display: "flex" } },
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: "/" + product.category_code + "/" + product.code
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary btn-sm",
                            on: {
                              click: function($event) {
                                return _vm.addToViewedProducts(product)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Детальніше\n                            "
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.addToBasket(product.id)
                          }
                        }
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: { id: "formBtn", type: "submit" }
                          },
                          [_vm._v("В корзину")]
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Category.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Category.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=6480121d& */ "./resources/js/views/Category.vue?vue&type=template&id=6480121d&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/views/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Category.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Category.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Category.vue?vue&type=template&id=6480121d&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Category.vue?vue&type=template&id=6480121d& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=6480121d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Category.vue?vue&type=template&id=6480121d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_6480121d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);