<template>
  <div>
    <headBar v-bind:title="title" class="head">

    </headBar>

    <mcontent v-bind:mcontent="mcontent" class="mcontent">

    </mcontent>

    <footBar class="foot">

    </footBar>
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
        title: '主标题',
        mcontent: '主内容'
      }
    }
  }
</script>

<style>

  body{
    margin: 0;
    padding: 0;
    background-color: #fbfaf7;
  }

  .head{
    position: absolute;
    top: 0;
  }

  .mcontent{
    height: 100%;
    width: 100%;
  }

  .foot{
    width: 100%;
    position: absolute;
    bottom: 0;
  }

</style>
