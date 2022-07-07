<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <TitleSection size="big"> Конструктор пиццы </TitleSection>
        <div class="content__dough">
          <BuilderDoughSelector
            :dough="dough"
            @changeDough="selectDough"
            @changeDoughPrice="selectDoughPrice"
          />
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
            :ingredients="ingredients"
            :sauces="sauces"
            @changeSaucePrice="selectSaucePrice"
            @changeSauceName="selectSauceName"
            @selectIngredients="selectIngredients"
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
              :ingredients="selectedIngredients"
              @drop="selectIngredients($event)"
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
      selectedIngredients: [],
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
    selectDough(doughName) {
      this.selectedDough = doughName;
    },
    selectDoughPrice(doughPrice) {
      this.doughPrice = doughPrice;
    },
    selectSaucePrice(saucePrice) {
      this.saucePrice = saucePrice;
    },
    selectSauceName(sauceName) {
      this.selectedSauce = sauceName;
    },
    updateIngredientsPrice(ingredirents) {
      this.ingredientsPrice = ingredirents
        .filter(({ count }) => count > 0)
        .reduce(
          (accumulator, { count, price }) => accumulator + price * count,
          0
        );
    },
    selectIngredients(ingredirent) {
      console.log(ingredirent);
      const existingIngredientIndex = this.selectedIngredients.findIndex(
        ({ name }) => name === ingredirent.name
      );
      console.log(existingIngredientIndex);
      if (existingIngredientIndex !== -1) {
        this.selectedIngredients.splice(existingIngredientIndex, 1);
      }
      this.selectedIngredients.push(ingredirent);
      this.updateIngredientsPrice(this.selectedIngredients);
    },
  },
  computed: {
    finalPrice() {
      return (
        (this.doughPrice + this.saucePrice + this.ingredientsPrice) *
        this.sizeMultiplier
      );
    },
  },
};
</script>

<style scoped></style>
