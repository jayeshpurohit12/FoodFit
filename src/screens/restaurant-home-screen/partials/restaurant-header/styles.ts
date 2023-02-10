import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  restaurantImage: {
    width: "100%",
    height: scale(175),
  },
  headerIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: scale(10),
    marginTop: scale(5),
  },
  headerIcon: {
    backgroundColor: Colors.white,
    borderRadius: scale(30),
    padding: scale(5),
  },
});
