<script setup lang="ts">
import { useDescope } from "@descope/vue-sdk";
import { useRouter } from "vue-router";

const { logout } = useDescope();
const router = useRouter();

const logoutApp = async () => {
  await logout();

  router.push("/#/login");
};
</script>

<template>
  <div>Hello world</div>
  <router-link to="/earth">Go to earth</router-link>
  <button @click="logoutApp">Logout</button>
</template>

<style scoped></style>
