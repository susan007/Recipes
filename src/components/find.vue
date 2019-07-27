<template>
  <div style="text-align: left">
    <van-cell title="爱尝鲜" value="查看全部" label="全网好货，超值低价" />
    <div style="overflow-y: hidden;overflow-x: scroll;text-align: left">
      <!--单行横向列表start-->
      <ul class="scroll-h-big">
        <li>
          <img src="../../static/active-sd.jpg" style="width:10rem;height:5rem"/>
        </li>
        <li>
          <img src="../../static/active-moon.png" style="width:10rem;height:5rem"/>
        </li>
        <li>
          <img src="../../static/active-214.png" style="width:10rem;height:5rem"/>
        </li>
        <li>
          <img src="../../static/active-sd.jpg" style="width:10rem;height:5rem"/>
        </li>
        <li>
          <img src="../../static/active-moon.png" style="width:10rem;height:5rem"/>
        </li>
      </ul>
    </div>
    <!--单行横向列表end-->

    <van-cell title="市集上新" value="查看全部" label="好评新货，限时折扣" />
    <div style="overflow-y: hidden;overflow-x: scroll;text-align: left">
      <!--双行横向列表start-->
      <ul class="scroll-h-small">
        <div style="display: inline-block">
          <van-card
            price="2.00"
            desc="太阳的气息，阳光的味道"
            title="小蛋糕"
            thumb="../../static/icon-ice.jpg"
            style="width:15rem;"
          />
          <van-card
            price="2.00"
            desc="太阳的气息"
            title="小蛋糕"
            thumb="../../static/icon-sugars.jpg"
            style="width:15rem;"
          />
        </div>
        <div style="display: inline-block">
          <van-card
            price="2.00"
            desc="太阳的气息，阳光的味道"
            title="小蛋糕"
            thumb="../../static/icon-noodles.jpg"
            style="width:15rem;"
          />
          <van-card
            price="2.00"
            desc="太阳的气息"
            title="小蛋糕"
            thumb="../../static/icon-ice.jpg"
            style="width:15rem;"
          />
        </div>
        <div style="display: inline-block">
          <van-card
            price="2.00"
            desc="太阳的气息，阳光的味道"
            title="小蛋糕"
            thumb="../../static/icon-ice.jpg"
            style="width:15rem;"
          />
          <van-card
            price="2.00"
            desc="太阳的气息"
            title="小蛋糕"
            thumb="../../static/icon-ice.jpg"
            style="width:15rem;"
          />
        </div>
      </ul>
      <!--双行横向列表end-->
    </div>

    <van-cell title="爱学课堂" label="手把手教学，包看包会" />
    <!--瀑布流start-->
    <pull class="pull" :items="pullItems"></pull>
    <!--瀑布流end-->

  </div>
</template>

<script>
  import { Card, Cell} from 'vant'
  import pull from './pull.vue'
  export default {
    components: {
      [Card.name]: Card,
      [Cell.name]: Cell,
      pull
    },
    data() {
      return {
        pullItems: [
          {
            src: '/static/p-cake.jpg',
            tips: '属于你的我的光影日记'
          },
          {
            src: '/static/p-cake2.jpg',
            tips: '甜甜的味道弥漫在空气中，那是恋爱的味道~'
          },
          {
            src: '/static/p-cake4.jpg',
            tips: '低脂蛋糕，好吃不胖'
          },
          {
            src: '/static/p-cake5.jpg',
            tips: '那一抹温柔的颜色，融化在我心里，好像天上的云朵棉花糖，柔柔的暖暖的'
          },
          {
            src: '/static/p-lemon.jpg',
            tips: '夏日专属炫彩冰激凌，你不来一根吗？O(∩_∩)O'
          },
          {
            src: '/static/p-water.jpg',
            tips: '柠檬的酸甜才是夏日的清新味道'
          },
          {
            src: '/static/p-water2.png',
            tips: '这一杯自制饮料，开启元气满满的一天！！！'
          },
          {
            src: '/static/p-iceream.jpg',
            tips: '诠释了什么叫做人淡如菊，正如这杯淡雅的冰饮沉静自然'
          },
          {
            src: '/static/bg-panda.jpg',
            tips: '生日快乐'
          },
          {
            src: '/static/p-cake3.jpg',
            tips: '温柔，感受樱花的芬芳❤'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }

  .scroll-h-big, .scroll-h-small {
    margin: 0 0;
    padding: 0 0;
  }

  .scroll-h-big{
    width: 51rem;
  }

  .scroll-h-small{
    width: 46rem;
  }

  .scroll-h-big>li, .scroll-h-small>li{
    list-style: none;
    display: inline-block;
    float: left;
    padding: 0.3rem 0.1rem;
    width: 10rem;
  }

  /*.scroll-h-big>li{*/
    /*width: 10rem;*/
  /*}*/

  /*.scroll-h-small>li{*/
    /*width: 5rem;*/
  /*}*/

  img{
    border-radius: 0.2rem;
  }

  .pull{
    padding: 0 0.2rem;
  }

</style>
