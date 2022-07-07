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
          :value="`${sauce.name === 'Томатный' ? 'tomato' : 'creamy'}`"
          :checked="sauce.id === 1"
          @updateRadioValue="$emit('changeSaucePrice', sauce.price)"
          @updateRadioName="$emit('changeSauceName', sauce.name)"
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
            <AppDrag
              :transfer-data="{
                name: ingredient.modifier,
                count: 1,
                price: ingredient.price,
              }"
            >
              <span class="filling" :class="`filling--${ingredient.modifier}`">
                {{ ingredient.name }}
              </span>
            </AppDrag>

            <ItemCounter
              @changeValue="
                updateIngredients($event, ingredient.modifier, ingredient.price)
              "
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
import AppDrag from "@/common/components/AppDrag";
export default {
  name: "BuilderDoughSelector.vue",
  components: { RadioButton, TitleSection, ItemCounter, AppDrag },
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
    updateIngredients(count, name, price) {
      let numberActionIngrid = this._props.ingredients.indexOf(
        this._props.ingredients.find((data) => data.modifier === name)
      );
      this._props.ingredients[numberActionIngrid].count = count;
      const ingredient = {
        name,
        count,
        price,
      };
      this.$emit("selectIngredients", ingredient);
    },
  },
};
</script>

<style scoped></style>
