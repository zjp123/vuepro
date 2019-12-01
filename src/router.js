import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Vip from './views/Vip.vue'
import Search from './views/Search.vue'
import Shopcart from './views/Shopcart.vue'
import NewList from './views/NewList.vue'
import TuwenDetail from './views/NewListDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Vip.vue')
    },
    {
      path: '/search',
      name: 'Search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Search.vue')
      component: Search

    },
    {
      path: '/shopcart',
      name: 'Shopcart',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Shopcart.vue')
      component: Shopcart

    },
    {
      path: '/newList',
      name: 'NewList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Shopcart.vue')
      component: NewList

    },
    {
      path: '/newList/:id',
      name: 'TuwenDetail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Shopcart.vue')
      component: TuwenDetail

    }
  ]
})
