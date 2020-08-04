<template>
    <div class="content">
        <div class="card mb-3">
            <div class="card-header">
                <span>Управління категоріями</span>
                <button v-on:click="showNewCategoryModal" class="btn btn-primary btn-sm float-right">
                    <span class="fa fa-plus"></span>
                    Створити нову
                </button>
            </div>
            <div class="card-body">
                <table class="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ім'я</th>
                        <th>Код</th>
                        <th>Опис</th>
                        <th>Зображення</th>
                        <th>Дії</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  v-for="(category, index) in categories" :key="index">
                        <th>{{++index}}</th>
                        <th>{{category.name}}</th>
                        <th>{{category.code}}</th>
                        <th>{{category.description}}</th>
                        <th>
                            <img :src="`${$store.state.serverPath}/storage/${category.image}`" :alt="category.name" width="100px">
                        </th>
                        <th>
                            <button class="btn btn-primary" v-on:click="editCategory(category)" style="color: white"><i class="fa fa-edit"></i></button>
                            <button class="btn btn-danger" v-on:click="deleteCategory(category)" style="color: white"><i class="fa fa-trash"></i></button>
                        </th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <b-modal ref="newCategoryModal" hide-footer title="Створення категорії">
            <div class="d-block ">
                <form v-on:submit.prevent="createCategory">
                    <div class="form-group">
                        <label  for="name"><b>Назва категорії</b></label>
                        <input type="text" class="form-control" id="name" v-model="categoryData.name" placeholder="Введіть назву категорії">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="code"><b>Код</b></label>
                        <input type="text" class="form-control" id="code" v-model="categoryData.code" placeholder="Введіть код категорії">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="description"><b>Опис</b></label>
                        <textarea type="text" v-model="categoryData.description" class="form-control" id="description"  placeholder="Опишіть категорію"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="image"><b>Виберіть фото</b>
                           </label>
                        <div v-if="categoryData.image.name">
                            <img src="" ref="newCategoryImageDisplay" width="100px">
                        </div>
                        <input type="file" v-on:change="attachImage" ref="newCategoryImage" class="form-control" id="image"  placeholder="Опишіть категорію">
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>

                    <hr>
                    <button class="btn btn-warning" type="button" v-on:click="hideNewCategoryModal">Відміна</button>
                    <button class="btn btn-primary" type="submit">Зберегти</button>
                </form>
            </div>

        </b-modal>

        <b-modal ref="editCategoryModal" hide-footer title="Редагування категорії">
            <div class="d-block ">
                <form v-on:submit.prevent="updateCategory">
                    <div class="form-group">
                        <label  for="name"><b>Назва категорії</b></label>
                        <input type="text" class="form-control" id="name" v-model="editCategoryData.name" placeholder="Введіть назву категорії">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="code"><b>Код</b></label>
                        <input type="text" class="form-control" id="code" v-model="editCategoryData.code" placeholder="Введіть код категорії">
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label  for="description"><b>Опис категорії</b></label>
                        <textarea type="text" v-model="editCategoryData.description" class="form-control" id="description"  placeholder="Опишіть категорію"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="image"><b>Виберіть фото</b>
                        </label>
                        <div>
                            <img :src="`${$store.state.serverPath}/storage/${editCategoryData.image}`" ref="editCategoryImageDisplay" width="100px">
                        </div>
                        <input type="file" v-on:change="editAttachImage" ref="editCategoryImage" class="form-control" id="image"  placeholder="Опишіть категорію">
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>

                    <hr>
                    <button class="btn btn-warning" type="button" v-on:click="hideEditCategoryModal">Відміна</button>
                    <button class="btn btn-primary" type="submit">Зберегти</button>
                </form>
            </div>

        </b-modal>
    </div>
</template>
<script>
    import * as categoryService from '../services/category_service.js'
    import {loadCategories} from "../services/category_service";

    export default {
        name: 'categories',
        data(){
            return{
                categories: [],
                categoryData:{
                    name: '',
                    code: '',
                    description:'',
                    image: ''
                },
                editCategoryData: {},
                errors:{}
            }
        },
        mounted() {
            this.loadCategories()
        },
        methods:{
            loadCategories: async function(){
                try{
                    const response = await categoryService.loadCategories()
                    console.log(response)
                    this.categories = response.data.data
                    console.log(this.categories)
                }catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
            },
            attachImage(){
                this.categoryData.image = this.$refs.newCategoryImage.files[0]
                let reader = new FileReader()
                reader.addEventListener('load', function () {
                    this.$refs.newCategoryImageDisplay.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.categoryData.image)
            },
            hideNewCategoryModal(){
                this.$refs.newCategoryModal.hide()
            },
            showNewCategoryModal(){
                this.$refs.newCategoryModal.show()
            },
            createCategory: async function(){
                let formData = new FormData()
                formData.append('name', this.categoryData.name)
                formData.append('code', this.categoryData.name)
                formData.append('description', this.categoryData.description)
                formData.append('image', this.categoryData.image)
                try{
                    const response = await categoryService.createCategory(formData)
                    this.categories.unshift(response.data)
                    console.log(response)
                    this.hideNewCategoryModal()
                    this.flashMessage.success({
                        message: 'Ви успішно створили нову категорію',
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
                }
                    console.log("form submitted")
            },
            deleteCategory: async function(category){
                if(!window.confirm(`Ви впевнені, що хочете видалити категорію ${category.name}?`)){
                    return
                }

                try{
                    const r = await categoryService.deleteCategory(category.id)
                    console.log(r)
                    this.categories = this.categories.filter(obj => {
                        return obj.id != category.id
                    })
                    this.flashMessage.success({
                        message: 'Категорію успішно видалено',
                        time: 4000
                    })

                }catch (error) {
                    console.log(error)
                }

            },
            editCategory(category){
                this.editCategoryData = {...category}
                this.showEditCategoryModal()
            },
            hideEditCategoryModal() {
              this.$refs.editCategoryModal.hide()
            },
            showEditCategoryModal() {
                this.$refs.editCategoryModal.show()
            },
            editAttachImage(){
                this.editCategoryData.image = this.$refs.editCategoryImage.files[0]
                let reader = new FileReader()
                reader.addEventListener('load', function () {
                    this.$refs.editCategoryImageDisplay.src = reader.result
                }.bind(this), false)

                reader.readAsDataURL(this.editCategoryData.image)
            },

            updateCategory: async function(){
                try{
                    const formData = new FormData()
                    formData.append('name', this.editCategoryData.name)
                    formData.append('code', this.editCategoryData.code)
                    formData.append('description', this.editCategoryData.description)
                    formData.append('image', this.editCategoryData.image)
                    formData.append('_method', 'put');

                    const response = await categoryService.updateCategory(this.editCategoryData.id, formData);
                    this.categories.map(category => {
                        if (category.id == response.data.id){
                            for (let key in response.data){
                                category[key] = response.data[key]
                            }
                        }
                    })
                    this.hideEditCategoryModal()
                    this.flashMessage.success({
                        message: 'Категорію успішно змінено',
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
