export interface IProductData {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ISearchResultCart {
  imageUri: string;
  restaurantName: string;
  farAway: string;
  businessAddress: string;
  deliveryAvailable?: boolean;
  discountAvailable?: number;
  numberOfReview: number;
  averageReview: string;
  productData: IProductData[];
  index: string;
  foodType: string;
  deliveryTime: number;
  collectTime: number;
}

export interface ISearchParam {
  itemName: string;
}
