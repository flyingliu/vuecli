<template>
    <div>
        <h2 style="text-align: center">{{msg}}</h2>
        <vue-pagination :cur.sync="cur" :all.sync="all" v-on:ee="changePage"></vue-pagination>
    
    
    </div>
</template>

<script>
    import pagination from './pagebar.vue'
    export default {
        data() {
            return {
                cur: 1,
                all: 100,
                msg: ''
            }
        },
        components: {
            'vue-pagination':pagination
        },
        methods: {
            changePage: function(data) {
                this.msg = '当前页码：' + data
              
            }
        }
    }
</script>