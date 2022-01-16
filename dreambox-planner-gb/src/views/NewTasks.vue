<template>
  <div class="tasks">
    <div v-for="goal in getGoals" :key="goal.id">
      <Goal :title="goal.title" />
      <Task v-for="task in getTasksByGoal(goal.id)"
            :key="task.id"
            :task="task"
            :category="getCategoryByGoal(goal.category_id)"
            @click="showCard(task.id)"
      />
      <NewItem :goal="goal"/>
    </div>
    <div v-if="cardIsShown">
      <TaskForm :task_id="taskIdForShow" @closeCard="closeCard"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Goal from "@/components/new-tasks/Goal";
import Task from "@/components/new-tasks/Task";
import NewItem from "@/components/new-tasks/NewItem";
import TaskForm from "@/components/new-tasks/TaskForm";

export default {
  name: "NewTasks",
  data() {
    return {
      cardIsShown: false,
      taskIdForShow: null
    }
  },
  components: {TaskForm, NewItem, Task, Goal},
  computed: {
    ...mapGetters(["getGoals", "getTasksWithGoals", "getCategories"])
  },
  methods: {
    getTasksByGoal(goal_id) {
      return this.getTasksWithGoals.filter((task) => {
        return task.goal_id === goal_id
      })
    },
    getCategoryByGoal(category_id) {
      return this.getCategories.filter((category) => {
        return category.id === category_id
      })
    },
    showCard(task_id) {
      this.taskIdForShow = task_id
      this.cardIsShown = true
    },
    closeCard() {
      this.cardIsShown = false
    }
  },
}
</script>

<style lang="sass" scoped>
.tasks
  display: flex
  flex-direction: column
</style>
