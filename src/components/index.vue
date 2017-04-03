<template>
  <div>
      <h1 class="title">飞来笔墨</h1>
      <img src="./../assets/logo.png" alt="">
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      current:1,
      total:2
    }
  },
  methods:{
    changePage:function(page){
      this.current = page;
      //分页操作这里
    }
  }
}
</script>

<style lang="scss">
    @import "./../assets/iconfont/iconfont.css";
    @import "./../assets/css/main.scss";
    
</style>