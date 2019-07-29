<template>
  <van-tabbar v-model="mActive" @change="$emit('footBarChange', mActive)" active-color="#FF500A" inactive-color="#333" class="footBar">
    <van-tabbar-item v-for="(footBar, index) in footBarItems" :key="index" :name="footBar.name" :icon="footBar.icon" :to="footBar.to">{{footBar.text}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant'
  export default{
    components: {
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem
    },
    props: {
      footBarItems: Array,
      active: String
    },
    data() {
      return {
        mActive: this.active
      }
    },
    watch: {
      return (val) {
        this.mActive = val
      }
    }
  }
</script>

<style scoped>
  .footBar {
    background-color: #f7f8fa;
  }
</style>
