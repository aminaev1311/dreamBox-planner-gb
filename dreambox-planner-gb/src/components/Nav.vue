<template>
  <nav class="nav">
    <router-link
      to="/"
      class="nav-link"
      :class="{ active: currentRouteName === 'Home' }"
      >Tasks</router-link
    >
    <router-link
      to="/vision"
      class="nav-link"
      :class="{ active: currentRouteName === 'Vision' }"
      >Goals</router-link
    >
    <router-link
      to="/wheel"
      class="nav-link"
      :class="{ active: currentRouteName === 'Wheel' }"
      >Wheel</router-link
    >
    <router-link
      to="/test"
      class="nav-link"
      :class="{ active: currentRouteName === 'Test' }"
      >Test</router-link
    >
    <router-link
        to="/new-goals"
        class="nav-link"
        :class="{ active: currentRouteName === 'NewGoals' }"
    >New Goals</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "Nav",
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="sass" scoped>
.nav
  padding: 13px 16px
  display: flex

  &-link
    font-style: normal
    font-weight: normal
    font-size: 14px
    line-height: 15px
    color: #B3B3B3
    margin-right: 40px
    text-decoration: none

    &:hover
      font-weight: bold

.active
  text-decoration: underline
  font-weight: bold
</style>
