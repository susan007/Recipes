/**
 * Created by Administrator on 2018/1/25.
 * 状态仓库和数据管理器
 *
 * vue最佳搭配：axios
 */

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

//访问状态d对象
const state={
  count:6
}
//修改状态
const mutations={
  add(state){
    state.count ++;
  },
  reduce(state){
    state.count --;
  }
}
//计算过滤操作
const getters={
  count:function (state) {
    return state.count += 100
  }
}
//actions异步修改状态
const actions={
  addAction(context){
    context.commit('add')
  },
  reduceAction({commit}){
    commit('reduce');
  }
}
//模块组
const moduleA={

}


//暴露这个状态
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
