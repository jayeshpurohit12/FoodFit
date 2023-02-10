import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../src/screens/search";
import RestaurantsSearchScreen from "../src/screens/restaurant-search-screen";
import { ClientStackType } from "../types";
import RestaurantsHomeScreen from "../src/screens/restaurant-home-screen";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import MenuModal from "../src/screens/restaurant-home-screen/partials/menu-product";
import PreferenceScreen from "../src/screens/preference-screen";

export const ClientStack = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const ClientSearch = createNativeStackNavigator<ClientStackType>();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "RestaurantHomeScreen" || "RestaurantProductDetail") {
      navigation.setOptions({
        tabBarVisible: false,
      });
    } else {
      navigation.setOptions({
        tabBarVisible: true,
      });
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <ClientSearch.Screen
        name="SearchResultScreen"
        component={RestaurantsSearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <ClientSearch.Screen
        name="RestaurantHomeScreen"
        component={RestaurantsHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <ClientSearch.Screen
        name="RestaurantProductDetail"
        component={() => MenuModal}
        options={{
          headerShown: false,
        }}
      /> */}
      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={{
          headerShown: false,
        }}
      />
    </ClientSearch.Navigator>
  );
};
