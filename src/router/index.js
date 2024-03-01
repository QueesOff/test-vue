import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TaskListPage from "../views/TaskListPage.vue";
import TaskForm from "../components/TaskForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "TaskListPage",
    component: TaskListPage,
  },
  {
    path: "/tasks/new",
    name: "TaskForm",
    component: TaskForm,
  },
  {
    path: "/tasks/:id",
    name: "EditTask",
    component: TaskForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
