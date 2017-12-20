import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
// import countModule from './modules/countModule.js'
// import todosModule from './modules/todosModule.js'

Vue.use(Vuex)

const vuexStore = {
	actions,
  mutations,
	modules: {},
	strict: true
}

const store = new Vuex.Store(vuexStore)

export default store
