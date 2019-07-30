import Vue from 'vue'
import Router from 'vue-router'
import main from '@/page/mainPage.vue'
import login from '@/page/login.vue'
import home from '@/page/home.vue'
import find from '@/page/find.vue'
import detailCardList from '@/components/detail-card-list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',//传递值？
      component: login,
      alias: '/home'
    },
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: 'home',
          component: home
        }, {
          path: 'find',
          component: find
        }, {
          path: 'detailCardList',
          component: detailCardList
        }
      ]
    }
  ]
})




