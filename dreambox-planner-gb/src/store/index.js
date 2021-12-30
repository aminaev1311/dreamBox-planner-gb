import { createStore } from "vuex";
import {
  GET_URL,
  DELETE_URL,
  POST_URL,
  UPDATE_URL,
  GOALS,
  // TASK_WITH_GOALS,
} from "../misc/constants.js";

export default createStore({
  state: {
    taskList: [],
    goals: [],
    tasksWithGoals: [
      {
        id: 1,
        title: "weight 1",
        text: "weight 1",
        deadline: null,
        status: "active",
        goal: "weight"
      },
      {
        id: 2,
        title: "weight 2",
        text: "weight 2",
        deadline: null,
        status: "active",
        goal: "weight"
      },
      {
        id: 3,
        title: "start-up1",
        text: "start-up1",
        deadline: null,
        status: "active",
        goal: "start-up"
      },
      {
        id: 4,
        title: "start-up2",
        text: "start-up2",
        deadline: null,
        status: "active",
        goal: "start-up"
      }
    ],
    categories: [
      {id: 1, name: 'Career', color: '#CCCC00', num: 1},
      {id: 2, name: 'Finance', color: '#CC6600', num: 2},
      {id: 3, name: 'Growth', color: '#FF3333', num: 3},
      {id: 4, name: 'Health', color: '#CC6699', num: 4},
      {id: 5, name: 'Relations', color: '#9900FF', num: 5},
      {id: 6, name: 'Relax', color: '#3366CC', num: 6},
      {id: 7, name: 'Spiritual', color: '#00CCCC', num: 7},
      {id: 8, name: 'Sports', color: '#339933', num: 8}
    ],
  },
  mutations: {
    setTasks(state, payload) {
      state.taskList = payload;
    },
    setGoals(state, payload) {
      state.goals = payload;
    },
    setTasksWithGoals(state, payload) {
      state.tasksWithGoals = payload;
    },
    addTask(state, {goal, title, text, deadline, status }) {
      if (text) {
        state.tasksWithGoals.push({goal, title, text, deadline, status });
      }
    },
    addGoalMutation(state, { title, text, deadline, category }) {
      if (text) {
        state.goals.push({ title, text, deadline, category });
      }
    },
    deleteTask(state, id) {
      const index = state.tasksWithGoals.findIndex((item) => item.id === id);
      const item = state.tasksWithGoals.splice(index, 1);
      console.log("item deleted: ", item);
    },
    updateTask(state, task) {
      const index = state.tasksWithGoals.findIndex((item) => item.id === task.id);
      state.tasksWithGoals[index] = task;
      console.log("item updated: ", task);
    },
    updateCategory(state, category) {
      const index = state.categories.findIndex((item) => item.id === category.id)
      state.categories[index] = category
      console.log("category updated: ", category)
    }
  },
  getters: {
    getTasks: (state) => state.taskList,
    getGoals: (state) => state.goals,
    getTasksWithGoals: (state) => state.tasksWithGoals,
    getCategories: (state) => state.categories
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
    async fetchGoals({ commit }) {
      commit("setGoals", GOALS);
    },
    // async fetchTasksWithGoals({ commit }) {
    //   commit("setTasksWithGoals", TASK_WITH_GOALS);
    // },
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
    async addVuexData({ commit }, task) {
      try {
        console.log(task);
        if (!task.title) {
          task.title = task.text.split(" ").slice(0, 3).join(" ");
        }
        // if (!data.id) {
        commit("addTask", task);
      } catch (e) {
        console.error(e.message);
      }
    },
    async addGoal({ commit }, goal) {
      try {
        if (!goal.title) {
          goal.title = goal.text.split(" ").slice(0, 3).join(" ");
        }
        commit("addGoalMutation", goal);
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
    async deleteVuexData({ commit }, id) {
      try {
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
    async updateVuexData({ commit }, task) {
      try {
        commit("updateTask", task);
      } catch (e) {
        console.error(e);
      }
    },
    async updateCategory({ commit }, category) {
      // Здесь добавить логику работы с API

      commit("updateCategory", category)
    }
  },
  modules: {},
});
