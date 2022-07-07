<template>
  <div class="sheet">
    <TitleSection size="small" :level="2" class="sheet__title"
      >Выберите размер</TitleSection
    >

    <div class="sheet__content diameter">
      <label
        class="diameter__input"
        :class="`diameter__input--${size.modifier}`"
        v-for="size in sizes"
        :key="size.id"
      >
        <input
          type="radio"
          name="diameter"
          :value="size.modifier"
          class="visually-hidden"
          :checked="size.modifier === 'normal'"
          @change="updateSize(size.modifier, size.multiplier)"
        />
        <span>{{ size.name }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import TitleSection from "@/common/components/TitleSection";

export default {
  name: "BuilderDoughSelector.vue",
  components: {
    TitleSection,
  },
  props: {
    sizes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateSize(size, price) {
      this.$emit("changeSize", size);
      this.$emit("changeSizeMultiplier", price);
    },
  },
};
</script>

<style lang="scss" scoped>
.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;

  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 46px;

    &::before {
      @include p_center_v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-color: $green-100;
      background-image: url("~@/assets/img/diameter.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--small {
    span::before {
      background-size: 18px;
    }
  }

  &--normal {
    span::before {
      background-size: 29px;
    }
  }

  &--big {
    span::before {
      background-size: 100%;
    }
  }

  &:hover {
    span::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + span::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
