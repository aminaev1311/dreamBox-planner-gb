<template>
  <div>
    <CardList :tasks="tasks" />
  </div>
</template>

<script>
import CardList from "./components/Card-List.vue";


export default {
  name: "App",
  components: {
    CardList
  },
  data() {
    return {
      tasks: [
        { title: "task1", id: 1 },
        { title: "task2", id: 2 },
        { title: "task3", id: 3 },
      ],
    };
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
