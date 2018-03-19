import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/count.vue'
import mainPage from  '@/page/mainPage.vue'
import login from '@/page/login.vue'
import Error from '@/page/Error.vue'
import person from '@/page/personal.vue'//hello的子页面
import setting from '@/page/setting.vue'

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
      path: '/mainPage',
      name: 'mainPage',
      component: mainPage,
      alias: '/pageMain', //链接别名 用path 或者用alias都可以
      beforeEnter: (to, from, next) => {
        console.log('进入mainPage模板')
        console.log(to)
        console.log(from)
        next()  //支持跳转  感觉像goto或者汇编里面的jump
      }
    }, {
      path: '/count',
      name: 'Count',
      component: Count
    },
    {
      path: '/person/:name/:pwd',//链接传参
      component: person,
      name: 'person',
    }, {
      path: '/goHome',
      redirect: '/',//重定向
    }, {
      path: '*',  //配置404页面
      component: Error
    }, {
      path: '/setting',
      name: 'setting',
      component:setting
    }
  ]
})




