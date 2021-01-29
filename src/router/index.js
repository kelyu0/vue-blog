import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/Post/:number",
    name: "Post",
    component: () => import("../views/Post.vue"),
  },
  {
    path: "*",
    redirect: "/Posts",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
