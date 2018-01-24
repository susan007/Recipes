import Vue from 'vue'
import Router from 'vue-router'
import mainPage from  '@/page/mainPage.vue'
import login from '@/page/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    }
  ]
})
