import Vue from 'vue'
import Router from 'vue-router'

const homeView = () => import('./views/Home.vue')

Vue.use(Router)

const routes = [
  { path: '/', name: 'home', component: homeView }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
