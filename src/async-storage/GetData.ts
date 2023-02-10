import AsyncStorage from "@react-native-async-storage/async-storage";
import { UPDATE_SIGN_IN } from "../../constants/AsyncStorage";

export const checkSignIn = async () => {
  try {
    const userAuthToken = await AsyncStorage.getItem(UPDATE_SIGN_IN);
    console.log(userAuthToken, "authToken...");
    return userAuthToken;
  } catch (error) {
    console.log(error);
  }
};
