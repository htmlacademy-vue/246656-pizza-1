<template>
  <p>Итого: {{ finalPrice }} ₽</p>
</template>

<script>
export default {
  name: "BuilderPriceCounter.vue",
  props: {
    finalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>
