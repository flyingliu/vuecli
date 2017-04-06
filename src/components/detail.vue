<template>
    <div class="detail">
        <div class="container">
            <div class="page-header">
                <h1 class="title">{{item.title}}</h1>
            </div>
            <div class="content">
                <div v-html="item.content"></div>
            </div>
            <div class="footer">
                copyright © flyingliu 2017
            </div>
        </div>
    </div>
</template>

<script>
    import store from "store2"
    export default {
        data() {
            return {
                list: [],
                item: {}
            }
        },
        created() {
            // this.fetchData()
        },
        beforeRouteEnter(to, from, next) {
            var id = to.params.id;
            next(vm => {
                vm.list = store.get("data");
                vm.item = vm.list[id];
            })
        },
        methods: {
            fetchData() {
                this.list = store.get("data");
                this.item = this.list[0];
            }
        }
    }
</script>

<style lang="scss">
    .detail {
        .title { padding:20px 0; border-bottom:1px solid #666; margin:20px 0;}
        .content {
            img { max-width:100%;}
        }
        .footer { padding:10px 0; margin:20px 0; border-top:1px solid #ccc; color:#ccc; font:10px/2 arial;}
    }
</style>