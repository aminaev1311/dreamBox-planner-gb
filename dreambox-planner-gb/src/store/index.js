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
    goals: [
      { id: 1, category_id: 1, title: "Повышение", text: "weight 1", deadline: null },
      { id: 2, category_id: 1, title: "Большая зарплата", text: "weight 1", deadline: null },
      { id: 3, category_id: 2, title: "Выплатить кредиты", text: "weight 1", deadline: null },
      { id: 4, category_id: 3, title: "Прочитать книгу", text: "weight 1", deadline: null },
      { id: 5, category_id: 3, title: "Изучить Vuex", text: "weight 1", deadline: null },
      { id: 6, category_id: 3, title: "Быстро чтение", text: "weight 1", deadline: null },
      { id: 7, category_id: 4, title: "Похудеть", text: "weight 1", deadline: null },
      { id: 8, category_id: 6, title: "заняться йогой", text: "weight 1", deadline: null },
      { id: 9, category_id: 6, title: "Медитация", text: "weight 1", deadline: null },
      { id: 10, category_id: 7, title: "Научиться гадать", text: "weight 1", deadline: null },
    ],
    tasksWithGoals: [
      {
        id: 1,
        title: "Записаться в фитнес",
        text: "weight 1",
        deadline: "10.01.2022",
        status: "active",
        goal_id: 7
      },
      {
        id: 2,
        title: "Сходить в фитнес хотя бы 3 раза за год",
        text: "weight 2",
        deadline: null,
        status: "active",
        goal_id: 7
      },
      {
        id: 3,
        title: "Зпустить свой стартап",
        text: "start-up1",
        deadline: "10.01.2022",
        status: "active",
        goal_id: 2
      },
      {
        id: 4,
        title: "Зарабоать первый миллион",
        text: "start-up2",
        deadline: null,
        status: "active",
        goal_id: 2
      }
    ],
    categories: [
      {id: 1, name: 'Career / Business', color: '#f5f5e2', num: 0},
      {id: 2, name: 'Finance', color: 'rgba(204,102,0,0.23)', num: 0},
      {id: 3, name: 'Growth', color: 'rgba(255,51,51,0.42)', num: 0},
      {id: 4, name: 'Health / Appearance', color: 'rgba(204,102,153,0.4)', num: 0},
      {id: 5, name: 'Relations / Family', color: 'rgba(153,0,255,0.42)', num: 0},
      {id: 6, name: 'Leisure', color: 'rgba(51,102,204,0.47)', num: 0},
      {id: 7, name: 'Spiritual', color: 'rgba(0,204,204,0.3)', num: 0},
      {id: 8, name: 'Sports', color: 'rgba(51,153,51,0.29)', num: 0}
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
    },
    addGoal(state, goal) {
      state.goals.push(goal)
    },
    updateGoal(state, goal) {
      const index = state.goals.findIndex((item) => item.id === goal.id)
      state.goals[index] = goal
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
        task.id = Math.random()*10000;
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
    },
    async addGoalToVuex({ commit }, goal) {
      // Здесь добавить логику работы с API

      commit('addGoal', goal)
    },
    async updateVuexGoal({ commit }, goal) {
      commit('updateGoal', goal)
    }
  },
  modules: {},
});
