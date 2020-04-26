import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/manager/login',
    name: 'ManagerLogin',
    component: () => import('../views/ManagerLogin.vue')
  },
  {
    path: '/manager/business',
    name: 'ManagerBusiness',
    component: () => import('../views/ManagerBusiness.vue')
  },
  {
    path: '/manager/selfreport',
    name: 'ManagerSelfReport',
    component: () => import('../views/ManagerSelfReport.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/Customer.vue')
  },
  {
    path: '/restautrants',
    name: 'Restautrants',
    component: () => import('../views/Restautrants.vue')
  },
  {
    path: '/restautrantDetail',
    name: 'RestautrantDetail',
    component: () => import('../views/RestautrantDetail.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
