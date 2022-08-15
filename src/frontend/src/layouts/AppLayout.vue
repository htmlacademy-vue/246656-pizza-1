<template>
  <div>
    <component
      :is="layout"
      :dough="dough"
      :ingredients="ingredients"
      :sauces="sauces"
      :sizes="sizes"
    >
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  name: "AppLayout",
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
    dough: {
      type: Array,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
  },
  computed: {
    layout() {
      if (this.$route.meta.layout !== "clean") {
        return () => import("@/layouts/AppLayoutBase");
      } else {
        return () => import("@/layouts/AppLayoutClean");
      }
    },
  },
};
</script>

<style scoped></style>
