import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { scale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightOrange,
    height: scale(40),
    flexDirection: "row",
    alignItems: "center",
  },
  backBtn: {
    marginHorizontal: scale(10),
  },
  headerHeading: {
    color: Colors.white,
    fontSize: scale(22),
    fontWeight: "bold",
    marginLeft: scale(10),
  },
});
