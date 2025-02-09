import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/create", component: Create },
  { path: "/edit/:id", component: Edit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
