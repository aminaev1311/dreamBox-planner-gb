<template>
  <footer class="footerContainer">
    <h4 class="footerHeading">Make you code come true!</h4>
    <div class="footerVersion">v.1.0.0</div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.footerContainer
  display: flex
  justify-content: space-between
  align-items: center
  position: absolute
  bottom: 0
  width: 100%
  height: 40px   /* Height of the footer */
  padding: 12px 25px
.footerHeading
  text-align: center
  color: #E5E5E5
  font-size: 13px
  line-height: 15px
.footerVersion
  font-size: 13px
  line-height: 15px
  color: #E5E5E5
</style>
