<template>
  <div v-for="task in tasks" :key="task.id" class="card-list">
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
  props: {
    tasks: Array,
  },
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.card-list
  display: flex
  justify-content: center
</style>
