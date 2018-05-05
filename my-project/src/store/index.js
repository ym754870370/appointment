import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import actions from './actions.js'
import mutations from './mutations.js'
import userInfo from './modules/userInfo.js'
import article from './modules/article.js'
import page from './modules/page.js'
// import todosModule from './modules/todosModule.js'

Vue.use(Vuex)

Vue.prototype.$http = axios;

const vuexStore = {
	actions,
  mutations,
	modules: {
		userInfo,
		article,
		page
	},
}

const store = new Vuex.Store(vuexStore)

export default store
