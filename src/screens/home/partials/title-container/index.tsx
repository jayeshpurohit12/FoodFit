import { View, Text } from "react-native";
import React from "react";
import { ICategoriesHeader } from "../../interfaces";
import { styles } from "./styles";

const CategoriesHeader = ({ title }: ICategoriesHeader) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

export default CategoriesHeader;
