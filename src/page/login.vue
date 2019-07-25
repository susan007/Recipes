<template>
  <div id="content" class="content">
    <img class="head" src="../assets/head.jpeg"/>

    <div class="minput">
      <img src="../assets/icon-user.png"/>
      <input v-model="userName" type="text" placeholder="请输入用户名"/>
    </div>

    <div class="minput">
      <img src="../assets/icon-password.png"/>
      <input v-model="userPassword" type="password" placeholder="请输入密码"/>
    </div>

    <button @click="login">登录</button>

    <span style="display: block;width: 100%;color: #aaa; position: fixed;bottom: 3rem; font-size: small">唯有美食与爱不可辜负</span>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        ok: false,
        userName:'admin',
        userPassword:'admin'
      }
    },
    methods: {
      login: function () {
        if (this.userName === 'admin' && this.userPassword === 'admin') {
          this.$router.push({path:'/mainPage'})
        }
      }
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log('准备进入路由模板')
      next();//一定要写
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log('准备离开params路由模板')
      next();
    }
  }
</script>

<style scoped>

  body {
    margin: 0;
    padding: 0;
  }

  .content {
    width: 100%;
    text-align: center;
    margin-top: 60px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .minput {
    padding-bottom: 1rem;
  }

  .minput img {
    display: inline-block;
    width: 1rem;
    height: 1rem;
  }

  .minput input{
    padding: 0.1rem 0.1rem;
    border-radius: 8px;
    border: 1px solid #707070;
    height: 2rem;
    color: #707070;
    text-align: center;
  }

  button {
    margin-top: 20px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    background-color: #10AEFF;
    border-radius: 8px;
    color: white;
    border: 1px solid #fff;
    font-size: medium;
  }

  .head {
    width: 150px;
    height: 150px;
    margin-bottom: 3rem;
    border-radius: 50%;
  }
</style>
