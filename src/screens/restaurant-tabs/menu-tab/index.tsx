import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { MenuData, SpecialData } from "../../home/mock";
import { Icon } from "react-native-elements";
import Colors from "../../../../constants/Colors";

const MenuTabScreen = ({ onPressed }) => {
  return (
    <View style={styles.container}>
      {SpecialData.map((specialty) => {
        return (
          <TouchableOpacity
            key={specialty.id}
            style={styles.specialtyDataContainer}
            onPress={onPressed}
          >
            <Icon
              name="star"
              size={20}
              color={Colors.gold}
              type="community"
              style={styles.starIcon}
            />
            <Text style={styles.specialtyTitle}>{specialty.title}</Text>
          </TouchableOpacity>
        );
      })}
      <View>
        {MenuData.map((menu) => {
          return (
            <TouchableOpacity
              key={menu.key}
              style={styles.menuDataContainer}
              onPress={onPressed}
            >
              <Text style={styles.menuFoodName}>{menu.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default MenuTabScreen;
