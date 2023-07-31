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
  <div>Hello Earth</div>

  <div style="margin-top: 20px">
    <button @click="logoutApp" style="cursor: pointer">Logout</button>
  </div>
</template>

<style scoped></style>
