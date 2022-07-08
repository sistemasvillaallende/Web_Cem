/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/GestCementerio',
        name: 'GestCementerio/',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/GestCementerio.vue'),

    },
    {
        path: '/Landing',
        name: 'Landing/',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Landing.vue'),

    },  
     {
        path: '/',
        name: 'Login/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/Login.vue'),

    },
    {
        path: '/_Layout/',
        name: '_Layout/',
        component: () =>
            import ( /* webpackChunkName: "EditBadec" */ '../views/_Layout.vue'),

    },
    
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,

    routes
})
export default router