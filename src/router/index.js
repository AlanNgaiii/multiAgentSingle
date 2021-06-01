import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/views/Index";
import h5Routes from "./routes-h5";
import pcRoutes from "./routes-pc";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  h5Routes,
  pcRoutes,
];

const router = new VueRouter({
  routes,
});

export default router;
