<template>
    <div class="header">
        <nav class="header__nav">
            <ul class="header__nav-menu">
                <li>
                    <router-link to="/">Головна</router-link>
                </li>
                <li>
                    <router-link to="/categories">Категорії</router-link>
                </li>
                <li>
                    <router-link to="/products">Товари</router-link>
                </li>
                <li style="color: white;">
                    <div v-on:click="showBasket">Корзина</div>
                </li>
            </ul>
        </nav>
        <b-modal ref="Basket" hide-footer title="Корзина покупок" id="Basket">
            <Basket></Basket>
        </b-modal>
    </div>
</template>

<script>

import Basket from '../components/Basket.vue';

export default{
    name: 'header',
    components:{
      Basket
    },
    methods:{
        showBasket(){
            this.$refs.Basket.show()
        },
    },

}

</script>
