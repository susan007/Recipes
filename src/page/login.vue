<template>
  <div id="content" class="content">
    <img src="../assets/logo.png"/>
    <div class="tip">想知道有什么？</div>
    <div class="minput">
      <label>姓名</label>
      <input v-model="name" type="text" placeholder="请输入用户名"/>
    </div>

    <div class="minput">
      <label>密码</label>
      <input v-model="pwd" type="password" placeholder="请输入密码"/>
    </div>

    <button @click="isOk">
      <router-link v-if="ok" to="/mainPage">点击登录</router-link>
      <label v-else>点击登录</label>
    </button>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        ok: false
      }
    },
    methods: {
      isOk: function () {
        console.log(this.name + '*****' + this.pwd)
        if (this.name == 'admin' && this.pwd == 'admin') {
          this.ok = true
        } else {
          alert('用户名或密码错误')
          this.ok = false
        }
      }
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
  }

  a {
    text-decoration: none;
    color: white;
  }

  .tip {
    font-size: 1.5rem;
    padding-bottom: 50px;
  }

  .minput {
    padding-bottom: 10px;
  }

  button {
    margin-top: 20px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    background-color: cornflowerblue;
    border-radius: 8px;
    color: white;
  }
</style>
