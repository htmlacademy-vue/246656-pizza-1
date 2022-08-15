<template>
  <div class="layout__sidebar sidebar">
    <Logo class="layout__logo" />

    <router-link
      class="layout__link"
      active-class="layout__link--active"
      to="/orders"
      >История заказов</router-link
    >
    <router-link
      class="layout__link"
      active-class="layout__link--active"
      to="/profile"
      >Мои данные</router-link
    >
  </div>
</template>

<script>
import Logo from "@/common/components/Logo";
export default {
  name: "AppSidebar.vue",
  components: {
    Logo,
  },
};
</script>

<style scoped></style>
