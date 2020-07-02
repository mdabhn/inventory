import Vue from 'vue'
import VueRouter from 'vue-router'

import '../assets/tailwind.css'

// import Home from '../components/Home'
import Inventory from '../components/Inventory'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/',
    name: 'Inventory',
    component: Inventory,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
