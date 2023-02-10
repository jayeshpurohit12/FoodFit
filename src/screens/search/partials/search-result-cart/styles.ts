import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale, width } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  foodImage: {
    width: "100%",
    height: scale(165),
  },
  reviewsContainer: {
    position: "absolute",
    right: scale(10),
    top: scale(5),
    justifyContent: "center",
    alignItems: "center",
  },
  rating: {
    color: Colors.emeraldGreen,
    fontSize: scale(18),
    fontWeight: "600",
  },
  review: {
    color: Colors.orange,
    fontWeight: "400",
  },
  restaurantsName: {
    marginTop: scale(5),
    fontWeight: "bold",
    fontSize: scale(16),
    marginLeft: scale(5),
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: scale(8),
    marginBottom: scale(10),
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: { marginRight: scale(3) },
  foodAddressLocText: {
    color: Colors.grey3,
    fontSize: scale(12),
  },
  productContainer: {
    marginTop: scale(10),
    marginBottom: scale(40),
  },
  productCartContainer: {
    backgroundColor: Colors.grey5,
    borderRadius: scale(12),
    width: scale(width - 120),
    marginRight: scale(20),
  },
});
