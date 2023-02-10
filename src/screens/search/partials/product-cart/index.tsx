import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { IProductData } from "../../interfaces";
import { styles } from "./styles";

const ProductCart = ({ productDetails }: { productDetails: IProductData }) => {
  const { image, name, price } = productDetails;

  return (
    <TouchableOpacity style={styles.productContainer}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <View style={styles.productDetailContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>₹ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCart;
