import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import Colors from "../../../constants/Colors";
import RestaurantHeader from "./partials/restaurant-header";
import { IRestaurantParam } from "./interfaces";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import MenuTabScreen from "../restaurant-tabs/menu-tab";
import { InfoTabScreen } from "../restaurant-tabs/info-tab";
import { ReviewTabScreen } from "../restaurant-tabs/review-tab";
import { GalleryTabScreen } from "../restaurant-tabs/gallery-tab";
import MenuModal from "./partials/menu-product";

const RestaurantsHomeScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const [routes] = useState([
    { key: "1", title: "MENU" },
    { key: "2", title: "INFO" },
    { key: "3", title: "REVIEW" },
    { key: "4", title: "GALLERY" },
  ]);

  const {
    restaurantImage,
    index: id,
    restaurantName,
    farAway,
    averageReview,
    foodType,
    numberOfReview,
    deliveryTime,
    collectTime,
    discountAvailable,
  } = (route.params as IRestaurantParam) || {};

  const menuPressed = () => {
    setModalVisible(true);
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "1":
        return <MenuTabScreen onPressed={menuPressed} />;
      case "2":
        return <InfoTabScreen />;
      case "3":
        return <ReviewTabScreen />;
      case "4":
        return <GalleryTabScreen />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader restaurantImage={restaurantImage} />
      {discountAvailable && (
        <Text
          style={styles.offerText}
        >{`GET ${discountAvailable}% OFF ON FOOD TOTAL`}</Text>
      )}

      <ScrollView>
        <View style={styles.restaurantDetailsContainer}>
          <View>
            <Text style={styles.restaurantNameText}>{restaurantName}</Text>
            <Text style={styles.foodTypeText}>{foodType}</Text>
            <View style={styles.ratLocContainer}>
              <View style={styles.reviewContainer}>
                <Icon
                  name="star"
                  size={18}
                  color={Colors.grey}
                  type="material"
                />
                <Text
                  style={styles.flexTitle}
                >{`${averageReview}(${numberOfReview}+)`}</Text>
              </View>
              <View style={styles.locationContainer}>
                <Icon name="location-on" size={18} color={Colors.grey} />
                <Text style={styles.flexTitle}>{farAway} ml away</Text>
              </View>
            </View>
          </View>
          <View style={styles.foodDeliveryOrderTimeContainer}>
            <View style={styles.collectTimeContainer}>
              <Text style={styles.deliverableHeading}>Collect</Text>
              <Text style={styles.collectTimeTitle}>{collectTime}</Text>
              <Text style={styles.collectTimeMinTitle}>min</Text>
            </View>
            <View style={styles.deliveryContainer}>
              <Text style={styles.deliverableHeading}>Delivery</Text>
              <View style={styles.deliveryTimeContainer}>
                <Text style={styles.deliveryTimeTitle}>{deliveryTime}</Text>
                <Text style={styles.deliveryTimeMinTitle}>min</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={layout}
            route={route}
            navigation={navigation}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                indicatorStyle={styles.indicator}
                tabStyle={styles.onTab}
                scrollEnabled
                style={styles.tabBar}
                labelStyle={styles.tabLabel}
                contentContainerStyle={styles.content}
              />
            )}
            tabBarPosition="top"
          />
        </View>
        {index === 0 && <MenuTabScreen onPressed={menuPressed} />}
      </ScrollView>
      <TouchableOpacity>
        <View style={styles.viewCartContainer}>
          <Text style={styles.viewCartTitle}>View Cart</Text>
          <Text style={styles.viewCartTitle}>0</Text>
        </View>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalVisible}>
        <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
            <Icon
              name="arrow-left"
              type="material-community"
              size={25}
              color={Colors.black}
              onPress={() => setModalVisible(false)}
            />
            <Text style={styles.menuTitle}>Menu</Text>
          </View>
          <MenuModal setModalVisible={setModalVisible} />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default RestaurantsHomeScreen;
