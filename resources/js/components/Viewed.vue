<template>
    <div class="" style="margin-top: 70px">
        <h3>Переглянуті товари</h3>
        <div class="viewed-products">
            <div class="col-sm-4 col-md-2 card" v-for="(product, index) in viewedProducts" :key="index" >
                <div class="thumbnail">
                    <img src="http://internet-shop.tmweb.ru/storage/products/iphone_x.jpg" width="130px" alt="iPhone X 64GB">
                    <div class="caption">
                        <p><b>{{product.name}}</b></p>
                        <p>{{product.price}} грн.</p>
                        <p>
                        </p>
                    </div>
                    <div style="display: flex;">
                        <router-link :to="`/${product.category_code}/${product.code}`" >
                            <button class="btn btn-secondary btn-sm">Детальніше</button>
                        </router-link>
                        <form v-on:submit.prevent="addToBasket(product)">
                            <button id="formBtn" class="btn btn-primary btn-sm"  type="submit">В корзину</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import * as productService from "../services/product_service";
    import * as basketService from '../services/basket_service.js'
    export default {
        name: 'viewed',
        mounted() {

            this.loadProducts()
            this.loadViewedProducts()
        },
        data(){
            return{
                products: [],
                viewedProducts: [],
            }
        },
        methods: {
            loadProducts: async function(){
                try{
                    const response = await productService.loadProducts()
                    this.products = response.data
                    var array = []
                    this.products.forEach(element => {
                        let item = JSON.parse(localStorage.getItem(element.code))
                        console.log(item)
                        if(item != null){
                            array.push(item)
                        }
                    })
                    this.viewedProducts = array
                    console.log(this.viewedProducts[0].name)
                }catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
            },
            loadViewedProducts(){




                console.log(data)
                // this.products.forEach(element => console.log(element.code));
                // localStorage.getItem()
                // let store = []
                // console.log("DATA:")
                // for(let i = 0; i<=localStorage.length; i++){
                //     for(let y = 0; y<=this.products.length; y++){
                //         if(localStorage.key(i)==this.products[y].code){
                //             console.log(localStorage.key(i))
                //         }
                //     }
                //     console.log(localStorage.key(i))
                // }
                // console.log(localStorage.getItem('hohol'))/
            },
            addToBasket: async function (product_id) {
                try {
                    const response = await basketService.addToBasket(product_id)
                    // this.order = response.data
                } catch {
                    this.flashMessage.error({
                        message: 'Не вдалось додати товар. Спробуте ще раз',
                    })
                }
                this.showBasket()
            },
        }

    }

</script>

