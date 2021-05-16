import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from "../router/index";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user:""
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload
    },
    user(state, payload) {
      state.user = payload
    },
    changeName(state, payload) {
      state.user.name = payload
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const responseData = await axios.post('http://127.0.0.1:8000/api/login',
        {
          email: email,
          password:password
        })
      const userData = await axios.get('http://127.0.0.1:8000/api/user',
        {
          params: {
            email:email
          }
        })
      commit("auth", responseData.data.auth);
      commit("user", userData.data.data[0]);
      router.replace("/main");
    },
    logout({ commit }) 
    {
      axios.post('http://127.0.0.1:8000/api/logout',
        {
          auth:this.state.auth
        })
        .then((response) => {
          console.log(response);
          commit("user", response.data.auth);
          router.replace('/about')
        })
        .catch(error => {
        alert(error)
      })
    },

  },
  modules: {
  }
})
