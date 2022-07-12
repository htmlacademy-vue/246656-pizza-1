<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <TitleSection size="big"> Конструктор пиццы </TitleSection>
        <div class="content__dough">
          <BuilderDoughSelector :dough="dough" @changeDough="selectDough" />
        </div>

        <div class="content__diameter">
          <BuilderSizeSelector
            :sizes="sizes"
            @changeSize="selectSize"
            @changeSizeMultiplier="selectSizeMultiplier"
          />
        </div>

        <div class="content__ingredients">
          <BuilderIngredientsSelector
            :ingredients="ingridientsReact"
            :sauces="sauces"
            @changeSauce="selectSauce"
            @changeValue="selectIngredients"
          />
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <BuilderPizzaView
              :dough="selectedDough"
              :sauce="selectedSauce"
              :ingredients="checkedIngredients"
              @changeValue="selectIngredients"
            />
          </div>

          <div class="content__result">
            <builder-price-counter :final-price="finalPrice" />
            <button type="button" class="button" disabled>Готовьте!</button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import TitleSection from "@/common/components/TitleSection";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderPriceCounter from "@/modules/builder/components/BuilderPriceCounter";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

export default {
  components: {
    TitleSection,
    BuilderDoughSelector,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
    BuilderPriceCounter,
    BuilderPizzaView,
  },

  props: {
    ingredients: {
      type: Array,
      required: true,
    },
    sauces: {
      type: Array,
      required: true,
    },
    dough: {
      type: Array,
      required: true,
    },
    sizes: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      ingridientsReact: this.ingredients,
      selectedIngredients: this.checkedIngredients,
      ingredientsPrice: 0,
      selectedDough: this.dough[0].modifier,
      selectedSauce: this.sauces[0].name,
      selectedSize: this.sizes[1].value,
      doughPrice: this.dough[0].price,
      saucePrice: this.sauces[0].price,
      sizeMultiplier: this.sizes[1].multiplier,
    };
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
    },
    selectSizeMultiplier(multiplier) {
      this.sizeMultiplier = multiplier;
    },
    selectDough(doughName, doughPrice) {
      this.selectedDough = doughName;
      this.doughPrice = doughPrice;
    },
    selectSauce(saucePrice, sauceName) {
      this.saucePrice = saucePrice;
      this.selectedSauce = sauceName;
    },
    selectIngredients(arr) {
      const i = this.ingredients.findIndex(
        (ingredient) => ingredient.id === arr[1]
      );
      if (~i) {
        this.ingredients[i].count += arr[0];
      }
    },
  },
  computed: {
    checkedIngredients() {
      return this.ingredients.filter((it) => it.count);
    },
    finalPrice() {
      const ingredientsPrice = this.checkedIngredients
        .map((it) => it.price * it.count)
        .reduce((acc, it) => acc + it, 0);
      return (
        (this.doughPrice + this.saucePrice + ingredientsPrice) *
        this.sizeMultiplier
      );
    },
  },
};
</script>

<style scoped></style>
