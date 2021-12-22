import { createStore } from "vuex";
import {
  GET_URL,
  DELETE_URL,
  POST_URL,
  UPDATE_URL,
} from "../misc/constants.js";

export default createStore({
  state: {
    taskList: [],
  },
  mutations: {
    setTasks(state, payload) {
      state.taskList = payload;
    },
    addTask(state, { title, text, deadline, status }) {
      if (text) {
        // const id = state.taskList.length + 1;
        state.taskList.push({ title, text, deadline, status });
      }
    },
    deleteTask(state, id) {
      const index = state.taskList.findIndex((item) => item.id === id);
      const item = state.taskList.splice(index, 1);
      console.log("item deleted: ", item);
    },
    updateTask(state, task) {
      const index = state.taskList.findIndex((item) => item.id === task.id);
      state.taskList[index] = task;
      console.log("item updated: ", task);
    },
  },
  getters: {
    getTasks: (state) => state.taskList,
  },
  actions: {
    async fetchData({ commit }) {
      let fetchedTasksObject = await fetch(GET_URL).then((res) => res.json());
      let fetchedTasks = [];
      for (const key in fetchedTasksObject) {
        fetchedTasks.push(fetchedTasksObject[key]);
      }
      console.log(fetchedTasks);
      commit("setTasks", fetchedTasks);
    },
    async addData({ commit }, task) {
      try {
        console.log(task);
        if (!task.title) {
          task.title = task.text.split(" ").slice(0, 3).join(" ");
        }
        // if (!data.id) {
        let data = JSON.stringify(task);
        const fetchOptions = {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: "json=" + data,
        };
        const response = await fetch(POST_URL, fetchOptions);
        const { errors } = await response.json();
        if (errors) {
          throw new Error(errors);
        }
        commit("addTask", task);
      } catch (e) {
        console.error(e.message);
      }
    },
    async deleteData({ commit }, id) {
      const options = {
        credentials: "include",
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      };
      try {
        const response = await fetch(DELETE_URL, options);
        const { errors } = await response.json();
        if (errors) {
          throw new Error(errors);
        }
        commit("deleteTask", id);
      } catch (e) {
        console.error(e);
      }
    },
    async updateData({ commit }, task) {
      try {
        const options = {
          credentials: "include",
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(task),
        };
        const response = await fetch(UPDATE_URL, options);
        const { errors } = await response.json();
        if (errors) {
          throw new Error(errors);
        }
        commit("updateTask", task);
      } catch (e) {
        console.error(e);
      }
    },
  },
  modules: {},
});
