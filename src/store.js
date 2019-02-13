import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    status: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
      state.user = userData
    },
    SET_STATUS(state, status) {
      state.status = status
    },
    LOGOUT() {
      localStorage.removeItem('user')
      location.reload()
    }
  },
  actions: {
    register({ commit }, credentials) {
      return axios
        .post('//localhost:3000/register', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
        .catch(error => {
          commit('SET_STATUS', error.response.status)
        })
    },
    login({ commit }, credentials) {
      return axios
        .post('//localhost:3000/login', credentials)
        .then(({ data }) => {
          commit('SET_USER_DATA', data)
        })
        .catch(error => {
          commit('SET_STATUS', error.response.status)
        })
    },
    logout({ commit }) {
      commit('LOGOUT')
    }
  }
})
