import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientBottomTabs from "./ClientBottomTabs";
import Colors from "../constants/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";
import BusinessConsoleScreen from "../src/screens/business-console";
import DriverConsoleScreen from "../src/screens/driver-console";
import DrawerContent from "../src/components/drawer-content";

const DrawerNavigation = () => {
  const DrawerStack = createDrawerNavigator();
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <DrawerStack.Screen
        name="RootClientTab"
        component={ClientBottomTabs}
        options={{
          title: "Clinet",
          drawerActiveTintColor: Colors.lightOrange,
          drawerIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <DrawerStack.Screen
        name="BusinessTab"
        component={BusinessConsoleScreen}
        options={{
          title: "Business console",
          drawerActiveTintColor: Colors.lightOrange,
          drawerIcon: ({ color, size }) => (
            <Icon name="business" type="material" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <DrawerStack.Screen
        name="DriverTab"
        component={DriverConsoleScreen}
        options={{
          title: "Driver console",
          drawerActiveTintColor: Colors.lightOrange,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="directions-bike" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigation;
