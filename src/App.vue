<script setup lang="ts">
import { Descope, useSession } from "@descope/vue-sdk";
const { isAuthenticated, isLoading } = useSession();

const handleError = (e: unknown): void => {
  console.error("Could not log in", e);
};

// Id of the login/signup UI flow created in descope.
const flowId = import.meta.env.VITE_DESCOPE_FLOW_ID;
</script>

<template>
  <VApp>
    <div v-if="isLoading">Checking...</div>

    <template v-else>
      <Descope v-if="!isAuthenticated" :flowId="flowId" @error="handleError" />

      <template v-else> Logged In </template>
    </template>
  </VApp>
</template>

<style scoped lang="scss"></style>
