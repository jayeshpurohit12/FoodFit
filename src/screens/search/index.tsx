import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import React from "react";
import { styles } from "./styles";
import FloatingSearch from "./partials/search-component";
import { CategoriesMockData } from "../home/mock";
import CategoriesHeader from "../home/partials/title-container";
import SearchFooterCategory from "./partials/search-category-footer";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FloatingSearch />
      <View style={styles.searchCategoryContainer}>
        <FlatList
          data={CategoriesMockData}
          numColumns={2}
          horizontal={false}
          ListHeaderComponent={<CategoriesHeader title="Top Categories" />}
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
          ListFooterComponent={<SearchFooterCategory />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
