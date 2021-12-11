<template>
  <Header />
  <div id="nav">
    <router-link to="/">Tasks</router-link> |
    <router-link to="/about">Vision</router-link>
  </div>
  <router-view />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
