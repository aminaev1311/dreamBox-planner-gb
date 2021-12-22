<template>
  <div class="card" id="card">
    <div class="card-header">
      <div class="debug">
        <div>ID: {{ localTask.id }}</div>
        <div class="card-button">Status: {{ localTask.status }}</div>
      </div>
      <button class="card-button" @click="setStatus('done')">
        <font-awesome-icon :icon="['far', 'check-circle']" />
        Mark as done
      </button>
      <button class="card-button" @click="setStatus('canceled')">
        <font-awesome-icon :icon="['far', 'times-circle']" />
        Cancel task
      </button>
      <div>
        <button class="card-button" @click="deleteHandler(localTask.id)">
          <font-awesome-icon :icon="['far', 'trash-alt']" class="icon-delete" />
          Delete
        </button>
        <a>
          <font-awesome-icon :icon="['fas', 'share']" class="icon-close" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <form ref="taskForm">
        <div class="form-control">
          <input
            class="form-input full-width"
            name="title"
            v-model="localTask.title"
          />
        </div>

        <div class="form-control">
          <label class="form-label" for="date"> Due on: </label>
          <input
            class="form-input"
            id="date"
            type="date"
            name="deadline"
            v-model="localTask.deadline"
          />
        </div>

        <div class="form-control">
          <label class="form-label"> Category: </label>
          <select class="form-input" name="category">
            <option></option>
            <option>Career</option>
            <option>Health</option>
            <option>Sports</option>
          </select>
        </div>

        <div class="">
          <label class="form-label"> Description: </label> <br />
          <textarea
            class="form-input"
            id="taskBase"
            cols="60"
            rows="5"
            name="text"
            v-model="localTask.text"
          >
          </textarea>
        </div>
        <div class="card-bottom_buttons">
          <div @click="submitHandler" class="card-button">
            <font-awesome-icon :icon="['far', 'arrow-alt-circle-down']" />
            Submit
          </div>
          <div @click="closeCard" class="card-button">Close</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    task: Object,
    id: String,
  },
  data() {
    return {
      localTask: {
        id: null,
        title: null,
        text: "",
        deadline: null,
        status: "",
      },
    };
  },
  methods: {
    ...mapActions(["deleteData", "updateData", "addData"]),

    closeCard() {
      this.$emit("closeCard");
    },

    updateTask() {
      console.log(this.$refs.taskForm);
      this.updateData(this.localTask);
    },

    submitHandler() {
      console.log("localtask", this.localTask);
      if (!this.localTask.id) {
        //if the tasks is new, the id is null. And addData is called to add task.
        this.addData(this.localTask);
      } else {
        //if the task exists, update task is being called to update the task
        this.updateTask();
      }
      this.closeCard();
    },

    setStatus(status) {
      this.localTask.status = status;
    },

    deleteHandler(id) {
      console.log(id);
      this.deleteData(id);
      this.closeCard();
    },
  },
  computed: {},
  mounted() {
    this.localTask = this.task;
  },
  updated() {
    this.localTask = this.task;
  },
};
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

  &-control
    display: flex
    margin-bottom: 18px
    align-items: center

  &-label
    flex-basis: 200px
    text-align: start
    padding-left: 18px

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
</style>
