<template>
  <div class="sheet">
    <TitleSection size="small" :level="2" class="sheet__title"
      >Выберите тесто</TitleSection
    >
    <div class="sheet__content dough">
      <label
        class="dough__input"
        :class="`dough__input--${modifier}`"
        v-for="{ id, name, description, modifier, price } in dough"
        :key="id"
      >
        <input
          type="radio"
          name="dough"
          :value="name"
          class="visually-hidden"
          :checked="id === 1"
          @change="updateDough(modifier, price)"
        />
        <b>{{ name }}</b>
        <span>{{ description }}</span>
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
    dough: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateDough(value, price) {
      this.$emit("changeDough", value, price);
    },
  },
};
</script>

<style lang="scss" scoped>
.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  b {
    @include r-s16-h19;

    &::before {
      @include p_center-v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  span {
    @include l-s11-h13;

    display: block;
  }

  &--light {
    b {
      &::before {
        background-image: url("~@/assets/img/dough-light.svg");
      }
    }
  }

  &--large {
    b {
      &::before {
        background-image: url("~@/assets/img/dough-large.svg");
      }
    }
  }

  &:hover {
    b::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + b::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
