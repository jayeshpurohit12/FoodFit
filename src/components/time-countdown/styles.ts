import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { scale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.emeraldGreen,
    marginHorizontal: scale(10),
    marginTop: scale(8),
    padding: scale(6),
    borderRadius: scale(5),
  },
  limitedTimeText: {
    color: Colors.white,
    fontSize: scale(15),
    fontWeight: "bold",
    marginRight: scale(10),
  },
});
