import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/splash',
    name: 'Splash',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Splash.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import(/* webpackChunkName: "about" */ '../views/Nav.vue')
  },
  {
    path: '/sales',
    name: 'Sales',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sales.vue')
  },
  {
    path: '/advertising',
    name: 'advertising',
    component: () => import(/* webpackChunkName: "about" */ '../views/Advertising.vue')
  },
  {
    path: '/virtualshows',
    name: 'Virtualshows',
    component: () => import(/* webpackChunkName: "about" */ '../views/Virtualshows.vue')
  },
  {
    path: '/travis',
    name: 'travis',
    component: () => import(/* webpackChunkName: "about" */ '../views/Travis.vue')
  },
  {
    path: '/joji',
    name: 'joji',
    component: () => import(/* webpackChunkName: "about" */ '../views/Joji.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
