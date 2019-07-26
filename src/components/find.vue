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

    <!--瀑布流end-->

  </div>
</template>

<script>
  import { Card, Cell} from 'vant'
  export default {
    components: {
      [Card.name]: Card,
      [Cell.name]: Cell
    },
    data() {
      return {

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

</style>
