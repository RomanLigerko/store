import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('./views/Categories.vue'),
    },
    {
        path: '/products',
        name: 'products',
        component: () => import('./views/Products.vue'),
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => import('./views/Welcome.vue'),
    },
    {
        path: '/:category',
        name: 'category',
        props: true,
        component: () => import('./views/Category.vue'),
    },
    {
        path: '/:category/:product',
        name: 'category',
        props: true,
        component: () => import('./views/Product.vue'),
    },
];

const router = new Router({
    routes: routes,
    linkActiveClass: 'active',
});

export default router;
