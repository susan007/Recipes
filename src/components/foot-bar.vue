<template>
  <div id="foot">
    <ul>
      <li><a href="#" style="">首页</a></li>
      <li><a href="#">发现</a></li>
      <li><a href="#">我的</a></li>
      <li><a href="#">设置</a></li>
      <div style="clear: both"></div>
    </ul>

  </div>

</template>


<script>
  //导出模块的意思？
  export default{}

</script>


<style>
  ul {
    list-style: none;
    background-color: cornflowerblue;
    width: 100%;
  }

  ul li {
    width: 25%;
    float: left;
    text-align: center;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  a {
    height: 50px;
    line-height: 50px;
    color: white;
    text-decoration: none;
  }

  li:hover {
    background-color: #91a7ff;
  }

  li:active {
    background-color: #d0d9ff;
  }

</style>
