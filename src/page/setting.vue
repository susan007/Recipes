<template>
  <div>


    <el-container>
      <el-header>饿了么element</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

    <div id="emit">
      <button @click="bus">bus 按钮</button>
    </div>

  </div>
</template>

<script>
  import bus from '../store/bus.js'
  import headBar from '../components/head-bar.vue'
  export default{
    methods: {
      bus(){
        bus.$emit('msg', '要传递的消息，你收到没有？')
      }
    }
  }

</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 800px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
