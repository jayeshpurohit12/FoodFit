/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  SignInWelcomeScreen: undefined;
  LoginScreen: undefined;
  HomeScreen: undefined;
  RootTabs: undefined;
  RestaurantMap: undefined;
  DrawerNavigator: undefined;
  RestaurantHomeScreen: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
};

export type ClientBottomTab = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  MyAccount: undefined;
  MyOrder: undefined;
};

export type ClientStackType = {
  SearchResultScreen: undefined;
  Search: undefined;
  RestaurantHomeScreen: undefined;
  RestaurantProductDetail: undefined;
  PreferenceScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>;

export type AuthStackParamList = {
  SignInWelcomeScreen: undefined;
  LoginScreen: undefined;
  RootTabs: undefined;
};
