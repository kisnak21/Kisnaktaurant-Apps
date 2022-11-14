import favoriteRestaurant from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await favoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
