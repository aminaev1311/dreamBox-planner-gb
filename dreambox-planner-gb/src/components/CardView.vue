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
          <input class="form-input full-width"
                 id="title"
                 :value="task.title"
                 @change="updateHandler"/>
        </div>

        <div class="form-control">
          <label class="form-label" for="date"> Due on: </label>
          <input
            class="form-input"
            id="date"
            type="date"
            :value="parseDate(task.deadline)"
            @change="updateHandler"
          />
        </div>

        <div class="form-control">
          <label class="form-label"> Category: </label>
          <Multiselect v-model="selectedCategory"
                       id="category"
                       :options="getCategories"
                       label="name"
                       placeholder="Select category"
                       class="form-input"
                       @input="updateHandler($event)">
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
          <textarea class="form-input" cols="60" rows="5"
                    id="text"
                    :value="task.text"
                    @change="updateHandler">
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
      selectedCategory: null
    }
  },
  computed: {
    ...mapGetters(["getCategories"])
  },
  methods: {
    ...mapMutations(["deleteTask", "updateTask"]),
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
    updateHandler(e) {
      // Строчка ниже нужна потому что гребанный Vue криво написан!!!!!!!
      // Поле категорий связано с моделью v-model, так вот получается, что событие change
      // синхронное и отрабатывает раньше, что изменяется переменная модели selectedCategory
      // как результат получаем предыдущее значение.
      // Решение - использование костыля, когда при изменении в event сохраняется правильно значение
      // https://github.com/vuejs/vue/issues/266
      const category = typeof e === 'string' ? e : this.selectedCategory

      const newTask = {
        id: this.task.id,
        title: document.getElementById('title').value,
        text: document.getElementById('text').value,
        deadline: document.getElementById('date').value,
        category_id: category
      }
      this.updateTask(newTask)
    }
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
