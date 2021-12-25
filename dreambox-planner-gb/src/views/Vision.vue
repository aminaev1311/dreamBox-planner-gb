<template>
  <h3>My Goals</h3>
  <h4 v-for="(goal, idx) in getGoals" :key="goal" class="card">
    {{ idx + 1 }}: {{ goal.title }}, {{ goal.text }}, {{ goal.deadline }}
  </h4>
  <button class="btn btn-secondary" @click="showGoalForm = !showGoalForm">
    +
  </button>
  <form @submit="submitHandler" class="card" v-if="showGoalForm">
    <h4 class="card-header">Create new SMART goal</h4>
    <div class="card-body">
      <div class="form-group row">
        <label for="title" class="col-sm-2 col-form-label">Goal title</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="title"
            id="title"
            class="form-control form-control-sm"
            placeholder="Your big hairy audacious goal"
            v-model="title"
          />
        </div>
        <div id="titleHelp" class="form-text">
          Goal should be Specific Measurable Achievalbe Relevant Time-bound
        </div>
      </div>
      <div class="form-group row">
        <label for="deadline" class="col-sm-2 col-form-label">Deadline</label>
        <div class="col-sm-3">
          <input
            type="date"
            class="form-control form-control-sm"
            name="deadline"
            id="deadline"
            placeholder="due date"
            v-model="deadline"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="deadline" class="col-sm-2 col-form-label"
          >Description</label
        >
        <div class="col-sm-10">
          <textarea
            class="form-control form-control-sm"
            name="text"
            id="text"
            placeholder="describe your goal"
            v-model="text"
          ></textarea>
        </div>
      </div>
      <div class="btn-submit col-sm-2">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
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
      showGoalForm: false,
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

<style lang="sass" scoped>
.card
  // padding: 16px
  max-width: 700px
  margin: auto
.form-group
  margin-bottom: 16px
.btn-submit
  margin: auto
</style>
