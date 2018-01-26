<template>
  <div>
    <router-link to="person">返回按钮</router-link>
    <h2>链接传参实例</h2>
    <div>
      <label>姓名</label>
      {{$route.params.name}}
    </div>
    <div>
      <label>密码</label>
      {{$route.params.pwd}}
    </div>

  </div>
</template>

<script>
  import headBar from '../components/head-bar.vue'
  export default{

  }

</script>

<style scoped>


</style>
