<template>
  <div v-for="task in getTasks" :key="task.id" class="card-list">
    <Card :task="task" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getTasks"]),
  },
  created() {
    // this.fetchedTasks = this.getTaskList;
  },
};
</script>

<style lang="sass" scoped>
.card-list
  display: flex
  justify-content: center
</style>
