<template>
  <div id="foot">
    <ul>
      <li><router-link to="/mainPage">首页</router-link></li>
      <li><router-link to="/mainPage">发现</router-link></li>
      <li><router-link to="/mainPage">我的</router-link></li>
      <li><router-link to="/mainPage">设置</router-link></li>
      <div style="clear: both"></div>
    </ul>

  </div>

</template>


<script>
  export default{

  }
</script>


<style scoped>
  ul {
    list-style: none;
    background-color: cornflowerblue;
    width: 100%;
  }

  ul li {
    width: 25%;
    height: 50px;
    line-height: 50px;
    float: left;
    text-align: center;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
    color: white;
  }

  li:hover {
    background-color: #91a7ff;
  }

  li:active {
    background-color: #d0d9ff;
  }

</style>
