<template>
  <div class="sheet">
    <TitleSection :level="2" size="small" class="sheet__title"
      >Выберите ингридиенты</TitleSection
    >

    <div class="sheet__content ingredients">
      <div class="ingredients__sauce">
        <p>Основной соус:</p>

        <RadioButton
          class="ingredients__input"
          v-for="sauce in sauces"
          :key="sauce.id"
          :title="sauce.name"
          name="sauce"
          :value="valueComp(sauce.name)"
          :checked="sauce.id === 1"
          @updateRadio="$emit('changeSauce', sauce.price, sauce.name)"
        />
      </div>

      <div class="ingredients__filling">
        <p>Начинка:</p>

        <ul class="ingredients__list">
          <li
            class="ingredients__item"
            v-for="ingredient in ingredients"
            :key="ingredient.id"
          >
            <SelectorItem
              :ingredient="ingredient"
              class="filling"
              :class="`filling--${ingredient.modifier}`"
            />
            <ItemCounter
              :ingredient="ingredient"
              :count="ingredient.count"
              :index-number="ingredient.id"
              :limit-min="ingredientLimitMin"
              :limit-max="ingredientLimitMax"
              @changeValue="$emit('changeIngredientCount', $event)"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TitleSection from "@/common/components/TitleSection";
import RadioButton from "@/common/components/RadioButton";
import ItemCounter from "@/common/components/ItemCounter";
import SelectorItem from "@/common/components/SelectorItem";
import { COUNTER_LIMIT_MIN, COUNTER_LIMIT_MAX } from "@/common/const";
export default {
  name: "BuilderDoughSelector.vue",
  components: { SelectorItem, RadioButton, TitleSection, ItemCounter },
  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
  },
  methods: {
    valueComp(name) {
      return name === "Томатный" ? "tomato" : "creamy";
    },
  },
  computed: {
    ingredientLimitMin() {
      return COUNTER_LIMIT_MIN;
    },
    ingredientLimitMax() {
      return COUNTER_LIMIT_MAX;
    },
  },
};
</script>

<style scoped></style>
