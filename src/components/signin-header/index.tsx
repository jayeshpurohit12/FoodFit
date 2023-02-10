import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { IHeader } from "../interfaces";

const Header = ({ title }: IHeader) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={28}
        color={Colors.white}
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.headerHeading}>{title}</Text>
    </View>
  );
};

export default Header;
