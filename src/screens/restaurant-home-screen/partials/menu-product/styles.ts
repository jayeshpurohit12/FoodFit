import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale, verticalScale } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  indicator: {
    backgroundColor: Colors.white,
    height: 4,
  },
  tabBar: {
    backgroundColor: Colors.lightOrange,
  },
  tabLabel: {
    fontWeight: "bold",
  },
});
