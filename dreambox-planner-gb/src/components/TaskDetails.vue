<template>
<div class="card" id="card">
    <div class="card-header">
      <div class="debug">
        <div>ID: {{ localTask.id }}</div>
        <div class="card-button">
          Status: {{ localTask.status }}
        </div>
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
      <form>
        <div class="form-control">
          <input class="form-input full-width" v-model="localTask.title" />
        </div>

        <div class="form-control">
          <label class="form-label" for="date"> Due on: </label>
          <input
            class="form-input"
            id="date"
            type="date"
            v-model="localTask.deadline"
          />
        </div>

        <div class="form-control">
          <label class="form-label"> Раздел: </label>
          <select class="form-input">
            <option></option>
            <option>Спринт 1</option>
            <option>Спринт 2</option>
            <option>Спринт 3</option>
          </select>
        </div>

        <div class="">
          <label class="form-label"> Описание: </label> <br />
          <textarea class="form-input" id="taskBase" cols="60" rows="5" v-model="localTask.text">
          </textarea>
        </div>
        <div @click="clickHandler(localTask)" class="card-button">
          <font-awesome-icon :icon="['far', 'arrow-alt-circle-down']" />
          Submit
        </div>
        <div @click="closeCard" class="card-button">Close</div>
      </form>
    </div>
  </div>

  <!-- <div>
    <div class="taskCard">
      <div>
        <input v-model="localTask.title" type="text">
        <input v-model="localTask.text" type="text">
        <input v-model="localTask.deadline" type="text">
        <input v-model="localTask.status" type="text">
      </div>
      <div @click="clickHandler(localTask)">Submit</div>
    </div>
  </div> -->
</template>

<script>
import { mapMutations } from "vuex"
import { POST_URL } from '../misc/constants';

export default {
  props: {
      task: Object,
    },
  data() {
    return {
      localTask: {
        id: null,
        title: null,
        text: "",
        deadline: null,
        status: ""
      }
    }
  },
  methods: {
    ...mapMutations(["deleteTask"]),

    closeCard() {
      this.$emit('closeCard')
    },

    async sendData(formData) {
      let data = formData;
      if (!data.id) {
      if (!data.title) {
        data.title = data.text.split(" ").slice(0, 3).join(" ");
      }
      data = JSON.stringify(data);
      console.log(data);
      const fetchOptions = {
        credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: "json=" + data,
      };
      try {
        let serverMsg = await fetch(POST_URL, fetchOptions)
          .then((response) => {
            let serverRes = response.json();
            return serverRes;
          })
          .then((data) => {
            return data;
          });
          if (serverMsg) {
          //only if the server return a message, i.e. success, add to store
          this.addTask(this.task);
          this.$emit("taskAdded");
        }
      } catch (e) {
        console.log(e.message);
      }
      this.$emit('closeCard')
      } else {
      data = JSON.stringify(data);
      console.log(data);
      const fetchOptions = {
        credentials: "include",
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: "json=" + data,
      };
      try {
        let serverMsg = await fetch(POST_URL, fetchOptions)
          .then((response) => {
            let serverRes = response.json();
            return serverRes;
          })
          .then((data) => {
            return data;
          });
          if (serverMsg) {
          //only if the server return a message, i.e. success, add to store
          this.addTask(this.task);
          this.$emit("taskAdded");
        }
      } catch (e) {
        console.log(e.message);
      }
      this.$emit('closeCard')
      }
    },

    setStatus(status) {    
      this.localTask.status = status
      
    },

    clickHandler(payload) {
      console.log(payload)
      this.sendData(payload)
      
    },
    deleteHandler(id) {
      console.log(id);
      this.deleteTask(id);
      this.$emit("taskDeleted");
    },
  },
  computed: {
    
  },
  mounted() {
    this.localTask.id = this.task.id
    this.localTask.title = this.task.title
    this.localTask.text = this.task.text
    this.localTask.deadline = this.task.deadline
    this.localTask.status = this.task.status
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
    border: 1px solid #FFFFFF
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