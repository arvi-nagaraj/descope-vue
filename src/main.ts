import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import descope from "@descope/vue-sdk";
import { router } from "./router";

createApp(App)
  .use(descope, {
    projectId: "-",
  })
  .use(router)
  .mount("#app");
