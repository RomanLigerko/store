<template>
    <div class="product" style="width: 70%; margin: 50px auto; display: flex">


        <div class=""><img :src="`${$store.state.serverPath}/storage/${productData.image}`" width="500px" alt=""></div>
        <div class="product-data">
            <h1>{{productData.name}}</h1>
            <div class="" style=" margin-top: 50px "><b>Ціна:</b> {{productData.price}} грн.</div>
            <div class="" style=" margin-top: 50px; width: 60%; ">{{productData.description}}</div>
        </div>

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
