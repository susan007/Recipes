import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mainPage from  '@/page/mainPage.vue'
import login from '@/page/login.vue'

Vue.use(Router)
Vue.use(mainPage)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
