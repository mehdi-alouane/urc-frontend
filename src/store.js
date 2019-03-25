import Vue from 'vue'
import Vuex from 'vuex'
import axios from './services/axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null,
    isLoggedIn: false,
    preferredShops: [],
    nearbyShops: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isLoggedIn = true
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setPreferredShops (state, preferredShops) {
      state.preferredShops = preferredShops
    },
    removeFromPreferredShops (state, shopId) {
      state.preferredShops = state.preferredShops
        .filter(shop => shop._id !== shopId)
    },
    setNearbyShops (state, nearbyShops) {
      state.nearbyShops = nearbyShops
    },
    removeFromNearbyShops (state, shopId) {
      state.nearbyShops = state.nearbyShops
        .filter(shop => shop._id !== shopId)
    }
  },
  actions: {
    async setToken ({ commit }, { email, password }) {
      const { data } = await axios.post('/user/login', {
        email,
        password
      })
      commit('setToken', data.token)
    },
    async setUser ({ commit }) {
      const token = this.state.token
      const auth = await axios.get('/user/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      commit('setUser', auth.data)
    },
    async getPreferredShops ({ commit }, userId) {
      const { data } = await axios.get(`/shops/preferred-shops/${userId}`)
      // console.log(data)
      commit('setPreferredShops', data.preferredShops)
    },
    async removeFromPreferredShops ({ commit }, { userId, shopId }) {
      const req = await axios.post('/shops/preferred-shops', {
        userId,
        shopId
      })
      console.log(req)
      commit('removeFromPreferredShops', shopId)
    }
  },
  plugins: [createPersistedState({
    paths: ['token', 'user', 'isLoggedIn']
  })]
})
