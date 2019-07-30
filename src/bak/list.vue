<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <double-card :colSpan="colSpan" :doubleCardItems="doubleCardItems"></double-card>
  </van-list>
</template>

<script>
  import { List } from 'vant'
  import doubleCard from '@/components/double-card'
  export default {
    components: {
      [List.name]: List,
      doubleCard
    },
    data() {
      return {
        loading: false,
        finished: false,
        colSpan: 12,
        doubleCardItems: [
          {
            title: '雪花酥',
            num: 2,
            price: 2,
            desc: '风在吼，马在叫，雪花酥在咆哮！',
            path: '/static/icon-sugars.jpg'
          },
          {
            title: '意式面条',
            num: 3,
            price: 2,
            desc: '意式面条配番茄酱',
            path: '/static/icon-noodles.jpg'
          }
        ]
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
