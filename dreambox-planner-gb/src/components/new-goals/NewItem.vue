<template>
  <div class="item-container">
    <a href="#"  v-if="showPlus" class="plus" @click="inputTitle" >
      <p  > + </p>
    </a>

    <input type="text" class="input" v-if="showInput" @change="submit"
           ref="input"
    >
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'NewItem',
  props: {
    category: Object
  },
  data() {
    return {
      showPlus: true,
      showInput: false,
    }
  },
  methods: {
    ...mapActions(["addGoalToVuex"]),
    inputTitle() {
      this.showPlus = false
      this.showInput = true
      this.$nextTick(() => this.$refs.input.focus())
    },
    submit(event) {
      const title = event.target.value
      const newGoal = {
        id: Math.floor(Math.random() * 1000), // Костыль, пока нет API
        text: null,
        deadline: null,
        category_id: this.category.id,
        title: title
      }
      this.addGoalToVuex(newGoal)
      this.showPlus = true
      this.showInput = false
    }
  }
}
</script>

<style lang="sass" scoped>
.item-container
  min-height: 64px
  background: #8686ff
  margin: 4px 0
  border-radius: 4px
  color: white
  font-size: 12px
  font-weight: bold
  display: flex
  align-items: center
  justify-content: center
  padding: 2px
  background: rgba(255, 255, 255, 0.25)

.plus
  font-size: 36px
  color: white
  text-decoration: none

  &:hover
    font-size: 38px

.input
  width: 100%
  border: none
  color: white
  font-weight: bold
  background: rgba(51, 102, 204, 0.96)
  padding: 20px 0

</style>
