import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import descope from "@descope/vue-sdk";

createApp(App)
  .use(descope, {
    projectId: import.meta.env.VITE_DESCOPE_PROJECT_ID,
  })
  .mount("#app");
