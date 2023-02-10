import { legacy_createStore as createStore } from "redux";
import { SignInReducer } from "./src/reducers/authReducers";

export const Store = createStore(SignInReducer);
