<template>
  <div>{{ task.id }} - {{ task.title }}</div>
</template>

<script>
export default {
  name: "card",
  props: {
    task: Object,
  },
};
</script>

<style></style>
