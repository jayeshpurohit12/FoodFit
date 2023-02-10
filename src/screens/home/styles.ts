import { StyleSheet } from "react-native";
import Colors from "../../../constants/Colors";
import { scale, verticalScale } from "../../../constants/Layout";

export const styles = StyleSheet.create({
  homeContainer: { flex: 1, backgroundColor: Colors.white },
  topHeaderContainer: {
    backgroundColor: Colors.white,
    paddingBottom: 10,
  },
  deliveryPickupContainer: {
    marginTop: scale(15),
    flexDirection: "row",
    justifyContent: "center",
  },
  deliveryContainer: {
    marginRight: scale(30),
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(15),
    borderRadius: scale(12),
  },
  deliveryTitle: {
    alignSelf: "center",
    fontSize: scale(14),
    fontWeight: "600",
  },
  pickUpContainer: {
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(15),
    borderRadius: scale(12),
  },
  filterLocContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: scale(10),
  },
  locationContainer: {
    flexDirection: "row",
    backgroundColor: Colors.grey4,
    borderRadius: scale(20),
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(15),
    alignItems: "center",
    justifyContent: "space-between",
  },
  prevLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: scale(20),
  },
  currentLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(2),
    borderRadius: scale(20),
  },
  locationText: {
    marginLeft: scale(5),
    color: Colors.black,
    fontWeight: "600",
  },
  flexView: { marginBottom: scale(10) },
  categoriesContainer: {
    marginTop: scale(12),
    marginHorizontal: scale(10),
    padding: scale(6),
    borderRadius: scale(15),
  },
  foodCategoriesImages: {
    width: scale(110),
    height: scale(120),
    borderRadius: scale(15),
  },
  categoriesFoodHeading: {
    marginTop: scale(5),
    marginLeft: scale(5),
    fontWeight: "700",
    fontSize: scale(14),
  },
  floatingMapContainer: {
    position: "absolute",
    bottom: scale(10),
    right: scale(10),
    padding: scale(10),
    borderRadius: scale(30),
    backgroundColor: Colors.yellowOrange,
  },
});
