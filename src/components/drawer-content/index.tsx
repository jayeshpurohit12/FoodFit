import { View, Text } from "react-native";
import React from "react";
import { Avatar, Icon, Switch } from "react-native-elements";
import { styles } from "./styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Colors from "../../../constants/Colors";
import { checkSignIn } from "../../async-storage/GetData";
import { UPDATE_SIGN_IN } from "../../../constants/AsyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DrawerContent = (props) => {

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileContainer}>
          <View style={styles.profile}>
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              source={{
                uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              }}
              size={75}
            />
            <View style={styles.profileHeadingContainer}>
              <Text style={styles.personName}>Jayesh Purohit</Text>
              <Text style={styles.personEmail}>jayeshpurohit@gmail.com</Text>
            </View>
          </View>
          <View style={styles.favouriteContainer}>
            <View style={styles.flexContainer}>
              <Text style={styles.numberContainer}>1</Text>
              <Text style={styles.flexContainerText}>My Favourite</Text>
            </View>
            <View style={styles.flexContainer}>
              <Text style={styles.numberContainer}>0</Text>
              <Text style={styles.flexContainerText}>Shopping Cart</Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <Icon
              name="credit-card-outline"
              type="material-community"
              size={size}
              color={color}
            />
          )}
        />
        <DrawerItem
          label="Promotions"
          icon={({ color, size }) => (
            <Icon
              name="tag-heart"
              type="material-community"
              size={size}
              color={color}
            />
          )}
        />
        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Icon
              name="cog-outline"
              type="material-community"
              size={size}
              color={color}
            />
          )}
        />
        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Icon
              name="lifebuoy"
              type="material-community"
              size={size}
              color={color}
            />
          )}
        />
        <View style={styles.preferencesContainer}>
          <Text style={styles.preferenceHeading}>Preferences</Text>
          <View style={styles.switchThemeContainer}>
            <Text style={styles.themeText}>Dark Theme</Text>
            <Switch
              trackColor={{ false: Colors.grey, true: Colors.lightOrange }}
              thumbColor={Colors.grey}
            />
          </View>
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="Sign Out"
        icon={({ color, size }) => (
          <Icon
            name="logout-variant"
            type="material-community"
            size={size}
            color={color}
          />
        )}
      />
    </View>
  );
};

export default DrawerContent;
