import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import AuthNavigator from "./AuthNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import AppStack from "./AppStack";
import { checkSignIn } from "../src/async-storage/GetData";

const RootNavigation = () => {
  const userAuthToken = checkSignIn();

  return (
    <NavigationContainer linking={LinkingConfiguration}>
      {/* <AuthNavigator /> */}
      <AppStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
