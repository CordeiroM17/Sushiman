import { trendingDrinks, trendingSushis, foods } from "./foodsArray.js";
let catalogo = document.querySelector(".popular-foods__catalogue");
let trendingSushisList = document.querySelector("#trending__list--sushis");
let trendingDrinksList = document.querySelector("#trending__list--drinks");

export function loadFoodsInPopularFoodSection() {
  let card;
  foods.forEach((food) => {
    card = document.createElement("article");
    card.classList.add("popular-foods__card");

    card.innerHTML = `<img class="popular-foods__card-image" src="${food.imgSrc}" alt="${food.alt}" />
                            <h4 class="popular-foods__card-title">${food.title}</h4>
        
                            <div class="popular-foods__card-details flex-between">
                              <div class="popular-foods__card-rating">
                                <img src="assets/star.svg" alt="star" />
                                <p>${food.rating}</p>
                              </div>
        
                              <p class="popular-foods__card-price">${food.price}</p>
                            </div>
                          `;

    catalogo.appendChild(card);
  });
}

let li;
export function loadTrendingSushis() {
  trendingSushis.forEach((sushi) => {
    li = document.createElement("li");

    li.innerHTML = `  <div class="trending__icon flex-center">
                              <img src="assets/check.svg" alt="check" />
                          </div>
                          <p>${sushi}</p>
                          `;

    trendingSushisList.appendChild(li);
  });
}

export function loadTrendingDrinks() {
  trendingDrinks.forEach((drink) => {
    li = document.createElement("li");

    li.innerHTML = `  <div class="trending__icon flex-center">
                              <img src="assets/check.svg" alt="check" />
                          </div>
                          <p>${drink}</p>
                          `;

    trendingDrinksList.appendChild(li);
  });
}
