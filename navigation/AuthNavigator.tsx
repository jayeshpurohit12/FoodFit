import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../src/screens/auth/sign-in";
import SignInWelcomeScreen from "../src/screens/auth/welcome-signin";
import { AuthStackParamList } from "../types";
import ClientBottomTabs from "./ClientBottomTabs";
import RestaurantMapScreen from "../src/screens/restaurant-map";
import DrawerNavigation from "./DrawerNavigation";
import SignUpScreen from "../src/screens/auth/sign-up";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomeScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      {/* <AuthStack.Screen
        name="RootTabs"
        component={ClientBottomTabs}
        options={{
          headerShown: false,
        }}
      /> */}
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
