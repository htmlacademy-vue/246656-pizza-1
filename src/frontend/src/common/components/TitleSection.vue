<script>
export default {
  name: "TitleSection",
  props: {
    level: {
      type: Number,
      default: 1,
      validator: (value) => value <= 6 && value >= 1,
    },
    size: {
      type: String,
      default: null,
      validator: (value) => ["small", "big"].includes(value),
    },
  },
  render: function (createElement) {
    return createElement(
      `h${this.level}`,
      {
        staticClass: "title",
        class: {
          "title--big": this.size === "big",
          "title--small": this.size === "small",
        },
      },
      this.$slots.default
    );
  },
};
</script>

<style lang="scss" scoped>
.title {
  box-sizing: border-box;
  width: 100%;
  margin: 0;

  color: $black;

  &--big {
    @include b-s36-h42;
  }

  &--small {
    @include b-s18-h21;
  }
}
</style>
