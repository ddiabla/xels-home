import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Docs from "../views/Docs.vue";
import Contribute from "../views/Contribute.vue";
import NotFound from "../views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs,
  },
  {
    path: "/contribute",
    name: "Contribute",
    component: Contribute,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
