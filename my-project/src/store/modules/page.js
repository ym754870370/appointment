import axios from 'axios'

const state = {
	article: {},
}
const mutations = {
	setArticle(state, article) {
    console.log(article);
    state.article = article;
  }
}
const actions = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
