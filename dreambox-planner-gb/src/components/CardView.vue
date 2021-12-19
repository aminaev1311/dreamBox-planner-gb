<template>
  <div class="card" id="card">
    <div class="card-header">
      <button class="card-button">
        <font-awesome-icon :icon="['far', 'check-circle']" />
        Done
      </button>
      <div>
        <button class="card-button" @click="deleteHandler(task.id)">
          <font-awesome-icon :icon="['far', 'trash-alt']" class="icon-delete" />
          Delete
        </button>
        <a v-on:click="closeCard">
          <font-awesome-icon :icon="['fas', 'share']" class="icon-close" />
        </a>
      </div>
    </div>
    <div class="card-body">
      <form>
        <div class="form-control">
          <input class="form-input full-width" :value="task.title" />
        </div>

        <div class="form-control">
          <label class="form-label" for="date"> Due on: </label>
          <input
            class="form-input"
            id="date"
            type="date"
            :value="parseDate(task.deadline)"
          />
        </div>

        <div class="form-control">
          <label class="form-label"> Category: </label>
          <Multiselect v-model="value"
                       :options="getCategories"
                       label="name"
                       placeholder="Select category"
                       class="form-input">
            <template v-slot:singlelabel="{ value }">
              <div class="multiselect-single-label">
                <font-awesome-icon :icon="value.icon" class="icon" /> {{ value.name }}
              </div>
            </template>

            <template v-slot:option="{ option }">
              <font-awesome-icon :icon="option.icon" class="icon" /> {{ option.name }}
            </template>
          </Multiselect>
        </div>

        <div class="">
          <label class="form-label"> Описание: </label> <br />
          <textarea class="form-input" cols="60" rows="5" :value="task.text">
          </textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import Multiselect from '@vueform/multiselect'

export default {
  props: {
    task: Object,
  },
  components: {Multiselect},
  data() {
    return {
      value: null,
      categoryList: [
        {value: '1', name: 'Career', icon: 'chart-line'},
        {value: '2', name: 'Finance', icon: 'money-bill-wave'},
        {value: '3', name: 'Growth', icon: 'brain'},
        {value: '4', name: 'Health', icon: 'heartbeat'},
        {value: '5', name: 'Relations', icon: 'user-friends'},
        {value: '6', name: 'Relax', icon: 'feather-alt'},
        {value: '7', name: 'Spiritual', icon: 'yin-yang'},
        {value: '8', name: 'Sports', icon: 'skiing'}
      ]
    }
  },
  computed: {
    ...mapGetters(["getCategories"])
  },
  methods: {
    ...mapMutations(["deleteTask"]),
    closeCard() {
      const card = document.getElementsByClassName("card")[0];
      card.style.display = "none";
    },
    parseDate(badDate) {
      const date = new Date(badDate);
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    },
    deleteHandler(id) {
      console.log(id);
      this.deleteTask(id);
      this.$emit("taskDeleted");
    },
  },
};
</script>

<style lang="sass" scoped>
@import "~@vueform/multiselect/themes/default.css"
.card
  display: none
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

.icon
  font-weight: normal
  font-size: 16px
  line-height: 18px
  color: #000000
  margin-right: 8px
</style>
