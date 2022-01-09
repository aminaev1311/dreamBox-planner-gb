<template>
  <div class="tasks">
    <div v-for="goal in getGoals" :key="goal.id">
      <Goal :title="goal.title" @createTask="createTask(goal)"/>
      <NewCreateTask :category="getCategoryByGoal(goal.category_id)" :goal="goal"/>
      <div v-if="cardIsShown">
        <TaskDetails
          @closeCard="closeCard"
          :id="newTask.id"
          :task="newTask"
        />
      </div>      
      <Task v-for="task in getTasksByGoal(goal.id)"
          :key="task.id"
          :task="task"
          :category="getCategoryByGoal(goal.category_id)"
      />
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Goal from "@/components/new-tasks/Goal";
import Task from "@/components/new-tasks/Task";
import TaskDetails from "@/components/TaskDetails";
import NewCreateTask from "@/components/new-tasks/NewCreateTask"

export default {
  name: "NewTasks",
  components: {Task, Goal, TaskDetails, NewCreateTask},
  data() {
    return {
      cardIsShown: false,
      currentGoal: null,
      newTask: {
        id: null,
        title: null,
        text: "",
        deadline: null,
        status: "active",
        goal_id: null,
      },
    }
  },
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
      const result = this.getCategories.find((category) => {
        return category.id === category_id
      })
      console.log(result)
      return result
    },
    createTask(goal) {
      this.cardIsShown = true;
      this.newTask.goal_id = goal.id;
      console.log(goal);
    },
    closeCard() {
      this.cardIsShown = false;
    },


  },
}
</script>

<style lang="sass" scoped>
.tasks
  display: flex
  flex-direction: column
</style>
