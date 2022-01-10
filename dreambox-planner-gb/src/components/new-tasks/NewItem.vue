<template>
  <div class="task">
    <a href="#" class="link" @click="clickHandler" v-if="showText">
      Add task...
    </a>
    <input v-if="showInput" class="input" @change="changeHandler" ref="input"/>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'NewItem',
  props: {
    goal: Object
  },
  data() {
    return {
      showText: true,
      showInput: false
    }
  },
  methods: {
    ...mapActions(["addVuexData"]),
    clickHandler() {
      this.showText = false
      this.showInput = true
      this.$nextTick(() => this.$refs.input.focus())
    },
    changeHandler(event) {
      const title = event.target.value
      const newTask = {
        id: Math.floor(Math.random() * 100), // Костыль пока нет  API
        title: title,
        text: null,
        deadline: null,
        status: "active",
        goal_id: this.goal.id
      }
      this.addVuexData(newTask)
      this.showText = true
      this.showInput = false
    }
  }
}
</script>

<style lang="sass" scoped>
.task
  width: 100%
  padding: 8px 60px
  border-bottom: 1px solid #b3b3b3
  //border-top: 1px solid #b3b3b3
  text-align: start
  display: flex
  justify-content: space-between

.link
  text-decoration: none
  font-style: normal
  font-weight: normal
  font-size: 14px
  color: #B3B3B3

  &:hover
    text-decoration: underline

.input
  border: none
  background: none
  font-style: normal
  font-weight: normal
  font-size: 14px
  color: #000000
</style>
