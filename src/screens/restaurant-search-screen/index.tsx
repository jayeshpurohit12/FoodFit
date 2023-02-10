import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useRoute } from "@react-navigation/native";
import SearchResultCart from "../search/partials/search-result-cart";
import { RestaurantMockData } from "../home/mock";
import { ISearchParam } from "../search/interfaces";

const RestaurantsSearchScreen = () => {
  const route = useRoute();

  const { itemName } = route.params as ISearchParam;

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.searchItemHeading}
      >{`4 Results for ${itemName}`}</Text>
      <FlatList
        data={RestaurantMockData}
        showsVerticalScrollIndicator={false}
        renderItem={({
          item: {
            imageUri,
            averageReview,
            businessAddress,
            farAway,
            discount,
            numberOfReview,
            restaurantName,
            productData,
            id,
            foodType,
            collectTime,
            deliveryTime,
          },
        }) => (
          <SearchResultCart
            imageUri={imageUri}
            averageReview={averageReview}
            businessAddress={businessAddress}
            farAway={farAway}
            discountAvailable={discount}
            numberOfReview={numberOfReview}
            restaurantName={restaurantName}
            productData={productData}
            index={id}
            foodType={foodType}
            collectTime={collectTime}
            deliveryTime={deliveryTime}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default RestaurantsSearchScreen;
