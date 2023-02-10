import {
  View,
  Text,
  Modal,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, {
  useState,
  useRef,
  MutableRefObject,
  LegacyRef,
  RefObject,
} from "react";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Colors from "../../../../../constants/Colors";
import { CategoriesMockData } from "../../../home/mock";
import { useNavigation } from "@react-navigation/native";

const FloatingSearch = () => {
  const navigation = useNavigation();
  const [filterData, setFilterData] = useState([...CategoriesMockData]);
  const [masterData] = useState([...CategoriesMockData]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [filterSearch, setFilterSearch] = useState("");
  const [textInputFocused, setTextInputFocused] = useState<boolean>(true);
  const searchInputRef = useRef(null);

  const searchChange = () => {
    if (textInputFocused) setIsVisible(false);
    setTextInputFocused(true);
  };

  const handleCancel = () => {
    searchInputRef?.current?.clear();
  };

  const handleRestaurantRedirection = (name: string) => {
    Keyboard.dismiss();
    navigation.navigate("SearchResultScreen", {
      itemName: name,
    });
    setIsVisible(false);
    setTextInputFocused(true);
  };

  const handleSearch = (text: string) => {
    if (text) {
      const searchData = masterData.filter((userSearch) => {
        const itemData = userSearch.name
          ? userSearch.name.toUpperCase()
          : "".toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilterData(searchData);
      setFilterSearch(text);
    } else {
      setFilterData(masterData);
      setFilterSearch(text);
    }
  };

  return (
    <View>
      <TouchableWithoutFeedback
        style={styles.searchContainer}
        onPress={() => setIsVisible(true)}
      >
        <Icon
          name="search"
          type="material"
          size={32}
          iconStyle={styles.iconStyle}
        />
        <Text style={styles.placeholderText}>What are you looking for ?</Text>
      </TouchableWithoutFeedback>
      <Modal animationType="fade" transparent={false} visible={isVisible}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.inputBoxContainer}>
            <Icon
              name={textInputFocused ? "arrow-back" : "search"}
              type="material"
              iconStyle={styles.iconStyle}
              onPress={searchChange}
            />
            <TextInput
              placeholder=""
              autoFocus={false}
              style={styles.searchInput}
              ref={searchInputRef}
              onFocus={() => setTextInputFocused(true)}
              onBlur={() => setTextInputFocused(false)}
              onChangeText={(text) => handleSearch(text)}
              value={filterSearch}
            />
            <Icon
              name={textInputFocused ? "cancel" : ""}
              type="material"
              color={Colors.grey4}
              style={styles.cancelIcon}
              onPress={handleCancel}
            />
          </View>
          <View style={styles.filterDataContainer}>
            <FlatList
              data={filterData}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.filterData}
                    onPress={() => handleRestaurantRedirection(item.name)}
                  >
                    <Text style={styles.filterFoodCategoryName}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default FloatingSearch;
