import { createStore } from "vuex";
import { GET_URL } from "../misc/constants.js";

export default createStore({
  state: {
    taskList: [],
  },
  mutations: {
    setTasks(state, payload) {
      state.taskList = payload;
    },
    addTask(state, { title, text, deadline }) {
      if (text) {
        // const id = state.taskList.length + 1;
        state.taskList.push({ title, text, deadline });
      }
    },
  },
  getters: {
    getTasks: (state) => state.taskList,
  },
  actions: {
    // fetchData({ commit }) {
    //   return fetch(GET_URL)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       commit("setTaskList", res);
    //     });
    // },

    async fetchData({ commit }) {
      let fetchedTasksObject = {};
      fetchedTasksObject = await fetch(GET_URL).then((res) => res.json());
      let fetchedTasks = [];
      for (const key in fetchedTasksObject) {
        fetchedTasks.push(fetchedTasksObject[key]);
      }
      commit("setTasks", fetchedTasks);
    },
  },
  modules: {},
});
