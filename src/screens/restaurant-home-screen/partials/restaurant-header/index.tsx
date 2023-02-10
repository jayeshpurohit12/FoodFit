import { View, ImageBackground, Animated } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "./styles";
import { Icon } from "react-native-elements";
import Colors from "../../../../../constants/Colors";
import { IRasturantHeader } from "../../interfaces";
import { useNavigation } from "@react-navigation/native";

const RestaurantHeader = ({ restaurantImage }: IRasturantHeader) => {
  const navigation = useNavigation();
  const currentValue = new Animated.Value(1);
  const [isHeartFill, setIsHeartFill] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleHeartFill = () => {
    if (!isHeartFill) setIsVisible(true);
    setIsHeartFill(!isHeartFill);
  };

  const heartAnimated = () => {
    Animated.spring(currentValue, {
      toValue: 3,
      friction: 2,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(currentValue, {
        toValue: 2,
        friction: 2,
        useNativeDriver: true,
      }).start(() => setIsVisible(false));
    });
  };

  useEffect(() => {
    if (isHeartFill) heartAnimated();
  }, [isHeartFill]);

  return (
    <View>
      <ImageBackground
        source={{ uri: restaurantImage }}
        style={styles.restaurantImage}
      >
        <View style={styles.headerIconContainer}>
          <Icon
            name="arrow-back"
            color={Colors.black}
            size={28}
            style={styles.headerIcon}
            onPress={() => navigation.goBack()}
          />
          <Icon
            name={isHeartFill ? "favorite" : "favorite-border"}
            size={28}
            style={styles.headerIcon}
            color={Colors.red}
            onPress={handleHeartFill}
          />
        </View>
        <View>
          {isVisible && (
            <Animated.View
              style={{
                transform: [{ scale: currentValue }],
              }}
            >
              <Icon
                name="favorite"
                size={40}
                color={Colors.red}
                type="material"
              />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default RestaurantHeader;
