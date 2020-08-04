<template>
    <div class="">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th><b>№</b></th>
                    <th><b>Назва</b></th>
                    <th><b>Кількість</b></th>
                    <th><b>Ціна</b></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="index">
                    <td>{{++index}}</td>
                    <td>
                        <img :src="`${$store.state.serverPath}/storage/${product.image}`" width="100px" alt="">
                        {{product.name}}
                    </td>
                    <td style=" margin-top: 50px; position: relative; display: flex; justify-content: space-around; align-items: center; height:100%">
                        <div class="">{{product.count}}</div>
                        <div style="display: flex;">
                            <form  v-on:submit.prevent="addToBasket(product.id)" method="POST">
                                <button type="submit" class="btn btn-danger">
                                    <i class="fa fa-plus"></i>
                                </button>
                            </form>
                            <form  v-on:submit.prevent="deleteFromBasket(product.id)" method="POST">
                                <button type="submit" class="btn btn-success">
                                    <i class="fa fa-minus"></i>
                                </button>
                            </form>
                        </div>

                    </td>
                    <td>{{product.price * product.count}} грн.</td>
                </tr>

            </tbody>

        </table>
        <div style="width:100%; height: 50px; display: flex; justify-content: space-between; align-items: center; padding: 5px; background-color: lightgray">
            <td > <b>Загальна ціна:</b></td>
            <td style=" margin-right: 14%; ">{{fullPrice}} грн.</td>
        </div>
        <div  style="width:100%;padding: 30px 20px 20px 20px">
            <button class="btn-primary" style="width:35%; height: 50px; margin: 0 auto; display: block">Оформити замовлення</button>
        </div>

    </div>
</template>

<script>
    import * as basketService from "../services/basket_service.js";

    export default {
        name: 'Basket',
        mounted() {
            this.loadOrder()
        },
        data(){
            return{
                products: [],
                number: 0,
                fullPrice: 0,
            }
        },
        methods: {
            loadOrder: async function(){
                try{
                    const response = await basketService.loadOrder()
                    this.products = response.data
                }catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
                this.getFullPrice()
            },
            addToBasket: async function(product_id){
                try{
                    const response = await basketService.addToBasket(product_id)
                    this.products = response.data
                }catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
                this.getFullPrice()
            },
            deleteFromBasket: async function(product_id){
                try{
                    const response = await basketService.deleteFromBasket(product_id)
                    this.products = response.data
                }catch {
                    this.flashMessage.error({
                        message: 'Не вдалось завантажити. обновіть сторінку',
                    })
                }
                this.getFullPrice()
            },
            getFullPrice(){
                // console.log(this.products[1].price)
                let fullPrice = 0
                this.products.forEach((element) => {
                    fullPrice += element.price * element.count
                })
                this.fullPrice = fullPrice
            }

        },
    }

</script>

