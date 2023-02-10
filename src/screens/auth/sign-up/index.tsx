import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import Header from "../../../components/signin-header";
import { TextInput } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { Formik, FormikValues } from "formik";
import Colors from "../../../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements/dist/buttons/Button";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CountryFlag from "react-native-country-flag";
import { useHeaderHeight } from "@react-navigation/elements";
import Constants from "expo-constants";

export interface IUserData {
  mobileNumber: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const errorEnum = {
  EMAILEXIST: "auth/email-already-in-use",
  WRONGEMAIL: "auth/invalid-email",
};

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [visibility, setVisibility] = useState(false);
  const headerHeight = useHeaderHeight();
  const initialValue = {
    mobileNumber: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const SignUp = async (userData: IUserData) => {
    const { mobileNumber, email, firstName, lastName, password } = userData;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("userCreated");
    } catch (error) {
      if (error.code === errorEnum.EMAILEXIST)
        Alert.alert("The email address is already in use");
      if (error.code === errorEnum.WRONGEMAIL)
        Alert.alert("The email address is invalid");
      else {
        Alert.alert("Internal server error please try after sometimes..");
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Header title="My Account" />
        <ScrollView keyboardShouldPersistTaps="always">
          <Text style={styles.signUpTitle}>Sign Up</Text>
          <Text style={styles.newUserTitle}>New on FoodFit ?</Text>
          <Formik
            initialValues={initialValue}
            onSubmit={(values) => SignUp(values)}
          >
            {({ handleChange, handleSubmit, values }: FormikValues) => (
              <View>
                <View style={styles.textInputContainer}>
                  <CountryFlag isoCode="in" size={20} style={styles.flagIcon} />
                  <Text style={styles.countryCode}>+91</Text>
                  <TextInput
                    placeholder="Mobile Number"
                    placeholderTextColor={Colors.grey}
                    keyboardType="number-pad"
                    maxLength={10}
                    autoFocus={true}
                    onChangeText={handleChange("mobileNumber")}
                    value={values.mobileNumber}
                  />
                </View>
                <TextInput
                  placeholder="First Name"
                  placeholderTextColor={Colors.grey}
                  style={styles.textInput}
                  onChangeText={handleChange("firstName")}
                  value={values.firstName}
                />
                <TextInput
                  placeholder="Last Name"
                  placeholderTextColor={Colors.grey}
                  style={styles.textInput}
                  onChangeText={handleChange("lastName")}
                  value={values.lastName}
                />
                <View style={styles.textInputContainer}>
                  <Icon
                    name="email"
                    type="community"
                    size={25}
                    color={Colors.grey}
                    style={styles.emailIcon}
                  />

                  <TextInput
                    placeholder="Email"
                    placeholderTextColor={Colors.grey}
                    onChangeText={handleChange("email")}
                    value={values.email}
                  />
                </View>
                <View style={styles.passwordContainer}>
                  <Icon
                    name="lock"
                    type="material"
                    color={Colors.grey}
                    size={25}
                  />
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={Colors.grey}
                    style={styles.passwordInput}
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />
                  {visibility ? (
                    <MaterialIcons
                      name="visibility-off"
                      size={25}
                      color={Colors.grey4}
                      onPress={() => setVisibility(!visibility)}
                    />
                  ) : (
                    <MaterialIcons
                      name="visibility"
                      size={25}
                      color={Colors.grey3}
                      onPress={() => setVisibility(!visibility)}
                    />
                  )}
                </View>
                <Text style={styles.termConditionText}>
                  By creating or logging into an account you are
                </Text>
                <View style={styles.termConditionContainer}>
                  <Text style={styles.termConditionText}>
                    agreeing with our
                  </Text>
                  <Text style={styles.termCondition}> Terms & Condition</Text>
                  <Text style={styles.termConditionText}> and</Text>
                </View>
                <Text style={styles.termConditionText}>PRIVACY STATEMENT</Text>
                <Button
                  title="Create my Account"
                  buttonStyle={styles.signUpButton}
                  titleStyle={styles.signUpButtonTitle}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
          <Text style={styles.orText}>OR</Text>
          <Text style={styles.alreadyAccountTitle}>
            Already have an account with FoodFit ?
          </Text>
          <View style={styles.loginBtnContainer}>
            <Button
              title="Sign In"
              titleStyle={styles.loginAccountTitle}
              buttonStyle={styles.loginAccButton}
              onPress={() => navigation.navigate("LoginScreen")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
