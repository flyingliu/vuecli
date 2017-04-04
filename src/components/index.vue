<template>
  <div class="index">
    <div class="container">
      <div class="page-header">
        <h1 class="title">飞来笔墨</h1>
      </div>
      <div class="ilist">
        <ul>
          <li v-for="(item,index) in list" v-if="item.title">
            <router-link :to="{name:'post',params:{id:index}}">
              <h5>{{item.title}}
                <span>{{item.data}}</span>
              </h5>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
  import store from "store2"
  export default {
    data() {
      return {
        current: 1,
        total: 2,
        list: [],
        msg: "---"
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.list = store.get("data");
      }
    }
  }
</script>

<style lang="scss">
  @import "./../assets/iconfont/iconfont.css";
  a:hover {
    text-decoration: none;
  }
  .index {
    .title { font-size:40px; padding:20px 0;border-bottom:1px solid #000;margin:20px 0;}
    .ilist {
      ul {
        padding: 0;
        border: 0;
        list-style: none;
        li {
          border-bottom: 1px solid #ccc;
          padding: 20px 0;
          a {
            display: block;
            color: #000;
            h5 {
              text-left: left;
              span {
                position: absolute;
                right: 0;
                color: #ccc;
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>