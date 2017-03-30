import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/a/:id',
        components: {
            default: require('./components/PageA.vue'),
            sidebar: require('./components/Sidebar.vue')
        },
        name: 'post'
    }, {
        path: '/b',
        component: require('./components/PageB.vue'),
        name: 'b',
        children: [{
                path: '/b.1',
                component: require('./components/PageB.1.vue'),
                name: 'b.1'
            }, {
                path: '/b2',
                component: require('./components/PageB.2.vue'),
                name: 'b.2'
            }

        ]
    }, {
        path: '/c',
        component: require('./components/PageC.vue'),
        name: 'c'
    }, {
        path: '/',
        component: require('./components/PageD.vue')
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