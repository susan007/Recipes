<template>
  <div>
    <!--search start-->
    <van-search placeholder="搜索菜谱" v-model="menu" show-action @search="onSearch">
      <van-icon slot="action" name="location-o">{{location}}</van-icon>
    </van-search>
    <!--search end-->

    <!--grid start-->
    <grid :gridItems="gridItems"></grid>
    <!--grid end-->

    <!--轮播 start-->
    <swipe :swpieItems="swpieItems"></swipe>
    <!--轮播 end-->

    <!--tab list start-->
    <tabs></tabs>
    <!--tab list end-->
  </div>
</template>

<script>
  import { Search, Icon } from 'vant'
  import grid from './grid'
  import swipe from  './swipe'
  import tabs from '@/components/tabs'
  export default {
    components: {
      [Search.name]: Search,
      [Icon.name]: Icon,
      grid,
      swipe,
      tabs
    },
    data() {
      return {
        menu: '拔丝土豆',
        location: '深圳',
        gridItems: [
          {
            src: '/static/icon-cake.png',
            text: '烘焙'
          },
          {
            src: '/static/icon-egg.png',
            text: '蛋奶'
          },
          {
            src: '/static/icon-milk.png',
            text: '茶饮'
          },
          {
            src: '/static/icon-nuts.png',
            text: '干果'
          },
          {
            src: '/static/icon-salad.png',
            text: '沙拉'
          },
          {
            src: '/static/icon-shrimp.png',
            text: '海鲜'
          },
          {
            src: '/static/icon-main.png',
            text: '主食'
          },
          {
            src: '/static/icon-meat.png',
            text: '肉类'
          }
        ],
        swpieItems: [
          '/static/bg-cake.jpg',
          '/static/bg-panda.jpg',
          '/static/bg-meat.jpg'
        ]
      }
    },
    methods: {
      onSearch() {
        // 按照分类请求菜品
        console.log(`search: ${this.menu}`)
      }
    }
  }
</script>

<style scoped>
</style>
