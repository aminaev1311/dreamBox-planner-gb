import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Vision from "@/views/Vision.vue";
import Wheel from "@/views/Wheel";
import Test from "@/views/Test";
import Landing from "@/views/Landing.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/vision",
    name: "Vision",
    component: Vision,
  },
  {
    path: "/wheel",
    name: "Wheel",
    component: Wheel,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
