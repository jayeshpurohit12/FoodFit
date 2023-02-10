import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Button, CheckBox, Icon } from "react-native-elements";
import Colors from "../../../constants/Colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MenuDetailedData } from "../home/mock";

export interface IPreferenceParams {
  index: number;
}

export interface ICart {
  name: string;
  price: number;
  checked: boolean;
  id: number;
}

const PreferenceScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { index } = (route.params as IPreferenceParams) || {};
  const { price, details, meal } = MenuDetailedData[index];
  const [preferences, setPreferences] = useState(
    MenuDetailedData[index].preferenceData
  );
  const [counter, setCounter] = useState(MenuDetailedData[index].counter);
  const preferenceTitle = MenuDetailedData[index].preferenceTitle;
  const required = MenuDetailedData[index].required;
  const quantity = MenuDetailedData[index].minimum_quatity;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000",
            }}
            style={styles.headerFoodImage}
          />
          <View style={styles.headerTitleContainer}>
            <Icon
              name="arrow-back"
              color={Colors.white}
              size={30}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.headerTitle}>Choose a Preference</Text>
          </View>
          <View style={styles.foodNameContainer}>
            <Text style={styles.foodName}>{meal}</Text>
            <Text style={styles.description}>
              McFeast features two 100% fresh beef burger patties that are hot
            </Text>
          </View>
          <View style={styles.dividerContainer}>
            <Text style={styles.dividerText}>Choose a meal type</Text>
            <Text style={styles.requiredText}>REQUIRED</Text>
          </View>
          <View style={styles.checkTypeContainer}>
            <View style={styles.checkedContainer}>
              <CheckBox
                center
                checked={true}
                checkedIcon="dot-circle-o"
                checkedColor={Colors.lightOrange}
                size={22}
              />
              <Text style={styles.dotted}>------</Text>
            </View>
            <Text style={styles.price}>₹{price.toFixed(2)}</Text>
          </View>
          <View>
            {preferences.map((preferenceData) => {
              return (
                <View>
                  <View key={preferenceData} style={styles.dividerContainer}>
                    <Text style={styles.dividerText}>
                      {
                        preferenceTitle[
                          MenuDetailedData[index].preferenceData.indexOf(
                            preferenceData
                          )
                        ]
                      }
                    </Text>
                    {required[
                      MenuDetailedData[index].preferenceData.indexOf(
                        preferenceData
                      )
                    ] && (
                      <Text style={styles.requiredText}>
                        {
                          quantity[
                            MenuDetailedData[index].preferenceData.indexOf(
                              preferenceData
                            )
                          ]
                        }{" "}
                        REQUIRED
                      </Text>
                    )}
                  </View>
                  <View>
                    {preferenceData.map((item) => {
                      return (
                        <TouchableOpacity key={item.id}>
                          <View style={styles.checkTypeContainer}>
                            <View style={styles.checkedContainer}>
                              <CheckBox
                                center
                                checked={item.checked}
                                checkedIcon="check-square-o"
                                uncheckedIcon="square-o"
                                checkedColor={Colors.lightOrange}
                                size={23}
                              />
                              <Text style={styles.itemName}>{item.name}</Text>
                            </View>
                            <Text style={styles.price}>
                              ₹{item.price.toFixed(2)}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.addingContainer}>
        <View style={styles.qunatityAddingContainer}>
          <Icon
            name="remove"
            type="material"
            size={28}
            color={Colors.black}
            style={styles.removeIcon}
          />
          <Text style={styles.quantityShow}>1</Text>
          <Icon
            name="add"
            type="material"
            size={28}
            color={Colors.black}
            style={styles.addIcon}
          />
        </View>
        <View style={styles.addToCartContainer}>
          <Text style={styles.addCartText}>Add 1 to Cart ₹80.21</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreferenceScreen;
