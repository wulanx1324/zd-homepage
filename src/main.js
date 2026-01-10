import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// 导入页面组件
import Home from "./views/Home.vue";
import News from "./views/News.vue";
import Projects from "./views/Projects.vue";
import Team from "./views/Team.vue";
import Publications from "./views/Publications.vue";
import OpenSource from "./views/OpenSource.vue";
import Contact from "./views/Contact.vue";

// 路由配置
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/news", name: "News", component: News },
  { path: "/projects", name: "Projects", component: Projects },
  { path: "/team", name: "Team", component: Team },
  { path: "/publications", name: "Publications", component: Publications },
  { path: "/opensource", name: "OpenSource", component: OpenSource },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
