<template>
  <div>
    <head-bar v-bind:title="title" class="head"></head-bar>

    <mcontent v-bind:mcontent="mcontent" class="mcontent"></mcontent>

    <h3>{{$route.query.title}}-{{$route.query.mcontent}}</h3>

    <foot-bar class="foot"></foot-bar>
  </div>
</template>

<script>
  //导入组件
  import mcontent from '../components/mcontent.vue'
  import headBar from '../components/head-bar.vue'
  import footBar from '../components/foot-bar.vue'

  export default{
    components: {
      mcontent, headBar, footBar
    },
    data() {
      return {
        title: '页面标题',
        mcontent:this.$route.query.mcontent
      }
    }
  }
</script>

<style scoped>

  body {
    margin: 0;
    padding: 0;
    background-color: #fbfaf7;
  }

  .head {
    position: fixed;
    top: 0;
    left: 0;
  }

  .mcontent {
    height: 100%;
    width: 100%;
  }

  .foot {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>
