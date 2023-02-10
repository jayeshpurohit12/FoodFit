import { StyleSheet } from "react-native";
import Colors from "../../../../constants/Colors";
import { scale, verticalScale } from "../../../../constants/Layout";

export const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
  },
  signinTitle: {
    color: Colors.lightOrange,
    fontSize: scale(20),
    marginTop: scale(10),
    marginLeft: scale(20),
    fontWeight: "bold",
  },
  loginAccountTextContainer: {
    marginTop: scale(10),
    alignItems: "center",
  },
  loginAccountText: {
    // borderWidth: 1,
    fontSize: scale(14),
    color: Colors.grey3,
    fontWeight: "600",
  },
  signInInputContainer: {
    marginTop: scale(20),
  },
  emailInput: {
    borderWidth: 1,
    borderColor: Colors.grey3,
    marginHorizontal: scale(20),
    borderRadius: scale(12),
    marginBottom: scale(20),
    padding: scale(15),
  },
  passwordInputContainer: {
    borderWidth: 1,
    borderColor: Colors.grey3,
    marginHorizontal: scale(20),
    borderRadius: scale(12),
    paddingVertical: verticalScale(12),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  passwordInput: { width: "80%" },
  visibilityIcon: {
    marginRight: scale(5),
  },
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
  forgotPassText: {
    alignSelf: "center",
    textDecorationLine: "underline",
    color: Colors.grey3,
    marginTop: scale(15),
  },
  orTitle: {
    alignSelf: "center",
    marginTop: scale(40),
    fontSize: scale(15),
    fontWeight: "700",
    marginBottom: scale(10),
  },
  socialIcon: {
    borderRadius: scale(12),
    height: scale(50),
    marginBottom: scale(12),
    marginHorizontal: scale(20),
  },
  newUserFoodFitTitle: {
    marginTop: scale(10),
    marginLeft: scale(20),
    fontWeight: "700",
    color: Colors.grey3,
  },
  createBtnContainer: {
    marginTop: scale(15),
    alignItems: "flex-end",
    marginHorizontal: scale(20),
  },
  createAccButton: {
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: Colors.lightOrange,
    paddingHorizontal: scale(20),
  },
  createAccountTitle: {
    color: Colors.lightOrange,
    fontWeight: "bold",
    fontSize: scale(16),
  },
});
