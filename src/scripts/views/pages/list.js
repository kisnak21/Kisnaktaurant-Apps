import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../template-creator';

const ListResto = {
  async render() {
    return `
      <div class="content">
      <h2 class="content__heading">Explore Restaurant</h2>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default ListResto;
