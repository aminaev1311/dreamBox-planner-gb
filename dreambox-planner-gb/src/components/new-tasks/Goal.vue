<template>
  <div class="goal">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Goal',
  props: {
    title: String
  }
}
</script>

<style lang="sass" scoped>
.goal
  width: 100%
  padding: 16px 18px
  font-style: normal
  font-weight: bold
  font-size: 14px
  color: #000000
  text-align: start
</style>
