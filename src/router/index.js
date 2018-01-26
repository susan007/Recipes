import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/count.vue'

import mainPage from  '@/page/mainPage.vue'
import login from '@/page/login.vue'
import hello from '@/page/hello.vue'
import hi1 from '@/page/helloSonOne.vue'//hello的子页面
import hi2 from '@/page/helloSonTwo.vue'//hello的子页面
import person from '@/page/personal.vue'//hello的子页面


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',//传递值？
      component: login
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage
    }, {
      path: '/count',
      name: 'Count',
      component: Count
    }, {
      path: '/hello',
      name: 'hello',
      component: hello,
      children: [
        {
          path: 'hi1',
          name: 'hello/hi1',
          component: hi1
        }, {
          path: 'hi2',
          name: 'hi2',
          component: hi2
        }]
    }, {
      path: '/person/:name/:pwd',//链接传参
      component: person,
      name: 'person',
      redirect:'/mainPage'
    }
  ]
})

