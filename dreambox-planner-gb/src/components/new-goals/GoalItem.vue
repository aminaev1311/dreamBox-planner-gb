<template>
  <div class="goal" :class="{ initial: viewMode === 'initial',
                              empty: viewMode === 'empty'}"
  >
    <p v-if="goal">{{ goal.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'GoalItem',
  props: {
    initialState: Boolean,
    goal: Object,
    viewMode: String // initial, active, empty
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

.initial
  background: #f5f5e2
  border: 1px dotted black

.empty
  background: rgba(255, 255, 255, 0.25)

</style>
