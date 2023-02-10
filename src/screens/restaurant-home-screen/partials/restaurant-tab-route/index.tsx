import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import MenuProductCart from "../menu-product-cart";
import { MenuDetailedData } from "../../../home/mock";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Route1({ setModalVisible }) {
  const navigation = useNavigation();
  const onOpenPreferences = (index: number) => {
    navigation.navigate("PreferenceScreen", { index });
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={MenuDetailedData}
        renderItem={({ item: { meal, price, details, image }, index }) => (
          <TouchableOpacity onPress={() => onOpenPreferences(index)}>
            <MenuProductCart
              meal={meal}
              price={price}
              details={details}
              image={image}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

export const Route2 = () => (
  <View style={{ backgroundColor: "black", flex: 1 }}></View>
);

export const Route3 = () => <View></View>;

export const Route4 = () => <View></View>;

export const Route5 = () => <View></View>;

export const Route6 = () => <View></View>;

export const Route7 = () => <View></View>;

export const Route8 = () => <View></View>;
