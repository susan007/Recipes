<template>
  <div id="test">
    <h2>路由初涉</h2>
    <div>
      <router-link to="/compnent1">测试组件一</router-link>
      <router-link to="/compnent2">测试组件二</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  const compnent1={template:'<div>compnent1</div>'}
  const compnent2={template:'<div>compnent2</div>'}

  const routes=[
    {
        path:'/compnent1',
      component:compnent1
    },{
      path:'/compnent2',
      component:compnent2
    }
  ]

  const router=new VueRouter({
    routes:routes
  })

  const app=new Vue({
    router
  }).$mount('#test')
</script>
