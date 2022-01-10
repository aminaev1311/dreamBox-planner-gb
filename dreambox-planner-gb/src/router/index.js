import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import Wheel from "@/views/Wheel";
import Landing from "@/views/Landing"
import NewGoals from "@/views/NewGoals";
// import NewTasks from "@/views/NewTasks";
import Udemi from "@/views/Udemi";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/vision",
  //   name: "Vision",
  //   component: Vision,
  // },
  {
    path: "/wheel",
    name: "Wheel",
    component: Wheel,
  },
  // {
  //   path: "/test",
  //   name: "Test",
  //   component: Test,
  // },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/goals",
    name: "Goals",
    component: NewGoals,
  },
  // {
  //   path: "/tasks",
  //   name: "Tasks",
  //   component: NewTasks,
  // },
  {
    path: "/udemi",
    name: "Udemi",
    component: Udemi,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
