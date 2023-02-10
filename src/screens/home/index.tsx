import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import HomeScreenHeader from "./partials/header";
import { styles } from "./styles";
import Colors from "../../../constants/Colors";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CategoriesHeader from "./partials/title-container";
import { CategoriesMockData, RestaurantMockData } from "./mock";
import FoodCard from "./partials/food-card";
import { scale, width } from "../../../constants/Layout";
import TimeCountDown from "../../components/time-countdown";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const screenWidth = scale(width * 0.75);
  const [delivery, setDelivery] = useState(true);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState("1");

  const handleDelivery = () => {
    setDelivery(!delivery);
  };

  const handlePickUp = () => {
    setDelivery(!delivery);
    navigation.navigate("RestaurantMap");
  };

  return (
    <SafeAreaView style={styles.homeContainer}>
      <HomeScreenHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View style={styles.topHeaderContainer}>
          <View style={styles.deliveryPickupContainer}>
            <TouchableOpacity
              style={{
                ...styles.deliveryContainer,
                backgroundColor: delivery ? Colors.lightOrange : Colors.grey4,
              }}
              onPress={handleDelivery}
            >
              <Text style={styles.deliveryTitle}>Delivery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.pickUpContainer,
                backgroundColor: delivery ? Colors.grey4 : Colors.lightOrange,
              }}
              onPress={handlePickUp}
            >
              <Text>PickUp</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filterLocContainer}>
          <View style={styles.locationContainer}>
            <View style={styles.prevLocationContainer}>
              <Ionicons name="location-sharp" size={26} color={Colors.grey} />
              <Text style={styles.locationText}>22 Besssin Street</Text>
            </View>
            <View style={styles.currentLocationContainer}>
              <Ionicons name="time-sharp" size={26} color={Colors.grey} />
              <Text style={styles.locationText}>Now</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="tune" size={28} color={Colors.black} />
        </View>
        <View style={styles.flexView}>
          <CategoriesHeader title="Categories" />
          <FlatList
            data={CategoriesMockData}
            horizontal
            extraData={activeCategoryIndex}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    ...styles.categoriesContainer,
                    backgroundColor:
                      activeCategoryIndex === item.id
                        ? Colors.lightOrange
                        : Colors.white,
                  }}
                  onPress={() => setActiveCategoryIndex(item.id)}
                >
                  <Image
                    source={{ uri: item.imageUri }}
                    style={styles.foodCategoriesImages}
                  />
                  <Text style={styles.categoriesFoodHeading}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.flexView}>
          <CategoriesHeader title="Free Delivery Now" />
          <TimeCountDown />
          <FlatList
            data={RestaurantMockData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({
              item: {
                imageUri,
                averageReview,
                businessAddress,
                farAway,
                discount,
                numberOfReview,
                restaurantName,
              },
            }) => (
              <FoodCard
                width={screenWidth}
                imageUri={imageUri}
                averageReview={averageReview}
                businessAddress={businessAddress}
                farAway={farAway}
                restaurantName={restaurantName}
                numberOfReview={numberOfReview}
                discountAvailable={discount}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.flexView}>
          <CategoriesHeader title="Promotion Available" />
          <FlatList
            data={RestaurantMockData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({
              item: {
                imageUri,
                averageReview,
                businessAddress,
                farAway,
                discount,
                numberOfReview,
                restaurantName,
              },
            }) => (
              <FoodCard
                width={screenWidth}
                imageUri={imageUri}
                averageReview={averageReview}
                businessAddress={businessAddress}
                farAway={farAway}
                restaurantName={restaurantName}
                numberOfReview={numberOfReview}
                discountAvailable={discount}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View>
          <CategoriesHeader title="Restaurants in your Area" />
          {delivery &&
            RestaurantMockData.map(
              ({
                imageUri,
                averageReview,
                businessAddress,
                farAway,
                restaurantName,
                numberOfReview,
                discount,
                id,
              }) => {
                return (
                  <View key={id}>
                    <FoodCard
                      imageUri={imageUri}
                      averageReview={averageReview}
                      businessAddress={businessAddress}
                      farAway={farAway}
                      restaurantName={restaurantName}
                      numberOfReview={numberOfReview}
                      discountAvailable={discount}
                    />
                  </View>
                );
              }
            )}
        </View>
      </ScrollView>
      <View style={styles.floatingMapContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("RestaurantMap")}>
          <Icon
            name="place"
            type="community"
            size={32}
            color={Colors.chestnutRed}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
