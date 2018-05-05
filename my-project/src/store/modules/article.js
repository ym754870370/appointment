import axios from 'axios'

const state = {
	articleFoodList: [],
  focusTitle: '1',
}
const mutations = {
	setArticleFoodList(state, articleFoodList) {
    state.articleFoodList = articleFoodList;
  },
	setFocusTitle(state, focusTitle) {
    state.focusTitle = focusTitle;
  },

}
const actions = {
  getArticleFoodList(context, data) {
    axios.get('/getArticleFoodList', {
      params:  {
        data: data
      },
    })
    .then(function (response) {
      if(response.data.code == 200) {
        context.commit('setArticleFoodList',response.data.data);
      } else {
        console.log('response: ', response);
      }
    })
    .catch(function (error) {
      console.log('error: ', error);
    });
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
