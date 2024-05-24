import {
  loadFoodsInPopularFoodSection,
  loadTrendingDrinks,
  loadTrendingSushis,
} from "./loadFoods.js";
import { foods } from "./foodsArray.js";
let btnMenu = document.querySelector("#btnMenu");
let menu = document.querySelector(".header__menu");
let menuItems = document.querySelectorAll(".header__menu li");

// Inicializar foods
loadFoodsInPopularFoodSection();
loadTrendingSushis();
loadTrendingDrinks();

let foodCards = document.querySelectorAll(".popular-foods__card");

// Añade el evento resize para cerrar el menú cuando se cambie el tamaño de la ventana
// Menu desplegable

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMenu();
  }
});

function openMenu() {
  menu.classList.toggle("open-menu");
  document.body.classList.add("no-scroll");
}

function closeMenu() {
  menu.classList.remove("open-menu");
  document.body.classList.remove("no-scroll");
}

btnMenu.addEventListener("click", openMenu);

menuItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

/* Popular Food */
let popularFoodFilter = document.querySelectorAll(".popular-foods__filter-btn");

function activeFood(popularFoodFilter, foodSelected) {
  let foodSelectedText = foodSelected.innerText;

  /* Limpia todos los botones activos en el filter */
  popularFoodFilter.forEach((food) => {
    food.classList.remove("active");
  });

  /* Activa los botones que se seleccionaron */
  foodSelected.classList.add("active");

  /* Limpiar todas las cards activas */
  foodCards.forEach((foodCard) => {
    foodCard.classList.remove("active-card");
  });

  /* Activa las cards que corresponden al boton seleccionado */
  foods.forEach((food) => {
    if (food.category === foodSelectedText) {
      foodCards.forEach((foodCard) => {
        // Seleccionamos el h4 dentro del foodCard
        const h4Element = foodCard.querySelector("h4");

        if (food.title === h4Element.innerText) {
          foodCard.classList.add("active-card");
        }
      });
    }
  });
}

popularFoodFilter.forEach((food) => {
  food.addEventListener("click", () => {
    activeFood(popularFoodFilter, food);
  });
});
