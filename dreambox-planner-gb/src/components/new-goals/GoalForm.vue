<template>
  <div class="card" id="card">
    <div class="card-header align-items-center">
      <div class="debug">
        <div>ID: {{ localGoal.id }}</div>
      </div>
    </div>
    <div class="card-body">
      <form>
        <div class="form-div">
          <input
              class="form-input full-width form-control"
              name="title"
              v-model="localGoal.title"
          />
        </div>

        <div class="form-div">
          <label class="form-label col-sm-2" for="date"> Due on: </label>
          <input
              class="form-input col-sm-4"
              id="date"
              type="date"
              name="deadline"
              v-model="localGoal.deadline"
          />
        </div>

        <div class="form-div">
          <label class="form-label col-sm-2"> Category: </label>
          <select class="form-input col-sm-4" name="category" v-model="localGoal.category_id">
<!--            <option :value="category_id">{{ category_id }}</option>-->
            <option v-for="category in getCategories" :key="category.id" :value="category.id" >{{ category.name }}</option>
          </select>
        </div>

        <div class="form-div">
          <label class="form-label"> Description: </label> <br />
          <textarea
              class="form-input"
              id="taskBase"
              cols="60"
              rows="5"
              name="text"
              v-model="localGoal.text"
          >
          </textarea>
        </div>
        <div class="card-bottom_buttons">

          <div @click="submitHandler" class="btn btn-primary btn-sm">
            <font-awesome-icon :icon="['far', 'arrow-alt-circle-down']" />
            <i class="fas fa-paper-plane"></i>
            Submit
          </div>

          <div @click="closeCard" class="btn btn-secondary btn-sm">
            <i class="fas fa-times"></i>
            Close
          </div>

        </div>
      </form>
    </div>
    <div class="card-footer footer" v-if="!newGoal">
      <div class="footer-title">Tasks:</div>
      <Task v-for="task in tasks" :key="task.id" :task="task"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Task from "@/components/new-goals/Task";

export default {
  name: 'GoalForm',
  components: {Task},
  props: {
    goal_id: Number,
    category_id: Number
  },
  data() {
    return {
      newGoal: false,
      localGoal: {
        id: null,
        title: null,
        text: "",
        deadline: null,
        category_id: null
      },
      tasks: []
    }
  },
  methods: {
    ...mapActions(["addGoalToVuex", "updateVuexGoal"]),
    closeCard() {
      this.$emit('closeCard')
    },
    submitHandler() {
      if (!this.localGoal.id) {
        this.addGoalToVuex(this.localGoal)
      } else {
        this.updateVuexGoal(this.localGoal)
      }
      this.closeCard()
    }
  },
  computed: {
    ...mapGetters(["getCategories", "getGoals", "getTasksWithGoals"])
  },
  mounted() {
    this.newGoal = !this.goal_id
    if (this.newGoal) {
      this.localGoal.category_id = this.category_id
    } else {
      this.localGoal = this.getGoals.find(goal => goal.id === this.goal_id)
      this.tasks = this.getTasksWithGoals.filter((task) => {
        return task.goal_id === this.goal_id
      })
    }

  }
}
</script>

<style lang="sass" scoped>
.debug
  color: lightgray
  font-size: x-small
.card
  flex-basis: 1000px
  background: #FFFFFF
  border: 1px solid #E5E5E5
  text-align: start
  margin-top: 60px
  position: absolute
  top: 20%
  left: 20%

  &-header
    padding: 5px 25px
    display: flex
    justify-content: space-between
    border-bottom: 1px solid #E5E5E5

  &-body
    display: flex
    flex-direction: column
    padding: 11px 25px

  &-button
    background: #FFFFFF
    border: 1px solid #E5E5E5
    border-radius: 4px
    padding: 4px 7px

    &:hover
      box-shadow: 0 0 5px #E5E5E5
  &-bottom_buttons
    display: flex
    justify-content: space-between

.icon
  &-delete
    color: red

  &-close
    font-weight: 900
    font-size: 16px
    line-height: 18px
    color: #B3B3B3
    margin-left: 16px

    &:hover
      color: black

.form
  width: 100%

  &-div
    display: flex
    margin-bottom: 18px
    align-items: center

  &-label
    flex-basis: 200px
    text-align: start
  // padding-left: 18px

  &-input
    background: #FFFFFF
    border: 1px solid #E5E5E5
    border-radius: 5px
    padding: 6px 16px
    font-weight: normal
    font-size: 16px
    line-height: 18px
    color: #000000

    &:focus
      border: 1px solid #B3B3B3

.full-width
  width: 100%

.column
  flex-direction: column

.footer
  background: white

  &-title
    font-size: 14px
    font-weight: bold
</style>
