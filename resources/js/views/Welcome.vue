<template>

    <div class="welcome__container">
        <div class="welcome__sidebar" style="padding-top: 10px">
            <div style="font-size: 13px; margin-left:15px; padding: 10px; cursor:pointer">

                <router-link to="/"></router-link>
                Усі категорії
            </div>
            <ul v-for="(category, index) in categories" :key="index"
                style="list-style: none; font-size: 13px; margin: 0; margin-left:15px; padding: 10px; cursor:pointer">
                <li>
                    <router-link :to="`/${category.code}`"> {{category.name}}</router-link>
                </li>
            </ul>

        </div>
        <div class="welcome__main">
            <div class="row">
                <div class="col-sm-4 col-md-2 card" v-for="(product, index) in products" :key="index"
                     v-on:click="goToProduct">
                    <div class="thumbnail">
                        <img :src="`${$store.state.serverPath}/storage/${product.image}`" width="130px"
                             alt="iPhone X 64GB">
                        <div class="caption">
                            <p><b>{{product.name}}</b></p>
                            <p>{{product.price}} грн.</p>
                        </div>
                        <div style="display: flex;">
                            <router-link :to="`/${product.category_code}/${product.code}`">
                                <button class="btn btn-secondary btn-sm" v-on:click="addToViewedProducts(product)">
                                    Детальніше
                                </button>
                            </router-link>
                            <form v-on:submit.prevent="addToBasket(product.id)">
                                <button id="formBtn" class="btn btn-primary btn-sm" type="submit">В корзину</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Viewed v-if="this.showViewed=true"></Viewed>

        </div>

        <b-modal ref="Basket" hide-footer title="Корзина покупок" id="Basket">
            <Basket></Basket>
        </b-modal>


    </div>


</template>
<script>
    import * as categoryService from '../services/category_service.js'
    import {loadCategories} from "../services/category_service";

    import * as productService from '../services/product_service.js'
    import {loadProducts} from "../services/product_service";

    import * as basketService from '../services/basket_service.js'
    import Basket from '../components/Basket.vue';
    import Viewed from '../components/Viewed.vue';

    export default {
        components: {
            Basket,
            Viewed
        },
        name: 'welcome',
        data() {
            return {
                showViewed: false,
                categories: [],
                products: [],
                order: {},
            }
        },
        mounted() {
            this.loadProducts()
            this.loadCategories()
        },
        methods: {
            loadCategories: async function () {
                try {
                    const response = await categoryService.loadCategories()
                    this.categories = response.data.data
                } catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
            },
            loadProducts: async function () {
                try {
                    const response = await productService.loadProducts()
                    this.products = response.data
                } catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
            },
            goToProduct: async function () {
                const response = await categoryService.goToProduct(this.$route.category, this.$route.product)
            },
            hideBasket() {
                this.$refs.Basket.hide()
            },
            showBasket() {

                this.$refs.Basket.show()
            },
            addToBasket: async function (product_id) {
                try {
                    const response = await basketService.addToBasket(product_id)
                    this.order = response.data
                } catch {
                    this.flashMessage.error({
                        message: 'Не вдалось додати товар. Спробуте ще раз',
                    })
                }
                this.showBasket()
            },
            addToViewedProducts(product) {
                    localStorage.setItem(product.code, JSON.stringify(product));
            },
        },
    }
</script>
