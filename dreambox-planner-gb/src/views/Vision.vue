<template>
  <h3>My Goals</h3>
  <h4 v-for="(goal, idx) in getGoals" :key="goal">
    {{ idx + 1 }}: {{ goal.title }}, {{ goal.text }}, {{ goal.deadline }}
  </h4>
  <button>Add Goal</button>
  <form @submit="submitHandler">
    <input type="text" name="title" id="title" v-model="title" />
    {{ this.title }}
    <input type="date" name="deadline" id="deadline" v-model="deadline" />
    {{ deadline }}
    <input type="textarea" name="text" id="text" v-model="text" />
    {{ text }}
    <button>Submit</button>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Vision",
  components: {},
  data() {
    return {
      title: "",
      text: "",
      deadline: null,
    };
  },
  computed: {
    ...mapGetters(["getGoals"]),
  },
  methods: {
    ...mapActions(["fetchGoals", "addGoal"]),
    // "addGoal"
    submitHandler(e) {
      e.preventDefault();
      const goal = {
        title: this.title,
        text: this.text,
        deadline: this.deadline,
      };
      console.log(goal);
      this.addGoal(goal);
    },
  },
  mounted() {
    this.fetchGoals();
  },
};
</script>

<style></style>
