import { StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";
import { height, scale, width } from "../../../../constants/Layout";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  textHeaderContainer: {
    position: "absolute",
    marginTop: Constants.statusBarHeight + scale(width / 2),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  headerHeading: {
    fontSize: scale(25),
    fontWeight: "bold",
    color: Colors.red,
  },
  SliderImage: {
    width: "100%",
    height: "100%",
    opacity: 0.2,
  },
  loginBtnContainer: { position: "absolute", top: height / 2, width: "100%" },
  signInButton: {
    backgroundColor: Colors.lightOrange,
    marginTop: scale(30),
    paddingHorizontal: scale(20),
    height: scale(50),
    borderWidth: 1,
    borderRadius: scale(12),
    borderColor: Colors.lightOrange,
    marginHorizontal: scale(20),
  },
  signInButtonTitle: {
    color: Colors.white,
    fontSize: scale(18),
    fontWeight: "bold",
  },
  createAccButton: {
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: Colors.grey3,
    marginTop: scale(20),
    height: scale(50),
    paddingHorizontal: scale(20),
    marginHorizontal: scale(20),
  },
  createAccountTitle: {
    color: Colors.black,
    fontWeight: "bold",
    fontSize: scale(16),
  },
});
