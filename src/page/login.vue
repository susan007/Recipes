<template>
  <div id="content" class="content">
    <img src="../assets/logo.png"/>
    <div class="tip">想知道有什么？</div>
    <div class="minput">
      <label>姓名</label>
      <input v-on:input="inputFun" type="text" placeholder="请输入用户名"/>
    </div>

    <div class="minput">
      <label>密码</label>
      <input v-on:input="inputFun" type="password" placeholder="请输入密码"/>
    </div>

    <button v-on:click="loginIn">登录</button>
  </div>
</template>

<script>
  export default{

    methods:{
        loginIn:function () {
          alert('被点击')
        },
      inputFun:function () {
        console.log('输入')
      },
    },
    watch:{

    }
  }

</script>

<style>

  body{
    margin: 0;
    padding: 0;
  }

  .content{
    width: 100%;
    text-align: center;
  }

  .tip{
    font-size: 1.5rem;
    padding-bottom: 50px;
  }

  .minput{
    padding-bottom: 10px;
  }

  button{
    margin-top: 20px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    background-color: cornflowerblue;
    border-radius: 8px;
    color: white;
  }


</style>
