import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/home",
    name: "home",
    component: () => import("./components/Home")
  },
  {
    path: "/blogs",
    alias: "/blogs",
    name: "blogs",
    component: () => import("./components/Blogs")
  },
  {
    path: "/details/:id",
    name: "details",
    component: () => import("./components/Details")
  },
  {
    path: "/contact",
    alias: "/contact",
    name: "contact",
    component: () => import("./components/Contact")
  },
  {
    path: "/about",
    alias: "/about",
    name: "about",
    component: () => import("./components/About")
  },
  {
    path: "/findjob",
    alias: "/findjob",
    name: "findjob",
    component: () => import("./components/FindJob")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;