<template>
  <div style="text-align: left">
    <van-cell title="推陈出新" value="菜谱分类" label="精选菜谱，美味加分" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <detail-card v-for="(card, index) in cards" :key="index" :title="card.title" :detail="card.detail" :src="card.src"></detail-card>
    </van-list>
  </div>
</template>

<script>
  import {List, Cell} from 'vant'
  import detailCard from './detail-card'

  export default {
    components: {
      [List.name]: List,
      [Cell.name]: Cell,
      detailCard
    },
    data() {
      return {
        loading: false,
        finished: false,
        cards: [
          {
            src: '/static/card-fruit.jpg',
            title: '鲜货！今夏最IN的冷萃咖啡，敲好喝！',
            detail: '三顿半限时特惠！24颗装买两件立减20还加赠彩蛋呦~'
          },
          {
            src: '/static/card-meat.jpg',
            title: '特卖！减肥餐有了它们，美味增倍无负担！',
            detail: '三顿半限时特惠！24颗装买两件立减20还加赠彩蛋呦~'
          },
          {
            src: '/static/bg-panda.jpg',
            title: '创意！好吃的蛋糕和好看的表演！',
            detail: '三顿半限时特惠！24颗装买两件立减20还加赠彩蛋呦~'
          }
        ]
      }
    },
    methods: {
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          for (let i = 0; i < 3; i++) {
            this.cards.push({
              title: `清凉夏日${i}`,
              detail: `惊爆价！限时五折优惠！${i}`,
              src: '/static/card-fruit.jpg'
            });
          }
          // 加载状态结束
          this.loading = false;
          // 数据全部加载完成
          if (this.cards.length >= 10) {
            this.finished = true;
          }
        }, 500)
      }
    }
  }
</script>
