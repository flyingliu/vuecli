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
        },
        created: () => {
            var mydata = require("./assets/data.csv");
            console.log(store);
            Papa.parse(mydata, {
                download: true,
                header: true,
                skipEmptyLines: false,
                complete: (results, file) => {
                    let version = store.get("version")
                    if (version != 3) {
                        store.set("version", 3)
                        store.set("data", results.data)
                    }
                }
            })
        }
    }
</script>

<style lang="scss">
    @import "./assets/iconfont/iconfont.css";
    @import "./assets/css/main.scss";
</style>
