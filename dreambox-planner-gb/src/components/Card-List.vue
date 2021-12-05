<template>
  <div v-for="task in tasks" :key="task.id">
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
  // props: {
  //   tasks: Array,
  // },
  data() {
    return {
      tasks: [
        { title: "task1", id: 1, text: "text1", deadline: '10-12-2021' },
        { title: "task2", id: 2, text: "text2", deadline: '11-12-2021' },
        { title: "task2", id: 3, text: "text3", deadline: '12-12-2021' },
      ],
    };
  },
};
</script>

<style></style>
