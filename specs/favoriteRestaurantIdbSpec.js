import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import favoriteRestaurant from '../src/scripts/data/favorite-restaurant-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await favoriteRestaurant.getAllRestaurants()).forEach(async (restaurant) => {
      await favoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(favoriteRestaurant);
});
