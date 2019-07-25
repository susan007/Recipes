<template>
  <div>
    <!--search start-->
    <van-search placeholder="搜索菜谱" v-model="menu" show-action @search="onSearch">
        <van-icon slot="action" name="location-o">{{location}}</van-icon>
    </van-search>
    <!--search end-->

    <!--分类 start-->
    <van-row>
      <van-col class="col" v-for="(type, index) in types" :key="index" span="6" @click.native="$emit('typeSearch', type)">
        <img style="width: 2rem;height: 2rem" :src="imgPath[index]">
        <div>{{type}}</div>
      </van-col>
    </van-row>
    <!--分类 end-->

    <!--轮播 start-->
    <van-swipe :autoplay="3000" style="margin-left: 1rem;margin-right: 1rem;border-radius: 0.3rem">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image"/>
      </van-swipe-item>
    </van-swipe>
    <!--轮播 end-->

    <!--横向商品列表 start-->
    <van-tabs v-model="active">
      <van-tab title="品牌秒杀">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div v-for="(item, index) in list" :key="index">
            <van-card
              num="2"
              price="2.00"
              desc="太阳的气息"
              :title="item"
              thumb="data:image/jpeg;base64,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"
              style="width:48%;display: inline-block"
            />
            <van-card
              num="2"
              price="2.00"
              desc="武汉正宗热干面！"
              :title="item"
              thumb="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3_42jZuyL_zedZdjpPIAhPJ8Gsa5hS-dsKGngb9fH5S4QOnky"
              style="width:48%;display: inline-block"
            />
          </div>
        </van-list>
      </van-tab>
      <van-tab title="实惠好货">鲜货上市</van-tab>
      <van-tab title="人气好评">人气好评</van-tab>
      <van-tab title="买一送一">买一送一</van-tab>
      <van-tab title="夏日专属">夏日专属</van-tab>
      <van-tab title="猜你喜欢">猜你喜欢</van-tab>
    </van-tabs>
    <!--横向商品列表 end-->

    <!--竖向卡片列表 start-->

    <!--竖向卡片列表 end-->
  </div>
</template>

<script>
  import {Search, Icon, Row, Col, Swipe, SwipeItem, Tab, Tabs, Card, List, Cell } from 'vant'
  export default {
    components: {
      [Search.name]: Search,
      [Icon.name]: Icon,
      [Row.name]: Row,
      [Col.name]: Col,
      [Swipe.name]: Swipe,
      [SwipeItem.name]: SwipeItem,
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [Card.name]: Card,
      [List.name]: List,
      [Cell.name]: Cell
    },
    data() {
      return {
        menu: '西红柿鸡蛋',
        location: '深圳',
        types: ['烘焙', '蛋奶', '饮品', '坚果', '沙拉', '海鲜', '主食', '肉食'],
        imgPath: [
          '/static/icon-cake.png',
          '../../static/icon-egg.png',
          '/static/icon-milk.png',
          '/static/icon-nuts.png',
          '/static/icon-salad.png',
          '/static/icon-shrimp.png',
          '/static/icon-main.png',
          '/static/icon-meat.png'
        ],
        images: [
          '/static/bg-cake.jpg',
          '/static/bg-panda.jpg',
          '/static/bg-meat.jpg'
        ],
        active: 0,
        list: [],
        loading: false,
        finished: false
      }
    },
    methods:{
      onSearch() {
        console.log('search')
      },
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 3; i++) {
            this.list.push(`冰阔落${i}`);
          }
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 3) {
            this.finished = true;
          }
        }, 500);
      }
    }
  }
</script>

<style scoped>
.col {
  font-size: small;
  height: 5rem;
}
</style>
