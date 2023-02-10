import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale, verticalScale, width } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(10),
    marginVertical: verticalScale(7),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.grey6,
    paddingLeft: scale(10),
    borderRadius: scale(5),
  },
  productDetailContainer: {
    paddingVertical: verticalScale(3),
  },
  productName: {
    fontWeight: "bold",
    fontSize: scale(15),
    marginBottom: scale(2),
  },
  productDescription: {
    fontWeight: "500",
    color: Colors.grey,
    width: scale(width - 150),
  },
  productImage: {
    width: scale(80),
    height: scale(80),
    borderBottomRightRadius: scale(5),
    borderTopRightRadius: scale(5),
  },
  price: {
    position: "absolute",
    bottom: 5,
    fontWeight: "700",
    fontSize: scale(15),
  },
});
