import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale, verticalScale } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  productContainer: {
    paddingVertical: verticalScale(5),
    flexDirection: "row",
  },
  productImage: {
    width: scale(100),
    height: scale(80),
    marginRight: scale(10),
    borderRadius: scale(10),
    marginLeft: scale(5),
  },
  productDetailContainer: {
    marginVertical: verticalScale(10),
    justifyContent: "space-between",
    marginLeft: scale(5),
  },
  productName: {
    fontWeight: "600",
    fontSize: scale(14),
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: scale(15),
  },
});
