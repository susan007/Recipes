<template>
  <div id="head" class="head">
    <span class="title-left" @click="goBack">{{leftText}}</span>
    <span class="title-mid">{{title}}</span>
    <span class="title-right">{{rightText}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      leftText: String,
      rightText: String
    },
    methods: {
      goBack: function () {
        window.history.go(-1)
      }
    }
  }
</script>

<style scoped>
  .head {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    background-color: #10AEFF;
    color: white;
  }

  .title-left {
    display: inline-block;
    float: left;
    height: 3rem;
    line-height: 3rem;
    width: 20%;
    text-align: center;
    font-size: 0.8rem;
  }

  .title-right {
    display: inline-block;
    float: right;
    height: 3rem;
    line-height: 3rem;
    width: 20%;
    text-align: center;
    font-size: 0.8rem;
  }

  .title-mid {
    display: inline-block;
    width: 60%;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
