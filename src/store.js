import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUserData(state, userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = `Bearer ${
        userData.token
      }`;
      state.user = userData;
    },
    logout() {
      localStorage.removeItem("user");
      location.reload();
      // or
      // axios.defaults.headers.common["Authorization"] = "";
      // state.user = null;
    }
  },
  actions: {}
});
