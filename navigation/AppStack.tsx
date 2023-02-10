import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantMapScreen from "../src/screens/restaurant-map";
import DrawerNavigation from "./DrawerNavigation";

const AppStack = () => {
  const App = createNativeStackNavigator();

  return (
    <App.Navigator>
      <App.Screen
        name="App"
        component={DrawerNavigation}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="RestaurantMap"
        component={RestaurantMapScreen}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  );
};

export default AppStack;
