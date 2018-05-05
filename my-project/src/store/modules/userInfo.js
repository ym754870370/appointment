const state = {
	userName: "",
  sex: "",
  accounts: "",
  photoUrl: ""
}
const mutations = {
	setUserName(state, userName) {
    state.userName = userName;
  },
	setSex(state, sex) {
    state.sex = sex;
  },
	setAccounts(state, accounts) {
    state.accounts = accounts;
  },
	setPhotoUrl(state, photoUrl) {
    state.photoUrl = photoUrl;
  },
	setUserInfo(state, data) {
    state.userName = data.userName;
    state.accounts = data.accounts;
    state.photoUrl = data.photoUrl;
    state.sex = data.sex;
    console.log("state: ", state);
  },
}
const action = {
  getUserInfo(context) {
  }
}

export default {
	namespaced: true,
	state,
	mutations,
	action
}
