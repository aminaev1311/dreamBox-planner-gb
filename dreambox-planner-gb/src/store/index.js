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
    addTask(state, { title, text, deadline, status }) {
      if (text) {
        // const id = state.taskList.length + 1;
        state.taskList.push({ title, text, deadline, status });
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
      // fetchedTasksObject = await fetch(GET_URL).then((res) => res.text());
      // console.log(fetchedTasksObject);
      // let fetchedArray = fetchedTasksObject.split("<br />");
      // let stringOfTasks = fetchedArray[fetchedArray.length - 1];
      // fetchedTasksObject = JSON.parse(stringOfTasks);
      let fetchedTasks = [];
      for (const key in fetchedTasksObject) {
        fetchedTasks.push(fetchedTasksObject[key]);
      }
      console.log(fetchedTasks);
      // let fakeTasks = {
      //   0: {
      //     id: "1",
      //     title: "Мое первое дело",
      //     text: "Описание из много букв",
      //     deadline: "2021-12-10 00:00:00",
      //     status: "",
      //   },
      //   1: {
      //     id: "2",
      //     title: "Мое второе дело",
      //     text: "Описание второго дела из много букв",
      //     deadline: "2021-12-11 12:00:00",
      //     status: "",
      //   },
      //   2: {
      //     id: "3",
      //     title: "Моя мечта",
      //     text: "Хочу совершить восхождение на Эверест!",
      //     deadline: "2022-04-11 08:00:00",
      //     status: "",
      //   },
      //   3: {
      //     id: "5",
      //     title: "Create my own start up",
      //     text: "and develop a to do app",
      //     deadline: "2021-12-21 00:00:00",
      //     status: "",
      //   },
      //   4: {
      //     id: "6",
      //     title: "Have a great and big family",
      //     text: "",
      //     deadline: "2025-12-15 00:00:00",
      //     status: "",
      //   },
      //   5: {
      //     id: "37",
      //     title: "1",
      //     text: "1",
      //     deadline: "0000-00-00 00:00:00",
      //     status: "",
      //   },
      // };
      commit("setTasks", fetchedTasks);
    },
  },
  modules: {},
});
