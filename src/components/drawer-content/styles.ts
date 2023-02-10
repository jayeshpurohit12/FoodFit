import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { scale, verticalScale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  container: { flex: 1, marginBottom: scale(20) },
  profileContainer: {
    backgroundColor: Colors.lightOrange,
    paddingHorizontal: scale(5),
    paddingLeft: scale(20),
    paddingVertical: verticalScale(10),
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    borderWidth: 1,
  },
  profileHeadingContainer: {
    marginLeft: scale(10),
  },
  personName: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: scale(16),
  },
  personEmail: {
    color: Colors.white,
    marginTop: scale(2),
    fontSize: scale(12),
  },
  favouriteContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: scale(10),
    marginHorizontal: scale(10),
  },
  flexContainer: {
    alignItems: "center",
  },
  numberContainer: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: scale(16),
  },
  flexContainerText: {
    color: Colors.white,
    marginTop: scale(5),
  },
  preferencesContainer: {
    borderTopWidth: 0.2,
    borderTopColor: Colors.grey4,
  },
  preferenceHeading: {
    marginTop: scale(10),
    marginLeft: scale(20),
    fontWeight: "600",
    color: Colors.grey,
    fontSize: scale(14),
  },
  switchThemeContainer: {
    marginTop: scale(15),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: scale(20),
  },
  themeText: {
    fontWeight: "500",
    fontSize: scale(15),
  },
});
