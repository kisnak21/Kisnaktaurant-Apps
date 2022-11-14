import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async detailRestaurantFood(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.menus.foods;
  }

  static async detailRestaurantDrink(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.menus.drinks;
  }

  static async customerReviews(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant.customerReviews;
  }
}

export default RestaurantSource;
