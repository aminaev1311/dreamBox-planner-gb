<template>
  <form class="task" @submit="submitHandler">
    <input class="title" type="text" v-model="task.title"/>
    <input class="deadline" type="date" v-model="task.dealine">
    <input class="text" type="text" v-model="task.text"/>
    <div class="category">
      <div class="category-color" :style="{ background: category.color }"></div>
      <div>{{ category.name }}</div>
    </div>
    <button>Submit</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Task",
  props: {
    category: Object,
    goal: Object,
  },
  data() {
    return {
      task: {},
    }
  },
  methods: {
    ...mapActions(["addVuexData"]),
    submitHandler(e) {
      e.preventDefault();
      this.task.goal_id = this.goal.id
      console.log(this.task);
      this.addVuexData(this.task);
      this.task = {};
    }
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
  flex: 2
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

.text
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
