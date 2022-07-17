<template>
  <div id="app">
    <AppLayout
      :sauces="sauces"
      :ingredients="ingredients"
      :sizes="sizes"
      :dough="dough"
    />
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";
import pizza from "@/static/pizza.json";
import { getNameFromPath } from "@/common/helpFunctions";
import { SIZES_NAME } from "@/common/const";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  data() {
    return {
      pizza,
    };
  },
  computed: {
    sauces() {
      return this.pizza.sauces;
    },
    ingredients() {
      return this.pizza.ingredients.map((ingridient) => ({
        ...ingridient,
        modifier: getNameFromPath(ingridient.image, "fullName"),
        count: 0,
      }));
    },
    dough() {
      return this.pizza.dough.map((dough) => ({
        ...dough,
        modifier: getNameFromPath(dough.image, "lastWord"),
      }));
    },
    sizes() {
      return this.pizza.sizes.map((sizes, i) => ({
        ...sizes,
        modifier: SIZES_NAME[i],
      }));
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
