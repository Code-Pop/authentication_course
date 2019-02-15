import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
    //
    axios.interceptors.response.use(
      response => response,
      error => {
        console.log(error.response)
        if (error.response.status === 401) {
          this.$router.push('/')
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  }
}).$mount('#app')
