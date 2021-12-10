<template>
  <CardList />
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
