<template>
  <nav class="nav">
    <router-link
      to="/"
      class="nav-link"
      :class="{ active: currentRouteName === 'Home' }"
      >Tasks</router-link
    >
    <router-link
      to="/about"
      class="nav-link"
      :class="{ active: currentRouteName === 'About' }"
      >Vision</router-link
    >
    <router-link
      to="/dashboard"
      class="nav-link"
      :class="{ active: currentRouteName === 'Dashboard' }"
      >Dashboard</router-link
    >
    <router-link
      to="/test"
      class="nav-link"
      :class="{ active: currentRouteName === 'Test' }"
      >Test</router-link
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
