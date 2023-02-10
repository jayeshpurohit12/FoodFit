import AsyncStorage from "@react-native-async-storage/async-storage";
import { UPDATE_SIGN_IN } from "../../constants/AsyncStorage";

export const SetSigninUpdate = async (userToken: string) => {
  try {
    await AsyncStorage.setItem(UPDATE_SIGN_IN, userToken);
  } catch (err) {
    console.log(err);
  }
};
