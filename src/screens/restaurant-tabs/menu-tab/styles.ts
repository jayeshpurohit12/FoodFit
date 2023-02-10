import { StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";
import { scale } from "../../../../constants/Layout";

export const styles = StyleSheet.create({
  container: { marginTop: scale(30), marginLeft: scale(15) },
  specialtyDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(26),
  },
  starIcon: { marginRight: scale(10) },
  specialtyTitle: {
    fontWeight: "bold",
    fontSize: scale(15),
    color: Colors.grey,
  },
  menuDataContainer: {
    marginBottom: scale(22),
    marginLeft: scale(5),
  },
  menuFoodName: {
    color: Colors.grey,
    fontWeight: "bold",
    fontSize: scale(13),
  },
});
