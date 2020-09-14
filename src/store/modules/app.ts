export default {
  state: {
    appName: "这是appstore的值111111",
  },
  getters: {
    appName: (state) => state.appName,
  },
  mutations: {
    setAppName(state, data) {
      state.appName = data;
      console.log("设置值成功" + state.appName);
    },
  },
  actions: {
    changeNameApp({ commit }, data) {
      commit("setAppName", data);
    },
  },
  modules: {},
};
