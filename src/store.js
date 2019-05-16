import Vue from 'vue'
import Vuex from 'vuex'

import actions from './store/actions';

import mutations from './store/mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {},
    communication: {
      loading: false,
      error: null
    },
    session: {
      token: null,
      email: null
    }
  },
  mutations,
  actions
})
