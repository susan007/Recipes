<template>
  <van-tabs v-model="active" color="#10AEFF" @change="tabChange">
    <van-tab v-for="(tab, index) in tabs" :key="index" :title="tab">
      <van-list
        v-model="loading"
        :finished="finished"
        :finished-text="finishedText"
        @load="onLoad">
        <double-card :colSpan="colSpan" :doubleCardItems="doubleCardItems"></double-card>
      </van-list>
    </van-tab>
  </van-tabs>
</template>

<script>
  import {Tab, Tabs, List} from 'vant'
  import doubleCard from '@/components/double-card'
  export default {
    components: {
      [Tab.name]: Tab,
      [Tabs.name]: Tabs,
      [List.name]: List,
      doubleCard
    },
    data() {
      return {
        tabs: [
          '限时特惠',
          '实惠好货',
          '人气好评',
          '买一送一',
          '夏日专属',
          '猜你喜欢'
        ],
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
        ],
        finishedText: '没有更多了o(╯□╰)o',
        active: 0
      }
    },
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 3; i++) {
            this.doubleCardItems.push({
              title: `雪花酥${i}`,
              num: 2,
              price: 2,
              desc: `风在吼，马在叫，雪花酥在咆哮！${i}`,
              path: '/static/icon-sugars.jpg'
            });
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.doubleCardItems.length >= 8) {
            this.finished = true;
          }
        }, 500);
      },
      tabChange(active) {
        // 在这里面可以切换数据
        console.log(active)
      }
    }
  }
</script>
