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
  methods: {
    getNameFromPath(path, fileNameType) {
      switch (fileNameType) {
        case "fullName":
          return path.split("/").slice(-1).toString().split(".svg")[0];
        case "lastWord":
          return path
            .split("/")
            .slice(-1)
            .toString()
            .split(".svg")[0]
            .split("-")
            .slice(-1)
            .join("")
            .toString();
      }
    },
    sizesName() {
      return ["small", "normal", "big"];
    },
  },
  computed: {
    sauces() {
      return this.pizza.sauces;
    },
    ingredients() {
      return this.pizza.ingredients.map((ingridient) => ({
        ...ingridient,
        modifier: this.getNameFromPath(ingridient.image, "fullName"),
      }));
    },
    dough() {
      return this.pizza.dough.map((dough) => ({
        ...dough,
        modifier: this.getNameFromPath(dough.image, "lastWord"),
      }));
    },
    sizes() {
      return this.pizza.sizes.map((sizes, i) => ({
        ...sizes,
        modifier: this.sizesName()[i],
      }));
    },
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
