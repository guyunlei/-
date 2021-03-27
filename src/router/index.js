import Vue from 'vue'
import util from '../lib/utils'
import VueRouter from 'vue-router'
import login from "../views/login/login.vue"

Vue.use(VueRouter)

const routes = [
  {
    // 设置初始页面
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: login,
    children:[]
  },
  {
    path:'/register',
    name:'Register',
    component:()=>import('../views/login/register.vue')
  },
    {
      path:'/system',
      name:'system',
      title:'系统导航',
      type:'menu',
      component:()=>import('../views/main/main.vue'),
      children:[
        {
          path: '/home',
          name: 'Home',
          title: '首页',
          type: 'menu',
          component: () => import('../views/home/home.vue')
        },
        {
          path: '/query',
          name: 'Query',
          title: '查询',
          component: () => import('../views/query/query.vue')
        },
        {
          path: '/donation',
          name: 'Donation',
          title: '捐助',
          component: () => import('../views/donation/donation.vue')
        },
        {
          path: '/information',
          name: 'Information',
          title: '捐助',
          component: () => import('../views/information/information.vue')
        },
      ]
    }
  
]

const router = new VueRouter({
  routes,
  // mode:'history'
})

export default router
