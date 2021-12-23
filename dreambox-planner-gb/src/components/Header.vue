<template>
  <header class="header">
    <img src="@/assets/logo.svg" alt="logo" />
    <div class="search-form">
      <form>
        <input class="search-input" placeholder="search tasks" />
      </form>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: space-between
  padding: 14px 25px
.search
  &-input
    width: 196px
    background: #FFFFFF
    border: 1px solid #B3B3B3
    box-sizing: border-box
    border-radius: 16px
    padding: 10px 15px
    font-size: 12px
    line-height: 14px
</style>
