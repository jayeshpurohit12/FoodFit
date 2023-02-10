export interface ICategoriesHeader {
  title: string;
}

export interface IFoodCard {
  width?: number;
  imageUri: string;
  restaurantName: string;
  farAway: string;
  businessAddress: string;
  onPressFoodCart?: () => void;
  deliveryAvailable?: boolean;
  discountAvailable?: number;
  numberOfReview: number;
  averageReview: string;
}
