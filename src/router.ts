import { createRouter, createWebHashHistory } from "vue-router";
import { routeGuard } from "@descope/vue-sdk";
import { routes } from "./routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await routeGuard();

  console.log({ isAuthenticated });

  if (to.name === "login" && !isAuthenticated) next();
  if (to.name === "login" && isAuthenticated) next({ name: "hello" });
  else if (!isAuthenticated) next({ name: "login" });
  else next();
});
