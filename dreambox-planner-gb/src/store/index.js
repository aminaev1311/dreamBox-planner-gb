import { createStore } from 'vuex'

export default createStore({
  state: {
    taskList: {}
  },
  mutations: {
    setTaskList (state, payload) {
      state.taskList = payload
    }
  },
  getters: {
    getTaskList: state => state.taskList
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve) => {
        resolve(
          fetch("http://dreambox.1gb.ru/api/tasks.php")
        )
      })
      .then(
        (res) => res.json()
      )
      .then(res => {
        commit('setTaskList', res)
      })
    }

    // async fetchData ({ commit }) {
    //   // Code that will run only after the
    //   // entire view has been rendered
    //   await fetch("http://dreambox.1gb.ru/api/tasks.php")
    //   .then(
    //     (res) => res.json()
    //   )
    //   .then(res => {
    //         commit('setTaskList', res)
    //       })
    // }
  },
  modules: {},
});