import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { scale, verticalScale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  offerText: {
    alignSelf: "center",
    marginTop: scale(5),
    color: Colors.darkGreen,
    fontWeight: "800",
    fontSize: scale(15),
  },
  restaurantDetailsContainer: {
    flexDirection: "row",
    marginHorizontal: scale(10),
    marginTop: scale(10),
    justifyContent: "space-between",
    marginBottom: scale(5),
  },
  restaurantNameText: {
    fontWeight: "bold",
    fontSize: scale(18),
    marginBottom: scale(3),
  },
  foodTypeText: {
    fontWeight: "400",
    color: Colors.grey3,
    fontSize: scale(14),
  },
  ratLocContainer: {
    flexDirection: "row",
    marginTop: scale(5),
  },
  reviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(5),
  },
  flexTitle: {
    color: Colors.grey,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  foodDeliveryOrderTimeContainer: {
    flexDirection: "row",
  },
  collectTimeContainer: {
    marginRight: scale(20),
    alignItems: "center",
  },
  deliverableHeading: {
    fontWeight: "bold",
    marginBottom: scale(5),
  },
  collectTimeTitle: {
    fontWeight: "bold",
  },
  collectTimeMinTitle: {
    fontWeight: "500",
  },
  deliveryContainer: {
    alignItems: "center",
  },
  deliveryTimeContainer: {
    alignItems: "center",
    backgroundColor: Colors.lightOrange,
    padding: scale(3),
    paddingHorizontal: scale(6),
    borderRadius: scale(30),
  },
  deliveryTimeTitle: {
    color: Colors.white,
    fontWeight: "bold",
  },
  deliveryTimeMinTitle: {
    color: Colors.white,
    fontWeight: "500",
  },
  indicator: {
    backgroundColor: Colors.white,
    height: 3,
  },
  tabBar: {
    backgroundColor: Colors.lightOrange,
  },
  onTab: {
    width: "auto",
    marginHorizontal: scale(10),
  },
  content: {
    width: "100%",
    justifyContent: "space-between",
  },
  tabLabel: {
    fontWeight: "bold",
  },
  viewCartContainer: {
    flexDirection: "row",
    backgroundColor: Colors.lightOrange,
    paddingVertical: verticalScale(10),
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
  },
  viewCartTitle: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: scale(15),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: scale(15),
    backgroundColor: Colors.lightOrange,
    paddingVertical: verticalScale(6),
  },
  menuTitle: {
    marginLeft: scale(15),
    fontWeight: "bold",
    fontSize: scale(17),
  },
});
