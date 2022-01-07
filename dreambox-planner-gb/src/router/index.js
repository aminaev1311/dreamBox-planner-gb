import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Vision from "@/views/Vision.vue";
import Wheel from "@/views/Wheel";
import Test from "@/views/Test";
import NewGoals from "@/views/NewGoals";
import NewTasks from "@/views/NewTasks";

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
    path: "/new-goals",
    name: "NewGoals",
    component: NewGoals,
  },
  {
    path: "/tasks",
    name: "NewTasks",
    component: NewTasks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
