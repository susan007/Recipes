<template>
  <div>
    <router-view></router-view>
    <foot-bar :footBarItems="footBarItems" :active="active" @footBarChange="footBarChange"></foot-bar>
  </div>
</template>

<script>
  //导入组件
  import picker from '../components/picker.vue'
  import footBar from '../components/foot-bar'

  export default {
    components: {
      footBar, picker
    },
    data() {
      return {
        active: 'home',
        footBarItems: [
          {
            name: 'home',
            icon: 'manager',
            text: '首页',
            to: '/main/home'
          },
          {
            name: 'find',
            icon: 'like',
            text: '发现',
            to: '/main/find'
          },
          {
            name: 'setting',
            icon: 'setting',
            text: '我的',
            to: '/main/detailCardList'
          }
        ]
      }
    },
    methods: {
      footBarChange(active) {
        console.log(active)
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
    z-index: 9;
  }

  .foot {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>
