<template>
    <div class="content">
        <div class="card mb-3">
            <div class="card-header">
                <span>Управління товарами</span>
                <button v-on:click="showNewProductModal" class="btn btn-primary btn-sm float-right">
                    <span class="fa fa-plus"></span>
                    Створити новий
                </button>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ім'я</th>
                        <th>Категорія</th>
                        <th>Код</th>
                        <th>Ціна</th>
                        <th>Зображення</th>
                        <th>Дії</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  v-for="(product, index) in products" :key="index">
                        <th>{{++index}}</th>
                        <th>{{product.name}}</th>
                        <th>{{product.category_id}}</th>
                        <th>{{product.code}}</th>
                        <th>{{product.price}}</th>
                        <th>
                            <img :src="`${$store.state.serverPath}/storage/${product.image}`" :alt="product.name" width="100px">
                        </th>
                        <th>
                            <button class="btn btn-primary" v-on:click="editProduct(product)" style="color: white"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger" v-on:click="deleteProduct(product)" style="color: white"><i class="fa fa-trash"></i></button>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <b-modal ref="newProductModal" hide-footer title="Створення товару">
            <div class="d-block ">
                <form v-on:submit.prevent="createProduct">
                    <div class="form-group">
                        <label  for="name"><b>Назва товару</b></label>
                        <input type="text" class="form-control" id="name" v-model="productData.name" placeholder="Введіть назву товару">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="code"><b>Категорія</b></label>
                        <input type="text" class="form-control" id="category_id" v-model="productData.category_id" placeholder="Введіть id категорії">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="code"><b>Код</b></label>
                        <input type="text" class="form-control" id="code" v-model="productData.code" placeholder="Введіть код товару">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="price"><b>Ціна</b></label>
                        <input type="text" class="form-control" id="price" v-model="productData.price" placeholder="Введіть ціну товару">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="description"><b>Опис</b></label>
                        <textarea type="text" v-model="productData.description" class="form-control" id="description"  placeholder="Опишіть товар"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="image"><b>Виберіть фото</b>
                        </label>
                        <div v-if="productData.image.name">
                            <img src="" ref="newProductImageDisplay" width="100px">
                        </div>
                        <input type="file" v-on:change="attachImage" ref="newProductImage" class="form-control" id="image"  placeholder="Опишіть товар">
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>

                    <hr>
                    <button class="btn btn-warning" type="button" v-on:click="hideNewProductModal">Відміна</button>
                    <button class="btn btn-primary" type="submit">Зберегти</button>
                </form>
            </div>

        </b-modal>

        <b-modal ref="editProductModal" hide-footer title="Редагування товару">
            <div class="d-block ">
                <form v-on:submit.prevent="updateProduct">
                    <div class="form-group">
                        <label  for="name"><b>Назва товару</b></label>
                        <input type="text" class="form-control" id="name" v-model="editProductData.name" placeholder="Введіть назву товару">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="code"><b>Категорія</b></label>
                        <input type="text" class="form-control" id="category_id" v-model="editProductData.category_id" placeholder="Введіть id категорії">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="code"><b>Код</b></label>
                        <input type="text" class="form-control" id="code" v-model="editProductData.code" placeholder="Введіть код товару">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="price"><b>Ціна</b></label>
                        <input type="text" class="form-control" id="price" v-model="editProductData.price" placeholder="Введіть ціну товару">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="description"><b>Опис</b></label>
                        <textarea type="text" v-model="editProductData.description" class="form-control" id="description"  placeholder="Опишіть товар"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="image"><b>Виберіть фото</b>
                        </label>
                        <div>
                            <img :src="`${$store.state.serverPath}/storage/${editProductData.image}`" ref="editProductImageDisplay" width="100px">
                        </div>
                        <input type="file" v-on:change="attachImage" ref="editProductImage" class="form-control" id="image"  placeholder="Опишіть товар">
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>

                    <hr>
                    <button class="btn btn-warning" type="button" v-on:click="hideEditProductModal">Відміна</button>
                    <button class="btn btn-primary" type="submit">Зберегти</button>
                </form>
            </div>

        </b-modal>
    </div>
