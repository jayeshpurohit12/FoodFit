import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { scale, verticalScale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  categoryFoodImage: {
    width: scale(160),
    height: scale(170),
    marginHorizontal: scale(10),
    marginVertical: verticalScale(10),
  },
  categoryTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  categoryName: {
    color: Colors.white,
    fontSize: scale(20),
    fontWeight: "bold",
  },
});
