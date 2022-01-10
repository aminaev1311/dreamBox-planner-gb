<template>
  <NewTasks />
</template>

<script>
import NewTasks from "@/views/NewTasks.vue";


export default {
  name: "Home",
  components: {
    NewTasks,
    
  },
  data() {
    return {
    
    };
  },
  methods: {

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
}
</style>
