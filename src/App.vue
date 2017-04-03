<template>
    <div id="app">
        <div class="sidebar">
            <h5 class="title">sidebar</h5>
    
            <ul>
                <li>
                    <router-link :to="{name:'post',params:{id:123 }}" class="btn">abc</router-link>
                </li>
                <li>
                    <router-link :to="{name:'b'}" class="btn">b</router-link>
                </li>
                <li>
                    <router-link :to="{name:'c'}" class="btn">c</router-link>
                </li>
            </ul>
            <router-view name="sidebar"></router-view>
        </div>
        <div class="main">
    
            <h5>main</h5>
             <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
                <router-view></router-view>
            </transition>
    
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @import "./assets/iconfont/iconfont.css";
</style>
