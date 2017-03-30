<template>
    <div>
    
        <h1>this is Page B</h1>
        <ul>
            <li>
                <router-link :to="{name:'b1'}">this is b1</router-link>
            </li>
            <li>
                <router-link :to="{name:'b2'}">this is b2</router-link>
            </li>
        </ul>
        <div @click="haha">{{msg}}</div>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
    
        data() {
            return {
                msg: "this is fasdfasdf "
            }
        },
    
        // beforeRouteEnter(route, redirect, next) {
        //     console.log(route, redirect, next);
        //     let confirm = window.confirm("are you enter this");
        //     if (confirm) {
        //         window.setTimeout(() => {
        //                 next(vm => {
        //                     vm.msg = "==++++++"
        //                 })
        //             }
        //         }
        //         else {
        //             redirect("/");
        //         }
        //     }, 2000),
        methods: {
            haha: function() {
                console.log("haha");
            }
        }
    }
</script>

