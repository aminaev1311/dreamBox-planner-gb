<template>
  <div class="categories-container">
    <CategoryBlock v-for="category in categories" :key="category.id" :category="category"/>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import CategoryBlock from "@/components/new-goals/CategoryBlock";

export default {
  name: "NewGoals",
  components: {CategoryBlock },
  data() {
    return {
      categories: []
    }
  },
  computed: {
    ...mapGetters(["getGoals", "getCategories"]),
  },
  mounted() {
    this.categories = this.getCategories
  }


};
</script>

<style lang="sass" scoped>
.categories-container
  display: flex
  min-height: calc(100vh - 200px)
  height: 100%
  max-width: 1200px
</style>
