import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// 导入页面组件
import Home from "./views/Home.vue";
import NewsDetail from "./views/NewsDetail.vue";

// 路由配置
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/news/:id", name: "NewsDetail", component: NewsDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
