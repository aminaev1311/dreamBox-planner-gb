<template>
  <div class="card" id="card">
    <div class="card-header">
      <button class="card-button">
        <font-awesome-icon :icon="['far', 'check-circle']"  />
        Выполнено
      </button>
      <div>
        <button class="card-button">
          <font-awesome-icon :icon="['far', 'trash-alt']" class="icon-delete" />
          Удалить
        </button>
        <a v-on:click="closeCard">
          <font-awesome-icon :icon="['fas', 'share']" class="icon-close" />
        </a>

      </div>
    </div>
    <div class="card-body">
      <form>
        <div class="form-control">
          <input class="form-input full-width" :value="task.title">
        </div>

        <div class="form-control">
          <label class="form-label" for="date">
            Дата выполнения:
          </label>
          <input class="form-input" id="date" type="date" :value="parseDate(task.deadline)">
        </div>

        <div class="form-control">
          <label class="form-label" >
            Раздел:
          </label>
          <select class="form-input" >
            <option></option>
            <option>Спринт 1</option>
            <option>Спринт 2</option>
            <option>Спринт 3</option>
          </select>
        </div>

        <div class="">
          <label class="form-label">
            Описание:
          </label> <br />
          <textarea class="form-input" cols="60" rows="5" :value="task.text">

          </textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object
  },
  methods: {
    closeCard() {
      const card = document.getElementsByClassName('card')[0]
      card.style.display = 'none'
    },
    parseDate(badDate) {
      const date = new Date(badDate)
      return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    }
  }
}
</script>

<style lang="sass" scoped>
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
</style>
