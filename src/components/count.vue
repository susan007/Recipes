<template>
  <div>
    <!--增加一个标题栏-->
    <head-bar v-bind:title="title"></head-bar>
    <h2>{{msg}}</h2>
    <button @click="$store.commit('add',10)">加法</button>
    <button @click="$store.commit('reduce')">减法</button>
    <br/>
    <button @click="reduce">简写减法</button>
    <br/>
    <button @click="addAction">异步加法</button>
    <button @click="reduceAction">异步减法</button>

    <h3>{{$store.state.count}}--{{count}}</h3>
    <h3>{{$store.state.number}}--{{number}}</h3>
  </div>
</template>

<script>
  import store from '../store/store'
  import headBar from '../components/head-bar.vue'
  import {mapState, mapMutations, mapGetters,mapActions} from 'vuex'
  export default {
    components: {headBar},
    data(){
      return {
        msg: 'vuex 使用实例',
        title: '发现页面',
      }
    },
    store,
    methods: {
      ...mapMutations(['reduce']),//简写的方法无法传递参数
      ...mapActions(['addAction','reduceAction'])

    },
    computed: {
      ...mapGetters(['count']),//扩展运算符 这样写了之后还能加入其余方法
      ...mapState(['count', 'number']),
    }
  }
</script>
