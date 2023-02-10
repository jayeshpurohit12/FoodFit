import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../../../constants/Colors";
import { IFoodCard } from "../../interfaces";

const FoodCard = ({
  width,
  imageUri,
  restaurantName,
  farAway,
  businessAddress,
  onPressFoodCart,
  deliveryAvailable,
  discountAvailable,
  numberOfReview,
  averageReview,
}: IFoodCard) => {
  return (
    <TouchableOpacity style={styles.foodContainer}>
      <Image
        source={{
          uri: imageUri,
        }}
        style={[styles.restaurantThumbnail, { width }]}
      />
      <View style={styles.reviewContainer}>
        <Text style={styles.ratings}>{averageReview}</Text>
        <Text style={styles.reviews}>{`${numberOfReview} reviews`}</Text>
      </View>
      <Text style={styles.foodName}>{restaurantName}</Text>
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
  );
};

export default FoodCard;
