<template>
  <div v-for="task in fetchedTasks" :key="task.id" class="card-list">
    <Card :task="task" />
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "card-list",
  components: {
    Card,
  },
  data() {
    return {
      fetchedTasks: [],
    };
  },
  mounted() {
    this.$nextTick(async function () {
      // Code that will run only after the
      // entire view has been rendered
      this.fetchedTasks = await fetch("http://localhost:3004/tasks").then(
        (res) => res.json()
      );
    });
  },
};
</script>

<style lang="sass" scoped>
.card-list
  display: flex
  justify-content: center
</style>
