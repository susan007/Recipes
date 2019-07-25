<template>
  <ul>
    <li v-for="(item, index) in items" :key="index" @click="$emit('footClick', index)">{{item}}</li>
  </ul>
</template>

<script>
  // const items =
  export default{
    data() {
      return {
        items: ['首页', '发现', '我的']
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
    background-color: #10AEFF;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  ul li {
    width: 33.3%;
    height: 3rem;
    line-height: 3rem;
    float: left;
    text-align: center;
    color: white;
  }

  li:hover {
    background-color: #108Eea;
  }

</style>
