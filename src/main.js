import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "./views/AboutPage.vue";
import CountDown1Page from "./views/CountDown1Page.vue";
import FirebaseFoodPage from "./views/FirebaseFoodPage.vue";
import DateTimePage1 from "./views/DateTimePage1.vue";
import DateTimePage2 from "./views/DateTimePage2.vue";
import DateTimePage3 from "./views/DateTimePage3.vue";

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
    {
      path: "/firebasefood",
      component: FirebaseFoodPage,
    },
    {
      path: "/datetime1",
      component: DateTimePage1,
    },
    {
      path: "/datetime2",
      component: DateTimePage2,
    },
    {
      path: "/datetime3",
      component: DateTimePage3,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
