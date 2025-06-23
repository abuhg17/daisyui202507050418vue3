import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./views/AboutPage.vue";
import CountDown1Page from "./views/CountDown1Page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/coutdown1",
      component: CountDown1Page,
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
