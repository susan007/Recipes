<template>
  <div>
    <img src="../assets/logo.png"/>
    <h2>{{message}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
      data(){
          return {
            message:'我是hello页面'
          }
      }
  }
</script>

<style scoped>
  body{
    background-color: tomato;
  }
</style>
