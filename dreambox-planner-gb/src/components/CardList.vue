<template>
  <div v-for="task in fetchedTasks" :key="task.id" class="card-list">
    <Card :task="task" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "./Card.vue";
import { GET_URL } from "../misc/constants.js";
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
    ...mapGetters(["getTaskList"]),
  },
  mounted() {
    this.$nextTick(async function () {
      let fetchedTasksObject = {};
      fetchedTasksObject = await fetch(GET_URL).then((res) => res.json());
      for (const key in fetchedTasksObject) {
        this.fetchedTasks.push(fetchedTasksObject[key]);
      }
    });
  },
};
</script>

<style lang="sass" scoped>
.card-list
  display: flex
  justify-content: center
</style>
