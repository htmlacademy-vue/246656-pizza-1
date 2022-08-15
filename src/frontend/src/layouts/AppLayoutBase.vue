<template>
  <div>
    <AppHeader />
    <slot />
  </div>
</template>

<script>
import AppHeader from "@/layouts/AppHeader";
export default {
  name: "AppLayoutBase.vue",
  components: {
    AppHeader,
  },
};
</script>

<style scoped></style>
