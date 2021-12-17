<template>
  <div class="task" :class="{ active: isChecked }">
    <div class="task-header">
      <div
        class="task-check"
        @click="clickHandler"
        :class="{ active: isChecked }"
      >
        <font-awesome-icon :icon="['far', 'check-circle']" />
      </div>
      <a class="task-title" @click="titleClicked(task.id)">
        {{ task.title }}
      </a>
    </div>

    <p class="task-date">
      {{ task.deadline ? task.deadline : "" }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    task: {
      type: Object,
    },
  },
  name: "DashboardCard",
  components: {},
  data() {
    return {
      isChecked: false,
      taskForView: {},
    };
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
  methods: {
    clickHandler() {
      console.log(this.isChecked);
      this.isChecked = !this.isChecked;
    },
    titleClicked() {
      // this.taskForView = this.getTasks.find((task) => {
      //   return task.id === id;
      // });
      // const cardView = document.getElementById("cardView");
      // cardView.style.display = "block";
      // this.$emit("taskChosen", id);
      // this.$emit("taskChosen", id);
      this.$emit("taskChosen");
    },
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

    &:hover
      text-decoration: underline

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
