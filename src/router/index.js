import { createWebHistory, createRouter } from "vue-router";

// 路由懒加载
const Home = () => import("../views/Home");
const Detail = () => import("../views/Detail");
const Category = () => import("../views/Category");
const charterDetail = () => import("../views/charterDetail");
const Signin = () => import("../views/Signin");
const Signup = () => import("../views/Signup");
const User = () => import("../views/User");

// 路由配置
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/detail", name: "Detail", component: Detail },
  { path: "/category", name: "Category", component: Category },
  {
    path: "/comicId/charterId",
    name: "charterDetail",
    component: charterDetail
  },
  { path: "/signin", name: "Signin", component: Signin },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/userId", name: "User", component: User }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
