import HelloWorldVue from "./components/HelloWorld.vue";
import Login from "./components/Login.vue";
import HelloEarth from "./components/HelloEarth.vue";

export const routes = [
  {
    path: "/hello",
    name: "hello",
    component: HelloWorldVue,
  },
  {
    path: "/earth",
    name: "earth",
    component: HelloEarth,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/",
    redirect: {
      path: "/hello",
    },
  },
];
