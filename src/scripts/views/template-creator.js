import CONFIG from '../globals/config';

const createRestoDetailTemplate = (restaurant) => `
<h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.title}" />
  <div class="restaurant__info">
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
  </div>
`;

const RestoFoodsTemplate = (food) => `
<span>${food.name}</span>
`;
const RestoDrinksTemplate = (drink) => `
<span>${drink.name}</span>
`;

const RestoReviewTemplate = (review) => `
<div class="section">
<div class="review-text">
  <h6>${review.name} - ${review.date}</h6>
  <p>${review.review}</p>
</div>
</div>
`;

const createRestoItemTemplate = (restaurant) => `
<div class="restaurant-item">
<div class="restaurant-item__header">
  <img class="lazyload restaurant-item__header__poster" alt="${restaurant.name}"
       data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
  <div class="restaurant-item__header__rating">
    <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
  </div>
</div>
<div class="restaurant-item__content">
  <h3><a href="/#/detail/${restaurant.id}" id="restaurant-link">${restaurant.name}</a></h3>
  <p>${restaurant.description}</p>
</div>
</div>`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createRestoItemTemplate,
  RestoDrinksTemplate,
  RestoFoodsTemplate,
  RestoReviewTemplate,
};
