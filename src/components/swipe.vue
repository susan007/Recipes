<template>
  <van-swipe :autoplay="3000" style="margin-left: 1rem;margin-right: 1rem;border-radius: 0.3rem" indicator-color="#10AEFF">
    <van-swipe-item v-for="(image, index) in swpieItems" :key="index">
      <img v-lazy="image"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import {Swipe, SwipeItem} from 'vant'
  export default {
    components: {
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem
    },
    props: {
      swpieItems: Array
    }
  }
</script>

<style scoped>

</style>
