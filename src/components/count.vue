<template>
  <div>
    <h2>本节学习vuex的简单使用</h2>

    <h3>{{$route.params.username}}---{{$route.params.pwd}}</h3>
    <h3>{{msg}}</h3>
    <h3>{{$store.state.count}}</h3>
    <h3>{{count}}</h3>

    <h2>方法提交</h2>
    <button @click="$store.commit('add')">加法</button>
    <button @click="reduce">减法</button>

    <br/>
    <button @click="addAction">**加法**</button>
    <button @click="reduceAction">**减法**</button>
  </div>

</template>

<script>
  import store from '../store/store1';
  import { mapState,mapMutations,mapGetters,mapActions } from 'vuex'

  export default{
      data(){
          return{
              msg:'Hello Vuex'
          }
      },
//    computed:{
//      count(){
//          return this.$store.state.count
//      }
//    },
    store,
//    computed:mapState({
//      count:state => state.count
//    })
    computed:{
      ...mapState(['count']),//es6的一种写法  主要是扩展方法
//      ...mapGetters(['count'])
    },
    methods:{
      ...mapMutations(['reduce']),
      ...mapActions(['addAction','reduceAction'])
    }
  }
</script>
