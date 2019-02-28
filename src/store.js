import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    isNewUser: true
  },
  mutations: {
    SET_USER_DATA (state, userData) {
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
      state.user = userData
    },
    LOGOUT () {
      localStorage.removeItem('user')
      location.reload()
    },
    IS_NEW_USER (state, isNewUser) {
      state.isNewUser = isNewUser
    }
  },
  actions: {
    register ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    login ({ commit }, credentials) {
      return axios
        .post('//localhost:3000/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
    },
    logout ({ commit }) {
      commit('LOGOUT')
    },
    isNewUser ({ commit }, isNewUser) {
      commit('IS_NEW_USER', isNewUser)
    }
  }
})
