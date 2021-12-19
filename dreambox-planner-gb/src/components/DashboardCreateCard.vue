<template>
  <form class="task">
    <div class="task-header">
      <input
        type="text"
        class="task-title"
        placeholder="do something great!"
        v-model="title"
        @keyup="formHandler"
      />
    </div>
    <input type="date" class="task-date" />
  </form>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
    },
  },
  name: "DashboardCreateCard",
  components: {},
  data() {
    return {
      title: "",
    };
  },
  computed: {},
  methods: {
    formHandler(e) {
      e.preventDefault();
      if (e.key === "Enter") {
        console.log("enter pressed", this.title);
      }
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
