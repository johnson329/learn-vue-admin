import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index'
import Layout from '@/views/Layout/index'
import Home from '@/views/home/index'
Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    name: 'login',
    path: '/login',
    component: Login

  },
  // 嵌套路由 组件嵌套
  // 命名路由有默认子路由 父路由可以不用名字
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        // path为空 作为默认的子路由 也就是router-view的出口
        path: '',
        home: 'home',
        component: Home

      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
