<template>
  <van-row>
    <van-col :span="colSpan" v-for="(card, index) in doubleCardItems" :key="index">
      <van-card
        :num="card.num"
        :price="card.price"
        :desc="card.desc"
        :title="card.title"
        :thumb="card.path"
        />
    </van-col>
  </van-row>
</template>

<script>
  import {Card, Row, Col} from 'vant'
  export default {
    components: {
      [Card.name]: Card,
      [Row.name]: Row,
      [Col.name]: Col
    },
    props: {
      doubleCardItems: Array,
      colSpan: Number
    }
  }
</script>

<style scoped>
</style>
