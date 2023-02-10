import { StyleSheet } from "react-native";
import Colors from "../../../../../constants/Colors";
import { scale, verticalScale } from "../../../../../constants/Layout";

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.grey4,
    marginHorizontal: scale(10),
    borderRadius: scale(5),
    paddingVertical: verticalScale(5),
    paddingLeft: scale(10),
  },
  iconStyle: {
    marginRight: scale(5),
  },
  placeholderText: {
    fontSize: scale(15),
  },
  modalContainer: {
    flex: 1,
  },
  inputBoxContainer: {
    borderWidth: 1.5,
    borderColor: Colors.grey4,
    marginHorizontal: scale(10),
    paddingVertical: verticalScale(7),
    paddingHorizontal: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: scale(6),
  },
  searchInput: {
    width: "85%",
  },
  cancelIcon: {
    marginRight: scale(10),
  },
  filterDataContainer: {
    flex: 1,
    marginTop: scale(10),
    marginLeft: scale(12),
  },
  filterData: {
    marginTop: scale(20),
  },
  filterFoodCategoryName: {
    fontWeight: "500",
    fontSize: scale(15),
    color: Colors.grey3,
  },
});
