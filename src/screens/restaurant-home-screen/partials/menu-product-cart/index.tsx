import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { IMenuProductCart } from "../../interfaces";

const MenuProductCart = ({ meal, price, details, image }: IMenuProductCart) => {
  return (
    <View style={styles.container}>
      <View style={styles.productDetailContainer}>
        <Text style={styles.productName}>{meal}</Text>
        <Text style={styles.productDescription}>{details}</Text>
        <Text style={styles.price}>₹{price}</Text>
      </View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.productImage}
      />
    </View>
  );
};

export default MenuProductCart;
