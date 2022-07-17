<template>
  <AppDrag :transfer-data="ingredient" :draggable="isDraggable">
    <span :class="isDraggable && 'item--draggable'">
      {{ ingredient.name }}
    </span>
  </AppDrag>
</template>

<script>
import AppDrag from "@/common/components/AppDrag";
import { COUNTER_LIMIT_MAX } from "@/common/const";
export default {
  name: "SelectorItem",
  components: {
    AppDrag,
  },
  props: {
    ingredient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isDraggable() {
      return this.ingredient.count < COUNTER_LIMIT_MAX;
    },
  },
};
</script>

<style lang="scss" scoped>
.item--draggable:hover {
  cursor: grab;
}
</style>
