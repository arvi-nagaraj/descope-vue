<script setup lang="ts">
import { Descope } from "@descope/vue-sdk";

const handleError = (e: unknown): void => {
  console.error("Could not log in", e);
};

// Id of the login/signup UI flow created in descope.
const flowId = "flowId";
const redirectUrl = `${window.location.origin}/#/hello`;
</script>

<template>
  <Descope :redirectUrl="redirectUrl" :flowId="flowId" @error="handleError" />
</template>

<style scoped lang="scss"></style>
