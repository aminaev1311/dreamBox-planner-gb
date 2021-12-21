<template>
  <Header />
  <div class="container">
    <Nav />
    <main class="main">
      <router-view />
    </main>
    <Footer />
  </div>

  <!--  <div id="nav">-->
  <!--    <router-link to="/">Tasks</router-link> |-->
  <!--    <router-link to="/about">Vision</router-link>-->
  <!--  </div>-->
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav";

export default {
  name: "App",
  components: {
    Nav,
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
}

.container {
  width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 95px);
  position: relative;
}

.main {
  padding-bottom: 40px;
}
</style>