</template>
<script>
    import * as productService from '../services/product_service.js'
    import {loadProducts} from "../services/product_service";

    export default {
        name: 'products',
        data(){
            return{
                products: [],
                productData:{
                    name: '',
                    code: '',
                    price: '',
                    category_id: '',
                    description:'',
                    image: '',
                    // category_name: ''
                },
                editProductData: {},
                errors:{}
            }
        },
        mounted() {
            this.loadProducts()
        },
        methods:{
            loadProducts: async function(){
                try{
                    const response = await productService.loadProducts()
                    this.products = response.data
                }catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
            },
            attachImage(){
                this.productData.image = this.$refs.newProductImage.files[0]
                let reader = new FileReader()
                reader.addEventListener('load', function () {
                    this.$refs.newProductImageDisplay.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.productData.image)
            },
            hideNewProductModal(){
                this.$refs.newProductModal.hide()
            },
            showNewProductModal(){
                this.$refs.newProductModal.show()
            },
            createProduct: async function(){
                let formData = new FormData()
                formData.append('name', this.productData.name)
                formData.append('category_id', this.productData.category_id)
                formData.append('code', this.productData.code)
                formData.append('price', this.productData.price)
                formData.append('description', this.productData.description)
                formData.append('image', this.productData.image)
                try{
                    const response = await productService.createProduct(formData)
                    this.products.unshift(response.data)
                    console.log(response)
                    this.hideNewProductModal()
                    this.flashMessage.success({
                        message: 'Ви успішно створили новий товар',
                        time: 4000
                    })
                } catch(error){
                    switch(error.response.status){
                        case 422:
                            this.errors = error.response.data.errors
                            break
                        default:
                            this.flashMessage.error({
                                message: 'Щось пішло не так. Спробуйте знову',
                                time: 4000
                            })
                            break
                    }
                    // console.log(switch(error.response.status))
                }
                console.log("form submitted")
            },
            deleteProduct: async function(product){

                if(!window.confirm(`Ви впевнені, що хочете видалити товар ${product.name}?`)){
                    return
                }
                try{
                    const r = await productService.deleteProduct(product.id)
                    console.log(r)
                    this.products = this.products.filter(obj => {
                        return obj.id != product.id
                    })
                    this.flashMessage.success({
                        message: 'Категорію успішно видалено',
                        time: 4000
                    })

                }catch (error) {
                    console.log(error)
                }

            },
            editProduct(product){
                this.editProductData = {...product}
                this.showEditProductModal()
            },
            hideEditProductModal() {
                this.$refs.editProductModal.hide()
            },
            showEditProductModal() {
                this.$refs.editProductModal.show()
            },
            editAttachImage(){
                this.editProductData.image = this.$refs.editProductImage.files[0]
                let reader = new FileReader()
                reader.addEventListener('load', function () {
                    this.$refs.editProductImageDisplay.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.editProductData.image)
            },

            updateProduct: async function(){
                try{
                    const formData = new FormData()
                    formData.append('name', this.editProductData.name)
                    formData.append('code', this.editProductData.code)
                    formData.append('category_id', this.editProductData.category_id)
                    formData.append('price', this.editProductData.price)
                    formData.append('description', this.editProductData.description)
                    formData.append('image', this.editProductData.image)
                    formData.append('_method', 'put');

                    const response = await productService.updateProduct(this.editProductData.id, formData);
                    this.products.map(product => {
                        if (product.id == response.data.id){
                            for (let key in response.data){
                                product[key] = response.data[key]
                            }
                        }
                    })
                    this.hideEditProductModal()
                    this.flashMessage.success({
                        message: 'Товар успішно змінено',
                        time: 4000
                    })
                }catch(error){
                    console.log(error)
                }
                console.log('update')
            }
        },
    }
</script>
