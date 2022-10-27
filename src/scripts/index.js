import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import data from '../DATA.json';

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");


const restaurantList = (data) => {
  const restaurantCard = document.querySelector('.restaurants');
  restaurantCard.innerHTML = ''
  data.forEach(resto => {
    const {name, description, pictureId, rating} = resto;
    const restoList = document.createElement('div')

    restoList.innerHTML = `<style>.restaurant-item {
                          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                          width: 100%;
                          border-radius: 5px;
                          overflow: hidden;
                        }
                        
                        .restaurant-item__content {
                          padding: 16px;
                        }
                        
                        .restaurant-item__thumbnail {
                          width: 100%;
                        }
                        
                        .restaurant-item__rating {
                          font-size: 10px;
                          text-transform: uppercase;
                          color: #999;
                        }
                        
                        .restaurant-item__title {
                          font-weight: 500;
                          font-size: 16px;
                          margin-top: 16px;
                          transition: 0.3s opacity;
                        }
                        
                        .restaurant-item__title:hover {
                          opacity: 0.5;
                        }
                        
                        .restaurant-item__title a {
                          text-decoration: none;
                          color: inherit;
                        }
                        
                        .restaurant-item__description {
                          margin-top: 16px;
                          font-size: 12px;
                          line-height: 1.5em;
                        }
                        </style>
                         <article class="restaurant-item">
                          <img class="restaurant-item__thumbnail" src="${pictureId}"
                            alt="${name}" />
                          <div class="restaurant-item__content">
                            <p class="restaurant-item__title" aria-label="nama restoran: Bring Your Phone Cafe">${name}
                            </p>
                            <p class="restaurant-item__rating" aria-label="rating restoran: 4.6">Rating: ${rating}</p>
                            <p class="restaurant-item__description">
                              ${description}
                            </p>
                          </div>
                        </article>`

                        restaurantCard.appendChild(restoList);
  });
}
restaurantList(data.restaurants);

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});
