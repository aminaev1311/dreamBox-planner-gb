<template>
  <div class="goal">
    {{ title }}
    <button class="btn" @click="$emit('createTask')">
        <i class="fas fa-plus-circle"></i>
    </button>
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
