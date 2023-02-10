import {
  View,
  Text,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../../../constants/Colors";
import { ISearchResultCart } from "../../interfaces";
import ProductCart from "../product-cart";
import { useNavigation } from "@react-navigation/native";

export interface INavigation {
  
}

const SearchResultCart = ({
  imageUri,
  restaurantName,
  farAway,
  businessAddress,
  deliveryAvailable,
  discountAvailable,
  numberOfReview,
  averageReview,
  productData,
  index,
  foodType,
  deliveryTime,
  collectTime,
}: ISearchResultCart) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("RestaurantHomeScreen", {
            restaurantImage: imageUri,
            index,
            restaurantName,
            farAway,
            averageReview,
            foodType,
            numberOfReview,
            deliveryTime,
            collectTime,
            discountAvailable,
          })
        }
      >
        <ImageBackground
          style={styles.foodImage}
          source={{
            uri: imageUri,
          }}
        >
          <View style={styles.reviewsContainer}>
            <Text style={styles.rating}>{averageReview}</Text>
            <Text style={styles.review}>{numberOfReview} reviews</Text>
          </View>
        </ImageBackground>
        <Text style={styles.restaurantsName}>{restaurantName}</Text>
        <View style={styles.locationContainer}>
          <View style={styles.location}>
            <Ionicons
              name="location-sharp"
              size={20}
              color={Colors.grey}
              style={styles.locationIcon}
            />
            <Text style={styles.foodAddressLocText}>{`${farAway} Min`}</Text>
          </View>
          <Text style={styles.foodAddressLocText}>{businessAddress}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.productContainer}>
        <FlatList
          data={productData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.productCartContainer}>
                <ProductCart productDetails={item} />
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default SearchResultCart;
