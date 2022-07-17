<template>
  <div>
    <AppHeader />
    <Index
      :sauces="sauces"
      :ingredients="ingredients"
      :sizes="sizes"
      :dough="dough"
    />
  </div>
</template>

<script>
import AppHeader from "@/layouts/AppHeader";
import Index from "@/views/Index";

export default {
  name: "AppLayout",
  components: { AppHeader, Index },
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
};
</script>

<style scoped></style>
