import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue') //工作中一般采用这张懒加载的方式引入组件
    },
    {
      path: '/2-2',
      name: 'axios请求方式',
      component: () => import('./views/2-2.vue')
    },
    {
      path: '/2-3',
      name: 'axios并发请求',
      component: () => import('./views/2-3.vue')
    },
    {
      path: '/contactList',
      name: '联系人列表',
      component: () => import('./views/ContactList.vue')
    },
    {
      path: '/contactList2',
      name: '联系人列表2',
      component: () => import('./views/ContactList2.vue')
    }
  ]
})