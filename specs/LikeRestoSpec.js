import LikeButtonInitiator from '../src/scripts/utils/like-button-presenter';
import favoriteRestaurant from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should no thsow the unlike button when the movie has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await favoriteRestaurant.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    favoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already like', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // tambahkan restaurant dengan id 1 ke daftar yang disukai
    await favoriteRestaurant.putRestaurant({ id: 1 });

    // simulasikan pengguna menekan tombol like
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // tidak ada film yang ganda
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }]);

    favoriteRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
