<template>
  <div class="dashboard-container">
    <div class="dashboard">
      <div class="section">
        <div class="section-header">
          <p class="section-title">Daily Plan</p>
          <a class="section-plus">+</a>
        </div>
        <div class="section-body">
          <!-- <div class="task" v-for="task in getTasks" :key="task.id">
            <div class="task-header">
              <a class="task-check">
                <font-awesome-icon :icon="['far', 'check-circle']" />
              </a>
              <a class="task-title" v-on:click="openCard(task.id)">
                {{ task.title }}
              </a>
            </div>

            <p class="task-date">
              {{ task.deadline }}
            </p>
          </div> -->
          <DashboardCard v-for="task in getTasks" :key="task.id" :task="task" />
        </div>
      </div>
    </div>
    <CardView :task="taskForView" id="cardView" />
  </div>
</template>

<script>
import DashboardCard from "@/components/DashboardCard";
import CardView from "@/components/CardView";
import { mapGetters } from "vuex";
export default {
  name: "Dashboard",
  components: { CardView, DashboardCard },
  data() {
    return {
      taskForView: {},
    };
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
  methods: {
    openCard(id) {
      this.taskForView = this.getTasks.find((task) => {
        return task.id === id;
      });
      const cardView = document.getElementById("cardView");
      cardView.style.display = "block";
    },
  },
};
</script>

<style lang="sass" scoped>
.dashboard
  display: flex
  width: 100%

  &-container
    display: flex
    height: calc(100vh - 200px)

.section
  width: 200px
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

//     &:hover
//       text-decoration: underline

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
