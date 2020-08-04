<template>
    <div class="product" style="width: 70%; margin: 0 auto; border: 1px solid black">
        Product

        <div class=""><img :src="`${$store.state.serverPath}/storage/${productData.image}`" width="500px" alt=""></div>
        <h2>{{productData.name}}</h2>
        <div class="">Ціна: {{productData.price}}</div>
        <div class="">Опис: {{productData.description}}</div>
    </div>
</template>
<script>

    import * as categoryService from '../services/category_service.js'
    // import {loadCategories} from "../services/category_service";

    export default {
        name: 'product',
        data() {
            return {
                productData: {
                    name: '',
                    code: '',
                    description:'',
                    image: ''
                },
            }
        },
        mounted() {
            this.loadProduct()
        },
        methods: {
            loadProduct: async function () {
                try {
                    let category = this.$route.params.category
                    let product = this.$route.params.product
                    const response = await categoryService.goToProduct(category, product)
                    this.productData = response.data
                } catch (error) {
                    console.log(error)
                }
            },
        },
    }
</script>
