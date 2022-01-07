<template>
  <div class="task">
    <a href="#" class="link">{{ task.title }}</a>
    <div>{{ task.deadline }}</div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  }
}
</script>

<style lang="sass" scoped>
.task
  width: 100%
  display: flex
  justify-content: space-between
  margin-top: 6px

.link
  text-decoration: none
  font-weight: normal
  font-size: 14px
  color: #000000

  &:hover
    text-decoration: underline
</style>
