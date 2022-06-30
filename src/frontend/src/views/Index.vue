<template>
  <div>
    <header class="header">
      <div class="header__logo">
        <a href="index.html" class="logo">
          <img
            src="img/logo.svg"
            alt="V!U!E! Pizza logo"
            width="90"
            height="40"
          />
        </a>
      </div>
      <div class="header__cart">
        <a href="cart.html">0 ₽</a>
      </div>
      <div class="header__user">
        <a href="#" class="header__login"><span>Войти</span></a>
      </div>
    </header>

    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <h1 class="title title--big">Конструктор пиццы</h1>

          <div class="content__dough">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите тесто</h2>

              <div class="sheet__content dough">
                <label
                  class="dough__input"
                  :class="`dough__input--${modifier}`"
                  v-for="{ id, name, description, value, modifier } in dough"
                  :key="id"
                >
                  <input
                    type="radio"
                    name="dought"
                    :value="value"
                    class="visually-hidden"
                    :checked="id === 1"
                  />
                  <b>{{ name }}</b>
                  <span>{{ description }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__diameter">
            <div class="sheet">
              <h2 class="title title--small sheet__title">Выберите размер</h2>

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
                  />
                  <span>{{ size.name }}</span>
                </label>
              </div>
            </div>
          </div>

          <div class="content__ingredients">
            <div class="sheet">
              <h2 class="title title--small sheet__title">
                Выберите ингредиенты
              </h2>

              <div class="sheet__content ingredients">
                <div class="ingredients__sauce">
                  <p>Основной соус:</p>

                  <label
                    class="radio ingredients__input"
                    v-for="sauce in pizza.sauces"
                    :key="sauce.id"
                  >
                    <input
                      type="radio"
                      name="sauce"
                      :value="`${
                        sauce.name === 'Томатный' ? 'tomato' : 'creamy'
                      }`"
                      :checked="sauce.id === 1"
                    />
                    <span>{{ sauce.name }}</span>
                  </label>
                </div>

                <div class="ingredients__filling">
                  <p>Начинка:</p>

                  <ul class="ingredients__list">
                    <li
                      class="ingredients__item"
                      v-for="ingredient in ingridients"
                      :key="ingredient.id"
                    >
                      <span
                        class="filling"
                        :class="`filling--${ingredient.modifier}`"
                      >
                        {{ ingredient.name }}
                      </span>

                      <div class="counter counter--orange ingredients__counter">
                        <button
                          type="button"
                          class="counter__button counter__button--minus"
                          disabled
                        >
                          <span class="visually-hidden">Меньше</span>
                        </button>
                        <input
                          type="text"
                          name="counter"
                          class="counter__input"
                          value="0"
                        />
                        <button
                          type="button"
                          class="counter__button counter__button--plus"
                        >
                          <span class="visually-hidden">Больше</span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
              <div class="pizza pizza--foundation--big-tomato">
                <div class="pizza__wrapper">
                  <div class="pizza__filling pizza__filling--ananas"></div>
                  <div class="pizza__filling pizza__filling--bacon"></div>
                  <div class="pizza__filling pizza__filling--cheddar"></div>
                </div>
              </div>
            </div>

            <div class="content__result">
              <p>Итого: 0 ₽</p>
              <button type="button" class="button" disabled>Готовьте!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
// import misc from "@/static/misc.json";
import pizza from "@/static/pizza.json";
// import user from "@/static/user.json";

export default {
  data() {
    return {
      pizza,
    };
  },
  methods: {
    getNameFromPath(path, fileNameType) {
      switch (fileNameType) {
        case "fullName":
          return path.split("/").slice(-1).toString().split(".svg")[0];
        case "lastWord":
          return path
            .split("/")
            .slice(-1)
            .toString()
            .split(".svg")[0]
            .split("-")
            .slice(-1);
      }
    },
    sizesName() {
      return ["small", "normal", "big"];
    },
  },
  computed: {
    ingridients() {
      return this.pizza.ingredients.map((ingridient) => ({
        ...ingridient,
        modifier: this.getNameFromPath(ingridient.image, "fullName"),
      }));
    },
    dough() {
      return this.pizza.dough.map((dough) => ({
        ...dough,
        modifier: this.getNameFromPath(dough.image, "lastWord"),
      }));
    },
    sizes() {
      return this.pizza.sizes.map((sizes, i) => ({
        ...sizes,
        modifier: this.sizesName()[i],
      }));
    },
  },
};
</script>

<style scoped></style>
