import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import favoriteRestaurant from '../../src/scripts/data/favorite-restaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: favoriteRestaurant,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
