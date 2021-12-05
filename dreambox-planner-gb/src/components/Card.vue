<template>
  <div class="card">{{ task.id }} - {{ task.title }}</div>
</template>

<script>
export default {
  name: "card",
  props: {
    task: Object,
  },
};
</script>

<style lang="sass" scoped>
.card
  border: 1px solid black
  width: 200px
  height: 100px
</style>
