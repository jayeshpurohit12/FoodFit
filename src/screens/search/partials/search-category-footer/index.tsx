import {
  View,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
} from "react-native";
import React from "react";
import CategoriesHeader from "../../../home/partials/title-container";
import { styles } from "../../styles";
import { CategoriesMockData } from "../../../home/mock";
import { useNavigation } from "@react-navigation/native";

const SearchFooterCategory = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={CategoriesMockData}
        numColumns={2}
        horizontal={false}
        ListHeaderComponent={() => <CategoriesHeader title="More Categories" />}
        renderItem={({ item }) => {
          return (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("SearchResultScreen", {
                  itemName: item.name,
                })
              }
            >
              <ImageBackground
                source={{ uri: item.imageUri }}
                style={styles.categoryFoodImage}
              >
                <View style={styles.categoryTextContainer}>
                  <Text style={styles.categoryName}>{item.name}</Text>
                </View>
              </ImageBackground>
            </TouchableWithoutFeedback>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default SearchFooterCategory;
