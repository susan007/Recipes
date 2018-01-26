<template>
  <div id="foot">
    <ul>
      <li>
        <router-link :to="{path:'/mainPage',query:{title:'首页',mcontent:'首页展示'}}">首页</router-link>
      </li>
      <li>
        <router-link :to="{path:'/mainPage',query:{title:'发现',mcontent:'发现主页'}}">发现</router-link>
      </li>
      <li>
        <router-link :to="{path:'/mainPage',query:{title:'我的',mcontent:'我的主页'}}">我的</router-link>
      </li>
      <li>
        <router-link to="/person/洪典典/123456">设置</router-link>
      </li>
      <div style="clear: both"></div>
    </ul>
  </div>
</template>

<script>
  export default{}
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

  a {
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
