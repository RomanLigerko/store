<template>
    <main>
        <Header />

        <div id="wrapper">
            <div id="content-wrapper">
                <router-view :key="$route.fullPath"></router-view>
            </div>
        </div>

        <FlashMessage position="right bottom"></FlashMessage>
    </main>
</template>

<script>
    import Header from './components/HeaderComponent.vue';

    export default{
        components:{
            Header,
        }
    }
</script>
