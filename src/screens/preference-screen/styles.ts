import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { scale, verticalScale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  headerFoodImage: {
    width: "100%",
    height: scale(170),
  },
  headerTitle: {
    color: Colors.white,
    fontSize: scale(30),
    fontWeight: "500",
    marginLeft: scale(20),
  },
  headerTitleContainer: {
    position: "absolute",
    top: scale(10),
    flexDirection: "row",
    left: 5,
    alignItems: "center",
  },
  foodNameContainer: {
    padding: scale(5),
    backgroundColor: Colors.white,
  },
  foodName: {
    fontWeight: "bold",
    fontSize: scale(15),
    marginBottom: scale(5),
  },
  description: {
    fontWeight: "400",
    color: Colors.grey,
    fontSize: scale(14),
  },
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: scale(18),
    paddingBottom: scale(5),
    paddingHorizontal: scale(10),
  },
  dividerText: {
    fontWeight: "bold",
    fontSize: scale(14),
  },
  requiredText: {
    fontWeight: "600",
    color: Colors.grey,
  },
  checkTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingRight: scale(10),
  },
  checkedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dotted: {
    color: Colors.grey,
    letterSpacing: 5,
  },
  price: {
    fontWeight: "bold",
    color: Colors.grey,
  },
  itemName: {
    fontWeight: "bold",
    fontSize: scale(13),
    color: Colors.grey,
    marginLeft: scale(-5),
  },
  addingContainer: {
    backgroundColor: Colors.white,
  },
  qunatityAddingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(15),
  },
  removeIcon: { backgroundColor: Colors.chestnutRed, borderRadius: scale(30) },
  addIcon: { backgroundColor: Colors.emeraldGreen, borderRadius: scale(30) },
  quantityShow: { fontWeight: "700", fontSize: scale(17) },
  addToCartContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(12),
    marginHorizontal: scale(35),
    borderRadius: scale(10),
    backgroundColor: Colors.lightOrange,
    marginVertical: verticalScale(10),
  },
  addCartText: { fontSize: scale(16), fontWeight: "bold" },
});
