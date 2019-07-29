<template>
  <van-grid :column-num="4">
    <van-grid-item
      @click="clickGrid"
      v-for="(grid, index) in gridItems"
      :key="index"
      :icon="grid.src"
      :text="grid.text"
      to="/main/find"
    />
  </van-grid>
</template>

<script>
  import { Grid, GridItem} from 'vant'
  export default {
    props: {
      gridItems: Array
    },
    components: {
      [Grid.name]: Grid,
      [GridItem.name]: GridItem
    },
    methods: {
      clickGrid(event) {
        console.log(event.target.innerText)
      }
    }
  }
</script>
