<template>
  <div class="viewsList">
    <CardListVision v-for="goal in goals" :key="goal" :goal="goal"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CardListVision from "../components/CardListVision.vue"

export default {
  name: "Test",
  components: { CardListVision },
  data() {
    return {
      goals: []
    }
  },
  methods: {
    ...mapActions(["fetchGoals"]),
  },
  computed: {
    ...mapGetters(["getGoals"]),
  },
  beforeMount() {
    this.fetchGoals()
  },
  mounted() {
    
    this.goals = this.getGoals
  }
  

};
</script>

<style lang="sass" scoped>
  .viewsList
    display: flex
</style>
