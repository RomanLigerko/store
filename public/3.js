(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_product_service_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product_service.js */ "./resources/js/services/product_service.js");
/* harmony import */ var _services_category_service_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/category_service.js */ "./resources/js/services/category_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'products',
  data: function data() {
    return {
      products: [],
      categories: [],
      productData: {
        name: '',
        code: '',
        price: '',
        category_id: '',
        description: '',
        image: '' // category_name: ''

      },
      editProductData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadProducts();
  },
  methods: {
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_category_service_js__WEBPACK_IMPORTED_MODULE_2__["loadCategories"]();

              case 3:
                response = _context.sent;
                console.log(response);
                this.categories = response.data.data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Не вдалось завантажити. обновіть сторінку'
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    loadProducts: function () {
      var _loadProducts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_product_service_js__WEBPACK_IMPORTED_MODULE_1__["loadProducts"]();

              case 3:
                response = _context2.sent;
                this.products = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Не вдалось завантажити. обновіть сторінку'
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function loadProducts() {
        return _loadProducts.apply(this, arguments);
      }

      return loadProducts;
    }(),
    attachImage: function attachImage() {
      this.productData.image = this.$refs.newProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newProductImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.productData.image);
    },
    hideNewProductModal: function hideNewProductModal() {
      this.$refs.newProductModal.hide();
    },
    showNewProductModal: function showNewProductModal() {
      this.$refs.newProductModal.show();
    },
    createProduct: function () {
      var _createProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();
                formData.append('name', this.productData.name);
                formData.append('category_id', this.productData.category_id);
                formData.append('code', this.productData.code);
                formData.append('price', this.productData.price);
                formData.append('description', this.productData.description);
                formData.append('image', this.productData.image);
                _context3.prev = 7;
                _context3.next = 10;
                return _services_product_service_js__WEBPACK_IMPORTED_MODULE_1__["createProduct"](formData);

              case 10:
                response = _context3.sent;
                this.products.unshift(response.data);
                console.log(response);
                this.hideNewProductModal();
                this.flashMessage.success({
                  message: 'Ви успішно створили новий товар',
                  time: 4000
                });
                _context3.next = 26;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](7);
                _context3.t1 = _context3.t0.response.status;
                _context3.next = _context3.t1 === 422 ? 22 : 24;
                break;

              case 22:
                this.errors = _context3.t0.response.data.errors;
                return _context3.abrupt("break", 26);

              case 24:
                this.flashMessage.error({
                  message: 'Щось пішло не так. Спробуйте знову',
                  time: 4000
                });
                return _context3.abrupt("break", 26);

              case 26:
                console.log("form submitted");

              case 27:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 17]]);
      }));

      function createProduct() {
        return _createProduct.apply(this, arguments);
      }

      return createProduct;
    }(),
    deleteProduct: function () {
      var _deleteProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(product) {
        var r;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (window.confirm("\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0445\u043E\u0447\u0435\u0442\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0442\u043E\u0432\u0430\u0440 ".concat(product.name, "?"))) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return");

              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return _services_product_service_js__WEBPACK_IMPORTED_MODULE_1__["deleteProduct"](product.id);

              case 5:
                r = _context4.sent;
                console.log(r);
                this.products = this.products.filter(function (obj) {
                  return obj.id != product.id;
                });
                this.flashMessage.success({
                  message: 'Категорію успішно видалено',
                  time: 4000
                });
                _context4.next = 14;
                break;

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](2);
                console.log(_context4.t0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 11]]);
      }));

      function deleteProduct(_x) {
        return _deleteProduct.apply(this, arguments);
      }

      return deleteProduct;
    }(),
    editProduct: function editProduct(product) {
      this.editProductData = _objectSpread({}, product);
      this.showEditProductModal();
    },
    hideEditProductModal: function hideEditProductModal() {
      this.$refs.editProductModal.hide();
    },
    showEditProductModal: function showEditProductModal() {
      this.$refs.editProductModal.show();
    },
    editAttachImage: function editAttachImage() {
      this.editProductData.image = this.$refs.editProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editProductImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editProductData.image);
    },
    updateProduct: function () {
      var _updateProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                formData = new FormData();
                formData.append('name', this.editProductData.name);
                formData.append('code', this.editProductData.code);
                formData.append('category_id', this.editProductData.category_id);
                formData.append('price', this.editProductData.price);
                formData.append('description', this.editProductData.description);
                formData.append('image', this.editProductData.image);
                formData.append('_method', 'put');
                _context5.next = 11;
                return _services_product_service_js__WEBPACK_IMPORTED_MODULE_1__["updateProduct"](this.editProductData.id, formData);

              case 11:
                response = _context5.sent;
                this.products.map(function (product) {
                  if (product.id == response.data.id) {
                    for (var key in response.data) {
                      product[key] = response.data[key];
                    }
                  }
                });
                this.hideEditProductModal();
                this.flashMessage.success({
                  message: 'Товар успішно змінено',
                  time: 4000
                });
                _context5.next = 20;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t0 = _context5["catch"](0);
                console.log(_context5.t0);

              case 20:
                console.log('update');

              case 21:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 17]]);
      }));

      function updateProduct() {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa& ***!
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
  return _c(
    "div",
    { staticClass: "content" },
    [
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("span", [_vm._v("Управління товарами")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm float-right",
              on: { click: _vm.showNewProductModal }
            },
            [
              _c("span", { staticClass: "fa fa-plus" }),
              _vm._v("\n                    Створити новий\n                ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("table", { staticClass: "table" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(product, index) {
                return _c("tr", { key: index }, [
                  _c("th", [_vm._v(_vm._s(++index))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(product.name))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(product.category_id))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(product.code))]),
                  _vm._v(" "),
                  _c("th", [_vm._v(_vm._s(product.price))]),
                  _vm._v(" "),
                  _c("th", [
                    _c("img", {
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          product.image,
                        alt: product.name,
                        width: "100px"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("th", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        staticStyle: { color: "white" },
                        on: {
                          click: function($event) {
                            return _vm.editProduct(product)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-edit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger",
                        staticStyle: { color: "white" },
                        on: {
                          click: function($event) {
                            return _vm.deleteProduct(product)
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-trash" })]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newProductModal",
          attrs: { "hide-footer": "", title: "Створення товару" }
        },
        [
          _c("div", { staticClass: "d-block " }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createProduct($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _c("b", [_vm._v("Назва товару")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData.name,
                        expression: "productData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Введіть назву товару"
                    },
                    domProps: { value: _vm.productData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.productData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "category" } }, [
                    _c("b", [_vm._v("Категорія")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData.category_id,
                        expression: "productData.category_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "category_id",
                      placeholder: "Введіть id категорії"
                    },
                    domProps: { value: _vm.productData.category_id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.productData,
                          "category_id",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "code" } }, [
                    _c("b", [_vm._v("Код")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData.code,
                        expression: "productData.code"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "code",
                      placeholder: "Введіть код товару"
                    },
                    domProps: { value: _vm.productData.code },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.productData, "code", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "price" } }, [
                    _c("b", [_vm._v("Ціна")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData.price,
                        expression: "productData.price"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "price",
                      placeholder: "Введіть ціну товару"
                    },
                    domProps: { value: _vm.productData.price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.productData, "price", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "description" } }, [
                    _c("b", [_vm._v("Опис")])
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData.description,
                        expression: "productData.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "description",
                      placeholder: "Опишіть товар"
                    },
                    domProps: { value: _vm.productData.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.productData,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _c("b", [_vm._v("Виберіть фото")])
                  ]),
                  _vm._v(" "),
                  _vm.productData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newProductImageDisplay",
                          attrs: { src: "", width: "100px" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newProductImage",
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      id: "image",
                      placeholder: "Опишіть товар"
                    },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    attrs: { type: "button" },
                    on: { click: _vm.hideNewProductModal }
                  },
                  [_vm._v("Відміна")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Зберегти")]
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editProductModal",
          attrs: { "hide-footer": "", title: "Редагування товару" }
        },
        [
          _c("div", { staticClass: "d-block " }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateProduct($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _c("b", [_vm._v("Назва товару")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editProductData.name,
                        expression: "editProductData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Введіть назву товару"
                    },
                    domProps: { value: _vm.editProductData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editProductData,
                          "name",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "code" } }, [
                    _c("b", [_vm._v("Категорія")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editProductData.category_id,
                        expression: "editProductData.category_id"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "category_id",
                      placeholder: "Введіть id категорії"
                    },
                    domProps: { value: _vm.editProductData.category_id },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editProductData,
                          "category_id",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "code" } }, [
                    _c("b", [_vm._v("Код")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editProductData.code,
                        expression: "editProductData.code"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "code",
                      placeholder: "Введіть код товару"
                    },
                    domProps: { value: _vm.editProductData.code },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editProductData,
                          "code",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "price" } }, [
                    _c("b", [_vm._v("Ціна")])
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editProductData.price,
                        expression: "editProductData.price"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "price",
                      placeholder: "Введіть ціну товару"
                    },
                    domProps: { value: _vm.editProductData.price },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editProductData,
                          "price",
                          $event.target.value
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "description" } }, [
                    _c("b", [_vm._v("Опис")])
                  ]),
                  _vm._v(" "),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editProductData.description,
                        expression: "editProductData.description"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "description",
                      placeholder: "Опишіть товар"
                    },
                    domProps: { value: _vm.editProductData.description },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editProductData,
                          "description",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _c("b", [_vm._v("Виберіть фото")])
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      ref: "editProductImageDisplay",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editProductData.image,
                        width: "100px"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editProductImage",
                    staticClass: "form-control",
                    attrs: {
                      type: "file",
                      id: "image",
                      placeholder: "Опишіть товар"
                    },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning",
                    attrs: { type: "button" },
                    on: { click: _vm.hideEditProductModal }
                  },
                  [_vm._v("Відміна")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Зберегти")]
                )
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ім'я")]),
        _vm._v(" "),
        _c("th", [_vm._v("Категорія")]),
        _vm._v(" "),
        _c("th", [_vm._v("Код")]),
        _vm._v(" "),
        _c("th", [_vm._v("Ціна")]),
        _vm._v(" "),
        _c("th", [_vm._v("Зображення")]),
        _vm._v(" "),
        _c("th", [_vm._v("Дії")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Products.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Products.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=eec6f8fa& */ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=eec6f8fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);