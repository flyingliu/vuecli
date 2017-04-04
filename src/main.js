import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/detail/:id',
        components: {
            default: require('./components/detail.vue'),
            sidebar: require('./components/Sidebar.vue')
        },
        name: 'post'
    }, {
        path: '/b',
        component: resolve => require(['./components/PageB.vue'], resolve),
        name: 'b',

        children: [{
            path: '/b1',
            component: require('./components/PageB.1.vue'),
            name: 'b1'
        }, {
            path: '/b2',
            component: require('./components/PageB.2.vue'),
            name: 'b2'
        }]
    }, {
        path: '/',
        component: require('./components/index.vue')
    }, {
        path: '*',
        redirect: '/'
    }]
})

new Vue({
    el: '#app',
    router: router,
    render: h => h(require('./App.vue'))
})