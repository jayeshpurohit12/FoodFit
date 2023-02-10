import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import Header from "../../../components/signin-header";
import { styles } from "./styles";
import Colors from "../../../../constants/Colors";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements/dist/buttons/Button";
import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { auth } from "../../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormikValues } from "formik/dist/types";
import { SetSigninUpdate } from "../../../async-storage/SetData";

export interface ILoginData {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const navigation = useNavigation();
  const [visibility, setVisibility] = useState(true);

  const SignIn = async (userData: ILoginData) => {
    const { password, email } = userData;
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        await SetSigninUpdate(user.user.uid);
      }
    } catch {
      Alert.alert("Please check your email and password..");
    }
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <Header title="My Account" />
      <Text style={styles.signinTitle}>Sign In</Text>
      <View style={styles.loginAccountTextContainer}>
        <Text style={styles.loginAccountText}>
          Please enter the email and password
        </Text>
        <Text style={styles.loginAccountText}>register with your account</Text>
      </View>
      <View style={styles.signInInputContainer}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => SignIn(values)}
        >
          {({ handleChange, handleSubmit, values }: FormikValues) => (
            <View>
              <TextInput
                placeholder="Email"
                style={styles.emailInput}
                placeholderTextColor={Colors.grey4}
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                value={values.email}
              />
              <View style={styles.passwordInputContainer}>
                <EvilIcons name="lock" size={28} color={Colors.grey3} />
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={Colors.grey4}
                  style={styles.passwordInput}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                  value={values.password}
                />
                {visibility ? (
                  <MaterialIcons
                    name="visibility-off"
                    size={22}
                    color={Colors.grey4}
                    onPress={() => setVisibility(!visibility)}
                    style={styles.visibilityIcon}
                  />
                ) : (
                  <MaterialIcons
                    name="visibility"
                    size={22}
                    color={Colors.grey3}
                    onPress={() => setVisibility(!visibility)}
                    style={styles.visibilityIcon}
                  />
                )}
              </View>
              <Button
                title="SIGN IN"
                buttonStyle={styles.signInButton}
                titleStyle={styles.signInButtonTitle}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>

        <Text style={styles.forgotPassText}>Forgot Password ?</Text>
        <Text style={styles.orTitle}>OR</Text>
        <SocialIcon
          type="facebook"
          title="Sign In With Facebook"
          button
          style={styles.socialIcon}
        />
        <SocialIcon
          type="google"
          title="Sign In With Google"
          button
          style={styles.socialIcon}
        />
        <Text style={styles.newUserFoodFitTitle}>New on FoodieFit ?</Text>
        <View style={styles.createBtnContainer}>
          <Button
            title="Create an account"
            titleStyle={styles.createAccountTitle}
            buttonStyle={styles.createAccButton}
            onPress={() => navigation.navigate("SignUpScreen")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
