<template>
  <UdemiCourses @addUdemiTask="createUdemiTask"/>
    <div v-if="cardIsShown">
      <TaskDetails
        @closeCard="closeCard"
        :id="currentTask.id"
        :task="currentTask"
      />
    </div>
</template>

<script>
import UdemiCourses from "@/components/UdemiCourses.vue";
import TaskDetails from "@/components/TaskDetails.vue";


export default {
  name: "Udemi",
  components: {
    UdemiCourses,
    TaskDetails
    
  },
  data() {
    return {
      cardIsShown: false,
      currentTask: null,
    };
  },
  methods: {
    closeCard() {
      this.cardIsShown = false;
    },
    createUdemiTask(payload) {
      this.currentTask = payload;
      console.log(this.currentTask);
      this.cardIsShown = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
