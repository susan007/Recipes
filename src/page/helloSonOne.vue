<template>
  <div class="content">
    <h2>{{message}}</h2>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        message:'我是hello的子页面'
      }
    }
  }
</script>

<style scoped>
  .content{
    background-color: tomato;
  }
</style>
