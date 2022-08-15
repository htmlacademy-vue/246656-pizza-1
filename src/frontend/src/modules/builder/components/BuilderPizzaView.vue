<template>
  <AppDrop @drop="moveIngredient">
    <div class="pizza" :class="mainClass">
      <div class="pizza__wrapper">
        <div
          v-for="ingridient in ingredients"
          :key="ingridient.id"
          class="pizza__filling"
          :class="ingredientsClass(ingridient)"
        />
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "@/common/components/AppDrop";
export default {
  name: "BuilderPizzaView.vue",
  components: {
    AppDrop,
  },
  props: {
    dough: {
      type: String,
      required: true,
    },
    sauce: {
      type: String,
      required: true,
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    doughLight() {
      return this.dough === "light";
    },
    doughLarge() {
      return this.dough === "large";
    },
    sauceTomato() {
      return this.sauce === "Томатный";
    },
    sauceCreamy() {
      return this.sauce === "Сливочный";
    },
    mainClass() {
      return {
        "pizza--foundation--big-creamy": this.doughLarge && this.sauceCreamy,
        "pizza--foundation--big-tomato": this.doughLarge && this.sauceTomato,
        "pizza--foundation--small-creamy": this.doughLight && this.sauceCreamy,
        "pizza--foundation--small-tomato": this.doughLight && this.sauceTomato,
      };
    },
  },
  methods: {
    ingredientsClass(ingridient) {
      return [
        { [`pizza__filling--${ingridient.modifier}`]: ingridient.count > 0 },
        { "pizza__filling--second": ingridient.count === 2 },
        { "pizza__filling--third": ingridient.count === 3 },
      ];
    },
    moveIngredient(active) {
      console.log(active.id);
      this.$emit("changeIngredientCount", [1, active.id]);
    },
  },
};
</script>

<style lang="scss" scoped>
.pizza {
  position: relative;
  display: block;
  box-sizing: border-box;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  &--foundation--big-creamy {
    background-image: url("~@/assets/img/foundation/big-creamy.svg");
  }
  &--foundation--big-tomato {
    background-image: url("~@/assets/img/foundation/big-tomato.svg");
  }
  &--foundation--small-creamy {
    background-image: url("~@/assets/img/foundation/small-creamy.svg");
  }
  &--foundation--small-tomato {
    background-image: url("~@/assets/img/foundation/small-tomato.svg");
  }
}
.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}
.pizza__filling {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  &--second {
    transform: rotate(45deg);
  }
  &--third {
    transform: rotate(-45deg);
  }
  &--ananas {
    background-image: url("~@/assets/img/filling-big/ananas.svg");
  }
  &--bacon {
    background-image: url("~@/assets/img/filling-big/bacon.svg");
  }
  &--blue_cheese {
    background-image: url("~@/assets/img/filling-big/blue_cheese.svg");
  }
  &--cheddar {
    background-image: url("~@/assets/img/filling-big/cheddar.svg");
  }
  &--chile {
    background-image: url("~@/assets/img/filling-big/chile.svg");
  }
  &--ham {
    background-image: url("~@/assets/img/filling-big/ham.svg");
  }
  &--jalapeno {
    background-image: url("~@/assets/img/filling-big/jalapeno.svg");
  }
  &--mozzarella {
    background-image: url("~@/assets/img/filling-big/mozzarella.svg");
  }
  &--mushrooms {
    background-image: url("~@/assets/img/filling-big/mushrooms.svg");
  }
  &--olives {
    background-image: url("~@/assets/img/filling-big/olives.svg");
  }
  &--onion {
    background-image: url("~@/assets/img/filling-big/onion.svg");
  }
  &--parmesan {
    background-image: url("~@/assets/img/filling-big/parmesan.svg");
  }
  &--salami {
    background-image: url("~@/assets/img/filling-big/salami.svg");
  }
  &--salmon {
    background-image: url("~@/assets/img/filling-big/salmon.svg");
  }
  &--tomatoes {
    background-image: url("~@/assets/img/filling-big/tomatoes.svg");
  }
}
</style>
