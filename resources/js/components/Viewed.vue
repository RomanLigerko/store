<template>
    <div class="" style="margin-top: 70px">
        <h3 v-if="this.showViewed==true">Переглянуті товари</h3>
        <div class="viewed-products">
            <div class="col-sm-4 col-md-2 card" v-for="(product, index) in array" :key="index" >
                <div class="thumbnail">
                    <img :src="`${$store.state.serverPath}/storage/${product.image}`" width="110px" alt="iPhone X 64GB">
                    <div class="caption">
                        <p><b>{{product.name}}</b></p>
                    </div>
                    <div style="display: flex;">
                        <router-link :to="`/${product.category_code}/${product.code}`" >
                            <button class="btn btn-secondary btn-sm">Детальніше</button>
                        </router-link>
                        <form v-on:submit.prevent="addToBasket(product.id)">
                            <button id="formBtn" class="btn btn-primary btn-sm"  type="submit">В корзину</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <b-modal ref="Basket" hide-footer title="Корзина покупок" id="Basket">
            <Basket></Basket>
        </b-modal>
    </div>


</template>

<script>

    import * as productService from "../services/product_service";
    import * as basketService from '../services/basket_service.js'
    import Basket from '../components/Basket.vue';

    export default {
        components: {
          Basket
        },
        name: 'viewed',
        mounted() {

            this.loadProducts()
        },
        data(){
            return{
                showViewed: false,
                array: [],
                products: [],
                viewedProducts: [],
            }
        },
        methods: {
            checkData(){
                // console.log(this.array.length)
              if(this.array.length<1){
                 this.showViewed = false
                }else{
                  this.showViewed = true
              }
            },
            loadProducts: async function(){
                try {
                    const response = await productService.loadProducts()
                    this.products = response.data
                    this.products.forEach((element) => {
                        for (let i = 0; i <= localStorage.length; i++) {
                            if (localStorage.key(i) == element.code) {
                                this.array.push(element)
                            }
                        }
                        this.checkData()
                    })
                } catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
            },
            addToBasket: async function (product_id) {
                try {
                    const response = await basketService.addToBasket(product_id)
                } catch {
                    this.flashMessage.error({
                        message: 'Не вдалось додати товар. Спробуте ще раз',
                    })
                }
                this.showBasket()
            },
            hideBasket() {
                this.$refs.Basket.hide()
            },
            showBasket() {

                this.$refs.Basket.show()
            },
        }

    }

</script>

