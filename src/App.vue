<template>
    <div id="app">
        <div class="sidebar hide">
            <h5 class="title">sidebar</h5>
            <ul>
                <li>
                    <router-link :to="{name:'post',params:{id:123 }}" class="btn">abc</router-link>
                </li>
                <li>
                    <router-link :to="{name:'b'}" class="btn">b</router-link>
                </li>

            </ul>
            <router-view name="sidebar"></router-view>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import store from "store2"
    export default {
        data() {
            return {
                msg: "this flying"
            }
        }

    }
</script>

<style lang="scss">
    @import "./assets/iconfont/iconfont.css";
    @import "./assets/css/main.scss";
</style>
