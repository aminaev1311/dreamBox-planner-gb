<template>
  <div class="card">
    <h4>{{ task.title }}</h4>
    <div>{{ task.deadline }}</div>
    <div>{{ task.text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>

<style scoped>
.card {
  width: 50%;
  border: 1px solid black;
  border-radius: 16px;
  margin: auto;
  margin-bottom: 16px;
}
</style>
