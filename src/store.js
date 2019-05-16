import Vue from 'vue'
import Vuex from 'vuex'

import actions from './store/actions';

import mutations from './store/mutations';

Vue.use(Vuex)

const sessionJSON = window.localStorage.getItem('session') || '{}';
const { token = null, email = null } = JSON.parse(sessionJSON);

export default new Vuex.Store({
  state: {
    data: {
      users: []
    },
    communication: {
      loading: false,
      error: null
    },
    session: {
      token,
      email
    }
  },
  mutations,
  actions
})
