<template>
  <div class="task" >
    <a href="#" class="title">
      {{ task.title }}
    </a>
    <div class="deadline">
      {{ task.deadline }}
    </div>
    <div class="category" >
      <div class="category-color" :style="{ background: category.color }"></div>
      <div>{{ category.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
    category: Object
  }
}
</script>

<style lang="sass" scoped>
.task
  width: 100%
  padding: 8px 60px
  border-bottom: 1px solid #b3b3b3
  border-top: 1px solid #b3b3b3
  text-align: start
  display: flex
  justify-content: space-between

.title
  flex: 3
  text-decoration: none
  font-style: normal
  font-weight: normal
  font-size: 14px
  color: #000000

  &:hover
    text-decoration: underline

.deadline
  flex: 1
  border-left: 1px solid #b3b3b3
  border-right: 1px solid #b3b3b3
  text-align: center

.category
  flex: 1
  border-left: 1px solid #b3b3b3
  border-right: 1px solid #b3b3b3
  text-align: center
  display: flex
  justify-content: center

  &-color
    padding: 12px
    height: 12px
    margin-right: 8px
</style>
