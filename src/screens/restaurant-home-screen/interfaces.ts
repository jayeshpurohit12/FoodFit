export interface IRasturantHeader {
  restaurantImage: string;
}

export interface IRestaurantParam {
  restaurantImage: string;
  index: string;
  restaurantName: string;
  farAway: string;
  averageReview: string;
  foodType: string;
  numberOfReview: number;
  deliveryTime: number;
  collectTime: number;
  discountAvailable?: number;
}

export interface IMenuProductCart {
  meal: string;
  price: number;
  details?: string;
  image: string;
}
