import { UPDATE_SIGN_IN } from "../../constants/ActionTypes";

export const SignInUpdate = (userToken: string) => {
  return { type: UPDATE_SIGN_IN, userToken };
};
