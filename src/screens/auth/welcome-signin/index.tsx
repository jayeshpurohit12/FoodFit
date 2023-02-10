import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import Swiper from "react-native-swiper";
import Images from "../../../../constants/Images";
import { Button } from "react-native-elements/dist/buttons/Button";
import { useNavigation } from "@react-navigation/native";

const SignInWelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.textHeaderContainer}>
        <Text style={styles.headerHeading}>DISCOVER RESTAURANTS</Text>
        <Text style={styles.headerHeading}>IN YOUR AREA</Text>
      </View>
      <Swiper autoplay showsPagination={false} loop>
        <Image source={Images.SliderPizza} style={styles.SliderImage} />
        <Image source={Images.SliderBurger} style={styles.SliderImage} />
        <Image source={Images.SliderItlian} style={styles.SliderImage} />
      </Swiper>
      <View style={styles.loginBtnContainer}>
        <Button
          title="SIGN IN"
          buttonStyle={styles.signInButton}
          titleStyle={styles.signInButtonTitle}
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <Button
          title="Create an account"
          titleStyle={styles.createAccountTitle}
          buttonStyle={styles.createAccButton}
          onPress={() => navigation.navigate("SignUpScreen")}
        />
      </View>
    </View>
  );
};

export default SignInWelcomeScreen;
