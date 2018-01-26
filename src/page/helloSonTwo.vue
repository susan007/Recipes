<template>
  <div class="content">
    <h2>{{message}}---{{$route.params.username}}---{{$route.params.pwd}}</h2>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import footBar from '../components/foot-bar.vue'
  export default{
    components: {
      footBar
    },
    data(){
      return {
        message:'我是hello的子页面'
      }
    }
  }
</script>

<style scoped>
  .content{
    background-color: darkturquoise;
  }
</style>
