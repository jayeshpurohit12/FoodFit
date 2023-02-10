import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../src/screens/home";
import { ClientBottomTab } from "../types";
import SearchScreen from "../src/screens/search";
import MyOrder from "../src/screens/my-order";
import MyAccountScreen from "../src/screens/my-account";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { Icon } from "react-native-elements";
import { ClientStack } from "./ClientStack";

const ClientBottomTabs = () => {
  const ClientBottomStack = createBottomTabNavigator<ClientBottomTab>();

  return (
    <ClientBottomStack.Navigator>
      <ClientBottomStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: Colors.lightOrange,
        }}
      />
      <ClientBottomStack.Screen
        name="SearchScreen"
        component={ClientStack}
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
          tabBarActiveTintColor: Colors.lightOrange,
        }}
      />
      <ClientBottomStack.Screen
        name="MyOrder"
        component={MyOrder}
        options={{
          headerShown: false,
          title: "My Order",
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
          tabBarActiveTintColor: Colors.lightOrange,
        }}
      />
      <ClientBottomStack.Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          headerShown: false,
          title: "My Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
          tabBarActiveTintColor: Colors.lightOrange,
        }}
      />
    </ClientBottomStack.Navigator>
  );
};

export default ClientBottomTabs;
