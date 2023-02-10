import { StyleSheet } from "react-native";
import { scale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: scale(10) },
  searchItemHeading: {
    marginBottom: scale(15),
    fontWeight: "bold",
    fontSize: scale(20),
  },
});
