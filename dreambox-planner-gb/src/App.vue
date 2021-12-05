<template>
  <CardList :tasks="tasks" />
  <button @click="clickHandler">
    {{ addTask ? "Close Add Task" : "Add Task" }}
  </button>
  <CardCreation v-if="addTask" />
</template>

<script>
import CardList from "./components/Card-List.vue";
import CardCreation from "./components/CardCreation.vue";

export default {
  name: "App",
  components: {
    CardList,
    CardCreation,
  },
  data() {
    return {
      tasks: [
        { id: 1, title: "task1", text: "task1 text", deadline: "12-12-2021" },
        { id: 2, title: "task2", text: "task2 text", deadline: "12-12-2022" },
        { id: 3, title: "task3", text: "task1 text", deadline: "12-12-2023" },
      ],
      addTask: false,
    };
  },
  methods: {
    clickHandler() {
      this.addTask = !this.addTask;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
