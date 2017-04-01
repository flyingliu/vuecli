<template>
    <div class="page-bar">
        <ul>
            <li><a v-on:click="prvePage(cur)">上一页</a></li>
            <li v-for="index in indexs" v-bind:class="{ active: cur == index }">
                <a v-on:click="btnClick(index)">{{ index < 1 ? "..." : index }}</a>
            </li>
            <li><a v-on:click="nextPage(cur)">下一页</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['cur', 'all'],
        data: function() {
            return {
                myCur: this.cur
            };
        },
        watch: {
            cur(val) {
                this.myCur = val; 
            }
        },
        computed: {
            indexs: function() {
                var left = 1
                var right = this.all
                var ar = []
                if (this.all >= 11) {
                    if (this.myCur > 5 && this.myCur < this.all - 4) {
                        left = this.myCur - 5
                        right = this.myCur + 4
                    } else {
                        if (this.myCur <= 5) {
                            left = 1
                            right = 10
                        } else {
                            right = this.all
                            left = this.all - 9
                        }
                    }
                }
                while (left <= right) {
                    ar.push(left)
                    left++
                }
                if (ar[0] > 1) {
                    ar[0] = 1;
                    ar[1] = -1;
                }
                if (ar[ar.length - 1] < this.all) {
                    ar[ar.length - 1] = this.all;
                    ar[ar.length - 2] = 0;
                }
                return ar
            }
        },
        methods: {
            // 页码点击事件
            btnClick: function(data) {
                if (data < 1) return;
                if (data != this.myCur) {
                    this.myCur = data
                    this.$emit('ee', data)
                }
    
                // this.$emit('ee', 'cc')
    
            },
            // 下一页
            nextPage: function(data) {
                if (this.myCur >= this.all) return;
                this.btnClick(this.myCur + 1);
            },
            // 上一页
            prvePage: function(data) {
                if (this.myCur <= 1) return;
                this.btnClick(this.myCur - 1);
            },

        }
    }
</script>