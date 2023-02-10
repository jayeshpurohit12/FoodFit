import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale, width } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  foodContainer: {
    marginTop: scale(10),
    marginHorizontal: scale(10),
    borderWidth: 1,
    borderColor: Colors.grey4,
    borderRadius: scale(12),
    paddingBottom: scale(5),
  },
  restaurantThumbnail: {
    height: scale(200),
    borderTopLeftRadius: scale(11),
    borderTopRightRadius: scale(11),
  },
  reviewContainer: {
    position: "absolute",
    right: 5,
    top: 5,
    paddingRight: scale(5),
  },
  ratings: {
    color: Colors.emeraldGreen,
    alignSelf: "center",
    fontSize: scale(25),
    fontWeight: "bold",
  },
  reviews: {
    color: Colors.yellowOrange,
    alignSelf: "center",
    fontSize: scale(12),
    fontWeight: "600",
  },
  foodName: {
    marginLeft: scale(10),
    marginTop: scale(8),
    fontSize: scale(20),
    fontWeight: "700",
  },
  locationContainer: {
    flexDirection: "row",
    marginTop: scale(5),
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
});
