import Swal from 'sweetalert2';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import {
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  RestoDrinksTemplate,
  RestoFoodsTemplate,
  RestoReviewTemplate,
} from '../template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import favoriteRestaurant from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
      <div class="content-title">
              <h5>Foods</h5>
            </div>
        <div id="food" class="section"></div>
        <div class="content-title">
        <h5>Drinks</h5>
      </div>
      <div id="drink" class="section"></div>
        <div class="content-title">
                    <h5>Reviews</h5>
                  </div>
  <div id="review" class="section"></div>
  <div class="content-title">
              <h5>
                Add Your Comment
              </h5>
            <form class="section" id="form-review">
              <input type="text" placeholder="Your Name" class="form-name" id="input-name" required />
              <input type="text" placeholder="Your Comment" class="form" id="input-review" required />
              <button type="submit" id="add" class="btn-review">
                 Review
              </button>
            </form>
          </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
    likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: favoriteRestaurant,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    const foods = await RestaurantSource.detailRestaurantFood(url.id);
    const foodContainer = document.querySelector('#food');
    foods.forEach((food) => {
      foodContainer.innerHTML += RestoFoodsTemplate(food);
    });
    const drinks = await RestaurantSource.detailRestaurantDrink(url.id);
    const drinkContainer = document.querySelector('#drink');
    drinks.forEach((drink) => {
      drinkContainer.innerHTML += RestoDrinksTemplate(drink);
    });
    const reviews = await RestaurantSource.customerReviews(url.id);
    const reviewContainer = document.querySelector('#review');
    reviews.forEach((review) => {
      reviewContainer.innerHTML += RestoReviewTemplate(review);
    });

    const nameinput = document.querySelector('#input-name');
    const reviewinput = document.querySelector('#input-review');
    const reviewsubmit = document.querySelector('#add');
    reviewsubmit.addEventListener('click', async (event) => {
      const review = {
        id: restaurant.id,
        name: nameinput.value,
        review: reviewinput.value,
      };
      if (nameinput.value === '' || reviewinput.value === '') {
        // alert('Required name and review!!');
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Required name and review!!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        event.preventDefault();
        Swal.fire({
          title: `Do you want to review ${restaurant.name}?`,
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Yes',
        }).then(async (result) => {
          if (result.isConfirmed) {
            Swal.fire('Thanks for review!', '', 'success').then(
              await RestaurantSource.addReview(review).then(() => {
                location.reload();
              }),
            );
          }
        });
      }
    });
  },
};

export default Detail;
