<template>
  <main>
    <div class="dashboard">
      <div class="section">
        <div class="section-header">
          <p class="section-title">
            Без раздела
          </p>
          <a class="section-plus">+</a>
        </div>
        <div class="section-body">
          <div class="task">
            <div class="task-header">
              <a class="task-check">
                <font-awesome-icon :icon="['far', 'check-circle']"  />
              </a>
              <p class="task-title">
                Написать API для добавления тасков
              </p>
            </div>

            <p class="task-date">
              01.01.2022
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style lang="sass" scoped>
.dashboard
  height: calc(100vh - 200px)
  display: flex
.section
  width: 166px
  margin: 0 16px

  &-header
    display: flex
    justify-content: space-between
    font-weight: bold
    font-size: 12px
    line-height: 14px
    color: #000000
    margin-top: 10px
    margin-bottom: 5px

  &-plus
    font-weight: normal
    font-size: 18px
    line-height: 21px

    &:hover
      font-weight: bold

  &-body
    background-color: #E5E5E5
    border-radius: 4px
    height: calc(100% - 21px)
    padding: 6px
    box-sizing: border-box

.task
  margin-bottom: 10px
  background-color: white
  border-radius: 4px
  padding: 4px

  &-header
    display: flex

  &-title
    font-style: normal
    font-weight: normal
    font-size: 12px
    line-height: 14px
    color: #000000
    text-align: start
    margin-bottom: 10px

  &-check
    font-size: 16px
    line-height: 18px
    color: #B3B3B3
    margin-right: 6px

    &:hover
      color: black

  &-date
    text-align: end
    font-size: 10px
    line-height: 12px
    color: #B3B3B3

</style>
