import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

const homeView = () => import('./views/Home.vue')
const loginView = () => import('./views/login.vue')
const regiserView = () => import('./views/register.vue')
const preferredShopsView = () => import('./views/preferredShops.vue')

Vue.use(Router)

const routes = [
  { path: '/', name: 'home', component: homeView, meta: { requiresAuth: true } },
  { path: '/login', name: 'login', component: loginView },
  { path: '/register', name: 'regiser', component: regiserView },
  { path: '/preferred', name: 'preferredShops', component: preferredShopsView, meta: { requiresAuth: true } }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.isLoggedIn) {
      next({ name: 'login' })
    } else {
      store.dispatch('setUser')
    }
    next()
  }
  next()
})

export default router
