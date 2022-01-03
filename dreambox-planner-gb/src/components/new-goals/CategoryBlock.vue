<template>
  <div class="section">
    <div class="section-header">
      <div class="section-title">{{ category.name }}</div>
    </div>
    <div class="section-body" :style="{background: category.color}">
      <GoalItem v-for="i in category.num" :key="i" :view-mode="'initial'"/>
      <a href="#" v-for="goal in getGoalsInCategory()" :key="goal.id">
        <GoalItem :view-mode="'active'"
                  :goal="goal"
                  @click="showCard(goal.id)"
        />
      </a>

      <a href="#" v-for="i in getEmptyNum()" :key="i" @click="showCard(null)">
        <GoalItem :view-mode="'empty'" />
      </a>

    </div>
    <div v-if="cardIsShown">
      <GoalForm :category_id="category.id" :goal_id="currentGoal"
                @closeCard="closeCard"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoalItem from "@/components/new-goals/GoalItem";
import GoalForm from "@/components/new-goals/GoalForm";

export default {
  name: "CategoryBlock",
  components: {GoalForm, GoalItem},
  props: {
    category: Object,
    goals: []
  },
  data() {
    return {
      cardIsShown: false,
      currentGoal: null,
    };
  },
  computed: {
    ...mapGetters(["getGoals"]),
  },
  methods: {
    getGoalsInCategory() {
      return this.getGoals.filter(goal => {
        return goal.category_id === this.category.id
      })
    },
    getEmptyNum() {
      const active = this.getGoalsInCategory().length
      return 10 - this.category.num - active
    },
    showCard(goal_id) {
      this.currentGoal = goal_id
      this.cardIsShown = true
    },
    closeCard() {
      this.cardIsShown = false
    }
  },
  mounted() {
  }
};
</script>

<style lang="sass" scoped>
.category
  flex: 1
  max-width: 100px
  margin: 0 16px

.dashboard
  display: flex

  &-container
    display: flex
    height: calc(100vh - 200px)
    max-width: 1200px

.section
  width: 100px
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
    align-items: center

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
    display: flex
    flex-direction: column-reverse

</style>
