<template>
  <div class="task">
    <div class="task-header">
      <div class="task-check">
        <font-awesome-icon :icon="['far', 'check-circle']" />
      </div>
      <div class="task-title">
        {{ task.title }}
      </div>
    </div>

    <p class="task-date">
      {{ task.deadline ? task.deadline : "" }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
    },
  },
  name: "CardForList",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
.active
  background-color: green
.done
  background-color: green
.task
  margin-bottom: 10px
  background-color: white
  border-radius: 4px
  padding: 4px
  transition: 0.5s
  &:hover
    border: 1px solid grey

  &-header
    display: flex

  &-title
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 14px
    color: #000000
    text-align: start
    margin-bottom: 10px

  &-check
    font-size: 16px
    line-height: 18px
    color: #B3B3B3
    margin-right: 6px

    &:hover
      color: black

  &-date
    text-align: end
    font-size: 10px
    line-height: 12px
    color: #B3B3B3
</style>
