import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  headerContainer: {
    marginTop: scale(20),
    marginLeft: scale(10),
  },
  headerTitle: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: scale(18),
  },
});
