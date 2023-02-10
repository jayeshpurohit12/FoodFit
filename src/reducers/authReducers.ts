import { UPDATE_SIGN_IN } from "../../constants/ActionTypes";

const initialState = {
  userToken: null,
};

export const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SIGN_IN:
      return {
        ...state,
        userToken: action.userToken,
      };

    default:
      return state;
  }
};
