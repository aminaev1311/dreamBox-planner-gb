<template>
  <div class="section">
    <div class="section-header">
      <div class="section-title">{{ category.name }}</div>
      <button class="btn" >
        <i class="fas fa-plus-circle"></i>
      </button>
    </div>
    <div class="section-body" :style="{background: category.color}">
      <GoalItem v-for="i in category.num" :key="i" :view-mode="'initial'"/>
      <a href="#" v-for="goal in getGoalsInCategory()" :key="goal.id">
        <GoalItem :view-mode="'active'"
                  :goal="goal"
                  @click="showCard(goal.id)"
        />
      </a>

      <a href="#" v-for="i in getEmptyNum()" :key="i" @click="showCard(null)">
        <GoalItem :view-mode="'empty'" />
      </a>

    </div>
    <div v-if="cardIsShown">
      <GoalForm :category_id="category.id" :goal_id="currentGoal"
                @closeCard="closeCard"
      />
    </div>
  </div>
<!--  <div class="dashboard-container">-->
<!--    <div class="dashboard">-->
<!--      <div class="section">-->
<!--        <div class="section-header">-->
<!--          <div class="section-title">{{ category.name }}</div>-->
<!--          <button class="btn" @click="createTask(category.id)">-->
<!--            <i class="fas fa-plus-circle"></i>-->
<!--          </button>-->
<!--        </div>-->
<!--        <div class="section-body">-->
<!--&lt;!&ndash;          <CardForList&ndash;&gt;-->
<!--&lt;!&ndash;            v-for="task in currentTaskList"&ndash;&gt;-->
<!--&lt;!&ndash;            :key="task"&ndash;&gt;-->
<!--&lt;!&ndash;            :task="task"&ndash;&gt;-->
<!--&lt;!&ndash;            @click="showCard(task.id)"&ndash;&gt;-->
<!--&lt;!&ndash;          />&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--&lt;!&ndash;    <div v-if="cardIsShown">&ndash;&gt;-->
<!--&lt;!&ndash;      <VisionTaskDetails&ndash;&gt;-->
<!--&lt;!&ndash;        @closeCard="closeCard"&ndash;&gt;-->
<!--&lt;!&ndash;        @createTask="createTask"&ndash;&gt;-->
<!--&lt;!&ndash;        :id="currentTask.id"&ndash;&gt;-->
<!--&lt;!&ndash;        :task="currentTask"&ndash;&gt;-->
<!--&lt;!&ndash;      />&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--  </div>-->
</template>

<script>
import { mapGetters } from "vuex";
import GoalItem from "@/components/new-goals/GoalItem";
import GoalForm from "@/components/new-goals/GoalForm";
// import VisionTaskDetails from "../VisionTaskDetails.vue";
// import CardForList from "../CardForList.vue";


export default {
  name: "CategoryBlock",
  components: {GoalForm, GoalItem},
  // components: { CardForList, VisionTaskDetails },
  props: {
    category: Object,
    goals: []
  },
  data() {
    return {
      // newTask: {
      //   id: null,
      //   goal: "",
      //   title: null,
      //   text: "",
      //   deadline: null,
      //   status: "active",
      // },
      cardIsShown: false,
      currentGoal: null,
    };
  },
  computed: {
    ...mapGetters(["getGoals"]),
    // currentTaskList() {
    //   let thisGoalTasks = this.getTasksWithGoals.filter(task => {
    //    return task.goal == this.goal.title
    //   })
    //   return thisGoalTasks
    // },
  },
  methods: {
    getGoalsInCategory() {
      return this.getGoals.filter(goal => {
        return goal.category_id === this.category.id
      })
    },
    getEmptyNum() {
      const active = this.getGoalsInCategory().length
      return 10 - this.category.num - active
    },
    // ...mapActions(["fetchTasksWithGoals"]),
  //   showCard(id) {
  //     this.currentTask = this.getTasksWithGoals.find((task) => task.id == id);
  //     this.cardIsShown = true;
  //   },
  //   closeCard() {
  //     this.cardIsShown = false;
  //   },
    showCard(goal_id) {
      this.currentGoal = goal_id
      this.cardIsShown = true
    },
    closeCard() {
      this.cardIsShown = false
    }
  //   createUdemiTask(payload) {
  //     this.currentTask = payload;
  //     console.log(this.currentTask);
  //     this.cardIsShown = true;
  //   },
  },
  mounted() {
    // this.fetchTasksWithGoals()
  }
};
</script>

<style lang="sass" scoped>
.category
  flex: 1
  max-width: 100px
  margin: 0 16px



.dashboard
  display: flex

  &-container
    display: flex
    height: calc(100vh - 200px)
    max-width: 1200px

.section
  width: 100px
  margin: 0 16px

  &-header
    display: flex
    justify-content: space-between
    font-weight: bold
    font-size: 12px
    line-height: 14px
    color: #000000
    margin-top: 10px
    margin-bottom: 5px
    align-items: center

  &-plus
    font-weight: normal
    font-size: 18px
    line-height: 21px

    &:hover
      font-weight: bold

  &-body
    background-color: #E5E5E5
    border-radius: 4px
    height: calc(100% - 21px)
    padding: 6px
    display: flex
    flex-direction: column-reverse

i.fa-plus-circle
  color: #b3b3b3
// .task
//   margin-bottom: 10px
//   background-color: white
//   border-radius: 4px
//   padding: 4px

//   &-header
//     display: flex

//   &-title
//     font-style: normal
//     font-weight: normal
//     font-size: 12px
//     line-height: 14px
//     color: #000000
//     text-align: start
//     margin-bottom: 10px

//

//   &-check
//     font-size: 16px
//     line-height: 18px
//     color: #B3B3B3
//     margin-right: 6px

//     &:hover
//       color: black

//   &-date
//     text-align: end
//     font-size: 10px
//     line-height: 12px
//     color: #B3B3B3
</style>
