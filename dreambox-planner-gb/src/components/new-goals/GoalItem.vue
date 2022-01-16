<template>
  <div class="goal">
    <p>{{ goal.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'GoalItem',
  props: {
    // initialState: Boolean,
    goal: Object,
    // viewMode: String, // initial, active, empty,
    // category: Object
  },
  data() {
    return {
      showPlus: true,
      showInput: false
    }
  },
  methods: {
    inputTitle() {
     this.showPlus = false
     this.showInput = true
    }
  }
}
</script>

<style lang="sass" scoped>
.goal
  //min-height: calc((100% / 10) - 8px )
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
  &:hover
    text-decoration: underline
</style>
